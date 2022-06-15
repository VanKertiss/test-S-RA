import HS from './Questions.module.css';
import QuestionsAccordion from './QuestionsAccordion';

const Questions = () => {
    return (
        <div className={HS.questionsContainer}>
            <div className={HS.questionsTitle}>Вопрос-ответ</div>
            <QuestionsAccordion />
        </div>
    )
}

export default Questions;