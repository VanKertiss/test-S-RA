import Accordion from './Accordion';
import HS from './Questions.module.css';

const QuestionsAccordion = () => {

    const content1 = '1. Данные для авторизации в личном кабинете' 
    const content2 = '2. Квалифицированный сертификат ключа проверки электронной подписи.' 
    const content3 = '3. Сведения, документы и материалы в соответствии с Методическими рекомендациями.' 
    const content4 = '4. Установить специализированное ПО для подписания документов электронной подписью. Подписание производится с использованием усиленной квалифицированной (отсоединяемой) электронной подписи.'
    const questionsData = [
        { id: 1, title: 'Для подачи заявления необходимо подготовить', text1: content1, text2: content2, text3: content3, text4: content4 },
        { id: 2, title: 'Связь с оператором реестра', text1: content1, text2: content2, text3: content3, text4: content4 },
        { id: 3, title: 'Как подать заявление на включение программного обеспечения в реестр', text1: content1, text2: content2, text3: content3, text4: content4 },
        { id: 4, title: 'Где можно подать заявление', text1: content1, text2: content2, text3: content3, text4: content4 },
        { id: 5, title: 'Как узнать мне причину отказа', text1: content1, text2: content2, text3: content3, text4: content4 },
        { id: 6, title: 'Что делать, если Вам отказали', text1: content1, text2: content2, text3: content3, text4: content4 },
        { id: 7, title: 'Изменение реестревой записи', text1: content1, text2: content2, text3: content3, text4: content4 },
    ];


    const questionsContent = questionsData.map(item => { 
        return <Accordion key={item.id} title = {item.title} text1={item.text1} text2={item.text2} text3={item.text3} text4={item.text4} id={item.id} />
    });

    return (
        <div className={HS.questionAccordionContainer}>
            <div className={HS.accordion}>
                {questionsContent}
            </div>
        </div>
    )
}

export default QuestionsAccordion;