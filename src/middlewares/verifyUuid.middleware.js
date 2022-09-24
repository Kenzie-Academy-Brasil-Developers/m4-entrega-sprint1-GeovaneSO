import users from '../database';
const verifyUuidMiddleware = (req, res, next) => {
    const uuid = req.user.sub;

    const id = users.findIndex((user) => user.uuid === uuid);

    if(id === -1){
        throw new Error('User not found');
    }
    next()
}
export default verifyUuidMiddleware;