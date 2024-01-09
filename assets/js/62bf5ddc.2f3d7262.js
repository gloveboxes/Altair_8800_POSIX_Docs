"use strict";(self.webpackChunkaltair_docs=self.webpackChunkaltair_docs||[]).push([[6578],{4137:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,s=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=u(r),m=l,f=c["".concat(i,".").concat(m)]||c[m]||d[m]||s;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var s=r.length,o=new Array(s);o[0]=m;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[c]="string"==typeof e?e:l,o[1]=a;for(var u=2;u<s;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},162:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var n=r(7462),l=(r(7294),r(4137));const s={},o="Windows",a={unversionedId:"build-from-source/Install prerequistes/Windows-users",id:"build-from-source/Install prerequistes/Windows-users",title:"Windows",description:"Complete the following steps:",source:"@site/docs/45-build-from-source/Install prerequistes/03-Windows-users.md",sourceDirName:"45-build-from-source/Install prerequistes",slug:"/build-from-source/Install prerequistes/Windows-users",permalink:"/altair_8800_docs/build-from-source/Install prerequistes/Windows-users",draft:!1,editUrl:"https://github.com/gloveboxes/altair_8800_docs/tree/main/docs/45-build-from-source/Install prerequistes/03-Windows-users.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"macOS",permalink:"/altair_8800_docs/build-from-source/Install prerequistes/macOS-users"},next:{title:"Raspberry Pi OS",permalink:"/altair_8800_docs/build-from-source/Install prerequistes/Raspberry-Pi-users"}},i={},u=[{value:"Install the required packages",id:"install-the-required-packages",level:2},{value:"Windows Subsystem for Linux users",id:"windows-subsystem-for-linux-users",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,l.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"windows"},"Windows"),(0,l.kt)("p",null,"Complete the following steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"If you have not done so already, then install Windows Subsystem for Linux ",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/windows/wsl/install"},"(WSL2)")," and Ubuntu 20.04."),(0,l.kt)("li",{parentName:"ol"},"Optional, but recommended, install the ",(0,l.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/windows/terminal/install"},"Windows Terminal"))),(0,l.kt)("h2",{id:"install-the-required-packages"},"Install the required packages"),(0,l.kt)("p",null,"The Altair project requires the following packages:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"https://man7.org/linux/man-pages/man3/event.3.html"},"libuv1")," event loop library."),(0,l.kt)("li",{parentName:"ol"},"SSL Development."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"http://www.ossp.org/pkg/lib/uuid/"},"OSSP uuid")),(0,l.kt)("li",{parentName:"ol"},"C compiler and debugging tools.")),(0,l.kt)("h2",{id:"windows-subsystem-for-linux-users"},"Windows Subsystem for Linux users"),(0,l.kt)("p",null,"Follow these steps to install the required packages."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Open an WSL Ubuntu Terminal window.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run the following command to install the required packages"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install -y libuv1-dev cmake build-essential gdb curl libcurl4-openssl-dev libssl-dev uuid-dev ca-certificates git libi2c-dev libgpiod-dev gpiod\n")))))}d.isMDXComponent=!0}}]);