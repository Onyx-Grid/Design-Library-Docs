import{d as Z,w as _,l as ee,m as ae,o as v,b as h,n as y,c as re,t as w,a as te,r as oe,j as p,E as se}from"./iframe-CmLobRcQ.js";import{_ as ne}from"./OFormField.vue_vue_type_style_index_0_lang-DFXoIQzD.js";import"./preload-helper-Dp1pzeXC.js";const le={class:"o-textarea__wrapper"},ie=["id","value","name","rows","placeholder","disabled","readonly","required","maxlength","aria-invalid","aria-required","aria-describedby"],de=["role","aria-live"],V=Z({__name:"OTextarea",props:{modelValue:{default:""},label:{default:void 0},helper:{default:void 0},error:{default:void 0},placeholder:{default:void 0},rows:{default:3},autoResize:{type:Boolean,default:!1},maxlength:{default:void 0},size:{default:"md"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},required:{type:Boolean,default:!1},name:{default:void 0},id:{default:void 0}},emits:["update:modelValue","focus","blur"],setup(e,{emit:P}){const r=e,Y=P,g=oe(null),f=()=>{const a=g.value;!a||!r.autoResize||(a.style.height="auto",a.style.height=`${a.scrollHeight}px`)};_(()=>r.modelValue,()=>se(f));const G=a=>{Y("update:modelValue",a.target.value),f()},c=p(()=>{var a;return((a=r.modelValue)==null?void 0:a.length)??0}),J=p(()=>r.maxlength!==void 0),x=p(()=>r.maxlength!==void 0&&c.value>=r.maxlength*.9);return(a,o)=>(v(),ee(ne,{label:e.label,helper:e.helper,error:e.error,required:e.required,size:e.size,id:e.id},{default:ae(({id:Q,describedBy:X,invalid:b})=>[h("div",le,[h("div",{class:y(["o-textarea",[`o-textarea--${e.size}`,{"o-textarea--disabled":e.disabled,"o-textarea--readonly":e.readonly,"o-textarea--invalid":b,"o-textarea--auto":e.autoResize}]])},[h("textarea",{id:Q,ref_key:"el",ref:g,class:"o-textarea__control",value:e.modelValue,name:e.name,rows:e.rows,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,required:e.required,maxlength:e.maxlength,"aria-invalid":b||void 0,"aria-required":e.required||void 0,"aria-describedby":X,onInput:G,onFocus:o[0]||(o[0]=m=>a.$emit("focus",m)),onBlur:o[1]||(o[1]=m=>a.$emit("blur",m))},null,40,ie)],2),J.value?(v(),re("p",{key:0,class:y(["o-textarea__count",{"o-textarea__count--limit":c.value>=(e.maxlength??0)}]),role:x.value?"status":void 0,"aria-live":x.value?"polite":void 0},w(c.value)+" / "+w(e.maxlength),11,de)):te("",!0)])]),_:1},8,["label","helper","error","required","size","id"]))}}),{fn:ue}=__STORYBOOK_MODULE_TEST__,pe={title:"Components/OTextarea",component:V,tags:["autodocs"],args:{label:"Notes",placeholder:"Anything worth remembering…","onUpdate:modelValue":ue()},render:e=>({components:{OTextarea:V},setup:()=>({args:e}),template:'<div style="max-width: 26rem"><OTextarea v-bind="args" /></div>'}),parameters:{docs:{description:{component:"Split out of `OInput` rather than living inside it as a `multiline` flag: the\ntwo share a look but not an API. One component carrying both prop sets is\nwhere the inherited 534-line input field came from."}}}},s={},n={args:{helper:"Markdown is supported."}},l={args:{error:"Notes are required before submitting."}},t={args:{maxlength:200,modelValue:"A short note."}},i={args:{maxlength:60,modelValue:"x".repeat(57)}},d={args:{autoResize:!0,rows:2,modelValue:"Type here and the box grows with the content."}},u={args:{disabled:!0,modelValue:"Read only content."},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}};var z,T,q;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:"{}",...(q=(T=s.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var O,S,B;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    helper: 'Markdown is supported.'
  }
}`,...(B=(S=n.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};var C,R,k;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    error: 'Notes are required before submitting.'
  }
}`,...(k=(R=l.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var E,N,A,D,W;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    maxlength: 200,
    modelValue: 'A short note.'
  }
}`,...(A=(N=t.parameters)==null?void 0:N.docs)==null?void 0:A.source},description:{story:"The count only becomes a live region as the limit approaches.",...(W=(D=t.parameters)==null?void 0:D.docs)==null?void 0:W.description}}};var $,I,H;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    maxlength: 60,
    modelValue: 'x'.repeat(57)
  }
}`,...(H=(I=i.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var L,M,U;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    autoResize: true,
    rows: 2,
    modelValue: 'Type here and the box grows with the content.'
  }
}`,...(U=(M=d.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var j,F,K;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    disabled: true,
    modelValue: 'Read only content.'
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
}`,...(K=(F=u.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};const ge=["Default","WithHelper","WithError","WithCharacterCount","NearTheLimit","AutoResize","Disabled"];export{d as AutoResize,s as Default,u as Disabled,i as NearTheLimit,t as WithCharacterCount,l as WithError,n as WithHelper,ge as __namedExportsOrder,pe as default};
