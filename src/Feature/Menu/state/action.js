import * as ActionType from '../../../Redux/ActionType';
import { loadShopList } from '../../../Request/menu';
import  { exchangeShop }  from '../../../Request/exchange';

export function loadShop (){

   return async (dispatch)=>{

      try {

         const { list } = await loadShopList();

         dispatch({ type: ActionType.LOAD_SHOP, data: { list } });

      } catch (error) {

         console.log('error');
      }

   };
}

export function buyShop (id){

   return async (dispatch)=>{

      try {

         await exchangeShop(id);

         dispatch({ type: ActionType.BUY_SHOP });

      } catch (error) {

         console.log('error');
      }

   };
}
