import React,{ useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { loadUser } from './state/action';

import './Userinfo.css';

export default function UserInfo () {
   const userinfo = useSelector(state=>state.userinfo.user);

   const dispatch = useDispatch();

   // showModal;

   useEffect(()=>{
      dispatch(loadUser());
   },[]);

   return (
      <div className='userinfo'>
         <div className="img-container">
            <img src={ userinfo.avatar } alt=''/>
         </div>

         <div className="name-container">
            <div>
               <p>姓名:</p>
               {userinfo.username}
            </div>
            <div>
               <p>昵称:</p>
               {userinfo.nickname}
            </div>
            <div>
               <p>密码:</p>
                     ******
               <span>修改</span>
            </div>
         </div>

         <div className="school-container">
            <div>
               <p>学校:</p>
               {userinfo.school}
            </div>
            <div>
               <p>性别:</p>
               {userinfo.gender}
            </div>
         </div>

      </div>
   );
}
