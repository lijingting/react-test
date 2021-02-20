import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
import './index.css';
import App from './App';
import { eventEmitter } from '../utils/eventEmitter'

let store = createStore(reducers);
 

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
