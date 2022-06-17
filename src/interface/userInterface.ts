export interface ILoginData {
    firstName: string;
    password: string;
}

export interface IUserData {
    firstName: string;
    lasName: string;
    fatherName: string;
    country: string;
    city: string;
    phone: string;
    password: string;
}

export interface IUser {
    loginData: ILoginData;
    userDate: IUserData;
    authorized: boolean;
}