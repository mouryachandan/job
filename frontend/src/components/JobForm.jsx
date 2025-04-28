// src/components/JobForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { TextInput, Textarea, Select, Button, Group, Box, Title } from '@mantine/core';

const JobForm = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();

  return (
    <Box maw={600} mx="auto" p="lg">
      <Title order={2} align="center" mb="lg">
        Create Job Opening
      </Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label="Job Title"
          placeholder="Enter job title"
          {...register("jobTitle", { required: true })}
          required
          mb="md"
        />
        <TextInput
          label="Company Name"
          placeholder="Enter company name"
          {...register("companyName", { required: true })}
          required
          mb="md"
        />
        <TextInput
          label="Location"
          placeholder="Enter location"
          {...register("location", { required: true })}
          required
          mb="md"
        />
        <Select
          label="Job Type"
          placeholder="Select job type"
          data={["Full-time", "Part-time", "Contract", "Internship"]}
          {...register("jobType", { required: true })}
          required
          mb="md"
        />
        <Group grow mb="md">
          <TextInput
            label="Minimum Salary (₹)"
            placeholder="e.g. 30000"
            {...register("minSalary", { required: true })}
            required
          />
          <TextInput
            label="Maximum Salary (₹)"
            placeholder="e.g. 1200000"
            {...register("maxSalary", { required: true })}
            required
          />
        </Group>
        <TextInput
          label="Application Deadline"
          type="date"
          {...register("deadline", { required: true })}
          required
          mb="md"
        />
        <Textarea
          label="Job Description"
          placeholder="Enter job description"
          minRows={3}
          {...register("description", { required: true })}
          required
          mb="md"
        />
        <Textarea
          label="Requirements"
          placeholder="Enter requirements"
          minRows={3}
          {...register("requirements", { required: true })}
          required
          mb="md"
        />
        <Textarea
          label="Responsibilities"
          placeholder="Enter responsibilities"
          minRows={3}
          {...register("responsibilities", { required: true })}
          required
          mb="md"
        />

        <Button
          type="submit"
          fullWidth
          mt="md"
        >
          Publish
        </Button>
      </form>
    </Box>
  );
};

export default JobForm;
