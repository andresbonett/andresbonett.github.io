_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"/EDR":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("23aj")}])},"23aj":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c}));var r=t("nKUr"),o=t("YFqc"),a=t.n(o);function c(){return Object(r.jsxs)("div",{children:["Hello World."," ",Object(r.jsx)(a.a,{href:"/about",as:"https://andresbonett.github.io//about",children:Object(r.jsx)("a",{children:"About"})})]})}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var a=o(t("q1tI")),c=t("elyg"),u=t("nOHt"),i=t("vNVm"),l={};function s(e,n,t,r){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,u.useRouter)(),o=t&&t.pathname||"/",f=a.default.useMemo((function(){var n=(0,c.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],u=t[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):u||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,b=e.shallow,y=e.scroll,g=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var E=a.Children.only(v),_=E&&"object"===typeof E&&E.ref,w=(0,i.useIntersection)({rootMargin:"200px"}),m=r(w,2),L=m[0],M=m[1],j=a.default.useCallback((function(e){L(e),_&&("function"===typeof _?_(e):"object"===typeof _&&(_.current=e))}),[_,L]);(0,a.useEffect)((function(){var e=M&&n&&(0,c.isLocalURL)(d),r="undefined"!==typeof g?g:t&&t.locale,o=l[d+"%"+p+(r?"%"+r:"")];e&&!o&&s(t,d,p,{locale:r})}),[p,d,M,g,n,t]);var k={ref:j,onClick:function(e){E.props&&"function"===typeof E.props.onClick&&E.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,u,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:a,locale:i,scroll:u}))}(e,t,d,p,h,b,y,g)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(E.props&&"function"===typeof E.props.onMouseEnter&&E.props.onMouseEnter(e),s(t,d,p,{priority:!0}))}};if(e.passHref||"a"===E.type&&!("href"in E.props)){var I="undefined"!==typeof g?g:t&&t.locale,N=t&&t.isLocaleDomain&&(0,c.getDomainLocale)(p,I,t&&t.locales,t&&t.domainLocales);k.href=N||(0,c.addBasePath)((0,c.addLocale)(p,I,t&&t.defaultLocale))}return a.default.cloneElement(E,k)};n.default=f},vNVm:function(e,n,t){"use strict";var r=t("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,i=(0,o.useRef)(),l=(0,o.useState)(!1),s=r(l,2),f=s[0],d=s[1],p=(0,o.useCallback)((function(e){i.current&&(i.current(),i.current=void 0),t||f||e&&e.tagName&&(i.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=u.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return u.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),u.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,o.useEffect)((function(){if(!c&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=t("q1tI"),a=t("0G5g"),c="undefined"!==typeof IntersectionObserver;var u=new Map}},[["/EDR",0,1,2]]]);