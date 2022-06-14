import HS from './Header.module.css';
import calendar from '../../img/Calendar.png'

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
                <select className={HS.userSelect} name="" id="" size={1}>
                    <option className={HS.userOption} value="">Вход в аккаунт</option>
                    <option className={HS.userOption} value=""></option>
                </select>
            </div>
        </div>
    )
}

export default UserInfo;