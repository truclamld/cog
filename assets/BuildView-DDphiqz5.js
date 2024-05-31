import{_ as k,o as a,c as r,a as d,w as S,v as L,t as o,F as h,r as y,b as g,d as m,n as u,e as c,f as v,g as p,u as b,h as B,s as q,p as w,i as x,j as M}from"./index-CXlWSsU5.js";const I={id:"infobox"},H={class:"green"},O={key:0},N={data(){return{showInfo:!1,notIncludedSpec:["brand","model","price"]}},methods:{formatName(s){let e="";for(let t=0;t<s.length;t++)s.charAt(t-1)==="_"||t===0?e+=s.charAt(t).toUpperCase():s.charAt(t)==="_"?e+=" ":e+=s.charAt(t);return e}}},R=Object.assign(N,{__name:"ComponentInfo",props:{prod:{type:Object,required:!0}},setup(s){return(e,t)=>(a(),r(h,null,[d("a",{onClick:t[0]||(t[0]=l=>e.showInfo=!0)},"More Info"),S(d("div",{id:"info",onClick:t[1]||(t[1]=l=>e.showInfo=!1)},[d("div",I,[d("h2",H,o(s.prod.brand)+" "+o(s.prod.model),1),(a(!0),r(h,null,y(Object.keys(s.prod),l=>(a(),r("ul",null,[e.notIncludedSpec.includes(l)?g("",!0):(a(),r("li",O,o(e.formatName(l))+": "+o(s.prod[l]),1))]))),256))])],512),[[L,e.showInfo]])],64))}}),A=k(R,[["__scopeId","data-v-393bc67b"]]),K={class:"product"},j={class:"green"},F={id:"price"},D={methods:{prodSelect(){this.$emit("prod-select",this.prod)}}},U=Object.assign(D,{__name:"ProductSlot",props:{prod:{type:Object,required:!0}},setup(s){return(e,t)=>(a(),r("div",K,[d("h3",j,o(s.prod.brand)+" "+o(s.prod.model),1),m(A,{prod:s.prod},null,8,["prod"]),d("p",F,"$"+o(s.prod.price),1),d("button",{onClick:t[0]||(t[0]=(...l)=>e.prodSelect&&e.prodSelect(...l))},"Select")]))}}),E=k(U,[["__scopeId","data-v-d1b5a9f7"]]);var Y=(s,e)=>{const t=s.__vccOpts||s;for(const[l,f]of e)t[l]=f;return t};const z={data(){return{innerValue:1}},props:{modelValue:{type:Number},pageCount:{type:Number,required:!0},initialPage:{type:Number,default:1},forcePage:{type:Number},clickHandler:{type:Function,default:()=>{}},pageRange:{type:Number,default:3},marginPages:{type:Number,default:1},prevText:{type:String,default:"Prev"},nextText:{type:String,default:"Next"},breakViewText:{type:String,default:"…"},containerClass:{type:String,default:"pagination"},pageClass:{type:String,default:"page-item"},pageLinkClass:{type:String,default:"page-link"},prevClass:{type:String,default:"page-item"},prevLinkClass:{type:String,default:"page-link"},nextClass:{type:String,default:"page-item"},nextLinkClass:{type:String,default:"page-link"},breakViewClass:{type:String},breakViewLinkClass:{type:String},activeClass:{type:String,default:"active"},disabledClass:{type:String,default:"disabled"},noLiSurround:{type:Boolean,default:!1},firstLastButton:{type:Boolean,default:!1},firstButtonText:{type:String,default:"First"},lastButtonText:{type:String,default:"Last"},hidePrevNext:{type:Boolean,default:!1}},computed:{selected:{get:function(){return this.modelValue||this.innerValue},set:function(s){this.innerValue=s}},pages:function(){let s={};if(this.pageCount<=this.pageRange)for(let e=0;e<this.pageCount;e++){let t={index:e,content:e+1,selected:e===this.selected-1};s[e]=t}else{const e=Math.floor(this.pageRange/2);let t=n=>{let C={index:n,content:n+1,selected:n===this.selected-1};s[n]=C},l=n=>{let C={disabled:!0,breakView:!0};s[n]=C};for(let n=0;n<this.marginPages;n++)t(n);let f=0;this.selected-e>0&&(f=this.selected-1-e);let i=f+this.pageRange-1;i>=this.pageCount&&(i=this.pageCount-1,f=i-this.pageRange+1);for(let n=f;n<=i&&n<=this.pageCount-1;n++)t(n);f>this.marginPages&&l(f-1),i+1<this.pageCount-this.marginPages&&l(i+1);for(let n=this.pageCount-1;n>=this.pageCount-this.marginPages;n--)t(n)}return s}},methods:{handlePageSelected(s){this.selected!==s&&(this.innerValue=s,this.$emit("update:modelValue",s),this.clickHandler(s))},prevPage(){this.selected<=1||this.handlePageSelected(this.selected-1)},nextPage(){this.selected>=this.pageCount||this.handlePageSelected(this.selected+1)},firstPageSelected(){return this.selected===1},lastPageSelected(){return this.selected===this.pageCount||this.pageCount===0},selectFirstPage(){this.selected<=1||this.handlePageSelected(1)},selectLastPage(){this.selected>=this.pageCount||this.handlePageSelected(this.pageCount)}},beforeMount(){this.innerValue=this.initialPage},beforeUpdate(){this.forcePage!==void 0&&this.forcePage!==this.selected&&(this.selected=this.forcePage)}},G=["tabindex","innerHTML"],J=["tabindex","innerHTML"],Q=["onClick","onKeyup"],W=["tabindex","innerHTML"],X=["tabindex","innerHTML"],Z=["innerHTML"],$=["innerHTML"],ee=["onClick","onKeyup"],te=["innerHTML"],se=["innerHTML"];function ne(s,e,t,l,f,i){return t.noLiSurround?(a(),r("div",{key:1,class:u(t.containerClass)},[t.firstLastButton?(a(),r("a",{key:0,onClick:e[8]||(e[8]=n=>i.selectFirstPage()),onKeyup:e[9]||(e[9]=c(n=>i.selectFirstPage(),["enter"])),class:u([t.pageLinkClass,i.firstPageSelected()?t.disabledClass:""]),tabindex:"0",innerHTML:t.firstButtonText},null,42,Z)):g("",!0),i.firstPageSelected()&&t.hidePrevNext?g("",!0):(a(),r("a",{key:1,onClick:e[10]||(e[10]=n=>i.prevPage()),onKeyup:e[11]||(e[11]=c(n=>i.prevPage(),["enter"])),class:u([t.prevLinkClass,i.firstPageSelected()?t.disabledClass:""]),tabindex:"0",innerHTML:t.prevText},null,42,$)),(a(!0),r(h,null,y(i.pages,n=>(a(),r(h,null,[n.breakView?(a(),r("a",{key:n.index,class:u([t.pageLinkClass,t.breakViewLinkClass,n.disabled?t.disabledClass:""]),tabindex:"0"},[v(s.$slots,"breakViewContent",{},()=>[p(o(t.breakViewText),1)])],2)):n.disabled?(a(),r("a",{key:n.index,class:u([t.pageLinkClass,n.selected?t.activeClass:"",t.disabledClass]),tabindex:"0"},o(n.content),3)):(a(),r("a",{key:n.index,onClick:C=>i.handlePageSelected(n.index+1),onKeyup:c(C=>i.handlePageSelected(n.index+1),["enter"]),class:u([t.pageLinkClass,n.selected?t.activeClass:""]),tabindex:"0"},o(n.content),43,ee))],64))),256)),i.lastPageSelected()&&t.hidePrevNext?g("",!0):(a(),r("a",{key:2,onClick:e[12]||(e[12]=n=>i.nextPage()),onKeyup:e[13]||(e[13]=c(n=>i.nextPage(),["enter"])),class:u([t.nextLinkClass,i.lastPageSelected()?t.disabledClass:""]),tabindex:"0",innerHTML:t.nextText},null,42,te)),t.firstLastButton?(a(),r("a",{key:3,onClick:e[14]||(e[14]=n=>i.selectLastPage()),onKeyup:e[15]||(e[15]=c(n=>i.selectLastPage(),["enter"])),class:u([t.pageLinkClass,i.lastPageSelected()?t.disabledClass:""]),tabindex:"0",innerHTML:t.lastButtonText},null,42,se)):g("",!0)],2)):(a(),r("ul",{key:0,class:u(t.containerClass)},[t.firstLastButton?(a(),r("li",{key:0,class:u([t.pageClass,i.firstPageSelected()?t.disabledClass:""])},[d("a",{onClick:e[0]||(e[0]=n=>i.selectFirstPage()),onKeyup:e[1]||(e[1]=c(n=>i.selectFirstPage(),["enter"])),class:u(t.pageLinkClass),tabindex:i.firstPageSelected()?-1:0,innerHTML:t.firstButtonText},null,42,G)],2)):g("",!0),i.firstPageSelected()&&t.hidePrevNext?g("",!0):(a(),r("li",{key:1,class:u([t.prevClass,i.firstPageSelected()?t.disabledClass:""])},[d("a",{onClick:e[2]||(e[2]=n=>i.prevPage()),onKeyup:e[3]||(e[3]=c(n=>i.prevPage(),["enter"])),class:u(t.prevLinkClass),tabindex:i.firstPageSelected()?-1:0,innerHTML:t.prevText},null,42,J)],2)),(a(!0),r(h,null,y(i.pages,n=>(a(),r("li",{key:n.index,class:u([t.pageClass,n.selected?t.activeClass:"",n.disabled?t.disabledClass:"",n.breakView?t.breakViewClass:""])},[n.breakView?(a(),r("a",{key:0,class:u([t.pageLinkClass,t.breakViewLinkClass]),tabindex:"0"},[v(s.$slots,"breakViewContent",{},()=>[p(o(t.breakViewText),1)])],2)):n.disabled?(a(),r("a",{key:1,class:u(t.pageLinkClass),tabindex:"0"},o(n.content),3)):(a(),r("a",{key:2,onClick:C=>i.handlePageSelected(n.index+1),onKeyup:c(C=>i.handlePageSelected(n.index+1),["enter"]),class:u(t.pageLinkClass),tabindex:"0"},o(n.content),43,Q))],2))),128)),i.lastPageSelected()&&t.hidePrevNext?g("",!0):(a(),r("li",{key:2,class:u([t.nextClass,i.lastPageSelected()?t.disabledClass:""])},[d("a",{onClick:e[4]||(e[4]=n=>i.nextPage()),onKeyup:e[5]||(e[5]=c(n=>i.nextPage(),["enter"])),class:u(t.nextLinkClass),tabindex:i.lastPageSelected()?-1:0,innerHTML:t.nextText},null,42,W)],2)),t.firstLastButton?(a(),r("li",{key:3,class:u([t.pageClass,i.lastPageSelected()?t.disabledClass:""])},[d("a",{onClick:e[6]||(e[6]=n=>i.selectLastPage()),onKeyup:e[7]||(e[7]=c(n=>i.selectLastPage(),["enter"])),class:u(t.pageLinkClass),tabindex:i.lastPageSelected()?-1:0,innerHTML:t.lastButtonText},null,42,X)],2)):g("",!0)],2))}var _=Y(z,[["render",ne]]);const ie={class:"item"},ae={class:"green"},re={key:0,id:"selected",class:"green"},le={class:"menu"},de={class:"item"},ue={components:{paginate:_},data(){return{current:1,last:1,listOpened:!1}},computed:{pagedData(){const s=this.current*4,e=s-4;return this.product.slice(e,s)},lastPage(){let s=Math.floor(this.product.length/4);return this.product.length%4!=0&&s++,s}},methods:{selectItem(s){this.listOpened=!1,this.$emit("select-item",[s,this.type])},movePage(s){this.current=Number(s)}}},oe=Object.assign(ue,{__name:"BuildItem",props:{title:{type:String,required:!0},type:{type:String,required:!0},desc:{type:String,required:!0},required:{type:Boolean,required:!0},selected:{type:String,required:!1},product:{type:Array,required:!1,default:[]}},setup(s){return(e,t)=>(a(),r("div",ie,[d("div",{class:"bar",onClick:t[0]||(t[0]=l=>e.listOpened=!e.listOpened)},[d("h1",ae,o(s.title),1),d("h4",null,o(s.desc),1),s.selected!=""?(a(),r("h3",re,"Selected: "+o(s.selected),1)):g("",!0)]),S(d("div",le,[d("div",de,[(a(!0),r(h,null,y(e.pagedData,l=>(a(),r("div",null,[m(E,{prod:l,onProdSelect:e.selectItem},null,8,["prod","onProdSelect"])]))),256))]),m(b(_),{"page-count":e.lastPage,"page-range":5,"margin-pages":1,"click-handler":e.movePage,"prev-text":"<","next-text":">","container-class":"pagination","active-class":"currentPage"},null,8,["page-count","click-handler"])],512),[[L,e.listOpened]])]))}}),ce=k(oe,[["__scopeId","data-v-ace8ecb1"]]),ge=B("config",{state:()=>({config:{cpu:{},gpu:{},motherboard:{},ram:{},ssd:{},hdd:{},psu:{},case:{}}}),getters:{getAllConfig:s=>s.config,getOneConfig:s=>e=>s.config[e.toLowerCase()],getTotalPrice:s=>{let e=0;return Object.keys(s.config).forEach(l=>{s.config[l].price!=null&&(e+=s.config[l].price)}),e.toFixed(2)}},actions:{storeConfig(s,e){e.includes(e)&&(this.config[e]=s)}}}),fe=()=>{let s;return fetch("./backend/select_cpu.php").then(e=>{if(!e.ok)throw new Error("An error occurred");return e.json()}).then(e=>s=e),s},he=s=>(w("data-v-ee0667fd"),s=s(),x(),s),Ce={id:"build"},ye={id:"summary"},me={id:"action"},ke=he(()=>d("div",{id:"space"},null,-1)),P=ge(),{config:Ve,getAllConfig:be,getOneConfig:T,getTotalPrice:V}=q(P),{storeConfig:Pe}=P,{addItem:ve}=M,pe={data(){return{gpuList:[],boardList:[],ramList:[],ssdList:[],hddList:[],psuList:[],caseList:[]}},methods:{setupBuildView(){return[{title:"CPU",type:"cpu",product:fe,required:!0,desc:`This is the core component of your PC that do computation. 
                        Use a higher-end CPU if you plan to do complex computing tasks such as video editing or modeling.`},{title:"Graphic Card",type:"gpu",product:gpuList,required:!0,desc:`This component processes what you can see in the screen.
                        For more graphic-demanding software or better gaming performance, consider a higher-end graphic card.`},{title:"Motherboard",type:"motherboard",product:boardList,required:!0,desc:`The motherboard is the backbone of your PC where all other
                        components including CPU and RAM are hosted on.`},{title:"RAM",type:"ram",product:ramList,required:!0,desc:`RAM is where the PC store data temporarily. More capacity of RAM allows
                        multitasking with more programs.`},{title:"OS Drive",type:"ssd",product:ssdList,required:!0,desc:`This is where your PC's operating system are installed and
                        most used files and apps are stored. A higher-end SSD allows the OS and apps to load faster.`},{title:"Storage Drive",type:"hdd",product:hddList,required:!1,desc:`If you require more storage, consider adding a secondary HDD
                        to your configuration to further expand how much you can save your files and install your games.`},{title:"Power Supply",type:"psu",product:psuList,required:!0,desc:`The power supply unit feeds your components with electricity
                        so that they can operate. More powerful components require more power.`},{title:"Case",type:"case",product:caseList,required:!0,desc:`The case is the backbone of your PC. It holds the components and provide
                        ventilation. It also gives your PC a fancy and unique look.`}]},receiveProd(s){Pe(s[0],s[1])},resettingConfig(){window.confirm("Are you sure you want to clear all your selected components?")&&P.$reset()},selectedConfig(s){return s.brand==null&&s.model==null?"":s.brand+" "+s.model},checkRequired(){let s=[];return this.setupBuildView().forEach(e=>{e.required&&Object.keys(T.value(e.type)).length==0&&s.push(e.title)}),s},packingConfig(){if(this.checkRequired().length!==0){const s=this.checkRequired().toString();alert("You are missing these required components: "+s)}else{const s="The Ultimate Custom PC - Built by You",e=V.value,t=be.value;ve(s,t,e),alert("Your custom PC has been added to cart. Scroll up and select Order to review and checkout.")}}}},Se=Object.assign(pe,{__name:"Builder",setup(s){return(e,t)=>(a(),r(h,null,[d("div",Ce,[(a(!0),r(h,null,y(e.setupBuildView(),l=>(a(),r("div",null,[m(ce,{title:l.title,type:l.type,desc:l.desc,required:l.required,product:l.product,selected:e.selectedConfig(b(T)(l.type)),onSelectItem:e.receiveProd},null,8,["title","type","desc","required","product","selected","onSelectItem"])]))),256))]),d("div",ye,[d("h1",null,"Total Price: $"+o(b(V)),1),d("div",me,[d("button",{class:"actionBtn",onClick:t[0]||(t[0]=(...l)=>e.packingConfig&&e.packingConfig(...l))},"Add to Cart"),d("button",{class:"actionBtn",onClick:t[1]||(t[1]=(...l)=>e.resettingConfig&&e.resettingConfig(...l))},"Reset Config")])]),ke],64))}}),Le=k(Se,[["__scopeId","data-v-ee0667fd"]]),we=s=>(w("data-v-5ca231cf"),s=s(),x(),s),xe=we(()=>d("h1",null,"Custom PC Builder",-1)),_e={__name:"BuildView",setup(s){return(e,t)=>(a(),r("main",null,[xe,m(Le)]))}},Be=k(_e,[["__scopeId","data-v-5ca231cf"]]);export{Be as default};
