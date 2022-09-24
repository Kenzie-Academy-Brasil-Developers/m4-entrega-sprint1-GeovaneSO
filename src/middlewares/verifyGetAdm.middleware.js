import users from '../database';

const verifyAdminMiddleware = (req, res, next) => {
    const isAdm = req.user.isAdm;
    
    const userAdm = users.find((user) => user.isAdm === isAdm);

    if(!userAdm) return res.status(401).json({message: "Unauthorized"});
   
    next();
}
export default verifyAdminMiddleware;