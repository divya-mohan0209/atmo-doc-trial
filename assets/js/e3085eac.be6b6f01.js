"use strict";(self.webpackChunkatmo_trial_doc=self.webpackChunkatmo_trial_doc||[]).push([[7088],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),i=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},s=function(e){var r=i(e.components);return n.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=i(t),f=a,d=m["".concat(p,".").concat(f)]||m[f]||c[f]||o;return t?n.createElement(d,u(u({ref:r},s),{},{components:t})):n.createElement(d,u({ref:r},s))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,u=new Array(o);u[0]=m;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var i=2;i<o;i++)u[i]=t[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2007:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return i},toc:function(){return s},default:function(){return m}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),u=["components"],l={},p="GraphQL requests",i={unversionedId:"atmo/runnable-api/graphql-requests",id:"atmo/runnable-api/graphql-requests",isDocsHomePage:!1,title:"GraphQL requests",description:"You can use the graphql namespace of the Runnable API to make GraphQL queries from your Runnable code. GraphQL is a common way of exposing external APIs, and makes connecting to external services very straightforward.",source:"@site/docs/atmo/runnable-api/graphql-requests.md",sourceDirName:"atmo/runnable-api",slug:"/atmo/runnable-api/graphql-requests",permalink:"/docs/atmo/runnable-api/graphql-requests",editUrl:"https://github.com/suborbital/docs/edit/master/atmo-trial-docs/docs/atmo/runnable-api/graphql-requests.md",tags:[],version:"current",lastUpdatedAt:1638861026,formattedLastUpdatedAt:"12/7/2021",frontMatter:{},sidebar:"docs",previous:{title:"Static files",permalink:"/docs/atmo/runnable-api/file"},next:{title:"HTTP requests",permalink:"/docs/atmo/runnable-api/http"}},s=[{value:"QUERY",id:"query",children:[],level:2}],c={toc:s};function m(e){var r=e.components,t=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"graphql-requests"},"GraphQL requests"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql")," namespace of the Runnable API to make GraphQL queries from your Runnable code. GraphQL is a common way of exposing external APIs, and makes connecting to external services very straightforward."),(0,o.kt)("p",null,"For Rust, these methods are available under the ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql")," module, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"graphql::query()"),".  For TypeScript/AssemblyScript, they are prefixed with graphQL, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"import { graphQLQuery } from '@suborbital/suborbital'")),(0,o.kt)("p",null,"The following namespace methods are available:"),(0,o.kt)("h2",{id:"query"},"QUERY"),(0,o.kt)("p",null,"Performs a graphQL query:"),(0,o.kt)("p",null,"Rust:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn query(endpoint: &str, query: &str) -> Result<Vec<u8>,super::runnable::RunErr>\n")),(0,o.kt)("p",null,"AssemblyScript:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"function graphQLQuery(endpoint: string, query: string): ArrayBuffer\n")),(0,o.kt)("p",null,"Swift:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift"},"// not yet supported\n")))}m.isMDXComponent=!0}}]);