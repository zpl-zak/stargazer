"use strict";(self["webpackChunkstargazer"]=self["webpackChunkstargazer"]||[]).push([[731],{6911:(a,e,c)=>{c.r(e),c.d(e,{default:()=>b});var s=c(9835);const o={class:"text-h4 sf-header text-center q-mb-sm",id:"vows"},l=(0,s.Uk)(" Vows"),r={class:"text-h4 sf-header text-center q-mt-md q-mb-sm",id:"progress"},t=(0,s.Uk)(" Progress"),n={class:"text-h4 sf-header text-center q-mt-md q-mb-sm",id:"clocks"},d=(0,s.Uk)(" Clocks");function i(a,e,c,i,m,k){const p=(0,s.up)("q-btn"),u=(0,s.up)("progress-track"),g=(0,s.up)("q-separator"),h=(0,s.up)("clocks"),v=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(v,{padding:""},{default:(0,s.w5)((()=>[(0,s._)("div",o,[l,(0,s.Wm)(p,{icon:"add_circle",flat:"",dense:"",onClick:a.addVow},null,8,["onClick"])]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.campaign.data.character.vows,((e,c)=>((0,s.wg)(),(0,s.j4)(u,{class:"q-mb-md",key:c,modelValue:a.campaign.data.character.vows[c],"onUpdate:modelValue":e=>a.campaign.data.character.vows[c]=e},(0,s.Nv)({_:2},[a.config.data.edit?{name:"action",fn:(0,s.w5)((()=>[(0,s.Wm)(p,{class:"col-shrink",icon:"delete",flat:"",dense:"",onClick:e=>a.removeVow(c)},null,8,["onClick"])]))}:void 0]),1032,["modelValue","onUpdate:modelValue"])))),128)),(0,s.Wm)(g),(0,s._)("div",r,[t,(0,s.Wm)(p,{icon:"add_circle",flat:"",dense:"",onClick:a.addTrack},null,8,["onClick"])]),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(a.campaign.data.progressTracks,((e,c)=>((0,s.wg)(),(0,s.j4)(u,{class:"q-mb-md",key:c,modelValue:a.campaign.data.progressTracks[c],"onUpdate:modelValue":e=>a.campaign.data.progressTracks[c]=e},(0,s.Nv)({_:2},[a.config.data.edit?{name:"action",fn:(0,s.w5)((()=>[(0,s.Wm)(p,{class:"col-shrink",icon:"delete",flat:"",dense:"",onClick:e=>a.removeTrack(c)},null,8,["onClick"])]))}:void 0]),1032,["modelValue","onUpdate:modelValue"])))),128)),(0,s.Wm)(g),(0,s._)("div",n,[d,(0,s.Wm)(p,{icon:"add_circle",flat:"",dense:"",onClick:a.addClock},null,8,["onClick"])]),(0,s.Wm)(h,{class:"q-mb-sm",all:""})])),_:1})}var m=c(9216),k=c(5688),p=c(7019),u=c(9236),g=c(5860);const h=(0,s.aZ)({name:"Challenges",components:{ProgressTrack:k.Z,Clocks:p.Z},setup(){const a=(0,m.y)(),e=(0,g.Z)(),c=()=>a.data.character.vows.unshift((0,u.mU)()),s=e=>a.data.character.vows.splice(e,1),o=()=>a.data.progressTracks.unshift((0,u.mU)()),l=e=>a.data.progressTracks.splice(e,1),r=()=>{a.data.character.clocks||(a.data.character.clocks=[]),a.data.character.clocks.unshift((0,u.Vv)())},t=e=>a.data.character.clocks.splice(e,1);return{campaign:a,config:e,addVow:c,removeVow:s,addTrack:o,removeTrack:l,addClock:r,removeClock:t}}});var v=c(1639),f=c(9885),w=c(8879),C=c(926),V=c(9984),q=c.n(V);const T=(0,v.Z)(h,[["render",i]]),b=T;q()(h,"components",{QPage:f.Z,QBtn:w.Z,QSeparator:C.Z})}}]);