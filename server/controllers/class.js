import Class from '../models/Class.js';

export const postClass = async (req, res) => {
    try {
        const newClass = new Class(req.body);
        await newClass.save();
        res.status(201).json(newClass);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getClassbyId = async (req, res) => {
    try {
        const classData = await Class.findById(req.params.id).populate('teacher students');
        if (!classData) return res.status(404).json({ message: 'Class not found' });
        res.status(200).json(classData);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Similar functions for updateClass, deleteClass
