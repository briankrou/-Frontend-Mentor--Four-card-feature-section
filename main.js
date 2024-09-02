import './style.css';
import App from './app';

const app = App();

document.querySelector('#app').innerHTML = app.element();
