"use strict";(self.webpackChunkaltair_docs=self.webpackChunkaltair_docs||[]).push([[6764],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>P});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),P=a,m=d["".concat(s,".").concat(P)]||d[P]||c[P]||n;return r?o.createElement(m,l(l({ref:t},u),{},{components:r})):o.createElement(m,l({ref:t},u))}));function P(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<n;p++)l[p]=r[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7706:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>p});var o=r(7462),a=(r(7294),r(3905));const n={sidebar_position:2},l="IoT Plug and Play",i={unversionedId:"azsphere/Cloud-services/Azue-IoT-Central/IoT-Plug-and-Play",id:"azsphere/Cloud-services/Azue-IoT-Central/IoT-Plug-and-Play",title:"IoT Plug and Play",description:"This solution uses IoT Plug and Play with IoT Central. IoT Plug and Play (PnP) defines a model that a device uses to advertise its capabilities to a PnP-enabled application like IoT Central. PnP is an open specification, to learn more, refer to What is IoT Plug and Play.",source:"@site/docs/azsphere/Cloud-services/Azue-IoT-Central/02-IoT-Plug-and-Play.md",sourceDirName:"azsphere/Cloud-services/Azue-IoT-Central",slug:"/azsphere/Cloud-services/Azue-IoT-Central/IoT-Plug-and-Play",permalink:"/altair_8800_posix_docs/azsphere/Cloud-services/Azue-IoT-Central/IoT-Plug-and-Play",draft:!1,editUrl:"https://github.com/gloveboxes/altair_8800_posix_docs/tree/main/docs/azsphere/Cloud-services/Azue-IoT-Central/02-IoT-Plug-and-Play.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"azsphere",previous:{title:"About Azure IoT Central",permalink:"/altair_8800_posix_docs/azsphere/Cloud-services/Azue-IoT-Central/About-IoT-Central"},next:{title:"New IoT Central app",permalink:"/altair_8800_posix_docs/azsphere/Cloud-services/Azue-IoT-Central/Create-an-IoT-Central-app"}},s={},p=[],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"iot-plug-and-play"},"IoT Plug and Play"),(0,a.kt)("p",null,"This solution uses IoT Plug and Play with IoT Central. IoT Plug and Play (PnP) defines a model that a device uses to advertise its capabilities to a PnP-enabled application like IoT Central. PnP is an open specification, to learn more, refer to ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/iot-pnp/overview-iot-plug-and-play"},"What is IoT Plug and Play"),"."),(0,a.kt)("p",null,"An IoT Plug and Play CO2 monitor model has been published to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Azure/iot-plugandplay-models"},"public repository of IoT Plug and Play")," models. A local copy of the IoT Plug and Play model is located in the ",(0,a.kt)("em",{parentName:"p"},"iot_plug_and_play")," directory."),(0,a.kt)("p",null,"When your device first connects to IoT Central, the IoT Plug and Play model is retrieved from the public repository of models. IoT Central then creates default views using the Plug and Play model."),(0,a.kt)("p",null,"The IoT Plug and Play model for the CO2 monitor project is declared in main.h."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},'#define IOT_PLUG_AND_PLAY_MODEL_ID "dtmi:com:example:azuresphere:co2monitor;2"\n')))}c.isMDXComponent=!0}}]);