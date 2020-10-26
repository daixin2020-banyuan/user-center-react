import * as ActionType from '../../../Redux/ActionType';

const initialState = { list:[] };

export default (state = initialState, payload) => {

   switch (payload.type) {
   case ActionType.SHOW_EXCHANGE:
      console.log(payload);
      return {
         ...state,
         list: payload.data.list
      };
   default:
      return state;
   }
};