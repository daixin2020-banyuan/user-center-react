import React,{ useEffect ,useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import logo from '../../Assest/img5.png';
import { Alert } from 'antd';
import 'antd/dist/antd.css';

// import 'element-theme-default';

import _ from 'lodash';
import './menu.css';

import { loadShop } from './state/action';
import { loadUser } from '../../Component/UserInfo/state/action';
import { buyShop } from './state/action';

export default function Menu () {

   const menu = useSelector(state=>state.menu);

   const userinfo = useSelector(state=>state.userinfo.user);

   const [ visible, setVisible ] = useState(false);

   const dispatch = useDispatch();

   const handleClose = (b) => {
      setVisible(b);
   };

   useEffect(() => {
      dispatch(loadShop());
   }, []);

   useEffect(() => {
      dispatch(loadUser());
   }, [  ]);

   function renderMenu (){

      return _.map(menu.list,(item)=>{
         return (
            <div className="item-list" key={ Math.random() }>
               <div >
                  <div className="item-container">
                     <img src={ item.image } alt="" />
                     <p> {item.name} </p>
                     <div className="priceDetail">
                        <span style={{ display :'flex' }}>
                           <img src={ logo } alt="" />
                           <p> 积分{item.price} </p>
                        </span>
                        <button onClick={ ()=>{
                           dispatch(buyShop(item._id));
                           dispatch(loadUser());
                           handleClose(true);
                        } }>兑换</button>
                     </div>
                  </div>
               </div>
            </div>

         );});
   }

   return (

      <div className="mall">
         <div className="nav-title">
            <div>积分商城</div>
         </div>
         <div className="point-container">
            <p>当前积分: {userinfo.integration} </p>
         </div>
         <p className='shop-list'>商品列表</p>
         <div className="goods-container">
            { renderMenu() }
         </div>
         {visible ? (
            <Alert
               message="兑换成功 "
               type="success"
               showIcon
               closable
               className='alert-style'
            />
         ) : null}

      </div>

   );
}
