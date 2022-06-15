import HS from './Document.module.css';
import ListDocument from './ListDocument';

const Document = () => {
    return (
        <div className={HS.documentContainer}>
            <div className={HS.documentTitle}>Документы</div>
            <div className={HS.documentSubtitle}>Всего документов:<span> 5</span></div>
            <ListDocument />
        </div>
    )
}

export default Document;