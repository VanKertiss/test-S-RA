import News from './News';
import Promo from './Promo';
import Registries from './Registries';
import Document from './Document';
import Questions from './Questions';

const Main = () => {
    return (
        <div >
            <Promo />
            <Registries />
            <News />
            <Document />
            <Questions />
        </div>

    )
}

export default Main;