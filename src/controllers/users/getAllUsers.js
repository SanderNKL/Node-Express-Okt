import sequelize from "../../config/database.js";


export const getAllUsers = async (req, res) => {
    const users = await sequelize.query('SELECT * FROM t_Person');
    res.status(200).json({
        data: users
    })
}