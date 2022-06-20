import { Link, useNavigate } from 'react-router-dom';
import HS from './Authorization.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, SubmitHandler } from "react-hook-form";
import { IUserData, ILoginData, IUser } from '../../interface/userInterface';
import { AppDispatch, RootState } from '../../Store/store';
import { asyncGetUserLogin } from '../../Store/reducers/UserSlice';
import { useEffect, useState } from 'react';
import checkTrue from '../../img/check-circle.png';

const AuthorizationForm = () => {
    const [firstName, setFirstName] = useState('0');
    const [password, setPassword] = useState('0');

    const navigate = useNavigate();
    const loginData = useSelector<RootState>((state) => state.user.loginData) as ILoginData;
    const authorized = useSelector<RootState>((state) => state.user) as IUser;
    const dispatch = useDispatch<AppDispatch>();
    const { register, control, handleSubmit, formState: { errors } } = useForm<IUserData>();
    const onSubmit: SubmitHandler<IUserData> = data => {
        console.log(data)
        setFirstName(data.firstName.length < 3 ? '-1' : '1' );
        setPassword(data.password.length < 3 ? '-1' : '1' );
        dispatch(asyncGetUserLogin(data));
    }

    useEffect(() => {
        if (authorized.authorized === true) {
            navigate('/profile');
        }
    })

    return (
        <form className={HS.formContainer} onSubmit={handleSubmit(onSubmit)}>
            <div className={HS.formTitle}>Авторизация</div>
            {firstName === '0' ? <> <label className={HS.formLabel} htmlFor="name">Имя</label>
                <input id='name' placeholder='Введите имя' {...register('firstName')} className={HS.formInput} /></>
                : firstName === '-1' ? <> <label className={HS.formLabelError} htmlFor="name">Имя</label>
                    <input id='name' placeholder='Введите имя' {...register('firstName')} className={HS.formInputError} />
                    <span className={HS.errorSpan}>Неправильное имя</span></>
                    : <> <label className={HS.formLabelTrue} htmlFor="name">Имя</label> <div className={HS.inputContainer} >
                        <input id='name' placeholder='Введите имя' {...register('firstName')} className={HS.formInputTrue} /> <img src={checkTrue} alt="" /></div></>}

            {password === '0' ? <> <label className={HS.formLabel} htmlFor="name">Пароль</label>
                <input id='name' placeholder='Введите пароль' {...register('password')} className={HS.formInput} /></>
                : password === '-1' ? <> <label className={HS.formLabelError} htmlFor="name">Пароль</label>
                    <input id='name' placeholder='Введите пароль' {...register('password')} className={HS.formInputError} />
                    <span className={HS.errorSpan}>Неправильный пароль</span></>
                    : <> <label className={HS.formLabelTrue} htmlFor="name">Пароль</label> <div className={HS.inputContainer} >
                        <input id='name' placeholder='Введите пароль' {...register('password')} className={HS.formInputTrue} /> <img src={checkTrue} alt="" /></div></>}

            <button type='submit' className={HS.formButton}>Вход</button>
            <Link className={HS.formLinkPass} to={'/login'} >Забыли свой пароль?</Link>
            <Link className={HS.formLinkMore} to={'/login'} >Авторизация с использованием ЕС ИФЮЛ</Link>
            <Link className={HS.formLinkMore} to={'/login'} >Авторизация с использованием МСИ</Link>
            <div className={HS.formText}>У вас нет аккаунта?</div>
            <Link className={HS.formLinkPass} to={'/login'} >Нажмите сюда чтобы создать</Link>
        </form>
    )
}

export default AuthorizationForm; 