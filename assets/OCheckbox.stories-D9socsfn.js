import{d as F,P as Ve,o,c as p,l as b,m as h,k as pe,D as t,s as $,L as Ce,M as _e,x as Se,a as v,F as xe,j as i,C as z,b as qe,t as R,n as we,A as Oe}from"./iframe-CmLobRcQ.js";import{c as fe,d as ve,b as Be,P as be,e as Ie}from"./VisuallyHidden-Cjqqau1e.js";import{i as D,_ as Ee}from"./nullish-BKlI96FV.js";import{i as E,P as Re}from"./Presence-ETlVeotz.js";import{u as $e}from"./useForwardScopeId-CRVgJYNE.js";import{V as ze}from"./VisuallyHiddenInput-7w4yUsTk.js";import{R as De}from"./RovingFocusItem-B7fNevfz.js";import{_ as Fe}from"./OIconMinus.vue-B7GFrZ0n.js";import{_ as Ae}from"./OStack.vue_vue_type_style_index_0_lang-CjZC0m5n.js";import"./preload-helper-Dp1pzeXC.js";import"./Collection-Dh356I-I.js";import"./style-HaLhxVKJ.js";function P(e,l){return D(e)?!1:Array.isArray(e)?e.some(a=>E(a,l)):E(e,l)}const[Te]=fe("CheckboxGroupRoot");function A(e){return e==="indeterminate"}function he(e){return A(e)?"indeterminate":e?"checked":"unchecked"}const[Me,Pe]=fe("CheckboxRoot");var We=F({inheritAttrs:!1,__name:"CheckboxRoot",props:{defaultValue:{type:null,required:!1},modelValue:{type:null,required:!1,default:void 0},disabled:{type:Boolean,required:!1},value:{type:null,required:!1,default:"on"},id:{type:String,required:!1},trueValue:{type:null,required:!1,default:()=>!0},falseValue:{type:null,required:!1,default:()=>!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"},name:{type:String,required:!1},required:{type:Boolean,required:!1}},emits:["update:modelValue"],setup(e,{emit:l}){const a=e,d=l,{forwardRef:k,currentElement:m}=ve(),s=Te(null),u=Be(a,"modelValue",d,{defaultValue:a.defaultValue??a.falseValue,passive:a.modelValue===void 0}),n=i(()=>(s==null?void 0:s.disabled.value)||a.disabled),y=i(()=>E(u.value,a.trueValue)),c=i(()=>D(s==null?void 0:s.modelValue.value)?u.value==="indeterminate"?"indeterminate":y.value:P(s.modelValue.value,a.value));function g(){if(D(s==null?void 0:s.modelValue.value))u.value==="indeterminate"?u.value=a.trueValue:u.value=y.value?a.falseValue:a.trueValue;else{const r=[...s.modelValue.value||[]];if(P(r,a.value)){const T=r.findIndex(_=>E(_,a.value));r.splice(T,1)}else r.push(a.value);s.modelValue.value=r}}const V=Ie(m),C=$e(),ye=Ve(),ge=i(()=>{var r;if(!ye["aria-label"])return a.id&&m.value?(r=document.querySelector(`[for="${a.id}"]`))==null?void 0:r.innerText:void 0});return Pe({disabled:n,state:c}),(r,T)=>{var _,M;return o(),p(xe,null,[(o(),b(Se((_=t(s))!=null&&_.rovingFocus.value?t(De):t(be)),$({...r.$attrs,...t(C)},{id:r.id,ref:t(k),role:"checkbox","as-child":r.asChild,as:r.as,type:r.as==="button"?"button":void 0,"aria-checked":t(A)(c.value)?"mixed":c.value,"aria-required":r.required,"aria-label":r.$attrs["aria-label"]||ge.value,"data-state":t(he)(c.value),"data-disabled":n.value?"":void 0,disabled:n.value,focusable:(M=t(s))!=null&&M.rovingFocus.value?!n.value:void 0,onKeydown:Ce(_e(()=>{},["prevent"]),["enter"]),onClick:g}),{default:h(()=>[pe(r.$slots,"default",{modelValue:t(u),state:c.value})]),_:3},16,["id","as-child","as","type","aria-checked","aria-required","aria-label","data-state","data-disabled","disabled","focusable","onKeydown"])),t(V)&&r.name&&!t(s)?(o(),b(t(ze),$({key:0,type:"checkbox",checked:!!c.value,name:r.name,value:r.value,disabled:n.value,required:r.required},t(C)),null,16,["checked","name","value","disabled","required"])):v("v-if",!0)],64)}}}),Le=We,Ue=F({__name:"CheckboxIndicator",props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(e){const{forwardRef:l}=ve(),a=Me();return(d,k)=>(o(),b(t(Re),{present:d.forceMount||t(A)(t(a).state.value)||t(a).state.value===!0},{default:h(()=>[z(t(be),$({ref:t(l),"data-state":t(he)(t(a).state.value),"data-disabled":t(a).disabled.value?"":void 0,style:{pointerEvents:"none"},"as-child":d.asChild,as:d.as},d.$attrs),{default:h(()=>[pe(d.$slots,"default")]),_:3},16,["data-state","data-disabled","as-child","as"])]),_:3},8,["present"]))}}),Ye=Ue;const Ke={class:"o-checkbox__control"},Ne={key:0,class:"o-checkbox__text"},je=["for"],He=["id"],Je=["id"],ke=F({__name:"OCheckbox",props:{modelValue:{type:[Boolean,String],default:!1},label:{default:void 0},description:{default:void 0},error:{default:void 0},size:{default:"md"},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},name:{default:void 0},value:{default:void 0},id:{default:void 0}},emits:["update:modelValue"],setup(e,{emit:l}){const a=e,d=l,k=Oe(),m=i(()=>a.id??`o-checkbox-${k}`),s=i(()=>`${m.value}-description`),u=i(()=>`${m.value}-error`),n=i(()=>a.error!==void 0&&a.error!==""),y=i(()=>{if(n.value)return u.value;if(a.description)return s.value}),c=i({get:()=>a.modelValue,set:g=>d("update:modelValue",g)});return(g,V)=>(o(),p("div",{class:we(["o-checkbox",[`o-checkbox--${e.size}`,{"o-checkbox--disabled":e.disabled,"o-checkbox--invalid":n.value}]])},[qe("div",Ke,[z(t(Le),{id:m.value,modelValue:c.value,"onUpdate:modelValue":V[0]||(V[0]=C=>c.value=C),disabled:e.disabled,required:e.required,name:e.name,value:e.value,"aria-describedby":y.value,"aria-invalid":n.value||void 0,class:"o-checkbox__box"},{default:h(()=>[z(t(Ye),{class:"o-checkbox__indicator"},{default:h(()=>[e.modelValue==="indeterminate"?(o(),b(t(Fe),{key:0})):(o(),b(t(Ee),{key:1}))]),_:1})]),_:1},8,["id","modelValue","disabled","required","name","value","aria-describedby","aria-invalid"]),e.label||e.description?(o(),p("div",Ne,[e.label?(o(),p("label",{key:0,class:"o-checkbox__label",for:m.value},R(e.label),9,je)):v("",!0),e.description?(o(),p("p",{key:1,id:s.value,class:"o-checkbox__description"},R(e.description),9,He)):v("",!0)])):v("",!0)]),n.value?(o(),p("p",{key:0,id:u.value,class:"o-checkbox__error",role:"alert"},R(e.error),9,Je)):v("",!0)],2))}}),{expect:Qe,fn:Xe,userEvent:Ze,within:Ge}=__STORYBOOK_MODULE_TEST__,ma={title:"Components/OCheckbox",component:ke,tags:["autodocs"],args:{modelValue:!1,label:"I agree to the terms","onUpdate:modelValue":Xe()},parameters:{docs:{description:{component:`A value that takes effect on submit — the counterpart to \`OSwitch\`.

Supports the indeterminate state, which is the correct representation for a
"select all" whose children are partly checked.`}}}},S={},x={args:{modelValue:!0}},f={args:{modelValue:"indeterminate",label:"Select all"}},q={args:{description:"You can withdraw consent at any time."}},w={args:{error:"You must accept the terms to continue."}},O={render:e=>({components:{OCheckbox:ke,OStack:Ae},setup:()=>({args:e,sizes:["sm","md","lg"]}),template:`
      <OStack direction="column" :gap="4">
        <OCheckbox v-for="s in sizes" :key="s" v-bind="args" :size="s" :label="s" />
      </OStack>`})},B={args:{disabled:!0},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}},I={play:async({canvasElement:e,args:l})=>{const a=Ge(e);await Ze.click(a.getByText("I agree to the terms")),await Qe(l["onUpdate:modelValue"]).toHaveBeenCalledWith(!0)}};var W,L,U;S.parameters={...S.parameters,docs:{...(W=S.parameters)==null?void 0:W.docs,source:{originalSource:"{}",...(U=(L=S.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var Y,K,N;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    modelValue: true
  }
}`,...(N=(K=x.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var j,H,J,Q,X;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    modelValue: 'indeterminate',
    label: 'Select all'
  }
}`,...(J=(H=f.parameters)==null?void 0:H.docs)==null?void 0:J.source},description:{story:'Reports `aria-checked="mixed"` — not a dash icon over a false value.',...(X=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:X.description}}};var Z,G,ee;q.parameters={...q.parameters,docs:{...(Z=q.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    description: 'You can withdraw consent at any time.'
  }
}`,...(ee=(G=q.parameters)==null?void 0:G.docs)==null?void 0:ee.source}}};var ae,te,re;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    error: 'You must accept the terms to continue.'
  }
}`,...(re=(te=w.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var se,oe,le;O.parameters={...O.parameters,docs:{...(se=O.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: args => ({
    components: {
      OCheckbox,
      OStack
    },
    setup: () => ({
      args,
      sizes: ['sm', 'md', 'lg'] as const
    }),
    template: \`
      <OStack direction="column" :gap="4">
        <OCheckbox v-for="s in sizes" :key="s" v-bind="args" :size="s" :label="s" />
      </OStack>\`
  })
}`,...(le=(oe=O.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};var ne,ie,de;B.parameters={...B.parameters,docs:{...(ne=B.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          enabled: false
        }]
      }
    }
  }
}`,...(de=(ie=B.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ue,ce,me;I.parameters={...I.parameters,docs:{...(ue=I.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText('I agree to the terms'));
    await expect(args['onUpdate:modelValue']).toHaveBeenCalledWith(true);
  }
}`,...(me=(ce=I.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};const pa=["Default","Checked","Indeterminate","WithDescription","WithError","Sizes","Disabled","LabelTogglesControl"];export{x as Checked,S as Default,B as Disabled,f as Indeterminate,I as LabelTogglesControl,O as Sizes,q as WithDescription,w as WithError,pa as __namedExportsOrder,ma as default};
