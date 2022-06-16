import HS from './Registries.module.css';
import arrow from '../../img/arrow-left-right.png';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/store';

export type Tdata = {
    num: string;
    name: string;
    code: string;
    clas: string;
    date: string;
    link: string;
}

const RegistriesContent: FC = () => {

    const registersData = useSelector<RootState>((state)=> state.registers.registersData) as Tdata[]

    const RegistriesContentItems = registersData.map(({num, name, code, clas, date, link}) => {
        return <div key={num} className={HS.contentHeaderItem}>
            <div className={HS.numberItem}>{num}</div>
            <div className={HS.nameItem}>{name}</div>
            <div className={HS.codeItem}>{code}</div>
            <div className={HS.classItem}>{clas}</div>
            <div className={HS.dateItem}>{date}</div>
            <Link className={HS.addressItem} to={'/'} ><div >{link}</div></Link>
        </div>
    })

    return (
        <div className="container">
            <div className={HS.contentHeader}>
                <div className={HS.number}>
                    <img className={HS.numberImg} src={arrow} alt=''></img>
                    <div className={HS.numberText}>Регистрационный номер</div>
                </div>
                <div className={HS.name}>
                    <img className={HS.nameImg} src={arrow} alt=''></img>
                    <div className={HS.nameText}>Наименование программного обеспечения</div>
                </div>
                <div className={HS.code}>Код класса</div>
                <div className={HS.class}>Класс программного обеспечения</div>
                <div className={HS.date}>Дата регистрации</div>
                <div className={HS.address}>Адрес сайта</div>
            </div>
            {RegistriesContentItems}
        </div>
    )
}

export default RegistriesContent;