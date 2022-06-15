import HS from './Document.module.css';
import paper from '../../img/paper.png';
import download from '../../img/download.png';

const documentData = [
    { category: 'Общие документы', name: 'Постановление Правительства Российской Федерации от 20.07.2021 "О внесении изменений в постановление Правительства Российской Федерации от 16 ноября 2015 г. № 1236"', date: '20.07.2021', number: 1226, content: `Скачать (469Кб)` },
    { category: 'Общие документы', name: 'Постановление Правительства Российской Федерации от 20.07.2021 "О внесении изменений в постановление Правительства Российской Федерации от 16 ноября 2015 г. № 1236"', date: '20.07.2021', number: 1226, content: 'Скачать (469Кб)' },
    { category: 'Общие документы', name: 'Постановление Правительства Российской Федерации от 20.07.2021 "О внесении изменений в постановление Правительства Российской Федерации от 16 ноября 2015 г. № 1236"', date: '20.07.2021', number: 1226, content: 'Скачать (469Кб)' },
    { category: 'Общие документы', name: 'Постановление Правительства Российской Федерации от 20.07.2021 "О внесении изменений в постановление Правительства Российской Федерации от 16 ноября 2015 г. № 1236"', date: '20.07.2021', number: 1226, content: 'Скачать (469Кб)' },
    { category: 'Общие документы', name: 'Постановление Правительства Российской Федерации от 20.07.2021 "О внесении изменений в постановление Правительства Российской Федерации от 16 ноября 2015 г. № 1236"', date: '20.07.2021', number: 1226, content: 'Скачать (469Кб)' },
];

const listDocItems = documentData.map(item => {
    return <div className={HS.listDocumentHeaderItem}>
        <div className={HS.docCategoryItem}>{item.category}</div>
        <div className={HS.docNameItem}>{item.name}</div>
        <div className={HS.docDateItem}>{item.date}</div>
        <div className={HS.docNumberItem}>{item.number}</div>
        <div className={HS.docContentItem}>
            <img src={download} alt="" />
            <div className={HS.docContentTextItem}>{item.content}</div>
        </div>
    </div>
})

const ListDocument = () => {
    return (
        <>        
        <div className={HS.listDocumentHeader}>
        <div className={HS.docCategory}>Категория</div>
        <div className={HS.docName}>Наименование</div>
        <div className={HS.docDate}>Дата</div>
        <div className={HS.docNumber}>Номер</div>
        <div className={HS.docContent}>
            <img src={paper} alt="" />
            <div className={HS.docContentText}>Содержание</div>
        </div>
    </div>
    {listDocItems}
    </>

    )
}

export default ListDocument;