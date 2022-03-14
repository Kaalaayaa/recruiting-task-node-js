import express from 'express';
import { USER_DATA, removeUser, createUser, getUsers } from '../data/amazing-data-store';
import { User } from '../types/user.types';

  const getAllUsers = async (req:any, res:any) => {
    const userList: User[] = await getUsers();
    console.log(`in get ${JSON.stringify(userList)}`)
    try {
        res.status(200).send(
            userList);
      } catch (e) {
        res.status(404).send(e.message);
      }
  };

function getUserByEmail(req: express.Request, res: express.Response, next: express.NextFunction) {
    // TODO: IMPLEMENT ROUTE
    res.send("request sent")
}


const insertUser = async (req:any, res:any) => {
    const user: User = req.body;
    await createUser(user);
    try {
        res.status(200).send({
            message: "Successfully added",
            IsSuccess: true,
            result: ""
        });
      } catch (e) {
        res.status(404).send(e.message);
      }
  };


const deleteUserByEmail = async (req:any, res:any) => {
    const email: string = req.body['email'];
    await removeUser(email);
    try {
        res.status(200).send({
            message: "Successfully added",
            IsSuccess: true,
            result: ""
        });
      } catch (e) {
        res.status(404).send(e.message);
      }
      
  };

export {
    getAllUsers,
    getUserByEmail,
    insertUser,
    deleteUserByEmail
};