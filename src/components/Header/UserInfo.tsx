import HS from './Header.module.css';
import calendar from '../../img/Calendar.png'
import { Link } from 'react-router-dom';
import arrowDown from '../../img/upper arrow.png'

const UserInfo = () => {
    return (
        <div className={HS.userContainer}>
            <img className={HS.calendarImg} src={calendar} alt="" />
            <div className={HS.notification}>
                <div className={HS.notificationNum}>9+</div>
            </div>
            <div className={HS.separator}></div>
            <div className={HS.userInfo}>
                <div className={HS.userPhoto}></div>
                <Link className={HS.linkLogin} rel="stylesheet" to="/login" > Вход в аккаунт <img className={HS.arrowDown} src={arrowDown} alt="" /> </Link>
            </div>
        </div>
    )
}

export default UserInfo;