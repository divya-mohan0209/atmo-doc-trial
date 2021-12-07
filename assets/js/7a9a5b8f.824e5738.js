"use strict";(self.webpackChunkatmo_trial_doc=self.webpackChunkatmo_trial_doc||[]).push([[4777],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return m}});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?t.createElement(h,i(i({ref:n},l),{},{components:r})):t.createElement(h,i({ref:n},l))}));function m(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5779:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return d}});var t=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={},c="Error handling",u={unversionedId:"atmo/usage/error-handling",id:"atmo/usage/error-handling",isDocsHomePage:!1,title:"Error handling",description:"When building your Atmo app, handling errors returned from Runnables is pretty essential. When a Runnable returns an error, it contains a code and a message. The code must be a valid HTTP response status code. Using the Directive, you can manage how your application behaves when an error is returned:",source:"@site/docs/atmo/usage/error-handling.md",sourceDirName:"atmo/usage",slug:"/atmo/usage/error-handling",permalink:"/atmo-doc-trial/docs/atmo/usage/error-handling",editUrl:"https://github.com/suborbital/docs/edit/master/atmo-trial-docs/docs/atmo/usage/error-handling.md",tags:[],version:"current",lastUpdatedAt:1638861026,formattedLastUpdatedAt:"12/7/2021",frontMatter:{},sidebar:"docs",previous:{title:"Deploying Atmo",permalink:"/atmo-doc-trial/docs/atmo/usage/deploying-atmo"},next:{title:"Headless Mode",permalink:"/atmo-doc-trial/docs/atmo/usage/headless"}},l=[],p={toc:l};function d(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"error-handling"},"Error handling"),(0,a.kt)("p",null,"When building your Atmo app, handling errors returned from Runnables is pretty essential. When a Runnable returns an error, it contains a ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"message"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," must be a valid ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Status"},"HTTP response status code"),". Using the Directive, you can manage how your application behaves when an error is returned:"),(0,a.kt)("p",null,'{% hint style="info" %}\nThe default behaviour for any error is for the handler to return.\n{% endhint %}'),(0,a.kt)("p",null,"Any time a Runnable returns an error, you can decide what to do with it using the ",(0,a.kt)("inlineCode",{parentName:"p"},"onErr")," clause:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- type: request\n    resource: /repo/report/*repo\n    method: GET\n    steps:\n      - fn: check-cache\n        as: report\n        onErr:\n          any: continue\n\n      - fn: send-report\n")),(0,a.kt)("p",null,"In its basic form, onErr allows you to tell Atmo to ignore any error from a Runnable. When using ",(0,a.kt)("inlineCode",{parentName:"p"},"continue"),", the JSON of the error will be placed into state, such as ",(0,a.kt)("inlineCode",{parentName:"p"},'{"code":404,"message":"not found"}')),(0,a.kt)("p",null,"To gain more control, you can choose what to do based on error codes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"- type: request\n    resource: /repo/report/*repo\n    method: GET\n    steps:\n      - fn: check-cache\n        as: report\n        onErr:\n          code:\n            404: continue\n          other: return\n\n      - fn: send-report\n")),(0,a.kt)("p",null,"Technically, any ",(0,a.kt)("inlineCode",{parentName:"p"},"return")," ","(","such as an 'any' or 'other'",")"," can be omitted since it is the default behaviour, but it can improve readability of your Directive when included."),(0,a.kt)("p",null,"When defining specific error codes, you cannot use 'any', use 'other' instead. If no specific codes are specified, use 'any'."),(0,a.kt)("p",null,"Whenever Atmo decides to return based on your Directive's instructions, the error's JSON is returned to the caller with the status code set to the error code."))}d.isMDXComponent=!0}}]);