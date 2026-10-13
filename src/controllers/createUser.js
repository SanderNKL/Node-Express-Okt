import { users } from "../store/user.store.js";


export const createUser = (req, res) => {
    const { email, username } = req.body;

    if (!email || !username) {
        return res.status(400).json({
            message: "Invalid email or username"
        })
    }

    const user = {
        email,
        username
    }

    users.push(user);

    res.status(201).json({
        message: "Created new user",
        data: user
    })
}