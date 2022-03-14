import { User } from '../types/user.types';


let USER_DATA: User[] = [
    {
        email: "kalaya.chatelain@yahoo.fr",
        firstName: "kalaya",
        lastName : "chatelain"
    },
    {
        email: "laila.chatelain@yahoo.fr",
        firstName: "laila",
        lastName : "chatelain"
    }
];


function removeUser(email: string) {
    USER_DATA = USER_DATA.filter(user => user.email !== email);
}

const getUsers = async (): Promise<User[]> => {
    return USER_DATA;
  };

const createUser = async (user:User): Promise<void> => { 
    USER_DATA.push(user);  
}


export {
    USER_DATA,
    removeUser,
    getUsers,
    createUser
};