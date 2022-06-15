import HS from './Main.module.css';
import RegistriesContent from './RegistriesContent';
import pagination from '../../img/pagination.png';

const Registries = () => {
    return (
            <div className={HS.registriesContainer}>
                <div className={HS.registriesTitle}>Реестры</div>
                <RegistriesContent />
                <div className={HS.pagiContainer}>
                <img className={HS.pagination} src={pagination} alt="" />
                </div>
                
            </div>
    )
}

export default Registries;