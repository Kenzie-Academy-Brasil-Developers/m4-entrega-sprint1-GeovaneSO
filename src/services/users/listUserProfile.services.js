import users from '../../database';

const listUserProfileService = (uuid) => {
    const id = req.decoded.sub;

    if(id){
        const userProfile = users.filter((user) => user.uuid === id);

        return userProfile[0]
    }
}

export default listUserProfileService;