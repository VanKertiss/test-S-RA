import { Link } from 'react-router-dom';
import HS from './Profile.module.css';
import male from '../../img/male.svg';
import bellVector from '../../img/bellVector.svg';
import bookmarkVector from '../../img/bookmarkVector.svg';
import metaVector from '../../img/metaVector.svg';
import closedVector from '../../img/closedVector.svg';
import downloadVector from '../../img/downloadVector.svg';
import exit from '../../img/exit.png';

const ProfileNav = () => {

    return (
        <nav className={HS.navContainer}>
            <Link className={HS.navItem} to={'./profile'} rel="stylesheet" > <img className={HS.maleImg} src={male} alt="" /> Мои данные</Link>
            <Link className={HS.navItem} to={'./profile'} rel="stylesheet" ><img className={HS.maleImg} src={bellVector} alt="" />Уведомления</Link>
            <Link className={HS.navItem} to={'./profile'} rel="stylesheet" ><img className={HS.maleImg} src={bookmarkVector} alt="" />Реестры</Link>
            <Link className={HS.navItem} to={'./profile'} rel="stylesheet" ><img className={HS.maleImg} src={metaVector} alt="" />Метаданные</Link>
            <Link className={HS.navItem} to={'./profile'} rel="stylesheet" ><img className={HS.maleImg} src={closedVector} alt="" />Безопасность</Link>
            <Link className={HS.navItem} to={'./profile'} rel="stylesheet" ><img className={HS.maleImg} src={downloadVector} alt="" />Мои загрузки</Link>
            <Link className={HS.navItem} to={'./profile'} rel="stylesheet" ><img className={HS.maleImg} src={exit} alt="" />Выход</Link>
        </nav>
    )
}

export default ProfileNav;