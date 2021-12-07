"use strict";(self.webpackChunkatmo_trial_doc=self.webpackChunkatmo_trial_doc||[]).push([[6725],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),c=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=a,g=p["".concat(u,".").concat(m)]||p[m]||s[m]||o;return t?r.createElement(g,i(i({ref:n},d),{},{components:t})):r.createElement(g,i({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},720:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={},u="Building and Running",c={unversionedId:"atmo/getstarted/building-and-running",id:"atmo/getstarted/building-and-running",isDocsHomePage:!1,title:"Building and Running",description:"The subo command line tool is used again here to build and run your Atmo project.",source:"@site/docs/atmo/getstarted/building-and-running.md",sourceDirName:"atmo/getstarted",slug:"/atmo/getstarted/building-and-running",permalink:"/docs/atmo/getstarted/building-and-running",editUrl:"https://github.com/suborbital/docs/edit/master/atmo-trial-docs/docs/atmo/getstarted/building-and-running.md",tags:[],version:"current",lastUpdatedAt:1638861026,formattedLastUpdatedAt:"12/7/2021",frontMatter:{},sidebar:"docs",previous:{title:"Creating a Project",permalink:"/docs/atmo/getstarted/creating-a-project"},next:{title:"Runnables",permalink:"/docs/atmo/concepts/runnables"}},d=[{value:"Building",id:"building",children:[],level:2},{value:"Running a development server",id:"running-a-development-server",children:[],level:2}],s={toc:d};function p(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"building-and-running"},"Building and Running"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"subo")," command line tool is used again here to build and run your Atmo project."),(0,o.kt)("h2",{id:"building"},"Building"),(0,o.kt)("p",null,"Inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"important-api")," directory run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"subo build .\n")),(0,o.kt)("p",null,"This automatically compiles each of your Runnables in a Docker container and bundles them together in ",(0,o.kt)("inlineCode",{parentName:"p"},"runnables.wasm.zip")," to be used in Atmo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\u23e9 START: building runnables in .\n\u2139\ufe0f  \ud83d\udc33 using Docker toolchain\n\u23e9 START: building runnable: helloworld (rust)\n    Updating crates.io index\n[...]\n\n\u2705 DONE: bundle was created -> runnables.wasm.zip @ v0.1.0\n")),(0,o.kt)("p",null,'{% hint style="info" %}\nIf you prefer not to use Docker, you can also ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/suborbital/subo/blob/main/docs/get-started.md#building-without-docker"},"build your Runnables natively"),".\n{% endhint %}"),(0,o.kt)("h2",{id:"running-a-development-server"},"Running a development server"),(0,o.kt)("p",null,"Now that we have our application bundle built, we can start a development server. In the ",(0,o.kt)("inlineCode",{parentName:"p"},"important-api")," directory, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"subo dev\n")),(0,o.kt)("p",null,"This creates a Docker container running Atmo, copies your ",(0,o.kt)("inlineCode",{parentName:"p"},"runnables.wasm.zip")," into the container, and starts an Atmo server listening on ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8080"),"."),(0,o.kt)("p",null,"You can test the ",(0,o.kt)("inlineCode",{parentName:"p"},"/hello")," route in a second terminal by sending a POST request with a body to it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"curl localhost:8080/hello -d 'from the K\xe1rm\xe1n line!'\n")))}p.isMDXComponent=!0}}]);