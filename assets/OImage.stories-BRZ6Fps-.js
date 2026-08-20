import{d as T,w as _,c as n,k as z,y as F,n as $,r as R,j as m,o as l}from"./iframe-CmLobRcQ.js";import{_ as B}from"./OStack.vue_vue_type_style_index_0_lang-CjZC0m5n.js";import{_ as y}from"./OText.vue_vue_type_style_index_0_lang-7AbyyjLC.js";import"./preload-helper-Dp1pzeXC.js";import"./style-HaLhxVKJ.js";const C=["src","alt","loading"],E=["role","aria-label","aria-hidden"],o=T({__name:"OImage",props:{src:{},alt:{},aspectRatio:{default:void 0},width:{default:void 0},height:{default:void 0},fit:{default:"cover"},radius:{default:"none"},loading:{default:"lazy"}},setup(e){const a=e,s=R(!1);_(()=>a.src,()=>{s.value=!1});const b=m(()=>({...a.aspectRatio?{"--_ratio":a.aspectRatio}:{},...a.width?{"--_w":a.width}:{},...a.height?{"--_h":a.height}:{}})),I=m(()=>["o-image",`o-image--fit-${a.fit}`,`o-image--radius-${a.radius}`,{"o-image--failed":s.value}]);return(S,c)=>(l(),n("span",{class:$(I.value),style:F(b.value)},[s.value?(l(),n("span",{key:1,class:"o-image__fallback",role:e.alt?"img":"presentation","aria-label":e.alt||void 0,"aria-hidden":e.alt?void 0:"true"},[z(S.$slots,"fallback")],8,E)):(l(),n("img",{key:0,class:"o-image__img",src:e.src,alt:e.alt,loading:e.loading,decoding:"async",onError:c[0]||(c[0]=A=>s.value=!0)},null,40,C))],6))}}),M={title:"Components/OImage",component:o,tags:["autodocs"],args:{src:'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="320" height="180"><rect width="320" height="180" fill="%23cbd5e1"/><text x="160" y="96" font-family="sans-serif" font-size="16" text-anchor="middle" fill="%23475569">320 × 180</text></svg>',alt:"A placeholder graphic",aspectRatio:"16 / 9",radius:"lg"},render:e=>({components:{OImage:o},setup:()=>({args:e}),template:'<div style="max-width: 22rem"><OImage v-bind="args" /></div>'}),parameters:{docs:{description:{component:'`alt` is required, because an optional alt is an omitted alt. Pass `alt=""` for\na decorative image — the HTML-native way to say "skip me", made deliberate.'}}}},i={},t={args:{src:"https://example.invalid/missing.png"},render:e=>({components:{OImage:o,OText:y},setup:()=>({args:e}),template:`
      <div style="max-width: 22rem">
        <OImage v-bind="args">
          <template #fallback><OText size="sm" tone="muted">Image unavailable</OText></template>
        </OImage>
      </div>`})},r={render:e=>({components:{OImage:o,OStack:B,OText:y},setup:()=>({args:e,fits:["cover","contain","fill"]}),template:`
      <OStack :gap="4" wrap>
        <OStack v-for="f in fits" :key="f" direction="column" :gap="2" style="width: 10rem">
          <OImage v-bind="args" :fit="f" aspect-ratio="1 / 1" />
          <OText size="xs" tone="muted">{{ f }}</OText>
        </OStack>
      </OStack>`})};var d,g,p;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(g=i.parameters)==null?void 0:g.docs)==null?void 0:p.source}}};var f,u,v,O,h;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    src: 'https://example.invalid/missing.png'
  },
  render: args => ({
    components: {
      OImage,
      OText
    },
    setup: () => ({
      args
    }),
    template: \`
      <div style="max-width: 22rem">
        <OImage v-bind="args">
          <template #fallback><OText size="sm" tone="muted">Image unavailable</OText></template>
        </OImage>
      </div>\`
  })
}`,...(v=(u=t.parameters)==null?void 0:u.docs)==null?void 0:v.source},description:{story:"A broken URL falls back rather than showing a broken-image icon.",...(h=(O=t.parameters)==null?void 0:O.docs)==null?void 0:h.description}}};var k,x,w;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => ({
    components: {
      OImage,
      OStack,
      OText
    },
    setup: () => ({
      args,
      fits: ['cover', 'contain', 'fill'] as const
    }),
    template: \`
      <OStack :gap="4" wrap>
        <OStack v-for="f in fits" :key="f" direction="column" :gap="2" style="width: 10rem">
          <OImage v-bind="args" :fit="f" aspect-ratio="1 / 1" />
          <OText size="xs" tone="muted">{{ f }}</OText>
        </OStack>
      </OStack>\`
  })
}`,...(w=(x=r.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const P=["Default","FailureFallsBack","Fits"];export{i as Default,t as FailureFallsBack,r as Fits,P as __namedExportsOrder,M as default};
