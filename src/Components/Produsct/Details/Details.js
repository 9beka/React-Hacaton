import React from 'react';
import { useParams ,useNavigate} from "react-router";
import HocWrap from '../../../hoc/HocWrap';
import { Avatar, Card } from "antd";      
import { PRODUCTAPI } from '../../configi/config';
import fetchHoc from '../../../hoc/fetchHoc';
const Details = ({state}) => {
   const {id} = useParams();
  const navigate = useNavigate();
  console.log(state);
   return (
    <HocWrap>
         <Card title="Todos Details" bordered={true}
         cover={
            <img
              alt={state.category}
              src={state.image}
            />
          }>
           <h3>ID: {id}</h3>
         </Card>
    </HocWrap>
   );
};

export default fetchHoc(Details ,PRODUCTAPI ) ; 