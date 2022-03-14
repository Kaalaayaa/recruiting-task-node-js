import * as express from 'express';
import * as validator from 'express-validator';
import { getAllUsers, getUserByEmail, insertUser, deleteUserByEmail} from "../middleware/user.middleware"
import userValidators from '../validators';

const userController = express.Router({mergeParams: true});


/**
 * TODO: DEFINE ROUTES
 */


// TODO: GET ALL USERS              (GET http:${host}:${port}/user)
// ...
userController.get("/", getAllUsers);

// TODO: GET USER BY EMAIL          (GET http:${host}:${port}/user/${email})
// ...

userController.get("/:email", getUserByEmail)
// TODO: INSERT USER                (POST http:${host}:${port}/user)
// ...

userController.post("/", userValidators, insertUser)
// TODO: DELETE USER BY EMAIL       (DELETE http:${host}:${port}/user/${email})
// ...

userController.delete("/:email", deleteUserByEmail)
/*
 * END TODO
 */


export {
    userController
};