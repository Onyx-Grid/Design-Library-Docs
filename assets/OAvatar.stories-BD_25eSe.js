import{_ as o}from"./OAvatar.vue_vue_type_style_index_0_lang-B7RtgaTv.js";import{_ as i}from"./OStack.vue_vue_type_style_index_0_lang-CjZC0m5n.js";import{_ as w}from"./OText.vue_vue_type_style_index_0_lang-7AbyyjLC.js";import"./iframe-CmLobRcQ.js";import"./preload-helper-Dp1pzeXC.js";import"./style-HaLhxVKJ.js";const C={title:"Components/OAvatar",component:o,tags:["autodocs"],args:{name:"Ada Lovelace"},parameters:{docs:{description:{component:"Three states in priority order: the image, then initials from `name`, then a\nneutral placeholder. The fallback also covers an image that 404s at runtime —\nthe case a bare `<img>` leaves as a broken-image icon."}}}},r={},s={render:c=>({components:{OAvatar:o,OStack:i},setup:()=>({args:c,sizes:["sm","md","lg"]}),template:`
      <OStack :gap="3" align="center">
        <OAvatar v-for="s in sizes" :key="s" v-bind="args" :size="s" />
      </OStack>`})},t={render:c=>({components:{OAvatar:o,OStack:i},setup:()=>({args:c}),template:`
      <OStack :gap="3" align="center">
        <OAvatar v-bind="args" shape="circle" />
        <OAvatar v-bind="args" shape="square" />
      </OStack>`})},e={render:()=>({components:{OAvatar:o,OStack:i,OText:w},setup:()=>({names:["Ada Lovelace","Ada Byron Lovelace","Prince",""]}),template:`
      <OStack :gap="4" align="center" wrap>
        <OStack v-for="(n, i) in names" :key="i" direction="column" :gap="2" align="center">
          <OAvatar :name="n" size="lg" />
          <OText size="xs" tone="muted">{{ n || '(no name)' }}</OText>
        </OStack>
      </OStack>`})},a={args:{src:"https://example.invalid/missing.png",name:"Ada Lovelace",size:"lg"}},n={args:{name:void 0,size:"lg"}};var m,p,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,g,O;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => ({
    components: {
      OAvatar,
      OStack
    },
    setup: () => ({
      args,
      sizes: ['sm', 'md', 'lg'] as const
    }),
    template: \`
      <OStack :gap="3" align="center">
        <OAvatar v-for="s in sizes" :key="s" v-bind="args" :size="s" />
      </OStack>\`
  })
}`,...(O=(g=s.parameters)==null?void 0:g.docs)==null?void 0:O.source}}};var u,v,k;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => ({
    components: {
      OAvatar,
      OStack
    },
    setup: () => ({
      args
    }),
    template: \`
      <OStack :gap="3" align="center">
        <OAvatar v-bind="args" shape="circle" />
        <OAvatar v-bind="args" shape="square" />
      </OStack>\`
  })
}`,...(k=(v=t.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var S,A,h,f,z;e.parameters={...e.parameters,docs:{...(S=e.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => ({
    components: {
      OAvatar,
      OStack,
      OText
    },
    setup: () => ({
      names: ['Ada Lovelace', 'Ada Byron Lovelace', 'Prince', '']
    }),
    template: \`
      <OStack :gap="4" align="center" wrap>
        <OStack v-for="(n, i) in names" :key="i" direction="column" :gap="2" align="center">
          <OAvatar :name="n" size="lg" />
          <OText size="xs" tone="muted">{{ n || '(no name)' }}</OText>
        </OStack>
      </OStack>\`
  })
}`,...(h=(A=e.parameters)==null?void 0:A.docs)==null?void 0:h.source},description:{story:"Initials come from the first and last words, so middle names do not win.",...(z=(f=e.parameters)==null?void 0:f.docs)==null?void 0:z.description}}};var b,x,_,y,I;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    src: 'https://example.invalid/missing.png',
    name: 'Ada Lovelace',
    size: 'lg'
  }
}`,...(_=(x=a.parameters)==null?void 0:x.docs)==null?void 0:_.source},description:{story:"A broken URL falls back to initials rather than showing a broken image.",...(I=(y=a.parameters)==null?void 0:y.docs)==null?void 0:I.description}}};var L,T,B;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    name: undefined,
    size: 'lg'
  }
}`,...(B=(T=n.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};const E=["Initials","Sizes","Shapes","InitialsRule","BrokenImageFallsBack","NoNameOrImage"];export{a as BrokenImageFallsBack,r as Initials,e as InitialsRule,n as NoNameOrImage,t as Shapes,s as Sizes,E as __namedExportsOrder,C as default};
