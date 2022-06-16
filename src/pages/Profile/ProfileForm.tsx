import HS from './Profile.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/store';
import { TUserData } from './Profile';

const ProfileForm = () => {
    const profileData = useSelector<RootState>((state) => state.user.userData) as TUserData;

    return (
        <form className={HS.formContainer}>
            <div className={HS.firstStageTitle}>Основные данные</div>
            <div className={HS.firsStage}>

                <div className={HS.firstStageInputContainer}>
                    <label htmlFor="firstName">Имя</label>
                    <input placeholder={profileData.firstName} id='firstName' type="text" />
                </div>
                <div className={HS.firstStageInputContainer}>
                    <label htmlFor="lastName">Фамилия</label>
                    <input placeholder={profileData.lasName} id='lastName' type="text" />
                </div>
                <div className={HS.firstStageInputContainer}>
                    <label htmlFor="phaserName">Отчество</label>
                    <input placeholder={profileData.fatherName} id='phaserName' type="text" />
                </div>
                <div className={HS.firstStageInputContainer}>
                    <label htmlFor="country">Страна</label>
                    <select className={HS.firstStageSelect} id='country' >
                        <option value="">{profileData.country}</option>
                    </select>
                </div>
                <div className={HS.firstStageInputContainer}>
                    <label htmlFor="city">Город</label>
                    <select className={HS.firstStageSelect} id='city'>
                        <option className={HS.option} value="">{profileData.city}</option>
                    </select>
                </div>
                <div className={HS.firstStageInputContainer}>
                    <label htmlFor="phone">Телефон</label>
                    <input placeholder={profileData.phone} id='phone' type="text" />
                </div>
            </div>
            <div className={HS.seconStage}>
                <div className={HS.secondStageTitle}>Пароль</div>
                <div className={HS.firstStageInputContainer}>
                    <label htmlFor="firstName">Новый пароль</label>
                    <input value={profileData.password} id='firstName' type="password" />
                </div>
                <div className={HS.firstStageInputContainer}>
                    <label htmlFor="firstName">Подтверждение пароля</label>
                    <input value={profileData.password} id='firstName' type="password" />
                </div>
            </div>
            <button className={HS.formSubmit} >Сохранить</button>
        </form>
    )
}

export default ProfileForm;