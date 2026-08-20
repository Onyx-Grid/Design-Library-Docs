import{d as B,c as t,F as D,v as E,C as d,m as u,a as $,n as F,j as v,o,z as p,t as b}from"./iframe-CmLobRcQ.js";import{_ as g}from"./OTag.vue_vue_type_style_index_0_lang-CbQVf1TE.js";import"./preload-helper-Dp1pzeXC.js";const N={key:0,class:"o-tag-list__item"},V=B({__name:"OTagList",props:{items:{},max:{default:void 0},size:{default:"md"},removable:{type:Boolean,default:!1},removeLabel:{type:Function,default:e=>`Remove ${e}`}},emits:["remove"],setup(e,{emit:T}){const s=e,w=T,i=v(()=>s.max===void 0?s.items:s.items.slice(0,Math.max(0,s.max))),c=v(()=>s.items.length-i.value.length);return(W,j)=>(o(),t("ul",{class:F(["o-tag-list",`o-tag-list--${e.size}`])},[(o(!0),t(D,null,E(i.value,a=>(o(),t("li",{key:a.id,class:"o-tag-list__item"},[d(g,{tone:a.tone??"neutral",size:e.size,removable:e.removable,disabled:a.disabled,"remove-label":e.removeLabel(a.label),onRemove:A=>w("remove",a.id)},{default:u(()=>[p(b(a.label),1)]),_:2},1032,["tone","size","removable","disabled","remove-label","onRemove"])]))),128)),c.value>0?(o(),t("li",N,[d(g,{size:e.size},{default:u(()=>[p("+"+b(c.value)+" more",1)]),_:1},8,["size"])])):$("",!0)],2))}}),{fn:M}=__STORYBOOK_MODULE_TEST__,q={title:"Components/OTagList",component:V,tags:["autodocs"],args:{onRemove:M(),items:[{id:"a",label:"vue"},{id:"b",label:"design-system"},{id:"c",label:"accessibility",tone:"primary"},{id:"d",label:"tokens"},{id:"e",label:"storybook"}]},parameters:{docs:{description:{component:'Renders a real `<ul>`. A row of tags is a list, and marking it up as one lets a\nscreen reader announce "list, 6 items" and skip past it.'}}}},r={},l={args:{removable:!0}},n={args:{max:3}},m={args:{size:"sm",removable:!0}};var f,_,z;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(z=(_=r.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var x,y,O;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    removable: true
  }
}`,...(O=(y=l.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};var S,h,k;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    max: 3
  }
}`,...(k=(h=n.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var R,C,L;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    removable: true
  }
}`,...(L=(C=m.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};const G=["Default","Removable","WithOverflow","Small"];export{r as Default,l as Removable,m as Small,n as WithOverflow,G as __namedExportsOrder,q as default};
