import{d as T,c as a,F as l,v as p,b as z,t as C,n as u,j as g,o as r,r as w}from"./iframe-CmLobRcQ.js";import{_ as B}from"./OStack.vue_vue_type_style_index_0_lang-CjZC0m5n.js";import{_ as D}from"./OText.vue_vue_type_style_index_0_lang-7AbyyjLC.js";import"./preload-helper-Dp1pzeXC.js";import"./style-HaLhxVKJ.js";const L=["aria-label","aria-current","onClick"],F={class:"visually-hidden"},x=T({__name:"OPageIndicator",props:{total:{},current:{},interactive:{type:Boolean,default:!1},size:{default:"md"},itemLabel:{type:Function,default:(e,i)=>`Page ${e} of ${i}`}},emits:["select"],setup(e,{emit:i}){const n=e,I=i,d=g(()=>Array.from({length:Math.max(0,n.total)},(P,m)=>m+1)),$=g(()=>n.itemLabel(n.current,n.total));return(P,m)=>(r(),a("div",{class:u(["o-page-indicator",`o-page-indicator--${e.size}`])},[e.interactive?(r(!0),a(l,{key:0},p(d.value,t=>(r(),a("button",{key:t,type:"button",class:u(["o-page-indicator__dot",{"o-page-indicator__dot--active":t===e.current}]),"aria-label":e.itemLabel(t,e.total),"aria-current":t===e.current?"true":void 0,onClick:E=>I("select",t)},null,10,L))),128)):(r(),a(l,{key:1},[(r(!0),a(l,null,p(d.value,t=>(r(),a("span",{key:t,class:u(["o-page-indicator__dot",{"o-page-indicator__dot--active":t===e.current}]),"aria-hidden":"true"},null,2))),128)),z("span",F,C($.value),1)],64))],2))}}),q={title:"Components/OPageIndicator",component:x,tags:["autodocs"],args:{total:5,current:2},parameters:{docs:{description:{component:"Dots on their own are meaningless to a screen reader, so the position is always\navailable as text. Set `interactive` when the dots are genuinely clickable —\nthen each becomes a real button, rather than a `div` with a click handler that\nkeyboard users cannot reach."}}}},o={},c={render:()=>({components:{OPageIndicator:x,OStack:B,OText:D},setup(){return{current:w(1)}},template:`
      <OStack direction="column" :gap="3" align="center">
        <OText tone="muted">Slide {{ current }}</OText>
        <OPageIndicator :total="6" :current="current" interactive @select="current = $event" />
      </OStack>`})},s={args:{size:"sm",total:8,current:5}};var v,h,O;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(O=(h=o.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var f,k,S;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => ({
    components: {
      OPageIndicator,
      OStack,
      OText
    },
    setup() {
      const current = ref(1);
      return {
        current
      };
    },
    template: \`
      <OStack direction="column" :gap="3" align="center">
        <OText tone="muted">Slide {{ current }}</OText>
        <OPageIndicator :total="6" :current="current" interactive @select="current = $event" />
      </OStack>\`
  })
}`,...(S=(k=c.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var b,y,_;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    total: 8,
    current: 5
  }
}`,...(_=(y=s.parameters)==null?void 0:y.docs)==null?void 0:_.source}}};const G=["Default","Interactive","Small"];export{o as Default,c as Interactive,s as Small,G as __namedExportsOrder,q as default};
