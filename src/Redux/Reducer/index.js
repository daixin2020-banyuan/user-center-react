import { combineReducers } from 'redux';

/* page */
import menu from '../../Feature/Menu/state/reducer';
import userinfo from '../../Component/UserInfo/state/reducer';
import record from '../../Component/ExchangeLog/state/reducer';

const rootReducer = combineReducers({
   menu,
   userinfo,
   record,
});

export default rootReducer;