import{d as i,l as d,m,T as c,o as p,k as l,r as O}from"./iframe-CmLobRcQ.js";import{_ as u}from"./OStack.vue_vue_type_style_index_0_lang-CjZC0m5n.js";import{_ as f}from"./OButton.vue_vue_type_style_index_0_lang-Dqxny7bC.js";import{_ as h}from"./OCard.vue_vue_type_style_index_0_lang-BzvqfVzA.js";import{_ as k}from"./OText.vue_vue_type_style_index_0_lang-7AbyyjLC.js";import"./preload-helper-Dp1pzeXC.js";import"./style-HaLhxVKJ.js";import"./OBox.vue_vue_type_style_index_0_lang-DUA_bRL8.js";import"./OSeparator.vue_vue_type_style_index_0_lang-Cte52qLG.js";const s=i({__name:"OReveal",props:{name:{default:"fade"},appear:{type:Boolean,default:!1},mode:{default:"default"}},setup(e){return(r,w)=>(p(),d(c,{name:e.name,appear:e.appear,mode:e.mode==="default"?void 0:e.mode},{default:m(()=>[l(r.$slots,"default")]),_:3},8,["name","appear","mode"]))}}),R={title:"Components/OReveal",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"The house transition presets as a component, so entrance and exit look the same\neverywhere. Reduced motion is handled globally by `@onyx-grid/styles` —\ntransitions drop to 0.01ms rather than to zero, so `transitionend` still fires\nand anything waiting on it does not hang."}}}},t={render:()=>({components:{OReveal:s,OStack:u,OButton:f,OCard:h,OText:k},setup(){return{shown:O(!0),presets:["fade","fade-slide","scale"]}},template:`
      <OStack direction="column" :gap="4">
        <OButton size="sm" variant="outline" @click="shown = !shown">
          {{ shown ? 'Hide' : 'Show' }}
        </OButton>
        <OStack :gap="4" align="start">
          <OStack v-for="p in presets" :key="p" direction="column" :gap="2" style="width: 11rem">
            <OText size="xs" tone="muted">{{ p }}</OText>
            <OReveal :name="p">
              <OCard v-if="shown" :padding="4"><OText size="sm">{{ p }}</OText></OCard>
            </OReveal>
          </OStack>
        </OStack>
      </OStack>`})};var a,o,n;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => ({
    components: {
      OReveal,
      OStack,
      OButton,
      OCard,
      OText
    },
    setup() {
      const shown = ref(true);
      return {
        shown,
        presets: ['fade', 'fade-slide', 'scale'] as const
      };
    },
    template: \`
      <OStack direction="column" :gap="4">
        <OButton size="sm" variant="outline" @click="shown = !shown">
          {{ shown ? 'Hide' : 'Show' }}
        </OButton>
        <OStack :gap="4" align="start">
          <OStack v-for="p in presets" :key="p" direction="column" :gap="2" style="width: 11rem">
            <OText size="xs" tone="muted">{{ p }}</OText>
            <OReveal :name="p">
              <OCard v-if="shown" :padding="4"><OText size="sm">{{ p }}</OText></OCard>
            </OReveal>
          </OStack>
        </OStack>
      </OStack>\`
  })
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const z=["Presets"];export{t as Presets,z as __namedExportsOrder,R as default};
