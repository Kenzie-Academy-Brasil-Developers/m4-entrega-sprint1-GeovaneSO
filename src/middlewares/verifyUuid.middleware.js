import users from '../database';

const verifyUuidMiddleware = (req, res, next) => {
    const uuid = req.user.sub;

    const id = users.findIndex((user) => user.uuid === uuid);

    if(id === -1) return res.status(401).json({message: "Unauthorized"});
    
    next();
}
export default verifyUuidMiddleware;