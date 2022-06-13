import HS from './Footer.module.css';

const FooterInfo = () => {
    return (
        <div className={HS.containerInfo}>
            <div className={HS.infoTitle}>Информация</div>
            <ul className={HS.infoItems}>
                <li className={HS.infoItem}>Реестры</li>
                <li className={HS.infoItem}>Новости</li>
                <li className={HS.infoItem}>Документы</li>
                <li className={HS.infoItem}>Вопросы</li>
            </ul>
        </div>
    )
}

export default FooterInfo;