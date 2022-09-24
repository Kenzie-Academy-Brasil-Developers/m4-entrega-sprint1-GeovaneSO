import users from '../../database';
import jwt from "jsonwebtoken";
import * as bcrypt from 'bcryptjs';
import 'dotenv/config'

const userLoginService = async (user) => {
    const {email, password} = user;

    const userFind = users.find((user) => user.email === email);

    if(!userFind) {throw new Error('Invalid email or password')};

    const passwordMatch = await bcrypt.compare(password, userFind.password);

    if(!passwordMatch) {throw new Error('Invalid email or password')};

    const token = jwt.sign({email: email, 
        password: password, 
        uuid: userFind.uuid, 
        isAdm: userFind.isAdm}, '' + process.env.SECRET_KEY, {expiresIn: '24h', subject: userFind.uuid});

    const userLogin = {
        token, userFind
    };
    return  {token: token} ;
}
export default userLoginService;