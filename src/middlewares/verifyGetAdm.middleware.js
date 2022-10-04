import users from '../database';

const verifyAdminMiddleware = (req, res, next) => {
    const isAdm = req.user.isAdm;
    const id = req.params.uuid;
    const uuidFromToken = req.user.sub;
    const userAdmIndex = users.findIndex(user => user.uuid == id);

    if(isAdm === true){
       next();
    }
    if(id === uuidFromToken && userAdmIndex !== -1){
        next()
    }
    return res.status(401).json({message: 'Unauthorized'});
};
export default verifyAdminMiddleware;