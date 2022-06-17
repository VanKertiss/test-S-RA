import {  ILoginData } from "../interface/userInterface";


const host = './user.json';

 
   export const getLoginUser = async (loginData: ILoginData) => {
    const json = await fetch(host);
    console.log(json) ;

    const data = await json.json();
    return (data.dataUser.firstName === loginData.firstName) && (data.dataUser.password === loginData.password) 
    ? data : false;
   } 
   
    

 
