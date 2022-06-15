import HS from './Footer.module.css';
import FooterAbout from './FooterAbout';
import FooterContact from './FooterContact';
import FooterInfo from './FooterInfo';
import FooterTechnic from './FooterTechnic';

const Footer = () => {
    return (
        <div className={HS.footerSlimContainer}>
        <footer className={HS.footer}>
            <div className={HS.container}>
                <FooterAbout />
                <FooterInfo />
                <FooterTechnic />
                <FooterContact />
            </div>
            <div className={HS.lowerFooter}>© Copyright 2022 — ОАО «РеестрПО». Все права защищены.</div>
        </footer>
        </div>
    )
}

export default Footer;