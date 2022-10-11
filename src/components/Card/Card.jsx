import React,{ useState }  from 'react'
import dot from '../../assets/images/dot.png'
import './Card.css'
import { useDispatch } from 'react-redux'
import {openModal} from '../../redux/ModalSlice'
import { setDetails } from '../../redux/DetailsSlice'
import {useSelector} from 'react-redux'
import moment from 'moment'
function Card({data}) {
    
const{title,date,content,thumbnail,author,id}=data;
const[show,setShow]=useState(false);
const sss =useSelector((store)=>{return store.details})
const dispatch=useDispatch();
  const showDetails=()=>{
    setShow(true)
  }
  const hideDetails=()=>{
    setShow(false);
    
  }

  const showDetailsDisplayBox=()=>{
    dispatch(openModal());
    dispatch(setDetails(id));
  
  }

  return (
    <div className="card-container" onMouseOver={showDetails} onMouseLeave={hideDetails} onClick={showDetailsDisplayBox}>
      <div className="card-image-container">
        <img src={thumbnail.small} className="card-img" />
         <h3 className='learnmore' id={id}>Learn More</h3> 
      </div>
      <div className="card-content">
        <div className='dots'>
          <img src={dot} alt="" />
        </div>
        <h3 className='title'>{title}</h3>
        <p className="description">{content}</p>
        <div className="card-footer">
          <div>
            <span className='description'>{author.name} - </span>
            <span className='description'>{author.role}</span>
          </div>
          <div>
            <span className='description'>{moment(date).format("MMM Do YYYY")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card