import HS from './Document.module.css';
import paper from '../../img/paper.png';
import download from '../../img/download.png';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/store';

export type TdocumentData ={
    id: number;
    category: string;
    name: string;
    date: number;
    number: string;
    content: string;
};

const ListDocument = () => {

const documentData = useSelector<RootState>((state)=> state.document.documentData) as TdocumentData[]

    const listDocItems = documentData.map(({category, name, date, number, content, id}) => {
        return <div key={id} className={HS.listDocumentHeaderItem}>
            <div className={HS.docCategoryItem}>{category}</div>
            <div className={HS.docNameItem}>{name}</div>
            <div className={HS.docDateItem}>{date}</div>
            <div className={HS.docNumberItem}>{number}</div>
            <div className={HS.docContentItem}>
                <img src={download} alt="" />
                <div className={HS.docContentTextItem}>{content}</div>
            </div>
        </div>
    });

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