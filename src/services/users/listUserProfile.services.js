import users from '../../database';

const listUserProfileService = (id) => {
    if(id){
        const userProfile = users.filter((user) => user.uuid === id);
        const {name, uuid, isAdm, createdOn, updatedOn, email} = userProfile[0];

        return {
            name: name, 
            uuid: uuid, 
            isAdm: isAdm, 
            createdOn: createdOn, 
            updatedOn: updatedOn, 
            email: email
        }
    }
    throw new Error('User not found');
};
export default listUserProfileService;