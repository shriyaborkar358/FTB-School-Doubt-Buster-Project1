import {Schema, model} from 'mongoose'


const studentSchema = new Schema({
   
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required : true
    },
    class: {
        type: Schema.Types.ObjectId,
        ref: "Class",
        required : true
      },
    parent: {
        type:  Schema.Types.ObjectId,
        ref: "Parent",
        required: true,
      },

},{
    timestamps: true,
  })

const Student = model('Student', studentSchema);

export default Student