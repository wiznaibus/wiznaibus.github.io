(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[815],{2228:function(e,n,r){"use strict";function t(){return(t=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function o(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function i(e,n){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,n){if(e){if("string"===typeof e)return a(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,n):void 0}}(e))||n&&e&&"number"===typeof e.length){r&&(e=r);var t=0;return function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(r=e[Symbol.iterator]()).next.bind(r)}r.d(n,{r:function(){return x}});var u,c,l,s=r(7294);function f(e,n){if(e in n){for(var r=n[e],t=arguments.length,o=new Array(t>2?t-2:0),a=2;a<t;a++)o[a-2]=arguments[a];return"function"===typeof r?r.apply(void 0,o):r}var i=new Error('Tried to handle "'+e+'" but there is no handler defined. Only defined handlers are: '+Object.keys(n).map((function(e){return'"'+e+'"'})).join(", ")+".");throw Error.captureStackTrace&&Error.captureStackTrace(i,f),i}function p(e){var n=e.props,r=e.slot,a=e.defaultTag,i=e.features,l=e.visible,s=void 0===l||l,p=e.name;if(s)return d(n,r,a,p);var v=null!=i?i:u.None;if(v&u.Static){var m=n.static,b=void 0!==m&&m,g=o(n,["static"]);if(b)return d(g,r,a,p)}if(v&u.RenderStrategy){var h,y=n.unmount,w=void 0===y||y,E=o(n,["unmount"]);return f(w?c.Unmount:c.Hidden,((h={})[c.Unmount]=function(){return null},h[c.Hidden]=function(){return d(t({},E,{hidden:!0,style:{display:"none"}}),r,a,p)},h))}return d(n,r,a,p)}function d(e,n,r,t){var a;void 0===n&&(n={});var u=v(e,["unmount","static"]),c=u.as,l=void 0===c?r:c,f=u.children,p=u.refName,d=void 0===p?"ref":p,m=o(u,["as","children","refName"]),b=void 0!==e.ref?((a={})[d]=e.ref,a):{},g="function"===typeof f?f(n):f;if(m.className&&"function"===typeof m.className&&(m.className=m.className(n)),l===s.Fragment&&Object.keys(m).length>0){if(!(0,s.isValidElement)(g)||Array.isArray(g)&&g.length>1)throw new Error(['Passing props on "Fragment"!',"","The current component <"+t+' /> is rendering a "Fragment".',"However we need to passthrough the following props:",Object.keys(m).map((function(e){return"  - "+e})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - "+e})).join("\n")].join("\n"));return(0,s.cloneElement)(g,Object.assign({},function(e,n,r){for(var t,o=Object.assign({},e),a=function(){var r,a=t.value;void 0!==e[a]&&void 0!==n[a]&&Object.assign(o,((r={})[a]=function(r){r.defaultPrevented||e[a](r),r.defaultPrevented||n[a](r)},r))},u=i(r);!(t=u()).done;)a();return o}(function(e){var n=Object.assign({},e);for(var r in n)void 0===n[r]&&delete n[r];return n}(v(m,["ref"])),g.props,["onClick"]),b))}return(0,s.createElement)(l,Object.assign({},v(m,["ref"]),l!==s.Fragment&&b),g)}function v(e,n){void 0===n&&(n=[]);for(var r,t=Object.assign({},e),o=i(n);!(r=o()).done;){var a=r.value;a in t&&delete t[a]}return t}function m(e){for(var n,r,t=e.parentElement,o=null;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(o=t),t=t.parentElement;var a=null!=(n=""===(null==(r=t)?void 0:r.getAttribute("disabled")))&&n;return(!a||!function(e){if(!e)return!1;var n=e.previousElementSibling;for(;null!==n;){if(n instanceof HTMLLegendElement)return!1;n=n.previousElementSibling}return!0}(o))&&a}!function(e){e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static"}(u||(u={})),function(e){e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden"}(c||(c={})),function(e){e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab"}(l||(l={}));var b="undefined"!==typeof window?s.useLayoutEffect:s.useEffect,g={serverHandoffComplete:!1};var h=0;function y(){return++h}function w(){var e=function(){var e=(0,s.useState)(g.serverHandoffComplete),n=e[0],r=e[1];return(0,s.useEffect)((function(){!0!==n&&r(!0)}),[n]),(0,s.useEffect)((function(){!1===g.serverHandoffComplete&&(g.serverHandoffComplete=!0)}),[]),n}(),n=(0,s.useState)(e?y:null),r=n[0],t=n[1];return b((function(){null===r&&t(y())}),[r]),null!=r?""+r:void 0}var E=(0,s.createContext)(null);function O(){var e=(0,s.useContext)(E);if(null===e){var n=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,O),n}return e}var k=(0,s.createContext)(null);function S(){var e=(0,s.useContext)(k);if(null===e){var n=new Error("You used a <Label /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(n,S),n}return e}var j=(0,s.createContext)(null);j.displayName="GroupContext";var C=s.Fragment;function x(e){var n=e.checked,r=e.onChange,a=o(e,["checked","onChange"]),i="headlessui-switch-"+w(),u=(0,s.useContext)(j),c=(0,s.useCallback)((function(){return r(!n)}),[r,n]),f=(0,s.useCallback)((function(e){if(m(e.currentTarget))return e.preventDefault();e.preventDefault(),c()}),[c]),d=(0,s.useCallback)((function(e){e.key!==l.Tab&&e.preventDefault(),e.key===l.Space&&c()}),[c]),v=(0,s.useCallback)((function(e){return e.preventDefault()}),[]),b=(0,s.useMemo)((function(){return{checked:n}}),[n]),g={id:i,ref:null===u?void 0:u.setSwitch,role:"switch",tabIndex:0,"aria-checked":n,"aria-labelledby":null==u?void 0:u.labelledby,"aria-describedby":null==u?void 0:u.describedby,onClick:f,onKeyUp:d,onKeyPress:v};return"button"===a.as&&Object.assign(g,{type:"button"}),p({props:t({},a,g),slot:b,defaultTag:"button",name:"Switch"})}x.Group=function(e){var n=(0,s.useState)(null),r=n[0],t=n[1],o=function(){var e=(0,s.useState)([]),n=e[0],r=e[1];return[n.length>0?n.join(" "):void 0,(0,s.useMemo)((function(){return function(e){var n=(0,s.useCallback)((function(e){return r((function(n){return[].concat(n,[e])})),function(){return r((function(n){var r=n.slice(),t=r.indexOf(e);return-1!==t&&r.splice(t,1),r}))}}),[]),t=(0,s.useMemo)((function(){return{register:n,slot:e.slot,name:e.name,props:e.props}}),[n,e.slot,e.name,e.props]);return s.createElement(k.Provider,{value:t},e.children)}}),[r])]}(),a=o[0],i=o[1],u=function(){var e=(0,s.useState)([]),n=e[0],r=e[1];return[n.length>0?n.join(" "):void 0,(0,s.useMemo)((function(){return function(e){var n=(0,s.useCallback)((function(e){return r((function(n){return[].concat(n,[e])})),function(){return r((function(n){var r=n.slice(),t=r.indexOf(e);return-1!==t&&r.splice(t,1),r}))}}),[]),t=(0,s.useMemo)((function(){return{register:n,slot:e.slot,name:e.name,props:e.props}}),[n,e.slot,e.name,e.props]);return s.createElement(E.Provider,{value:t},e.children)}}),[r])]}(),c=u[0],l=u[1],f=(0,s.useMemo)((function(){return{switch:r,setSwitch:t,labelledby:a,describedby:c}}),[r,t,a,c]);return s.createElement(l,{name:"Switch.Description"},s.createElement(i,{name:"Switch.Label",props:{onClick:function(){r&&(r.click(),r.focus({preventScroll:!0}))}}},s.createElement(j.Provider,{value:f},p({props:e,defaultTag:C,name:"Switch.Group"}))))},x.Label=function(e){var n=e.passive,r=void 0!==n&&n,a=o(e,["passive"]),i=S(),u="headlessui-label-"+w();b((function(){return i.register(u)}),[u,i.register]);var c=t({},i.props,{id:u}),l=t({},a,c);return r&&delete l.onClick,p({props:l,slot:i.slot||{},defaultTag:"label",name:i.name||"Label"})},x.Description=function(e){var n=O(),r="headlessui-description-"+w();b((function(){return n.register(r)}),[r,n.register]);var o=e,a=t({},n.props,{id:r});return p({props:t({},o,a),slot:n.slot||{},defaultTag:"p",name:n.name||"Description"})}},1163:function(e,n,r){e.exports=r(4651)},8268:function(e,n,r){"use strict";var t=r(7294),o=r(5697),a=r.n(o);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=(0,t.forwardRef)((function(e,n){var r=e.color,o=void 0===r?"currentColor":r,a=e.size,c=void 0===a?24:a,l=u(e,["color","size"]);return t.createElement("svg",i({ref:n,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),t.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),t.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"}))}));c.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},c.displayName="X",n.Z=c},9244:function(e,n,r){"use strict";var t=r(7294),o=r(5697),a=r.n(o);function i(){return(i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e}).apply(this,arguments)}function u(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=(0,t.forwardRef)((function(e,n){var r=e.color,o=void 0===r?"currentColor":r,a=e.size,c=void 0===a?24:a,l=u(e,["color","size"]);return t.createElement("svg",i({ref:n,xmlns:"http://www.w3.org/2000/svg",width:c,height:c,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),t.createElement("path",{d:"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"}),t.createElement("polygon",{points:"9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"}))}));c.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},c.displayName="Youtube",n.Z=c}}]);