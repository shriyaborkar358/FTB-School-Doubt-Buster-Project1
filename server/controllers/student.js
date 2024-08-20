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
const getStudentById = async (req,res) =>{
   try{
    const StudentId = await Student.findById(req.params.id)
    if(!StudentId){
        return res.status(404).json({
            success:false,
            message:'student not found',
            data:null
        })
    }
    res.status(200).json({
            success:true,
            message:'student found',
            data:StudentId
    })
   }
   catch(e){
    res.status(500).json({
        success:false,
        message:'error to fetche the student',
        data:e.message
    })
   }
}
export {createStudent,getAllStudents,getStudentById}