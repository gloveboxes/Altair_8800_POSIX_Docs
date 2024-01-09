"use strict";(self.webpackChunkaltair_docs=self.webpackChunkaltair_docs||[]).push([[3958],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return r?a.createElement(h,o(o({ref:t},u),{},{components:r})):a.createElement(h,o({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7175:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(7462),n=(r(7294),r(4137));const i={},o="The altair emulator",l={unversionedId:"fundamentals/Altair-emulator",id:"fundamentals/Altair-emulator",title:"The altair emulator",description:"The Altair 8800 emulator is a software program that emulates the Altair 8800 computer. The Altair emulator is written in C and runs on most desktop operating systems as well as devices like the Raspberry Pi, Beaglebone, and Azure Sphere.",source:"@site/docs/20-fundamentals/23-Altair-emulator.md",sourceDirName:"20-fundamentals",slug:"/fundamentals/Altair-emulator",permalink:"/altair_8800_docs/fundamentals/Altair-emulator",draft:!1,editUrl:"https://github.com/gloveboxes/altair_8800_docs/tree/main/docs/20-fundamentals/23-Altair-emulator.md",tags:[],version:"current",sidebarPosition:23,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deployment options",permalink:"/altair_8800_docs/fundamentals/deployment-options"},next:{title:"Start the web terminal",permalink:"/altair_8800_docs/fundamentals/Web-Terminal"}},s={},p=[{value:"Source code",id:"source-code",level:2},{value:"Architecture",id:"architecture",level:2},{value:"Raspberry Pi with a Pi Sense HAT",id:"raspberry-pi-with-a-pi-sense-hat",level:2}],u={toc:p},m="wrapper";function c(e){let{components:t,...i}=e;return(0,n.kt)(m,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"the-altair-emulator"},"The altair emulator"),(0,n.kt)("p",null,"The Altair 8800 emulator is a software program that emulates the Altair 8800 computer. The Altair emulator is written in C and runs on most desktop operating systems as well as devices like the Raspberry Pi, Beaglebone, and Azure Sphere."),(0,n.kt)("p",null,"This is version 2 of the Altair 8800 emulator project and it shares the same code base as the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/AzureSphereCloudEnabledAltair8800/AltairOnAzureSphere"},"Azure Sphere Cloud-Enabled Altair 8800"),' as featured on the Register "',(0,n.kt)("a",{parentName:"p",href:"https://www.theregister.com/2021/07/16/altair_redux/"},"Microsoft adds cloud enablement to 1970s Altair 8800 tech"),'".'),(0,n.kt)("h2",{id:"source-code"},"Source code"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The Altair emulator source code is maintained in the ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/gloveboxes/AltairEverywhere"},"Altair Everywhere")," GitHub repo."),(0,n.kt)("li",{parentName:"ul"},"The soltion is Open Source and is provided under an MIT License, and contributions are very welcome.")),(0,n.kt)("h2",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,"The Altair emulator runs on ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/POSIX"},"POSIX")," compatible operating systems including, Linux, Windows with ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install"},"WSL 2"),", macOS on Apple Silicon and Intel, as well as devices like Raspberry Pi, Beaglebone, and Azure Sphere."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"The following diagram summarizes the Altair emulator architecture.",src:r(5394).Z,width:"3676",height:"1647"})),(0,n.kt)("p",null,"Starting from the bottom left and moving up and then to the right."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"POSIX Compatible OS:"),". The Altair 8800 emulator runs on ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/POSIX"},"POSIX")," compatible operating systems, including Linux, macOS, ",(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/windows/wsl"},"Windows WSL 2"),", and Raspberry Pi OS."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"WebSocket & Azure IoT C:")," These communication libraries connect the Altair emulator to the web terminal and cloud services. The Altair terminal IO messages are routed over ",(0,n.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/WebSocket"},"WebSockets"),", and the Azure IoT C SDK connects the Altair to Azure IoT Central."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Event library:")," The Altair coordinates activities on the main thread using the ",(0,n.kt)("a",{parentName:"li",href:"https://libevent.org/"},"event")," event loop library."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"EdgeDevX:")," This library simplifies access to Azure IoT services, provides event-timer services, along with several useful utilities."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Terminal IO & Cloud Services:")," The Intel 8080 CPU provides 256 input ports and 256 output ports. The Intel 8080 ports were used to integrate peripherals such as disk drives, printers, and modems. However, for the Altair emulator, these ports are used to integrate communications and cloud services. Terminal input and output ports are routed over WebSockets, other ports are used for timing services, access to weather and pollution data, plus Azure IoT services."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Intel 8080 emulator:")," This is an open-source software implementation of the Intel 8080 CPU. The Intel 8080 emulator executes Intel 8080 applications including the CP/M operating system, compilers, apps, and games."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"CPU Monitor:")," The CPU monitor implements the virtual Altair front panel, along with memory disassembler, tracer, and Altair emulator reset."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"CP/M:")," CP/M originally stood for Control Program/Monitor. Later, CP/M became known as Control Program for Microcomputers. It was a mass-market operating system created in 1974 for Intel 8080/85-based microcomputers by Gary Kildall of Digital Research, Inc."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Programming languages:")," Included on the main disk image are the Microsoft BASIC interpreter, the BDS C compiler, and the Intel and Microsoft assemblers and linkers."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Altair BASIC:")," By default the Altair emulator boots CP/M, but it is easy to boot the original Altair BASIC program."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Altair Web Terminal:")," Provides a web-browser hosted Altair terminal. The web terminal is built using the Xterm library. Xterm.js provides a web browser-hosted terminal, a WebSocket integrates Xterm with the Altair emulator."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Open Weather Map"),": Open Weather Map provides planet-scale weather and pollution data services. Open Weather Map provides free access to weather and pollution data by geographic location."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Azure IoT Central:")," ",(0,n.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/services/iot-central?azure-portal=true"},"Azure IoT Central")," is a customizable cloud-based Internet of Things (IoT) application platform. You can report, analyze, and export IoT data.")),(0,n.kt)("h2",{id:"raspberry-pi-with-a-pi-sense-hat"},"Raspberry Pi with a Pi Sense HAT"),(0,n.kt)("p",null,"There is specific support for the Altair emulator running on a Raspberry Pi with a Pi Sense HAT. The Altair emulator has been tested on the following ",(0,n.kt)("a",{parentName:"p",href:"https://www.raspberrypi.org/"},"Raspberry Pi")," models: Zero 2W, 2B, 3A, 3B, 4B, 5B running Raspberry Pi OS 64-bit."),(0,n.kt)("p",null,"The Raspberry Pi paired with a ",(0,n.kt)("a",{parentName:"p",href:"https://www.raspberrypi.com/products/sense-hat/"},"Pi Sense HAT")," displays the Altair address and data bus activity on the 8x8 LED panel."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi with Pi Sense HAT"),(0,n.kt)("th",{parentName:"tr",align:null},"Raspberry Pi Sense HAT"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"The image shows the address and data bus LEDs",src:r(465).Z,width:"562",height:"379"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"The gif shows the address and data bus LEDs in action",src:r(4268).Z,width:"469",height:"400"}))))))}c.isMDXComponent=!0},5394:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Altair_8800_Application_Architecture-8a0e4a0afbebc6246264fdd776df6fc9.png"},4268:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/raspberry_pi_sense_hat-079bdc455c3a3502d2aaa72a6f7b69ed.gif"},465:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/raspberry_pi_sense_hat_map-219521f7247903276cd59d090845b3ea.png"}}]);