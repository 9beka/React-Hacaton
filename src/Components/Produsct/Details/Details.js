import React from 'react';
import { useParams ,useNavigate} from "react-router";
import HocWrap from '../../../hoc/HocWrap';
import { Avatar, Card } from "antd";      
import { PRODUCTAPI } from '../../configi/config';
import fetchHoc from '../../../hoc/fetchHoc';
import s from "./Detail.module.css"
const Details = ({state}) => {
   const {id} = useParams();
  const navigate = useNavigate();
  const handleRowClick = (id) => {
    navigate(`/details/${+id+1}`);
  };
  const handlePrev = (id) => {
    navigate(`/details/${+id-1}`);
  };
   return (
    <HocWrap>
     <div className={s.deatails__wrapper}>
           <Card title={state.title} bordered={true}
           cover={
              <img className={s.detail__img}
                alt={state.category}
                src={state.image}
              />
            }>
             <h3>Price: {`${state.price}$`}</h3>
             <h3>ID: {id}</h3>
     <div className={s.deatails__btn__wrapper}>
               <button onClick={()=>{navigate("/")}}>BACK</button>
          <button onClick={()=>handlePrev(id)}>PREV</button>
          <button onClick={()=>handleRowClick(id)}>NEXT</button>
     </div>
           </Card>
 
     </div>
    </HocWrap>
   );
};

export default fetchHoc(Details ,PRODUCTAPI ) ; 