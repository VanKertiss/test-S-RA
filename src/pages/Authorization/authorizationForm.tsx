import { Link, useNavigate } from 'react-router-dom';
import HS from './Authorization.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, SubmitHandler } from "react-hook-form";
import { IUserData, ILoginData, IUser } from '../../interface/userInterface';
import { AppDispatch, RootState } from '../../Store/store';
import { asyncGetUserLogin } from '../../Store/reducers/UserSlice';
import { useEffect } from 'react';

const AuthorizationForm = () => {
    const navigate = useNavigate();
    const loginData = useSelector<RootState>((state) => state.user.loginData) as ILoginData;
    const authorized = useSelector<RootState>((state) => state.user) as IUser;
    const dispatch = useDispatch<AppDispatch>();
    const { register, handleSubmit, formState: { errors } } = useForm<IUserData>();
    const onSubmit: SubmitHandler<IUserData> = data => {  
            dispatch(asyncGetUserLogin(data));      

    }

    useEffect(() => {
        if(authorized.authorized === true){
            navigate('/profile');
           }
    })

    return (
        <form className={HS.formContainer} onSubmit={handleSubmit(onSubmit)}>
            <div className={HS.formTitle}>Авторизация</div>
            <label className={HS.formLabel} htmlFor="name">Имя</label>
            <input className={HS.formInput} id='name' type="text" placeholder='Введите имя' {...register('firstName', { required : loginData.firstName })} />
            {errors.firstName && <span>Не верное имя</span>}
            <label className={HS.formLabel} htmlFor="pass">Пароль</label>
            <input className={HS.formInput} id='pass' type="password" placeholder='Введите пароль' {...register('password', { required: true })} />
            {errors.password && <span>Это поле не должно быть пустым</span>}
            <div className={HS.checkboxContainer}>
                <input id='checkbox' className={HS.checkbox} type="checkbox" />
                <label htmlFor="checkbox" className={HS.checkboxText}>Запомнить меня на этом компьютере</label>
            </div>
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