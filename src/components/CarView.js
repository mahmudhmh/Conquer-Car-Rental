import React , {useState} from 'react'
import "../styles/featuresItem.css"
import Card from '../ui/Card'
import Msg from './Msg'
import Background from './Background'
import  '../styles/setState.css';

function CarView(props) {
    const [MsgIsOpen ,setMsgIsOpen] = useState();

    function DeleteHandler() {//Delete handler = Awel ma yedos 3la zorar el delete ye3ml el function w el gowa el function el howa EFTA7 MESSAGE 
      setMsgIsOpen(true);//EFTAH el MESSAGE
    }
  
    function closeMsgHandler() {
      setMsgIsOpen(false);//2e2fel el Message
    }
   
    return (    
       
        <li className='item'>
            <Card>
            <div className='image'>
                <img src={props.image} alt ={props.title} />
            </div>
            <div className='content'>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>    
            <div className="actions">
           <button onClick={DeleteHandler}>Rent</button>
             </div>  
             {MsgIsOpen && <Background onClick={closeMsgHandler} />}
             {MsgIsOpen && <Msg text='You want to rent this car?' onClose={closeMsgHandler} />} 
            </Card>  
            
        </li>

    )
}

export default CarView ;