_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{TaPz:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return c}));var r=t("nKUr"),o=t("YFqc"),a=t.n(o);function c(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{children:"About us"}),Object(r.jsxs)("div",{children:["Back to"," ",Object(r.jsx)(a.a,{href:"/",as:"https://andresbonett.github.io//",children:Object(r.jsx)("a",{children:"Home"})})]})]})}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var a=o(t("q1tI")),c=t("elyg"),i=t("nOHt"),u=t("vNVm"),s={};function l(e,n,t,r){if(e&&(0,c.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;s[n+"%"+t+(o?"%"+o:"")]=!0}}var f=function(e){var n=!1!==e.prefetch,t=(0,i.useRouter)(),o=t&&t.pathname||"/",f=a.default.useMemo((function(){var n=(0,c.resolveHref)(o,e.href,!0),t=r(n,2),a=t[0],i=t[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,b=e.shallow,y=e.scroll,g=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var _=a.Children.only(v),w=_&&"object"===typeof _&&_.ref,m=(0,u.useIntersection)({rootMargin:"200px"}),E=r(m,2),L=E[0],j=E[1],M=a.default.useCallback((function(e){L(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,L]);(0,a.useEffect)((function(){var e=j&&n&&(0,c.isLocalURL)(d),r="undefined"!==typeof g?g:t&&t.locale,o=s[d+"%"+p+(r?"%"+r:"")];e&&!o&&l(t,d,p,{locale:r})}),[p,d,j,g,n,t]);var I={ref:M,onClick:function(e){_.props&&"function"===typeof _.props.onClick&&_.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,a,i,u){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(t))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:a,locale:u,scroll:i}))}(e,t,d,p,h,b,y,g)},onMouseEnter:function(e){(0,c.isLocalURL)(d)&&(_.props&&"function"===typeof _.props.onMouseEnter&&_.props.onMouseEnter(e),l(t,d,p,{priority:!0}))}};if(e.passHref||"a"===_.type&&!("href"in _.props)){var O="undefined"!==typeof g?g:t&&t.locale,k=t&&t.isLocaleDomain&&(0,c.getDomainLocale)(p,O,t&&t.locales,t&&t.domainLocales);I.href=k||(0,c.addBasePath)((0,c.addLocale)(p,O,t&&t.defaultLocale))}return a.default.cloneElement(_,I)};n.default=f},hIud:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/about",function(){return t("TaPz")}])},vNVm:function(e,n,t){"use strict";var r=t("J4zp");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!c,u=(0,o.useRef)(),s=(0,o.useState)(!1),l=r(s,2),f=l[0],d=l[1],p=(0,o.useCallback)((function(e){u.current&&(u.current(),u.current=void 0),t||f||e&&e.tagName&&(u.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,a=r.observer,c=r.elements;return c.set(e,n),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:n}))}),[t,n,f]);return(0,o.useEffect)((function(){if(!c&&!f){var e=(0,a.requestIdleCallback)((function(){return d(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[p,f]};var o=t("q1tI"),a=t("0G5g"),c="undefined"!==typeof IntersectionObserver;var i=new Map}},[["hIud",0,1,2]]]);