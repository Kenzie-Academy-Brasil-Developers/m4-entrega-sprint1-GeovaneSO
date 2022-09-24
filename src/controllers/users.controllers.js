import createUserService from "../services/users/createUser.services";
import deleteUserService from "../services/users/deleteUser.services";
import updateUserService from "../services/users/updateUser.service";
import listUsersService from '../services/users/listUsers.services';
import listUserProfileService from "../services/users/listUserProfile.services";

const createUserController = async (req, res) => {
    try {
        const user = req.body;
        const createdUser = await createUserService(user)
        return res.status(201).json(createdUser);
    } catch (error){
        return res.status(400).json({message: error.message});

    }
}

const updateUserController = (req, res) => {
    try {
        const uuid = req.params.uuid;

        const user = req.body;

        const updateUser = updateUserService(uuid, user);
        

        return res.status(204).json(updateUser);

    } catch (error){
        return res.status(400).json({message: error.message});
    }
}

const listUsersController = (req, res) => {
    try{    
        const users = listUsersService();
    
        return res.status(200).json(users);

    } catch(error){
        return res.status(401).json({message: error.message});
    }
}

const listUserProfileController = (req, res) => {
    try{
        const uuid = req.params.uuid;
    
        const userProfile = listUserProfileService(uuid);
    
        return res.status(200).json(userProfile);

    } catch(error){
        return res.status(400).json({message: error.message});
    }
}

const deleteUserController = (req, res) => {
    const {uuid} = req.params;

    const deleteUser = deleteUserService(uuid);

    return res.status(200).json(deleteUser);
}

export {createUserController, updateUserController, listUsersController, deleteUserController, listUserProfileController}