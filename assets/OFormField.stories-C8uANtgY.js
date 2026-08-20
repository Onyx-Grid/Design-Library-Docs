import{_ as o}from"./OFormField.vue_vue_type_style_index_0_lang-DFXoIQzD.js";import"./iframe-CmLobRcQ.js";import"./preload-helper-Dp1pzeXC.js";const v={title:"Components/OFormField",component:o,tags:["autodocs"],args:{label:"Notes",helper:"Markdown is supported."},render:u=>({components:{OFormField:o},setup:()=>({args:u}),template:`
      <OFormField v-bind="args">
        <template #default="s">
          <textarea
            :id="s.id"
            :aria-describedby="s.describedBy"
            :aria-invalid="s.invalid || undefined"
            :aria-required="s.required || undefined"
            rows="3"
            style="
              width: 100%;
              padding: var(--space-3);
              border: var(--border-width-thin) solid var(--color-border);
              border-radius: var(--radius-md);
              background: var(--color-surface);
              color: var(--color-text);
              font: inherit;
            "
          />
        </template>
      </OFormField>`}),parameters:{docs:{description:{component:`The label / helper / error plumbing every control shares. Use it directly when
wrapping a control this library does not ship — a third-party date picker, a
bare \`<textarea>\`, a custom widget — so that control gets the same accessible
wiring the built-in ones have.

The control is a scoped slot and receives the ids it must apply.`}}}},e={},r={args:{error:"Notes are required before submitting."}},a={args:{required:!0}};var s,t,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(i=(t=e.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var d,n,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    error: 'Notes are required before submitting.'
  }
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,l,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    required: true
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const f=["WrappingAnyControl","Invalid","RequiredField"];export{r as Invalid,a as RequiredField,e as WrappingAnyControl,f as __namedExportsOrder,v as default};
