"use strict";(self.webpackChunkaltair_docs=self.webpackChunkaltair_docs||[]).push([[7286],{4137:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>s});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},k="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=d(a),N=r,s=k["".concat(o,".").concat(N)]||k[N]||u[N]||l;return a?n.createElement(s,i(i({ref:e},m),{},{components:a})):n.createElement(s,i({ref:e},m))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[k]="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},522:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=a(7462),r=(a(7294),a(4137));const l={},i="Intel 8080 IO Ports",p={unversionedId:"programming/i8080-IO-Ports",id:"programming/i8080-IO-Ports",title:"Intel 8080 IO Ports",description:"The Intel 8080 CPU can address up to 256 input ports and 256 output ports; allowing for virtually unlimited system expansion. Access to the ports is via the IN and OUT Intel 8080 CPU instructions, see page 38.",source:"@site/docs/60-programming/01-i8080-IO-Ports.md",sourceDirName:"60-programming",slug:"/programming/i8080-IO-Ports",permalink:"/altair_8800_docs/programming/i8080-IO-Ports",draft:!1,editUrl:"https://github.com/gloveboxes/altair_8800_docs/tree/main/docs/60-programming/01-i8080-IO-Ports.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Editing files",permalink:"/altair_8800_docs/programming/Editing-files"},next:{title:"Microsoft BASIC",permalink:"/altair_8800_docs/programming/Microsoft-BASIC-programming"}},o={},d=[{value:"Intel 8080 IO ports and peripherals",id:"intel-8080-io-ports-and-peripherals",level:2},{value:"Altair emulator software-enabled ports",id:"altair-emulator-software-enabled-ports",level:2},{value:"Output ports",id:"output-ports",level:3},{value:"Utility ports",id:"utility-ports",level:4},{value:"Weather ports",id:"weather-ports",level:4},{value:"Location ports",id:"location-ports",level:4},{value:"Pollution ports",id:"pollution-ports",level:4},{value:"Publish to Azure IoT ports",id:"publish-to-azure-iot-ports",level:4},{value:"Azure Sphere specific ports",id:"azure-sphere-specific-ports",level:4},{value:"8x8 LED Panels",id:"8x8-led-panels",level:4},{value:"General ports",id:"general-ports",level:4},{value:"Display 8x8 LED panel ports",id:"display-8x8-led-panel-ports",level:4},{value:"OpenAI ChatGPT",id:"openai-chatgpt",level:4},{value:"Input ports",id:"input-ports",level:3},{value:"Using Intel 8080 Input Output ports",id:"using-intel-8080-input-output-ports",level:2},{value:"Assembler access to Intel 8080 IO Ports",id:"assembler-access-to-intel-8080-io-ports",level:3},{value:"BSD C access to Intel 8080 IO Ports",id:"bsd-c-access-to-intel-8080-io-ports",level:3},{value:"BASIC access to Intel 8080 IO Ports",id:"basic-access-to-intel-8080-io-ports",level:3},{value:"Delay IO ports",id:"delay-io-ports",level:4},{value:"Weather IO ports",id:"weather-io-ports",level:4},{value:"Font support",id:"font-support",level:4},{value:"Azure Sphere Blinky",id:"azure-sphere-blinky",level:4}],m={toc:d},k="wrapper";function u(t){let{components:e,...l}=t;return(0,r.kt)(k,(0,n.Z)({},m,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"intel-8080-io-ports"},"Intel 8080 IO Ports"),(0,r.kt)("p",null,"The Intel 8080 CPU can address up to 256 input ports and 256 output ports; allowing for virtually unlimited system expansion. Access to the ports is via the IN and OUT ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AzureSphereCloudEnabledAltair8800/Altair8800.manuals/blob/master/8080asm.pdf"},"Intel 8080 CPU instructions"),", see page 38."),(0,r.kt)("h2",{id:"intel-8080-io-ports-and-peripherals"},"Intel 8080 IO ports and peripherals"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The image shows an example of Intel 8080 IO port usage",src:a(9258).Z,width:"733",height:"288"})),(0,r.kt)("h2",{id:"altair-emulator-software-enabled-ports"},"Altair emulator software-enabled ports"),(0,r.kt)("p",null,"The Altair emulator uses Intel 8080 IO ports to provide time services, random numbers, and access to cloud services."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can access Intel 8080 IO ports from BASIC, C, and Assembly programming languages, and directly using Intel 8080 opcodes. See ",(0,r.kt)("a",{parentName:"li",href:"#using-intel-8080-input-output-ports"},"Using Intel 8080 Input Output ports"),"."),(0,r.kt)("li",{parentName:"ul"},"The Intel 8080 software-enabled IO ports are implemented in the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/gloveboxes/Altair8800.Emulator.UN-X/blob/main/AltairHL_emulator/io_ports.c"},"io_ports.c")," file."),(0,r.kt)("li",{parentName:"ul"},"You can extend the Altair 8800 by adding additional IO port functions, for example, integrating machine learning capabilities.")),(0,r.kt)("h3",{id:"output-ports"},"Output ports"),(0,r.kt)("p",null,"The following tables show output port numbers and port data values. Typically, calling an output port will load data to be read via an input port."),(0,r.kt)("h4",{id:"utility-ports"},"Utility ports"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Port"),(0,r.kt)("th",{parentName:"tr",align:null},"Port data"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Loads"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"29"),(0,r.kt)("td",{parentName:"tr",align:null},"0-255"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set timer period in milliseconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"30"),(0,r.kt)("td",{parentName:"tr",align:null},"0-255"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set timer period in seconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"41"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"System tick count")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"42"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current ",(0,r.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Coordinated_Universal_Time"},"UTC")," date and time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"43"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Current local date and time")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"44"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Generates a random number between -32000 and 32000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"68"),(0,r.kt)("td",{parentName:"tr",align:null},"ASCII"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set getfile (gf) filename")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"110"),(0,r.kt)("td",{parentName:"tr",align:null},"ASCII"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set getfile (gf) custom endpoint url")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"111"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Load getfile (gf) custom endpoint url")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"112"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Select getfile (gf) endpoint to use")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"113"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Load getfile (gf) selected endpoint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"114"),(0,r.kt)("td",{parentName:"tr",align:null},"ASCII"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set web request file name and call on NULL")))),(0,r.kt)("h4",{id:"weather-ports"},"Weather ports"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Port"),(0,r.kt)("th",{parentName:"tr",align:null},"Port data"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Loads"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"34"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"Celsius" string literal')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"34"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"Millibar" string literal')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"34"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"Humidity %" string literal')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"34"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"Wind km/h" string literal')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"34"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"Wind degrees" string literal')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"34"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"Observation" string literal')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"35"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Temperature (Note 1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"35"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Pressure (Note 1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"35"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Relative humidity (Note 1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"35"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Wind speed (Note 1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"35"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Wind direction (Note 1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"35"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Weather observation (Note 1)")))),(0,r.kt)("h4",{id:"location-ports"},"Location ports"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Port"),(0,r.kt)("th",{parentName:"tr",align:null},"Port data"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Loads"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"36"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"Latitude" string literal')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"36"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"Longitude" string literal')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"36"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"Longitude" string literal')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"36"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"City" string literal')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"37"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Latitude (Note 2)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"37"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Longitude (Note 2)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"37"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Country name (Note 2)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"37"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"City name (Note 2)")))),(0,r.kt)("h4",{id:"pollution-ports"},"Pollution ports"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Port"),(0,r.kt)("th",{parentName:"tr",align:null},"Port data"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Loads"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"38"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"AQI(CAQI)" string literal')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"38"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"CO" string literal')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"38"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"NO" string literal')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"38"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"NO2" string literal')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"38"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"O3" string literal')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"38"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"SO2" string literal')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"38"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"NH3" string literal')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"38"),(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"PM2.5" string literal')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"38"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"PM1.0" string literal')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"39"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Air quality index (Note 1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"39"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Carbon monoxide level (Note 1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"39"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nitrogen monoxide level (Note 1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"39"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nitrogen dioxide level (Note 1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"39"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Ozone level (Note 1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"39"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Sulphur dioxide level (Note 1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"39"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Ammonia level (Note 1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"39"),(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Particulate matter 2.5 level (Note 1)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"39"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Particulate matter 1.0 level (Note 1)")))),(0,r.kt)("h4",{id:"publish-to-azure-iot-ports"},"Publish to Azure IoT ports"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Port"),(0,r.kt)("th",{parentName:"tr",align:null},"Port data"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Loads"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"31"),(0,r.kt)("td",{parentName:"tr",align:null},"ASCII"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Publish JSON to IoT Hub/Central (Max 256 characters) (Note 3)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"32"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Publish weather and pollution data to IoT Hub/Central (Note 3)")))),(0,r.kt)("h4",{id:"azure-sphere-specific-ports"},"Azure Sphere specific ports"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Port"),(0,r.kt)("th",{parentName:"tr",align:null},"Port data"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Loads"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"60"),(0,r.kt)("td",{parentName:"tr",align:null},"1 or 0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Turn Red LED on or off")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"61"),(0,r.kt)("td",{parentName:"tr",align:null},"1 or 0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Turn Green LED on or off")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"62"),(0,r.kt)("td",{parentName:"tr",align:null},"1 or 0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Turn Blue LED on or off")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"63"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Loads onboard temperature")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"63"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Loads onboard pressure")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"63"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Loads onboard light sensor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"64"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Loads accelerometer X axis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"64"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Loads accelerometer Y axis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"64"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Loads accelerometer Z axis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"64"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Start the accelerometer timer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"64"),(0,r.kt)("td",{parentName:"tr",align:null},"4"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Stop the accelerometer timer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"64"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:"left"},"One-off accelerometer reading")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"64"),(0,r.kt)("td",{parentName:"tr",align:null},"6"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Calibrate accelerometer for angular rate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"64"),(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Load accelerometer for angular rate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"64"),(0,r.kt)("td",{parentName:"tr",align:null},"8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get latest movement inference result")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"66"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Power management disable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"66"),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Power management enable")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"66"),(0,r.kt)("td",{parentName:"tr",align:null},"2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Power management sleep")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"67"),(0,r.kt)("td",{parentName:"tr",align:null},"1..255"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Power management wake from sleep (seconds)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"71"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get Azure Sphere OS version number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"72"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Get first 8 characters of Azure Sphere device ID")))),(0,r.kt)("h4",{id:"8x8-led-panels"},"8x8 LED Panels"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Pi Sense HAT"),(0,r.kt)("li",{parentName:"ul"},"Mikroe Retro 8800 Click")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Port"),(0,r.kt)("th",{parentName:"tr",align:null},"Port data"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Loads"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"65"),(0,r.kt)("td",{parentName:"tr",align:null},"0..8"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Power management LED brightness")))),(0,r.kt)("h4",{id:"general-ports"},"General ports"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Port"),(0,r.kt)("th",{parentName:"tr",align:null},"Port data"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Loads"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"70"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Loads Altair emulator version number")))),(0,r.kt)("h4",{id:"display-8x8-led-panel-ports"},"Display 8x8 LED panel ports"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Port"),(0,r.kt)("th",{parentName:"tr",align:null},"Port data"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Loads"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"80"),(0,r.kt)("td",{parentName:"tr",align:null},"0, 1, 2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"0 = Bus mode, 1 = Font mode, 2 = Bitmap mode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"81"),(0,r.kt)("td",{parentName:"tr",align:null},"0, 1, 2"),(0,r.kt)("td",{parentName:"tr",align:"left"},"8x8 LED Panel RGB color. 0 = Red, 1 = Green, 2 = Blue")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"82"),(0,r.kt)("td",{parentName:"tr",align:null},"0..255"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set 8x8 LED Panel Red palette")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"83"),(0,r.kt)("td",{parentName:"tr",align:null},"0..255"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set 8x8 LED Panel Green palette")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"84"),(0,r.kt)("td",{parentName:"tr",align:null},"0..255"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set 8x8 LED Panel Blue palette")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"85"),(0,r.kt)("td",{parentName:"tr",align:null},"0..255"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Display ASCII character")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"90"),(0,r.kt)("td",{parentName:"tr",align:null},"0..255"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set row 0 bitmap")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"91"),(0,r.kt)("td",{parentName:"tr",align:null},"0..255"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set row 1 bitmap")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"92"),(0,r.kt)("td",{parentName:"tr",align:null},"0..255"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set row 2 bitmap")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"93"),(0,r.kt)("td",{parentName:"tr",align:null},"0..255"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set row 3 bitmap")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"94"),(0,r.kt)("td",{parentName:"tr",align:null},"0..255"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set row 4 bitmap")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"95"),(0,r.kt)("td",{parentName:"tr",align:null},"0..255"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set row 5 bitmap")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"96"),(0,r.kt)("td",{parentName:"tr",align:null},"0..255"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set row 6 bitmap")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"97"),(0,r.kt)("td",{parentName:"tr",align:null},"0..255"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set row 7 bitmap")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"98"),(0,r.kt)("td",{parentName:"tr",align:null},"0..63"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Turn pixel n on")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"99"),(0,r.kt)("td",{parentName:"tr",align:null},"0..63"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Turn pixel n off")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"100"),(0,r.kt)("td",{parentName:"tr",align:null},"0..63"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Pixel flip")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"101"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Clear, turn all pixels off")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"102"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Draw bitmap")))),(0,r.kt)("h4",{id:"openai-chatgpt"},"OpenAI ChatGPT"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Port"),(0,r.kt)("th",{parentName:"tr",align:null},"Port data"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Loads"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"120"),(0,r.kt)("td",{parentName:"tr",align:null},"0..255"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set system Message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"121"),(0,r.kt)("td",{parentName:"tr",align:null},"0..255"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set user message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"122"),(0,r.kt)("td",{parentName:"tr",align:null},"0..255"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Set assistant message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"123"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Clear all messages")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"124"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Load ChatGPT stream")))),(0,r.kt)("h3",{id:"input-ports"},"Input ports"),(0,r.kt)("p",null,"Typically, input ports will read data loaded by an output port."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Port"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"29"),(0,r.kt)("td",{parentName:"tr",align:null},"Query milliseconds timer status. Enabled or expired (true or false)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"30"),(0,r.kt)("td",{parentName:"tr",align:null},"Query seconds timer status. Enabled or expired (true or false)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"31"),(0,r.kt)("td",{parentName:"tr",align:null},"Query publish JSON pending status. Enabled or expired (true or false)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"32"),(0,r.kt)("td",{parentName:"tr",align:null},"Query publish weather pending status. Enabled or expired (true or false)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"68"),(0,r.kt)("td",{parentName:"tr",align:null},"devget eof")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"69"),(0,r.kt)("td",{parentName:"tr",align:null},"Is network ready")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"Read loaded byte stream")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"201"),(0,r.kt)("td",{parentName:"tr",align:null},"Read webget file stream")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"202"),(0,r.kt)("td",{parentName:"tr",align:null},"Read devget file stream")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"123"),(0,r.kt)("td",{parentName:"tr",align:null},"Read OpenAi ChatGPT stream")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"120"),(0,r.kt)("td",{parentName:"tr",align:null},"Read OpenAI streaming status")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"121"),(0,r.kt)("td",{parentName:"tr",align:null},"Read OpenAI message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"122"),(0,r.kt)("td",{parentName:"tr",align:null},"Read OpenAI finished status")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Requires an Open Weather Map API Key, and an active internet connection."),(0,r.kt)("li",{parentName:"ol"},"Requires an active internet connection to call the ",(0,r.kt)("a",{parentName:"li",href:"https://get.geojs.io/v1/ip/geo.json"},"geojs.io")," web service."),(0,r.kt)("li",{parentName:"ol"},"Requires an active internet connection and a free or paid tier or Azure IoT Central.")),(0,r.kt)("h2",{id:"using-intel-8080-input-output-ports"},"Using Intel 8080 Input Output ports"),(0,r.kt)("p",null,"The following code snippets use the Intel 8080 IO ports. The code samples included on the CP/M boot disk expand on these snippets."),(0,r.kt)("h3",{id:"assembler-access-to-intel-8080-io-ports"},"Assembler access to Intel 8080 IO Ports"),(0,r.kt)("p",null,"The following assembly code demonstrates the use of the Intel 8080 IO port 30 timer. The code sets a 2-second delay, and then waits for the timer to expire. This is a snippet of the ",(0,r.kt)("strong",{parentName:"p"},"SLEEP.ASM")," sample included on drive B: of the Altair emulator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-asm"},"      ORG 0100H   ;CP/M base of TPA (transient program area)\n      MVI A,2     ;Move 2 to the accumulator to set a 2 second delay\n      OUT 30      ;Start timer\nLOOP: IN 30       ;Get delay timer state into the accumulator\n      CPI 00H     ;If accumulator equal to 0 then timer has expired\n      JZ BACK     ;Jump on zero\n      JMP LOOP\nBACK: RET\n")),(0,r.kt)("h3",{id:"bsd-c-access-to-intel-8080-io-ports"},"BSD C access to Intel 8080 IO Ports"),(0,r.kt)("p",null,"The following C code demonstrates the use of the Intel 8080 IO port 30 timer. The code sets a 1-second delay, and then waits for the timer to expire. This is a snippet of the ",(0,r.kt)("strong",{parentName:"p"},"HW.C")," sample included on drive B: of the Altair emulator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"outp(30,1);      /* Enable delay for 1 second */\nwhile(inp(30));  /* Wait for delay to expire */\n")),(0,r.kt)("h3",{id:"basic-access-to-intel-8080-io-ports"},"BASIC access to Intel 8080 IO Ports"),(0,r.kt)("p",null,"The following BASIC code demonstrates the use of the Intel 8080 IO port 30 timer. The code sets a 1-second delay, and then waits for the timer to expire. This is a snippet of the ",(0,r.kt)("strong",{parentName:"p"},"COUNT.BAS")," sample included on drive A: of the Altair emulator."),(0,r.kt)("h4",{id:"delay-io-ports"},"Delay IO ports"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-basic"},"900 REM This sleep subroutine sleeps or delays for 1 second\n1000 OUT 30, 1\n1100 WAIT 30, 1, 1\n1200 RETURN\n")),(0,r.kt)("h4",{id:"weather-io-ports"},"Weather IO ports"),(0,r.kt)("p",null,"The following BASIC code demonstrates the use of Intel 8080 output port 35 to load the current temperature, and the input port to read the temperature. This is a snippet of the ",(0,r.kt)("strong",{parentName:"p"},"WEATHER.BAS")," sample included on drive A: of the Altair emulator."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-BASIC"},'500 PORT = 34 : REM Set the output port number\n510 PDATA = 0 : REM Set the port data value to 0 for temperature\n520 GOSUB 4800 : REM Loads the temperature and then reads the temperature string\n530 PRINT RSTRING$\n540 END\n\n4800 REM SUBROUTINE READS STRING DATA FROM PORT UNTIL NULL CHARACTER\n4900 OUT PORT, PDATA\n5000 RSTRING$ = ""\n5100 C=INP(200) : REM Read the temperature character by character until NULL returned\n5200 IF C = 0 THEN RETURN\n5300 RSTRING$ = RSTRING$ + CHR$(C)\n5400 GOTO 5100\n')),(0,r.kt)("h4",{id:"font-support"},"Font support"),(0,r.kt)("p",null,"The following example shows how to use the Intel 8080 IO ports to display characters on the Pi Sense HAT or Retro Click 8x8 LED panels. To understand IO ports, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gloveboxes/Altair8800.Emulator.UN-X/blob/main/AltairHL_emulator/io_ports.c"},"io_ports.c")," source code. This example is included on drive A: in a file named ",(0,r.kt)("strong",{parentName:"p"},"FONT.BAS"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-basic"},"100 REM 8x8 LED Panel Demo\n200 OUT 80,1 : REM Flip the 8x8 LED panel to FONT mode\n300 FOR J = 1 TO 10\n400 FOR I = 33 TO 122\n500 OUT 81, I MOD 3 : REM Cycle font color\n600 OUT 85, I : REM Display character on the 8x8 LED panel\n700 PRINT CHR$(I)\n800 OUT 29, 250 : WAIT 29, 1, 1 : REM Pause for 250 milliseconds\n900 NEXT I\n1000 NEXT J\n1100 OUT 80,0\n")),(0,r.kt)("h4",{id:"azure-sphere-blinky"},"Azure Sphere Blinky"),(0,r.kt)("p",null,"The following example shows how to use the Intel 8080 IO ports to blink LEDs on an Azure Sphere. To understand how IO ports are implemented, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/gloveboxes/Altair8800.Emulator.UN-X/blob/main/AltairHL_emulator/io_ports.c"},"io_ports.c")," source code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-basic"},"5 OUT 80, 1 : REM switch display to font mode\n10 WHILE 1=1 : REM Loop forever\n20 OUT 60, 1 : REM switch on the red LED\n30 OUT 29, 250 : WAIT 29, 1, 1 : REM delay 250 milliseconds\n40 OUT 61, 1 : REM switch on the green LED\n50 OUT 29, 250 : WAIT 29, 1, 1 : REM delay 250 milliseconds\n60 OUT 62, 1 : REM switch on the blue LED\n70 OUT 29, 250 : WAIT 29, 1, 1 : REM delay 250 milliseconds\n80 OUT 60, 0 : OUT 61, 0 : OUT 62, 0 : REM Turn off all LEDs\n85 OUT 29, 250 : WAIT 29, 1, 1 : REM delay 250 milliseconds\n90 WEND\n100 OUT 80, 0 : REM switch display to bus mode\n")))}u.isMDXComponent=!0},9258:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/i8080_ports-9b5ff9e08fcb3f728faf11072a753dbf.png"}}]);