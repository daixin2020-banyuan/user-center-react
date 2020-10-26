import React,{ useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { showExchange } from './state/action';
import _ from 'lodash';
import Moment from 'moment';

import './exchangelog.css';

export default function ExchangeLog () {
   const record = useSelector(state=>state.record);

   const dispatch = useDispatch();

   useEffect(()=>{
      dispatch(showExchange());
   },[ dispatch ]);

   function renderExchange (){
      return _.map(record.list,(item)=>{
         return (
            <div className="ex-list-style" key={ Math.random() } >
               <p> {item.name}</p>
               <p> { Moment(item.exchangeDate).format('YYYY-MM-DD hh:mm:ss')} </p>
            </div>
         );
      });
   }

   return (
      <div className="exchange-container">
         {renderExchange()}
      </div>
   );
}
