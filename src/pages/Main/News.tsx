import HS from './Main.module.css';
import NewsItem from './NewsItem';



const News = () => {
    return (
        <div className={HS.newsContainer}>
            <div className={HS.newsTitle}>Новости реестра</div>
            <div className={HS.newsItemContainer}>
            <NewsItem />
            <button className={HS.newsButton}>Показать все</button>
            </div>
            
        </div>
    )
}

export default News;