import Accordion from './Accordion';
import HS from './Questions.module.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/store';

const QuestionsAccordion = () => {

    type TquestionsData = {
        title: string;
        text: string;
        id: number;
    }

    const questionsData = useSelector<RootState>((state) => state.questions.questionstData) as TquestionsData[]

    const questionsContent = questionsData.map(({title, text, id}) => { 
        return <Accordion key={id} title = {title} text={text} id={id} />
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