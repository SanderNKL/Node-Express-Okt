import { users } from "../store/user.store.js";


export const getUserByEmail = (req, res) => {
    const email = req.params.email;

    const user = users.find(user => user.email === email)

    res.status(200).json({
        data: user
    })
}