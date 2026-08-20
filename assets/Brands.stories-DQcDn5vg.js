import{_ as T}from"./OButton.vue_vue_type_style_index_0_lang-Dqxny7bC.js";import{_ as A}from"./OBadge.vue_vue_type_style_index_0_lang-Bkp2Qy9-.js";import{_ as P}from"./OCard.vue_vue_type_style_index_0_lang-BzvqfVzA.js";import{_ as D}from"./OInput.vue_vue_type_style_index_0_lang-D3xm_DmT.js";import{_ as C}from"./OStack.vue_vue_type_style_index_0_lang-CjZC0m5n.js";import{_ as E}from"./OText.vue_vue_type_style_index_0_lang-7AbyyjLC.js";import{_ as R}from"./OBox.vue_vue_type_style_index_0_lang-DUA_bRL8.js";import"./iframe-CmLobRcQ.js";import"./preload-helper-Dp1pzeXC.js";import"./OSeparator.vue_vue_type_style_index_0_lang-Cte52qLG.js";import"./style-HaLhxVKJ.js";import"./OFormField.vue_vue_type_style_index_0_lang-DFXoIQzD.js";const o=["blue","coral","emerald","indigo","orange"],$=["light","dark"],Q={title:"Foundations/Brands",parameters:{controls:{disable:!0},docs:{description:{component:`Per-product theming, on real components rather than in principle.

Every panel below renders the *same* components. The only difference is a
\`data-theme\` / \`data-mode\` attribute on the wrapper — no props, no variants, no
forks. Because the token layer compiles to CSS custom properties, the attribute
is the entire switch.

The brand colours are carried over verbatim from the design source; everything
else in each panel — hover and active fills, the accent, the focus ring, and
the button's gradient — is *derived* from that one anchor per mode.`}}}},_=`
  <OCard style="width: 20rem">
    <template #header>
      <OStack :gap="2" align="center" justify="between">
        <OText weight="semibold">{{ brand }}</OText>
        <OBadge tone="success">Active</OBadge>
      </OStack>
    </template>
    <OStack direction="column" :gap="3">
      <OInput label="Email" placeholder="you@example.com" size="sm" />
      <OStack :gap="2" wrap>
        <OBadge tone="primary">primary</OBadge>
        <OBadge tone="danger">danger</OBadge>
        <OBadge tone="warning">warning</OBadge>
      </OStack>
    </OStack>
    <template #footer>
      <OStack :gap="2" justify="end">
        <OButton size="sm" variant="ghost" tone="neutral">Cancel</OButton>
        <OButton size="sm">Save</OButton>
      </OStack>
    </template>
  </OCard>`,e={OButton:T,OBadge:A,OCard:P,OInput:D,OStack:C,OText:E,OBox:R},a={render:()=>({components:{...e,Panel:{components:e,props:["brand"],template:_}},setup:()=>({brands:o}),template:`
      <OStack :gap="5" wrap align="start">
        <div v-for="b in brands" :key="b" :data-theme="b" data-mode="light">
          <Panel :brand="b" />
        </div>
      </OStack>`})},t={render:()=>({components:{...e,Panel:{components:e,props:["brand"],template:_}},setup:()=>({brands:o}),template:`
      <OStack :gap="5" wrap align="start">
        <div
          v-for="b in brands"
          :key="b"
          :data-theme="b"
          data-mode="dark"
          style="background: var(--color-background); padding: var(--space-4); border-radius: var(--radius-lg)"
        >
          <Panel :brand="b" />
        </div>
      </OStack>`})},r={render:()=>({components:e,setup:()=>({brands:o,modes:$}),template:`
      <OStack direction="column" :gap="5">
        <OStack v-for="m in modes" :key="m" direction="column" :gap="3">
          <OText weight="semibold" tone="muted">{{ m }}</OText>
          <OStack :gap="3" wrap>
            <div v-for="b in brands" :key="b" :data-theme="b" :data-mode="m">
              <OButton>{{ b }}</OButton>
            </div>
          </OStack>
        </OStack>
      </OStack>`})},n={render:()=>({components:e,setup:()=>({brands:o,roles:["primary","primary-strong","primary-hover","primary-subtle","accent","surface","surface-sunken","border","danger","success","warning"]}),template:`
      <OStack direction="column" :gap="5">
        <div v-for="b in brands" :key="b" :data-theme="b" data-mode="light">
          <OStack direction="column" :gap="2">
            <OText weight="semibold">{{ b }}</OText>
            <OStack :gap="2" wrap>
              <OStack v-for="r in roles" :key="r" direction="column" :gap="1" align="center">
                <OBox
                  :style="{ background: 'var(--color-' + r + ')' }"
                  border
                  radius="md"
                  style="width: 3.5rem; height: 2.5rem"
                />
                <OText size="xs" tone="muted">{{ r }}</OText>
              </OStack>
            </OStack>
          </OStack>
        </div>
      </OStack>`})};var s,d,i,c,m;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ...components,
      Panel: {
        components,
        props: ['brand'],
        template: SAMPLE
      }
    },
    setup: () => ({
      brands: BRANDS
    }),
    template: \`
      <OStack :gap="5" wrap align="start">
        <div v-for="b in brands" :key="b" :data-theme="b" data-mode="light">
          <Panel :brand="b" />
        </div>
      </OStack>\`
  })
}`,...(i=(d=a.parameters)==null?void 0:d.docs)==null?void 0:i.source},description:{story:"All five brands, light mode. Same components throughout.",...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.description}}};var p,l,u,b,O;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => ({
    components: {
      ...components,
      Panel: {
        components,
        props: ['brand'],
        template: SAMPLE
      }
    },
    setup: () => ({
      brands: BRANDS
    }),
    template: \`
      <OStack :gap="5" wrap align="start">
        <div
          v-for="b in brands"
          :key="b"
          :data-theme="b"
          data-mode="dark"
          style="background: var(--color-background); padding: var(--space-4); border-radius: var(--radius-lg)"
        >
          <Panel :brand="b" />
        </div>
      </OStack>\`
  })
}`,...(u=(l=t.parameters)==null?void 0:l.docs)==null?void 0:u.source},description:{story:"The same five in dark mode. Only `data-mode` differs.",...(O=(b=t.parameters)==null?void 0:b.docs)==null?void 0:O.description}}};var g,h,k,S,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => ({
    components,
    setup: () => ({
      brands: BRANDS,
      modes: MODES
    }),
    template: \`
      <OStack direction="column" :gap="5">
        <OStack v-for="m in modes" :key="m" direction="column" :gap="3">
          <OText weight="semibold" tone="muted">{{ m }}</OText>
          <OStack :gap="3" wrap>
            <div v-for="b in brands" :key="b" :data-theme="b" :data-mode="m">
              <OButton>{{ b }}</OButton>
            </div>
          </OStack>
        </OStack>
      </OStack>\`
  })
}`,...(k=(h=r.parameters)==null?void 0:h.docs)==null?void 0:k.source},description:{story:`The gradient on the primary call to action, per brand. It is computed from each
brand's own ramp — the library this was extracted from hard-coded an emerald
gradient here, so every product would have shipped a green CTA.`,...(v=(S=r.parameters)==null?void 0:S.docs)==null?void 0:v.description}}};var f,y,w,B,x;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => ({
    components,
    setup: () => ({
      brands: BRANDS,
      roles: ['primary', 'primary-strong', 'primary-hover', 'primary-subtle', 'accent', 'surface', 'surface-sunken', 'border', 'danger', 'success', 'warning']
    }),
    template: \`
      <OStack direction="column" :gap="5">
        <div v-for="b in brands" :key="b" :data-theme="b" data-mode="light">
          <OStack direction="column" :gap="2">
            <OText weight="semibold">{{ b }}</OText>
            <OStack :gap="2" wrap>
              <OStack v-for="r in roles" :key="r" direction="column" :gap="1" align="center">
                <OBox
                  :style="{ background: 'var(--color-' + r + ')' }"
                  border
                  radius="md"
                  style="width: 3.5rem; height: 2.5rem"
                />
                <OText size="xs" tone="muted">{{ r }}</OText>
              </OStack>
            </OStack>
          </OStack>
        </div>
      </OStack>\`
  })
}`,...(w=(y=n.parameters)==null?void 0:y.docs)==null?void 0:w.source},description:{story:`The semantic colour roles a component may reference. Components never see the
ramps these resolve from — the primitives are resolved away at build time and
are not present in the emitted CSS at all, which is what makes
"semantic tokens only" mechanically true rather than a review convention.`,...(x=(B=n.parameters)==null?void 0:B.docs)==null?void 0:x.description}}};const U=["AllBrandsLight","AllBrandsDark","DerivedGradients","SemanticRoles"];export{t as AllBrandsDark,a as AllBrandsLight,r as DerivedGradients,n as SemanticRoles,U as __namedExportsOrder,Q as default};
