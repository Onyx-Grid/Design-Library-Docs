import{d as R,c as t,b as n,a as N,F as p,v,t as l,j as c,o as a,y as $,r as C}from"./iframe-CmLobRcQ.js";import{_ as L}from"./OStack.vue_vue_type_style_index_0_lang-CjZC0m5n.js";import{_ as M}from"./OButton.vue_vue_type_style_index_0_lang-Dqxny7bC.js";import{_ as E}from"./OText.vue_vue_type_style_index_0_lang-7AbyyjLC.js";import"./preload-helper-Dp1pzeXC.js";import"./style-HaLhxVKJ.js";const F={class:"o-digit-roller"},P={class:"o-digit-roller__digits","aria-hidden":"true"},V={key:0,class:"o-digit-roller__sign"},j=["role","aria-live"],u=R({__name:"ODigitRoller",props:{value:{},minDigits:{default:1},announce:{type:Boolean,default:!1},label:{default:void 0}},setup(e){const r=e,D=c(()=>Math.trunc(Math.abs(r.value)).toString().padStart(Math.max(1,r.minDigits),"0")),B=c(()=>r.value<0),z=c(()=>D.value.split("").map(d=>Number(d)));return(d,W)=>(a(),t("span",F,[n("span",P,[B.value?(a(),t("span",V,"−")):N("",!0),(a(!0),t(p,null,v(z.value,(b,T)=>(a(),t("span",{key:T,class:"o-digit-roller__column"},[n("span",{class:"o-digit-roller__track",style:$({"--_digit":b})},[(a(),t(p,null,v(10,m=>n("span",{key:m,class:"o-digit-roller__cell"},l(m-1),1)),64))],4)]))),128))]),n("span",{class:"visually-hidden",role:e.announce?"status":void 0,"aria-live":e.announce?"polite":void 0},l(e.label?`${e.label}: `:"")+l(e.value),9,j)]))}}),J={title:"Components/ODigitRoller",component:u,tags:["autodocs"],args:{value:1234},render:e=>({components:{ODigitRoller:u},setup:()=>({args:e}),template:'<div style="font-size: var(--font-size-4xl)"><ODigitRoller v-bind="args" /></div>'}),parameters:{docs:{description:{component:`The rolling digits are decoration and stay hidden from assistive tech; the real
value is exposed once as text. Without that split a screen reader either reads
a column of ten digits per place, or announces every intermediate frame.`}}}},s={},i={args:{value:7,minDigits:4}},o={render:()=>({components:{ODigitRoller:u,OStack:L,OButton:M,OText:E},setup(){return{value:C(1200)}},template:`
      <OStack direction="column" :gap="4" align="start">
        <div style="font-size: var(--font-size-4xl)">
          <ODigitRoller :value="value" :min-digits="5" label="Total" />
        </div>
        <OStack :gap="2">
          <OButton size="sm" variant="outline" @click="value += 137">+137</OButton>
          <OButton size="sm" variant="outline" @click="value -= 89">−89</OButton>
        </OStack>
        <OText size="sm" tone="muted">Not a live region — a counter announcing every tick is unusable.</OText>
      </OStack>`})};var g,O,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(f=(O=s.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};var _,k,h;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    value: 7,
    minDigits: 4
  }
}`,...(h=(k=i.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};var S,x,y;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ODigitRoller,
      OStack,
      OButton,
      OText
    },
    setup() {
      const value = ref(1200);
      return {
        value
      };
    },
    template: \`
      <OStack direction="column" :gap="4" align="start">
        <div style="font-size: var(--font-size-4xl)">
          <ODigitRoller :value="value" :min-digits="5" label="Total" />
        </div>
        <OStack :gap="2">
          <OButton size="sm" variant="outline" @click="value += 137">+137</OButton>
          <OButton size="sm" variant="outline" @click="value -= 89">−89</OButton>
        </OStack>
        <OText size="sm" tone="muted">Not a live region — a counter announcing every tick is unusable.</OText>
      </OStack>\`
  })
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const K=["Default","Padded","Live"];export{s as Default,o as Live,i as Padded,K as __namedExportsOrder,J as default};
