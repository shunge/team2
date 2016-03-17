function $UrlRouterProvider(r,e){function n(r){var e=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(r.source);return null!=e?e[1].replace(/\\(.)/g,"$1"):""}function t(r,e){return r.replace(/\$(\$|\d{1,2})/,function(r,n){return e["$"===n?0:Number(n)]})}function i(r,e,n){if(!n)return!1;var t=r.invoke(e,e,{$match:n});return isDefined(t)?t:!0}function o(e,n,t,i){function o(r,e,n){return"/"===h?r:e?h.slice(0,-1)+r:n?h.slice(1)+r:r}function f(r){function n(r){var n=r(t,e);return n?(isString(n)&&e.replace().url(n),!0):!1}if(!r||!r.defaultPrevented){var i=d&&e.url()===d;if(d=void 0,i)return!0;var o=u.length,a;for(a=0;o>a;a++)if(n(u[a]))return;c&&n(c)}}function s(){return l=l||n.$on("$locationChangeSuccess",f)}var h=i.baseHref(),v=e.url(),d;return a||s(),{sync:function(){f()},listen:function(){return s()},update:function(r){return r?void(v=e.url()):void(e.url()!==v&&(e.url(v),e.replace()))},push:function(r,n,t){e.url(r.format(n||{})),d=t&&t.$$avoidResync?e.url():void 0,t&&t.replace&&e.replace()},href:function(n,t,i){if(!n.validates(t))return null;var u=r.html5Mode();angular.isObject(u)&&(u=u.enabled);var c=n.format(t);if(i=i||{},u||null===c||(c="#"+r.hashPrefix()+c),c=o(c,u,i.absolute),!i.absolute||!c)return c;var a=!u&&c?"/":"",l=e.port();return l=80===l||443===l?"":":"+l,[e.protocol(),"://",e.host(),l,a,c].join("")}}}var u=[],c=null,a=!1,l;this.rule=function(r){if(!isFunction(r))throw new Error("'rule' must be a function");return u.push(r),this},this.otherwise=function(r){if(isString(r)){var e=r;r=function(){return e}}else if(!isFunction(r))throw new Error("'rule' must be a function");return c=r,this},this.when=function(r,o){var u,c=isString(o);if(isString(r)&&(r=e.compile(r)),!c&&!isFunction(o)&&!isArray(o))throw new Error("invalid 'handler' in when()");var a={matcher:function(r,n){return c&&(u=e.compile(n),n=["$match",function(r){return u.format(r)}]),extend(function(e,t){return i(e,n,r.exec(t.path(),t.search()))},{prefix:isString(r.prefix)?r.prefix:""})},regex:function(r,e){if(r.global||r.sticky)throw new Error("when() RegExp must not be global or sticky");return c&&(u=e,e=["$match",function(r){return t(u,r)}]),extend(function(n,t){return i(n,e,r.exec(t.path()))},{prefix:n(r)})}},l={matcher:e.isMatcher(r),regex:r instanceof RegExp};for(var f in l)if(l[f])return this.rule(a[f](r,o));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(r){void 0===r&&(r=!0),a=r},this.$get=o,o.$inject=["$location","$rootScope","$injector","$browser"]}$UrlRouterProvider.$inject=["$locationProvider","$urlMatcherFactoryProvider"],angular.module("ui.router.router").provider("$urlRouter",$UrlRouterProvider);