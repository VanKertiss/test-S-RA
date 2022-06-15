import HS from './Main.module.css';
import searchImg from '../../img/search.png';
import promoImg from '../../img/3d-Office.png';

const Promo = () => {
    return (
        <div className={HS.mainBackgroundContainer}>
        <div className={HS.promoContainer}>
            <div className={HS.promoContent}>
                <div className={HS.promoTitle}>РЕЕСТР ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ</div>
                <div className={HS.promoText}>Единый реестр программ для электронных
                    вычислительных машин и баз данных</div>
                <div className={HS.promoText}>Включено ПО в реестр:
                    <span className={HS.promoTextNum}> 13 438 </span>
                    Правообладателей:
                    <span className={HS.promoTextNum}> 4 272 </span>
                </div>
                <div className={HS.promoSearchContainer}>
                    <div className={HS.searchInputContainer}>
                    <img className={HS.searchImg} src={searchImg} alt="" />
                    <input placeholder='Искать реестр...' className={HS.promoSearchInput} type="text" />
                    </div>
                    <button className={HS.promoSearchButton}>Искать</button>
                </div>
            </div>
            <div className={HS.promoImg}>
                <img src={promoImg} alt="" />
            </div>
        </div>
        </div>
    )
}

export default Promo;