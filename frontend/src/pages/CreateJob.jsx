// src/pages/CreateJob.jsx
import { Container, Button, TextInput, Textarea, Select, Group } from '@mantine/core';
import { DateInput } from '@mantine/dates';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import api from '../api';

function CreateJob() {
  const { register, handleSubmit, setValue, watch } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    await api.post('/jobs', data);
    navigate('/');
  };

  return (
    <Container size="sm" py="xl">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput label="Job Title" {...register('title')} required mb="md" />
        <TextInput label="Company Name" {...register('company')} required mb="md" />
        <TextInput label="Location" {...register('location')} required mb="md" />

        <Select
          label="Job Type"
          data={['Full-time', 'Part-time', 'Contract', 'Internship']}
          value={watch('type') || ''}
          onChange={(value) => setValue('type', value)}
          required
          rightSectionWidth={0}
          rightSection={null}
          mb="md"
        />

        <TextInput label="Salary Range" {...register('salaryRange')} required mb="md" />
        <Textarea label="Job Description" {...register('description')} required mb="md" />
        <Textarea label="Requirements" {...register('requirements')} required mb="md" />
        <Textarea label="Responsibilities" {...register('responsibilities')} required mb="md" />

        <DateInput
          label="Application Deadline"
          value={watch('deadline') || null}
          onChange={(date) => setValue('deadline', date)}
          required
          mb="md"
        />

        <Group >
          <Button type="submit" size="md">
            Publish
          </Button>
        </Group>
      </form>
    </Container>
  );
}

export default CreateJob;
