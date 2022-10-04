import users from '../../database';
import jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import 'dotenv/config';
import createSessionSerializer from '../../serializers/session.serializer';

const userLoginService = async (user) => {
    const {email, password} = user;

    // no serializedSession está presente o objeto do login feito com email e senha
    // no serializedsession está sendo usado no lugar da desconstrução do objeto user, 
    // no serialized há a validação desse objeto, podendo colocar validações do yup no serializer
    const serializedSession = await createSessionSerializer.validate(user, {
        stripUnknown: true,
        abortEarly: false,
    });


    const userFind = users.find((user) => user.email === serializedSession.email);

    if(!userFind) {throw new Error('Invalid email or password')};

    const passwordMatch = await bcrypt.compare(serializedSession.password, userFind.password);

    if(!passwordMatch) {throw new Error('Invalid email or password')};

    const token = jwt.sign(
        {
            email: serializedSession.email, 
            password: serializedSession.password, 
            isAdm: userFind.isAdm
        }, 
        '' + process.env.SECRET_KEY,
        {
            expiresIn: '24h', 
            subject: userFind.uuid
        }
    );

    return  {token: token};
};
export default userLoginService;