import User from './../models/User.js'
import bcrypt from 'bcrypt'

const Signup = async (req, res) => {
    const { fullName, email, password,mobile,address, role } = req.body
    const EncryptPass = await bcrypt.hash(password,10);
    const user = await User.create({
        fullName,
        email,
        mobile,
        address,
        password:EncryptPass,
        role
    })
    try {
        const SavedUser = await user.save()
        res.status(201).json({
            success: true,
            message: 'User created successfully',
            user: SavedUser
        })

    }
    catch(e){
        res.status(500).json({
            success: false,
            message: 'Error creating user',
            error: e.message
            })
    }
        }


export default Signup