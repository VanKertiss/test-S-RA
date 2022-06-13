import HS from './Footer.module.css';

const FooterTechnic = () => {
    return (
        <div className={HS.technicContainer}>
            <div className={HS.technicTitle}>Техническая поддержка</div>
            <div className={HS.technicText}>Ежедневно с 8.00 до 19.00, за исключением выходных 
            (суббота, воскресенье) и праздничных дней.</div>
            <ul className={HS.technicItems}>
                <li className={HS.technicItem}>+375 25 111 22 33 </li>
                <li className={HS.technicItem}>+375 29 222 44 55</li>
                <li className={HS.technicItem}>ReestrPOsupport@mail.ru</li>
            </ul>
        </div>
        
    )
}

export default FooterTechnic;