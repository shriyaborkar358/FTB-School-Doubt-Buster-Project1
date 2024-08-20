import { Schema, model } from 'mongoose'

const teacherSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  class: {
    type: Schema.Types.ObjectId,
    ref: 'Class',
    required: true
  },
  subject: {
    type: String,
    required: true,
  },
  Complaint: {
    type: Schema.Types.ObjectId,
    ref: 'Complaint',
    required: true
  },
}, {
  timestamps: true,
})

const Teacher = model('Teacher', teacherSchema);

export default Teacher