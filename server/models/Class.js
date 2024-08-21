
import { Schema, model } from 'mongoose';

const classSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  teacher: {
    type: Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true,
  },
  students: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Student',
      required: true,
    }
  ],
}, {
  timestamps: true,
});

const Class = model('Class', classSchema);

export default Class;
