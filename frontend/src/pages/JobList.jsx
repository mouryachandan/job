import { useEffect, useState } from 'react';
import { Container, Grid, Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import JobCard from '../components/JobCard';
import JobFilter from '../components/JobFilter';
import api from '../api';

function JobList() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await api.get('/jobs');
      setJobs(res.data);
    };
    fetchJobs();
  }, []);

  return (
    <Container>
      <Button onClick={() => navigate('/create')} mb="lg">
        Create Job
      </Button>
      <JobFilter />
      <Grid>
        {jobs.map((job) => (
          <Grid.Col span={4} key={job._id}>
            <JobCard job={job} />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}

export default JobList;
