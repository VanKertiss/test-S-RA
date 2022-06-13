import HS from './Header.module.css';

const Search = () => {
    return (
        <div className={HS.searchContainer}>
            <button className={HS.searchButton}></button>
            <input className={HS.searchInput} type="text" placeholder='Поиск' />
        </div>
    )
}

export default Search;