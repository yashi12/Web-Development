import './registrationForm.css';
import './frontend.packages.js';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import registrationConfig from './registration.config.js';
import FormController from './registration.controller.js';
import compareTo from './registrationDirectives/confirmPassword.directive.js';
import enrollNum from './registrationDirectives/enrollNumber.directive.js';
import checkFileSize from './registrationDirectives/fileSize.directive.js';
import overwriteEmail from './registrationDirectives/overwriteEmail.directive.js';
import password from './registrationDirectives/password.directive.js';
import contenteditable from './registrationDirectives/contentEditable.directive.js';


const moduleApp = angular
    .module('registrationForm', [uiRouter])
    .config(registrationConfig)
    .controller('FormController',FormController)
    .directive('compareTo',compareTo)
    .directive('enrollNum',enrollNum)
    .directive('checkFileSize',checkFileSize)
    .directive('overwriteEmail',overwriteEmail)
    .directive('password',password)
    .directive('contenteditable',contenteditable);






export default moduleApp;