import{d as q,B as ue,o as c,c as g,C as R,m as w,k as B,D as e,s as $,M as ce,l as A,a as k,F as ge,j as h,L as we,r as ke,t as S,n as P,A as pe}from"./iframe-CmLobRcQ.js";import{b as fe,d as F,P as H,e as me,c as ve,g as L}from"./VisuallyHidden-Cjqqau1e.js";import{u as Re}from"./Collection-Dh356I-I.js";import{V as he}from"./VisuallyHiddenInput-7w4yUsTk.js";import{a as qe,R as _e}from"./RovingFocusItem-B7fNevfz.js";import{u as be}from"./useForwardScopeId-CRVgJYNE.js";import{h as Ee}from"./handleAndDispatchCustomEvent-ChOKVcqp.js";import{i as Se,P as Ae}from"./Presence-ETlVeotz.js";import"./preload-helper-Dp1pzeXC.js";const Be="radio.select";function Ce(a,i,o){Ee(Be,o,{originalEvent:a,value:i})}var Ve=q({inheritAttrs:!1,__name:"Radio",props:{id:{type:String,required:!1},value:{type:null,required:!1},disabled:{type:Boolean,required:!1,default:!1},checked:{type:Boolean,required:!1,default:void 0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"},name:{type:String,required:!1},required:{type:Boolean,required:!1}},emits:["update:checked","select"],setup(a,{emit:i}){const o=a,t=i,s=fe(o,"checked",t,{passive:o.checked===void 0}),{value:y}=ue(o),{forwardRef:d,currentElement:n}=F(),m=me(n),l=be(),u=h(()=>{var r;return o.id&&n.value?((r=document.querySelector(`[for="${o.id}"]`))==null?void 0:r.innerText)??o.value:void 0});function b(r){o.disabled||Ce(r,o.value,p=>{t("select",p),!(p!=null&&p.defaultPrevented)&&(s.value=!0,m.value&&p.stopPropagation())})}return(r,p)=>(c(),g(ge,null,[R(e(H),$({id:r.id,ref:e(d),role:"radio",type:r.as==="button"?"button":void 0,as:r.as,"aria-checked":e(s)??!1,"aria-label":u.value,"as-child":r.asChild,disabled:r.disabled?"":void 0,"data-state":e(s)?"checked":"unchecked","data-disabled":r.disabled?"":void 0,value:e(y),required:r.required,name:r.name},{...e(l),...r.$attrs},{onClick:ce(b,["stop"])}),{default:w(()=>[B(r.$slots,"default",{checked:e(s)})]),_:3},16,["id","type","as","aria-checked","aria-label","as-child","disabled","data-state","data-disabled","value","required","name"]),e(m)&&r.name?(c(),A(e(he),$({key:0,type:"radio",tabindex:"-1",value:e(y),checked:!!e(s),name:r.name,disabled:r.disabled,required:r.required},e(l)),null,16,["value","checked","name","disabled","required"])):k("v-if",!0)],64))}}),Ie=Ve;const[De,Ge]=ve("RadioGroupRoot");var Oe=q({__name:"RadioGroupRoot",props:{modelValue:{type:null,required:!1},defaultValue:{type:null,required:!1},disabled:{type:Boolean,required:!1,default:!1},orientation:{type:String,required:!1,default:void 0},dir:{type:String,required:!1},loop:{type:Boolean,required:!1,default:!0},asChild:{type:Boolean,required:!1},as:{type:null,required:!1},name:{type:String,required:!1},required:{type:Boolean,required:!1,default:!1}},emits:["update:modelValue"],setup(a,{emit:i}){const o=a,t=i,{forwardRef:s,currentElement:y}=F(),d=fe(o,"modelValue",t,{defaultValue:o.defaultValue,passive:o.modelValue===void 0}),{disabled:n,loop:m,orientation:l,name:u,required:b,dir:r}=ue(o),p=Re(r),f=me(y);return Ge({modelValue:d,changeModelValue:v=>{d.value=v},disabled:n,loop:m,orientation:l,name:u==null?void 0:u.value,required:b}),(v,T)=>(c(),A(e(qe),{"as-child":"",orientation:e(l),dir:e(p),loop:e(m)},{default:w(()=>[R(e(H),{ref:e(s),role:"radiogroup","data-disabled":e(n)?"":void 0,"as-child":v.asChild,as:v.as,"aria-orientation":e(l),"aria-required":e(b),dir:e(p)},{default:w(()=>[B(v.$slots,"default",{modelValue:e(d)}),e(f)&&e(u)?(c(),A(e(he),{key:0,required:e(b),disabled:e(n),value:e(d),name:e(u)},null,8,["required","disabled","value","name"])):k("v-if",!0)]),_:3},8,["data-disabled","as-child","as","aria-orientation","aria-required","dir"])]),_:3},8,["orientation","dir","loop"]))}}),$e=Oe;const[Fe,Te]=ve("RadioGroupItem");var He=q({inheritAttrs:!1,__name:"RadioGroupItem",props:{id:{type:String,required:!1},value:{type:null,required:!1},disabled:{type:Boolean,required:!1,default:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"button"},name:{type:String,required:!1},required:{type:Boolean,required:!1}},emits:["select"],setup(a,{emit:i}){const o=a,t=i,{forwardRef:s,currentElement:y}=F(),d=De(),n=h(()=>d.disabled.value||o.disabled),m=h(()=>d.required.value||o.required),l=h(()=>{var f;return Se((f=d.modelValue)==null?void 0:f.value,o.value)});Te({disabled:n,checked:l});const u=ke(!1),b=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"];L("keydown",f=>{b.includes(f.key)&&(u.value=!0)}),L("keyup",()=>{u.value=!1});function r(){setTimeout(()=>{var f;u.value&&((f=y.value)==null||f.click())},0)}const p=be();return(f,v)=>(c(),A(e(_e),{checked:l.value,disabled:n.value,"as-child":"",focusable:!n.value,active:l.value},{default:w(()=>[R(Ie,$({...e(p),...f.$attrs,...o},{ref:e(s),checked:l.value,required:m.value,disabled:n.value,"onUpdate:checked":v[0]||(v[0]=T=>e(d).changeModelValue(f.value)),onSelect:v[1]||(v[1]=T=>t("select",T)),onKeydown:v[2]||(v[2]=we(ce(()=>{},["prevent"]),["enter"])),onFocus:r}),{default:w(()=>[B(f.$slots,"default",{checked:l.value,required:m.value,disabled:n.value})]),_:3},16,["checked","required","disabled"])]),_:3},8,["checked","disabled","focusable","active"]))}}),Pe=He,Le=q({__name:"RadioGroupIndicator",props:{forceMount:{type:Boolean,required:!1},asChild:{type:Boolean,required:!1},as:{type:null,required:!1,default:"span"}},setup(a){const{forwardRef:i}=F(),o=Fe();return(t,s)=>(c(),A(e(Ae),{present:t.forceMount||e(o).checked.value},{default:w(()=>[R(e(H),$({ref:e(i),"data-state":e(o).checked.value?"checked":"unchecked","data-disabled":e(o).disabled.value?"":void 0,"as-child":t.asChild,as:t.as},t.$attrs),{default:w(()=>[B(t.$slots,"default")]),_:3},16,["data-state","data-disabled","as-child","as"])]),_:3},8,["present"]))}}),Me=Le;const Ue=["id"],je=["id"],Ke=["id"],M=q({__name:"ORadioGroup",props:{modelValue:{default:void 0},label:{default:void 0},description:{default:void 0},error:{default:void 0},orientation:{default:"vertical"},size:{default:"md"},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},name:{default:void 0}},emits:["update:modelValue"],setup(a,{emit:i}){const o=a,t=i,s=pe(),y=h(()=>`o-radio-group-${s}-label`),d=h(()=>`o-radio-group-${s}-description`),n=h(()=>`o-radio-group-${s}-error`),m=h(()=>o.error!==void 0&&o.error!==""),l=h(()=>{if(m.value)return n.value;if(o.description)return d.value}),u=h({get:()=>o.modelValue,set:b=>t("update:modelValue",b)});return(b,r)=>(c(),g("div",{class:P(["o-radio-group",[`o-radio-group--${a.size}`,{"o-radio-group--disabled":a.disabled}]])},[a.label?(c(),g("span",{key:0,id:y.value,class:"o-radio-group__label"},S(a.label),9,Ue)):k("",!0),a.description?(c(),g("p",{key:1,id:d.value,class:"o-radio-group__description"},S(a.description),9,je)):k("",!0),R(e($e),{modelValue:u.value,"onUpdate:modelValue":r[0]||(r[0]=p=>u.value=p),disabled:a.disabled,required:a.required,name:a.name,orientation:a.orientation,"aria-labelledby":a.label?y.value:void 0,"aria-describedby":l.value,"aria-invalid":m.value||void 0,class:P(["o-radio-group__items",`o-radio-group__items--${a.orientation}`])},{default:w(()=>[B(b.$slots,"default")]),_:3},8,["modelValue","disabled","required","name","orientation","aria-labelledby","aria-describedby","aria-invalid","class"]),m.value?(c(),g("p",{key:2,id:n.value,class:"o-radio-group__error",role:"alert"},S(a.error),9,Ke)):k("",!0)],2))}}),ze={class:"o-radio"},We={key:0,class:"o-radio__text"},Ne=["for"],Ye=["id"],xe=q({__name:"ORadio",props:{value:{},label:{},description:{},disabled:{type:Boolean},id:{}},setup(a){const i=a,o=pe(),t=h(()=>i.id??`o-radio-${o}`),s=h(()=>`${t.value}-description`);return(y,d)=>(c(),g("div",ze,[R(e(Pe),{id:t.value,value:a.value,disabled:a.disabled,"aria-describedby":a.description?s.value:void 0,class:"o-radio__control"},{default:w(()=>[R(e(Me),{class:"o-radio__indicator"})]),_:1},8,["id","value","disabled","aria-describedby"]),a.label||a.description?(c(),g("div",We,[a.label?(c(),g("label",{key:0,class:"o-radio__label",for:t.value},S(a.label),9,Ne)):k("",!0),a.description?(c(),g("p",{key:1,id:s.value,class:"o-radio__description"},S(a.description),9,Ye)):k("",!0)])):k("",!0)]))}}),{expect:G,fn:Je,userEvent:O,waitFor:Qe,within:ye}=__STORYBOOK_MODULE_TEST__,da={title:"Components/ORadioGroup",component:M,tags:["autodocs"],args:{modelValue:"free",label:"Plan","onUpdate:modelValue":Je()},render:a=>({components:{ORadioGroup:M,ORadio:xe},setup:()=>({args:a}),template:`
      <ORadioGroup v-bind="args">
        <ORadio value="free" label="Free" description="Up to 3 projects." />
        <ORadio value="pro" label="Pro" description="Unlimited projects." />
        <ORadio value="team" label="Team" description="Shared workspaces." />
      </ORadioGroup>`}),parameters:{docs:{description:{component:`Built on Reka UI's RadioGroup: \`role="radiogroup"\`, roving tabindex, arrow-key
navigation. The group is ONE tab stop and you move within it with the arrow
keys — a hand-rolled group where every radio is tabbable is a keyboard trap in
a long form, and that is the default outcome of building this from bare inputs.`}}}},C={},V={args:{orientation:"horizontal"}},I={args:{modelValue:void 0,error:"Choose a plan to continue."}},D={args:{disabled:!0},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}},_={play:async({canvasElement:a,args:i})=>{const t=ye(a).getAllByRole("radio");await O.tab(),await G(t[0]).toHaveFocus(),await O.keyboard("{ArrowDown>}"),await G(t[1]).toHaveFocus(),await Qe(()=>G(i["onUpdate:modelValue"]).toHaveBeenCalledWith("pro")),await O.keyboard("{/ArrowDown}")}},E={play:async({canvasElement:a})=>{const o=ye(a).getAllByRole("radio");o[0].focus(),await O.tab();for(const t of o)await G(t).not.toHaveFocus()}};var U,j,K;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:"{}",...(K=(j=C.parameters)==null?void 0:j.docs)==null?void 0:K.source}}};var z,W,N;V.parameters={...V.parameters,docs:{...(z=V.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  }
}`,...(N=(W=V.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var Y,x,J;I.parameters={...I.parameters,docs:{...(Y=I.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    modelValue: undefined,
    error: 'Choose a plan to continue.'
  }
}`,...(J=(x=I.parameters)==null?void 0:x.docs)==null?void 0:J.source}}};var Q,X,Z;D.parameters={...D.parameters,docs:{...(Q=D.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(Z=(X=D.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var ee,ae,oe,re,te;_.parameters={..._.parameters,docs:{...(ee=_.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const radios = canvas.getAllByRole('radio');

    // Enter the group the way a keyboard user does, rather than forcing focus.
    await userEvent.tab();
    await expect(radios[0]!).toHaveFocus();

    // \`{ArrowDown>}\` presses and HOLDS; \`{/ArrowDown}\` releases.
    await userEvent.keyboard('{ArrowDown>}');
    await expect(radios[1]!).toHaveFocus();
    await waitFor(() => expect(args['onUpdate:modelValue']).toHaveBeenCalledWith('pro'));
    await userEvent.keyboard('{/ArrowDown}');
  }
}`,...(oe=(ae=_.parameters)==null?void 0:ae.docs)==null?void 0:oe.source},description:{story:`The behaviour jsdom cannot simulate, and the reason this project runs in a real
browser: Reka moves focus imperatively, so an arrow key produces no focus
change at all under jsdom.

Selection follows focus, per the WAI-ARIA radio pattern, but the mechanics are
worth knowing: Reka sets an \`isArrowKeyPressed\` flag on \`keydown\`, clears it on
\`keyup\`, and synthesises the click inside a \`setTimeout(…, 0)\` on focus. So the
key has to STILL BE HELD when that timeout fires.

A real keypress lasts ~50–100ms, so this is invisible in use. But
\`userEvent.keyboard('{ArrowDown}')\` fires keydown and keyup synchronously, and
the flag is already false by the time the timeout runs — the selection is
silently skipped. The key is therefore held across the assertion and released
afterwards, which is also the more faithful simulation.`,...(te=(re=_.parameters)==null?void 0:re.docs)==null?void 0:te.description}}};var se,ie,de,ne,le;E.parameters={...E.parameters,docs:{...(se=E.parameters)==null?void 0:se.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const radios = canvas.getAllByRole('radio');
    radios[0]!.focus();
    await userEvent.tab();
    // Tab leaves the group entirely rather than stepping to the next radio.
    for (const radio of radios) {
      await expect(radio).not.toHaveFocus();
    }
  }
}`,...(de=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:de.source},description:{story:"The whole group is a single tab stop.",...(le=(ne=E.parameters)==null?void 0:ne.docs)==null?void 0:le.description}}};const na=["Default","Horizontal","WithError","Disabled","ArrowKeyMovesSelection","GroupIsOneTabStop"];export{_ as ArrowKeyMovesSelection,C as Default,D as Disabled,E as GroupIsOneTabStop,V as Horizontal,I as WithError,na as __namedExportsOrder,da as default};
