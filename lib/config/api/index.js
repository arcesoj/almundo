Object.defineProperty(exports,"__esModule",{value:true});exports.fetchApi=undefined;var _fetchival=require('fetchival');var _fetchival2=_interopRequireDefault(_fetchival);var _config=require('./config');var _config2=_interopRequireDefault(_config);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var fetchApi=exports.fetchApi=function fetchApi(endPoint){var payload=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var method=arguments.length>2&&arguments[2]!==undefined?arguments[2]:'get';return(0,_fetchival2.default)(''+_config2.default.url+endPoint,{headers:{}})[method.toLowerCase()](payload).catch(function(e){if(e.response&&e.response.json){e.response.json().then(function(json){if(json)throw json;throw e;});}else{throw e;}});};