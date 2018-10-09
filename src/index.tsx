import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import Hello from './components/Hello';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Hello from './containers/HelloRedux';
import { Provider } from 'react-redux';

import { createStore } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import { EnthusiasmAction } from './actions/index';

//redex 4 requires 4 parameters
const store = createStore<StoreState, EnthusiasmAction, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);

// ReactDOM.render(
//   <Hello name="TypeScript" enthusiasmLevel={10} />,
//   document.getElementById('root') as HTMLElement
// );
registerServiceWorker();
