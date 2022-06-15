import HS from './Registries.module.css';
import arrow from '../../img/arrow-left-right.png';
import { FC } from 'react';
import { Link } from 'react-router-dom';

export type Tdata = {
    id: string;
    name: string;
    code: string;
    class: string;
    date: string;
    address: string;
}

const data = [
    { id: '#1', name: 'Система управления базами данных «Ред База Данных»', code: '02.09', class: 'Системы управления  базами данных', date: '29.01.2016', address: 'Ссылка' },
    { id: '#2', name: 'Система управления базами данных «Ред База Данных»', code: '02.09', class: 'Системы управления  базами данных', date: '29.01.2016', address: 'Ссылка' },
    { id: '#3', name: 'Система управления базами данных «Ред База Данных»', code: '02.09', class: 'Системы управления  базами данных', date: '29.01.2016', address: 'Ссылка' },
    { id: '#4', name: 'Система управления базами данных «Ред База Данных»', code: '02.09', class: 'Системы управления  базами данных', date: '29.01.2016', address: 'Ссылка' },
    { id: '#5', name: 'Система управления базами данных «Ред База Данных»', code: '02.09', class: 'Системы управления  базами данных', date: '29.01.2016', address: 'Ссылка' },
    { id: '#6', name: 'Система управления базами данных «Ред База Данных»', code: '02.09', class: 'Системы управления  базами данных', date: '29.01.2016', address: 'Ссылка' },
    { id: '#7', name: 'Система управления базами данных «Ред База Данных»', code: '02.09', class: 'Системы управления  базами данных', date: '29.01.2016', address: 'Ссылка' },
    { id: '#8', name: 'Система управления базами данных «Ред База Данных»', code: '02.09', class: 'Системы управления  базами данных', date: '29.01.2016', address: 'Ссылка' },
    { id: '#9', name: 'Система управления базами данных «Ред База Данных»', code: '02.09', class: 'Системы управления  базами данных', date: '29.01.2016', address: 'Ссылка' },
    { id: '#10', name: 'Система управления базами данных «Ред База Данных»', code: '02.09', class: 'Системы управления  базами данных', date: '29.01.2016', address: 'Ссылка' },
];



const RegistriesContent: FC = () => {

    const RegistriesContentItems = data.map(item => {
        return <div key={item.id} className={HS.contentHeaderItem}>
            <div className={HS.numberItem}>{item.id}</div>
            <div className={HS.nameItem}>{item.name}</div>
            <div className={HS.codeItem}>{item.code}</div>
            <div className={HS.classItem}>{item.class}</div>
            <div className={HS.dateItem}>{item.date}</div>
            <Link className={HS.addressItem} to={'/'} ><div >{item.address}</div></Link>
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