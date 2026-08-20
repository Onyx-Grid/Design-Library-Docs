import{u as t,j as e,M as r,C as i,a as d}from"./blocks-DN5Tmglj.js";import{O as a,D as l,V as c,S as h,B as x,W as j,I as u}from"./OButton.stories-DdV8puoA.js";import"./preload-helper-Dp1pzeXC.js";import"./_commonjsHelpers-CqkleIqs.js";import"./iframe-CmLobRcQ.js";import"./OButton.vue_vue_type_style_index_0_lang-Dqxny7bC.js";function o(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{of:a}),`
`,e.jsx(n.h1,{id:"obutton",children:"OButton"}),`
`,e.jsx(n.p,{children:`The reference implementation for Onyx. Every other component copies its shape, so
what is decided here propagates — read this before adding a component.`}),`
`,e.jsx(i,{of:l}),`
`,e.jsx(n.h2,{id:"the-two-axes",children:"The two axes"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"variant"})," and ",e.jsx(n.code,{children:"tone"})," are ",e.jsx(n.strong,{children:"orthogonal"})," and stay separate props."]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"variant"})})," — visual emphasis. How loud is it? ",e.jsx(n.code,{children:"solid · outline · ghost · link"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:e.jsx(n.code,{children:"tone"})})," — semantic intent. What does it mean? ",e.jsx(n.code,{children:"neutral · primary · danger · success · warning"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["Fused into one enum you would need ",e.jsx(n.code,{children:"solid-primary"}),", ",e.jsx(n.code,{children:"outline-primary"}),`,
`,e.jsx(n.code,{children:"solid-danger"}),", ",e.jsx(n.code,{children:"outline-danger"}),`… — a cross-product that grows every time either
axis gains a value. Split, "a destructive secondary action" is just
`,e.jsx(n.code,{children:'variant="outline" tone="danger"'}),", and the full matrix is 4 × 5 from nine values."]}),`
`,e.jsx(i,{of:c}),`
`,e.jsx(n.h2,{id:"sizes",children:"Sizes"}),`
`,e.jsx(i,{of:h}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"sm · md · lg"}),", defaulting to ",e.jsx(n.code,{children:"md"}),". Heights come from ",e.jsx(n.code,{children:"--control-height-*"}),`, the
same tokens `,e.jsx(n.code,{children:"OInput"}),` reads — which is what keeps a button and a field aligned in a
form row. The scale is deliberately narrow: adding `,e.jsx(n.code,{children:"xs"}),"/",e.jsx(n.code,{children:"xl"}),` later is
non-breaking, removing them would not be.`]}),`
`,e.jsx(n.h2,{id:"brand-gradient",children:"Brand gradient"}),`
`,e.jsx(i,{of:x}),`
`,e.jsxs(n.p,{children:[`The primary solid button is the brand call to action, so it carries the brand
gradient. That gradient is `,e.jsx(n.strong,{children:"derived per brand"}),` from the brand's own colour ramp
by `,e.jsx(n.code,{children:"@onyx-grid/tokens"})," — switch the ",e.jsx(n.strong,{children:"Brand"}),` control in the toolbar and it
follows, with nothing gradient-shaped inside this component.`]}),`
`,e.jsx(n.p,{children:`The library this was extracted from hard-coded an emerald gradient here, so any
other product would have shipped a green call to action.`}),`
`,e.jsx(n.h2,{id:"icons",children:"Icons"}),`
`,e.jsx(i,{of:j}),`
`,e.jsxs(n.p,{children:["Icons go in the ",e.jsx(n.code,{children:"#iconLeft"})," / ",e.jsx(n.code,{children:"#iconRight"})," slots and are ",e.jsx(n.code,{children:"aria-hidden"}),` — they
decorate the label rather than naming the button. They inherit `,e.jsx(n.code,{children:"currentColor"}),`, so
they follow the button's own text colour in every tone and theme.`]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Icon-only buttons need ",e.jsx(n.code,{children:"label"}),"."]}),` With no text there is no accessible name;
`,e.jsx(n.code,{children:"label"})," supplies one. The ",e.jsx(n.code,{children:"IconOnly"})," story fails a11y checks without it.",`
`,e.jsx(i,{of:u}),`
`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"loading"})," is a real state, not a look."]})," It sets ",e.jsx(n.code,{children:"aria-busy"}),`, blocks
interaction, and keeps the label mounted (hidden with `,e.jsx(n.code,{children:"visibility"}),`) so the
button does not resize mid-submit and shift the page.`]}),`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:["Disabled anchors lose their ",e.jsx(n.code,{children:"href"}),"."]})," ",e.jsx(n.code,{children:"<a>"})," has no ",e.jsx(n.code,{children:"disabled"}),` attribute, so a
styled-disabled link would still be navigable by click and keyboard. `,e.jsx(n.code,{children:"OButton"}),`
removes the `,e.jsx(n.code,{children:"href"}),", sets ",e.jsx(n.code,{children:"aria-disabled"})," and takes it out of the tab order."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Focus is visible for keyboard users only"}),", via ",e.jsx(n.code,{children:":focus-visible"}),` and the
`,e.jsx(n.code,{children:"--color-focus-ring"})," token, so it adapts per brand."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reduced motion"}),` — the spinner pulses rather than spins when the user has
asked for reduced motion. A spinner that does not move conveys nothing.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"do",children:"Do"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:'tone="danger"'}),` for destructive actions, at whatever emphasis fits —
`,e.jsx(n.code,{children:"solid"})," for the confirm button in a dialog, ",e.jsx(n.code,{children:"outline"})," or ",e.jsx(n.code,{children:"ghost"})," inline."]}),`
`,e.jsx(n.li,{children:"Give one primary solid button per view. If everything is loud, nothing is."}),`
`,e.jsxs(n.li,{children:["Use ",e.jsx(n.code,{children:'variant="link"'}),` for navigation that must look like text but behave like a
button.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"dont",children:"Don't"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Don't reach for ",e.jsx(n.code,{children:"tone"}),` to get a colour you like. It is intent, not palette — a
`,e.jsx(n.code,{children:"success"}),` button that does not confirm anything misleads screen-reader users who
hear the same word.`]}),`
`,e.jsx(n.li,{children:`Don't nest interactive content in the slots. A button inside a button is invalid
HTML and traps keyboard users.`}),`
`,e.jsxs(n.li,{children:["Don't use ",e.jsx(n.code,{children:"disabled"}),` for "not yet allowed" without saying why somewhere — a
disabled control with no explanation is a dead end.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"api",children:"API"}),`
`,e.jsx(d,{})]})}function w(s={}){const{wrapper:n}={...t(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(o,{...s})}):o(s)}export{w as default};
