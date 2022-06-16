import HS from './Profile.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/store';
import ProfileNav from './profileNav';
import profileImg from '../../img/profileImg.jpg';
import ProfileForm from './ProfileForm';

export type TUserData = {
    firstName: string;
    lasName: string;
    fatherName: string;
    country: string;
    city: string;
    phone: string;
    password: string;
}

type TUser = {
    userData: TUserData;
    authorized: boolean;
}

const Profile = () => {

    const userData = useSelector<RootState>((state) => state.user) as TUser;

    return (
        <div className={HS.profileContainer}>
            <div className={HS.profileTitle}>Личный кабинет</div>
            <div className={HS.profileMain}>
                < ProfileNav /> 
                <div className={HS.profileContent}>
                    <div className={HS.profileContentTitle}>
                        <img className={HS.profileContentImg} src={profileImg} alt="" />
                        <div className={HS.profileContentText}>Здравствуй, {userData.userData.firstName}!</div>
                    </div>
                    <ProfileForm /> 
                </div>
            </div>
        </div>
    )
}

export default Profile;