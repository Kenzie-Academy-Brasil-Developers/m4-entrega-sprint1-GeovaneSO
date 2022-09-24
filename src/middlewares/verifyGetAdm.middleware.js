import users from '../database';

const verifyAdminMiddleware = (req, res, next) => {
    const userReq = req.body;

    const userAdm = users.find((user) => user.isAdm === userReq.isAdm);

    if(!userAdm.isAdm) return res.status(401).json({message: "Missing Authorization Token."});
   
    jwt.verify(userAdm, process.env.SECRET_KEY, (error, decoded) => {
        if(error){
            return response.status(401).json({
                message: 'Unauthorized'
            })
        }

        request.user = {
            uuid: decoded.sub

        }
        next();
    })
}

export default verifyAdminMiddleware;