import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './store/reducers';
import App from './components/app/app.jsx';
import {mockProducts} from '../src/mockdata';


const init = () => {
  console.log(`i'm here`);
  const store = createStore(reducer);

  ReactDOM.render(<Provider store={store}>
    <App products={mockProducts}/>
  </Provider>, document.querySelector(`#root`));

}

init();