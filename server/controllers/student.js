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
const getAllStudents = async (req,res) =>{
    try{
        const allStudent = await Student.find();
    res.status(200).json({
        success:true,
        message:'all students are retrieved successfully',
        data:allStudent
    })
    }
    catch(e){
        res.json({
            success:false,
            message:'students not retrieved',
            data:e.message
        })
    }

}
export {createStudent}