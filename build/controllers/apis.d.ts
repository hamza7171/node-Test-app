import UserModel from '../model/user';
declare function connect(): Promise<void>;
declare function getAllUser(): Promise<Array<any>>;
declare function getUser(id: string): Promise<Array<any>>;
declare function addUser(mUser: UserModel): Promise<unknown[]>;
declare const _default: {
    connect: typeof connect;
    getAllUser: typeof getAllUser;
    getUser: typeof getUser;
    addUser: typeof addUser;
};
export default _default;
