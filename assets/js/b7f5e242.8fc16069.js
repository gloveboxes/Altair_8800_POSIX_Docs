"use strict";(self.webpackChunkaltair_docs=self.webpackChunkaltair_docs||[]).push([[7048],{3905:(n,e,t)=>{t.d(e,{Zo:()=>d,kt:()=>u});var i=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function a(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var s=i.createContext({}),p=function(n){var e=i.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):a(a({},e),n)),t},d=function(n){var e=p(n.components);return i.createElement(s.Provider,{value:e},n.children)},c={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},f=i.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,s=n.parentName,d=l(n,["components","mdxType","originalType","parentName"]),f=p(t),u=r,m=f["".concat(s,".").concat(u)]||f[u]||c[u]||o;return t?i.createElement(m,a(a({ref:e},d),{},{components:t})):i.createElement(m,a({ref:e},d))}));function u(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,a=new Array(o);a[0]=f;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l.mdxType="string"==typeof n?n:r,a[1]=l;for(var p=2;p<o;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7771:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=t(7462),r=(t(7294),t(3905));const o={},a="Editing files",l={unversionedId:"start/programming/Editing-files",id:"start/programming/Editing-files",title:"Editing files",description:"The Altair emulator includes the MicroPro Word-Master text editor for editing documents and source code. Word-Master was advanced for its day, but by today's standards, not the most user-friendly.",source:"@site/docs/start/programming/01-Editing-files.md",sourceDirName:"start/programming",slug:"/start/programming/Editing-files",permalink:"/altair_8800_posix_docs/start/programming/Editing-files",draft:!1,editUrl:"https://github.com/gloveboxes/altair_8800_posix_docs/tree/main/docs/start/programming/01-Editing-files.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"start",previous:{title:"Manuals",permalink:"/altair_8800_posix_docs/start/programming/Manuals"},next:{title:"Intel 8080 IO Ports",permalink:"/altair_8800_posix_docs/start/programming/i8080-IO-Ports"}},s={},p=[{value:"Ten-minute video introduction to editing files",id:"ten-minute-video-introduction-to-editing-files",level:2},{value:"Editing files with Word-Master",id:"editing-files-with-word-master",level:2},{value:"The Get File (gf) application",id:"the-get-file-gf-application",level:2}],d={toc:p};function c(n){let{components:e,...o}=n;return(0,r.kt)("wrapper",(0,i.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"editing-files"},"Editing files"),(0,r.kt)("p",null,"The Altair emulator includes the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AzureSphereCloudEnabledAltair8800/Altair8800.manuals/blob/master/Word-Master_Manual.pdf"},"MicroPro Word-Master")," text editor for editing documents and source code. Word-Master was advanced for its day, but by today's standards, not the most user-friendly."),(0,r.kt)("h2",{id:"ten-minute-video-introduction-to-editing-files"},"Ten-minute video introduction to editing files"),(0,r.kt)("p",null,"The easiest way to edit files is with Visul Studio Code and then copy the file to the Altair CP/M filesystem.  Watch the video to learn more."),(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/3C_5WcSWqro",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("h2",{id:"editing-files-with-word-master"},"Editing files with Word-Master"),(0,r.kt)("p",null,"It is recommended to use Visual Studio Code and the CP/M ",(0,r.kt)("strong",{parentName:"p"},"gf")," program to edit files and then copy them to the Altair filesystem. But for real retrocomputing diehards, the CP/M disk image includes the Word-Master text editor. To use Word-Master, you must switch the web terminal to character input mode."),(0,r.kt)("p",null,"To switch between line input mode and character input mode, select ",(0,r.kt)("strong",{parentName:"p"},"Ctrl+L"),". When you're finished with Word-Master, switch back to line input mode. Line input mode is a more efficient way for the web terminal to communicate with the Altair emulator."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Screenshot of Altair running the Word-Master text editor.",src:t(2243).Z,width:"917",height:"318"})),(0,r.kt)("p",null,"For more information, view the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/AzureSphereCloudEnabledAltair8800/Altair8800.manuals/blob/master/Word-Master_Manual.pdf?azure-portal=true"},"Word-Master user's guide"),"."),(0,r.kt)("p",null,"The following table lists the Ctrl characters that Word-Master uses. This list is sourced from the ",(0,r.kt)("a",{parentName:"p",href:"https://glasstty.com/?p=1235"},"Experiencing the Altair 8800")," blog."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"VIDEO MODE SUMMARY\n\n^O   INSERTION ON/OFF           RUB  DELETE CHR LEFT\n^S   CURSOR LEFT CHAR           ^G   DELETE CHR RIGHT\n^D   CURSOR RIGHT CHAR          ^\\   DELETE WORD LEFT\n^A   CURSOR LEFT WORD           ^T   DELETE WORD RIGHT\n^F   CURSOR RIGHT WORD          ^U   DELETE LINE LEFT\n^Q   CURSOR RIGHT TAB           ^K   DELETE LINE RIGHT\n^E   CURSOR UP LINE             ^Y   DELETE WHOLE LINE\n^X   CURSOR DOWN LINE           ^I   PUT TAB IN FILE\n^^   CURSOR TOP/BOT SCREEN      ^N   PUT CRLF IN FILE\n^B   CURSOR RIGHT/LEFT LINE     ^@   DO NEXT CHR 4X\n^W   FILE DOWN 1 LINE           ^P   NEXT CHR IN FILE\n^Z   FILE UP 1 LINE             ^V   NEXT CHR(S) TO VIDEO\n^R   FILE DOWN SCREEN           ESC  EXIT VIDEO MODE\n^C   FILE UP SCREEN             ^J   DISPLAY THIS\n\n")),(0,r.kt)("p",null,"In character input mode, the following keyboard mappings will improve your editing experience:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Keyboard key            Word-Master Ctrl Sequence\n----------------------------------------------\nInsert                  ^O   INSERTION ON/OFF\nDelete                  ^G   DELETE CHR RIGHT\nCursor Left             ^S   CURSOR LEFT CHAR\nCursor Right            ^D   CURSOR RIGHT CHAR\nCursor Up               ^E   CURSOR UP LINE\nCursor Down             ^X   CURSOR DOWN LINE\n")),(0,r.kt)("h2",{id:"the-get-file-gf-application"},"The Get File (gf) application"),(0,r.kt)("p",null,"The gf.c application was initially written using the Word-Master text editor. Once it was working sufficiently well, the application was further refined using Visual Studio Code. The Get File (gf) application uses Intel 8080 IO Port instructions to transfer the file over HTTP to the CP/M filesystem."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},'#include <stdio.h>\n#define STG_FILENAME 68\n#define STG_EOF      68\n#define STG_GET_BYTE 202\n\n#define WG_EPNAME   110\n#define WG_GET_URL  111\n#define WWG_SET_URL 112\n#define WG_SELECTED 113\n#define WG_FILENAME 114\n#define WG_GET_BYTE 201\n#define WG_STATUS   33\n\n#define WG_EOF       0\n#define WG_WAITING   1\n#define WG_DATAREADY 2\n#define WG_FAILED    3\n\n#define GET_STRING 200\n\nFILE *fp_input;\nFILE *fp_output;\nchar *endpoint;\nchar *filename;\nchar buf[128];\nint selected_ep;\n\nmain(argc, argv) char **argv;\nint argc;\n{\n    int source;\n    int wg_result;\n\n    fp_input = fopen("stdin", "r");\n\n    printf("\\nFile transfer utility.\\n");\n    printf("Transfer a file from Azure Sphere storage or the web over HTTP(s).\\n\\n");\n\n    if (argc == 2)\n    {\n        while (get_endpoint() == -1)\n        {\n        }\n\n        set_ep_url(endpoint);\n        printf("\\nEndpoint URL set to: %s\\n", endpoint);\n        exit();\n    }\n\n    if (argc == 1)\n    {\n        while (set_selected() == -1)\n        {\n        }\n\n        while (get_filename() == -1)\n\n            printf("\\nTransferring file \'%s\' from endpoint \'%d\'\\n\\n", filename, selected_ep);\n    }\n\n    if ((fp_output = fopen(filename, "w")) == NULL)\n    {\n        printf("Failed to open %s\\n", filename);\n        exit();\n    }\n\n    switch (selected_ep)\n    {\n        case 0:\n            set_stg_fname(filename);\n            immutable_copy();\n            break;\n        case 1:\n            set_fname_web(filename, strlen(filename), 0);\n            wg_result = web_copy();\n            break;\n        case 2:\n            set_fname_web(filename, strlen(filename), 1);\n            wg_result = web_copy();\n            break;\n        default:\n            break;\n    }\n\n    fclose(fp_output);\n    if (wg_result == -1)\n    {\n        printf("\\n\\nWeb copy failed for file \'%s\'. Check filename and network connection\\n", filename);\n        unlink(filename);\n    }\n}\n\nvoid set_ep_url(endpoint) char *endpoint;\n{\n    int len;\n    int c;\n    len = strlen(endpoint);\n    for (c = 0; c < len; c++)\n    {\n        outp(WG_EPNAME, endpoint[c]);\n    }\n\n    outp(WG_EPNAME, 0);\n}\n\n/* get personal endpoint url */\nvoid get_ep_url(endpoint) int endpoint;\n{\n    printf("2) ");\n    char c;\n    outp(WG_GET_URL, 0);\n    while ((c = inp(GET_STRING)) != 0)\n    {\n        printf("%c", c);\n    }\n    printf("%c", \'\\n\');\n}\n\n/* Get selected endpoint URL */\nvoid get_selected_ep()\n{\n    printf("Selected endpoint: ");\n    char c;\n    outp(WG_SELECTED, 0);\n    while ((c = inp(GET_STRING)) != 0)\n    {\n        printf("%c", c);\n    }\n    printf("%c", \'\\n\');\n}\n\n/* Sets the filename to be copied with i8080 port 68 */\nint set_stg_fname(filename)\nchar *filename;\n{\n    int c;\n    int len;\n\n    len = strlen(filename);\n\n    for (c = 0; c < len; c++)\n    {\n        outp(STG_FILENAME, filename[c]);\n    }\n    outp(STG_FILENAME, 0);\n    printf("filename set\\n");\n}\n\n/* copies file byte stream from i8080 port 202 */\nvoid immutable_copy()\n{\n    char ch;\n\n    /* While not end of file read in next byte */\n    while ((ch = inp(STG_EOF)) == 0)\n    {\n        fputc(inp(STG_GET_BYTE), fp_output);\n        printf(".");\n    }\n}\n\n/* set the selected endpoint url */\nint set_selected()\n{\n    char *endpoint;\n\n    printf("Select endpoint:\\n");\n    printf("0) Azure Sphere immutable storage\\n");\n    printf("1) https://raw.githubusercontent.com/AzureSphereCloudEnabledAltair8800/RetroGames/main\\n");\n    get_ep_url(1);\n\n    printf("\\nSelect endpoint number: ");\n    endpoint = fgets(buf, 128, fp_input);\n\n    if (strlen(endpoint) > 2)\n    {\n        return -1;\n    }\n\n    if (endpoint[0] >= \'0\' && endpoint[0] <= \'2\')\n    {\n        selected_ep = atoi(endpoint);\n        return 0;\n    }\n    return -1;\n}\n\n/* Sets the filename to be copied with i8080 port 68 */\nint set_fname_web(filename, len, endpoint)\nchar *filename;\nint len;\nint endpoint;\n{\n    /* Set web endpoint */\n    outp(WWG_SET_URL, endpoint);\n\n    int c;\n    for (c = 0; c < len; c++)\n    {\n        outp(WG_FILENAME, filename[c]);\n    }\n    outp(WG_FILENAME, 0);\n}\n\n/* copies file byte stream */\nint web_copy()\n{\n    char status;\n\n    while ((status = inp(WG_STATUS)) != WG_EOF)\n    {\n        if (status == WG_FAILED)\n        {\n            return -1;\n        }\n\n        if (status == WG_DATAREADY)\n        {\n            fputc(inp(WG_GET_BYTE), fp_output);\n            printf(".");\n        }\n        else\n        {\n            printf("*");\n        }\n    }\n\n    return 0;\n}\n\nint get_filename()\n{\n    int len;\n\n    printf("Enter filename to transfer: ");\n    filename = fgets(buf, 128, fp_input);\n\n    len = strlen(filename);\n\n    if (len < 1 || len > 13)\n    {\n        printf("Filename must be 1 to 12 characters. Try again.\\n");\n        return -1;\n    }\n\n    filename[len - 1] = 0x00;\n\n    return 1;\n}\n\nint get_endpoint()\n{\n    char url[5];\n    int c;\n    int len;\n\n    printf("Enter endpoint url: ");\n\n    endpoint = fgets(buf, 128, fp_input);\n\n    len = strlen(endpoint);\n    len--;\n    endpoint[len] = 0x00;\n\n    if (len < 8)\n    {\n        printf("Invalid endpoint url.\\n");\n        return -1;\n    }\n\n    for (c = 0; c < 4; c++)\n    {\n        url[c] = toupper(endpoint[c]);\n    }\n    url[4] = 0x00;\n\n    if (strcmp(url, "HTTP"))\n    {\n        printf("Invalid endpoint url. Must start with \'http\'.\\n");\n        return -1;\n    }\n\n    return 0;\n}\n')))}c.isMDXComponent=!0},2243:(n,e,t)=>{t.d(e,{Z:()=>i});const i=t.p+"assets/images/word-master-character-mode-778ba92abde30f773784097cfa1c0727.png"}}]);