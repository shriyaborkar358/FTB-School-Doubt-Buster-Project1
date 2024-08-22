import Student from "./../models/Student.js";

const createStudent = async (req, res) => {
    const { user, rollNo, class: classId, div, teacher, parent } = req.body;
    try {
        let newStudent = new Student({
            user,
            rollNo,
            class: classId,
            div,
            teacher,
            parent
        });
        newStudent = await newStudent.save();
        await newStudent.populate('user').populate('parent').populate('teacher').populate('class').execPopulate();

        res.status(201).json({
            success: true,
            message: 'Student created successfully',
            data: newStudent
        });

    } catch (e) {
        res.status(500).json({
            success: false,
            message: 'Error creating the student',
            data: e.message
        });
    }
};

const getAllStudents = async (req, res) => {
    try {
        const allStudents = await Student.find().populate('user').populate('parent').populate('teacher').populate('class');
        res.status(200).json({
            success: true,
            message: 'All students are retrieved successfully',
            data: allStudents
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            message: 'Students not retrieved',
            data: e.message
        });
    }
};

const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id).populate('user').populate('parent').populate('teacher').populate('class');
        if (!student) {
            return res.status(404).json({
                success: false,
                message: 'Student not found',
                data: null
            });
        }
        res.status(200).json({
            success: true,
            message: 'Student found',
            data: student
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            message: 'Error fetching the student',
            data: e.message
        });
    }
};

const putUpdateStudent = async (req, res) => {
    const { user, rollNo, class: classId, div, teacher, parent } = req.body;

    try {
        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            {
                user,
                rollNo,
                class: classId,
                div,
                teacher,
                parent,
            },
            { new: true } // Return the updated document
        ).populate('user').populate('parent').populate('teacher').populate('class');

        if (!updatedStudent) {
            return res.status(404).json({
                success: false,
                data: null,
                message: "Student not found",
            });
        }

        res.status(200).json({
            success: true,
            data: updatedStudent,
            message: "Student updated successfully",
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            data: null,
            message: e.message,
        });
    }
};

const deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedStudent = await Student.findByIdAndDelete(id);

        if (!deletedStudent) {
            return res.status(404).json({
                success: false,
                message: "Student not found",
                data: null
            });
        }

        res.json({
            success: true,
            message: `Student deleted successfully`,
            data: null
        });
    } catch (e) {
        res.status(500).json({
            success: false,
            message: 'Error deleting the student',
            data: e.message
        });
    }
};

export { createStudent, getAllStudents, getStudentById, putUpdateStudent, deleteStudent };
