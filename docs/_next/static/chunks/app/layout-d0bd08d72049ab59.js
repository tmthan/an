(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{23044:(e,t,a)=>{Promise.resolve().then(a.bind(a,44070))},44070:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>ei});var r=a(95155),s=a(12115),n=a(4147),i=a.n(n),l=a(38489),o=a.n(l),u=a(4617),c=a.n(u),h=a(70527),f=a(92314),d=a(31049),y=a(1086),p=a(56204);let m=["wrap","nowrap","wrap-reverse"],g=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],b=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],v=(e,t)=>{let a=!0===t.wrap?"wrap":t.wrap;return{["".concat(e,"-wrap-").concat(a)]:a&&m.includes(a)}},O=(e,t)=>{let a={};return b.forEach(r=>{a["".concat(e,"-align-").concat(r)]=t.align===r}),a["".concat(e,"-align-stretch")]=!t.align&&!!t.vertical,a},w=(e,t)=>{let a={};return g.forEach(r=>{a["".concat(e,"-justify-").concat(r)]=t.justify===r}),a},C=e=>{let{componentCls:t}=e;return{[t]:{display:"flex",margin:0,padding:0,"&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},q=e=>{let{componentCls:t}=e;return{[t]:{"&-gap-small":{gap:e.flexGapSM},"&-gap-middle":{gap:e.flexGap},"&-gap-large":{gap:e.flexGapLG}}}},j=e=>{let{componentCls:t}=e,a={};return m.forEach(e=>{a["".concat(t,"-wrap-").concat(e)]={flexWrap:e}}),a},x=e=>{let{componentCls:t}=e,a={};return b.forEach(e=>{a["".concat(t,"-align-").concat(e)]={alignItems:e}}),a},P=e=>{let{componentCls:t}=e,a={};return g.forEach(e=>{a["".concat(t,"-justify-").concat(e)]={justifyContent:e}}),a},Q=(0,y.OF)("Flex",e=>{let{paddingXS:t,padding:a,paddingLG:r}=e,s=(0,p.oX)(e,{flexGapSM:t,flexGap:a,flexGapLG:r});return[C(s),q(s),j(s),x(s),P(s)]},()=>({}),{resetStyle:!1});var A=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)0>t.indexOf(r[s])&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};let S=s.forwardRef((e,t)=>{let{prefixCls:a,rootClassName:r,className:n,style:i,flex:l,gap:o,children:u,vertical:y=!1,component:p="div"}=e,m=A(e,["prefixCls","rootClassName","className","style","flex","gap","children","vertical","component"]),{flex:g,direction:b,getPrefixCls:C}=s.useContext(d.QO),q=C("flex",a),[j,x,P]=Q(q),S=null!=y?y:null==g?void 0:g.vertical,N=c()(n,r,null==g?void 0:g.className,q,x,P,function(e,t){return c()(Object.assign(Object.assign(Object.assign({},v(e,t)),O(e,t)),w(e,t)))}(q,e),{["".concat(q,"-rtl")]:"rtl"===b,["".concat(q,"-gap-").concat(o)]:(0,f.X)(o),["".concat(q,"-vertical")]:S}),D=Object.assign(Object.assign({},null==g?void 0:g.style),i);return l&&(D.flex=l),o&&!(0,f.X)(o)&&(D.gap=o),j(s.createElement(p,Object.assign({ref:t,className:N,style:D},(0,h.A)(m,["justify","wrap","align"])),u))});var N=a(39014),D=a(28709),E=a(63588),_=a(94937),M=a(67312),F=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)0>t.indexOf(r[s])&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]]);return a};function R(e){let{suffixCls:t,tagName:a,displayName:r}=e;return e=>s.forwardRef((r,n)=>s.createElement(e,Object.assign({ref:n,suffixCls:t,tagName:a},r)))}let k=s.forwardRef((e,t)=>{let{prefixCls:a,suffixCls:r,className:n,tagName:i}=e,l=F(e,["prefixCls","suffixCls","className","tagName"]),{getPrefixCls:o}=s.useContext(d.QO),u=o("layout",a),[h,f,y]=(0,M.Ay)(u),p=r?"".concat(u,"-").concat(r):u;return h(s.createElement(i,Object.assign({className:c()(a||p,n,f,y),ref:t},l)))}),H=s.forwardRef((e,t)=>{let{direction:a}=s.useContext(d.QO),[r,n]=s.useState([]),{prefixCls:i,className:l,rootClassName:o,children:u,hasSider:f,tagName:y,style:p}=e,m=F(e,["prefixCls","className","rootClassName","children","hasSider","tagName","style"]),g=(0,h.A)(m,["suffixCls"]),{getPrefixCls:b,className:v,style:O}=(0,d.TP)("layout"),w=b("layout",i),C=function(e,t,a){return"boolean"==typeof a?a:!!e.length||(0,E.A)(t).some(e=>e.type===_.A)}(r,u,f),[q,j,x]=(0,M.Ay)(w),P=c()(w,{["".concat(w,"-has-sider")]:C,["".concat(w,"-rtl")]:"rtl"===a},v,l,o,j,x),Q=s.useMemo(()=>({siderHook:{addSider:e=>{n(t=>[].concat((0,N.A)(t),[e]))},removeSider:e=>{n(t=>t.filter(t=>t!==e))}}}),[]);return q(s.createElement(D.M.Provider,{value:Q},s.createElement(y,Object.assign({ref:t,className:P,style:Object.assign(Object.assign({},O),p)},g),u)))}),I=R({tagName:"div",displayName:"Layout"})(H),K=R({suffixCls:"header",tagName:"header",displayName:"Header"})(k),B=R({suffixCls:"footer",tagName:"footer",displayName:"Footer"})(k),L=R({suffixCls:"content",tagName:"main",displayName:"Content"})(k);I.Header=K,I.Footer=B,I.Content=L,I.Sider=_.A,I._InternalSiderContext=_.P;var G=a(84403),T=a(47702),J=a(15586),X=a(99323),Y=class extends X.Q{constructor(e={}){super(),this.config=e,this.#e=new Map}#e;build(e,t,a){let r=t.queryKey,s=t.queryHash??(0,G.F$)(r,t),n=this.get(s);return n||(n=new T.X({client:e,queryKey:r,queryHash:s,options:e.defaultQueryOptions(t),state:a,defaultOptions:e.getQueryDefaults(r)}),this.add(n)),n}add(e){this.#e.has(e.queryHash)||(this.#e.set(e.queryHash,e),this.notify({type:"added",query:e}))}remove(e){let t=this.#e.get(e.queryHash);t&&(e.destroy(),t===e&&this.#e.delete(e.queryHash),this.notify({type:"removed",query:e}))}clear(){J.j.batch(()=>{this.getAll().forEach(e=>{this.remove(e)})})}get(e){return this.#e.get(e)}getAll(){return[...this.#e.values()]}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,G.MK)(t,e))}findAll(e={}){let t=this.getAll();return Object.keys(e).length>0?t.filter(t=>(0,G.MK)(e,t)):t}notify(e){J.j.batch(()=>{this.listeners.forEach(t=>{t(e)})})}onFocus(){J.j.batch(()=>{this.getAll().forEach(e=>{e.onFocus()})})}onOnline(){J.j.batch(()=>{this.getAll().forEach(e=>{e.onOnline()})})}},Z=a(1049),$=class extends X.Q{constructor(e={}){super(),this.config=e,this.#t=new Set,this.#a=new Map,this.#r=0}#t;#a;#r;build(e,t,a){let r=new Z.s({mutationCache:this,mutationId:++this.#r,options:e.defaultMutationOptions(t),state:a});return this.add(r),r}add(e){this.#t.add(e);let t=W(e);if("string"==typeof t){let a=this.#a.get(t);a?a.push(e):this.#a.set(t,[e])}this.notify({type:"added",mutation:e})}remove(e){if(this.#t.delete(e)){let t=W(e);if("string"==typeof t){let a=this.#a.get(t);if(a){if(a.length>1){let t=a.indexOf(e);-1!==t&&a.splice(t,1)}else a[0]===e&&this.#a.delete(t)}}}this.notify({type:"removed",mutation:e})}canRun(e){let t=W(e);if("string"!=typeof t)return!0;{let a=this.#a.get(t),r=a?.find(e=>"pending"===e.state.status);return!r||r===e}}runNext(e){let t=W(e);if("string"!=typeof t)return Promise.resolve();{let a=this.#a.get(t)?.find(t=>t!==e&&t.state.isPaused);return a?.continue()??Promise.resolve()}}clear(){J.j.batch(()=>{this.#t.forEach(e=>{this.notify({type:"removed",mutation:e})}),this.#t.clear(),this.#a.clear()})}getAll(){return Array.from(this.#t)}find(e){let t={exact:!0,...e};return this.getAll().find(e=>(0,G.nJ)(t,e))}findAll(e={}){return this.getAll().filter(t=>(0,G.nJ)(e,t))}notify(e){J.j.batch(()=>{this.listeners.forEach(t=>{t(e)})})}resumePausedMutations(){let e=this.getAll().filter(e=>e.state.isPaused);return J.j.batch(()=>Promise.all(e.map(e=>e.continue().catch(G.lQ))))}};function W(e){return e.options.scope?.id}var z=a(34017),U=a(38248);function V(e){return{onFetch:(t,a)=>{let r=t.options,s=t.fetchOptions?.meta?.fetchMore?.direction,n=t.state.data?.pages||[],i=t.state.data?.pageParams||[],l={pages:[],pageParams:[]},o=0,u=async()=>{let a=!1,u=e=>{Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(t.signal.aborted?a=!0:t.signal.addEventListener("abort",()=>{a=!0}),t.signal)})},c=(0,G.ZM)(t.options,t.fetchOptions),h=async(e,r,s)=>{if(a)return Promise.reject();if(null==r&&e.pages.length)return Promise.resolve(e);let n={client:t.client,queryKey:t.queryKey,pageParam:r,direction:s?"backward":"forward",meta:t.options.meta};u(n);let i=await c(n),{maxPages:l}=t.options,o=s?G.ZZ:G.y9;return{pages:o(e.pages,i,l),pageParams:o(e.pageParams,r,l)}};if(s&&n.length){let e="backward"===s,t={pages:n,pageParams:i},a=(e?function(e,{pages:t,pageParams:a}){return t.length>0?e.getPreviousPageParam?.(t[0],t,a[0],a):void 0}:ee)(r,t);l=await h(t,a,e)}else{let t=e??n.length;do{let e=0===o?i[0]??r.initialPageParam:ee(r,l);if(o>0&&null==e)break;l=await h(l,e),o++}while(o<t)}return l};t.options.persister?t.fetchFn=()=>t.options.persister?.(u,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},a):t.fetchFn=u}}}function ee(e,{pages:t,pageParams:a}){let r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,a[r],a):void 0}var et=class{#s;#n;#i;#l;#o;#u;#c;#h;constructor(e={}){this.#s=e.queryCache||new Y,this.#n=e.mutationCache||new $,this.#i=e.defaultOptions||{},this.#l=new Map,this.#o=new Map,this.#u=0}mount(){this.#u++,1===this.#u&&(this.#c=z.m.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#s.onFocus())}),this.#h=U.t.subscribe(async e=>{e&&(await this.resumePausedMutations(),this.#s.onOnline())}))}unmount(){this.#u--,0===this.#u&&(this.#c?.(),this.#c=void 0,this.#h?.(),this.#h=void 0)}isFetching(e){return this.#s.findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return this.#n.findAll({...e,status:"pending"}).length}getQueryData(e){let t=this.defaultQueryOptions({queryKey:e});return this.#s.get(t.queryHash)?.state.data}ensureQueryData(e){let t=this.defaultQueryOptions(e),a=this.#s.build(this,t),r=a.state.data;return void 0===r?this.fetchQuery(e):(e.revalidateIfStale&&a.isStaleByTime((0,G.d2)(t.staleTime,a))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return this.#s.findAll(e).map(({queryKey:e,state:t})=>[e,t.data])}setQueryData(e,t,a){let r=this.defaultQueryOptions({queryKey:e}),s=this.#s.get(r.queryHash),n=s?.state.data,i=(0,G.Zw)(t,n);if(void 0!==i)return this.#s.build(this,r).setData(i,{...a,manual:!0})}setQueriesData(e,t,a){return J.j.batch(()=>this.#s.findAll(e).map(({queryKey:e})=>[e,this.setQueryData(e,t,a)]))}getQueryState(e){let t=this.defaultQueryOptions({queryKey:e});return this.#s.get(t.queryHash)?.state}removeQueries(e){let t=this.#s;J.j.batch(()=>{t.findAll(e).forEach(e=>{t.remove(e)})})}resetQueries(e,t){let a=this.#s,r={type:"active",...e};return J.j.batch(()=>(a.findAll(e).forEach(e=>{e.reset()}),this.refetchQueries(r,t)))}cancelQueries(e,t={}){let a={revert:!0,...t};return Promise.all(J.j.batch(()=>this.#s.findAll(e).map(e=>e.cancel(a)))).then(G.lQ).catch(G.lQ)}invalidateQueries(e,t={}){return J.j.batch(()=>{if(this.#s.findAll(e).forEach(e=>{e.invalidate()}),e?.refetchType==="none")return Promise.resolve();let a={...e,type:e?.refetchType??e?.type??"active"};return this.refetchQueries(a,t)})}refetchQueries(e,t={}){let a={...t,cancelRefetch:t.cancelRefetch??!0};return Promise.all(J.j.batch(()=>this.#s.findAll(e).filter(e=>!e.isDisabled()).map(e=>{let t=e.fetch(void 0,a);return a.throwOnError||(t=t.catch(G.lQ)),"paused"===e.state.fetchStatus?Promise.resolve():t}))).then(G.lQ)}fetchQuery(e){let t=this.defaultQueryOptions(e);void 0===t.retry&&(t.retry=!1);let a=this.#s.build(this,t);return a.isStaleByTime((0,G.d2)(t.staleTime,a))?a.fetch(t):Promise.resolve(a.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(G.lQ).catch(G.lQ)}fetchInfiniteQuery(e){return e.behavior=V(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(G.lQ).catch(G.lQ)}ensureInfiniteQueryData(e){return e.behavior=V(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return U.t.isOnline()?this.#n.resumePausedMutations():Promise.resolve()}getQueryCache(){return this.#s}getMutationCache(){return this.#n}getDefaultOptions(){return this.#i}setDefaultOptions(e){this.#i=e}setQueryDefaults(e,t){this.#l.set((0,G.EN)(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){let t=[...this.#l.values()],a={};return t.forEach(t=>{(0,G.Cp)(e,t.queryKey)&&Object.assign(a,t.defaultOptions)}),a}setMutationDefaults(e,t){this.#o.set((0,G.EN)(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){let t=[...this.#o.values()],a={};return t.forEach(t=>{(0,G.Cp)(e,t.mutationKey)&&(a={...a,...t.defaultOptions})}),a}defaultQueryOptions(e){if(e._defaulted)return e;let t={...this.#i.queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=(0,G.F$)(t.queryKey,t)),void 0===t.refetchOnReconnect&&(t.refetchOnReconnect="always"!==t.networkMode),void 0===t.throwOnError&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===G.hT&&(t.enabled=!1),t}defaultMutationOptions(e){return e?._defaulted?e:{...this.#i.mutations,...e?.mutationKey&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){this.#s.clear(),this.#n.clear()}},ea=a(35906),er=a(43302),es=a(29214);let en=new et;function ei(e){let{children:t}=e,[a,n]=s.useState(!1);async function l(){let e=await er.Kb.getRandomList();er.Sj.insert(e);let t=await es.l_.getShareBill();es.Bu.insert(t),en.invalidateQueries()}return s.useEffect(()=>{a||(l(),n(!0))},[a]),(0,r.jsx)("html",{lang:"en",children:(0,r.jsx)("body",{className:"".concat(i().variable," ").concat(o().variable," antialiased"),children:(0,r.jsx)(ea.Ht,{client:en,children:(0,r.jsx)(S,{gap:"middle",wrap:!0,children:(0,r.jsx)(I,{children:(0,r.jsx)(I,{children:(0,r.jsx)(L,{children:t})})})})})})})}},43302:(e,t,a)=>{"use strict";a.d(t,{Hd:()=>p,Kb:()=>f,Sj:()=>c,ln:()=>y,oJ:()=>d});var r=a(14449),s=a(21455),n=a.n(s),i=a(13697),l=a(49113),o=a.n(l),u=a(56818);let c=r.Oh.addCollection(u.q.RandomList);class h extends r.Ay{getRandomList(){return super.getAll(this.store)}async syncRandomList(){let e=c.find({});for(let t of(await super.deleteAll(this.store),e)){let e=o().omit(t,["$loki","meta"]);await super.save(this.store,e)}return e}constructor(...e){super(...e),this.store=u.q.RandomList}}let f=new h;function d(){return c.find({}).sort((e,t)=>n()(t.created_at).isAfter(n()(e.created_at))?1:-1)}async function y(e){let{name:t,list:a}=e,r=await Promise.resolve(c.insert({id:(0,i.A)(),name:t,items:a,created_at:n()().toDate()}));return await f.syncRandomList(),r}async function p(e){let t=await Promise.resolve(c.findAndRemove({id:e}));return await f.syncRandomList(),t}},29214:(e,t,a)=>{"use strict";a.d(t,{Bu:()=>u,HM:()=>f,l_:()=>h,wN:()=>d});var r=a(21455),s=a.n(r),n=a(56818),i=a(14449),l=a(49113),o=a.n(l);let u=i.Oh.addCollection(n.q.ShareBill);class c extends i.Ay{getShareBill(){return super.getAll(this.store)}async syncShareBill(){let e=u.find({});for(let t of(await super.deleteAll(this.store),e)){let e=o().omit(t,["$loki","meta"]);await super.save(this.store,e)}return e}constructor(...e){super(...e),this.store=n.q.ShareBill}}let h=new c;function f(){return u.find({}).sort((e,t)=>new Date(t.created_at).getTime()>new Date(e.created_at).getTime()?1:-1)}async function d(e){let t=await Promise.resolve(u.insert({...e,name:"Chia tiền ng\xe0y ".concat(s()().format("DD/MM/YYYY HH:mm:ss")),created_at:s()().toDate()}));return await h.syncShareBill(),t}},56818:(e,t,a)=>{"use strict";a.d(t,{q:()=>r});var r=function(e){return e.RandomList="random_list",e.ShareBill="share_bill",e}({})},14449:(e,t,a)=>{"use strict";a.d(t,{Ay:()=>o,Oh:()=>i});var r=a(51288),s=a.n(r),n=a(56818);let i=new(s())("anuong.db");class l{async init(){return this.database?this.database:new Promise((e,t)=>{let a=window.indexedDB.open("anuong",1);a.onupgradeneeded=()=>{let e=a.result;e.objectStoreNames.contains(n.q.RandomList)||e.createObjectStore(n.q.RandomList,{keyPath:"id",autoIncrement:!0}),e.objectStoreNames.contains(n.q.ShareBill)||e.createObjectStore(n.q.ShareBill,{keyPath:"id",autoIncrement:!0})},a.onsuccess=()=>{this.database=a.result,e(this.database)},a.onerror=()=>{t(a.error)}})}async save(e,t){let a=await this.init();return new Promise((r,s)=>{let n=a.transaction(e,"readwrite").objectStore(e),i=JSON.parse(JSON.stringify(t)),l=n.add(i);l.onsuccess=()=>r(),l.onerror=()=>s(l.error)})}async getAll(e){let t=await this.init();return new Promise((a,r)=>{let s=t.transaction(e,"readonly").objectStore(e).getAll();s.onsuccess=()=>a(s.result),s.onerror=()=>r(s.error)})}async deleteAll(e){let t=await this.init();return new Promise((a,r)=>{let s=t.transaction(e,"readwrite").objectStore(e).clear();s.onsuccess=()=>a(e),s.onerror=()=>r(s.error)})}constructor(){this.database=null}}let o=l},4147:e=>{e.exports={style:{fontFamily:"'Geist', 'Geist Fallback'",fontStyle:"normal"},className:"__className_4d318d",variable:"__variable_4d318d"}},38489:e=>{e.exports={style:{fontFamily:"'Geist Mono', 'Geist Mono Fallback'",fontStyle:"normal"},className:"__className_ea5f4b",variable:"__variable_ea5f4b"}}},e=>{var t=t=>e(e.s=t);e.O(0,[481,935,600,754,999,441,517,358],()=>t(23044)),_N_E=e.O()}]);