import{_ as y,o as i,c as l,a as o,w as P,v,t as c,F as p,r as f,b as u,d as h,n as d,e as _,f as C,g as S,u as b,h as D,s as R,p as x,i as M,j as B}from"./index-DO34mEW5.js";const L={id:"infobox"},G={class:"green"},I={key:0},X={data(){return{showInfo:!1,notIncludedSpec:["brand","model","price"]}},methods:{formatName(a){let t="";for(let e=0;e<a.length;e++)a.charAt(e-1)==="_"||e===0?t+=a.charAt(e).toUpperCase():a.charAt(e)==="_"?t+=" ":t+=a.charAt(e);return t}}},N=Object.assign(X,{__name:"ComponentInfo",props:{prod:{type:Object,required:!0}},setup(a){return(t,e)=>(i(),l(p,null,[o("a",{onClick:e[0]||(e[0]=n=>t.showInfo=!0)},"More Info"),P(o("div",{id:"info",onClick:e[1]||(e[1]=n=>t.showInfo=!1)},[o("div",L,[o("h2",G,c(a.prod.brand)+" "+c(a.prod.model),1),(i(!0),l(p,null,f(Object.keys(a.prod),n=>(i(),l("ul",null,[t.notIncludedSpec.includes(n)?u("",!0):(i(),l("li",I,c(t.formatName(n))+": "+c(a.prod[n]),1))]))),256))])],512),[[v,t.showInfo]])],64))}}),V=y(N,[["__scopeId","data-v-393bc67b"]]),z={class:"product"},O={class:"green"},H={id:"price"},q={methods:{prodSelect(){this.$emit("prod-select",this.prod)}}},U=Object.assign(q,{__name:"ProductSlot",props:{prod:{type:Object,required:!0}},setup(a){return(t,e)=>(i(),l("div",z,[o("h3",O,c(a.prod.brand)+" "+c(a.prod.model),1),h(V,{prod:a.prod},null,8,["prod"]),o("p",H,"$"+c(a.prod.price),1),o("button",{onClick:e[0]||(e[0]=(...n)=>t.prodSelect&&t.prodSelect(...n))},"Select")]))}}),F=y(U,[["__scopeId","data-v-d1b5a9f7"]]);var K=(a,t)=>{const e=a.__vccOpts||a;for(const[n,m]of t)e[n]=m;return e};const E={data(){return{innerValue:1}},props:{modelValue:{type:Number},pageCount:{type:Number,required:!0},initialPage:{type:Number,default:1},forcePage:{type:Number},clickHandler:{type:Function,default:()=>{}},pageRange:{type:Number,default:3},marginPages:{type:Number,default:1},prevText:{type:String,default:"Prev"},nextText:{type:String,default:"Next"},breakViewText:{type:String,default:"…"},containerClass:{type:String,default:"pagination"},pageClass:{type:String,default:"page-item"},pageLinkClass:{type:String,default:"page-link"},prevClass:{type:String,default:"page-item"},prevLinkClass:{type:String,default:"page-link"},nextClass:{type:String,default:"page-item"},nextLinkClass:{type:String,default:"page-link"},breakViewClass:{type:String},breakViewLinkClass:{type:String},activeClass:{type:String,default:"active"},disabledClass:{type:String,default:"disabled"},noLiSurround:{type:Boolean,default:!1},firstLastButton:{type:Boolean,default:!1},firstButtonText:{type:String,default:"First"},lastButtonText:{type:String,default:"Last"},hidePrevNext:{type:Boolean,default:!1}},computed:{selected:{get:function(){return this.modelValue||this.innerValue},set:function(a){this.innerValue=a}},pages:function(){let a={};if(this.pageCount<=this.pageRange)for(let t=0;t<this.pageCount;t++){let e={index:t,content:t+1,selected:t===this.selected-1};a[t]=e}else{const t=Math.floor(this.pageRange/2);let e=r=>{let g={index:r,content:r+1,selected:r===this.selected-1};a[r]=g},n=r=>{let g={disabled:!0,breakView:!0};a[r]=g};for(let r=0;r<this.marginPages;r++)e(r);let m=0;this.selected-t>0&&(m=this.selected-1-t);let s=m+this.pageRange-1;s>=this.pageCount&&(s=this.pageCount-1,m=s-this.pageRange+1);for(let r=m;r<=s&&r<=this.pageCount-1;r++)e(r);m>this.marginPages&&n(m-1),s+1<this.pageCount-this.marginPages&&n(s+1);for(let r=this.pageCount-1;r>=this.pageCount-this.marginPages;r--)e(r)}return a}},methods:{handlePageSelected(a){this.selected!==a&&(this.innerValue=a,this.$emit("update:modelValue",a),this.clickHandler(a))},prevPage(){this.selected<=1||this.handlePageSelected(this.selected-1)},nextPage(){this.selected>=this.pageCount||this.handlePageSelected(this.selected+1)},firstPageSelected(){return this.selected===1},lastPageSelected(){return this.selected===this.pageCount||this.pageCount===0},selectFirstPage(){this.selected<=1||this.handlePageSelected(1)},selectLastPage(){this.selected>=this.pageCount||this.handlePageSelected(this.pageCount)}},beforeMount(){this.innerValue=this.initialPage},beforeUpdate(){this.forcePage!==void 0&&this.forcePage!==this.selected&&(this.selected=this.forcePage)}},W=["tabindex","innerHTML"],Z=["tabindex","innerHTML"],j=["onClick","onKeyup"],Y=["tabindex","innerHTML"],Q=["tabindex","innerHTML"],J=["innerHTML"],$=["innerHTML"],ee=["onClick","onKeyup"],te=["innerHTML"],ae=["innerHTML"];function re(a,t,e,n,m,s){return e.noLiSurround?(i(),l("div",{key:1,class:d(e.containerClass)},[e.firstLastButton?(i(),l("a",{key:0,onClick:t[8]||(t[8]=r=>s.selectFirstPage()),onKeyup:t[9]||(t[9]=_(r=>s.selectFirstPage(),["enter"])),class:d([e.pageLinkClass,s.firstPageSelected()?e.disabledClass:""]),tabindex:"0",innerHTML:e.firstButtonText},null,42,J)):u("",!0),s.firstPageSelected()&&e.hidePrevNext?u("",!0):(i(),l("a",{key:1,onClick:t[10]||(t[10]=r=>s.prevPage()),onKeyup:t[11]||(t[11]=_(r=>s.prevPage(),["enter"])),class:d([e.prevLinkClass,s.firstPageSelected()?e.disabledClass:""]),tabindex:"0",innerHTML:e.prevText},null,42,$)),(i(!0),l(p,null,f(s.pages,r=>(i(),l(p,null,[r.breakView?(i(),l("a",{key:r.index,class:d([e.pageLinkClass,e.breakViewLinkClass,r.disabled?e.disabledClass:""]),tabindex:"0"},[C(a.$slots,"breakViewContent",{},()=>[S(c(e.breakViewText),1)])],2)):r.disabled?(i(),l("a",{key:r.index,class:d([e.pageLinkClass,r.selected?e.activeClass:"",e.disabledClass]),tabindex:"0"},c(r.content),3)):(i(),l("a",{key:r.index,onClick:g=>s.handlePageSelected(r.index+1),onKeyup:_(g=>s.handlePageSelected(r.index+1),["enter"]),class:d([e.pageLinkClass,r.selected?e.activeClass:""]),tabindex:"0"},c(r.content),43,ee))],64))),256)),s.lastPageSelected()&&e.hidePrevNext?u("",!0):(i(),l("a",{key:2,onClick:t[12]||(t[12]=r=>s.nextPage()),onKeyup:t[13]||(t[13]=_(r=>s.nextPage(),["enter"])),class:d([e.nextLinkClass,s.lastPageSelected()?e.disabledClass:""]),tabindex:"0",innerHTML:e.nextText},null,42,te)),e.firstLastButton?(i(),l("a",{key:3,onClick:t[14]||(t[14]=r=>s.selectLastPage()),onKeyup:t[15]||(t[15]=_(r=>s.selectLastPage(),["enter"])),class:d([e.pageLinkClass,s.lastPageSelected()?e.disabledClass:""]),tabindex:"0",innerHTML:e.lastButtonText},null,42,ae)):u("",!0)],2)):(i(),l("ul",{key:0,class:d(e.containerClass)},[e.firstLastButton?(i(),l("li",{key:0,class:d([e.pageClass,s.firstPageSelected()?e.disabledClass:""])},[o("a",{onClick:t[0]||(t[0]=r=>s.selectFirstPage()),onKeyup:t[1]||(t[1]=_(r=>s.selectFirstPage(),["enter"])),class:d(e.pageLinkClass),tabindex:s.firstPageSelected()?-1:0,innerHTML:e.firstButtonText},null,42,W)],2)):u("",!0),s.firstPageSelected()&&e.hidePrevNext?u("",!0):(i(),l("li",{key:1,class:d([e.prevClass,s.firstPageSelected()?e.disabledClass:""])},[o("a",{onClick:t[2]||(t[2]=r=>s.prevPage()),onKeyup:t[3]||(t[3]=_(r=>s.prevPage(),["enter"])),class:d(e.prevLinkClass),tabindex:s.firstPageSelected()?-1:0,innerHTML:e.prevText},null,42,Z)],2)),(i(!0),l(p,null,f(s.pages,r=>(i(),l("li",{key:r.index,class:d([e.pageClass,r.selected?e.activeClass:"",r.disabled?e.disabledClass:"",r.breakView?e.breakViewClass:""])},[r.breakView?(i(),l("a",{key:0,class:d([e.pageLinkClass,e.breakViewLinkClass]),tabindex:"0"},[C(a.$slots,"breakViewContent",{},()=>[S(c(e.breakViewText),1)])],2)):r.disabled?(i(),l("a",{key:1,class:d(e.pageLinkClass),tabindex:"0"},c(r.content),3)):(i(),l("a",{key:2,onClick:g=>s.handlePageSelected(r.index+1),onKeyup:_(g=>s.handlePageSelected(r.index+1),["enter"]),class:d(e.pageLinkClass),tabindex:"0"},c(r.content),43,j))],2))),128)),s.lastPageSelected()&&e.hidePrevNext?u("",!0):(i(),l("li",{key:2,class:d([e.nextClass,s.lastPageSelected()?e.disabledClass:""])},[o("a",{onClick:t[4]||(t[4]=r=>s.nextPage()),onKeyup:t[5]||(t[5]=_(r=>s.nextPage(),["enter"])),class:d(e.nextLinkClass),tabindex:s.lastPageSelected()?-1:0,innerHTML:e.nextText},null,42,Y)],2)),e.firstLastButton?(i(),l("li",{key:3,class:d([e.pageClass,s.lastPageSelected()?e.disabledClass:""])},[o("a",{onClick:t[6]||(t[6]=r=>s.selectLastPage()),onKeyup:t[7]||(t[7]=_(r=>s.selectLastPage(),["enter"])),class:d(e.pageLinkClass),tabindex:s.lastPageSelected()?-1:0,innerHTML:e.lastButtonText},null,42,Q)],2)):u("",!0)],2))}var w=K(E,[["render",re]]);const se={class:"item"},ie={class:"green"},le={key:0,id:"selected",class:"green"},ne={class:"menu"},oe={class:"item"},de={components:{paginate:w},data(){return{current:1,last:1,listOpened:!1}},computed:{pagedData(){const a=this.current*4,t=a-4;return this.product.slice(t,a)},lastPage(){let a=Math.floor(this.product.length/4);return this.product.length%4!=0&&a++,a}},methods:{selectItem(a){this.listOpened=!1,this.$emit("select-item",[a,this.type])},movePage(a){this.current=Number(a)}}},ce=Object.assign(de,{__name:"BuildItem",props:{title:{type:String,required:!0},type:{type:String,required:!0},desc:{type:String,required:!0},required:{type:Boolean,required:!0},selected:{type:String,required:!1},product:{type:Array,required:!1,default:[]}},setup(a){return(t,e)=>(i(),l("div",se,[o("div",{class:"bar",onClick:e[0]||(e[0]=n=>t.listOpened=!t.listOpened)},[o("h1",ie,c(a.title),1),o("h4",null,c(a.desc),1),a.selected!=""?(i(),l("h3",le,"Selected: "+c(a.selected),1)):u("",!0)]),P(o("div",ne,[o("div",oe,[(i(!0),l(p,null,f(t.pagedData,n=>(i(),l("div",null,[h(F,{prod:n,onProdSelect:t.selectItem},null,8,["prod","onProdSelect"])]))),256))]),h(b(w),{"page-count":t.lastPage,"page-range":5,"margin-pages":1,"click-handler":t.movePage,"prev-text":"<","next-text":">","container-class":"pagination","active-class":"currentPage"},null,8,["page-count","click-handler"])],512),[[v,t.listOpened]])]))}}),_e=y(ce,[["__scopeId","data-v-ace8ecb1"]]),ue=D("config",{state:()=>({config:{cpu:{},gpu:{},motherboard:{},ram:{},ssd:{},hdd:{},psu:{},case:{}}}),getters:{getAllConfig:a=>a.config,getOneConfig:a=>t=>a.config[t.toLowerCase()],getTotalPrice:a=>{let t=0;return Object.keys(a.config).forEach(n=>{a.config[n].price!=null&&(t+=a.config[n].price)}),t.toFixed(2)}},actions:{storeConfig(a,t){t.includes(t)&&(this.config[t]=a)}}}),me=[{model:"Core i9-13900K",brand:"Intel",clock_speed:3,cores:8,threads:24,cache_size:36,tdp:125,integrated_graphics:"Intel UHD Graphics 770",release_date:"2022-10-20",price:589},{model:"Core i7-13700K",brand:"Intel",clock_speed:3.4,cores:8,threads:16,cache_size:30,tdp:125,integrated_graphics:"Intel UHD Graphics 770",release_date:"2022-10-20",price:409},{model:"Core i5-13600K",brand:"Intel",clock_speed:3.5,cores:6,threads:12,cache_size:20,tdp:125,integrated_graphics:"Intel UHD Graphics 770",release_date:"2022-10-20",price:319},{model:"Core i9-14900K",brand:"Intel",clock_speed:3.2,cores:8,threads:24,cache_size:36,tdp:125,integrated_graphics:"Intel UHD Graphics 770",release_date:"2023-10-17",price:629},{model:"Core i7-14700K",brand:"Intel",clock_speed:3.6,cores:8,threads:16,cache_size:30,tdp:125,integrated_graphics:"Intel UHD Graphics 770",release_date:"2023-10-17",price:439},{model:"Core i5-14600K",brand:"Intel",clock_speed:3.7,cores:6,threads:12,cache_size:20,tdp:125,integrated_graphics:"Intel UHD Graphics 770",release_date:"2023-10-17",price:339},{model:"Ryzen 9 5950X",brand:"AMD",clock_speed:3.4,cores:16,threads:32,cache_size:64,tdp:105,integrated_graphics:"None",release_date:"2020-11-05",price:799},{model:"Ryzen 7 5800X",brand:"AMD",clock_speed:3.8,cores:8,threads:16,cache_size:32,tdp:105,integrated_graphics:"None",release_date:"2020-11-05",price:449},{model:"Ryzen 5 5600X",brand:"AMD",clock_speed:3.7,cores:6,threads:12,cache_size:32,tdp:65,integrated_graphics:"None",release_date:"2020-11-05",price:299.99},{model:"Ryzen 9 7950X",brand:"AMD",clock_speed:4.5,cores:16,threads:32,cache_size:80,tdp:170,integrated_graphics:"None",release_date:"2022-09-27",price:699},{model:"Ryzen 7 7700X",brand:"AMD",clock_speed:4.5,cores:8,threads:16,cache_size:40,tdp:105,integrated_graphics:"None",release_date:"2022-09-27",price:399},{model:"Ryzen 5 7600X",brand:"AMD",clock_speed:4.7,cores:6,threads:12,cache_size:38,tdp:105,integrated_graphics:"None",release_date:"2022-09-27",price:299}],pe=[{brand:"Nvidia",model:"GeForce RTX 4090",memory_size:24,memory_type:"GDDR6X",core_clock:2235,boost_clock:2520,price:1499.99,release_date:"2022-10-12"},{brand:"Nvidia",model:"GeForce RTX 4080",memory_size:16,memory_type:"GDDR6X",core_clock:2205,boost_clock:2505,price:1199.99,release_date:"2022-11-16"},{brand:"Nvidia",model:"GeForce RTX 4070 Ti",memory_size:12,memory_type:"GDDR6X",core_clock:2310,boost_clock:2610,price:799.99,release_date:"2023-01-05"},{brand:"Nvidia",model:"GeForce RTX 4070",memory_size:12,memory_type:"GDDR6X",core_clock:1920,boost_clock:2475,price:599.99,release_date:"2023-04-13"},{brand:"Nvidia",model:"GeForce RTX 4060 Ti",memory_size:8,memory_type:"GDDR6",core_clock:2310,boost_clock:2535,price:399.99,release_date:"2023-05-24"},{brand:"Nvidia",model:"GeForce RTX 4060",memory_size:8,memory_type:"GDDR6",core_clock:1830,boost_clock:2430,price:299.99,release_date:"2023-06-29"},{brand:"AMD",model:"Radeon RX 7900 XTX",memory_size:24,memory_type:"GDDR6",core_clock:1900,boost_clock:2500,price:999.99,release_date:"2022-12-13"},{brand:"AMD",model:"Radeon RX 7900 XT",memory_size:20,memory_type:"GDDR6",core_clock:2e3,boost_clock:2400,price:899.99,release_date:"2022-12-13"},{brand:"AMD",model:"Radeon RX 7800 XT",memory_size:16,memory_type:"GDDR6",core_clock:2124,boost_clock:2430,price:699.99,release_date:"2023-09-06"},{brand:"AMD",model:"Radeon RX 7700 XT",memory_size:12,memory_type:"GDDR6",core_clock:2171,boost_clock:2544,price:449.99,release_date:"2023-09-06"},{brand:"AMD",model:"Radeon RX 7600",memory_size:8,memory_type:"GDDR6",core_clock:2250,boost_clock:2655,price:269.99,release_date:"2023-05-25"}],ge=[{brand:"ASUS",model:"ROG Strix B550-F Gaming",socket_type:"AM4",chipset:"AMD B550",form_factor:"ATX",memory_slots:4,max_memory:128,pcie_slots:3,sata_ports:6,m2_slots:2,usb_ports:10,lan_ports:1,wifi:!0,bluetooth:!0,price:189.99,release_date:"2020-06-16"},{brand:"Gigabyte",model:"AORUS X570 Elite",socket_type:"AM4",chipset:"AMD X570",form_factor:"ATX",memory_slots:4,max_memory:128,pcie_slots:3,sata_ports:6,m2_slots:2,usb_ports:10,lan_ports:1,wifi:!1,bluetooth:!1,price:199.99,release_date:"2019-07-07"},{brand:"MSI",model:"MAG B550 TOMAHAWK",socket_type:"AM4",chipset:"AMD B550",form_factor:"ATX",memory_slots:4,max_memory:128,pcie_slots:2,sata_ports:6,m2_slots:2,usb_ports:8,lan_ports:1,wifi:!1,bluetooth:!1,price:159.99,release_date:"2020-06-16"},{brand:"ASRock",model:"B550 Phantom Gaming 4",socket_type:"AM4",chipset:"AMD B550",form_factor:"ATX",memory_slots:4,max_memory:128,pcie_slots:2,sata_ports:6,m2_slots:2,usb_ports:8,lan_ports:1,wifi:!1,bluetooth:!1,price:129.99,release_date:"2020-06-16"},{brand:"ASUS",model:"Prime B550M-A",socket_type:"AM4",chipset:"AMD B550",form_factor:"Micro-ATX",memory_slots:4,max_memory:128,pcie_slots:2,sata_ports:4,m2_slots:1,usb_ports:8,lan_ports:1,wifi:!1,bluetooth:!1,price:109.99,release_date:"2020-06-16"},{brand:"Gigabyte",model:"Z690 AORUS Master",socket_type:"LGA1700",chipset:"Intel Z690",form_factor:"ATX",memory_slots:4,max_memory:128,pcie_slots:3,sata_ports:6,m2_slots:3,usb_ports:10,lan_ports:1,wifi:!0,bluetooth:!0,price:389.99,release_date:"2021-11-04"},{brand:"MSI",model:"PRO Z690-A WiFi",socket_type:"LGA1700",chipset:"Intel Z690",form_factor:"ATX",memory_slots:4,max_memory:128,pcie_slots:3,sata_ports:6,m2_slots:2,usb_ports:10,lan_ports:1,wifi:!0,bluetooth:!0,price:229.99,release_date:"2021-11-04"},{brand:"ASRock",model:"Z690 Extreme WiFi 6E",socket_type:"LGA1700",chipset:"Intel Z690",form_factor:"ATX",memory_slots:4,max_memory:128,pcie_slots:2,sata_ports:8,m2_slots:2,usb_ports:8,lan_ports:1,wifi:!0,bluetooth:!0,price:299.99,release_date:"2021-11-04"},{brand:"ASUS",model:"ROG Strix X670E-E Gaming",socket_type:"AM5",chipset:"AMD X670E",form_factor:"ATX",memory_slots:4,max_memory:128,pcie_slots:3,sata_ports:6,m2_slots:2,usb_ports:10,lan_ports:1,wifi:!0,bluetooth:!0,price:499.99,release_date:"2022-09-27"},{brand:"Gigabyte",model:"X670 AORUS Elite AX",socket_type:"AM5",chipset:"AMD X670",form_factor:"ATX",memory_slots:4,max_memory:128,pcie_slots:3,sata_ports:6,m2_slots:2,usb_ports:10,lan_ports:1,wifi:!0,bluetooth:!0,price:289.99,release_date:"2022-09-27"}],fe=[{brand:"Corsair",model:"Vengeance LPX",capacity_gb:16,type:"DDR4",speed_mhz:3200,form_factor:"DIMM",voltage:1.35,cas_latency:16,ecc:!1,registered:!1,release_date:"2020-05-10",price:79.99},{brand:"G.Skill",model:"Trident Z RGB",capacity_gb:32,type:"DDR4",speed_mhz:3600,form_factor:"DIMM",voltage:1.35,cas_latency:18,ecc:!1,registered:!1,release_date:"2021-02-20",price:189.99},{brand:"Kingston",model:"FURY Beast",capacity_gb:8,type:"DDR4",speed_mhz:2666,form_factor:"DIMM",voltage:1.2,cas_latency:15,ecc:!1,registered:!1,release_date:"2019-08-15",price:34.99},{brand:"Samsung",model:"Green",capacity_gb:16,type:"DDR4",speed_mhz:2400,form_factor:"DIMM",voltage:1.2,cas_latency:17,ecc:!0,registered:!0,release_date:"2018-11-30",price:99.99},{brand:"Corsair",model:"Vengeance RGB Pro",capacity_gb:16,type:"DDR4",speed_mhz:3200,form_factor:"DIMM",voltage:1.35,cas_latency:16,ecc:!1,registered:!1,release_date:"2021-06-25",price:89.99},{brand:"G.Skill",model:"Ripjaws V",capacity_gb:64,type:"DDR4",speed_mhz:3200,form_factor:"DIMM",voltage:1.35,cas_latency:16,ecc:!1,registered:!1,release_date:"2022-01-15",price:299.99},{brand:"Crucial",model:"Ballistix",capacity_gb:32,type:"DDR4",speed_mhz:3600,form_factor:"DIMM",voltage:1.35,cas_latency:18,ecc:!1,registered:!1,release_date:"2020-09-05",price:174.99},{brand:"Samsung",model:"EVO Plus",capacity_gb:32,type:"DDR5",speed_mhz:4800,form_factor:"DIMM",voltage:1.1,cas_latency:38,ecc:!0,registered:!0,release_date:"2022-12-01",price:249.99},{brand:"G.Skill",model:"Trident Z5",capacity_gb:16,type:"DDR5",speed_mhz:6e3,form_factor:"DIMM",voltage:1.1,cas_latency:40,ecc:!1,registered:!1,release_date:"2023-01-10",price:199.99},{brand:"Corsair",model:"Dominator Platinum",capacity_gb:32,type:"DDR5",speed_mhz:5200,form_factor:"DIMM",voltage:1.1,cas_latency:36,ecc:!1,registered:!1,release_date:"2023-03-20",price:329.99}],he=[{brand:"Samsung",model:"970 EVO Plus",capacity:"1TB",interface:"NVMe",form_factor:"M.2",read_speed:3500,write_speed:3300,price:149.99,warranty:"5 years"},{brand:"Western Digital",model:"WD Black SN850",capacity:"2TB",interface:"NVMe",form_factor:"M.2",read_speed:7e3,write_speed:5300,price:279.99,warranty:"5 years"},{brand:"Kingston",model:"KC2500",capacity:"512GB",interface:"NVMe",form_factor:"M.2",read_speed:3500,write_speed:2900,price:89.99,warranty:"5 years"},{brand:"Crucial",model:"P5 Plus",capacity:"1TB",interface:"NVMe",form_factor:"M.2",read_speed:6600,write_speed:5e3,price:179.99,warranty:"5 years"},{brand:"Corsair",model:"MP600 Pro XT",capacity:"2TB",interface:"NVMe",form_factor:"M.2",read_speed:7100,write_speed:6800,price:319.99,warranty:"5 years"}],ye=[{brand:"Seagate",model:"ST2000DM008",capacity_gb:2e3,rpm:7200,interface_type:"SATA",form_factor:'3.5"',serial_number:"SN1234567890",release_date:"2018-06-01",warranty_years:2,price:49.99},{brand:"Western Digital",model:"WD10EZEX",capacity_gb:1e3,rpm:7200,interface_type:"SATA",form_factor:'3.5"',serial_number:"SN0987654321",release_date:"2017-08-15",warranty_years:3,price:44.99},{brand:"Toshiba",model:"HDWD110XZSTA",capacity_gb:1e3,rpm:7200,interface_type:"SATA",form_factor:'3.5"',serial_number:"SN1122334455",release_date:"2019-01-10",warranty_years:2,price:42.99},{brand:"Hitachi",model:"HUA723020ALA641",capacity_gb:2e3,rpm:7200,interface_type:"SATA",form_factor:'3.5"',serial_number:"SN2233445566",release_date:"2016-11-25",warranty_years:5,price:59.99},{brand:"Samsung",model:"MZ7TE1T0BW",capacity_gb:1e3,rpm:null,interface_type:"SATA",form_factor:'2.5"',serial_number:"SN3344556677",release_date:"2019-05-22",warranty_years:5,price:129.99},{brand:"Seagate",model:"ST4000DM004",capacity_gb:4e3,rpm:5400,interface_type:"SATA",form_factor:'3.5"',serial_number:"SN4455667788",release_date:"2020-02-15",warranty_years:2,price:89.99}],be=[{brand:"Corsair",model:"RM750x",wattage:750,efficiency_rating:"80 Plus Gold",modular:!0,price:129.99,release_date:"2023-05-15"},{brand:"EVGA",model:"SuperNOVA 650 G5",wattage:650,efficiency_rating:"80 Plus Gold",modular:!0,price:119.99,release_date:"2022-08-10"},{brand:"Seasonic",model:"Focus GX-850",wattage:850,efficiency_rating:"80 Plus Gold",modular:!0,price:139.99,release_date:"2021-12-01"},{brand:"Cooler Master",model:"MasterWatt 750",wattage:750,efficiency_rating:"80 Plus Bronze",modular:!1,price:99.99,release_date:"2020-07-22"},{brand:"Be Quiet!",model:"Straight Power 11",wattage:750,efficiency_rating:"80 Plus Platinum",modular:!0,price:179.99,release_date:"2021-03-05"},{brand:"Thermaltake",model:"Smart 500W",wattage:500,efficiency_rating:"80 Plus",modular:!1,price:49.99,release_date:"2019-11-15"}],ke=[{brand:"Cooler Master",model:"MasterBox Q300L",type:"Micro-ATX",color:"Black",material:"Steel, Plastic",dimensions:"450 x 230 x 450 mm",weight:5.2,number_of_drive_bays:3,number_of_expansion_slots:4,max_gpu_height:360,max_cpu_cooler_height:159,max_psu_length:160,front_io_ports:"2x USB 3.0, Audio In/Out",side_panel_window:!0,rgb_lighting:!1,price:39.99,release_date:"2018-03-15"},{brand:"NZXT",model:"H510",type:"ATX",color:"White",material:"Steel, Tempered Glass",dimensions:"428 x 210 x 435 mm",weight:6.6,number_of_drive_bays:2,number_of_expansion_slots:7,max_gpu_height:381,max_cpu_cooler_height:165,max_psu_length:180,front_io_ports:"1x USB 3.1 Gen 2, 1x USB 3.1 Gen 1, 1x Audio",side_panel_window:!0,rgb_lighting:!0,price:69.99,release_date:"2019-07-11"},{brand:"Corsair",model:"iCUE 4000X RGB",type:"ATX",color:"Black",material:"Steel, Tempered Glass",dimensions:"453 x 230 x 466 mm",weight:7.8,number_of_drive_bays:2,number_of_expansion_slots:7,max_gpu_height:360,max_cpu_cooler_height:170,max_psu_length:180,front_io_ports:"1x USB 3.1 Type-C, 2x USB 3.0, Audio In/Out",side_panel_window:!0,rgb_lighting:!0,price:94.99,release_date:"2020-09-15"},{brand:"Fractal Design",model:"Meshify C",type:"ATX",color:"Black",material:"Steel, Tempered Glass",dimensions:"409 x 217 x 453 mm",weight:6.5,number_of_drive_bays:3,number_of_expansion_slots:7,max_gpu_height:315,max_cpu_cooler_height:172,max_psu_length:175,front_io_ports:"2x USB 3.0, Audio In/Out",side_panel_window:!0,rgb_lighting:!1,price:89.99,release_date:"2017-08-10"},{brand:"Phanteks",model:"Eclipse P300A",type:"ATX",color:"Black",material:"Steel, Tempered Glass",dimensions:"400 x 200 x 450 mm",weight:5,number_of_drive_bays:2,number_of_expansion_slots:7,max_gpu_height:330,max_cpu_cooler_height:160,max_psu_length:200,front_io_ports:"2x USB 3.0, Audio In/Out",side_panel_window:!0,rgb_lighting:!1,price:49.99,release_date:"2020-01-20"}],Ce=a=>(x("data-v-2e5efd08"),a=a(),M(),a),Se={id:"build"},Pe={id:"summary"},ve={id:"action"},xe=Ce(()=>o("div",{id:"space"},null,-1)),k=ue(),{config:Xe,getAllConfig:Me,getOneConfig:T,getTotalPrice:A}=R(k),{storeConfig:we}=k,{addItem:Te}=B,Ae={data(){return{}},methods:{setupBuildView(){return[{title:"CPU",type:"cpu",product:me,required:!0,desc:`This is the core component of your PC that do computation. 
                        Use a higher-end CPU if you plan to do complex computing tasks such as video editing or modeling.`},{title:"Graphic Card",type:"gpu",product:pe,required:!0,desc:`This component processes what you can see in the screen.
                        For more graphic-demanding software or better gaming performance, consider a higher-end graphic card.`},{title:"Motherboard",type:"motherboard",product:ge,required:!0,desc:`The motherboard is the backbone of your PC where all other
                        components including CPU and RAM are hosted on.`},{title:"RAM",type:"ram",product:fe,required:!0,desc:`RAM is where the PC store data temporarily. More capacity of RAM allows
                        multitasking with more programs.`},{title:"OS Drive",type:"ssd",product:he,required:!0,desc:`This is where your PC's operating system are installed and
                        most used files and apps are stored. A higher-end SSD allows the OS and apps to load faster.`},{title:"Storage Drive",type:"hdd",product:ye,required:!1,desc:`If you require more storage, consider adding a secondary HDD
                        to your configuration to further expand how much you can save your files and install your games.`},{title:"Power Supply",type:"psu",product:be,required:!0,desc:`The power supply unit feeds your components with electricity
                        so that they can operate. More powerful components require more power.`},{title:"Case",type:"case",product:ke,required:!0,desc:`The case is the backbone of your PC. It holds the components and provide
                        ventilation. It also gives your PC a fancy and unique look.`}]},receiveProd(a){we(a[0],a[1])},resettingConfig(){window.confirm("Are you sure you want to clear all your selected components?")&&k.$reset()},selectedConfig(a){return a.brand==null&&a.model==null?"":a.brand+" "+a.model},checkRequired(){let a=[];return this.setupBuildView().forEach(t=>{t.required&&Object.keys(T.value(t.type)).length==0&&a.push(t.title)}),a},packingConfig(){if(this.checkRequired().length!==0){const a=this.checkRequired().toString();alert("You are missing these required components: "+a)}else{const a="The Ultimate Custom PC - Built by You",t=A.value,e=Me.value;Te(a,e,t),this.$router.push("/order")}}}},De=Object.assign(Ae,{__name:"Builder",setup(a){return(t,e)=>(i(),l(p,null,[o("div",Se,[(i(!0),l(p,null,f(t.setupBuildView(),n=>(i(),l("div",null,[h(_e,{title:n.title,type:n.type,desc:n.desc,required:n.required,product:n.product,selected:t.selectedConfig(b(T)(n.type)),onSelectItem:t.receiveProd},null,8,["title","type","desc","required","product","selected","onSelectItem"])]))),256))]),o("div",Pe,[o("h1",null,"Total Price: $"+c(b(A)),1),o("div",ve,[o("button",{class:"actionBtn",onClick:e[0]||(e[0]=(...n)=>t.packingConfig&&t.packingConfig(...n))},"Add to Cart"),o("button",{class:"actionBtn",onClick:e[1]||(e[1]=(...n)=>t.resettingConfig&&t.resettingConfig(...n))},"Reset Config")])]),xe],64))}}),Re=y(De,[["__scopeId","data-v-2e5efd08"]]),Be=a=>(x("data-v-5ca231cf"),a=a(),M(),a),Le=Be(()=>o("h1",null,"Custom PC Builder",-1)),Ge={__name:"BuildView",setup(a){return(t,e)=>(i(),l("main",null,[Le,h(Re)]))}},Ne=y(Ge,[["__scopeId","data-v-5ca231cf"]]);export{Ne as default};
