import HS from './Header.module.css';
import logo from '../../img/logo.png'
import Search from './Search';
import UserInfo from './UserInfo';

const Header = () => {
    return (
        <div className={HS.headerContainer}>
            <img src={logo} alt="" />
            <Search />
            <UserInfo />
        </div>
    )
}

export default Header;