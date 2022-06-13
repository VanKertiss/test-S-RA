import HS from './Footer.module.css';

const FooterContact = () => {
    return (
        <div className={HS.contactContainer}>
            <div className={HS.contactTitle}>Контакты</div>
            <ul className={HS.contactItems}>
                <li className={HS.contactItem}>+375 33 112 22 45</li>
                <li className={HS.contactItem}>+375 29 222 44 88</li>
                <li className={HS.contactItem}>ReesrtPO@mail.ru</li>
                <li className={HS.contactItem}>220004 г. Минск, ул. Карла Маркса, 38</li>
                <li className={HS.contactItemLink}>Связаться с поддержкой</li>
            </ul>
        </div>
    )
}

export default FooterContact;