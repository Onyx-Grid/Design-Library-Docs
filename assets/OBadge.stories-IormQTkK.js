import{_ as a}from"./OBadge.vue_vue_type_style_index_0_lang-Bkp2Qy9-.js";import{_ as r}from"./OStack.vue_vue_type_style_index_0_lang-CjZC0m5n.js";import"./iframe-CmLobRcQ.js";import"./preload-helper-Dp1pzeXC.js";import"./style-HaLhxVKJ.js";const w={title:"Components/OBadge",component:a,tags:["autodocs"],args:{default:"Active"},render:f=>({components:{OBadge:a},setup:()=>({args:f}),template:'<OBadge v-bind="args">{{ args.default }}</OBadge>'}),parameters:{docs:{description:{component:"A small, non-interactive status marker. Its emphasis set is narrower than a\nbutton's — `ghost` and `link` are interaction affordances, and a badge is not\ninteractive, so `subtle` takes their place and is the default."}}}},n={},t={render:()=>({components:{OBadge:a,OStack:r},setup:()=>({variants:["solid","subtle","outline"],tones:["neutral","primary","danger","success","warning"]}),template:`
      <OStack direction="column" :gap="3">
        <OStack v-for="v in variants" :key="v" :gap="2" align="center">
          <OBadge v-for="t in tones" :key="t" :variant="v" :tone="t">{{ t }}</OBadge>
        </OStack>
      </OStack>`})},s={render:()=>({components:{OBadge:a,OStack:r},template:`
      <OStack :gap="3" align="center">
        <OBadge size="sm" tone="success">Small</OBadge>
        <OBadge size="md" tone="success">Medium</OBadge>
      </OStack>`})},e={render:()=>({components:{OBadge:a,OStack:r},template:`
      <OStack :gap="2">
        <OBadge tone="success">Paid</OBadge>
        <OBadge tone="warning">Pending</OBadge>
        <OBadge tone="danger">Overdue</OBadge>
      </OStack>`})};var o,c,d;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var i,g,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => ({
    components: {
      OBadge,
      OStack
    },
    setup: () => ({
      variants: ['solid', 'subtle', 'outline'] as const,
      tones: ['neutral', 'primary', 'danger', 'success', 'warning'] as const
    }),
    template: \`
      <OStack direction="column" :gap="3">
        <OStack v-for="v in variants" :key="v" :gap="2" align="center">
          <OBadge v-for="t in tones" :key="t" :variant="v" :tone="t">{{ t }}</OBadge>
        </OStack>
      </OStack>\`
  })
}`,...(m=(g=t.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var p,O,l;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    components: {
      OBadge,
      OStack
    },
    template: \`
      <OStack :gap="3" align="center">
        <OBadge size="sm" tone="success">Small</OBadge>
        <OBadge size="md" tone="success">Medium</OBadge>
      </OStack>\`
  })
}`,...(l=(O=s.parameters)==null?void 0:O.docs)==null?void 0:l.source}}};var u,B,S,k,v;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => ({
    components: {
      OBadge,
      OStack
    },
    template: \`
      <OStack :gap="2">
        <OBadge tone="success">Paid</OBadge>
        <OBadge tone="warning">Pending</OBadge>
        <OBadge tone="danger">Overdue</OBadge>
      </OStack>\`
  })
}`,...(S=(B=e.parameters)==null?void 0:B.docs)==null?void 0:S.source},description:{story:`The label carries the meaning, not the colour. Colour alone fails WCAG 1.4.1 —
"green" tells a screen-reader user nothing, and neither does it tell a
colour-blind user.`,...(v=(k=e.parameters)==null?void 0:k.docs)==null?void 0:v.description}}};const A=["Default","VariantsAndTones","Sizes","LabelCarriesMeaning"];export{n as Default,e as LabelCarriesMeaning,s as Sizes,t as VariantsAndTones,A as __namedExportsOrder,w as default};
