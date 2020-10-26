import * as ActionType from '../../../Redux/ActionType';
import { getUserInfo } from '../../../Request/user';

export function loadUser (){

   return async (dispatch)=>{

      try {

         const user = await getUserInfo();

         dispatch({ type: ActionType.GET_USER, data: user  });

      } catch (error) {

         console.log(error);
      }

   };
}