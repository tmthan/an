(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[328],{79516:(e,n,t)=>{Promise.resolve().then(t.bind(t,40456))},40456:(e,n,t)=>{"use strict";t.r(n),t.d(n,{ShareBill:()=>W,default:()=>Z});var l=t(95155),i=t(12115),r=t(26509),a=t(9014),o=t(79005),s=t(82957),d=t(93779),c=t(9365),u=t(99373),m=function(e){return e.ShareByMember="ShareByMember",e.ShareByFood="ShareByFood",e}({}),h=t(5050),p=t(18198),x=t(22810),g=t(2796),y=t(76237),v=t(89351),j=t(242),A=t(35153),b=t(96030),f=t(99425);t(6536);var S=t(65872),C=t(42707),k=t(45100),w=t(97838),B=t(7787),q=t(97295),I=t(49113),M=t.n(I);let F=function(e){let{foodList:n,memberList:t,billItems:r,setBillItems:a,shippingFee:s,setShippingFee:d,discountAmount:c,setDiscountAmount:u,calculatorMode:j,setCalculatorMode:S}=e,[C,I]=i.useState(),[F,N]=i.useState(!1),L=i.useCallback(e=>{let t=M().keyBy(n,"id");return(0,l.jsx)(h.A,{size:"large",children:r.filter(n=>n.member===e&&n.quantity>0).map(e=>{var n,i;return(0,l.jsx)(k.A,{bordered:!1,color:"blue",children:e.quantity>1?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(w.A,{count:e.quantity,color:"green"}),null===(n=t[e.food])||void 0===n?void 0:n.name]}):null===(i=t[e.food])||void 0===i?void 0:i.name},e.id)})})},[r,n]),T=i.useMemo(()=>(0,l.jsx)(B.A,{dataSource:t.filter(e=>e.name),renderItem:e=>(0,l.jsx)(B.A.Item,{actions:[(0,l.jsx)(o.Ay,{type:"primary",onClick:()=>{I(e),N(!0)},children:"Sửa"},"edit")],children:(0,l.jsx)(B.A.Item.Meta,{title:e.name,description:L(e.id)})})}),[L,t]),G=i.useCallback((e,n,t)=>{a(r.map(l=>l.food===n&&l.member===t?{...l,quantity:e}:l))},[r,a]),P=i.useCallback((e,n)=>{a(r.map(t=>t.food===e&&t.member===n?{...t,quantity:Math.max(t.quantity-1,0)}:t))},[r,a]),_=i.useCallback((e,n)=>{a(r.map(t=>t.food===e&&t.member===n?{...t,quantity:t.quantity+1}:t))},[r,a]),D=i.useMemo(()=>(0,l.jsx)(B.A,{dataSource:n.filter(e=>e.name),renderItem:e=>{var n;let t=r.find(n=>n.food===e.id&&n.member===(null==C?void 0:C.id)),i=null!==(n=null==t?void 0:t.quantity)&&void 0!==n?n:0;return(0,l.jsx)(B.A.Item,{actions:[(0,l.jsxs)(h.A,{children:[i>0&&(0,l.jsx)(o.Ay,{shape:"circle",onClick:()=>{var e,n;return P(null!==(e=null==t?void 0:t.food)&&void 0!==e?e:"",null!==(n=null==C?void 0:C.id)&&void 0!==n?n:"")},icon:(0,l.jsx)(A.A,{}),size:"small"}),i>0&&(0,l.jsx)(p.A,{value:i,onChange:e=>{var n,l;return G(null!=e?e:0,null!==(n=null==t?void 0:t.food)&&void 0!==n?n:"",null!==(l=null==C?void 0:C.id)&&void 0!==l?l:"")},style:{width:50},formatter:e=>"".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")}),(0,l.jsx)(o.Ay,{shape:"circle",icon:(0,l.jsx)(b.A,{}),size:"small",onClick:()=>{var e,n;return _(null!==(e=null==t?void 0:t.food)&&void 0!==e?e:"",null!==(n=null==C?void 0:C.id)&&void 0!==n?n:"")}})]},"change-quantity")],children:(0,l.jsx)(B.A.Item.Meta,{title:e.name})})}}),[r,null==C?void 0:C.id,n,_,G,P]);return(0,l.jsxs)("div",{children:[(0,l.jsxs)(y.A,{labelCol:{span:8},wrapperCol:{span:16},autoComplete:"off",children:[(0,l.jsxs)(x.A,{gutter:[20,20],children:[(0,l.jsx)(g.A,{span:24,md:12,children:(0,l.jsx)(f.A,{label:"Ph\xed vận chuyện + phụ ph\xed",children:(0,l.jsx)(p.A,{value:s,onChange:e=>d(null!=e?e:0),suffix:"đ",formatter:e=>"".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,","),step:1e3,style:{width:"100%"}})})}),(0,l.jsx)(g.A,{span:24,md:12,children:(0,l.jsx)(f.A,{label:"Giảm gi\xe1",children:(0,l.jsx)(p.A,{value:c,onChange:e=>u(null!=e?e:0),suffix:"đ",step:1e3,formatter:e=>"".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,","),style:{width:"100%"}})})})]}),(0,l.jsx)(x.A,{gutter:[20,20],children:(0,l.jsx)(g.A,{span:24,md:12,children:(0,l.jsx)(y.A.Item,{name:"radio-button",label:"C\xe1ch chia",children:(0,l.jsxs)(v.Ay.Group,{onChange:e=>S(e.target.value),value:j,children:[(0,l.jsx)(v.Ay,{value:m.ShareByMember,children:"Chia theo đầu người"}),(0,l.jsx)(v.Ay,{value:m.ShareByFood,children:"Chia theo m\xf3n"})]})})})})]}),T,(0,l.jsx)(q.A,{open:F,title:null==C?void 0:C.name,closeIcon:!1,footer:(0,l.jsx)(o.Ay,{type:"primary",onClick:()=>N(!1),children:"Xong"}),children:D})]})},N=e=>{let{foodList:n,memberList:t,billItems:r,setBillItems:a,shippingFee:s,setShippingFee:d,discountAmount:c,setDiscountAmount:u,calculatorMode:k,setCalculatorMode:w}=e,B=(0,S.G)(),q=[{title:"T\xean m\xf3n",dataIndex:"foodName",key:"foodName"}].concat(t.filter(e=>e.name).map(e=>({title:e.name,dataIndex:e.id,key:e.id,render:(n,t)=>(0,l.jsxs)(h.A,{children:[n>0&&(0,l.jsx)(o.Ay,{shape:"circle",onClick:()=>{var n,l;return n=t.foodId,l=e.id,void a(r.map(e=>e.food===n&&e.member===l?{...e,quantity:Math.max(e.quantity-1,0)}:e))},icon:(0,l.jsx)(A.A,{}),size:"small"}),n>0&&(0,l.jsx)(p.A,{value:n,onChange:n=>{var l,i,o;return l=null!=n?n:0,i=t.foodId,o=e.id,void a(r.map(e=>e.food===i&&e.member===o?{...e,quantity:l}:e))},style:{width:50},formatter:e=>"".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,",")}),(0,l.jsx)(o.Ay,{shape:"circle",icon:(0,l.jsx)(b.A,{}),size:"small",onClick:()=>{var n,l;return n=t.foodId,l=e.id,void a(r.map(e=>e.food===n&&e.member===l?{...e,quantity:e.quantity+1}:e))}})]})}))),I=i.useMemo(()=>{let e=[];for(let l of n.filter(e=>e.name)){let n={key:l.id,foodName:l.name,foodId:l.id,quantity:0};for(let e of t.filter(e=>e.name)){let t=r.find(n=>n.food===l.id&&n.member===e.id);n[e.id]=t?t.quantity:0}e.push(n)}return e},[n,t,r]);return B?(0,l.jsxs)(x.A,{children:[(0,l.jsx)(g.A,{span:24,children:(0,l.jsxs)(y.A,{labelCol:{span:8},wrapperCol:{span:16},autoComplete:"off",children:[(0,l.jsxs)(x.A,{gutter:[20,20],children:[(0,l.jsx)(g.A,{span:24,md:12,children:(0,l.jsx)(f.A,{label:"Ph\xed vận chuyện + phụ ph\xed",children:(0,l.jsx)(p.A,{value:s,onChange:e=>d(null!=e?e:0),suffix:"đ",formatter:e=>"".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,","),step:1e3,style:{width:"100%"}})})}),(0,l.jsx)(g.A,{span:24,md:12,children:(0,l.jsx)(f.A,{label:"Giảm gi\xe1",children:(0,l.jsx)(p.A,{value:c,onChange:e=>u(null!=e?e:0),suffix:"đ",step:1e3,formatter:e=>"".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,","),style:{width:"100%"}})})})]}),(0,l.jsx)(x.A,{gutter:[20,20],children:(0,l.jsx)(g.A,{span:24,md:12,children:(0,l.jsx)(y.A.Item,{name:"radio-button",label:"C\xe1ch chia",children:(0,l.jsxs)(v.Ay.Group,{onChange:e=>w(e.target.value),value:k,children:[(0,l.jsx)(v.Ay,{value:m.ShareByMember,children:"Chia theo đầu người"}),(0,l.jsx)(v.Ay,{value:m.ShareByFood,children:"Chia theo m\xf3n"})]})})})})]})}),!B&&(0,l.jsx)(C.A,{children:"Giao diện d\xe0nh ri\xeang cho điện thoại sẽ sớm được cập nhật"}),(0,l.jsx)(g.A,{span:24,children:(0,l.jsx)(j.A,{scroll:{y:275,x:"max-content"},columns:q,dataSource:I,pagination:!1,className:"share-bill-table"})})]}):(0,l.jsx)(F,{foodList:n,memberList:t,billItems:r,setBillItems:a,shippingFee:s,setShippingFee:d,discountAmount:c,setDiscountAmount:u,calculatorMode:k,setCalculatorMode:w})};var L=t(29288),T=t(78723);let{Text:G}=L.A,P=e=>{let{foodList:n,billItems:t,memberList:r,calculatorMode:a,discountAmount:o,shippingFee:s}=e,d=M().keyBy(r,"id"),c=i.useCallback(e=>{let i=M().keyBy(n,"id");return(0,l.jsx)(h.A,{size:"large",children:t.filter(n=>n.member===e&&n.quantity>0).map(e=>{var n,t,r;return(0,l.jsx)(w.A,{count:(0,T.z)(null!==(r=i[e.food].price)&&void 0!==r?r:0),color:"pink",children:(0,l.jsx)(k.A,{bordered:!1,color:"blue",children:e.quantity>1?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(w.A,{count:e.quantity,color:"green"}),null===(n=i[e.food])||void 0===n?void 0:n.name]}):null===(t=i[e.food])||void 0===t?void 0:t.name})},e.id)})})},[t,n]),u=[{title:"T\xean th\xe0nh vi\xean",dataIndex:"member",key:"member",render:e=>{var n,t;return(0,l.jsx)(B.A.Item.Meta,{title:null!==(t=null===(n=d[e])||void 0===n?void 0:n.name)&&void 0!==t?t:"",description:c(e)})}},{title:"Tổng phải trả",dataIndex:"money",key:"money",align:"right",render:e=>(0,l.jsx)(G,{strong:!0,children:new Intl.NumberFormat("en-US").format(e)})},{title:"Tổng tiền m\xf3n",dataIndex:"totalFood",align:"right",render:e=>new Intl.NumberFormat("en-US").format(e)},{title:"Ph\xed Ship",dataIndex:"shippingFee",align:"right",render:e=>new Intl.NumberFormat("en-US").format(e)},{title:"Giảm gi\xe1",dataIndex:"discountAmount",align:"right",render:e=>"-"+new Intl.NumberFormat("en-US").format(e)}],p=i.useMemo(()=>{let e=t.filter(e=>e.quantity>0&&e.member&&e.food),l=M().groupBy(e,"member"),i=M().keyBy(n,"id"),r=Object.keys(l).length,c=M().sumBy(e,"quantity"),u=M().round(s/r),h=M().round(s/c),p=M().round(o/r),x=M().round(o/c),g=M().round((s-o)/r),y=M().round((s-o)/c);return a===m.ShareByMember?Object.entries(l).map(e=>{let[n,t]=e,l=M().sumBy(t,e=>{var n;let t=i[e.food];return(null!==(n=null==t?void 0:t.price)&&void 0!==n?n:0)*e.quantity});return{key:n,member:n,totalFood:l,shippingFee:u,discountAmount:p,money:M().round(l+g)}}):Object.entries(l).map(e=>{var n,t;let[l,r]=e,a=M().sumBy(r,e=>{var n;let t=i[e.food];return(null!==(n=null==t?void 0:t.price)&&void 0!==n?n:0)*e.quantity}),o=M().sumBy(r.filter(e=>e.member===l),"quantity");return{key:l,member:null!==(t=null===(n=d[l])||void 0===n?void 0:n.name)&&void 0!==t?t:"",totalFood:a,shippingFee:h*o,discountAmount:x,money:M().round(a+y)}})},[t,a,o,n,d,s]);return(0,l.jsx)(j.A,{columns:u,dataSource:p,pagination:!1})};var _=t(13697),D=t(35906),O=t(25848),z=t(29214);let Y="SHARE_BILL";var H=t(21455),R=t.n(H),E=t(41657);let{Title:U,Paragraph:K}=L.A,J=function(e){let{foodList:n,setFoodList:t,memberList:r,setMemberList:a}=e,o=Math.max(n.length,r.length),s=(0,S.G)(),[d,u]=i.useState(!1),m=i.useCallback((e,n)=>{let t=r.map((t,l)=>n===l?{...t,name:e}:t);n===r.length-1&&t.push({id:(0,_.A)(),name:""}),a(t)},[r,a]),h=i.useCallback((e,l)=>{let i=n.map((n,t)=>l===t?{...n,name:e}:n);l===n.length-1&&i.push({id:(0,_.A)(),name:"",price:null}),t(i)},[n,t]),y=i.useCallback((e,l)=>{let i=n.map((n,t)=>l===t?{...n,price:null!=e?e:0}:n);l===n.length-1&&i.push({id:(0,_.A)(),name:"",price:null!=e?e:null}),t(i)},[n,t]),v=i.useMemo(()=>{let e=[];for(let f=0;f<o;f++){var t,i,a,d,u,v,j,A,b;e.push((0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(x.A,{gutter:[10,10],style:{marginBottom:8},children:[(0,l.jsx)(g.A,{span:24,md:10,children:r[f]&&(0,l.jsx)(E.A,{value:null!==(u=null===(t=r[f])||void 0===t?void 0:t.name)&&void 0!==u?u:null,placeholder:s?"Tab để sang \xf4 kế tiếp":"T\xean th\xe0nh vi\xean",onChange:e=>m(e.target.value,f)})}),n[f]?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g.A,{span:24,md:10,children:(0,l.jsx)(E.A,{value:null!==(v=null===(i=n[f])||void 0===i?void 0:i.name)&&void 0!==v?v:null,placeholder:s?"Tab để sang \xf4 kế tiếp":"T\xean m\xf3n",onChange:e=>h(e.target.value,f)})}),(0,l.jsx)(g.A,{span:24,md:4,children:(0,l.jsx)(p.A,{style:{width:"100%"},value:null!==(j=null===(a=n[f])||void 0===a?void 0:a.price)&&void 0!==j?j:null,formatter:e=>"".concat(e).replace(/\B(?=(\d{3})+(?!\d))/g,","),placeholder:s?"Tab để sang \xf4 kế tiếp":"Gi\xe1 tiền",onChange:e=>y(e,f),suffix:"đ",step:1e3})})]}):null]},null!==(b=null!==(A=null===(d=r[f])||void 0===d?void 0:d.id)&&void 0!==A?A:n[f].id)&&void 0!==b?b:f),f<o-1&&!s&&(0,l.jsx)(c.A,{})]}))}return e},[n,s,o,r,h,m,y]);return(0,l.jsxs)(l.Fragment,{children:[s&&(0,l.jsxs)(x.A,{gutter:[10,10],children:[(0,l.jsx)(g.A,{span:24,md:10,children:(0,l.jsx)(U,{level:5,children:"T\xean th\xe0nh vi\xean"})}),(0,l.jsx)(g.A,{span:24,md:10,children:(0,l.jsx)(U,{level:5,children:"T\xean m\xf3n"})}),(0,l.jsx)(g.A,{span:24,md:4,children:(0,l.jsx)(U,{level:5,children:"Gi\xe1 tiền"})})]}),v,(0,l.jsx)(x.A,{children:(0,l.jsx)(g.A,{span:24,children:(0,l.jsx)("a",{onClick:()=>u(!0),children:"C\xf3 nhiều người đặt m\xf3n giống nhau?"})})}),(0,l.jsxs)(q.A,{footer:null,open:d,onCancel:()=>u(!1),children:[(0,l.jsx)(U,{level:4,children:"C\xf3 nhiều hơn một người c\xf9ng đặt m\xf3n giống nhau?"}),(0,l.jsx)(K,{children:"Đừng lo. Bạn chỉ cần nhập t\xean những người ấy v\xe0o \xf4 t\xean th\xe0nh vi\xean ở cuối danh s\xe1ch v\xe0 bỏ trống c\xe1c cột t\xean m\xf3n v\xe0 gi\xe1. Giao diện ở bước tiếp theo sẽ cho bạn lựa chọn những người n\xe0o đặt m\xf3n ấy."}),(0,l.jsx)(U,{level:4,children:"C\xf3 một người đặt nhiều m\xf3n?"}),(0,l.jsx)(K,{children:"Cũng tương tự như tr\xean. Bạn chỉ việc nhập t\xean v\xe0 gi\xe1 của m\xf3n đ\xf3 ở cột t\xean v\xe0 m\xf3n v\xe0o cuối danh s\xe1ch. Giao diện ở bước tiếp theo sẽ gi\xfap bạn lựa chọn người n\xe0o đặt những m\xf3n n\xe0o."})]})]})},X=function(e){let{setStartTransaction:n}=e,{token:t}=s.A.useToken(),[h,p]=i.useState(0),[x,g]=i.useState([{id:(0,_.A)(),name:"",price:null}]),[y,v]=i.useState([{id:(0,_.A)(),name:""}]),[j,A]=i.useState([]),[b,f]=i.useState(0),[C,k]=i.useState(0),[w,B]=i.useState(m.ShareByMember),{mutate:q}=function(){let e=(0,D.jE)();return(0,O.n)({mutationFn:z.wN,onSuccess(){e.invalidateQueries({queryKey:[Y]})}})}(),I=(0,S.G)(),M=[{title:"Nhập dữ liệu",content:(0,l.jsx)(J,{foodList:x,setFoodList:g,memberList:y,setMemberList:v})},{title:"Chia tiền",content:(0,l.jsx)(N,{foodList:x,memberList:y,billItems:j,setBillItems:A,shippingFee:b,setShippingFee:f,discountAmount:C,setDiscountAmount:k,calculatorMode:w,setCalculatorMode:B})},{title:"Kết quả",content:(0,l.jsx)(P,{foodList:x,billItems:j,calculatorMode:w,shippingFee:b,discountAmount:C,memberList:y})}],F=()=>{let e=[];for(let[n,t]of x.filter(e=>e.name).entries())for(let[l,i]of y.filter(e=>e.name).entries())e.push({id:(0,_.A)(),food:t.id,member:i.id,quantity:n===l?1:0});A(e)},L=()=>{h===M.length-3&&F(),p(h+1)},T=()=>{p(h-1)},G=()=>{q({foodList:x,memberList:y,billItems:j,shippingFee:b,discountAmount:C,calculatorMode:w,created_at:new Date,id:(0,_.A)(),name:"Chia tiền ng\xe0y ".concat(R()().format("DD/MM/YYYY HH:mm:ss"))}),g([{id:(0,_.A)(),name:"",price:null}]),v([{id:(0,_.A)(),name:""}]),A([]),f(0),p(0),k(0),B(m.ShareByMember),n(!1)},H=M.map(e=>({key:e.title,title:e.title})),E={color:t.colorTextTertiary,borderRadius:t.borderRadiusLG};return(0,l.jsx)(r.A,{justify:"center",align:"center",style:{height:"100vh",background:"url('/ban-tiec.jpeg')",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",padding:20,overflow:"auto"},children:(0,l.jsxs)(a.A,{style:{width:"100%",background:"rgba(255, 255, 255, 0.8)",backdropFilter:"blur(10px)"},styles:{body:{overflow:"auto",height:"calc(100vh - 100px)"}},children:[(0,l.jsx)(d.A,{current:h,items:H}),!I&&(0,l.jsx)(c.A,{}),(0,l.jsx)("div",{style:E,className:"transaction-wrapper",children:M[h].content}),(0,l.jsx)(c.A,{}),(0,l.jsxs)("div",{children:[h<M.length-1&&(0,l.jsx)(o.Ay,{type:"primary",onClick:()=>L(),children:"Tiếp"}),h===M.length-1&&(0,l.jsx)(o.Ay,{type:"primary",onClick:()=>{u.Ay.success("Processing complete!"),G()},children:"Xong"}),h>0&&(0,l.jsx)(o.Ay,{style:{margin:"0 8px"},onClick:()=>T(),children:"Trước"})]})]})})};var Q=t(547);let{Title:$}=L.A,V=function(){let{data:e}=(0,Q.I)({queryKey:[Y],queryFn:()=>(0,z.HM)()}),[n,t]=i.useState(null),[r,a]=i.useState(!1),o=[{title:"T\xean",dataIndex:"name",key:"name",render:(e,n)=>(0,l.jsx)("a",{onClick:()=>{t(n),a(!0)},children:e})}];return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)($,{level:3,children:"Lịch sử"}),(0,l.jsx)(j.A,{columns:o,dataSource:e,pagination:!1,className:"share-bill-table"}),(0,l.jsx)(q.A,{footer:!1,open:r,onCancel:()=>a(!1),width:{xs:"90%",sm:"90%",md:"90%",lg:"80%",xl:"70%",xxl:"60%"},children:n&&(0,l.jsx)(P,{billItems:n.billItems,calculatorMode:n.calculatorMode,shippingFee:n.shippingFee,discountAmount:n.discountAmount,foodList:n.foodList,memberList:n.memberList})})]})},W=()=>{let[e,n]=i.useState(!1);return e?(0,l.jsx)(X,{setStartTransaction:n}):(0,l.jsx)(r.A,{justify:"center",align:"center",className:"app-container",style:{background:"url('/chia-tien.jpeg')"},children:(0,l.jsxs)(a.A,{title:"Chia tiền ho\xe1 đơn",className:"app-card share-bill-card",children:[(0,l.jsx)(r.A,{justify:"center",align:"center",children:(0,l.jsx)(o.Ay,{size:"large",type:"primary",onClick:()=>{n(!0)},children:"Bắt đầu"})}),(0,l.jsx)(V,{})]})})},Z=W},29214:(e,n,t)=>{"use strict";t.d(n,{Bu:()=>d,HM:()=>m,l_:()=>u,wN:()=>h});var l=t(21455),i=t.n(l),r=t(56818),a=t(14449),o=t(49113),s=t.n(o);let d=a.Oh.addCollection(r.q.ShareBill);class c extends a.Ay{getShareBill(){return super.getAll(this.store)}async syncShareBill(){let e=d.find({});for(let n of(await super.deleteAll(this.store),e)){let e=s().omit(n,["$loki","meta"]);await super.save(this.store,e)}return e}constructor(...e){super(...e),this.store=r.q.ShareBill}}let u=new c;function m(){return d.find({}).sort((e,n)=>new Date(n.created_at).getTime()>new Date(e.created_at).getTime()?1:-1)}async function h(e){let n=await Promise.resolve(d.insert({...e,name:"Chia tiền ng\xe0y ".concat(i()().format("DD/MM/YYYY HH:mm:ss")),created_at:i()().toDate()}));return await u.syncShareBill(),n}},56818:(e,n,t)=>{"use strict";t.d(n,{q:()=>l});var l=function(e){return e.RandomList="random_list",e.ShareBill="share_bill",e}({})},14449:(e,n,t)=>{"use strict";t.d(n,{Ay:()=>s,Oh:()=>a});var l=t(51288),i=t.n(l),r=t(56818);let a=new(i())("anuong.db");class o{async init(){return this.database?this.database:new Promise((e,n)=>{let t=window.indexedDB.open("anuong",1);t.onupgradeneeded=()=>{let e=t.result;e.objectStoreNames.contains(r.q.RandomList)||e.createObjectStore(r.q.RandomList,{keyPath:"id",autoIncrement:!0}),e.objectStoreNames.contains(r.q.ShareBill)||e.createObjectStore(r.q.ShareBill,{keyPath:"id",autoIncrement:!0})},t.onsuccess=()=>{this.database=t.result,e(this.database)},t.onerror=()=>{n(t.error)}})}async save(e,n){let t=await this.init();return new Promise((l,i)=>{let r=t.transaction(e,"readwrite").objectStore(e),a=JSON.parse(JSON.stringify(n)),o=r.add(a);o.onsuccess=()=>l(),o.onerror=()=>i(o.error)})}async getAll(e){let n=await this.init();return new Promise((t,l)=>{let i=n.transaction(e,"readonly").objectStore(e).getAll();i.onsuccess=()=>t(i.result),i.onerror=()=>l(i.error)})}async deleteAll(e){let n=await this.init();return new Promise((t,l)=>{let i=n.transaction(e,"readwrite").objectStore(e).clear();i.onsuccess=()=>t(e),i.onerror=()=>l(i.error)})}constructor(){this.database=null}}let s=o},65872:(e,n,t)=>{"use strict";t.d(n,{G:()=>r});var l=t(12115),i=t(12942);let r=()=>{var e;let[n,t]=l.useState(null),r=(0,i.A)(n),a=(null!==(e=null==r?void 0:r.width)&&void 0!==e?e:0)>=768;return(0,l.useEffect)(()=>{var e,n;t(null===(n=window)||void 0===n?void 0:null===(e=n.document)||void 0===e?void 0:e.body)},[]),a}},6536:()=>{}},e=>{var n=n=>e(e.s=n);e.O(0,[65,935,600,103,838,256,529,474,441,517,358],()=>n(79516)),_N_E=e.O()}]);