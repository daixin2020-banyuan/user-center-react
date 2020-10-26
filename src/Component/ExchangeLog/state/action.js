import * as ActionType from '../../../Redux/ActionType';
import { showExchangeLog } from '../../../Request/record';

export function showExchange (){

   return async (dispatch)=>{

      try {

         const { list } = await showExchangeLog();

         dispatch({ type: ActionType.SHOW_EXCHANGE, data: { list } });

      } catch (error) {

         console.log('error');
      }

   };
}