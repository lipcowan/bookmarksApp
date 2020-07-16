import $ from 'jquery';
import 'normalize.css';
import './index.css';
// not sure why it doesn't like this one? import new from './new.js';
import api from './api';
import store from './store';
import list from './list';

const main = function () {
  // add functions that need to be available upon page loading
  // should run a GET upon loading ... is that the same as render?
};

$(main);