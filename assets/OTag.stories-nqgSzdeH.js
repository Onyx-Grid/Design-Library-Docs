import{_ as c}from"./OTag.vue_vue_type_style_index_0_lang-CbQVf1TE.js";import{_ as B}from"./OStack.vue_vue_type_style_index_0_lang-CjZC0m5n.js";import"./iframe-CmLobRcQ.js";import"./preload-helper-Dp1pzeXC.js";import"./style-HaLhxVKJ.js";const{expect:D,fn:L,userEvent:A,within:N}=__STORYBOOK_MODULE_TEST__,K={title:"Components/OTag",component:c,tags:["autodocs"],args:{default:"design-system",onRemove:L()},render:e=>({components:{OTag:c},setup:()=>({args:e}),template:'<OTag v-bind="args">{{ args.default }}</OTag>'}),parameters:{docs:{description:{component:"A compact, optionally dismissible label. The difference from `OBadge` is\ninteraction, not looks: a badge reports a status, a tag represents a value the\nuser put there and can take away."}}}},t={},s={args:{removable:!0,removeLabel:"Remove design-system"}},r={render:e=>({components:{OTag:c,OStack:B},setup:()=>({args:e,tones:["neutral","primary","danger","success","warning"]}),template:`
      <OStack :gap="2" wrap>
        <OTag v-for="t in tones" :key="t" v-bind="args" :tone="t">{{ t }}</OTag>
      </OStack>`})},a={render:e=>({components:{OTag:c,OStack:B},setup:()=>({args:e,tags:["vue","design-system","accessibility"]}),template:`
      <OStack :gap="2" wrap>
        <OTag v-for="t in tags" :key="t" v-bind="args" removable :remove-label="'Remove ' + t">
          {{ t }}
        </OTag>
      </OStack>`})},o={args:{removable:!0,disabled:!0},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}},n={args:{removable:!0,removeLabel:"Remove design-system"},play:async({canvasElement:e,args:x})=>{const C=N(e);await A.click(C.getByRole("button",{name:"Remove design-system"})),await D(x.onRemove).toHaveBeenCalledTimes(1)}};var m,i,l;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var d,p,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    removable: true,
    removeLabel: 'Remove design-system'
  }
}`,...(g=(p=s.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,v,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    components: {
      OTag,
      OStack
    },
    setup: () => ({
      args,
      tones: ['neutral', 'primary', 'danger', 'success', 'warning'] as const
    }),
    template: \`
      <OStack :gap="2" wrap>
        <OTag v-for="t in tones" :key="t" v-bind="args" :tone="t">{{ t }}</OTag>
      </OStack>\`
  })
}`,...(b=(v=r.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var y,O,f,T,k;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => ({
    components: {
      OTag,
      OStack
    },
    setup: () => ({
      args,
      tags: ['vue', 'design-system', 'accessibility']
    }),
    template: \`
      <OStack :gap="2" wrap>
        <OTag v-for="t in tags" :key="t" v-bind="args" removable :remove-label="'Remove ' + t">
          {{ t }}
        </OTag>
      </OStack>\`
  })
}`,...(f=(O=a.parameters)==null?void 0:O.docs)==null?void 0:f.source},description:{story:`Each remove button is named after its own tag. Five identical "Remove" buttons
tell a screen-reader user nothing about which one they are about to delete.`,...(k=(T=a.parameters)==null?void 0:T.docs)==null?void 0:k.description}}};var R,S,w;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    removable: true,
    disabled: true
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
}`,...(w=(S=o.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var h,_,E;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    removable: true,
    removeLabel: 'Remove design-system'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Remove design-system'
    }));
    await expect(args.onRemove).toHaveBeenCalledTimes(1);
  }
}`,...(E=(_=n.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};const M=["Default","Removable","Tones","NamedRemoveButtons","Disabled","RemoveEmits"];export{t as Default,o as Disabled,a as NamedRemoveButtons,s as Removable,n as RemoveEmits,r as Tones,M as __namedExportsOrder,K as default};
