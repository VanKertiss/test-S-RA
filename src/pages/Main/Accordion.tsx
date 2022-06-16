import { useState } from 'react';
import HS from './Questions.module.css';
import plus from '../../img/plus.png'

const Accordion = ({id, text, title}:{id:number, text:string, title:string}) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div key={id} className={HS.accordionItem}>
            <div onClick={() => setIsActive(!(isActive))} className={HS.accordionTitle}>
                <div>{isActive ? <img className={HS.activImg} src={plus} alt="" /> 
                : <img className={HS.notActivImg} src={plus} alt="" />}</div>
                <div className={HS.textTitle}>{title}</div>                
            </div>
            {isActive && <div className={HS.accordionContent}>{text}</div>}
        </div>
    )
}

export default Accordion;