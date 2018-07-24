webpackJsonp([23043917606177],{106:function(e,t,n){"use strict";function o(e){return e}function r(e,t,n){function r(e,t){var n=y.hasOwnProperty(t)?y[t]:null;D.hasOwnProperty(t)&&u("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&u("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function a(e,n){if(n){u("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),u(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var o=e.prototype,a=o.__reactAutoBindPairs;n.hasOwnProperty(c)&&v.mixins(e,n.mixins);for(var i in n)if(n.hasOwnProperty(i)&&i!==c){var s=n[i],l=o.hasOwnProperty(i);if(r(l,i),v.hasOwnProperty(i))v[i](e,s);else{var p=y.hasOwnProperty(i),m="function"==typeof s,h=m&&!p&&!l&&n.autobind!==!1;if(h)a.push(i,s),o[i]=s;else if(l){var E=y[i];u(p&&("DEFINE_MANY_MERGED"===E||"DEFINE_MANY"===E),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",E,i),"DEFINE_MANY_MERGED"===E?o[i]=d(o[i],s):"DEFINE_MANY"===E&&(o[i]=f(o[i],s))}else o[i]=s}}}else;}function l(e,t){if(t)for(var n in t){var o=t[n];if(t.hasOwnProperty(n)){var r=n in v;u(!r,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var a=n in e;if(a){var i=N.hasOwnProperty(n)?N[n]:null;return u("DEFINE_MANY_MERGED"===i,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(e[n]=d(e[n],o))}e[n]=o}}}function p(e,t){u(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(u(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function d(e,t){return function(){var n=e.apply(this,arguments),o=t.apply(this,arguments);if(null==n)return o;if(null==o)return n;var r={};return p(r,n),p(r,o),r}}function f(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function m(e,t){var n=t.bind(e);return n}function h(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var o=t[n],r=t[n+1];e[o]=m(e,r)}}function E(e){var t=o(function(e,o,r){this.__reactAutoBindPairs.length&&h(this),this.props=e,this.context=o,this.refs=s,this.updater=r||n,this.state=null;var a=this.getInitialState?this.getInitialState():null;u("object"==typeof a&&!Array.isArray(a),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=a});t.prototype=new M,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],g.forEach(a.bind(null,t)),a(t,_),a(t,e),a(t,x),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),u(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var r in y)t.prototype[r]||(t.prototype[r]=null);return t}var g=[],y={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},N={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},v={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)a(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=i({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=i({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=d(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=i({},e.propTypes,t)},statics:function(e,t){l(e,t)},autobind:function(){}},_={componentDidMount:function(){this.__isMounted=!0}},x={componentWillUnmount:function(){this.__isMounted=!1}},D={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},M=function(){};return i(M.prototype,e.prototype,D),E}var a,i=n(21),s=n(73),u=n(54),c="mixins";a={},e.exports=r},107:function(e,t,n){"use strict";var o=n(1),r=n(106);if("undefined"==typeof o)throw Error("create-react-class could not find the React object. If you are using script tags, make sure that React is being loaded before create-react-class.");var a=(new o.Component).updater;e.exports=r(o.Component,o.isValidElement,a)},119:function(e,t){var n={words:["ad","adipisicing","aliqua","aliquip","amet","anim","aute","cillum","commodo","consectetur","consequat","culpa","cupidatat","deserunt","do","dolor","dolore","duis","ea","eiusmod","elit","enim","esse","est","et","eu","ex","excepteur","exercitation","fugiat","id","in","incididunt","ipsum","irure","labore","laboris","laborum","Lorem","magna","minim","mollit","nisi","non","nostrud","nulla","occaecat","officia","pariatur","proident","qui","quis","reprehenderit","sint","sit","sunt","tempor","ullamco","ut","velit","veniam","voluptate"]};e.exports=n},120:function(e,t,n){function o(){function t(e,t){return Math.floor(E()*(t-e+1)+e)}function o(e){return e[t(0,e.length-1)]}function a(e,n,r){for(var a="",i={min:0,max:t(n,r)};i.min<i.max;)a+=" "+o(e),i.min++;return a.length&&(a=a.slice(1),a=a.charAt(0).toUpperCase()+a.slice(1)),a}function i(e,n,o,r,i){for(var s="",u={min:0,max:t(n,o)};u.min<u.max;)s+=". "+a(e,r,i),u.min++;return s.length&&(s=s.slice(2),s+="."),s}var s=arguments.length?arguments[0]:{},u=s.count||1,c=s.units||"sentences",l=s.sentenceLowerBound||5,p=s.sentenceUpperBound||15,d=s.paragraphLowerBound||3,f=s.paragraphUpperBound||7,m=s.format||"plain",h=s.words||n(119).words,E=s.random||Math.random,g=s.suffix;if(!g){var y="undefined"!=typeof e&&e.exports,N="undefined"!=typeof product&&"ReactNative"===product.navigator;g=!N&&y?n(131).EOL:"\n"}c=r(c.toLowerCase());var v,_,x={min:0,max:u},D="";for("html"===m&&(v="<p>",_="</p>");x.min<x.max;){switch(c.toLowerCase()){case"words":D+=" "+o(h);break;case"sentences":D+=". "+a(h,l,p);break;case"paragraphs":var M=i(h,d,f,l,p);"html"===m?(M=v+M+_,x.min<x.max-1&&(M+=g)):x.min<x.max-1&&(M+=g+g),D+=M}x.min++}if(D.length){var w=0;0===D.indexOf(". ")?w=2:0!==D.indexOf(".")&&0!==D.indexOf(" ")||(w=1),D=D.slice(w),"sentences"===c&&(D+=".")}return D}function r(e){return e.indexOf("s",e.length-1)===-1?e+"s":e}e.exports=o},124:function(e,t,n){"use strict";var o=n(1),r=n(107),a=n(120),i=n(129),s=n(21),u=r({displayName:"Lorem",getDefaultProps:function(){return{mode:"paragraphs",format:"html",count:5,seed:0,ordered:!1}},render:function(){var e=s({},this.props,{units:"paragraphs",random:i});i.seed(e.seed);var t,n=a(e);return"list"===e.mode?(n=n.replace(/<p>(.*?)<\/p>/g,"<li>$1</li>"),t=e.ordered?o.createFactory("ol"):o.createFactory("ul")):t=o.createFactory("div"),e.dangerouslySetInnerHTML={__html:n},delete e.mode,delete e.ordered,delete e.random,delete e.seed,delete e.count,delete e.units,delete e.sentenceLowerBound,delete e.sentenceUpperBound,delete e.paragraphLowerBound,delete e.paragraphUpperBound,delete e.format,delete e.words,delete e.suffix,t(e)}});e.exports=u},129:function(e,t){function n(){o>=9007199254740992&&(o=0);var e=1e4*Math.sin(.8765111159592828+o++);return e-Math.floor(e)}var o=(new Date).getTime();n.seed=function(e){o=e},e.exports=n},131:function(e,t){t.endianness=function(){return"LE"},t.hostname=function(){return"undefined"!=typeof location?location.hostname:""},t.loadavg=function(){return[]},t.uptime=function(){return 0},t.freemem=function(){return Number.MAX_VALUE},t.totalmem=function(){return Number.MAX_VALUE},t.cpus=function(){return[]},t.type=function(){return"Browser"},t.release=function(){return"undefined"!=typeof navigator?navigator.appVersion:""},t.networkInterfaces=t.getNetworkInterfaces=function(){return{}},t.arch=function(){return"javascript"},t.platform=function(){return"browser"},t.tmpdir=t.tmpDir=function(){return"/tmp"},t.EOL="\n"},195:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(4),a=o(r),i=n(1),s=o(i),u=n(124),c=o(u),l=n(23),p=o(l),d=n(17),f=o(d),m=n(22),h=o(m),E=n(28),g=o(E),y=n(30),N=o(y),v=n(29),_=o(v),x=n(16),D=function(e){var t={url:"https://github.com/greglobinski/react-custom-share",button:x.ShareButtonRectangle,buttons:[{network:"Twitter",icon:p.default},{network:"Facebook",icon:f.default},{network:"GooglePlus",icon:h.default},{network:"Email",icon:g.default},{network:"Pinterest",icon:N.default,media:"https://raw.githubusercontent.com/greglobinski/react-custom-share/master/static/react-custom-share.gif"},{network:"Linkedin",icon:_.default}],text:"Give it a try - react-custom-share component",longtext:"Social sharing buttons for React. Use one of the build-in themes or create a custom one from the scratch.",header:"Share it"};return s.default.createElement(s.default.Fragment,null,s.default.createElement("h2",{className:"jsx-1512431588"},"ShareBlockStandard - live demo"),s.default.createElement("div",{className:"jsx-1512431588 article"},s.default.createElement("h1",{className:"jsx-1512431588"},"This is a title of the page"),s.default.createElement(c.default,{count:"7"}),s.default.createElement(x.ShareBlockStandard,t)),s.default.createElement(a.default,{styleId:"1512431588",css:["div.jsx-1512431588{max-width:600px;margin:100px auto;}","h2.jsx-1512431588{color:#666;font-size:1.2em;margin:3em 0;text-align:center;}","h1.jsx-1512431588{font-size:3em;margin:0 0 1em;}",".article.jsx-1512431588 p{margin:1em 0;}"]}))};t.default=D,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-live-share-block-standard-js-e80eb1b6ee5d3bef1761.js.map