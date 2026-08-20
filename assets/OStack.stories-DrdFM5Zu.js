import{_ as a}from"./OStack.vue_vue_type_style_index_0_lang-CjZC0m5n.js";import{_ as r}from"./OBox.vue_vue_type_style_index_0_lang-DUA_bRL8.js";import"./iframe-CmLobRcQ.js";import"./preload-helper-Dp1pzeXC.js";import"./style-HaLhxVKJ.js";const W={title:"Components/OStack",component:a,tags:["autodocs"],args:{gap:3},parameters:{docs:{description:{component:"The workhorse layout primitive: a flex container whose `gap` is a step on the\nspacing scale, not a length. It arranges children and does nothing else —\npadding, background and borders live on `OBox`, so neither component grows the\nother's props."}}}},$=(e=4)=>({components:{OBox:r},template:Array.from({length:e}).map((C,j)=>`<OBox surface="sunken" radius="md" padding="4" border>Item ${j+1}</OBox>`).join("")}),o={render:e=>({components:{OStack:a,OBox:r},setup:()=>({args:e}),template:`<OStack v-bind="args">${$().template}</OStack>`})},t={args:{direction:"column"},render:e=>({components:{OStack:a,OBox:r},setup:()=>({args:e}),template:`<OStack v-bind="args">${$(3).template}</OStack>`})},s={render:()=>({components:{OStack:a,OBox:r},setup:()=>({steps:[1,2,3,4,6,8]}),template:`
      <OStack direction="column" :gap="4">
        <OStack v-for="s in steps" :key="s" :gap="s" align="center">
          <OBox surface="sunken" padding="2" radius="sm" style="min-width: 4rem">gap {{ s }}</OBox>
          <OBox surface="raised" padding="2" radius="sm" border>a</OBox>
          <OBox surface="raised" padding="2" radius="sm" border>b</OBox>
          <OBox surface="raised" padding="2" radius="sm" border>c</OBox>
        </OStack>
      </OStack>`})},d={render:()=>({components:{OStack:a,OBox:r},setup:()=>({modes:["start","center","end","between","around","evenly"]}),template:`
      <OStack direction="column" :gap="3">
        <OBox v-for="m in modes" :key="m" surface="sunken" padding="2" radius="md">
          <OStack :gap="2" :justify="m">
            <OBox surface="raised" padding="2" radius="sm" border>{{ m }}</OBox>
            <OBox surface="raised" padding="2" radius="sm" border>b</OBox>
            <OBox surface="raised" padding="2" radius="sm" border>c</OBox>
          </OStack>
        </OBox>
      </OStack>`})},n={args:{wrap:!0,gap:2},render:e=>({components:{OStack:a,OBox:r},setup:()=>({args:e}),template:`
      <div style="max-width: 20rem">
        <OStack v-bind="args">
          <OBox v-for="i in 12" :key="i" surface="sunken" padding="2" radius="full" border>
            tag {{ i }}
          </OBox>
        </OStack>
      </div>`})};var c,i,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
    components: {
      OStack,
      OBox
    },
    setup: () => ({
      args
    }),
    template: \`<OStack v-bind="args">\${swatches().template}</OStack>\`
  })
}`,...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,u,O;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    direction: 'column'
  },
  render: args => ({
    components: {
      OStack,
      OBox
    },
    setup: () => ({
      args
    }),
    template: \`<OStack v-bind="args">\${swatches(3).template}</OStack>\`
  })
}`,...(O=(u=t.parameters)==null?void 0:u.docs)==null?void 0:O.source}}};var g,l,k,x,B;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => ({
    components: {
      OStack,
      OBox
    },
    setup: () => ({
      steps: [1, 2, 3, 4, 6, 8] as const
    }),
    template: \`
      <OStack direction="column" :gap="4">
        <OStack v-for="s in steps" :key="s" :gap="s" align="center">
          <OBox surface="sunken" padding="2" radius="sm" style="min-width: 4rem">gap {{ s }}</OBox>
          <OBox surface="raised" padding="2" radius="sm" border>a</OBox>
          <OBox surface="raised" padding="2" radius="sm" border>b</OBox>
          <OBox surface="raised" padding="2" radius="sm" border>c</OBox>
        </OStack>
      </OStack>\`
  })
}`,...(k=(l=s.parameters)==null?void 0:l.docs)==null?void 0:k.source},description:{story:"Every step of the spacing scale, so the rhythm is visible in one place.",...(B=(x=s.parameters)==null?void 0:x.docs)==null?void 0:B.description}}};var S,f,b;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => ({
    components: {
      OStack,
      OBox
    },
    setup: () => ({
      modes: ['start', 'center', 'end', 'between', 'around', 'evenly'] as const
    }),
    template: \`
      <OStack direction="column" :gap="3">
        <OBox v-for="m in modes" :key="m" surface="sunken" padding="2" radius="md">
          <OStack :gap="2" :justify="m">
            <OBox surface="raised" padding="2" radius="sm" border>{{ m }}</OBox>
            <OBox surface="raised" padding="2" radius="sm" border>b</OBox>
            <OBox surface="raised" padding="2" radius="sm" border>c</OBox>
          </OStack>
        </OBox>
      </OStack>\`
  })
}`,...(b=(f=d.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var h,v,y,w,_;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    wrap: true,
    gap: 2
  },
  render: args => ({
    components: {
      OStack,
      OBox
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="max-width: 20rem">
        <OStack v-bind="args">
          <OBox v-for="i in 12" :key="i" surface="sunken" padding="2" radius="full" border>
            tag {{ i }}
          </OBox>
        </OStack>
      </div>\`
  })
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source},description:{story:"`wrap` is what keeps a row of tags from overflowing a narrow container.",...(_=(w=n.parameters)==null?void 0:w.docs)==null?void 0:_.description}}};const A=["Row","Column","GapScale","Justify","Wrap"];export{t as Column,s as GapScale,d as Justify,o as Row,n as Wrap,A as __namedExportsOrder,W as default};
