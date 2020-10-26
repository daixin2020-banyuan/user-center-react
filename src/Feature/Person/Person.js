import React,{ useState  } from 'react';

// component
import UserInfo from '../../Component/UserInfo/UserInfo';
import ExchangeLog from '../../Component/ExchangeLog/ExchangeLog';

import './person.css';

export default function Person () {

   let [ flag , setFlag ] = useState(true);
   return (
      <div>
         <div className="nav-title">
            <div>个人中心</div>
         </div>
         <div className="setting-nav">
            <h1  onClick={ ()=>{
               setFlag(true);
            } }>
        个人信息
               <span className="span1" style={{ display : flag === true ? 'block' : 'none' }}></span>
            </h1>
            <h1 onClick={ ()=>{
               setFlag(false);
            } }>
        兑换记录
               <span className="span2" style={{ display : flag === false ? 'block' : 'none' }}></span>
            </h1>
         </div>

         <div className="setting-per">
            {flag ? <UserInfo/> : <ExchangeLog/>}
         </div>
      </div>
   );

}