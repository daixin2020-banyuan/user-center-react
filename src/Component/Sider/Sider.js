import React  from 'react';
import { useSelector } from 'react-redux';
import { Link }from 'react-router-dom';

import './sider.css';

export default function Sider () {
   const userinfo = useSelector(state=>state.userinfo.user);

   return (
      <div className='sider'>
         <div className="user-dashbord">
            {/* icon */}
            <div>
               <div className="user-avatar">
                  <img className="user-avatar-icon" src={ userinfo.avatar } alt=''/>
               </div>
               <div className="user-info">{userinfo.nickname}</div>
            </div>
            {/* selection */}
            <ul>
               <li>
                  <Link to='/usercenter' >
                     <div className="chos-bg">
                        <p>个人中心</p>
                     </div>
                  </Link>
               </li>

               <li>
                  <Link to='/menu' >
                     <div className="chos-bg">
                        <p>积分商城</p>
                     </div>
                  </Link>
               </li>
            </ul>

            <div
               className="chos-bg">
               <p>退出</p>
            </div>

         </div>
      </div>
   );
}
