import Student from "./../models/Student.js";
const createStudent = async (req,res) => {
    const {user,rollNo,class:classId,div,teacher,parent} = req.body;
   try {
    const newStudent = new Student(
        {
            user,
            rollNo,
            class:classId,
            div,
            teacher,
            parent
    
        }
    )
    await newStudent.save();
    res.status(201).json({
        success:true,
        message:'student created successfully',
        data:newStudent
    })

   }
   catch(e){
    res.json({
        success:false,
        message:'error to fetching the student',
        data:e.message
    })
   }
} 