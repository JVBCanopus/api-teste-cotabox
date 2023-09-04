const UserModel = require('../models/User');

const userController = {
    createUser: async (req, res) => {
        try {
            const user = {
                name: req.body.name,
                lastName: req.body.lastName,
                participation: req.body.participation,
            }

            const response = await UserModel.create(user);

            res.status(201).json({ response, msg: "Usuário criado com sucesso!" });
        } catch (error) {
            console.log('deu arrado ai mane');
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await UserModel.find();

            res.json(users);
        } catch (error) {

        }
    },

    deleteUser: async (req, res) => {
        const { id } = req.params;

        try {
            await UserModel.findByIdAndDelete(id).then(() => {
                res.status(200).json({ msg: "Usário deletado com sucesso!" });
            })
        } catch (error) {
            res.status(400).json({ msg: "Um erro inesperado aconteceu, tente novamente mais tarde!" });
        }
    }
};

module.exports = userController;