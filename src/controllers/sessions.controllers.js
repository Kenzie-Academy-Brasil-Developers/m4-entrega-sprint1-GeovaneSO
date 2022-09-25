import userLoginService from '../services/sessions/userLogin.services';

const createSessionController = async (req, res) => {
    try{       
        const user = req.body;
        const userLogin = await userLoginService(user);

        return res.status(200).json(userLogin);
        
    } catch(error){
        return res.status(401).json({message: error.message});
    };
};
export default createSessionController;