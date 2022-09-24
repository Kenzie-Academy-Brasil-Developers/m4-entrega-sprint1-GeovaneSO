import users from '../../database';

const listUserProfileService = (uuid) => {
    if(uuid){
        const userProfile = users.filter((user) => user.uuid === uuid);
        const {name, uuid, isAdm, createdOn, updatedOn, email} = userProfile[0]

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
}

export default listUserProfileService;