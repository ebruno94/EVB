import inquiryListReducer from './inquiry-list-reducer';
import itemListReducer from './item-list-reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  inquiryList: inquiryListReducer,
  itemList: itemListReducer
});

export default rootReducer;
