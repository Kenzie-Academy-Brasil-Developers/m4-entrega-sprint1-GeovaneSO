import { createTestScheduler } from 'jest';
import users from '../../database';

const updateUserService = (uuid, user) => {
    const {email, name, password, isAdm} = user;

    if(isAdm){
        const userAdm = users.find((user) => user.uuid === uuid);

        const userAdmIndex = users.findIndex(user => user.uuid == uuid);
        
        const userAdmUpdated = {
            uuid, 
            email, 
            name, 
            password: userAdm.password, 
            isAdm: userAdm.isAdm, 
            createdOn: new Date, 
            updatedOn: new Date()
        }
        
        if(userAdmIndex === -1){
            throw new Error('User not found');
        }
        
        users[userAdmIndex] = {...users[userAdmIndex], ...userAdmUpdated};

        return {
            uuid: userAdmUpdated.uuid, 
            name: userAdmUpdated.name, 
            email: userAdmUpdated.email, 
            isAdm: userAdmUpdated.isAdm,
            createdOn: new Date,
            updatedOn: new Date()
        };
    } else {
        const userNotAdm = users.find((user) => user.uuid === uuid);
        
        const userNotAdmIndex = users.findIndex(user => user.uuid === uuid);
        
        const userNotAdmUpdated = {
            uuid,
            email,
            name,
            password: userNotAdm.password,
            isAdm: userNotAdm.isAdm,
            createdOn: new Date, 
            updatedOn: new Date()
        };
        
        if(userNotAdmIndex === -1){
            throw new Error('User not found');
        }
        
        users[userNotAdmIndex] = {...users[userNotAdmIndex], ...userNotAdmUpdated};

        return {
            uuid: userNotAdmUpdated.uuid, 
            name: userNotAdmUpdated.name, 
            email: users[userNotAdmIndex].email, 
            isAdm: userNotAdmUpdated.isAdm,
            createdOn: new Date(),
            updatedOn: new Date()
        };
    };
}

export default updateUserService;