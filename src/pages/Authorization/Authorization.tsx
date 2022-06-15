import HS from './Authorization.module.css';
import arrow from '../../img/arrow-left.png'
import { Link } from 'react-router-dom';
import AuthorizationForm from './authorizationForm';

const Authorization = () => {
    return (
        
        <div className={HS.authContainer}>
            <Link className={HS.backToMain} to={'/'}>
                <img className={HS.arrowImg}  src={arrow} alt="" />
                <div className={HS.arrowText}>Главная</div>
            </Link>
            <AuthorizationForm />
        </div>
    )
}

export default Authorization;