import { users } from "../../store/user.store.js";


export const deleteUser = (req, res) => {
    const email = req.params.email;

    const index = users.findIndex(user => user.email === email);
    if (index < 0) {
        return res.status(404).json({
            message: "User not found."
        });
    }

    users.splice(index, 1)
    return res.status(200).json({
        message: "User deleted successfully"
    })
}