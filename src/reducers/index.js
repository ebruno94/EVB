import inquiryListReducer from './inquiry-list-reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  inquiryList: inquiryListReducer
});

export default rootReducer;
