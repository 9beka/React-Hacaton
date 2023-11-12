import React from 'react';
import s from "./wrapperHoc.module.css"
const HocWrap = ({children}) => {
   

     
     return <div className={s.wrap}><div className=''>{children}</div></div>;
};

export default HocWrap;