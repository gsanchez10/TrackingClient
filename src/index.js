import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Paquetes from './components/paquetes';
import DetallePaquete from './components/detallePaquete';
import Signin from './components/auth/signin';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  	<Router history={browserHistory}>
  		<Route path="/" component={App}>
  			<Route path="/signin" component={Signin} />
  			<Route path="/paquetes" component={Paquetes}/>
  			<Route path="/paquetes/:paqId" component={DetallePaquete}/>
  		</Route>
  	</Router>
  </Provider>
  , document.querySelector('.app'));
