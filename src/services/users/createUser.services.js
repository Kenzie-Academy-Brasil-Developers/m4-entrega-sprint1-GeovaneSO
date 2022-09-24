import users from '../../database';
import { v4 as uuidv4 } from 'uuid';
import * as bcrypt from 'bcryptjs';

const createUserService = async (user) => {
    const {email, name, password, isAdm} = user;

    const hashedPassword = await bcrypt.hash(password, 10);

    if(isAdm){

        const newUserAdm = {
            uuid: uuidv4(),
            name,
            email,
            password: hashedPassword,
            isAdm,
            createdOn: new Date(),
            updatedOn: new Date()
        };
        
        users.push(newUserAdm);

        return {
            uuid: newUserAdm.uuid, 
            name: newUserAdm.name, 
            email: newUserAdm.email, 
            isAdm: newUserAdm.isAdm,
            createdOn: new Date(),
            updatedOn: new Date()
        };

    } else {
        
        const newUserNotAdm = {
            uuid: uuidv4(),
            name,
            email,
            password: hashedPassword,
            isAdm,
            createdOn: new Date(),
            updatedOn: new Date()
        } 
        users.push(newUserNotAdm);

        return {
            uuid: newUserNotAdm.uuid, 
            name: newUserNotAdm.name, 
            email: newUserNotAdm.email, 
            isAdm: newUserNotAdm.isAdm,
            createdOn: new Date(),
            updatedOn: new Date()
        };
    }
}

export default createUserService;