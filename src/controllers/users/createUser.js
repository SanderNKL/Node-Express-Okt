import sequelize from "../../config/database.js";


export const createUser = async (req, res) => {
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

    // users.push(user);
    await sequelize.query()

    res.status(201).json({
        message: "Created new user",
        data: user
    })
}