import{_ as e}from"./OText.vue_vue_type_style_index_0_lang-7AbyyjLC.js";import{_ as i}from"./OStack.vue_vue_type_style_index_0_lang-CjZC0m5n.js";import"./iframe-CmLobRcQ.js";import"./preload-helper-Dp1pzeXC.js";import"./style-HaLhxVKJ.js";const W={title:"Components/OText",component:e,tags:["autodocs"],args:{default:"The quick brown fox jumps over the lazy dog."},render:E=>({components:{OText:e},setup:()=>({args:E}),template:'<OText v-bind="args">{{ args.default }}</OText>'}),parameters:{docs:{description:{component:"The typography primitive. `as` and the visual props are independent on purpose:\nheading LEVEL is document structure, size is presentation. Tying them together\nis how documents end up with an `<h4>` picked because it looked right, leaving\nscreen-reader users navigating a broken outline."}}}},s={},a={render:()=>({components:{OText:e,OStack:i},setup:()=>({sizes:["xs","sm","base","lg","xl","2xl","3xl","4xl"]}),template:`
      <OStack direction="column" :gap="3">
        <OText v-for="s in sizes" :key="s" :size="s">{{ s }} — Onyx design system</OText>
      </OStack>`})},n={render:()=>({components:{OText:e,OStack:i},setup:()=>({tones:["neutral","muted","primary","danger","success","warning"]}),template:`
      <OStack direction="column" :gap="2">
        <OText v-for="t in tones" :key="t" :tone="t">{{ t }} — the quick brown fox</OText>
      </OStack>`})},r={render:()=>({components:{OText:e,OStack:i},setup:()=>({weights:["regular","medium","semibold","bold"]}),template:`
      <OStack direction="column" :gap="2">
        <OText v-for="w in weights" :key="w" :weight="w" size="lg">{{ w }}</OText>
      </OStack>`})},t={args:{as:"h2",size:"sm",weight:"semibold",default:"A small-looking h2"}},o={render:()=>({components:{OText:e,OStack:i},template:`
      <OStack direction="column" :gap="4" style="max-width: 22rem">
        <OText truncate>Single line, truncated with an ellipsis when it runs out of room.</OText>
        <OText :lines="2">
          Clamped to two lines. Everything past the second line is hidden, which is what you
          want for a card description that must not push the card taller than its neighbours.
        </OText>
      </OStack>`})};var c,m,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,l,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => ({
    components: {
      OText,
      OStack
    },
    setup: () => ({
      sizes: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl', '4xl'] as const
    }),
    template: \`
      <OStack direction="column" :gap="3">
        <OText v-for="s in sizes" :key="s" :size="s">{{ s }} — Onyx design system</OText>
      </OStack>\`
  })
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,h,O;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => ({
    components: {
      OText,
      OStack
    },
    setup: () => ({
      tones: ['neutral', 'muted', 'primary', 'danger', 'success', 'warning'] as const
    }),
    template: \`
      <OStack direction="column" :gap="2">
        <OText v-for="t in tones" :key="t" :tone="t">{{ t }} — the quick brown fox</OText>
      </OStack>\`
  })
}`,...(O=(h=n.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var x,T,k;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => ({
    components: {
      OText,
      OStack
    },
    setup: () => ({
      weights: ['regular', 'medium', 'semibold', 'bold'] as const
    }),
    template: \`
      <OStack direction="column" :gap="2">
        <OText v-for="w in weights" :key="w" :weight="w" size="lg">{{ w }}</OText>
      </OStack>\`
  })
}`,...(k=(T=r.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var w,S,y,f,b;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    as: 'h2',
    size: 'sm',
    weight: 'semibold',
    default: 'A small-looking h2'
  }
}`,...(y=(S=t.parameters)==null?void 0:S.docs)==null?void 0:y.source},description:{story:"Structure and appearance stay independent — this is an `h2` that reads small.",...(b=(f=t.parameters)==null?void 0:f.docs)==null?void 0:b.description}}};var v,z,_;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => ({
    components: {
      OText,
      OStack
    },
    template: \`
      <OStack direction="column" :gap="4" style="max-width: 22rem">
        <OText truncate>Single line, truncated with an ellipsis when it runs out of room.</OText>
        <OText :lines="2">
          Clamped to two lines. Everything past the second line is hidden, which is what you
          want for a card description that must not push the card taller than its neighbours.
        </OText>
      </OStack>\`
  })
}`,...(_=(z=o.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};const j=["Default","TypeScale","Tones","Weights","SemanticElement","Truncate"];export{s as Default,t as SemanticElement,n as Tones,o as Truncate,a as TypeScale,r as Weights,j as __namedExportsOrder,W as default};
