import reducer from '../store/reducer/reducer';
import {applyMiddleware, createStore} from 'redux';  //applyMiddleWare is used for asynchronous function or database used in redux( e.g calling api)
import thunk from 'redux-thunk';


const store = createStore(reducer,applyMiddleware(thunk));

export default store;