import users from '../../database';

const listUserProfileService = (uuid) => {
    if(uuid){
        const userProfile = users.filter((user) => user.uuid === uuid);
        console.log(uuid)
        return userProfile[0]
    }
}

export default listUserProfileService;