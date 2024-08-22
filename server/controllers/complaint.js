import Complaint from '../models/Complaint.js';

const postComplaint = async (req, res) => {
    try {
        const { user, parent, class: classId, category, description } = req.body;

        if ( !description) {
            return res.status(400).json({
                success: false,
                message: "Please provide all required fields"
            });
        }

        const newComplaint = new Complaint({
            user,
            parent,
            class: classId,
            category,
            description
        });

        const savedComplaint = await newComplaint.save();

        res.status(201).json({
            success: true,
            message: "Complaint created successfully",
            complaint: savedComplaint
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error creating complaint",
            error: error.message
        });
    }
};

const getComplaints = async (req, res) => {
    try {
        const complaints = await Complaint.find();
        res.status(200).json({
            success: true,
            message: "Complaints fetched successfully",
            complaints
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching complaints",
            error: error.message
        });
    }
}

const getComplaintsByUser = async (req, res) => {
    try {
        const complaints = await Complaint.find({ user: req.params.id }).populate('user', 'fullName email -_id').select('-__v -updatedAt');
        
        if (!complaints || complaints.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No complaints found for this user"
            });
        }

        res.status(200).json({
            success: true,
            message: "User Complaints fetched successfully",
            data: complaints
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        });
    }
}

const getComplaintsByParent = async (req, res) => {
    try {
        const complaints = await Complaint.find({ parent: req.params.id }).populate('user', 'fullName email -_id').select('-__v -updatedAt');

        if (!complaints || complaints.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No complaints found for this parent"
            });
        }
        res.status(200).json({
            success: true,
            message: "Parent Complaints fetched successfully",
            data: complaints
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        });
    }
}

const getComplaintsByClass = async (req, res) => {
    try {
        const complaints = await Complaint.find({ class: req.params.id }).populate('user', 'fullName email -_id').select('-__v -updatedAt -class');
        if (!complaints || complaints.length === 0) {
            return res.status(404).json({
                success: false,
                message: "No complaints found for this class"
            });
        }
        res.status(200).json({
            success: true,
            message: "Class Complaints fetched successfully",
            data: complaints
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        });
    }
}

const getComplaintById = async (req, res) => {
    try {
        const complaint = await Complaint.findById(req.params.id);
        res.status(200).json({
            success: true,
            complaint
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching complaint",
            error: error.message
        })
    }
}

const updateComplaint = async (req, res) => {
    try {
        const complaint = await Complaint.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json({
            success: true,
            message: "Complaint updated successfully",
            complaint
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error updating complaint",
            error: error.message
        })
    }
}

const deleteComplaint = async (req, res) => {
    try {
        await Complaint.findByIdAndDelete(req.params.id);
        res.status(200).json({
            success: true,
            message: "Complaint deleted successfully"
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error deleting complaint",
            error: error.message
        })
    }
}
export { postComplaint ,getComplaints, getComplaintById, updateComplaint, deleteComplaint, getComplaintsByUser, getComplaintsByParent, getComplaintsByClass}



