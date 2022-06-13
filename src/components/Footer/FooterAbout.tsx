import HS from './Footer.module.css'; 
import logo from '../../img/logo.png';

const FooterAbout = () => {
    return (
        <div className={HS.aboutContainer}>
        <img className={HS.imgLogo} src={logo} alt='aboutLogo'></img>
        <div className={HS.aboutText}>Открытое акционерное общество 
«Реестр ПО» начало практическую 
деятельность с 1 марта 2014 г</div>
        <div className={HS.aboutTitle}>Разработчик</div>
        <div className={HS.aboutName}>ОАО «Агентство сервисизации и реинжиниринга»</div>
        <div className={HS.aboutAddress}>Минск, улица Клары Цеткин, 24</div>
        </div>
        
    )
}

export default FooterAbout;