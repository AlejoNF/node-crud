//? File imports
const userControllers = require('./users.controllers')

const getAllUsers = (req,res) => {
    const data = userControllers.findAllUsers();
    res.status(200).json(data);
};
const getUserById = (req,res) => {
    const id = req.params.id;
    const data = userControllers.findUserById(id);
    if(data){
        //* Successful case
        res.status(200).json(data);
    } else {
        //! Error
        res.status(404).json({message:'Invalid ID'});
    }
};
const postNewUser = (req,res) => {
    const {first_name, last_name,email,password,birthday} = req.body;
    if(first_name){
        //* Success Case
        const data = userControllers.createNewUser({first_name,last_name,email,password,birthday})
        res.status(201).json(data);
    }else{
        //! Error
        res.status(404)
                .json({message:"Invalid data",
                        fields:{first_name:"string",
                                last_name:"string",
                                email:"string",
                                password:"string",
                                birthday:"DD/MM/YYYY"}})
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    postNewUser
}