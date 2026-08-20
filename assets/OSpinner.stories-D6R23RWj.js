import{d as L,c as p,b as A,t as D,a as $,n as E,j as I,o as d}from"./iframe-CmLobRcQ.js";import{_ as i}from"./OStack.vue_vue_type_style_index_0_lang-CjZC0m5n.js";import{_ as N}from"./OText.vue_vue_type_style_index_0_lang-7AbyyjLC.js";import"./preload-helper-Dp1pzeXC.js";import"./style-HaLhxVKJ.js";const V=["role","aria-live","aria-hidden"],j={key:0,class:"visually-hidden"},r=L({__name:"OSpinner",props:{size:{default:"md"},label:{default:void 0}},setup(o){const c=o,a=I(()=>c.label!==void 0&&c.label!=="");return(q,l)=>(d(),p("span",{class:E(["o-spinner",`o-spinner--${o.size}`]),role:a.value?"status":void 0,"aria-live":a.value?"polite":void 0,"aria-hidden":a.value?void 0:"true"},[l[0]||(l[0]=A("span",{class:"o-spinner__ring"},null,-1)),a.value?(d(),p("span",j,D(o.label),1)):$("",!0)],10,V))}}),M={title:"Components/OSpinner",component:r,tags:["autodocs"],parameters:{docs:{description:{component:'Decorative by default. A spinner next to the words "Loading results" is a\nsecond announcement of the same fact — give it a `label` only when it is the\nsole indicator, and it becomes a polite live region.'}}}},t={render:()=>({components:{OSpinner:r,OStack:i},setup:()=>({sizes:["sm","md","lg"]}),template:`
      <OStack :gap="5" align="center">
        <OSpinner v-for="s in sizes" :key="s" :size="s" />
      </OStack>`})},e={render:()=>({components:{OSpinner:r,OStack:i,OText:N},template:`
      <OStack :gap="2" align="center">
        <OSpinner />
        <OText tone="muted">Loading results…</OText>
      </OStack>`})},n={args:{label:"Loading results"}},s={render:()=>({components:{OSpinner:r,OStack:i},template:`
      <OStack :gap="5" align="center">
        <span style="color: var(--color-primary)"><OSpinner size="lg" /></span>
        <span style="color: var(--color-danger)"><OSpinner size="lg" /></span>
        <span style="color: var(--color-text-muted)"><OSpinner size="lg" /></span>
      </OStack>`})};var m,u,S;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => ({
    components: {
      OSpinner,
      OStack
    },
    setup: () => ({
      sizes: ['sm', 'md', 'lg'] as const
    }),
    template: \`
      <OStack :gap="5" align="center">
        <OSpinner v-for="s in sizes" :key="s" :size="s" />
      </OStack>\`
  })
}`,...(S=(u=t.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var O,g,v,k,y;e.parameters={...e.parameters,docs:{...(O=e.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => ({
    components: {
      OSpinner,
      OStack,
      OText
    },
    template: \`
      <OStack :gap="2" align="center">
        <OSpinner />
        <OText tone="muted">Loading results…</OText>
      </OStack>\`
  })
}`,...(v=(g=e.parameters)==null?void 0:g.docs)==null?void 0:v.source},description:{story:"Decorative — the visible text is what gets announced.",...(y=(k=e.parameters)==null?void 0:k.docs)==null?void 0:y.description}}};var f,z,x,_,h;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Loading results'
  }
}`,...(x=(z=n.parameters)==null?void 0:z.docs)==null?void 0:x.source},description:{story:"Standalone — now it needs a label, and announces politely.",...(h=(_=n.parameters)==null?void 0:_.docs)==null?void 0:h.description}}};var b,C,T,w,B;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => ({
    components: {
      OSpinner,
      OStack
    },
    template: \`
      <OStack :gap="5" align="center">
        <span style="color: var(--color-primary)"><OSpinner size="lg" /></span>
        <span style="color: var(--color-danger)"><OSpinner size="lg" /></span>
        <span style="color: var(--color-text-muted)"><OSpinner size="lg" /></span>
      </OStack>\`
  })
}`,...(T=(C=s.parameters)==null?void 0:C.docs)==null?void 0:T.source},description:{story:"Colour comes from `currentColor`, so it follows its container with no token of its own.",...(B=(w=s.parameters)==null?void 0:w.docs)==null?void 0:B.description}}};const P=["Sizes","BesideText","Announced","InheritsColour"];export{n as Announced,e as BesideText,s as InheritsColour,t as Sizes,P as __namedExportsOrder,M as default};
