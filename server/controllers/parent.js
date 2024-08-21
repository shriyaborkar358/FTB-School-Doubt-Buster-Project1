import Parent from "../models/Parent.js";

const postParent = async (req, res) => {
    const { user, student } = req.body;

    const parent = new Parent({
        user,
        student,
    });

    try {
        const savedParent = await parent.save();

        res.json({
            success: true,
            message: "Parent added successfully",
            data: savedParent
        });
    }
    catch (e) {
        res.json({
            success: false,
            message: e.message,
            data: null
        })
    }
};

    export { postParent}
