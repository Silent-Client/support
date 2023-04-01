(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[971],{877:function(e,r,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new",function(){return i(4512)}])},4512:function(e,r,i){"use strict";i.r(r),i.d(r,{default:function(){return R}});var l=i(5893),t=i(7343),n=i(1231),s=i(4629),a=i(7294),o=i(6979),u=i(4418),d=i(6684),c=i(5227),m=i(1103),p=i(5059),h=i(1639),v=i(3179),f=i(6384),b=i(5432),[x,j]=(0,c.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[_,C]=(0,c.k)({strict:!1,name:"FormControlContext"}),g=(0,p.G)(function(e,r){let i=(0,h.jC)("Form",e),t=(0,v.Lr)(e),{getRootProps:n,htmlProps:s,...o}=function(e){let{id:r,isRequired:i,isInvalid:l,isDisabled:t,isReadOnly:n,...s}=e,o=(0,a.useId)(),u=r||`field-${o}`,d=`${u}-label`,c=`${u}-feedback`,p=`${u}-helptext`,[h,v]=(0,a.useState)(!1),[f,x]=(0,a.useState)(!1),[j,_]=(0,a.useState)(!1),C=(0,a.useCallback)((e={},r=null)=>({id:p,...e,ref:(0,m.lq)(r,e=>{e&&x(!0)})}),[p]),g=(0,a.useCallback)((e={},r=null)=>({...e,ref:r,"data-focus":(0,b.PB)(j),"data-disabled":(0,b.PB)(t),"data-invalid":(0,b.PB)(l),"data-readonly":(0,b.PB)(n),id:void 0!==e.id?e.id:d,htmlFor:void 0!==e.htmlFor?e.htmlFor:u}),[u,t,j,l,n,d]),y=(0,a.useCallback)((e={},r=null)=>({id:c,...e,ref:(0,m.lq)(r,e=>{e&&v(!0)}),"aria-live":"polite"}),[c]),k=(0,a.useCallback)((e={},r=null)=>({...e,...s,ref:r,role:"group"}),[s]),N=(0,a.useCallback)((e={},r=null)=>({...e,ref:r,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!i,isInvalid:!!l,isReadOnly:!!n,isDisabled:!!t,isFocused:!!j,onFocus:()=>_(!0),onBlur:()=>_(!1),hasFeedbackText:h,setHasFeedbackText:v,hasHelpText:f,setHasHelpText:x,id:u,labelId:d,feedbackId:c,helpTextId:p,htmlProps:s,getHelpTextProps:C,getErrorMessageProps:y,getRootProps:k,getLabelProps:g,getRequiredIndicatorProps:N}}(t),u=(0,b.cx)("chakra-form-control",e.className);return(0,l.jsx)(_,{value:o,children:(0,l.jsx)(x,{value:i,children:(0,l.jsx)(f.m.div,{...n({},r),className:u,__css:i.container})})})});g.displayName="FormControl",(0,p.G)(function(e,r){let i=C(),t=j(),n=(0,b.cx)("chakra-form__helper-text",e.className);return(0,l.jsx)(f.m.div,{...null==i?void 0:i.getHelpTextProps(e,r),__css:t.helperText,className:n})}).displayName="FormHelperText";var y=(0,p.G)(function(e,r){var i;let t=(0,h.mq)("FormLabel",e),n=(0,v.Lr)(e),{className:s,children:a,requiredIndicator:o=(0,l.jsx)(k,{}),optionalIndicator:u=null,...d}=n,c=C(),m=null!=(i=null==c?void 0:c.getLabelProps(d,r))?i:{ref:r,...d};return(0,l.jsxs)(f.m.label,{...m,className:(0,b.cx)("chakra-form__label",n.className),__css:{display:"block",textAlign:"start",...t},children:[a,(null==c?void 0:c.isRequired)?o:u]})});y.displayName="FormLabel";var k=(0,p.G)(function(e,r){let i=C(),t=j();if(!(null==i?void 0:i.isRequired))return null;let n=(0,b.cx)("chakra-form__required-indicator",e.className);return(0,l.jsx)(f.m.span,{...null==i?void 0:i.getRequiredIndicatorProps(e,r),__css:t.requiredIndicator,className:n})});function N(e){let{isDisabled:r,isInvalid:i,isReadOnly:l,isRequired:t,...n}=function(e){var r,i,l;let t=C(),{id:n,disabled:s,readOnly:a,required:o,isRequired:u,isInvalid:d,isReadOnly:c,isDisabled:m,onFocus:p,onBlur:h,...v}=e,f=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==t?void 0:t.hasFeedbackText)&&(null==t?void 0:t.isInvalid)&&f.push(t.feedbackId),(null==t?void 0:t.hasHelpText)&&f.push(t.helpTextId),{...v,"aria-describedby":f.join(" ")||void 0,id:null!=n?n:null==t?void 0:t.id,isDisabled:null!=(r=null!=s?s:m)?r:null==t?void 0:t.isDisabled,isReadOnly:null!=(i=null!=a?a:c)?i:null==t?void 0:t.isReadOnly,isRequired:null!=(l=null!=o?o:u)?l:null==t?void 0:t.isRequired,isInvalid:null!=d?d:null==t?void 0:t.isInvalid,onFocus:(0,b.v0)(null==t?void 0:t.onFocus,p),onBlur:(0,b.v0)(null==t?void 0:t.onBlur,h)}}(e);return{...n,disabled:r,readOnly:l,required:t,"aria-invalid":(0,b.Qm)(i),"aria-required":(0,b.Qm)(t),"aria-readonly":(0,b.Qm)(l)}}k.displayName="RequiredIndicator";var q=(0,p.G)(function(e,r){let{htmlSize:i,...t}=e,n=(0,h.jC)("Input",t),s=(0,v.Lr)(t),a=N(s),o=(0,b.cx)("chakra-input",e.className);return(0,l.jsx)(f.m.input,{size:i,...a,__css:n.field,ref:r,className:o})});q.displayName="Input",q.id="Input";var F=["h","minH","height","minHeight"],S=(0,p.G)((e,r)=>{let i=(0,h.mq)("Textarea",e),{className:t,rows:n,...s}=(0,v.Lr)(e),a=N(s),o=n?function(e,r=[]){let i=Object.assign({},e);for(let e of r)e in i&&delete i[e];return i}(i,F):i;return(0,l.jsx)(f.m.textarea,{ref:r,rows:n,...a,className:(0,b.cx)("chakra-textarea",t),__css:o})});S.displayName="Textarea";var w=i(9222),I=i(6154),P=i(8657),T=i(9008),E=i.n(T),R=function(){let[e,r]=(0,a.useState)(""),[i,c]=(0,a.useState)(""),[m,p]=(0,a.useState)(""),[h,v]=(0,a.useState)(!1),f=function(e){let{theme:r}=(0,s.uP)(),i=(0,t.OX)();return(0,a.useMemo)(()=>(0,n.Cj)(r.direction,{...i,...e}),[e,r.direction,i])}();(0,a.useEffect)(()=>{var e;let i=new URLSearchParams(window.location.search),l=Object.fromEntries(i.entries());p((null===(e=l.d)||void 0===e?void 0:e.replaceAll("<br>","\n"))||""),r(l.s||"")},[]);let{executeRecaptcha:b}=(0,P.CL)(),x=async()=>{v(!0);try{if(""===e.trim()||""===m.trim()||""===i.trim()){f({title:"Error",description:"Please complete all fields.",status:"error",duration:6e3,isClosable:!0,position:"bottom"});return}if(!b){f({title:"Error!",description:"Captcha error",status:"error",duration:3e3,isClosable:!0});return}let l=await b("register");await I.Z.post("https://api.silentclient.net/support/send",{email:i,title:e,body:m,retoken:l}),f({title:"Success",description:"Your message has been sent! You will be contacted by email.",status:"success",duration:6e3,isClosable:!0,position:"bottom"}),c(""),p(""),r("")}catch(e){var l,t;if((null==e?void 0:e.response)&&(null===(l=e.response)||void 0===l?void 0:l.data)&&(null===(t=e.response.data)||void 0===t?void 0:t.errors))for(let r of e.response.data.errors)f({title:"Error",description:r.message,status:"error",duration:3e3,isClosable:!0});else f({title:"Error",description:"".concat(e),status:"error",duration:6e3,isClosable:!0,position:"bottom"})}finally{v(!1)}};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(E(),{children:(0,l.jsx)("title",{children:"Submit a request – Silent Client Support"})}),(0,l.jsxs)(o.W,{maxW:"container.md",children:[(0,l.jsx)(u.X,{size:"lg",children:"Submit a request"}),(0,l.jsxs)(d.K,{direction:"column",spacing:3,mt:5,children:[(0,l.jsxs)(g,{children:[(0,l.jsx)(y,{children:"Email"}),(0,l.jsx)(q,{isDisabled:h,value:i,onChange:e=>c(e.currentTarget.value)})]}),(0,l.jsxs)(g,{children:[(0,l.jsx)(y,{children:"Subject"}),(0,l.jsx)(q,{isDisabled:h,value:e,onChange:e=>r(e.currentTarget.value)})]}),(0,l.jsxs)(g,{children:[(0,l.jsx)(y,{children:"Description"}),(0,l.jsx)(S,{minHeight:"350px",isDisabled:h,value:m,onChange:e=>p(e.currentTarget.value)})]}),(0,l.jsx)(w.z,{isDisabled:h,onClick:x,children:"Submit"})]})]})]})}},4418:function(e,r,i){"use strict";i.d(r,{X:function(){return u}});var l=i(5059),t=i(1639),n=i(3179),s=i(6384),a=i(5432),o=i(5893),u=(0,l.G)(function(e,r){let i=(0,t.mq)("Heading",e),{className:l,...u}=(0,n.Lr)(e);return(0,o.jsx)(s.m.h2,{ref:r,className:(0,a.cx)("chakra-heading",e.className),...u,__css:i})});u.displayName="Heading"}},function(e){e.O(0,[774,888,179],function(){return e(e.s=877)}),_N_E=e.O()}]);