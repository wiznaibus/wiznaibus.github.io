(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8178:function(e,t,n){"use strict";n.d(t,{f:function(){return a},S:function(){return c}});var r=n(5893),o=n(7294),a=(0,o.createContext)(),c=function(e){var t=e.children,n=(0,o.useState)(!1),c={filtered:n[0],setFiltered:n[1]};return(0,r.jsx)(a.Provider,{value:c,children:t})}},2167:function(e,t,n){"use strict";var r=n(3848);t.default=void 0;var o,a=(o=n(7294))&&o.__esModule?o:{default:o},c=n(1063),i=n(4651),l=n(7426);var u={};function s(e,t,n,r){if(e&&c.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=i.useRouter(),f=a.default.useMemo((function(){var t=c.resolveHref(o,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?c.resolveHref(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,b=e.shallow,x=e.scroll,y=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var g=(t=a.default.Children.only(v))&&"object"===typeof t&&t.ref,j=l.useIntersection({rootMargin:"200px"}),m=r(j,2),w=m[0],O=m[1],_=a.default.useCallback((function(e){w(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,w]);a.default.useEffect((function(){var e=O&&n&&c.isLocalURL(d),t="undefined"!==typeof y?y:o&&o.locale,r=u[d+"%"+p+(t?"%"+t:"")];e&&!r&&s(o,d,p,{locale:t})}),[p,d,O,y,n,o]);var E={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n))&&(e.preventDefault(),null==i&&r.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](n,r,{shallow:a,locale:l,scroll:i}))}(e,o,d,p,h,b,x,y)},onMouseEnter:function(e){c.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var P="undefined"!==typeof y?y:o&&o.locale,N=o&&o.isLocaleDomain&&c.getDomainLocale(p,P,o&&o.locales,o&&o.domainLocales);E.href=N||c.addBasePath(c.addLocale(p,P,o&&o.defaultLocale))}return a.default.cloneElement(t,E)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,l=o.useRef(),u=o.useState(!1),s=r(u,2),f=s[0],d=s[1],p=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||f||e&&e.tagName&&(l.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,c=r.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return o.useEffect((function(){if(!c&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=n(7294),a=n(3447),c="undefined"!==typeof IntersectionObserver;var i=new Map},3823:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(5893);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(3146);var a=n(9008),c=n(1664),i=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"mx-auto w-full bg-nctu bg-opacity-30 pt-2 pb-1 py-1",children:(0,r.jsx)("div",{className:"container mx-auto flex px-2 py-2 lg:flex-nowrap lg:px-3",children:(0,r.jsx)(c.default,{href:"/discography",children:(0,r.jsx)("a",{className:"hover:underline",children:(0,r.jsx)("h1",{className:"title text-black font-medium text-4xl lg:px-3",children:"nct discography"})})})})})})},l=n(8178);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var f=function(e){var t=e.Component,n=e.pageProps;e.router;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,r.jsx)("title",{children:"NCT Discography"})]}),(0,r.jsx)(i,{}),(0,r.jsx)(l.S,{children:(0,r.jsxs)("div",{className:"text-gray-800 flex flex-col h-screen font-light",children:[(0,r.jsx)(t,s({},n)),(0,r.jsxs)("footer",{className:"pb-8 flex flex-nowrap gap-x-1 justify-center text-sm",children:["Made with love \ud83d\udc9a by",(0,r.jsx)(c.default,{href:"https://github.com/wiznaibus/nct",passHref:!0,children:(0,r.jsx)("a",{target:"_blank",className:"text-nct127 underline hover:text-gray-700",children:"wiznaibus"})})]})]})})]})}},1780:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(3823)}])},3146:function(){},9008:function(e,t,n){e.exports=n(639)},1664:function(e,t,n){e.exports=n(2167)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(4651)}));var n=e.O();_N_E=n}]);