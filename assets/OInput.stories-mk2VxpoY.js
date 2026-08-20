import{d as ge,c as O,t as be,a as Oe,b as S,o as h}from"./iframe-CmLobRcQ.js";import{_ as v}from"./OInput.vue_vue_type_style_index_0_lang-D3xm_DmT.js";import{_ as y}from"./OStack.vue_vue_type_style_index_0_lang-CjZC0m5n.js";import{_ as ve}from"./OButton.vue_vue_type_style_index_0_lang-Dqxny7bC.js";import"./preload-helper-Dp1pzeXC.js";import"./OFormField.vue_vue_type_style_index_0_lang-DFXoIQzD.js";import"./style-HaLhxVKJ.js";const Se=["width","height","role","aria-hidden","aria-label"],ye={key:0},ke=ge({__name:"OIconMail",props:{size:{default:"1em"},label:{default:void 0}},setup(e){return(t,a)=>(h(),O("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:e.size,height:e.size,fill:"none",focusable:"false",role:e.label?"img":void 0,"aria-hidden":e.label?void 0:!0,"aria-label":e.label},[e.label?(h(),O("title",ye,be(e.label),1)):Oe("",!0),a[0]||(a[0]=S("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)),a[1]||(a[1]=S("path",{d:"m22 6-10 7L2 6",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1))],8,Se))}}),fe=["width","height","role","aria-hidden","aria-label"],Ie={key:0},we=ge({__name:"OIconSearch",props:{size:{default:"1em"},label:{default:void 0}},setup(e){return(t,a)=>(h(),O("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:e.size,height:e.size,fill:"none",focusable:"false",role:e.label?"img":void 0,"aria-hidden":e.label?void 0:!0,"aria-label":e.label},[e.label?(h(),O("title",Ie,be(e.label),1)):Oe("",!0),a[0]||(a[0]=S("path",{d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",stroke:"currentColor","stroke-width":"2"},null,-1))],8,fe))}}),{expect:l,fn:Be,userEvent:he,within:k}=__STORYBOOK_MODULE_TEST__,Me={title:"Components/OInput",component:v,tags:["autodocs"],args:{label:"Email address",placeholder:"you@example.com","onUpdate:modelValue":Be()},parameters:{docs:{description:{component:"A controlled single-line text control. Label, helper and error are props\nbecause the accessible wiring between them is not optional — `OFormField` does\nthat wiring and is exported separately for controls this library does not ship."}}}},c={},d={args:{helper:"We only use this to send receipts."}},n={args:{helper:"We only use this to send receipts.",error:"Enter a valid email address."}},p={args:{required:!0}},m={render:e=>({components:{OInput:v,OStack:y},setup:()=>({args:e}),template:`
      <OStack direction="column" :gap="4">
        <OInput v-bind="args" size="sm" label="Small" />
        <OInput v-bind="args" size="md" label="Medium" />
        <OInput v-bind="args" size="lg" label="Large" />
      </OStack>`})},r={render:e=>({components:{OInput:v,OButton:ve,OStack:y},setup:()=>({args:e}),template:`
      <OStack direction="column" :gap="4">
        <OStack :gap="2" align="end">
          <OInput v-bind="args" size="sm" label="Small" />
          <OButton size="sm">Subscribe</OButton>
        </OStack>
        <OStack :gap="2" align="end">
          <OInput v-bind="args" size="md" label="Medium" />
          <OButton size="md">Subscribe</OButton>
        </OStack>
        <OStack :gap="2" align="end">
          <OInput v-bind="args" size="lg" label="Large" />
          <OButton size="lg">Subscribe</OButton>
        </OStack>
      </OStack>`})},u={render:e=>({components:{OInput:v,OStack:y,OIconSearch:we,OIconMail:ke},setup:()=>({args:e}),template:`
      <OStack direction="column" :gap="4">
        <OInput v-bind="args" label="Search" placeholder="Search…">
          <template #leading><OIconSearch /></template>
        </OInput>
        <OInput v-bind="args">
          <template #trailing><OIconMail /></template>
        </OInput>
      </OStack>`})},g={args:{disabled:!0,modelValue:"you@example.com"},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}},b={args:{readonly:!0,modelValue:"you@example.com"}},s={play:async({canvasElement:e,args:t})=>{const a=k(e);await he.type(a.getByLabelText(/email address/i),"abc"),await l(t["onUpdate:modelValue"]).toHaveBeenCalledTimes(3)}},o={play:async({canvasElement:e})=>{const a=k(e).getByLabelText(/email address/i);await he.click(a),await l(a).toHaveFocus()}},i={args:{error:"Enter a valid email address."},play:async({canvasElement:e})=>{const t=k(e),a=t.getByLabelText(/email address/i);await l(a).toHaveAttribute("aria-invalid","true"),await l(a).toHaveAccessibleDescription("Enter a valid email address."),await l(t.getByRole("alert")).toBeInTheDocument()}};var f,I,w;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(w=(I=c.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var B,x,z;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    helper: 'We only use this to send receipts.'
  }
}`,...(z=(x=d.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};var E,T,A,L,W;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    helper: 'We only use this to send receipts.',
    error: 'Enter a valid email address.'
  }
}`,...(A=(T=n.parameters)==null?void 0:T.docs)==null?void 0:A.source},description:{story:"The error replaces the helper — describing the control by both would be noise.",...(W=(L=n.parameters)==null?void 0:L.docs)==null?void 0:W.description}}};var M,C,H;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...(H=(C=p.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var V,D,R;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => ({
    components: {
      OInput,
      OStack
    },
    setup: () => ({
      args
    }),
    template: \`
      <OStack direction="column" :gap="4">
        <OInput v-bind="args" size="sm" label="Small" />
        <OInput v-bind="args" size="md" label="Medium" />
        <OInput v-bind="args" size="lg" label="Large" />
      </OStack>\`
  })
}`,...(R=(D=m.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var _,$,q,F,U;r.parameters={...r.parameters,docs:{...(_=r.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => ({
    components: {
      OInput,
      OButton,
      OStack
    },
    setup: () => ({
      args
    }),
    template: \`
      <OStack direction="column" :gap="4">
        <OStack :gap="2" align="end">
          <OInput v-bind="args" size="sm" label="Small" />
          <OButton size="sm">Subscribe</OButton>
        </OStack>
        <OStack :gap="2" align="end">
          <OInput v-bind="args" size="md" label="Medium" />
          <OButton size="md">Subscribe</OButton>
        </OStack>
        <OStack :gap="2" align="end">
          <OInput v-bind="args" size="lg" label="Large" />
          <OButton size="lg">Subscribe</OButton>
        </OStack>
      </OStack>\`
  })
}`,...(q=($=r.parameters)==null?void 0:$.docs)==null?void 0:q.source},description:{story:"Control heights come from `--control-height-*`, the same tokens `OButton`\nreads, which is what keeps a field and a button aligned in a form row.",...(U=(F=r.parameters)==null?void 0:F.docs)==null?void 0:U.description}}};var N,j,G;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => ({
    components: {
      OInput,
      OStack,
      OIconSearch,
      OIconMail
    },
    setup: () => ({
      args
    }),
    template: \`
      <OStack direction="column" :gap="4">
        <OInput v-bind="args" label="Search" placeholder="Search…">
          <template #leading><OIconSearch /></template>
        </OInput>
        <OInput v-bind="args">
          <template #trailing><OIconMail /></template>
        </OInput>
      </OStack>\`
  })
}`,...(G=(j=u.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var K,Y,Z;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    disabled: true,
    modelValue: 'you@example.com'
  },
  parameters: {
    // WCAG 1.4.3 exempts INACTIVE user-interface components from contrast
    // requirements, and a disabled control is exactly that. axe cannot tell the
    // difference between "dimmed because disabled" and "dimmed by mistake", so
    // the rule is turned off for this story specifically — not globally.
    a11y: {
      config: {
        rules: [{
          id: 'color-contrast',
          enabled: false
        }]
      }
    }
  }
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var J,P,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    readonly: true,
    modelValue: 'you@example.com'
  }
}`,...(Q=(P=b.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};var X,ee,ae,te,ne;s.parameters={...s.parameters,docs:{...(X=s.parameters)==null?void 0:X.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.type(canvas.getByLabelText(/email address/i), 'abc');
    await expect(args['onUpdate:modelValue']).toHaveBeenCalledTimes(3);
  }
}`,...(ae=(ee=s.parameters)==null?void 0:ee.docs)==null?void 0:ae.source},description:{story:"Typing emits once per keystroke, and the component never stores the value.",...(ne=(te=s.parameters)==null?void 0:te.docs)==null?void 0:ne.description}}};var re,se,oe,ie,le;o.parameters={...o.parameters,docs:{...(re=o.parameters)==null?void 0:re.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText(/email address/i);
    await userEvent.click(input);
    await expect(input).toHaveFocus();
  }
}`,...(oe=(se=o.parameters)==null?void 0:se.docs)==null?void 0:oe.source},description:{story:"The label must actually reach the control — `getByLabelText` fails if it doesn't.",...(le=(ie=o.parameters)==null?void 0:ie.docs)==null?void 0:le.description}}};var ce,de,pe,me,ue;i.parameters={...i.parameters,docs:{...(ce=i.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    error: 'Enter a valid email address.'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText(/email address/i);
    await expect(input).toHaveAttribute('aria-invalid', 'true');
    await expect(input).toHaveAccessibleDescription('Enter a valid email address.');
    await expect(canvas.getByRole('alert')).toBeInTheDocument();
  }
}`,...(pe=(de=i.parameters)==null?void 0:de.docs)==null?void 0:pe.source},description:{story:"An invalid field announces itself and is described by its error.",...(ue=(me=i.parameters)==null?void 0:me.docs)==null?void 0:ue.description}}};const Ce=["Default","WithHelper","WithError","Required","Sizes","AlignedWithButton","WithAffixes","Disabled","Readonly","TypingEmits","LabelIsAssociated","ErrorIsAnnounced"];export{r as AlignedWithButton,c as Default,g as Disabled,i as ErrorIsAnnounced,o as LabelIsAssociated,b as Readonly,p as Required,m as Sizes,s as TypingEmits,u as WithAffixes,n as WithError,d as WithHelper,Ce as __namedExportsOrder,Me as default};
