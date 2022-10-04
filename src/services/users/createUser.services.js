import users from '../../database';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcryptjs';
import { createUserSerializer } from '../../serializers';

const createUserService = async (user) => {
    const serializedUser = await createUserSerializer.validate(user, {
        stripUnknown: true,
        abortEarly: false,
    });
    const {email, name, password, isAdm} = user;

    const hashedPassword = await bcrypt.hash(password, 10);

    // if(isAdm){

        serializedUser.createdOn = new Date();
        serializedUser.updatedOn = new Date();
        
        users.push(serializedUser);

        return {
            uuid: serializedUser.uuid, 
            name: serializedUser.name, 
            email: serializedUser.email, 
            isAdm: serializedUser.isAdm,
            createdOn: serializedUser.createdOn,
            updatedOn: serializedUser.updatedOn
        };

    // } else {
        
        serializedUser.createdOn = new Date();
        serializedUser.updatedOn = new Date();

        users.push(serializedUser);

        return {
            uuid: serializedUser.uuid, 
            name: serializedUser.name, 
            email: serializedUser.email,
            isAdm: serializedUser.isAdm,
            createdOn: serializedUser.createdOn,
            updatedOn: serializedUser.updatedOn
        };
    // }
}

export default createUserService;