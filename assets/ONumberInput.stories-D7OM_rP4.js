import{d as Q,o as v,c as h,t as re,a as se,b as o,l as oe,m as le,n as ie,C as w,D as x,j as V}from"./iframe-CmLobRcQ.js";import{_ as de}from"./OIconMinus.vue-B7GFrZ0n.js";import{_ as ue}from"./OFormField.vue_vue_type_style_index_0_lang-DFXoIQzD.js";import{_ as ce}from"./OStack.vue_vue_type_style_index_0_lang-CjZC0m5n.js";import"./preload-helper-Dp1pzeXC.js";import"./style-HaLhxVKJ.js";const me=["width","height","role","aria-hidden","aria-label"],pe={key:0},be=Q({__name:"OIconPlus",props:{size:{default:"1em"},label:{default:void 0}},setup(e){return(r,a)=>(v(),h("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",width:e.size,height:e.size,fill:"none",focusable:"false",role:e.label?"img":void 0,"aria-hidden":e.label?void 0:!0,"aria-label":e.label},[e.label?(v(),h("title",pe,re(e.label),1)):se("",!0),a[0]||(a[0]=o("path",{class:"fill",d:"M10 4C10.5523 4 11 4.44772 11 5V9H15C15.5523 9 16 9.44772 16 10C16 10.5523 15.5523 11 15 11H11V15C11 15.5523 10.5523 16 10 16C9.44772 16 9 15.5523 9 15V11H5C4.44772 11 4 10.5523 4 10C4 9.44772 4.44772 9 5 9H9V5C9 4.44772 9.44772 4 10 4Z",fill:"currentColor"},null,-1))],8,me))}}),fe=["disabled","aria-label"],ve=["id","value","name","min","max","step","placeholder","disabled","readonly","required","aria-invalid","aria-required","aria-describedby"],ge=["disabled","aria-label"],Y=Q({__name:"ONumberInput",props:{modelValue:{default:void 0},label:{default:void 0},helper:{default:void 0},error:{default:void 0},placeholder:{default:void 0},min:{default:void 0},max:{default:void 0},step:{default:1},size:{default:"md"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},name:{default:void 0},id:{default:void 0},decrementLabel:{default:"Decrease"},incrementLabel:{default:"Increase"}},emits:["update:modelValue"],setup(e,{emit:r}){const a=e,l=r,g=n=>{let t=n;return a.min!==void 0&&(t=Math.max(a.min,t)),a.max!==void 0&&(t=Math.min(a.max,t)),t},J=V(()=>a.min!==void 0&&(a.modelValue??a.min)<=a.min),X=V(()=>a.max!==void 0&&(a.modelValue??a.max)>=a.max),_=n=>{const t=n.target.value;if(t==="")return l("update:modelValue",void 0);const d=Number(t);Number.isNaN(d)||l("update:modelValue",g(d))},i=n=>{const t=a.modelValue??a.min??0;l("update:modelValue",g(t+n*a.step))},ee=n=>{document.activeElement===n.target&&n.target.blur()},ae=n=>{a.disabled||a.readonly||(n.key==="ArrowUp"?(n.preventDefault(),i(1)):n.key==="ArrowDown"&&(n.preventDefault(),i(-1)))};return(n,t)=>(v(),oe(ue,{label:e.label,helper:e.helper,error:e.error,required:e.required,size:e.size,id:e.id},{default:le(({id:d,describedBy:te,invalid:y})=>[o("div",{class:ie(["o-number-input",[`o-number-input--${e.size}`,{"o-number-input--disabled":e.disabled,"o-number-input--invalid":y}]])},[o("button",{type:"button",class:"o-number-input__step",disabled:e.disabled||e.readonly||J.value,"aria-label":e.decrementLabel,tabindex:"-1",onClick:t[0]||(t[0]=ne=>i(-1))},[w(x(de))],8,fe),o("input",{id:d,class:"o-number-input__control",type:"number",value:e.modelValue,name:e.name,min:e.min,max:e.max,step:e.step,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,required:e.required,"aria-invalid":y||void 0,"aria-required":e.required||void 0,"aria-describedby":te,onInput:_,onWheel:ee,onKeydown:ae},null,40,ve),o("button",{type:"button",class:"o-number-input__step",disabled:e.disabled||e.readonly||X.value,"aria-label":e.incrementLabel,tabindex:"-1",onClick:t[1]||(t[1]=ne=>i(1))},[w(x(be))],8,ge)],2)]),_:1},8,["label","helper","error","required","size","id"]))}}),{expect:Z,fn:ye,userEvent:F,within:G}=__STORYBOOK_MODULE_TEST__,Ce={title:"Components/ONumberInput",component:Y,tags:["autodocs"],args:{label:"Quantity",modelValue:1,min:0,max:10,"onUpdate:modelValue":ye()},parameters:{docs:{description:{component:'A native `<input type="number">` — already a `spinbutton`, already arrow-key\noperable — with two of its defects fixed: the scroll wheel no longer edits a\nfocused field, and values are clamped to the range on emit rather than only\nbeing flagged through validity state.'}}}},u={},c={args:{helper:"Up to 10 per order."}},m={args:{modelValue:10}},p={render:e=>({components:{ONumberInput:Y,OStack:ce},setup:()=>({args:e,sizes:["sm","md","lg"]}),template:`
      <OStack :gap="3" align="end">
        <ONumberInput v-for="s in sizes" :key="s" v-bind="args" :size="s" :label="s" />
      </OStack>`})},b={args:{disabled:!0},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}},f={play:async({canvasElement:e,args:r})=>{const a=G(e);await F.click(a.getByRole("button",{name:"Increase"})),await Z(r["onUpdate:modelValue"]).toHaveBeenCalledWith(2)}},s={play:async({canvasElement:e,args:r})=>{G(e).getByRole("spinbutton").focus(),await F.keyboard("{ArrowUp}"),await Z(r["onUpdate:modelValue"]).toHaveBeenCalledWith(2)}};var k,S,C;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:"{}",...(C=(S=u.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var O,z,B;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    helper: 'Up to 10 per order.'
  }
}`,...(B=(z=c.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var I,N,E;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    modelValue: 10
  }
}`,...(E=(N=m.parameters)==null?void 0:N.docs)==null?void 0:E.source}}};var D,U,q;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => ({
    components: {
      ONumberInput,
      OStack
    },
    setup: () => ({
      args,
      sizes: ['sm', 'md', 'lg'] as const
    }),
    template: \`
      <OStack :gap="3" align="end">
        <ONumberInput v-for="s in sizes" :key="s" v-bind="args" :size="s" :label="s" />
      </OStack>\`
  })
}`,...(q=(U=p.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var A,H,$;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...($=(H=b.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};var M,W,L;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Increase'
    }));
    await expect(args['onUpdate:modelValue']).toHaveBeenCalledWith(2);
  }
}`,...(L=(W=f.parameters)==null?void 0:W.docs)==null?void 0:L.source}}};var R,K,T,j,P;s.parameters={...s.parameters,docs:{...(R=s.parameters)==null?void 0:R.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('spinbutton');
    input.focus();
    await userEvent.keyboard('{ArrowUp}');
    await expect(args['onUpdate:modelValue']).toHaveBeenCalledWith(2);
  }
}`,...(T=(K=s.parameters)==null?void 0:K.docs)==null?void 0:T.source},description:{story:"Arrow keys work on the field itself — the steppers are for pointer users.",...(P=(j=s.parameters)==null?void 0:j.docs)==null?void 0:P.description}}};const Oe=["Default","WithHelper","AtMaximum","Sizes","Disabled","StepperIncrements","ArrowKeySteps"];export{s as ArrowKeySteps,m as AtMaximum,u as Default,b as Disabled,p as Sizes,f as StepperIncrements,c as WithHelper,Oe as __namedExportsOrder,Ce as default};
