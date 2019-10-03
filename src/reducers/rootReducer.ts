import {combineReducers} from 'redux';
import search from './search';
import searchInput from './searchInput';
import currentPage from './currentPage';

export default combineReducers({
    search,
    searchInput,
    currentPage,
});
