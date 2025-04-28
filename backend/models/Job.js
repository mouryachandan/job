import mongoose from 'mongoose'; // <<< सबसे ऊपर यह डालो

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  company: { type: String, required: true },
  location: { type: String, required: true },
  type: { 
    type: String, 
    enum: ['Full-time', 'Part-time', 'Contract', 'Internship'],
    required: true,
  },
  salaryRange: { type: String, required: true },
  description: { type: String, required: true },
  requirements: { type: String, required: true },
  responsibilities: { type: String, required: true },
  deadline: { type: Date, required: true },
}, { timestamps: true });

export default mongoose.model('Job', jobSchema);
