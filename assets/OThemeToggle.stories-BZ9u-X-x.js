import{d as s,o as a,c as r,t as w,a as T,b as x,l as d,m as A,j as c,D as u,r as B}from"./iframe-CmLobRcQ.js";import{_ as y}from"./OButton.vue_vue_type_style_index_0_lang-Dqxny7bC.js";import{_ as Z}from"./OStack.vue_vue_type_style_index_0_lang-CjZC0m5n.js";import{_ as V}from"./OCard.vue_vue_type_style_index_0_lang-BzvqfVzA.js";import{_ as $}from"./OText.vue_vue_type_style_index_0_lang-7AbyyjLC.js";import"./preload-helper-Dp1pzeXC.js";import"./style-HaLhxVKJ.js";import"./OBox.vue_vue_type_style_index_0_lang-DUA_bRL8.js";import"./OSeparator.vue_vue_type_style_index_0_lang-Cte52qLG.js";const L=["width","height","role","aria-hidden","aria-label"],M={key:0},_=s({__name:"OIconThemeDark",props:{size:{default:"1em"},label:{default:void 0}},setup(e){return(l,t)=>(a(),r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:e.size,height:e.size,fill:"none",focusable:"false",role:e.label?"img":void 0,"aria-hidden":e.label?void 0:!0,"aria-label":e.label},[e.label?(a(),r("title",M,w(e.label),1)):T("",!0),t[0]||(t[0]=x("path",{fill:"currentColor",d:"M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"},null,-1))],8,L))}}),j=["width","height","role","aria-hidden","aria-label"],D={key:0},N=s({__name:"OIconThemeLight",props:{size:{default:"1em"},label:{default:void 0}},setup(e){return(l,t)=>(a(),r("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 256",width:e.size,height:e.size,fill:"none",focusable:"false",role:e.label?"img":void 0,"aria-hidden":e.label?void 0:!0,"aria-label":e.label},[e.label?(a(),r("title",D,w(e.label),1)):T("",!0),t[0]||(t[0]=x("path",{fill:"currentColor",d:"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"},null,-1))],8,j))}}),S=s({__name:"OThemeToggle",props:{modelValue:{},size:{default:"md"},variant:{default:"ghost"},lightLabel:{default:"Switch to light mode"},darkLabel:{default:"Switch to dark mode"}},emits:["update:modelValue"],setup(e,{emit:l}){const t=e,C=l,i=c(()=>t.modelValue==="light"?"dark":"light"),z=c(()=>i.value==="dark"?t.darkLabel:t.lightLabel);return(H,m)=>(a(),d(y,{size:e.size,variant:e.variant,tone:"neutral",label:z.value,onClick:m[0]||(m[0]=E=>C("update:modelValue",i.value))},{iconLeft:A(()=>[i.value==="dark"?(a(),d(u(_),{key:0})):(a(),d(u(N),{key:1}))]),_:1},8,["size","variant","label"]))}}),R={title:"Components/OThemeToggle",component:S,tags:["autodocs"],args:{modelValue:"light"},parameters:{docs:{description:{component:"Controlled: it takes the current mode and emits the next one. The app owns the\nmode — usually through `useTheme` — so persistence and system-preference\nhandling stay where those decisions belong."}}}},n={},o={render:()=>({components:{OThemeToggle:S,OStack:Z,OCard:V,OText:$,OButton:y},setup(){return{mode:B("light")}},template:`
      <div
        data-theme="emerald"
        :data-mode="mode"
        style="background: var(--color-background); padding: var(--space-5); border-radius: var(--radius-lg)"
      >
        <OCard style="width: 20rem">
          <template #header>
            <OStack :gap="2" align="center" justify="between">
              <OText weight="semibold">{{ mode }} mode</OText>
              <OThemeToggle v-model="mode" />
            </OStack>
          </template>
          <OText tone="muted">
            Nothing re-renders on switch — the mode is an attribute, and every colour
            below it is a custom property.
          </OText>
          <template #footer>
            <OStack :gap="2" justify="end"><OButton size="sm">Save</OButton></OStack>
          </template>
        </OCard>
      </div>`})};var h,g,p;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(p=(g=n.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var f,b,v,O,k;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => ({
    components: {
      OThemeToggle,
      OStack,
      OCard,
      OText,
      OButton
    },
    setup() {
      const mode = ref<Mode>('light');
      return {
        mode
      };
    },
    template: \`
      <div
        data-theme="emerald"
        :data-mode="mode"
        style="background: var(--color-background); padding: var(--space-5); border-radius: var(--radius-lg)"
      >
        <OCard style="width: 20rem">
          <template #header>
            <OStack :gap="2" align="center" justify="between">
              <OText weight="semibold">{{ mode }} mode</OText>
              <OThemeToggle v-model="mode" />
            </OStack>
          </template>
          <OText tone="muted">
            Nothing re-renders on switch — the mode is an attribute, and every colour
            below it is a custom property.
          </OText>
          <template #footer>
            <OStack :gap="2" justify="end"><OButton size="sm">Save</OButton></OStack>
          </template>
        </OCard>
      </div>\`
  })
}`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source},description:{story:"Wired up: the toggle drives `data-mode` on the panel, exactly as it would on `<html>`.",...(k=(O=o.parameters)==null?void 0:O.docs)==null?void 0:k.description}}};const U=["Default","Live"];export{n as Default,o as Live,U as __namedExportsOrder,R as default};
