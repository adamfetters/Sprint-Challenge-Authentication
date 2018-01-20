import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Jokes from './components/Jokes/Joke';
import { Provider } from 'react-redux';
import { createStore , applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { 
  BrowserRouter as Router,
  Route
  } from 'react-router-dom';
  import reducers from './reducers';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Route exact path='/' component={App} />
        <Route path='/signup' component={SignUp} />
        <Route path='/signin' component={SignIn} />
        <Route path='/jokes' component={Jokes} />
      </div>
    </Router>
  </Provider>,
 document.getElementById('root'));

