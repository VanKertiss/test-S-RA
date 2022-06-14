import { Link } from 'react-router-dom';
import HS from './Authorization.module.css';

const AuthorizationForm = () => {
    return (
        <form className={HS.formContainer}>
            <div className={HS.formTitle}>Авторизация</div>
            <label className={HS.formLabel} htmlFor="name">Имя</label>
            <input className={HS.formInput} id='name' type="text" placeholder='Введите имя' />
            <label className={HS.formLabel} htmlFor="pass">Пароль</label>
            <input className={HS.formInput} id='pass' type="password" placeholder='Введите пароль' />
            <div className={HS.checkboxContainer}>
                <input id='checkbox' className={HS.checkbox} type="checkbox" />
                <label htmlFor="checkbox" className={HS.checkboxText}>Запомнить меня на этом компьютере</label>
            </div>
            <button className={HS.formButton}>Вход</button>
            <Link className={HS.formLinkPass} to={'/login'} >Забыли свой пароль?</Link>
            <Link className={HS.formLinkMore} to={'/login'} >Авторизация с использованием ЕС ИФЮЛ</Link>
            <Link className={HS.formLinkMore} to={'/login'} >Авторизация с использованием МСИ</Link>
            <div className={HS.formText}>У вас нет аккаунта?</div>
            <Link className={HS.formLinkPass} to={'/login'} >Нажмите сюда чтобы создать</Link>
        </form>
    )
}

export default AuthorizationForm;