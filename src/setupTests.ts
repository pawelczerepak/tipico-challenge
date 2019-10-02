import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axiosMiddleware from 'redux-axios-middleware';
import client from './apiClient';

configure({ adapter: new Adapter() });

export const mockStore = configureMockStore([thunk, axiosMiddleware(client)]);
