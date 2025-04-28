// src/components/JobFilter.jsx
import { TextInput, Select, RangeSlider, Box } from '@mantine/core';

function JobFilter() {
  return (
    <Box mb="xl">
      <TextInput placeholder="Search by Job Title" mb="md" />
      <TextInput placeholder="Preferred Location" mb="md" />

      <Select
        placeholder="Select Job Type"
        data={['Full-time', 'Part-time', 'Contract', 'Internship']}
        mb="md"
        rightSectionWidth={0}
        rightSection={null}  
        // Black icon hata diya
      />

      <RangeSlider
        labelAlwaysOn
        min={0}
        max={100}
        step={5}
        defaultValue={[10, 80]}
        mb="md"
      />
    </Box>
  );
}

export default JobFilter;
