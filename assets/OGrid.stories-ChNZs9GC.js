import{d as k,l as O,m as x,y as C,n as S,x as G,j as r,o as I,k as W}from"./iframe-CmLobRcQ.js";import{s as B,a as b}from"./style-HaLhxVKJ.js";import{_ as z}from"./OBox.vue_vue_type_style_index_0_lang-DUA_bRL8.js";import"./preload-helper-Dp1pzeXC.js";const n=k({__name:"OGrid",props:{as:{default:"div"},columns:{default:1},minItemWidth:{default:void 0},gap:{default:0},align:{default:"stretch"}},setup(a){const e=a,_=r(()=>["o-grid",`o-grid--align-${e.align}`,{"o-grid--responsive":e.minItemWidth!==void 0}]),w=r(()=>B({"--_gap":b(e.gap),"--_cols":e.minItemWidth===void 0?String(e.columns):void 0,"--_min":e.minItemWidth}));return(y,R)=>(I(),O(G(a.as),{class:S(_.value),style:C(w.value)},{default:x(()=>[W(y.$slots,"default")]),_:3},8,["class","style"]))}}),A={title:"Components/OGrid",component:n,tags:["autodocs"],args:{columns:3,gap:4},render:a=>({components:{OGrid:n,OBox:z},setup:()=>({args:a}),template:`
      <OGrid v-bind="args">
        <OBox v-for="i in 6" :key="i" surface="sunken" padding="4" radius="md" border>
          Cell {{ i }}
        </OBox>
      </OGrid>`}),parameters:{docs:{description:{component:"A grid whose gap is a token step. `columns` gives fixed equal tracks;\n`minItemWidth` switches to auto-fit, so the column count follows the\n*container* — which is what makes a card grid survive a collapsing sidebar\nwithout a single media query."}}}},o={},s={args:{minItemWidth:"12rem",gap:4}},t={args:{columns:4,gap:8}};var i,c,m;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,l,p,u,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    minItemWidth: '12rem',
    gap: 4
  }
}`,...(p=(l=s.parameters)==null?void 0:l.docs)==null?void 0:p.source},description:{story:"Resize the preview pane — the track count follows the container, not the viewport.",...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.description}}};var h,f,v;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    columns: 4,
    gap: 8
  }
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const D=["Columns","Responsive","GapScale"];export{o as Columns,t as GapScale,s as Responsive,D as __namedExportsOrder,A as default};
