import {combineReducers} from 'redux';
import search from './search';
import searchInput from './searchInput';

export default combineReducers({
    search,
    searchInput,
});
