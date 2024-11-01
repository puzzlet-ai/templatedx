"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[262],{7283:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var t=n(4848),s=n(8453);const l={id:"replace",title:"replace"},c="replace",i={id:"filters/replace",title:"replace",description:"The replace filter replaces all occurrences of a specified substring with a new substring.",source:"@site/docs/filters/replace.mdx",sourceDirName:"filters",slug:"/filters/replace",permalink:"/docs/filters/replace",draft:!1,unlisted:!1,editUrl:"https://github.com/your-org/templatedx-docs/edit/main/docs/filters/replace.mdx",tags:[],version:"current",frontMatter:{id:"replace",title:"replace"},sidebar:"docs",previous:{title:"round",permalink:"/docs/filters/round"},next:{title:"urlencode",permalink:"/docs/filters/urlencode"}},a={},o=[{value:"Syntax",id:"syntax",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Source Code",id:"source-code",level:2}];function d(e){const r={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"replace",children:(0,t.jsx)(r.code,{children:"replace"})})}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"replace"})," filter replaces all occurrences of a specified substring with a new substring."]}),"\n",(0,t.jsx)(r.h2,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-template",children:"replace(string_value, search, replace)\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"string_value"})," (string): The input string."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"search"})," (string): The substring to search for."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"replace"})," (string): The substring to replace with."]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-template",children:'replace("Hello World", "World", "TemplateDX")\n'})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Output:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{children:"Hello TemplateDX\n"})}),"\n",(0,t.jsx)(r.h2,{id:"source-code",children:"Source Code"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:'export const replace = (input: string, search: string, replace: string): string => {\n  if (typeof input !== "string") return input;\n  return input.split(search).join(replace);\n};\n'})})]})}function p(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>c,x:()=>i});var t=n(6540);const s={},l=t.createContext(s);function c(e){const r=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(l.Provider,{value:r},e.children)}}}]);