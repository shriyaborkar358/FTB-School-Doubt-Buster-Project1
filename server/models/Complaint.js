import {Schema, model} from 'mongoose'


const complaintSchema = new Schema({
   
    user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required : true
    },
    parent: {
        type:  Schema.Types.ObjectId,
        ref: "Parent",
        required: true,
      },
      class: {
        type: Schema.Types.ObjectId,
        ref: "Class",
        required : true
      },
      category: {
        type: String,
        enum:['Teaching','Vehicle','Sports','Academic','Stationary','General','Other'],
        default: General,
      },
      description: {
        type: String,
        required : true
      },
      status: {
        type: String,
        enum:['open','in-progress','resolved'],
        default: open,
      },
},{
    timestamps: true,
  })

const Complaint = model('Complaint', complaintSchema);

export default Complaint