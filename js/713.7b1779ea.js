"use strict";(self["webpackChunkstargazer"]=self["webpackChunkstargazer"]||[]).push([[713],{713:(e,a,l)=>{l.r(a),l.d(a,{default:()=>Ra});var t=l(9835),s=l(6970);const o={class:"row full-width items-center",id:"top"},d={class:"row full-width items-center"},n={key:0,class:"row justify-between items-center"},u=(0,t._)("span",{class:"col-shrink text-bold q-mx-sm"},"Momentum",-1),c=(0,t.Uk)("Burn momentum"),m={key:1},i={class:"row items-center"},r=(0,t._)("span",{class:"col-grow text-h6"},"Momentum",-1),p=(0,t.Uk)("Burn momentum"),V={key:2,class:"row justify-between items-center"},k=(0,t._)("span",{class:"col-shrink text-bold q-mx-sm"},"Health",-1),g=(0,t._)("span",{class:"col-shrink text-bold q-mx-sm"},"Spirit",-1),b=(0,t._)("span",{class:"col-shrink text-bold q-mx-sm"},"Supply",-1),w={key:3},h={class:"row justify-between items-center"},v=(0,t._)("span",{class:"col-2 text-bold"},"Health",-1),x={class:"row justify-between items-center"},f=(0,t._)("span",{class:"col-2 text-bold"},"Spirit",-1),q={class:"row justify-between items-center"},y=(0,t._)("span",{class:"col-2 text-bold"},"Supply",-1),W={class:"text-h4 sf-header text-center q-mt-md q-mb-sm",id:"assets"},_=(0,t.Uk)(" Assets"),C={key:4,class:"row assets-container"},U={class:"col left-assets q-mr-xs"},I=(0,t.Uk)("Remove asset"),Z={class:"col right-assets q-ml-xs"},j=(0,t.Uk)("Remove asset"),H={key:5,class:"column assets-container"},D=(0,t.Uk)("Remove asset"),Q=(0,t._)("div",{class:"text-h4 sf-header text-center q-mt-md q-mb-sm",id:"legacies"},"Legacy Tracks",-1),T={class:"row"},M=(0,t._)("div",{class:"col-12 text-h4 sf-header text-center q-pt-md",id:"impacts"},"Impacts",-1),A={class:"text-bold"};function S(e,a,l,S,L,z){const E=(0,t.up)("q-input"),Y=(0,t.up)("resource-track"),B=(0,t.up)("q-tooltip"),P=(0,t.up)("q-btn"),R=(0,t.up)("q-separator"),F=(0,t.up)("stats"),K=(0,t.up)("i-input"),N=(0,t.up)("asset"),$=(0,t.up)("legacy-track"),O=(0,t.up)("q-checkbox"),J=(0,t.up)("assets"),G=(0,t.up)("q-page");return(0,t.wg)(),(0,t.j4)(G,{padding:""},{default:(0,t.w5)((()=>[(0,t._)("div",o,[(0,t.Wm)(E,{class:"col-grow",label:"Name",modelValue:e.campaign.data.character.name,"onUpdate:modelValue":a[0]||(a[0]=a=>e.campaign.data.character.name=a),dense:""},null,8,["modelValue"]),(0,t.Wm)(E,{class:"col-4",label:"Pronouns",modelValue:e.campaign.data.character.pronouns,"onUpdate:modelValue":a[1]||(a[1]=a=>e.campaign.data.character.pronouns=a),dense:""},null,8,["modelValue"])]),(0,t._)("div",d,[(0,t.Wm)(E,{class:"col-xs-4 col-sm-3 col-2",label:"Callsign",modelValue:e.campaign.data.character.callsign,"onUpdate:modelValue":a[2]||(a[2]=a=>e.campaign.data.character.callsign=a),dense:""},null,8,["modelValue"]),(0,t.Wm)(E,{class:"col-grow",label:"Characteristics",modelValue:e.campaign.data.character.characteristics,"onUpdate:modelValue":a[3]||(a[3]=a=>e.campaign.data.character.characteristics=a),dense:""},null,8,["modelValue"])]),e.$q.screen.gt.xs?((0,t.wg)(),(0,t.iD)("div",n,[u,(0,t.Wm)(Y,{class:"col-grow",modelValue:e.campaign.data.character.tracks.momentum,"onUpdate:modelValue":a[4]||(a[4]=a=>e.campaign.data.character.tracks.momentum=a)},null,8,["modelValue"]),(0,t.Wm)(E,{class:"col-xs-2 col-sm-1 col-1",label:"Max",type:"number",max:10,min:-6,modelValue:e.campaign.data.character.tracks.momentum.max,"onUpdate:modelValue":a[5]||(a[5]=a=>e.campaign.data.character.tracks.momentum.max=a),dense:"",borderless:""},null,8,["modelValue"]),(0,t.Wm)(E,{class:"col-xs-2 col-sm-1 col-1",label:"Reset",type:"number",max:4,min:0,modelValue:e.campaign.data.character.tracks.momentum.reset,"onUpdate:modelValue":a[6]||(a[6]=a=>e.campaign.data.character.tracks.momentum.reset=a),dense:"",borderless:""},null,8,["modelValue"]),(0,t.Wm)(P,{class:"col-shrink",icon:"mdi-fire",onClick:e.burnMomentum,flat:"",dense:""},{default:(0,t.w5)((()=>[(0,t.Wm)(B,null,{default:(0,t.w5)((()=>[c])),_:1})])),_:1},8,["onClick"])])):((0,t.wg)(),(0,t.iD)("div",m,[(0,t._)("div",i,[r,(0,t.Wm)(E,{class:"col-xs-2 col-sm-1 col-1",label:"Max",type:"number",max:10,min:-6,modelValue:e.campaign.data.character.tracks.momentum.max,"onUpdate:modelValue":a[7]||(a[7]=a=>e.campaign.data.character.tracks.momentum.max=a),dense:"",borderless:""},null,8,["modelValue"]),(0,t.Wm)(E,{class:"col-xs-2 col-sm-1 col-1",label:"Reset",type:"number",max:4,min:0,modelValue:e.campaign.data.character.tracks.momentum.reset,"onUpdate:modelValue":a[8]||(a[8]=a=>e.campaign.data.character.tracks.momentum.reset=a),dense:"",borderless:""},null,8,["modelValue"]),(0,t.Wm)(P,{class:"col-shrink",icon:"mdi-fire",onClick:e.burnMomentum,flat:"",dense:""},{default:(0,t.w5)((()=>[(0,t.Wm)(B,null,{default:(0,t.w5)((()=>[p])),_:1})])),_:1},8,["onClick"])]),(0,t.Wm)(Y,{class:"row full-width",modelValue:e.campaign.data.character.tracks.momentum,"onUpdate:modelValue":a[9]||(a[9]=a=>e.campaign.data.character.tracks.momentum=a)},null,8,["modelValue"])])),(0,t.Wm)(R),e.$q.screen.gt.xs?((0,t.wg)(),(0,t.iD)("div",V,[k,(0,t.Wm)(Y,{class:"col-grow",modelValue:e.campaign.data.character.tracks.health,"onUpdate:modelValue":a[10]||(a[10]=a=>e.campaign.data.character.tracks.health=a)},null,8,["modelValue"]),(0,t.Wm)(R,{vertical:""}),g,(0,t.Wm)(Y,{class:"col-grow",modelValue:e.campaign.data.character.tracks.spirit,"onUpdate:modelValue":a[11]||(a[11]=a=>e.campaign.data.character.tracks.spirit=a)},null,8,["modelValue"]),(0,t.Wm)(R,{vertical:""}),b,(0,t.Wm)(Y,{class:"col-grow",modelValue:e.campaign.data.character.tracks.supply,"onUpdate:modelValue":a[12]||(a[12]=a=>e.campaign.data.character.tracks.supply=a)},null,8,["modelValue"])])):((0,t.wg)(),(0,t.iD)("div",w,[(0,t._)("div",h,[v,(0,t.Wm)(Y,{class:"col-grow",modelValue:e.campaign.data.character.tracks.health,"onUpdate:modelValue":a[13]||(a[13]=a=>e.campaign.data.character.tracks.health=a)},null,8,["modelValue"])]),(0,t._)("div",x,[f,(0,t.Wm)(Y,{class:"col-grow",modelValue:e.campaign.data.character.tracks.spirit,"onUpdate:modelValue":a[14]||(a[14]=a=>e.campaign.data.character.tracks.spirit=a)},null,8,["modelValue"])]),(0,t._)("div",q,[y,(0,t.Wm)(Y,{class:"col-grow",modelValue:e.campaign.data.character.tracks.supply,"onUpdate:modelValue":a[15]||(a[15]=a=>e.campaign.data.character.tracks.supply=a)},null,8,["modelValue"])])])),(0,t.Wm)(R),(0,t.Wm)(F,{class:"q-mt-md",modelValue:e.campaign.data.character.stats,"onUpdate:modelValue":a[16]||(a[16]=a=>e.campaign.data.character.stats=a)},null,8,["modelValue"]),(0,t.Wm)(K,{class:"q-mt-md q-mb-md",label:"Gear & Notes",modelValue:e.campaign.data.character.gear,"onUpdate:modelValue":a[17]||(a[17]=a=>e.campaign.data.character.gear=a),autogrow:""},null,8,["modelValue"]),(0,t.Wm)(R),(0,t._)("div",W,[_,(0,t.Wm)(P,{icon:"add_circle",flat:"",dense:"",onClick:a[18]||(a[18]=a=>e.showAssetSelect=!0)})]),e.$q.screen.gt.sm?((0,t.wg)(),(0,t.iD)("div",C,[(0,t._)("div",U,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.campaign.data.character.assets,((a,l)=>((0,t.wg)(),(0,t.iD)("div",{key:l},[l%2==0?((0,t.wg)(),(0,t.j4)(N,{key:0,class:"q-mb-sm",modelValue:e.campaign.data.character.assets[l],"onUpdate:modelValue":a=>e.campaign.data.character.assets[l]=a},{append:(0,t.w5)((()=>[e.config.data.edit?((0,t.wg)(),(0,t.j4)(P,{key:0,icon:"delete",flat:"",dense:"",onClick:a=>e.removeAsset(l)},{default:(0,t.w5)((()=>[(0,t.Wm)(B,null,{default:(0,t.w5)((()=>[I])),_:1})])),_:2},1032,["onClick"])):(0,t.kq)("",!0)])),_:2},1032,["modelValue","onUpdate:modelValue"])):(0,t.kq)("",!0)])))),128))]),(0,t._)("div",Z,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.campaign.data.character.assets,((a,l)=>((0,t.wg)(),(0,t.iD)("div",{key:l},[l%2!=0?((0,t.wg)(),(0,t.j4)(N,{key:0,class:"q-mb-sm",modelValue:e.campaign.data.character.assets[l],"onUpdate:modelValue":a=>e.campaign.data.character.assets[l]=a},{append:(0,t.w5)((()=>[e.config.data.edit?((0,t.wg)(),(0,t.j4)(P,{key:0,icon:"delete",flat:"",dense:"",onClick:a=>e.removeAsset(l)},{default:(0,t.w5)((()=>[(0,t.Wm)(B,null,{default:(0,t.w5)((()=>[j])),_:1})])),_:2},1032,["onClick"])):(0,t.kq)("",!0)])),_:2},1032,["modelValue","onUpdate:modelValue"])):(0,t.kq)("",!0)])))),128))])])):((0,t.wg)(),(0,t.iD)("div",H,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.campaign.data.character.assets,((a,l)=>((0,t.wg)(),(0,t.iD)("div",{key:l},[(0,t.Wm)(N,{class:"q-mb-sm",modelValue:e.campaign.data.character.assets[l],"onUpdate:modelValue":a=>e.campaign.data.character.assets[l]=a},{append:(0,t.w5)((()=>[e.config.data.edit?((0,t.wg)(),(0,t.j4)(P,{key:0,icon:"delete",flat:"",dense:"",onClick:a=>e.removeAsset(l)},{default:(0,t.w5)((()=>[(0,t.Wm)(B,null,{default:(0,t.w5)((()=>[D])),_:1})])),_:2},1032,["onClick"])):(0,t.kq)("",!0)])),_:2},1032,["modelValue","onUpdate:modelValue"])])))),128))])),(0,t.Wm)(R),Q,(0,t.Wm)($,{name:"Quests",modelValue:e.campaign.data.character.legacies.quests,"onUpdate:modelValue":a[19]||(a[19]=a=>e.campaign.data.character.legacies.quests=a)},null,8,["modelValue"]),(0,t.Wm)(R),(0,t.Wm)($,{name:"Bonds",modelValue:e.campaign.data.character.legacies.bonds,"onUpdate:modelValue":a[20]||(a[20]=a=>e.campaign.data.character.legacies.bonds=a)},null,8,["modelValue"]),(0,t.Wm)(R),(0,t.Wm)($,{name:"Discoveries",modelValue:e.campaign.data.character.legacies.discoveries,"onUpdate:modelValue":a[21]||(a[21]=a=>e.campaign.data.character.legacies.discoveries=a)},null,8,["modelValue"]),(0,t.Wm)(R),(0,t._)("div",T,[M,((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.campaign.data.character.impacts,((a,l)=>((0,t.wg)(),(0,t.iD)("div",{class:"col-xs-6 col-sm-3 col-3",key:l},[(0,t._)("div",A,(0,s.zw)(l),1),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.campaign.data.character.impacts[l],((a,s)=>((0,t.wg)(),(0,t.j4)(O,{class:"row",key:s,label:a.name,modelValue:e.campaign.data.character.impacts[l][s].marked,"onUpdate:modelValue":a=>e.campaign.data.character.impacts[l][s].marked=a,onClick:e.markImpact},null,8,["label","modelValue","onUpdate:modelValue","onClick"])))),128))])))),128))]),(0,t.Wm)(J,{modelValue:e.showAssetSelect,"onUpdate:modelValue":a[22]||(a[22]=a=>e.showAssetSelect=a)},null,8,["modelValue"])])),_:1})}var L=l(499),z=l(9216),E=l(5860);const Y={class:"row justify-evenly q-gutter-xs"};function B(e,a,l,s,o,d){const n=(0,t.up)("stat");return(0,t.wg)(),(0,t.iD)("div",Y,[(0,t.Wm)(n,{class:"col-2",modelValue:e.data.edge,"onUpdate:modelValue":a[0]||(a[0]=a=>e.data.edge=a),modelModifiers:{number:!0},label:"Edge"},null,8,["modelValue"]),(0,t.Wm)(n,{class:"col-2",modelValue:e.data.heart,"onUpdate:modelValue":a[1]||(a[1]=a=>e.data.heart=a),modelModifiers:{number:!0},label:"Heart"},null,8,["modelValue"]),(0,t.Wm)(n,{class:"col-2",modelValue:e.data.iron,"onUpdate:modelValue":a[2]||(a[2]=a=>e.data.iron=a),modelModifiers:{number:!0},label:"Iron"},null,8,["modelValue"]),(0,t.Wm)(n,{class:"col-2",modelValue:e.data.shadow,"onUpdate:modelValue":a[3]||(a[3]=a=>e.data.shadow=a),modelModifiers:{number:!0},label:"Shadow"},null,8,["modelValue"]),(0,t.Wm)(n,{class:"col-2",modelValue:e.data.wits,"onUpdate:modelValue":a[4]||(a[4]=a=>e.data.wits=a),modelModifiers:{number:!0},label:"Wits"},null,8,["modelValue"])])}function P(e,a,l,s,o,d){const n=(0,t.up)("q-input");return(0,t.wg)(),(0,t.j4)(n,{type:"number",min:0,max:4,modelValue:e.data,"onUpdate:modelValue":[a[0]||(a[0]=a=>e.data=a),e.updateValue],label:e.label,standout:"bg-blue-grey text-white","input-style":{color:"#ECEFF4",fontSize:"2em"}},null,8,["modelValue","label","onUpdate:modelValue"])}const R=(0,t.aZ)({name:"Stats",props:{modelValue:{type:Number,required:!0},label:{type:String,required:!0}},emits:["update:modelValue"],setup(e,a){const l=(0,L.iH)(+e.modelValue);(0,t.YP)((()=>e.modelValue),(()=>l.value=+e.modelValue));const s=()=>a.emit("update:modelValue",l.value);return{updateValue:s,data:l}}});var F=l(1639),K=l(3119),N=l(9984),$=l.n(N);const O=(0,F.Z)(R,[["render",P]]),J=O;$()(R,"components",{QInput:K.Z});const G=(0,t.aZ)({name:"Stats",components:{Stat:J},props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue"],setup(e,a){const l=(0,L.iH)(e.modelValue);(0,t.YP)((()=>e.modelValue),(()=>l.value=e.modelValue),{deep:!0});const s=()=>a.emit("update:modelValue",l.value);return{updateValue:s,data:l}}}),X=(0,F.Z)(G,[["render",B]]),ee=X,ae={class:"col-3"},le={class:"row"},te={class:"col-4 sf-header text-h5 q-mx-xs text-center"},se={class:"col-3 text-h6 sf-header q-mr-sm text-right"},oe=["innerHTML"],de={key:0},ne={class:"row q-mb-sm no-wrap items-center q-pr-sm"},ue=["innerHTML"],ce={class:"row justify-evenly q-gutter-sm"};function me(e,a,l,o,d,n){const u=(0,t.up)("hexbox"),c=(0,t.up)("q-card-section"),m=(0,t.up)("q-input"),i=(0,t.up)("q-separator"),r=(0,t.up)("q-checkbox"),p=(0,t.up)("resource-track"),V=(0,t.up)("q-card");return(0,t.wg)(),(0,t.j4)(V,{class:"card-bg rounded-borders"},{default:(0,t.w5)((()=>[(0,t.Wm)(c,{class:"row bg-secondary q-pa-xs items-center justify-between"},{default:(0,t.w5)((()=>[(0,t._)("div",ae,[(0,t._)("div",le,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.data.items,((a,l)=>((0,t.wg)(),(0,t.j4)(u,{label:`asset ability ${l+1}`,key:l,modelValue:e.data.items[l].marked,"onUpdate:modelValue":a=>e.data.items[l].marked=a},null,8,["label","modelValue","onUpdate:modelValue"])))),128))])]),(0,t._)("div",te,[(0,t.Uk)((0,s.zw)(e.data.title)+" ",1),e.config.data.edit?(0,t.WI)(e.$slots,"append",{key:0}):(0,t.kq)("",!0)]),(0,t._)("div",se,(0,s.zw)(e.data.type),1)])),_:3}),(0,t.Wm)(c,{class:"q-pa-sm"},{default:(0,t.w5)((()=>[e.data.subtitle?((0,t.wg)(),(0,t.iD)("div",{key:0,class:"q-mb-sm",innerHTML:e.data.subtitle},null,8,oe)):(0,t.kq)("",!0),e.data.input?((0,t.wg)(),(0,t.j4)(m,{key:1,dense:"",class:"q-mb-sm",label:e.data.input.label,modelValue:e.data.input.text,"onUpdate:modelValue":a[0]||(a[0]=a=>e.data.input.text=a)},null,8,["label","modelValue"])):(0,t.kq)("",!0),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.data.items,((a,l)=>((0,t.wg)(),(0,t.iD)("div",{key:l},[a.marked?((0,t.wg)(),(0,t.iD)("div",de,[(0,t._)("div",ne,[(0,t.Wm)(i,{vertical:""}),(0,t._)("div",{class:"col q-mx-sm text-justify asset-text",innerHTML:a.text},null,8,ue)]),e.data.items[l].input?((0,t.wg)(),(0,t.j4)(m,{key:0,class:"q-mb-sm",dense:"",label:e.data.items[l].input.label,modelValue:e.data.items[l].input.text,"onUpdate:modelValue":a=>e.data.items[l].input.text=a},null,8,["label","modelValue","onUpdate:modelValue"])):(0,t.kq)("",!0)])):(0,t.kq)("",!0)])))),128)),(0,t._)("div",ce,[void 0!=e.data.cursed?((0,t.wg)(),(0,t.j4)(r,{key:0,label:"Cursed",modelValue:e.data.cursed,"onUpdate:modelValue":a[1]||(a[1]=a=>e.data.cursed=a)},null,8,["modelValue"])):(0,t.kq)("",!0),void 0!=e.data.battered?((0,t.wg)(),(0,t.j4)(r,{key:1,label:"Battered",modelValue:e.data.battered,"onUpdate:modelValue":a[2]||(a[2]=a=>e.data.battered=a)},null,8,["modelValue"])):(0,t.kq)("",!0)]),e.data.track?((0,t.wg)(),(0,t.j4)(p,{key:2,class:"col-grow q-mt-xs",modelValue:e.data.track,"onUpdate:modelValue":a[3]||(a[3]=a=>e.data.track=a),reverse:"",variable:""},null,8,["modelValue"])):(0,t.kq)("",!0)])),_:1})])),_:3})}var ie=l(9587);const re={class:"row q-gutter-sm"};function pe(e,a,l,s,o,d){const n=(0,t.up)("q-btn"),u=(0,t.up)("q-btn-toggle");return(0,t.wg)(),(0,t.iD)("div",re,[e.variable?((0,t.wg)(),(0,t.j4)(n,{key:0,class:"col-shrink c-btn",icon:"mdi-numeric-negative-1",onClick:e.decrement,dense:""},null,8,["onClick"])):(0,t.kq)("",!0),(0,t.Wm)(u,{class:"col-grow",spread:"",unelevated:"",dense:"",options:e.opts,modelValue:e.data.value,"onUpdate:modelValue":[a[0]||(a[0]=a=>e.data.value=a),e.updateValue]},null,8,["options","modelValue","onUpdate:modelValue"]),e.variable?((0,t.wg)(),(0,t.j4)(n,{key:1,class:"col-shrink c-btn",icon:"mdi-numeric-positive-1",onClick:e.increment,dense:""},null,8,["onClick"])):(0,t.kq)("",!0)])}const Ve=(0,t.aZ)({name:"ResourceTrack",props:{modelValue:{type:Object,required:!0},reverse:{type:Boolean},variable:{type:Boolean}},emits:["update:modelValue"],setup(e,a){const l=(0,L.iH)(e.modelValue);(0,t.YP)((()=>e.modelValue),(()=>l.value=e.modelValue),{deep:!0});const s=()=>a.emit("update:modelValue",l),o=(0,t.Fl)((()=>{const a=[];for(let t=l.value.min;t<=l.value.max;t++){const l={label:t,value:t};e.reverse?a.push(l):a.unshift(l)}return a})),d=()=>{l.value.max--},n=()=>{l.value.max++};return{data:l,opts:o,increment:n,decrement:d,updateValue:s}}});var ke=l(8879),ge=l(1389);const be=(0,F.Z)(Ve,[["render",pe]]),we=be;$()(Ve,"components",{QBtn:ke.Z,QBtnToggle:ge.Z});const he=["title"],ve={class:"box",viewBox:"0 0 26 26",width:"28",height:"28"};function xe(e,a,l,o,d,n){return(0,t.wg)(),(0,t.iD)("div",{class:"hexbox row items-center",onClick:a[0]||(a[0]=a=>e.$emit("update:modelValue",!e.data)),title:e.label},[((0,t.wg)(),(0,t.iD)("svg",ve,[(0,t._)("polygon",{class:(0,s.C_)({hex:!0,checked:e.data}),points:"15,5 25,10 25,20 15,25 5,20 5,10"},null,2)]))],8,he)}const fe=(0,t.aZ)({name:"Hexbox",props:{modelValue:{type:Boolean,required:!0},label:{type:String}},emits:["update:modelValue"],setup(e){const a=(0,t.Fl)((()=>e.modelValue));return{data:a}}}),qe=(0,F.Z)(fe,[["render",xe]]),ye=qe,We=(0,t.aZ)({components:{ResourceTrack:we,Hexbox:ye},name:"Asset",props:{modelValue:{type:Object,required:!0},expanded:{type:Boolean}},emits:["update:modelValue"],setup(e,{emit:a}){const l=(0,L.iH)(e.modelValue);(0,t.YP)((()=>e.modelValue),(()=>l.value=e.modelValue),{deep:!0}),(0,t.YP)((()=>l.value),(()=>a("update:modelValue",l.value)),{deep:!0});const s=(0,t.Fl)((()=>{const e=[];return l.value.items.forEach((a=>{e.push(a.marked)})),e})),o=(0,L.iH)(e.expanded),d=(0,E.Z)();return{data:l,dExpanded:o,icon:ie.q,config:d,dots:s}}});var _e=l(4458),Ce=l(3190),Ue=l(2857),Ie=l(926),Ze=l(1221);const je=(0,F.Z)(We,[["render",me]]),He=je;$()(We,"components",{QCard:_e.Z,QCardSection:Ce.Z,QIcon:Ue.Z,QInput:K.Z,QSeparator:Ie.Z,QCheckbox:Ze.Z});const De=(0,t.Uk)("Add custom asset"),Qe={key:0},Te={class:"row items-center q-gutter-xs"},Me={class:"col-shrink text-h5 sf-header"},Ae={class:"col-shrink sf-header text-h4"},Se=["innerHTML"],Le=["innerHTML"],ze={class:"row full-width justify-between"},Ee={key:1};function Ye(e,a,l,o,d,n){const u=(0,t.up)("q-btn"),c=(0,t.up)("q-icon"),m=(0,t.up)("q-input"),i=(0,t.up)("q-toolbar-title"),r=(0,t.up)("q-toolbar"),p=(0,t.up)("q-header"),V=(0,t.up)("q-item-label"),k=(0,t.up)("q-item-section"),g=(0,t.up)("q-item"),b=(0,t.up)("q-avatar"),w=(0,t.up)("q-list"),h=(0,t.up)("q-drawer"),v=(0,t.up)("hexbox"),x=(0,t.up)("asset-editor"),f=(0,t.up)("q-page"),q=(0,t.up)("q-page-container"),y=(0,t.up)("q-card"),W=(0,t.up)("q-layout"),_=(0,t.up)("q-dialog"),C=(0,t.Q2)("ripple");return(0,t.wg)(),(0,t.j4)(_,{modelValue:e.showDialog,"onUpdate:modelValue":a[8]||(a[8]=a=>e.showDialog=a),"transition-show":"slide-up","transition-hide":"slide-down",maximized:e.$q.platform.is.mobile},{default:(0,t.w5)((()=>[(0,t.Wm)(W,{container:"",class:"asset-bg",view:"hHh lpR fFf",style:{"min-width":"50%"}},{default:(0,t.w5)((()=>[(0,t.Wm)(y,{class:"asset-bg"},{default:(0,t.w5)((()=>[(0,t.Wm)(p,{elevated:""},{default:(0,t.w5)((()=>[(0,t.Wm)(r,{class:"bg-secondary"},{default:(0,t.w5)((()=>[(0,t.Wm)(u,{flat:"",dense:"",icon:"menu",onClick:a[0]||(a[0]=a=>e.showList=!e.showList)}),(0,t.Wm)(i,null,{default:(0,t.w5)((()=>[!1===e.showEditor?((0,t.wg)(),(0,t.j4)(m,{key:0,label:"Filter by name or type",modelValue:e.filter,"onUpdate:modelValue":a[1]||(a[1]=a=>e.filter=a),borderless:"",clearable:""},{prepend:(0,t.w5)((()=>[(0,t.Wm)(c,{name:"search"})])),_:1},8,["modelValue"])):(0,t.kq)("",!0)])),_:1}),(0,t.Wm)(u,{icon:"close",flat:"",dense:"",onClick:e.close},null,8,["onClick"])])),_:1})])),_:1}),(0,t.Wm)(h,{side:"left",modelValue:e.showList,"onUpdate:modelValue":a[3]||(a[3]=a=>e.showList=a),bordered:"",breakpoint:400,persistent:"",width:220},{default:(0,t.w5)((()=>[(0,t.Wm)(w,{separator:"",padding:""},{default:(0,t.w5)((()=>[(0,t.wy)(((0,t.wg)(),(0,t.j4)(g,{clickable:"",onClick:a[2]||(a[2]=a=>e.showEditor=!0)},{default:(0,t.w5)((()=>[(0,t.Wm)(k,null,{default:(0,t.w5)((()=>[(0,t.Wm)(V,null,{default:(0,t.w5)((()=>[De])),_:1})])),_:1})])),_:1})),[[C]]),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.cards,((a,l)=>(0,t.wy)(((0,t.wg)(),(0,t.j4)(g,{key:l,clickable:"",onClick:a=>e.selectAsset(l)},{default:(0,t.w5)((()=>[(0,t.Wm)(k,{avatar:""},{default:(0,t.w5)((()=>[(0,t.Wm)(b,{icon:e.icon.asset(a.title),size:"lg"},null,8,["icon"])])),_:2},1024),(0,t.Wm)(k,null,{default:(0,t.w5)((()=>[(0,t.Wm)(V,null,{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(a.title),1)])),_:2},1024),(0,t.Wm)(V,{caption:""},{default:(0,t.w5)((()=>[(0,t.Uk)((0,s.zw)(a.type),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])),[[C]]))),128))])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(q,null,{default:(0,t.w5)((()=>[(0,t.Wm)(f,{class:"q-pa-sm"},{default:(0,t.w5)((()=>[e.showEditor?((0,t.wg)(),(0,t.iD)("div",Ee,[(0,t.Wm)(x,{id:e.editID,modelValue:e.showEditor,"onUpdate:modelValue":a[7]||(a[7]=a=>e.showEditor=a)},null,8,["id","modelValue"])])):((0,t.wg)(),(0,t.iD)("div",Qe,[(0,t._)("div",Te,[e.ca.id?((0,t.wg)(),(0,t.j4)(u,{key:0,class:"col-shrink",icon:"edit",flat:"",dense:"",onClick:a[4]||(a[4]=a=>{e.editID=e.ca.id,e.showEditor=!0})})):(0,t.kq)("",!0),(0,t._)("div",Me,(0,s.zw)(e.ca.type),1),(0,t._)("div",Ae,"::"+(0,s.zw)(e.ca.title),1)]),e.ca.subtitle?((0,t.wg)(),(0,t.iD)("div",{key:0,class:"q-mb-sm",innerHTML:e.ca.subtitle},null,8,Se)):(0,t.kq)("",!0),((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.ca.items,((e,a)=>((0,t.wg)(),(0,t.iD)("div",{class:"q-py-sm text-justify row items-center no-wrap",key:a,style:{"border-bottom":"1px solid grey"}},[(0,t.Wm)(v,{class:"col-1",modelValue:e.marked,"onUpdate:modelValue":a=>e.marked=a,label:`asset ability ${a+1}`},null,8,["modelValue","onUpdate:modelValue","label"]),(0,t._)("div",{class:"col-10 q-ml-xs asset-text",innerHTML:e.text},null,8,Le)])))),128)),(0,t._)("div",ze,[e.config.data.edit&&e.ca.id?((0,t.wg)(),(0,t.j4)(u,{key:0,class:"q-ma-md",outline:"",label:"Delete",onClick:a[5]||(a[5]=a=>e.customAssets.delete(e.ca))})):(0,t.kq)("",!0),(0,t.Wm)(u,{class:"q-ma-md",outline:"",label:"Add",onClick:a[6]||(a[6]=a=>e.addAsset(e.ca.id||e.ca.title))})])]))])),_:1})])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue","maximized"])}var Be=l(5023),Pe=l(320),Re=l(827);const Fe=()=>({id:(0,Pe.Z)(),title:"Custom Asset",type:"Custom",items:[{text:"Asset item text 1",marked:!1},{text:"Asset item text 2",marked:!1},{text:"Asset item text 3",marked:!1}]}),Ke=e=>{var a;const l={};if(l.title=e.Name,l.icon=e.Display.Icon,e.Requirement&&(l.subtitle=(0,Re.rk)(e.Requirement)),l.type=null===(a=e["Asset Type"].split("/").pop())||void 0===a?void 0:a.replace("_"," "),e.Inputs){const a=[];for(const l of e.Inputs)a.push(l.Name);l.input={label:a.join("/"),text:""}}l.items=[];for(const t of e.Abilities)l.items.push({text:(0,Re.rk)(t.Text),marked:t.Enabled});return e["Condition Meter"]&&(l.track={max:e["Condition Meter"].Max,min:e["Condition Meter"].Min,value:e["Condition Meter"].Value},e["Condition Meter"].Conditions&&e["Condition Meter"].Conditions.forEach((e=>{"battered"==e.toLowerCase()&&(l.battered=!1),"cursed"==e.toLowerCase()&&(l.cursed=!1)}))),l},Ne={class:"row full-height fit"},$e={class:"col-12"},Oe={class:"row items-center q-mb-lg"},Je=(0,t._)("p",null,"You can use the following subset of HTML tags to style your item text:",-1),Ge={class:"row items-center q-mb-lg q-mt-xs"},Xe={class:"row items-center q-mb-lg q-mt-xs"},ea={class:"row items-center q-mb-lg q-mt-xs"},aa={class:"row items-center q-mb-lg"},la={class:"row justify-between"},ta={class:"col-12"},sa={class:"row full-width full-height justify-center"};function oa(e,a,l,o,d,n){const u=(0,t.up)("q-input"),c=(0,t.up)("q-toggle"),m=(0,t.up)("q-btn"),i=(0,t.up)("asset");return(0,t.wg)(),(0,t.iD)("div",Ne,[(0,t._)("div",$e,[(0,t.Wm)(u,{label:"Title",modelValue:e.data.title,"onUpdate:modelValue":a[0]||(a[0]=a=>e.data.title=a),dense:""},null,8,["modelValue"]),(0,t.Wm)(u,{label:"Subtitle?",modelValue:e.subtitle,"onUpdate:modelValue":a[1]||(a[1]=a=>e.subtitle=a),dense:""},null,8,["modelValue"]),(0,t._)("div",Oe,[(0,t.Wm)(c,{class:"q-mr-md q-mt-sm",label:"Text input?",modelValue:e.hasMainInput,"onUpdate:modelValue":a[2]||(a[2]=a=>e.hasMainInput=a),dense:"",onClick:e.mInputClick},null,8,["modelValue","onClick"]),e.hasMainInput?((0,t.wg)(),(0,t.j4)(u,{key:0,class:"col-grow",label:"Input Label",modelValue:e.data.input.label,"onUpdate:modelValue":a[3]||(a[3]=a=>e.data.input.label=a),dense:""},null,8,["modelValue"])):(0,t.kq)("",!0)]),Je,(0,t._)("p",null,(0,s.zw)(e.validTags.toString().replace(/,/g,", ")),1),(0,t.Wm)(u,{label:"First item text",modelValue:e.data.items[0].text,"onUpdate:modelValue":a[4]||(a[4]=a=>e.data.items[0].text=a),dense:"",autogrow:"",hint:"Item text can contain html for formatting"},null,8,["modelValue"]),(0,t._)("div",Ge,[(0,t.Wm)(c,{class:"q-mr-md",label:"Text input?",modelValue:e.hasItem1Input,"onUpdate:modelValue":a[5]||(a[5]=a=>e.hasItem1Input=a),dense:"",onClick:e.item1Click},null,8,["modelValue","onClick"]),e.hasItem1Input?((0,t.wg)(),(0,t.j4)(u,{key:0,class:"col-grow",label:"Input Label",modelValue:e.data.items[0].input.label,"onUpdate:modelValue":a[6]||(a[6]=a=>e.data.items[0].input.label=a),dense:""},null,8,["modelValue"])):(0,t.kq)("",!0)]),(0,t.Wm)(u,{label:"Second item text",modelValue:e.data.items[1].text,"onUpdate:modelValue":a[7]||(a[7]=a=>e.data.items[1].text=a),dense:"",autogrow:"",hint:"Item text can contain html for formatting"},null,8,["modelValue"]),(0,t._)("div",Xe,[(0,t.Wm)(c,{class:"q-mr-md",label:"Text input?",modelValue:e.hasItem2Input,"onUpdate:modelValue":a[8]||(a[8]=a=>e.hasItem2Input=a),dense:"",onClick:e.item2Click},null,8,["modelValue","onClick"]),e.hasItem2Input?((0,t.wg)(),(0,t.j4)(u,{key:0,class:"col-grow",label:"Input Label",modelValue:e.data.items[1].input.label,"onUpdate:modelValue":a[9]||(a[9]=a=>e.data.items[1].input.label=a),dense:""},null,8,["modelValue"])):(0,t.kq)("",!0)]),(0,t.Wm)(u,{label:"Third item text",modelValue:e.data.items[2].text,"onUpdate:modelValue":a[10]||(a[10]=a=>e.data.items[2].text=a),dense:"",autogrow:"",hint:"Item text can contain html for formatting"},null,8,["modelValue"]),(0,t._)("div",ea,[(0,t.Wm)(c,{class:"q-mr-md",label:"Text input?",modelValue:e.hasItem3Input,"onUpdate:modelValue":a[11]||(a[11]=a=>e.hasItem3Input=a),dense:"",onClick:e.item3Click},null,8,["modelValue","onClick"]),e.hasItem3Input?((0,t.wg)(),(0,t.j4)(u,{key:0,class:"col-grow",label:"Input Label",modelValue:e.data.items[2].input.label,"onUpdate:modelValue":a[12]||(a[12]=a=>e.data.items[2].input.label=a),dense:""},null,8,["modelValue"])):(0,t.kq)("",!0)]),(0,t.Wm)(c,{class:"row",label:"Resource track?",modelValue:e.hasTrack,"onUpdate:modelValue":a[13]||(a[13]=a=>e.hasTrack=a),dense:"",onClick:e.trackClick},null,8,["modelValue","onClick"]),(0,t._)("div",aa,[e.hasTrack?((0,t.wg)(),(0,t.j4)(u,{key:0,class:"col-grow",label:"Min",type:"number",modelValue:e.data.track.min,"onUpdate:modelValue":a[14]||(a[14]=a=>e.data.track.min=a),modelModifiers:{number:!0},dense:""},null,8,["modelValue"])):(0,t.kq)("",!0),e.hasTrack?((0,t.wg)(),(0,t.j4)(u,{key:1,class:"col-grow",label:"Max",type:"number",modelValue:e.data.track.max,"onUpdate:modelValue":a[15]||(a[15]=a=>e.data.track.max=a),modelModifiers:{number:!0},dense:""},null,8,["modelValue"])):(0,t.kq)("",!0)]),(0,t._)("div",la,[(0,t.Wm)(m,{color:"positive",icon:"save",label:"save",flat:"",onClick:a[16]||(a[16]=a=>e.save(e.data))}),(0,t.Wm)(m,{color:"negative",icon:"close",label:"close",flat:"",onClick:e.close},null,8,["onClick"])])]),(0,t._)("div",ta,[(0,t._)("div",sa,[(0,t.Wm)(i,{class:"self-center",modelValue:e.data,"onUpdate:modelValue":a[17]||(a[17]=a=>e.data=a),expanded:"",style:{"min-width":"100%"}},null,8,["modelValue"])])])])}var da=l(6570),na=function(e,a,l,t){function s(e){return e instanceof l?e:new l((function(a){a(e)}))}return new(l||(l=Promise))((function(l,o){function d(e){try{u(t.next(e))}catch(a){o(a)}}function n(e){try{u(t["throw"](e))}catch(a){o(a)}}function u(e){e.done?l(e.value):s(e.value).then(d,n)}u((t=t.apply(e,a||[])).next())}))};const ua=(0,t.aZ)({components:{Asset:He},name:"AssetEditor",props:{modelValue:{type:Boolean,required:!0},id:{type:String,default:"new"}},emits:["update:modelValue"],setup(e,a){const l=(0,L.iH)(Fe()),s=(0,Be.L)(),o=()=>{a.emit("update:modelValue",!1)},d=e=>{s.save(e).catch((e=>console.log(e))),o()},n=(0,L.iH)("");(0,t.YP)((()=>n.value),(()=>{n.value?l.value.subtitle=n.value:l.value.subtitle=void 0}));const u=(0,L.iH)(!1),c=()=>{u.value?l.value.input={label:"",text:""}:l.value.input=void 0},m=(0,L.iH)(!1),i=()=>{m.value?l.value.items[0].input={label:"",text:""}:l.value.items[0].input=void 0},r=(0,L.iH)(!1),p=()=>{r.value?l.value.items[1].input={label:"",text:""}:l.value.items[1].input=void 0},V=(0,L.iH)(!1),k=()=>{V.value?l.value.items[2].input={label:"",text:""}:l.value.items[2].input=void 0},g=(0,L.iH)(!1),b=()=>{g.value?l.value.track={value:0,min:0,max:3}:l.value.track=void 0};return(()=>{na(this,void 0,void 0,(function*(){"new"!==e.id&&(l.value=yield da.db.assets.get(e.id),l.value.subtitle&&(n.value=l.value.subtitle),u.value=!!l.value.input,m.value=!!l.value.items[0].input,r.value=!!l.value.items[1].input,V.value=!!l.value.items[2].input,g.value=!!l.value.track)}))})(),{data:l,validTags:Re.db,subtitle:n,hasMainInput:u,mInputClick:c,hasItem1Input:m,item1Click:i,hasItem2Input:r,item2Click:p,hasItem3Input:V,item3Click:k,hasTrack:g,trackClick:b,save:d,close:o}}});var ca=l(3175);const ma=(0,F.Z)(ua,[["render",oa]]),ia=ma;$()(ua,"components",{QInput:K.Z,QToggle:ca.Z,QBtn:ke.Z});var ra=l(3930);const pa=(0,t.aZ)({name:"Assets",components:{AssetEditor:ia,Hexbox:ye},props:{modelValue:{type:Boolean,required:!0}},emits:["update:modelValue"],setup(e,a){var l;const s=(0,z.y)(),o=(0,E.Z)(),d=(0,L.iH)(e.modelValue);(0,t.YP)((()=>e.modelValue),(()=>d.value=e.modelValue)),(0,t.YP)((()=>d.value),(()=>a.emit("update:modelValue",d.value)));const n=()=>{d.value=!1,V.value=!1,a.emit("update:modelValue",d.value)},u=(0,Be.L)(),c=(0,L.iH)(""),m=e=>""===c.value||null===c.value||(!(void 0===e.title||!RegExp(c.value,"i").test(e.title))||!(void 0===e.type||!RegExp(c.value,"i").test(e.type))),i=(0,t.Fl)((()=>{const e={};return u.data.forEach((a=>{m(a)&&(e[a.id]=a)})),ra.q["Asset Types"].forEach((a=>{a.Assets.forEach((a=>{const l=Ke(a);m(l)&&(e[l.title]=l)}))})),e})),r=e=>{V.value=!1,b.value=i.value[e]},p=e=>{const a=JSON.parse(JSON.stringify(i.value[e]));s.data.character.assets.push(a)},V=(0,L.iH)(!1),k=(0,L.iH)(!0),g=(0,L.iH)("new"),b=(0,L.iH)(Ke(null===(l=ra.q["Asset Types"].find((e=>"Path"===e.Name)))||void 0===l?void 0:l.Assets.find((e=>"Ace"===e.Name))));return{config:o,showDialog:d,close:n,filter:c,cards:i,showEditor:V,showList:k,editID:g,customAssets:u,selectAsset:r,addAsset:p,ca:b,icon:ie.q}}});var Va=l(2074),ka=l(7605),ga=l(6602),ba=l(1663),wa=l(1973),ha=l(3655),va=l(3246),xa=l(490),fa=l(1233),qa=l(3115),ya=l(1357),Wa=l(2133),_a=l(9885),Ca=l(1136);const Ua=(0,F.Z)(pa,[["render",Ye]]),Ia=Ua;$()(pa,"components",{QDialog:Va.Z,QLayout:ka.Z,QCard:_e.Z,QHeader:ga.Z,QToolbar:ba.Z,QBtn:ke.Z,QToolbarTitle:wa.Z,QInput:K.Z,QIcon:Ue.Z,QDrawer:ha.Z,QList:va.Z,QItem:xa.Z,QItemSection:fa.Z,QItemLabel:qa.Z,QAvatar:ya.Z,QPageContainer:Wa.Z,QPage:_a.Z}),$()(pa,"directives",{Ripple:Ca.Z});const Za={class:"row items-center justify-between"},ja={class:"text-h5 sf-header"},Ha={class:"row no-wrap items-center justify-between q-mb-md"},Da={class:"row"},Qa={class:"row"};function Ta(e,a,l,o,d,n){const u=(0,t.up)("q-checkbox"),c=(0,t.up)("q-btn");return(0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("div",Za,[(0,t._)("span",ja,(0,s.zw)(e.name),1),(0,t.Wm)(u,{label:"+10",modelValue:e.data.plus10,"onUpdate:modelValue":a[0]||(a[0]=a=>e.data.plus10=a),onClick:e.p10},null,8,["modelValue","onClick"])]),(0,t._)("div",Ha,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.data.boxes,((a,l)=>((0,t.wg)(),(0,t.iD)("div",{class:"column items-center",key:l},[(0,t._)("div",Da,[(0,t.Wm)(c,{icon:e.boxIcon(e.data.boxes[l].ticks),flat:"",dense:"",size:e.boxSize,onClick:a=>e.boxIncrement(l)},null,8,["icon","size","onClick"])]),(0,t._)("div",Qa,[(0,t.Wm)(u,{modelValue:e.data.boxes[l].xp[0],"onUpdate:modelValue":a=>e.data.boxes[l].xp[0]=a,dense:"",size:e.checkSize,onClick:e.updateValue},null,8,["modelValue","onUpdate:modelValue","size","onClick"]),e.data.plus10?(0,t.kq)("",!0):((0,t.wg)(),(0,t.j4)(u,{key:0,modelValue:e.data.boxes[l].xp[1],"onUpdate:modelValue":a=>e.data.boxes[l].xp[1]=a,dense:"",size:e.checkSize,onClick:e.updateValue},null,8,["modelValue","onUpdate:modelValue","size","onClick"]))])])))),128))])],64)}var Ma=l(9236),Aa=l(9302);const Sa=(0,t.aZ)({name:"LegacyTrack",props:{modelValue:{type:Object,required:!0},name:{type:String,required:!0}},emits:["update:modelValue"],setup(e,a){const l=(0,L.iH)(e.modelValue);(0,t.YP)((()=>e.modelValue),(()=>l.value=e.modelValue),{deep:!0});const s=()=>a.emit("update:modelValue",l.value),o=e=>{4===l.value.boxes[e].ticks?l.value.boxes[e].ticks=0:l.value.boxes[e].ticks++,s()},d=()=>{let e=!0;return l.value.boxes.forEach((a=>{4!==a.ticks&&(e=!1)})),e},n=()=>{l.value.plus10&&d()?l.value.boxes.forEach(((e,a)=>{l.value.boxes[a].ticks=0,l.value.boxes[a].xp=[!1,!1]})):l.value.plus10=!1,s()},u=(0,Aa.Z)(),c=(0,t.Fl)((()=>u.screen.lt.sm?"md":"xl")),m=(0,t.Fl)((()=>u.screen.lt.sm?"xs":"sm"));return{data:l,boxSize:c,checkSize:m,boxIcon:Ma.yc,boxIncrement:o,updateValue:s,p10:n}}}),La=(0,F.Z)(Sa,[["render",Ta]]),za=La;$()(Sa,"components",{QCheckbox:Ze.Z,QBtn:ke.Z});var Ea=l(6359);const Ya=(0,t.aZ)({name:"Character",components:{LegacyTrack:za,ResourceTrack:we,Stats:ee,Asset:He,Assets:Ia,IInput:Ea.Z},setup(){const e=(0,z.y)(),a=a=>e.data.character.assets.splice(a,1),l=(0,L.iH)(!1),t=()=>{let a=0;Object.values(e.data.character.impacts).forEach((e=>{e.forEach((e=>{e.marked&&a++}))})),e.data.character.tracks.momentum.reset=1===a?1:a>1?0:2,e.data.character.tracks.momentum.max=10-a},s=()=>{const a=+e.data.character.tracks.momentum.reset;e.data.character.tracks.momentum.value=a},o=(0,E.Z)();return{campaign:e,removeAsset:a,showAssetSelect:l,markImpact:t,burnMomentum:s,config:o}}});var Ba=l(6858);const Pa=(0,F.Z)(Ya,[["render",S]]),Ra=Pa;$()(Ya,"components",{QPage:_a.Z,QInput:K.Z,QBtn:ke.Z,QTooltip:Ba.Z,QSeparator:Ie.Z,QCheckbox:Ze.Z})}}]);