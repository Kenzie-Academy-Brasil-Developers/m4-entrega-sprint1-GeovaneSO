import 'dotenv/config';

const verifyAuthTokenAdminMiddleware = (req, res, next) => {
    const isAdm = req.user.isAdm;

    if(isAdm){
        let token = req.headers.authorization;

        if(!token) return res.status(401).json({message: 'Missing Authorization Token.'});
        
        token = token.split(' ')[1];
    
        jwt.verify(token, '' + process.env.SECRET_KEY, (error, decoded) => {
            if(error) return res.status(401).json({message: 'Invalid Token.'});
            
            req.user = decoded;
            req.user.token = token;
    
            next();
        });
    };
};
export default verifyAuthTokenAdminMiddleware;