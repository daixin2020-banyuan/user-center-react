import * as ActionType from '../../../Redux/ActionType';

const initialState = { user: {} };

export default (state = initialState, payload) => {

   switch (payload.type) {
   case ActionType.GET_USER:

      return {
         ...state,
         user: payload.data
      };
   default:
      return state;
   }
};