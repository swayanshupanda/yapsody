import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form'
import todos  from './Reducers/todos'
import visibilityFilter  from './Reducers/visibilityFilter'
import reducer from './Reducers/index';

//import rootReducer from './Reducers'

const rootReducer = combineReducers({
    reducer,
    todos,
    visibilityFilter,
    form: formReducer
  })

const store = createStore(rootReducer)

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
    , document.getElementById('root'));


