import{d as A,c,F as b,v as y,t as G,a as B,n as w,j as m,o as r,l as C}from"./iframe-CmLobRcQ.js";import{_ as $}from"./OAvatar.vue_vue_type_style_index_0_lang-B7RtgaTv.js";import{_ as J}from"./OStack.vue_vue_type_style_index_0_lang-CjZC0m5n.js";import"./preload-helper-Dp1pzeXC.js";import"./style-HaLhxVKJ.js";const L=["role","aria-label","aria-hidden"],M={key:0,class:"o-avatar-group__overflow","aria-hidden":"true"},S=A({__name:"OAvatarGroup",props:{items:{},max:{default:4},size:{default:"md"},decorative:{type:Boolean,default:!1}},setup(e){const a=e,l=m(()=>a.items.slice(0,Math.max(0,a.max))),d=m(()=>Math.max(0,a.items.length-l.value.length)),_=m(()=>{const n=a.items.map(p=>p.name).filter(Boolean);return n.length===0?`${a.items.length} people`:n.join(", ")});return(n,p)=>(r(),c("span",{class:w(["o-avatar-group",`o-avatar-group--${e.size}`]),role:e.decorative?"presentation":"group","aria-label":e.decorative?void 0:_.value,"aria-hidden":e.decorative?"true":void 0},[(r(!0),c(b,null,y(l.value,i=>(r(),C($,{key:i.id,class:"o-avatar-group__item",src:i.src,name:i.name,size:e.size,decorative:""},null,8,["src","name","size"]))),128)),d.value>0?(r(),c("span",M," +"+G(d.value),1)):B("",!0)],10,L))}}),T={title:"Components/OAvatarGroup",component:S,tags:["autodocs"],args:{items:[{id:1,name:"Ada Lovelace"},{id:2,name:"Grace Hopper"},{id:3,name:"Alan Turing"},{id:4,name:"Katherine Johnson"},{id:5,name:"Jean Bartik"},{id:6,name:"Mary Jackson"}]},parameters:{docs:{description:{component:`Takes an \`items\` array rather than avatar children, because counting slot
children to compute the overflow is fragile — and the "+N" has to be exactly
right or it lies to the user.

Announced as one group, not as N separate images.`}}}},s={args:{max:4}},t={args:{max:10}},o={render:e=>({components:{OAvatarGroup:S,OStack:J},setup:()=>({args:e,sizes:["sm","md","lg"]}),template:`
      <OStack direction="column" :gap="4">
        <OAvatarGroup v-for="s in sizes" :key="s" v-bind="args" :size="s" :max="4" />
      </OStack>`})};var u,g,v;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    max: 4
  }
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var h,f,k;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    max: 10
  }
}`,...(k=(f=t.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var O,x,z;o.parameters={...o.parameters,docs:{...(O=o.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => ({
    components: {
      OAvatarGroup,
      OStack
    },
    setup: () => ({
      args,
      sizes: ['sm', 'md', 'lg'] as const
    }),
    template: \`
      <OStack direction="column" :gap="4">
        <OAvatarGroup v-for="s in sizes" :key="s" v-bind="args" :size="s" :max="4" />
      </OStack>\`
  })
}`,...(z=(x=o.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};const W=["WithOverflow","AllVisible","Sizes"];export{t as AllVisible,o as Sizes,s as WithOverflow,W as __namedExportsOrder,T as default};
