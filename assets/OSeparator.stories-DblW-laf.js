import{_ as r}from"./OSeparator.vue_vue_type_style_index_0_lang-Cte52qLG.js";import{_ as O}from"./OStack.vue_vue_type_style_index_0_lang-CjZC0m5n.js";import{_ as c}from"./OText.vue_vue_type_style_index_0_lang-7AbyyjLC.js";import"./iframe-CmLobRcQ.js";import"./preload-helper-Dp1pzeXC.js";import"./style-HaLhxVKJ.js";const S={title:"Components/OSeparator",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Renders `<hr>`, whose implicit ARIA role is `separator`, so it reads as a\ndivider rather than as an unexplained painted line. Mark it `decorative` when\nthe surrounding markup already conveys the grouping."}}}},e={render:()=>({components:{OSeparator:r,OText:c},template:`
      <div>
        <OText>Above the rule</OText>
        <OSeparator :spacing="4" />
        <OText>Below the rule</OText>
      </div>`})},t={render:()=>({components:{OSeparator:r,OStack:O,OText:c},template:`
      <OStack :gap="3" align="center">
        <OText>Drafts</OText>
        <OSeparator orientation="vertical" />
        <OText>Published</OText>
        <OSeparator orientation="vertical" />
        <OText>Archived</OText>
      </OStack>`})};var a,n,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => ({
    components: {
      OSeparator,
      OText
    },
    template: \`
      <div>
        <OText>Above the rule</OText>
        <OSeparator :spacing="4" />
        <OText>Below the rule</OText>
      </div>\`
  })
}`,...(o=(n=e.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var i,s,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => ({
    components: {
      OSeparator,
      OStack,
      OText
    },
    template: \`
      <OStack :gap="3" align="center">
        <OText>Drafts</OText>
        <OSeparator orientation="vertical" />
        <OText>Published</OText>
        <OSeparator orientation="vertical" />
        <OText>Archived</OText>
      </OStack>\`
  })
}`,...(p=(s=t.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const h=["Horizontal","Vertical"];export{e as Horizontal,t as Vertical,h as __namedExportsOrder,S as default};
