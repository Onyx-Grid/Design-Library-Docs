import{d as p,o,c as s,t as f,a as b,b as O,C as h,D as y,n as w}from"./iframe-CmLobRcQ.js";import{_ as v}from"./OStack.vue_vue_type_style_index_0_lang-CjZC0m5n.js";import{_ as k}from"./OCard.vue_vue_type_style_index_0_lang-BzvqfVzA.js";import{_ as x}from"./OText.vue_vue_type_style_index_0_lang-7AbyyjLC.js";import"./preload-helper-Dp1pzeXC.js";import"./style-HaLhxVKJ.js";import"./OBox.vue_vue_type_style_index_0_lang-DUA_bRL8.js";import"./OSeparator.vue_vue_type_style_index_0_lang-Cte52qLG.js";const C=["width","height","role","aria-hidden","aria-label"],S={key:0},_=p({__name:"OIconDrag",props:{size:{default:"1em"},label:{default:void 0}},setup(e){return(g,t)=>(o(),s("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:e.size,height:e.size,fill:"none",focusable:"false",role:e.label?"img":void 0,"aria-hidden":e.label?void 0:!0,"aria-label":e.label},[e.label?(o(),s("title",S,f(e.label),1)):b("",!0),t[0]||(t[0]=O("path",{d:"M9 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM18 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",fill:"currentColor"},null,-1))],8,C))}}),u=p({__name:"ODragHandle",props:{disabled:{type:Boolean,default:!1}},setup(e){return(g,t)=>(o(),s("span",{class:w(["o-drag-handle",{"o-drag-handle--disabled":e.disabled}]),"aria-hidden":"true"},[h(y(_))],2))}}),M={title:"Components/ODragHandle",component:u,tags:["autodocs"],parameters:{docs:{description:{component:`A visual affordance only — it renders a grip and nothing else.

Pointer-only drag-and-drop is inaccessible, so whatever owns the list must ALSO
provide a keyboard-operable way to reorder (move up/down buttons, or a menu).
The handle stays out of the accessibility tree so it does not advertise an
interaction keyboard users cannot perform.`}}}},a={render:()=>({components:{ODragHandle:u,OStack:v,OCard:k,OText:x},setup:()=>({rows:["Overview","Billing","Members","Integrations"]}),template:`
      <OStack direction="column" :gap="2" style="width: 18rem">
        <OCard v-for="r in rows" :key="r" :padding="3" :elevation="0" border>
          <OStack :gap="3" align="center">
            <ODragHandle />
            <OText size="sm">{{ r }}</OText>
          </OStack>
        </OCard>
      </OStack>`})},r={args:{disabled:!0},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}};var n,i,d;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ODragHandle,
      OStack,
      OCard,
      OText
    },
    setup: () => ({
      rows: ['Overview', 'Billing', 'Members', 'Integrations']
    }),
    template: \`
      <OStack direction="column" :gap="2" style="width: 18rem">
        <OCard v-for="r in rows" :key="r" :padding="3" :elevation="0" border>
          <OStack :gap="3" align="center">
            <ODragHandle />
            <OText size="sm">{{ r }}</OText>
          </OStack>
        </OCard>
      </OStack>\`
  })
}`,...(d=(i=a.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var l,c,m;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
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
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const N=["InAList","Disabled"];export{r as Disabled,a as InAList,N as __namedExportsOrder,M as default};
