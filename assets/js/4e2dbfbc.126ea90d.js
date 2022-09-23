"use strict";(self.webpackChunkaltair_docs=self.webpackChunkaltair_docs||[]).push([[3428],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=n(e,["components","mdxType","originalType","parentName"]),d=c(a),h=i,u=d["".concat(p,".").concat(h)]||d[h]||m[h]||o;return a?r.createElement(u,l(l({ref:t},s),{},{components:a})):r.createElement(u,l({ref:t},s))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,l=new Array(o);l[0]=d;var n={};for(var p in t)hasOwnProperty.call(t,p)&&(n[p]=t[p]);n.originalType=e,n.mdxType="string"==typeof e?e:i,l[1]=n;for(var c=2;c<o;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7974:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>n,toc:()=>c});var r=a(7462),i=(a(7294),a(3905));const o={sidebar_position:5},l="Create a boot SD card",n={unversionedId:"azsphere/Deploy-the-Altair/Create-boot-SD-card",id:"azsphere/Deploy-the-Altair/Create-boot-SD-card",title:"Create a boot SD card",description:"Follow these instructions to create an Altair boot SD card or a Wi-Fi enabled Altair boot SD card.",source:"@site/docs/azsphere/01-Deploy-the-Altair/05-Create-boot-SD-card.md",sourceDirName:"azsphere/01-Deploy-the-Altair",slug:"/azsphere/Deploy-the-Altair/Create-boot-SD-card",permalink:"/altair_8800_docs/azsphere/Deploy-the-Altair/Create-boot-SD-card",draft:!1,editUrl:"https://github.com/gloveboxes/altair_8800_docs/tree/main/docs/azsphere/01-Deploy-the-Altair/05-Create-boot-SD-card.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"azsphere",previous:{title:"Wi-Fi configuration",permalink:"/altair_8800_docs/azsphere/Deploy-the-Altair/WiFi-configuration"},next:{title:"Power management",permalink:"/altair_8800_docs/azsphere/Deploy-the-Altair/Power-management"}},p={},c=[{value:"Install the prerequisite software",id:"install-the-prerequisite-software",level:2},{value:"Create an Altair boot SD card",id:"create-an-altair-boot-sd-card",level:2},{value:"Create a Wi-Fi enabled Altair boot SD card",id:"create-a-wi-fi-enabled-altair-boot-sd-card",level:2},{value:"Create a Wi-Fi profile",id:"create-a-wi-fi-profile",level:3},{value:"Create a Wi-Fi enabled Altair boot image",id:"create-a-wi-fi-enabled-altair-boot-image",level:3},{value:"Flash the Wi-Fi enabled Altair boot image",id:"flash-the-wi-fi-enabled-altair-boot-image",level:3}],s={toc:c};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-a-boot-sd-card"},"Create a boot SD card"),(0,i.kt)("p",null,"Follow these instructions to create an Altair boot SD card or a Wi-Fi enabled Altair boot SD card."),(0,i.kt)("h2",{id:"install-the-prerequisite-software"},"Install the prerequisite software"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Install ",(0,i.kt)("a",{parentName:"li",href:"https://www.balena.io/etcher"},"Balena Etcher")," to flash an SD card."),(0,i.kt)("li",{parentName:"ol"},"Install Python 3 from the ",(0,i.kt)("a",{parentName:"li",href:"https://www.python.org/downloads"},"Python download web page"),"."),(0,i.kt)("li",{parentName:"ol"},"Install ",(0,i.kt)("a",{parentName:"li",href:"https://pypi.org/project/PyYAML/"},"PyYaml"))),(0,i.kt)("h2",{id:"create-an-altair-boot-sd-card"},"Create an Altair boot SD card"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Plug the Micro SD Card into your computer."),(0,i.kt)("li",{parentName:"ol"},"Start Balena Etcher."),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},"Flash from file"),"."),(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"altair_burn_disk_image.bin")," from the ",(0,i.kt)("strong",{parentName:"li"},"Altair_sd_card_image_tools")," folder.",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Note, when warned the partition table is missing, select ",(0,i.kt)("strong",{parentName:"p"},"Continue"),"."))),(0,i.kt)("li",{parentName:"ol"},"Select the target."),(0,i.kt)("li",{parentName:"ol"},"Select Flash to write the contents of the altair_burn_disk_image.bin file to the SD card."),(0,i.kt)("li",{parentName:"ol"},"When the copy has completed, remove the SD card from your computer, insert into the Mikroe micro SD card Click, then power on the Azure Sphere device.")),(0,i.kt)("h2",{id:"create-a-wi-fi-enabled-altair-boot-sd-card"},"Create a Wi-Fi enabled Altair boot SD card"),(0,i.kt)("p",null,"The Azure Sphere supports the following Wi-Fi network authentication protocols."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Open"),(0,i.kt)("li",{parentName:"ul"},"PSK"),(0,i.kt)("li",{parentName:"ul"},"EAP-TLS")),(0,i.kt)("h3",{id:"create-a-wi-fi-profile"},"Create a Wi-Fi profile"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From a command prompt, navigate to the ",(0,i.kt)("strong",{parentName:"p"},"Altair_sd_card_image_tools")," folder.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"There are three Wi-Fi profiles in this folder. Select and edit the profile based on your Wi-Fi authentication requirements."),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"wifi_open.yaml"),(0,i.kt)("li",{parentName:"ul"},"wifi_psk.yaml"),(0,i.kt)("li",{parentName:"ul"},"wifi_eap.yaml")))),(0,i.kt)("h3",{id:"create-a-wi-fi-enabled-altair-boot-image"},"Create a Wi-Fi enabled Altair boot image"),(0,i.kt)("p",null,"The following command adds the Wi-Fi profile to the  ",(0,i.kt)("strong",{parentName:"p"},"altair_burn_disk_image.bin")," boot image and generates the ",(0,i.kt)("strong",{parentName:"p"},"altair_burn_disk_image_wifi.bin")," boot image."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Run the ",(0,i.kt)("strong",{parentName:"p"},"altair_wifi_config.py")," script passing the desired Wi-Fi profile."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"python3 altair_wifi_config.py -p {profile}.yaml\n")))),(0,i.kt)("h3",{id:"flash-the-wi-fi-enabled-altair-boot-image"},"Flash the Wi-Fi enabled Altair boot image"),(0,i.kt)("p",null,"Finally, flash the Altair boot image to an SD card. When the Altair emulator boots from the SD card it will look for a Wi-Fi profile. If a Wi-Fi profile is found, the Azure Sphere Wi-Fi network is provisioned and then the Wi-Fi profile is erased from the SD card."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Plug the Micro SD Card into your computer."),(0,i.kt)("li",{parentName:"ol"},"Start Balena Etcher."),(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},"Flash from file"),"."),(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"altair_burn_disk_image_wifi.bin")," from the ",(0,i.kt)("strong",{parentName:"li"},"Altair_sd_card_image_tools")," folder.",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Note, when warned the partition table is missing, select ",(0,i.kt)("strong",{parentName:"p"},"Continue"),"."))),(0,i.kt)("li",{parentName:"ol"},"Select the target."),(0,i.kt)("li",{parentName:"ol"},"Select Flash to write the contents of the ",(0,i.kt)("strong",{parentName:"li"},"altair_burn_disk_image_wifi.bin")," file to the SD card."),(0,i.kt)("li",{parentName:"ol"},"When the copy has completed, remove the SD card from your computer, insert into the Mikroe micro SD card Click, then power on the Azure Sphere device.")))}m.isMDXComponent=!0}}]);