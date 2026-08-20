import{_ as e}from"./OBox.vue_vue_type_style_index_0_lang-DUA_bRL8.js";import{_ as c}from"./OStack.vue_vue_type_style_index_0_lang-CjZC0m5n.js";import"./iframe-CmLobRcQ.js";import"./preload-helper-Dp1pzeXC.js";import"./style-HaLhxVKJ.js";const N={title:"Components/OBox",component:e,tags:["autodocs"],args:{padding:4,surface:"surface",radius:"lg",border:!0},render:A=>({components:{OBox:e},setup:()=>({args:A}),template:'<OBox v-bind="args">Box content</OBox>'}),parameters:{docs:{description:{component:`The container that carries surface decoration. Every value is a token step, so
a Box cannot introduce a length, colour or shadow from outside the system.`}}}},o={},s={render:()=>({components:{OBox:e,OStack:c},setup:()=>({roles:["none","surface","raised","sunken"]}),template:`
      <OStack :gap="3" wrap>
        <OBox v-for="r in roles" :key="r" :surface="r" padding="4" radius="lg" border>
          {{ r }}
        </OBox>
      </OStack>`})},t={render:()=>({components:{OBox:e,OStack:c},setup:()=>({levels:[0,1,2,3,4]}),template:`
      <OStack :gap="5" wrap align="center">
        <OBox v-for="e in levels" :key="e" surface="surface" :elevation="e" padding="5" radius="lg">
          elevation {{ e }}
        </OBox>
      </OStack>`})},n={render:()=>({components:{OBox:e,OStack:c},setup:()=>({radii:["none","sm","md","lg","xl","2xl","full"]}),template:`
      <OStack :gap="3" wrap align="center">
        <OBox v-for="r in radii" :key="r" surface="sunken" :radius="r" padding="4" border>
          {{ r }}
        </OBox>
      </OStack>`})},r={args:{padding:4,paddingX:8,surface:"sunken",radius:"md",border:!0}},a={render:()=>({components:{OBox:e,OStack:c},template:`
      <OBox surface="surface" :elevation="2" radius="xl" padding="6" style="max-width: 22rem">
        <OStack direction="column" :gap="3">
          <strong>Composed card</strong>
          <span class="text-muted">OBox for the surface, OStack for the rhythm.</span>
        </OStack>
      </OBox>`})};var d,i,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(i=o.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var u,m,l;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => ({
    components: {
      OBox,
      OStack
    },
    setup: () => ({
      roles: ['none', 'surface', 'raised', 'sunken'] as const
    }),
    template: \`
      <OStack :gap="3" wrap>
        <OBox v-for="r in roles" :key="r" :surface="r" padding="4" radius="lg" border>
          {{ r }}
        </OBox>
      </OStack>\`
  })
}`,...(l=(m=s.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var O,g,x;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => ({
    components: {
      OBox,
      OStack
    },
    setup: () => ({
      levels: [0, 1, 2, 3, 4] as const
    }),
    template: \`
      <OStack :gap="5" wrap align="center">
        <OBox v-for="e in levels" :key="e" surface="surface" :elevation="e" padding="5" radius="lg">
          elevation {{ e }}
        </OBox>
      </OStack>\`
  })
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,k,S;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => ({
    components: {
      OBox,
      OStack
    },
    setup: () => ({
      radii: ['none', 'sm', 'md', 'lg', 'xl', '2xl', 'full'] as const
    }),
    template: \`
      <OStack :gap="3" wrap align="center">
        <OBox v-for="r in radii" :key="r" surface="sunken" :radius="r" padding="4" border>
          {{ r }}
        </OBox>
      </OStack>\`
  })
}`,...(S=(k=n.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var B,h,v,y,b;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    padding: 4,
    paddingX: 8,
    surface: 'sunken',
    radius: 'md',
    border: true
  }
}`,...(v=(h=r.parameters)==null?void 0:h.docs)==null?void 0:v.source},description:{story:"`padding` sets all four sides; an axis prop overrides just that axis and leaves\nthe other at the all-round value.",...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.description}}};var w,_,C,E,j;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => ({
    components: {
      OBox,
      OStack
    },
    template: \`
      <OBox surface="surface" :elevation="2" radius="xl" padding="6" style="max-width: 22rem">
        <OStack direction="column" :gap="3">
          <strong>Composed card</strong>
          <span class="text-muted">OBox for the surface, OStack for the rhythm.</span>
        </OStack>
      </OBox>\`
  })
}`,...(C=(_=a.parameters)==null?void 0:_.docs)==null?void 0:C.source},description:{story:"Composition: OBox decorates, OStack arranges. Neither does the other's job.",...(j=(E=a.parameters)==null?void 0:E.docs)==null?void 0:j.description}}};const T=["Default","Surfaces","Elevation","Radii","AxisPadding","WithStack"];export{r as AxisPadding,o as Default,t as Elevation,n as Radii,s as Surfaces,a as WithStack,T as __namedExportsOrder,N as default};
