import{d as Ve,c as B,t as We,a as Ne,b as Me,o as w}from"./iframe-CmLobRcQ.js";import{_ as n}from"./OButton.vue_vue_type_style_index_0_lang-Dqxny7bC.js";const _e=["width","height","role","aria-hidden","aria-label"],qe={key:0},Fe=Ve({__name:"OIconArrowRight",props:{size:{default:"1em"},label:{default:void 0}},setup(e){return(a,t)=>(w(),B("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:e.size,height:e.size,fill:"none",focusable:"false",role:e.label?"img":void 0,"aria-hidden":e.label?void 0:!0,"aria-label":e.label},[e.label?(w(),B("title",qe,We(e.label),1)):Ne("",!0),t[0]||(t[0]=Me("path",{d:"M19 12H5M12 19l-7-7 7-7",stroke:"currentColor","stroke-width":"2"},null,-1))],8,_e))}}),Ke=["width","height","role","aria-hidden","aria-label"],Pe={key:0},Ge=Ve({__name:"OIconDownload",props:{size:{default:"1em"},label:{default:void 0}},setup(e){return(a,t)=>(w(),B("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:e.size,height:e.size,fill:"none",focusable:"false",role:e.label?"img":void 0,"aria-hidden":e.label?void 0:!0,"aria-label":e.label},[e.label?(w(),B("title",Pe,We(e.label),1)):Ne("",!0),t[0]||(t[0]=Me("path",{d:"M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3",stroke:"currentColor","stroke-width":"2"},null,-1))],8,Ke))}}),{expect:g,fn:$e,userEvent:k,within:x}=__STORYBOOK_MODULE_TEST__,je={title:"Components/OButton",component:n,args:{onClick:$e(),default:"Save changes"},argTypes:{default:{control:"text",description:"Button label (default slot)."}},render:e=>({components:{OButton:n},setup:()=>({args:e}),template:'<OButton v-bind="args">{{ args.default }}</OButton>'}),parameters:{docs:{description:{component:`Story names are stable and descriptive because visual-regression snapshots key
off them (Phase 1 §6 defers VR but asks for the seams now). Renaming a story
later orphans its baseline.`}}}},b={},s={render:e=>({components:{OButton:n},setup:()=>({args:e}),template:`
      <div class="fx items-center gap-3">
        <OButton v-bind="args" size="sm">Small</OButton>
        <OButton v-bind="args" size="md">Medium</OButton>
        <OButton v-bind="args" size="lg">Large</OButton>
      </div>`})},o={render:e=>({components:{OButton:n},setup:()=>({args:e}),template:`
      <div class="fx items-center gap-3">
        <OButton v-bind="args" variant="solid">Solid</OButton>
        <OButton v-bind="args" variant="outline">Outline</OButton>
        <OButton v-bind="args" variant="ghost">Ghost</OButton>
        <OButton v-bind="args" variant="link">Link</OButton>
      </div>`})},r={render:e=>({components:{OButton:n},setup:()=>({args:e,variants:["solid","outline","ghost","link"],tones:["neutral","primary","danger","success","warning"]}),template:`
      <div class="fx fx-col gap-3">
        <div v-for="v in variants" :key="v" class="fx items-center gap-3">
          <OButton v-for="t in tones" :key="t" v-bind="args" :variant="v" :tone="t">
            {{ t }}
          </OButton>
        </div>
      </div>`})},i={render:e=>({components:{OButton:n},setup:()=>({args:e}),template:`
      <div class="fx items-center gap-3">
        <OButton v-bind="args" tone="primary">Primary CTA</OButton>
        <OButton v-bind="args" tone="primary" variant="outline">Secondary</OButton>
      </div>`})},h={render:e=>({components:{OButton:n,OIconArrowRight:Fe,OIconDownload:Ge},setup:()=>({args:e}),template:`
      <div class="fx items-center gap-3">
        <OButton v-bind="args">
          <template #iconLeft><OIconDownload /></template>
          Download
        </OButton>
        <OButton v-bind="args" variant="outline">
          Continue
          <template #iconRight><OIconArrowRight /></template>
        </OButton>
      </div>`})},c={args:{label:"Download"},render:e=>({components:{OButton:n,OIconDownload:Ge},setup:()=>({args:e}),template:'<OButton v-bind="args"><template #iconLeft><OIconDownload /></template></OButton>'})},f={args:{loading:!0},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}},y={args:{disabled:!0},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}}},O={args:{fullWidth:!0}},l={args:{href:"https://example.com",default:"Open documentation"}},d={play:async({canvasElement:e,args:a})=>{const t=x(e);await k.click(t.getByRole("button",{name:"Save changes"})),await g(a.onClick).toHaveBeenCalledTimes(1)}},u={args:{disabled:!0},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}},play:async({canvasElement:e,args:a})=>{const t=x(e);await k.click(t.getByRole("button",{name:"Save changes"}),{pointerEventsCheck:0}),await g(a.onClick).not.toHaveBeenCalled()}},m={args:{loading:!0},parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!1}]}}},play:async({canvasElement:e,args:a})=>{const v=x(e).getByRole("button");await g(v).toHaveAttribute("aria-busy","true"),await k.click(v,{pointerEventsCheck:0}),await g(a.onClick).not.toHaveBeenCalled()}},p={play:async({canvasElement:e,args:a})=>{const v=x(e).getByRole("button",{name:"Save changes"});v.focus(),await g(v).toHaveFocus(),await k.keyboard("{Enter}"),await g(a.onClick).toHaveBeenCalled()}};var S,C,E;b.parameters={...b.parameters,docs:{...(S=b.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(E=(C=b.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var I,A,D,R,T;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => ({
    components: {
      OButton
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="fx items-center gap-3">
        <OButton v-bind="args" size="sm">Small</OButton>
        <OButton v-bind="args" size="md">Medium</OButton>
        <OButton v-bind="args" size="lg">Large</OButton>
      </div>\`
  })
}`,...(D=(A=s.parameters)==null?void 0:A.docs)==null?void 0:D.source},description:{story:"The three sizes share `--control-height-*` with OInput, so they line up in a form row.",...(T=(R=s.parameters)==null?void 0:R.docs)==null?void 0:T.description}}};var z,L,H,V,W;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => ({
    components: {
      OButton
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="fx items-center gap-3">
        <OButton v-bind="args" variant="solid">Solid</OButton>
        <OButton v-bind="args" variant="outline">Outline</OButton>
        <OButton v-bind="args" variant="ghost">Ghost</OButton>
        <OButton v-bind="args" variant="link">Link</OButton>
      </div>\`
  })
}`,...(H=(L=o.parameters)==null?void 0:L.docs)==null?void 0:H.source},description:{story:"Visual emphasis. Orthogonal to tone — every variant works with every tone.",...(W=(V=o.parameters)==null?void 0:V.docs)==null?void 0:W.description}}};var N,M,G,_,q;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => ({
    components: {
      OButton
    },
    setup: () => ({
      args,
      variants: ['solid', 'outline', 'ghost', 'link'] as const,
      tones: ['neutral', 'primary', 'danger', 'success', 'warning'] as const
    }),
    template: \`
      <div class="fx fx-col gap-3">
        <div v-for="v in variants" :key="v" class="fx items-center gap-3">
          <OButton v-for="t in tones" :key="t" v-bind="args" :variant="v" :tone="t">
            {{ t }}
          </OButton>
        </div>
      </div>\`
  })
}`,...(G=(M=r.parameters)==null?void 0:M.docs)==null?void 0:G.source},description:{story:"Semantic intent. The grid is the argument for splitting the axes: 4 × 5 from 9 values.",...(q=(_=r.parameters)==null?void 0:_.docs)==null?void 0:q.description}}};var F,K,P,$,j;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => ({
    components: {
      OButton
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="fx items-center gap-3">
        <OButton v-bind="args" tone="primary">Primary CTA</OButton>
        <OButton v-bind="args" tone="primary" variant="outline">Secondary</OButton>
      </div>\`
  })
}`,...(P=(K=i.parameters)==null?void 0:K.docs)==null?void 0:P.source},description:{story:`The primary solid button carries the brand gradient, derived per brand from its
own ramp. Switch the Brand toolbar control — the gradient follows, with nothing
hard-coded in this component.`,...(j=($=i.parameters)==null?void 0:$.docs)==null?void 0:j.description}}};var U,Y,J;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: args => ({
    components: {
      OButton,
      OIconArrowRight,
      OIconDownload
    },
    setup: () => ({
      args
    }),
    template: \`
      <div class="fx items-center gap-3">
        <OButton v-bind="args">
          <template #iconLeft><OIconDownload /></template>
          Download
        </OButton>
        <OButton v-bind="args" variant="outline">
          Continue
          <template #iconRight><OIconArrowRight /></template>
        </OButton>
      </div>\`
  })
}`,...(J=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:J.source}}};var Q,X,Z,ee,te;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    label: 'Download'
  },
  render: args => ({
    components: {
      OButton,
      OIconDownload
    },
    setup: () => ({
      args
    }),
    template: \`<OButton v-bind="args"><template #iconLeft><OIconDownload /></template></OButton>\`
  })
}`,...(Z=(X=c.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:"An icon-only button has no text, so it needs `label` to have an accessible\nname. The a11y addon fails this story if the label is removed.",...(te=(ee=c.parameters)==null?void 0:ee.docs)==null?void 0:te.description}}};var ae,ne,se;f.parameters={...f.parameters,docs:{...(ae=f.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    loading: true
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
}`,...(se=(ne=f.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,re,ie;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
}`,...(ie=(re=y.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var ce,le,de;O.parameters={...O.parameters,docs:{...(ce=O.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    fullWidth: true
  }
}`,...(de=(le=O.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var ue,me,pe,ge,ve;l.parameters={...l.parameters,docs:{...(ue=l.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    href: 'https://example.com',
    default: 'Open documentation'
  }
}`,...(pe=(me=l.parameters)==null?void 0:me.docs)==null?void 0:pe.source},description:{story:"Renders an anchor. Same styling, correct semantics — no router dependency.",...(ve=(ge=l.parameters)==null?void 0:ge.docs)==null?void 0:ve.description}}};var be,he,fe,ye,Oe;d.parameters={...d.parameters,docs:{...(be=d.parameters)==null?void 0:be.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save changes'
    }));
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  }
}`,...(fe=(he=d.parameters)==null?void 0:he.docs)==null?void 0:fe.source},description:{story:"A click reaches the handler exactly once.",...(Oe=(ye=d.parameters)==null?void 0:ye.docs)==null?void 0:Oe.description}}};var Be,we,ke,xe,Se;u.parameters={...u.parameters,docs:{...(Be=u.parameters)==null?void 0:Be.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: 'Save changes'
    }), {
      pointerEventsCheck: 0
    });
    await expect(args.onClick).not.toHaveBeenCalled();
  }
}`,...(ke=(we=u.parameters)==null?void 0:we.docs)==null?void 0:ke.source},description:{story:"A disabled button must not emit — the state has to be real, not just dimmed.",...(Se=(xe=u.parameters)==null?void 0:xe.docs)==null?void 0:Se.description}}};var Ce,Ee,Ie,Ae,De;m.parameters={...m.parameters,docs:{...(Ce=m.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    loading: true
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
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('aria-busy', 'true');
    await userEvent.click(button, {
      pointerEventsCheck: 0
    });
    await expect(args.onClick).not.toHaveBeenCalled();
  }
}`,...(Ie=(Ee=m.parameters)==null?void 0:Ee.docs)==null?void 0:Ie.source},description:{story:"Loading blocks interaction too, and announces itself with aria-busy.",...(De=(Ae=m.parameters)==null?void 0:Ae.docs)==null?void 0:De.description}}};var Re,Te,ze,Le,He;p.parameters={...p.parameters,docs:{...(Re=p.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: 'Save changes'
    });
    button.focus();
    await expect(button).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await expect(args.onClick).toHaveBeenCalled();
  }
}`,...(ze=(Te=p.parameters)==null?void 0:Te.docs)==null?void 0:ze.source},description:{story:"Keyboard reachability — the button must be focusable and activate on Enter.",...(He=(Le=p.parameters)==null?void 0:Le.docs)==null?void 0:He.description}}};const Ue=["Default","Sizes","Variants","VariantsAndTones","BrandGradient","WithIcons","IconOnly","Loading","Disabled","FullWidth","AsLink","ClickEmits","DisabledDoesNotEmit","LoadingDoesNotEmit","KeyboardActivates"],Qe=Object.freeze(Object.defineProperty({__proto__:null,AsLink:l,BrandGradient:i,ClickEmits:d,Default:b,Disabled:y,DisabledDoesNotEmit:u,FullWidth:O,IconOnly:c,KeyboardActivates:p,Loading:f,LoadingDoesNotEmit:m,Sizes:s,Variants:o,VariantsAndTones:r,WithIcons:h,__namedExportsOrder:Ue,default:je},Symbol.toStringTag,{value:"Module"}));export{i as B,b as D,c as I,Qe as O,s as S,r as V,h as W};
