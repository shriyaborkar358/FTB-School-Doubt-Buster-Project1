import { Schema, model } from 'mongoose'

const parentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  student: {
    type: Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
}, {
  timestamps: true,
})
const Parent = model('Parent', parentSchema);

export default Parent