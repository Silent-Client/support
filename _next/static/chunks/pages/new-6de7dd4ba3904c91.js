(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[971],{877:function(e,r,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new",function(){return l(4512)}])},4512:function(e,r,l){"use strict";l.r(r),l.d(r,{default:function(){return R}});var i=l(5893),t=l(7343),n=l(1231),s=l(4629),a=l(7294),o=l(6979),u=l(4418),d=l(7306),c=l(5227),m=l(1103),p=l(5059),h=l(1639),v=l(3179),f=l(6384),b=l(5432),[x,j]=(0,c.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[_,C]=(0,c.k)({strict:!1,name:"FormControlContext"}),g=(0,p.G)(function(e,r){let l=(0,h.jC)("Form",e),t=(0,v.Lr)(e),{getRootProps:n,htmlProps:s,...o}=function(e){let{id:r,isRequired:l,isInvalid:i,isDisabled:t,isReadOnly:n,...s}=e,o=(0,a.useId)(),u=r||`field-${o}`,d=`${u}-label`,c=`${u}-feedback`,p=`${u}-helptext`,[h,v]=(0,a.useState)(!1),[f,x]=(0,a.useState)(!1),[j,_]=(0,a.useState)(!1),C=(0,a.useCallback)((e={},r=null)=>({id:p,...e,ref:(0,m.lq)(r,e=>{e&&x(!0)})}),[p]),g=(0,a.useCallback)((e={},r=null)=>({...e,ref:r,"data-focus":(0,b.PB)(j),"data-disabled":(0,b.PB)(t),"data-invalid":(0,b.PB)(i),"data-readonly":(0,b.PB)(n),id:void 0!==e.id?e.id:d,htmlFor:void 0!==e.htmlFor?e.htmlFor:u}),[u,t,j,i,n,d]),y=(0,a.useCallback)((e={},r=null)=>({id:c,...e,ref:(0,m.lq)(r,e=>{e&&v(!0)}),"aria-live":"polite"}),[c]),k=(0,a.useCallback)((e={},r=null)=>({...e,...s,ref:r,role:"group"}),[s]),N=(0,a.useCallback)((e={},r=null)=>({...e,ref:r,role:"presentation","aria-hidden":!0,children:e.children||"*"}),[]);return{isRequired:!!l,isInvalid:!!i,isReadOnly:!!n,isDisabled:!!t,isFocused:!!j,onFocus:()=>_(!0),onBlur:()=>_(!1),hasFeedbackText:h,setHasFeedbackText:v,hasHelpText:f,setHasHelpText:x,id:u,labelId:d,feedbackId:c,helpTextId:p,htmlProps:s,getHelpTextProps:C,getErrorMessageProps:y,getRootProps:k,getLabelProps:g,getRequiredIndicatorProps:N}}(t),u=(0,b.cx)("chakra-form-control",e.className);return(0,i.jsx)(_,{value:o,children:(0,i.jsx)(x,{value:l,children:(0,i.jsx)(f.m.div,{...n({},r),className:u,__css:l.container})})})});g.displayName="FormControl",(0,p.G)(function(e,r){let l=C(),t=j(),n=(0,b.cx)("chakra-form__helper-text",e.className);return(0,i.jsx)(f.m.div,{...null==l?void 0:l.getHelpTextProps(e,r),__css:t.helperText,className:n})}).displayName="FormHelperText";var y=(0,p.G)(function(e,r){var l;let t=(0,h.mq)("FormLabel",e),n=(0,v.Lr)(e),{className:s,children:a,requiredIndicator:o=(0,i.jsx)(k,{}),optionalIndicator:u=null,...d}=n,c=C(),m=null!=(l=null==c?void 0:c.getLabelProps(d,r))?l:{ref:r,...d};return(0,i.jsxs)(f.m.label,{...m,className:(0,b.cx)("chakra-form__label",n.className),__css:{display:"block",textAlign:"start",...t},children:[a,(null==c?void 0:c.isRequired)?o:u]})});y.displayName="FormLabel";var k=(0,p.G)(function(e,r){let l=C(),t=j();if(!(null==l?void 0:l.isRequired))return null;let n=(0,b.cx)("chakra-form__required-indicator",e.className);return(0,i.jsx)(f.m.span,{...null==l?void 0:l.getRequiredIndicatorProps(e,r),__css:t.requiredIndicator,className:n})});function N(e){let{isDisabled:r,isInvalid:l,isReadOnly:i,isRequired:t,...n}=function(e){var r,l,i;let t=C(),{id:n,disabled:s,readOnly:a,required:o,isRequired:u,isInvalid:d,isReadOnly:c,isDisabled:m,onFocus:p,onBlur:h,...v}=e,f=e["aria-describedby"]?[e["aria-describedby"]]:[];return(null==t?void 0:t.hasFeedbackText)&&(null==t?void 0:t.isInvalid)&&f.push(t.feedbackId),(null==t?void 0:t.hasHelpText)&&f.push(t.helpTextId),{...v,"aria-describedby":f.join(" ")||void 0,id:null!=n?n:null==t?void 0:t.id,isDisabled:null!=(r=null!=s?s:m)?r:null==t?void 0:t.isDisabled,isReadOnly:null!=(l=null!=a?a:c)?l:null==t?void 0:t.isReadOnly,isRequired:null!=(i=null!=o?o:u)?i:null==t?void 0:t.isRequired,isInvalid:null!=d?d:null==t?void 0:t.isInvalid,onFocus:(0,b.v0)(null==t?void 0:t.onFocus,p),onBlur:(0,b.v0)(null==t?void 0:t.onBlur,h)}}(e);return{...n,disabled:r,readOnly:i,required:t,"aria-invalid":(0,b.Qm)(l),"aria-required":(0,b.Qm)(t),"aria-readonly":(0,b.Qm)(i)}}k.displayName="RequiredIndicator";var q=(0,p.G)(function(e,r){let{htmlSize:l,...t}=e,n=(0,h.jC)("Input",t),s=(0,v.Lr)(t),a=N(s),o=(0,b.cx)("chakra-input",e.className);return(0,i.jsx)(f.m.input,{size:l,...a,__css:n.field,ref:r,className:o})});q.displayName="Input",q.id="Input";var F=["h","minH","height","minHeight"],S=(0,p.G)((e,r)=>{let l=(0,h.mq)("Textarea",e),{className:t,rows:n,...s}=(0,v.Lr)(e),a=N(s),o=n?function(e,r=[]){let l=Object.assign({},e);for(let e of r)e in l&&delete l[e];return l}(l,F):l;return(0,i.jsx)(f.m.textarea,{ref:r,rows:n,...a,className:(0,b.cx)("chakra-textarea",t),__css:o})});S.displayName="Textarea";var w=l(9222),I=l(6154),P=l(8657),T=l(9008),E=l.n(T),R=function(){let[e,r]=(0,a.useState)(""),[l,c]=(0,a.useState)(""),[m,p]=(0,a.useState)(""),[h,v]=(0,a.useState)(!1),f=function(e){let{theme:r}=(0,s.uP)(),l=(0,t.OX)();return(0,a.useMemo)(()=>(0,n.Cj)(r.direction,{...l,...e}),[e,r.direction,l])}();(0,a.useEffect)(()=>{var e;let l=new URLSearchParams(window.location.search),i=Object.fromEntries(l.entries());p((null===(e=i.d)||void 0===e?void 0:e.replaceAll("<br>","\n"))||""),r(i.s||"")},[]);let{executeRecaptcha:b}=(0,P.CL)(),x=async()=>{v(!0);try{if(""===e.trim()||""===m.trim()||""===l.trim()){f({title:"Error",description:"Please complete all fields.",status:"error",duration:6e3,isClosable:!0,position:"bottom"});return}if(!b){f({title:"Error!",description:"Captcha error",status:"error",duration:3e3,isClosable:!0});return}let i=await b("register");await I.Z.post("https://api.silentclient.net/support/send",{email:l,title:e,body:m,retoken:i}),f({title:"Success",description:"Your message has been sent! You will be contacted by email.",status:"success",duration:6e3,isClosable:!0,position:"bottom"}),c(""),p(""),r("")}catch(e){var i,t;if((null==e?void 0:e.response)&&(null===(i=e.response)||void 0===i?void 0:i.data)&&(null===(t=e.response.data)||void 0===t?void 0:t.errors))for(let r of e.response.data.errors)f({title:"Error",description:r.message,status:"error",duration:3e3,isClosable:!0});else f({title:"Error",description:"".concat(e),status:"error",duration:6e3,isClosable:!0,position:"bottom"})}finally{v(!1)}};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(E(),{children:(0,i.jsx)("title",{children:"Submit a request – Silent Client Support"})}),(0,i.jsxs)(o.W,{maxW:"container.md",children:[(0,i.jsx)(u.X,{size:"lg",children:"Submit a request"}),(0,i.jsxs)(d.K,{direction:"column",spacing:3,mt:5,children:[(0,i.jsxs)(g,{children:[(0,i.jsx)(y,{children:"Email"}),(0,i.jsx)(q,{isDisabled:h,value:l,onChange:e=>c(e.currentTarget.value)})]}),(0,i.jsxs)(g,{children:[(0,i.jsx)(y,{children:"Subject"}),(0,i.jsx)(q,{isDisabled:h,value:e,onChange:e=>r(e.currentTarget.value)})]}),(0,i.jsxs)(g,{children:[(0,i.jsx)(y,{children:"Description"}),(0,i.jsx)(S,{isDisabled:h,value:m,onChange:e=>p(e.currentTarget.value)})]}),(0,i.jsx)(w.z,{isDisabled:h,onClick:x,children:"Submit"})]})]})]})}},4418:function(e,r,l){"use strict";l.d(r,{X:function(){return u}});var i=l(5059),t=l(1639),n=l(3179),s=l(6384),a=l(5432),o=l(5893),u=(0,i.G)(function(e,r){let l=(0,t.mq)("Heading",e),{className:i,...u}=(0,n.Lr)(e);return(0,o.jsx)(s.m.h2,{ref:r,className:(0,a.cx)("chakra-heading",e.className),...u,__css:l})});u.displayName="Heading"}},function(e){e.O(0,[774,888,179],function(){return e(e.s=877)}),_N_E=e.O()}]);