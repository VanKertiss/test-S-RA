import HS from './Header.module.css';
import calendar from '../../img/Calendar.png'

const UserInfo = () => {
    return (
        <div className={HS.userContainer}>
            <img className={HS.calendarImg} src={calendar} alt="" />
        </div>
    )
}

export default UserInfo;