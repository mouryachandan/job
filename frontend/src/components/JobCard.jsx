import React from 'react';

function JobCard({ job }) {
  return (
    <div style={{
      background: '#fff',
      borderRadius: '16px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      padding: '20px',
      marginBottom: '20px',
      position: 'relative',
      height: '100%',
    }}>
      {/* Time Badge */}
      <div style={{
        position: 'absolute',
        top: '15px',
        right: '15px',
        background: '#e6f0ff',
        color: '#007bff',
        padding: '5px 10px',
        borderRadius: '10px',
        fontSize: '12px',
        fontWeight: 'bold'
      }}>
        24h Ago
      </div>

      {/* Logo */}
      <div style={{
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        overflow: 'hidden',
        marginBottom: '15px'
      }}>
        <img src={job.logoUrl} alt={job.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* Title */}
      <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '10px' }}>
        {job.title}
      </h3>

      {/* Details */}
      <div style={{ fontSize: '14px', color: '#666', marginBottom: '10px' }}>
        <span style={{ marginRight: '10px' }}>👤 {job.experience}</span>
        <span style={{ marginRight: '10px' }}>📍 {job.location}</span>
        <span>💰 {job.salary}</span>
      </div>

      {/* Description */}
      <p style={{ fontSize: '14px', color: '#777', marginBottom: '20px' }}>
        {job.description}
      </p>

      {/* Apply Button */}
      <button style={{
        backgroundColor: '#0d6efd',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontWeight: '600',
        fontSize: '14px',
        width: '100%'
      }}>
        Apply Now
      </button>
    </div>
  );
}

export default JobCard;
