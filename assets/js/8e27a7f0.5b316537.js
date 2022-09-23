"use strict";(self.webpackChunkaltair_docs=self.webpackChunkaltair_docs||[]).push([[2912],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>d});var r=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(i),d=a,f=h["".concat(l,".").concat(d)]||h[d]||u[d]||n;return i?r.createElement(f,o(o({ref:t},c),{},{components:i})):r.createElement(f,o({ref:t},c))}));function d(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,o=new Array(n);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<n;p++)o[p]=i[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}h.displayName="MDXCreateElement"},3621:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var r=i(7462),a=(i(7294),i(3905));const n={sidebar_position:4},o="Wi-Fi configuration",s={unversionedId:"azsphere/Deploy-the-Altair/WiFi-configuration",id:"azsphere/Deploy-the-Altair/WiFi-configuration",title:"Wi-Fi configuration",description:"There are two options to configure the WiFi of the device. You can configure the WiFi with an SD Card or the Azure Sphere CLI.",source:"@site/docs/azsphere/01-Deploy-the-Altair/04-WiFi-configuration.md",sourceDirName:"azsphere/01-Deploy-the-Altair",slug:"/azsphere/Deploy-the-Altair/WiFi-configuration",permalink:"/altair_8800_docs/azsphere/Deploy-the-Altair/WiFi-configuration",draft:!1,editUrl:"https://github.com/gloveboxes/altair_8800_docs/tree/main/docs/azsphere/01-Deploy-the-Altair/04-WiFi-configuration.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"azsphere",previous:{title:"Deploy pre-built images",permalink:"/altair_8800_docs/azsphere/Deploy-the-Altair/Deploy-prebuilt"},next:{title:"Create a boot SD card",permalink:"/altair_8800_docs/azsphere/Deploy-the-Altair/Create-boot-SD-card"}},l={},p=[{value:"WiFi provisioning with an SD card",id:"wifi-provisioning-with-an-sd-card",level:2},{value:"macOS users WiFi provisioning with an SD card",id:"macos-users-wifi-provisioning-with-an-sd-card",level:2},{value:"Windows and Linux users WiFi provisioning with Azure Sphere CLI",id:"windows-and-linux-users-wifi-provisioning-with-azure-sphere-cli",level:2}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"wi-fi-configuration"},"Wi-Fi configuration"),(0,a.kt)("p",null,"There are two options to configure the WiFi of the device. You can configure the WiFi with an SD Card or the Azure Sphere CLI. "),(0,a.kt)("p",null,"If you use a Mikroe Retro 8800 Click, then the IP address will be displayed on the LED panel."),(0,a.kt)("h2",{id:"wifi-provisioning-with-an-sd-card"},"WiFi provisioning with an SD card"),(0,a.kt)("p",null,"If you deploy the Altair emulator with an Mikroe SD card Click then you can ",(0,a.kt)("a",{parentName:"p",href:"Create-boot-SD-card"},"provision the Wi-Fi from the SD card"),"."),(0,a.kt)("h2",{id:"macos-users-wifi-provisioning-with-an-sd-card"},"macOS users WiFi provisioning with an SD card"),(0,a.kt)("p",null,"If you deploy the Altair emulator with an Mikroe SD card Click then you can ",(0,a.kt)("a",{parentName:"p",href:"Create-boot-SD-card"},"provision the Wi-Fi from the SD card"),"."),(0,a.kt)("h2",{id:"windows-and-linux-users-wifi-provisioning-with-azure-sphere-cli"},"Windows and Linux users WiFi provisioning with Azure Sphere CLI"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install the Azure Sphere SDK."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure-sphere/install/install-sdk?pivots=visual-studio"},"Quickstart: Install the Azure Sphere SDK for Windows")," will step you through the process."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure-sphere/install/install-sdk-linux?pivots=vs-code-linux"},"Quickstart: Install the Azure Sphere SDK for Linux")," will step you through the process."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Review the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure-sphere/reference/azsphere-device?tabs=cliv2beta"},"device WiFi configuration section")," for more information on setting up Wi-Fi with the Azure Sphere CLI.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"List existing WiFi configurations"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"azsphere device wifi list\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Forget a WiFi configuration"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"azsphere device wifi forget -i NETWORK_ID\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add a WiFi configuration"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"azsphere device wifi add -s YOUR_SSID -p YOUR_NETWORK_PASSWORD\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Test the Wi-Fi has connected. From a command prompt, issue the following command."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"azsphere device wifi show-status\n")))))}u.isMDXComponent=!0}}]);