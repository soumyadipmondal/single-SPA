import singleSpaAngularJS from 'single-spa-angularjs';
import angular from 'angular';
import './app.module.js';
import  'routes.js';


const domElementGetter = () => document.getElementById('angularTen');

const angularLS = singleSpaAngularJS({
    angular,
    domElementGetter,
    mainAngularModule: 'angular-app',
    uiRouter: true,
    preserveGlobal: false
});

export const bootstrap = [
    angularLS.bootstrap
]

export const mount = [
    angularLS.mount
]

export const unmount = [
    angularLS.unmount
]