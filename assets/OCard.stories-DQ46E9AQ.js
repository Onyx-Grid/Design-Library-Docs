import{_ as t}from"./OCard.vue_vue_type_style_index_0_lang-BzvqfVzA.js";import{_ as d}from"./OStack.vue_vue_type_style_index_0_lang-CjZC0m5n.js";import{_ as s}from"./OText.vue_vue_type_style_index_0_lang-7AbyyjLC.js";import{_ as S}from"./OButton.vue_vue_type_style_index_0_lang-Dqxny7bC.js";import{_ as T}from"./OBadge.vue_vue_type_style_index_0_lang-Bkp2Qy9-.js";import{_ as k}from"./OAvatar.vue_vue_type_style_index_0_lang-B7RtgaTv.js";import"./iframe-CmLobRcQ.js";import"./preload-helper-Dp1pzeXC.js";import"./OBox.vue_vue_type_style_index_0_lang-DUA_bRL8.js";import"./style-HaLhxVKJ.js";import"./OSeparator.vue_vue_type_style_index_0_lang-Cte52qLG.js";const H={title:"Components/OCard",component:t,tags:["autodocs"],render:e=>({components:{OCard:t,OText:s},setup:()=>({args:e}),template:`
      <div style="max-width: 24rem">
        <OCard v-bind="args"><OText>Card body</OText></OCard>
      </div>`}),parameters:{docs:{description:{component:"A surface with optional header and footer regions, built FROM `OBox` and\n`OSeparator` rather than alongside them — the same composition test the app\nlayouts have to pass later.\n\nDeliberately not interactive. A clickable card makes the whole surface one\ncontrol, which nests every link and button inside it in a click target. Put an\n`OButton` in the card instead."}}}},a={},r={render:e=>({components:{OCard:t,OStack:d,OText:s,OButton:S,OBadge:T,OAvatar:k},setup:()=>({args:e}),template:`
      <div style="max-width: 24rem">
        <OCard v-bind="args">
          <template #header>
            <OStack :gap="3" align="center" justify="between">
              <OStack :gap="3" align="center">
                <OAvatar name="Ada Lovelace" decorative />
                <OText weight="semibold">Ada Lovelace</OText>
              </OStack>
              <OBadge tone="success">Active</OBadge>
            </OStack>
          </template>

          <OText tone="muted">
            Composed entirely from primitives this library already ships — OBox for the
            surface, OSeparator for the rules, OStack for the rhythm.
          </OText>

          <template #footer>
            <OStack :gap="2" justify="end">
              <OButton variant="ghost" tone="neutral">Cancel</OButton>
              <OButton>Save</OButton>
            </OStack>
          </template>
        </OCard>
      </div>`})},n={args:{dividers:!1},render:e=>({components:{OCard:t,OStack:d,OText:s},setup:()=>({args:e}),template:`
      <div style="max-width: 24rem">
        <OCard v-bind="args">
          <template #header><OText weight="semibold">Header</OText></template>
          <OText tone="muted">Body</OText>
          <template #footer><OText size="sm" tone="muted">Footer</OText></template>
        </OCard>
      </div>`})},o={render:()=>({components:{OCard:t,OStack:d,OText:s},setup:()=>({levels:[0,1,2,3,4]}),template:`
      <OStack :gap="5" wrap>
        <OCard v-for="e in levels" :key="e" :elevation="e" :border="e === 0">
          <OText size="sm">elevation {{ e }}</OText>
        </OCard>
      </OStack>`})};var i,m,O;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(O=(m=a.parameters)==null?void 0:m.docs)==null?void 0:O.source}}};var c,p,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => ({
    components: {
      OCard,
      OStack,
      OText,
      OButton,
      OBadge,
      OAvatar
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="max-width: 24rem">
        <OCard v-bind="args">
          <template #header>
            <OStack :gap="3" align="center" justify="between">
              <OStack :gap="3" align="center">
                <OAvatar name="Ada Lovelace" decorative />
                <OText weight="semibold">Ada Lovelace</OText>
              </OStack>
              <OBadge tone="success">Active</OBadge>
            </OStack>
          </template>

          <OText tone="muted">
            Composed entirely from primitives this library already ships — OBox for the
            surface, OSeparator for the rules, OStack for the rhythm.
          </OText>

          <template #footer>
            <OStack :gap="2" justify="end">
              <OButton variant="ghost" tone="neutral">Cancel</OButton>
              <OButton>Save</OButton>
            </OStack>
          </template>
        </OCard>
      </div>\`
  })
}`,...(l=(p=r.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,v,h;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    dividers: false
  },
  render: args => ({
    components: {
      OCard,
      OStack,
      OText
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="max-width: 24rem">
        <OCard v-bind="args">
          <template #header><OText weight="semibold">Header</OText></template>
          <OText tone="muted">Body</OText>
          <template #footer><OText size="sm" tone="muted">Footer</OText></template>
        </OCard>
      </div>\`
  })
}`,...(h=(v=n.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var g,x,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => ({
    components: {
      OCard,
      OStack,
      OText
    },
    setup: () => ({
      levels: [0, 1, 2, 3, 4] as const
    }),
    template: \`
      <OStack :gap="5" wrap>
        <OCard v-for="e in levels" :key="e" :elevation="e" :border="e === 0">
          <OText size="sm">elevation {{ e }}</OText>
        </OCard>
      </OStack>\`
  })
}`,...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const L=["BodyOnly","WithHeaderAndFooter","NoDividers","Elevations"];export{a as BodyOnly,o as Elevations,n as NoDividers,r as WithHeaderAndFooter,L as __namedExportsOrder,H as default};
