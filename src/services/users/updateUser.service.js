import { createTestScheduler } from 'jest';
import users from '../../database';

const updateUserService = (id, isAdm, user) => {
    const {email, name} = user;

    if(isAdm ){
        const userAdm = users.find((user) => user.uuid === id);

        const userAdmIndex = users.findIndex(user => user.uuid == id);
        
        const userAdmUpdated = {
            uuid: userAdm.uuid, 
            email: email, 
            name: name, 
            password: userAdm.password, 
            isAdm: isAdm,
            createdOn: new Date(), 
            updatedOn: new Date()
        };
        
        if(userAdmIndex === -1){
            throw new Error('User not found');
        };
        
        users[userAdmIndex] = {...users[userAdmIndex], ...userAdmUpdated};

        return {
            uuid: userAdmUpdated.uuid, 
            name: userAdmUpdated.name, 
            email: userAdmUpdated.email, 
            isAdm: userAdmUpdated.isAdm,
            createdOn: new Date(),
            updatedOn: new Date()
        };
    } else {
        const userNotAdm = users.find((user) => user.uuid === id);
        
        const userNotAdmIndex = users.findIndex(user => user.uuid === id);
        
        const userNotAdmUpdated = {
            uuid: userNotAdm.uuid,
            email: email,
            name: name,
            password: userNotAdm.password,
            isAdm: isAdm,
            createdOn: new Date(), 
            updatedOn: new Date()
        };
        
        if(userNotAdmIndex === -1){
            throw new Error('User not found');
        };
        
        users[userNotAdmIndex] = {...users[userNotAdmIndex], ...userNotAdmUpdated};

        return {
            uuid: userNotAdmUpdated.uuid, 
            name: userNotAdmUpdated.name, 
            email: userNotAdmUpdated.email, 
            isAdm: userNotAdmUpdated.isAdm,
            createdOn: new Date(),
            updatedOn: new Date()
        };
    };
};
export default updateUserService;