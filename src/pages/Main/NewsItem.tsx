import HS from './Main.module.css';
import img1 from '../../img/news/1.jpg';
import img2 from '../../img/news/2.jpg';
import img3 from '../../img/news/3.jpg';
import img4 from '../../img/news/4.jpg';
import img5 from '../../img/news/5.jpg';
import img6 from '../../img/news/6.jpg';
import calendar from '../../img/notes-calendar.png'

const data = [
    {id: 1, title: 'Технические работы 30.05.2022', date: '30.05.2022', text: 'В связи с проведением технических работ 30.05.2022 с 15:00 могут наблюдаться пер...', src: img1},
    {id: 2, title: 'Изменение справочника', date: '28.05.2022', text: 'Обращаем внимание, что с 28.05.2022 внесены изменения в справочник "Дей...', src: img2},
    {id: 3, title: 'Технические работы 26.05.2022', date: '26.05.2022', text: 'В связи с проведением технических работ 26.05.2022 с 21:00 могут наблюдаться пер...', src: img3},
    {id: 4, title: 'Лицензирование в Беларуси', date: '25.05.2022', text: 'Лицензирование затрагивает отдельные виды деятельности в Республике Беларус...', src: img4},
    {id: 5, title: 'Тестирование системы новостей Ед...', date: '20.05.2022', text: 'Тестирование системы новостей ЕРЛ.', src: img5},
    {id: 6, title: 'Обновление версии реестра ПО', date: '18.05.2022', text: 'В новой версии доступны новые функции, которые упрощают использование сервис...', src: img6},
];

const NewsItem = () => {

    const items = data.map(item => {
        return <div key={item.id} className={HS.itemContainer}>
            <img src={item.src} className={HS.itemImg} alt=''></img>
            <div className={HS.itemTitle}>{item.title}</div>
            <div className={HS.itemDate}> <img className={HS.calendarImg} src={calendar} alt="" /> {item.date}</div>
            <div className={HS.itemText}>{item.text}</div>
        </div>
    })

    return (
        <>{items}</>
    )
};

export default NewsItem;