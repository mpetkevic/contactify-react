import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { store } from './state';

import './assets/styles/main.scss'

ReactDOM.render(<Provider store={store}>
    <App />
</Provider>, document.querySelector('#root'));
