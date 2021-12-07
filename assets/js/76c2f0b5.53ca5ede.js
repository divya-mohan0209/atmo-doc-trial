"use strict";(self.webpackChunkatmo_trial_doc=self.webpackChunkatmo_trial_doc||[]).push([[7014],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7573:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={},s="The Directive",l={unversionedId:"atmo/concepts/the-directive",id:"atmo/concepts/the-directive",isDocsHomePage:!1,title:"The Directive",description:"The Directive is a declarative file that allows you to describe your application's business logic. By describing your application declaratively, you can avoid all of the boilerplate code that normally comes with building a web service such as binding to ports, setting up TLS, constructing a router, etc.",source:"@site/docs/atmo/concepts/the-directive.md",sourceDirName:"atmo/concepts",slug:"/atmo/concepts/the-directive",permalink:"/docs/atmo/concepts/the-directive",editUrl:"https://github.com/suborbital/docs/edit/master/atmo-trial-docs/docs/atmo/concepts/the-directive.md",tags:[],version:"current",lastUpdatedAt:1638861026,formattedLastUpdatedAt:"12/7/2021",frontMatter:{},sidebar:"docs",previous:{title:"Static Directory",permalink:"/docs/atmo/concepts/static-directory"},next:{title:"Introduction",permalink:"/docs/atmo/runnable-api/introduction"}},u=[],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-directive"},"The Directive"),(0,i.kt)("p",null,"The Directive is a declarative file that allows you to describe your application's business logic. By describing your application declaratively, you can avoid all of the boilerplate code that normally comes with building a web service such as binding to ports, setting up TLS, constructing a router, etc."),(0,i.kt)("p",null,"Here's an example Directive:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"identifier: com.suborbital.guide\nappVersion: v0.0.1\natmoVersion: v0.4.2\n\nhandlers:\n  - type: request\n    resource: /hello\n    method: POST\n    steps:\n      - group:\n        - fn: modify-url\n        - fn: helloworld-rs\n          onErr:\n            any: continue\n\n      - fn: fetch\n\n  - type: request\n    resource: /set/:key\n    method: POST\n    steps:\n      - fn: cache-set\n\n  - type: request\n    resource: /get/:key\n    method: GET\n    steps:\n      - fn: cache-get\n")),(0,i.kt)("p",null,"This directive encapsulates all of the logic for your application. It describes three endpoints and the logic needed to handle them. Each handler describes a set of ",(0,i.kt)("inlineCode",{parentName:"p"},"steps")," that composes a series of Runnables to handle the request."),(0,i.kt)("p",null,"Atmo uses the Directive to build your application and run it automatically, without any need to write boilerplate yourself."))}d.isMDXComponent=!0}}]);