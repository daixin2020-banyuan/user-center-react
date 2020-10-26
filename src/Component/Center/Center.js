import React from 'react';
import _ from 'lodash';
import { Switch ,Route, Redirect } from 'react-router-dom';
import{ routerConfig }from '../../Router/Router';

import './Center.css';

export default function Center () {

   function renderRouter (){

      return _.map(routerConfig,(item)=>{
         return (

            <Route { ...item }  key={ Math.random() }/>
         );
      });
   }

   return (

      <div>
         <div className="center">
            <div className="nav-title">
               {/* { tabFlag ? <div>个人中心</div> : <div>商城</div>} */}
            </div>

            <div className="component">
               <Switch>
                  { renderRouter() }
                  <Redirect from='/*' to='/usercenter'></Redirect>
               </Switch>
            </div>
         </div>
      </div>

   );
}
