import{d as b,c as r,F as _,v as A,y as c,n as B,j as $,o as s}from"./iframe-CmLobRcQ.js";import{_ as f}from"./OStack.vue_vue_type_style_index_0_lang-CjZC0m5n.js";import{_ as I}from"./OCard.vue_vue_type_style_index_0_lang-BzvqfVzA.js";import"./preload-helper-Dp1pzeXC.js";import"./style-HaLhxVKJ.js";import"./OBox.vue_vue_type_style_index_0_lang-DUA_bRL8.js";import"./OSeparator.vue_vue_type_style_index_0_lang-Cte52qLG.js";const i=b({__name:"OSkeleton",props:{shape:{default:"rect"},width:{default:void 0},height:{default:void 0},radius:{default:"md"},lines:{default:3}},setup(e){const a=e,l=$(()=>({...a.width?{"--_w":a.width}:{},...a.height?{"--_h":a.height}:{}}));return(T,z)=>e.shape==="text"?(s(),r("span",{key:0,class:"o-skeleton o-skeleton--text",style:c(l.value),"aria-hidden":"true"},[(s(!0),r(_,null,A(e.lines,C=>(s(),r("span",{key:C,class:"o-skeleton__line"}))),128))],4)):(s(),r("span",{key:1,class:B(["o-skeleton",[`o-skeleton--${e.shape}`,`o-skeleton--radius-${e.radius}`]]),style:c(l.value),"aria-hidden":"true"},null,6))}}),H={title:"Components/OSkeleton",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Always hidden from assistive tech — a screen reader reading out a row of grey\nboxes is worse than silence. Announce the load once, from the container, with\n`aria-busy` and a live region."}}}},o={render:()=>({components:{OSkeleton:i,OStack:f},template:`
      <OStack direction="column" :gap="5" style="max-width: 24rem">
        <OSkeleton width="12rem" height="1.5rem" />
        <OSkeleton shape="circle" width="3rem" />
        <OSkeleton shape="text" :lines="3" />
      </OStack>`})},t={args:{shape:"text",lines:4},render:e=>({components:{OSkeleton:i},setup:()=>({args:e}),template:'<div style="max-width: 26rem"><OSkeleton v-bind="args" /></div>'})},n={render:()=>({components:{OSkeleton:i,OStack:f,OCard:I},template:`
      <div aria-busy="true" style="max-width: 22rem">
        <OCard>
          <template #header>
            <OStack :gap="3" align="center">
              <OSkeleton shape="circle" width="2.5rem" />
              <OSkeleton width="8rem" height="1rem" />
            </OStack>
          </template>
          <OSkeleton shape="text" :lines="3" />
        </OCard>
      </div>`})};var d,m,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => ({
    components: {
      OSkeleton,
      OStack
    },
    template: \`
      <OStack direction="column" :gap="5" style="max-width: 24rem">
        <OSkeleton width="12rem" height="1.5rem" />
        <OSkeleton shape="circle" width="3rem" />
        <OSkeleton shape="text" :lines="3" />
      </OStack>\`
  })
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,k,u,O,S;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    shape: 'text',
    lines: 4
  },
  render: args => ({
    components: {
      OSkeleton
    },
    setup: () => ({
      args
    }),
    template: \`<div style="max-width: 26rem"><OSkeleton v-bind="args" /></div>\`
  })
}`,...(u=(k=t.parameters)==null?void 0:k.docs)==null?void 0:u.source},description:{story:"The last bar is short, because real paragraphs do not end flush with the margin.",...(S=(O=t.parameters)==null?void 0:O.docs)==null?void 0:S.description}}};var g,y,w,x,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => ({
    components: {
      OSkeleton,
      OStack,
      OCard
    },
    template: \`
      <div aria-busy="true" style="max-width: 22rem">
        <OCard>
          <template #header>
            <OStack :gap="3" align="center">
              <OSkeleton shape="circle" width="2.5rem" />
              <OSkeleton width="8rem" height="1rem" />
            </OStack>
          </template>
          <OSkeleton shape="text" :lines="3" />
        </OCard>
      </div>\`
  })
}`,...(w=(y=n.parameters)==null?void 0:y.docs)==null?void 0:w.source},description:{story:"In place: the card announces the load once via `aria-busy`, and every skeleton\ninside stays out of the accessibility tree.",...(v=(x=n.parameters)==null?void 0:x.docs)==null?void 0:v.description}}};const J=["Shapes","TextBlock","InACard"];export{n as InACard,o as Shapes,t as TextBlock,J as __namedExportsOrder,H as default};
