"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[541],{360:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var t=s(4848),r=s(8453);const i={title:"Tags"},o="Tags",c={id:"tags",title:"Tags",description:"Tags are special components that perform operations on a section of your template. TemplateDX provides a set of built-in tags that you can use to manipulate and transform data within your templates. Or, you can create your own custom tags.",source:"@site/docs/tags.mdx",sourceDirName:".",slug:"/tags",permalink:"/docs/tags",draft:!1,unlisted:!1,editUrl:"https://github.com/puzzlet-ai/templatedx-docs/edit/main/docs/tags.mdx",tags:[],version:"current",frontMatter:{title:"Tags"},sidebar:"docs",previous:{title:"Filters",permalink:"/docs/filters"}},l={},a=[{value:"Creating Custom Tags",id:"creating-custom-tags",level:2},{value:"Built-In Tags",id:"built-in-tags",level:2},{value:"ForEach",id:"foreach",level:3},{value:"Conditionals",id:"conditionals",level:3},{value:"Raw",id:"raw",level:3}];function d(n){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.header,{children:(0,t.jsx)(e.h1,{id:"tags",children:"Tags"})}),"\n",(0,t.jsx)(e.p,{children:"Tags are special components that perform operations on a section of your template. TemplateDX provides a set of built-in tags that you can use to manipulate and transform data within your templates. Or, you can create your own custom tags."}),"\n",(0,t.jsx)(e.h2,{id:"creating-custom-tags",children:"Creating Custom Tags"}),"\n",(0,t.jsx)(e.p,{children:"Documentation coming soon."}),"\n",(0,t.jsx)(e.h2,{id:"built-in-tags",children:"Built-In Tags"}),"\n",(0,t.jsx)(e.h3,{id:"foreach",children:"ForEach"}),"\n",(0,t.jsxs)(e.p,{children:["The ",(0,t.jsx)(e.code,{children:"ForEach"})," tag allows you to loop through an array."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"<ForEach arr={props.arr}>\n  {(item, index) => ...}\n</ForEach>\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Parameters"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"arr: Array<T>"})," An array of items you want to iterate on"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"children: (item: T, index: number) => Node"})," - A callback function for each item"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"<ForEach arr={[1, 2]}>\n  {(item, index) => (\n    <>\n      * item: {item}, index: {index}\n    </>\n  )}\n</ForEach>\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Output:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"* item: 1, index: 0\n* item: 2, index: 1\n"})}),"\n",(0,t.jsx)(e.h3,{id:"conditionals",children:"Conditionals"}),"\n",(0,t.jsxs)(e.p,{children:["The ",(0,t.jsx)(e.code,{children:"If"}),", ",(0,t.jsx)(e.code,{children:"ElseIf"})," and ",(0,t.jsx)(e.code,{children:"Else"})," tags allows you to conditionally output content."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"<If condition={props.boolA}>\n  ...\n</If>\n<ElseIf condition={props.boolB}>\n  ...\n</ElseIf>\n<Else>\n ...\n</Else>\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Parameters"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.code,{children:"If/ElseIf:"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"condition: boolean"})," - The condition to check"]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"children: Node"})," - The node to render if condition is true"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.code,{children:"Else:"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"condition: boolean"})," - The Node to render if the else conditon gets triggered."]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"<If condition={1 + 1 == 3}>\n  1 + 1 is not 3\n</If>\n<ElseIf condition={1 + 1 == 2}>\n  1 + 1 is 2\n</ElseIf>\n<Else>\n  Fallback\n</Else>\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Output:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"1 + 1 is 2\n"})}),"\n",(0,t.jsx)(e.h3,{id:"raw",children:"Raw"}),"\n",(0,t.jsxs)(e.p,{children:["The ",(0,t.jsx)(e.code,{children:"Raw"})," tag allows you to output raw text without interpolation."]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Syntax"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"<Raw>\n  ...\n</Raw>\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Parameters"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.code,{children:"children: Node"})," - The raw text"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Example"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-tsx",children:"<Raw>\n  {props.name}\n</Raw>\n"})}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Output:"})}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{children:"\\{props.name}\n"})})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(d,{...n})}):d(n)}},8453:(n,e,s)=>{s.d(e,{R:()=>o,x:()=>c});var t=s(6540);const r={},i=t.createContext(r);function o(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:o(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);