import { Schema, model } from 'mongoose'

const complaintSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  parent: {
    type: Schema.Types.ObjectId,
    ref: 'Parent',
    required: true,
  },
  class: {
    type: Schema.Types.ObjectId,
    ref: 'Class',
    required: true
  },
  category: {
    type: String,
    enum: ['teaching', 'vehicle', 'sports', 'academic', 'stationary', 'general', 'other'],
    default: 'general',
  },
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['open', 'in-progress', 'resolved'],
    default: 'open',
  },
}, {
  timestamps: true,
})

const Complaint = model('Complaint', complaintSchema);

export default Complaint