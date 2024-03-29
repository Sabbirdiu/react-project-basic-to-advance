import React,{useState} from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const SingleQuestion = ({title,info}) => {
    const [showInfo, setShowInfo] = useState(false)
    console.log()
    return (
        <article className="question">
            <header>
                <h4>{title}</h4>
                <button className="btn" onClick={()=>setShowInfo(!showInfo)} >
                    {showInfo?<AiOutlineMinus/>:<AiOutlinePlus/>}
                </button>
            </header>
            {showInfo && <p>{info}</p> }
        </article>
    )
}

export default SingleQuestion
