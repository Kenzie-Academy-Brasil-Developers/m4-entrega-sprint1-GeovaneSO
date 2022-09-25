import users from '../database';

const verifyAdminMiddleware = (req, res, next) => {
    const isAdm = req.user.isAdm;
    let userAdm = {}

    if(isAdm === true){
       userAdm = users.find((user) => user.isAdm === isAdm);
       next();
    }

    return res.status(401).json({message: 'Unauthorized'});
};
export default verifyAdminMiddleware;