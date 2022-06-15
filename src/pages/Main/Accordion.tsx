import { useState } from 'react';
import HS from './Questions.module.css';
import plus from '../../img/plus.png'

const Accordion = ({id, text1,text2, text3, text4, title}:{id:number, text1:string, text2:string, text3:string, text4:string, title:string}) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div key={id} className={HS.accordionItem}>
            <div onClick={() => setIsActive(!(isActive))} className={HS.accordionTitle}>
                <div>{isActive ? <img className={HS.activImg} src={plus} alt="" /> 
                : <img className={HS.notActivImg} src={plus} alt="" />}</div>
                <div className={HS.textTitle}>{title}</div>                
            </div>
            {isActive && 
            <><div className={HS.accordionContent}>{text1}</div><div className={HS.accordionContent}>{text2}</div><div className={HS.accordionContent}>{text3}</div><div className={HS.accordionContent}>{text4}</div></>}
        </div>
    )
}

export default Accordion;