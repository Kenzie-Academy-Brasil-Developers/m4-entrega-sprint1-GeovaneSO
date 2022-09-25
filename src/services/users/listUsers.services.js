import users from '../../database';

const listUsersService = (isAdm) => {

    if(isAdm){
        return users
    }
    throw new Error('Unauthorized');
}

export default listUsersService;