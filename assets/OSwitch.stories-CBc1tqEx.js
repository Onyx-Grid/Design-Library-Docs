import{d as _,B as ce,o as d,c as h,C,m as B,k as te,D as s,s as O,L as ue,M as me,l as se,a as k,F as pe,j as v,t as R,n as he,A as ve}from"./iframe-CmLobRcQ.js";import{b as fe,d as oe,P as re,e as we,c as be}from"./VisuallyHidden-Cjqqau1e.js";import{u as ye}from"./useForwardScopeId-CRVgJYNE.js";import{V as ge}from"./VisuallyHiddenInput-7w4yUsTk.js";import{_ as Se}from"./OStack.vue_vue_type_style_index_0_lang-CjZC0m5n.js";import"./preload-helper-Dp1pzeXC.js";import"./style-HaLhxVKJ.js";const[ke,Ve]=be("SwitchRoot");var Ce=_({inheritAttrs:!1,__name:"SwitchRoot",props:{defaultValue:{type:null,required:!1},modelValue:{type:null,required:!1,default:void 0},disabled:{type:Boolean,required:!1},id:{type:String,required:!1},value:{type:String,required:!1,default:"on"},trueValue:{type:null,required:!1,default:()=>!0},falseValue:{type:null,required:!1,default:()=>!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"},name:{type:String,required:!1},required:{type:Boolean,required:!1}},emits:["update:modelValue"],setup(e,{emit:o}){const a=e,i=o,{disabled:l}=ce(a),n=fe(a,"modelValue",i,{defaultValue:a.defaultValue??a.falseValue,passive:a.modelValue===void 0}),r=v(()=>n.value===a.trueValue);function c(){l.value||(n.value=r.value?a.falseValue:a.trueValue)}const{forwardRef:f,currentElement:u}=oe(),V=we(u),E=ye(),de=v(()=>{var t;return a.id&&u.value?(t=document.querySelector(`[for="${a.id}"]`))==null?void 0:t.innerText:void 0});return Ve({checked:r,toggleCheck:c,disabled:l}),(t,ze)=>(d(),h(pe,null,[C(s(re),O({id:t.id,ref:s(f),role:"switch",type:t.as==="button"?"button":void 0,value:t.value,"aria-label":t.$attrs["aria-label"]||de.value,"aria-checked":r.value,"aria-required":t.required,"data-state":r.value?"checked":"unchecked","data-disabled":s(l)?"":void 0,"as-child":t.asChild,as:t.as,disabled:s(l)},{...s(E),...t.$attrs},{onClick:c,onKeydown:ue(me(c,["prevent"]),["enter"])}),{default:B(()=>[te(t.$slots,"default",{modelValue:s(n),checked:r.value})]),_:3},16,["id","type","value","aria-label","aria-checked","aria-required","data-state","data-disabled","as-child","as","disabled","onKeydown"]),s(V)&&t.name?(d(),se(s(ge),O({key:0,type:"checkbox",name:t.name,disabled:s(l),required:t.required,value:t.value,checked:r.value},s(E)),null,16,["name","disabled","required","value","checked"])):k("v-if",!0)],64))}}),qe=Ce,_e=_({__name:"SwitchThumb",props:{asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(e){const o=ke();return oe(),(a,i)=>(d(),se(s(re),{"data-state":s(o).checked.value?"checked":"unchecked","data-disabled":s(o).disabled.value?"":void 0,"as-child":a.asChild,as:a.as},{default:B(()=>[te(a.$slots,"default")]),_:3},8,["data-state","data-disabled","as-child","as"]))}}),Be=_e;const Ee={key:0,class:"o-switch__text"},Oe=["for"],Re=["id"],ie=_({__name:"OSwitch",props:{modelValue:{type:Boolean,default:!1},label:{default:void 0},description:{default:void 0},size:{default:"md"},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},name:{default:void 0},id:{default:void 0}},emits:["update:modelValue"],setup(e,{emit:o}){const a=e,i=o,l=ve(),n=v(()=>a.id??`o-switch-${l}`),r=v(()=>`${n.value}-description`),c=v({get:()=>a.modelValue,set:f=>i("update:modelValue",f)});return(f,u)=>(d(),h("div",{class:he(["o-switch",[`o-switch--${e.size}`,{"o-switch--disabled":e.disabled}]])},[C(s(qe),{id:n.value,modelValue:c.value,"onUpdate:modelValue":u[0]||(u[0]=V=>c.value=V),disabled:e.disabled,required:e.required,name:e.name,"aria-describedby":e.description?r.value:void 0,class:"o-switch__root"},{default:B(()=>[C(s(Be),{class:"o-switch__thumb"})]),_:1},8,["id","modelValue","disabled","required","name","aria-describedby"]),e.label||e.description?(d(),h("div",Ee,[e.label?(d(),h("label",{key:0,class:"o-switch__label",for:n.value},R(e.label),9,Oe)):k("",!0),e.description?(d(),h("p",{key:1,id:r.value,class:"o-switch__description"},R(e.description),9,Re)):k("",!0)])):k("",!0)],2))}}),{expect:q,fn:Te,userEvent:le,within:ne}=__STORYBOOK_MODULE_TEST__,We={title:"Components/OSwitch",component:ie,tags:["autodocs"],args:{modelValue:!1,label:"Email notifications","onUpdate:modelValue":Te()},parameters:{docs:{description:{component:`Use a switch when the change applies at once, and a checkbox when it applies on
submit. That distinction is what tells someone whether they still need to press
Save, so it is worth keeping honest.`}}}},w={},b={args:{modelValue:!0}},y={args:{description:"Sent when someone mentions you or replies to a thread."}},g={render:e=>({components:{OSwitch:ie,OStack:Se},setup:()=>({args:e,sizes:["sm","md","lg"]}),template:`
      <OStack direction="column" :gap="4">
        <OSwitch v-for="s in sizes" :key="s" v-bind="args" :size="s" :label="s" />
      </OStack>`})},S={args:{disabled:!0},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}},m={play:async({canvasElement:e,args:o})=>{const a=ne(e);await le.click(a.getByText("Email notifications")),await q(o["onUpdate:modelValue"]).toHaveBeenCalledWith(!0)}},p={play:async({canvasElement:e,args:o})=>{const i=ne(e).getByRole("switch");i.focus(),await q(i).toHaveFocus(),await le.keyboard(" "),await q(o["onUpdate:modelValue"]).toHaveBeenCalledWith(!0)}};var T,z,D;w.parameters={...w.parameters,docs:{...(T=w.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(D=(z=w.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var $,F,U;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    modelValue: true
  }
}`,...(U=(F=b.parameters)==null?void 0:F.docs)==null?void 0:U.source}}};var A,H,L;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    description: 'Sent when someone mentions you or replies to a thread.'
  }
}`,...(L=(H=y.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var W,x,I;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => ({
    components: {
      OSwitch,
      OStack
    },
    setup: () => ({
      args,
      sizes: ['sm', 'md', 'lg'] as const
    }),
    template: \`
      <OStack direction="column" :gap="4">
        <OSwitch v-for="s in sizes" :key="s" v-bind="args" :size="s" :label="s" />
      </OStack>\`
  })
}`,...(I=(x=g.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var K,M,P;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  parameters: {
    // WCAG 1.4.3 exempts inactive components from contrast requirements.
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          enabled: false
        }]
      }
    }
  }
}`,...(P=(M=S.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var j,N,G,Y,J;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByText('Email notifications'));
    await expect(args['onUpdate:modelValue']).toHaveBeenCalledWith(true);
  }
}`,...(G=(N=m.parameters)==null?void 0:N.docs)==null?void 0:G.source},description:{story:"Clicking the LABEL must toggle the switch — that is what the association buys.",...(J=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:J.description}}};var Q,X,Z,ee,ae;p.parameters={...p.parameters,docs:{...(Q=p.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const control = canvas.getByRole('switch');
    control.focus();
    await expect(control).toHaveFocus();
    await userEvent.keyboard(' ');
    await expect(args['onUpdate:modelValue']).toHaveBeenCalledWith(true);
  }
}`,...(Z=(X=p.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:"Space activates a switch. Reka provides this; the test proves it survived.",...(ae=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:ae.description}}};const xe=["Default","Checked","WithDescription","Sizes","Disabled","LabelTogglesControl","SpaceActivates"];export{b as Checked,w as Default,S as Disabled,m as LabelTogglesControl,g as Sizes,p as SpaceActivates,y as WithDescription,xe as __namedExportsOrder,We as default};
