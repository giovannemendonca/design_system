import{R as h,r as u,a as _e}from"./index-532c4ca3.js";import{_ as A}from"./extends-98964cd2.js";import{j as I}from"./jsx-runtime-6db5783a.js";var S="colors",w="sizes",p="space",$e={gap:p,gridGap:p,columnGap:p,gridColumnGap:p,rowGap:p,gridRowGap:p,inset:p,insetBlock:p,insetBlockEnd:p,insetBlockStart:p,insetInline:p,insetInlineEnd:p,insetInlineStart:p,margin:p,marginTop:p,marginRight:p,marginBottom:p,marginLeft:p,marginBlock:p,marginBlockEnd:p,marginBlockStart:p,marginInline:p,marginInlineEnd:p,marginInlineStart:p,padding:p,paddingTop:p,paddingRight:p,paddingBottom:p,paddingLeft:p,paddingBlock:p,paddingBlockEnd:p,paddingBlockStart:p,paddingInline:p,paddingInlineEnd:p,paddingInlineStart:p,top:p,right:p,bottom:p,left:p,scrollMargin:p,scrollMarginTop:p,scrollMarginRight:p,scrollMarginBottom:p,scrollMarginLeft:p,scrollMarginX:p,scrollMarginY:p,scrollMarginBlock:p,scrollMarginBlockEnd:p,scrollMarginBlockStart:p,scrollMarginInline:p,scrollMarginInlineEnd:p,scrollMarginInlineStart:p,scrollPadding:p,scrollPaddingTop:p,scrollPaddingRight:p,scrollPaddingBottom:p,scrollPaddingLeft:p,scrollPaddingX:p,scrollPaddingY:p,scrollPaddingBlock:p,scrollPaddingBlockEnd:p,scrollPaddingBlockStart:p,scrollPaddingInline:p,scrollPaddingInlineEnd:p,scrollPaddingInlineStart:p,fontSize:"fontSizes",background:S,backgroundColor:S,backgroundImage:S,borderImage:S,border:S,borderBlock:S,borderBlockEnd:S,borderBlockStart:S,borderBottom:S,borderBottomColor:S,borderColor:S,borderInline:S,borderInlineEnd:S,borderInlineStart:S,borderLeft:S,borderLeftColor:S,borderRight:S,borderRightColor:S,borderTop:S,borderTopColor:S,caretColor:S,color:S,columnRuleColor:S,fill:S,outline:S,outlineColor:S,stroke:S,textDecorationColor:S,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:w,minBlockSize:w,maxBlockSize:w,inlineSize:w,minInlineSize:w,maxInlineSize:w,width:w,minWidth:w,maxWidth:w,height:w,minHeight:w,maxHeight:w,flexBasis:w,gridTemplateColumns:w,gridTemplateRows:w,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},Oe=(e,t)=>typeof t=="function"?{"()":Function.prototype.toString.call(t)}:t,U=()=>{const e=Object.create(null);return(t,n,...r)=>{const o=(i=>JSON.stringify(i,Oe))(t);return o in e?e[o]:e[o]=n(t,...r)}},L=Symbol.for("sxs.internal"),ae=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),ce=e=>{for(const t in e)return!0;return!1},{hasOwnProperty:Fe}=Object.prototype,oe=e=>e.includes("-")?e:e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()),De=/\s+(?![^()]*\))/,D=e=>t=>e(...typeof t=="string"?String(t).split(De):[t]),de={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:D((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e})),marginInline:D((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e})),maxSize:D((e,t)=>({maxBlockSize:e,maxInlineSize:t||e})),minSize:D((e,t)=>({minBlockSize:e,minInlineSize:t||e})),paddingBlock:D((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e})),paddingInline:D((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e}))},re=/([\d.]+)([^]*)/,He=(e,t)=>e.length?e.reduce((n,r)=>(n.push(...t.map(o=>o.includes("&")?o.replace(/&/g,/[ +>|~]/.test(r)&&/&.*&/.test(o)?`:is(${r})`:r):r+" "+o)),n),[]):t,Ue=(e,t)=>e in Ve&&typeof t=="string"?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(n,r,o,i)=>r+(o==="stretch"?`-moz-available${i};${oe(e)}:${r}-webkit-fill-available`:`-moz-fit-content${i};${oe(e)}:${r}fit-content`)+i):String(t),Ve={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},M=e=>e?e+"-":"",xe=(e,t,n)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(r,o,i,l,a)=>l=="$"==!!i?r:(o||l=="--"?"calc(":"")+"var(--"+(l==="$"?M(t)+(a.includes("$")?"":M(n))+a.replace(/\$/g,"-"):a)+")"+(o||l=="--"?"*"+(o||"")+(i||"1")+")":"")),Ge=/\s*,\s*(?![^()]*\))/,Ye=Object.prototype.toString,H=(e,t,n,r,o)=>{let i,l,a;const s=(d,m,f)=>{let c,g;const b=v=>{for(c in v){const k=c.charCodeAt(0)===64,C=k&&Array.isArray(v[c])?v[c]:[v[c]];for(g of C){const E=/[A-Z]/.test($=c)?$:$.replace(/-[^]/g,R=>R[1].toUpperCase()),V=typeof g=="object"&&g&&g.toString===Ye&&(!r.utils[E]||!m.length);if(E in r.utils&&!V){const R=r.utils[E];if(R!==l){l=R,b(R(g)),l=null;continue}}else if(E in de){const R=de[E];if(R!==a){a=R,b(R(g)),a=null;continue}}if(k&&(x=c.slice(1)in r.media?"@media "+r.media[c.slice(1)]:c,c=x.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,(R,z,P,W,B,j)=>{const F=re.test(z),Z=.0625*(F?-1:1),[K,le]=F?[W,z]:[z,W];return"("+(P[0]==="="?"":P[0]===">"===F?"max-":"min-")+K+":"+(P[0]!=="="&&P.length===1?le.replace(re,(Te,te,ne)=>Number(te)+Z*(P===">"?1:-1)+ne):le)+(B?") and ("+(B[0]===">"?"min-":"max-")+K+":"+(B.length===1?j.replace(re,(Te,te,ne)=>Number(te)+Z*(B===">"?-1:1)+ne):j):"")+")"})),V){const R=k?f.concat(c):[...f],z=k?[...m]:He(m,c.split(Ge));i!==void 0&&o(ue(...i)),i=void 0,s(g,z,R)}else i===void 0&&(i=[[],m,f]),c=k||c.charCodeAt(0)!==36?c:`--${M(r.prefix)}${c.slice(1).replace(/\$/g,"-")}`,g=V?g:typeof g=="number"?g&&E in qe?String(g)+"px":String(g):xe(Ue(E,g??""),r.prefix,r.themeMap[E]),i[0].push(`${k?`${c} `:`${oe(c)}:`}${g}`)}}var x,$};b(d),i!==void 0&&o(ue(...i)),i=void 0};s(e,t,n)},ue=(e,t,n)=>`${n.map(r=>`${r}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(n.length?n.length+1:0).join("}")}`,qe={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},fe=e=>String.fromCharCode(e+(e>25?39:97)),N=e=>(t=>{let n,r="";for(n=Math.abs(t);n>52;n=n/52|0)r=fe(n%52)+r;return fe(n%52)+r})(((t,n)=>{let r=n.length;for(;r;)t=33*t^n.charCodeAt(--r);return t})(5381,JSON.stringify(e))>>>0),Y=["themed","global","styled","onevar","resonevar","allvar","inline"],Ze=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch{return!1}},Ke=e=>{let t;const n=()=>{const{cssRules:o}=t.sheet;return[].map.call(o,(i,l)=>{const{cssText:a}=i;let s="";if(a.startsWith("--sxs"))return"";if(o[l-1]&&(s=o[l-1].cssText).startsWith("--sxs")){if(!i.cssRules.length)return"";for(const d in t.rules)if(t.rules[d].group===i)return`--sxs{--sxs:${[...t.rules[d].cache].join(" ")}}${a}`;return i.cssRules.length?`${s}${a}`:""}return a}).join("")},r=()=>{if(t){const{rules:a,sheet:s}=t;if(!s.deleteRule){for(;Object(Object(s.cssRules)[0]).type===3;)s.cssRules.splice(0,1);s.cssRules=[]}for(const d in a)delete a[d]}const o=Object(e).styleSheets||[];for(const a of o)if(Ze(a)){for(let s=0,d=a.cssRules;d[s];++s){const m=Object(d[s]);if(m.type!==1)continue;const f=Object(d[s+1]);if(f.type!==4)continue;++s;const{cssText:c}=m;if(!c.startsWith("--sxs"))continue;const g=c.slice(14,-3).trim().split(/\s+/),b=Y[g[0]];b&&(t||(t={sheet:a,reset:r,rules:{},toString:n}),t.rules[b]={group:f,index:s,cache:new Set(g)})}if(t)break}if(!t){const a=(s,d)=>({type:d,cssRules:[],insertRule(m,f){this.cssRules.splice(f,0,a(m,{import:3,undefined:1}[(m.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return s==="@media{}"?`@media{${[].map.call(this.cssRules,m=>m.cssText).join("")}}`:s}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:a("","text/css"),rules:{},reset:r,toString:n}}const{sheet:i,rules:l}=t;for(let a=Y.length-1;a>=0;--a){const s=Y[a];if(!l[s]){const d=Y[a+1],m=l[d]?l[d].index:i.cssRules.length;i.insertRule("@media{}",m),i.insertRule(`--sxs{--sxs:${a}}`,m),l[s]={group:i.cssRules[m+1],index:m,cache:new Set([a])}}Je(l[s])}};return r(),t},Je=e=>{const t=e.group;let n=t.cssRules.length;e.apply=r=>{try{t.insertRule(r,n),++n}catch{}}},G=Symbol(),Xe=U(),pe=(e,t)=>Xe(e,()=>(...n)=>{let r={type:null,composers:new Set};for(const o of n)if(o!=null)if(o[L]){r.type==null&&(r.type=o[L].type);for(const i of o[L].composers)r.composers.add(i)}else o.constructor!==Object||o.$$typeof?r.type==null&&(r.type=o):r.composers.add(Qe(o,e));return r.type==null&&(r.type="span"),r.composers.size||r.composers.add(["PJLV",{},[],[],{},[]]),et(e,r,t)}),Qe=({variants:e,compoundVariants:t,defaultVariants:n,...r},o)=>{const i=`${M(o.prefix)}c-${N(r)}`,l=[],a=[],s=Object.create(null),d=[];for(const c in n)s[c]=String(n[c]);if(typeof e=="object"&&e)for(const c in e){m=s,f=c,Fe.call(m,f)||(s[c]="undefined");const g=e[c];for(const b in g){const v={[c]:String(b)};String(b)==="undefined"&&d.push(c);const x=g[b],$=[v,x,!ce(x)];l.push($)}}var m,f;if(typeof t=="object"&&t)for(const c of t){let{css:g,...b}=c;g=typeof g=="object"&&g||{};for(const x in b)b[x]=String(b[x]);const v=[b,g,!ce(g)];a.push(v)}return[i,r,l,a,s,d]},et=(e,t,n)=>{const[r,o,i,l]=tt(t.composers),a=typeof t.type=="function"||t.type.$$typeof?(f=>{function c(){for(let g=0;g<c[G].length;g++){const[b,v]=c[G][g];f.rules[b].apply(v)}return c[G]=[],null}return c[G]=[],c.rules={},Y.forEach(g=>c.rules[g]={apply:b=>c[G].push([g,b])}),c})(n):null,s=(a||n).rules,d=`.${r}${o.length>1?`:where(.${o.slice(1).join(".")})`:""}`,m=f=>{f=typeof f=="object"&&f||nt;const{css:c,...g}=f,b={};for(const $ in i)if(delete g[$],$ in f){let k=f[$];typeof k=="object"&&k?b[$]={"@initial":i[$],...k}:(k=String(k),b[$]=k!=="undefined"||l.has($)?k:i[$])}else b[$]=i[$];const v=new Set([...o]);for(const[$,k,C,E]of t.composers){n.rules.styled.cache.has($)||(n.rules.styled.cache.add($),H(k,[`.${$}`],[],e,z=>{s.styled.apply(z)}));const V=ge(C,b,e.media),R=ge(E,b,e.media,!0);for(const z of V)if(z!==void 0)for(const[P,W,B]of z){const j=`${$}-${N(W)}-${P}`;v.add(j);const F=(B?n.rules.resonevar:n.rules.onevar).cache,Z=B?s.resonevar:s.onevar;F.has(j)||(F.add(j),H(W,[`.${j}`],[],e,K=>{Z.apply(K)}))}for(const z of R)if(z!==void 0)for(const[P,W]of z){const B=`${$}-${N(W)}-${P}`;v.add(B),n.rules.allvar.cache.has(B)||(n.rules.allvar.cache.add(B),H(W,[`.${B}`],[],e,j=>{s.allvar.apply(j)}))}}if(typeof c=="object"&&c){const $=`${r}-i${N(c)}-css`;v.add($),n.rules.inline.cache.has($)||(n.rules.inline.cache.add($),H(c,[`.${$}`],[],e,k=>{s.inline.apply(k)}))}for(const $ of String(f.className||"").trim().split(/\s+/))$&&v.add($);const x=g.className=[...v].join(" ");return{type:t.type,className:x,selector:d,props:g,toString:()=>x,deferredInjector:a}};return ae(m,{className:r,selector:d,[L]:t,toString:()=>(n.rules.styled.cache.has(r)||m(),r)})},tt=e=>{let t="";const n=[],r={},o=[];for(const[i,,,,l,a]of e){t===""&&(t=i),n.push(i),o.push(...a);for(const s in l){const d=l[s];(r[s]===void 0||d!=="undefined"||a.includes(d))&&(r[s]=d)}}return[t,n,r,new Set(o)]},ge=(e,t,n,r)=>{const o=[];e:for(let[i,l,a]of e){if(a)continue;let s,d=0,m=!1;for(s in i){const f=i[s];let c=t[s];if(c!==f){if(typeof c!="object"||!c)continue e;{let g,b,v=0;for(const x in c){if(f===String(c[x])){if(x!=="@initial"){const $=x.slice(1);(b=b||[]).push($ in n?n[$]:x.replace(/^@media ?/,"")),m=!0}d+=v,g=!0}++v}if(b&&b.length&&(l={["@media "+b.join(", ")]:l}),!g)continue e}}}(o[d]=o[d]||[]).push([r?"cv":`${s}-${i[s]}`,l,m])}return o},nt={},rt=U(),ot=(e,t)=>rt(e,()=>(...n)=>{const r=()=>{for(let o of n){o=typeof o=="object"&&o||{};let i=N(o);if(!t.rules.global.cache.has(i)){if(t.rules.global.cache.add(i),"@import"in o){let l=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let a of[].concat(o["@import"]))a=a.includes('"')||a.includes("'")?a:`"${a}"`,t.sheet.insertRule(`@import ${a};`,l++);delete o["@import"]}H(o,[],[],e,l=>{t.rules.global.apply(l)})}}return""};return ae(r,{toString:r})}),it=U(),at=(e,t)=>it(e,()=>n=>{const r=`${M(e.prefix)}k-${N(n)}`,o=()=>{if(!t.rules.global.cache.has(r)){t.rules.global.cache.add(r);const i=[];H(n,[],[],e,a=>i.push(a));const l=`@keyframes ${r}{${i.join("")}}`;t.rules.global.apply(l)}return r};return ae(o,{get name(){return o()},toString:o})}),st=class{constructor(e,t,n,r){this.token=e==null?"":String(e),this.value=t==null?"":String(t),this.scale=n==null?"":String(n),this.prefix=r==null?"":String(r)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+M(this.prefix)+M(this.scale)+this.token}toString(){return this.computedValue}},lt=U(),ct=(e,t)=>lt(e,()=>(n,r)=>{r=typeof n=="object"&&n||Object(r);const o=`.${n=(n=typeof n=="string"?n:"")||`${M(e.prefix)}t-${N(r)}`}`,i={},l=[];for(const s in r){i[s]={};for(const d in r[s]){const m=`--${M(e.prefix)}${s}-${d}`,f=xe(String(r[s][d]),e.prefix,s);i[s][d]=new st(d,f,s,e.prefix),l.push(`${m}:${f}`)}}const a=()=>{if(l.length&&!t.rules.themed.cache.has(n)){t.rules.themed.cache.add(n);const s=`${r===e.theme?":root,":""}.${n}{${l.join(";")}}`;t.rules.themed.apply(s)}return n};return{...i,get className(){return a()},selector:o,toString:a}}),dt=U(),ut=U(),ft=e=>{const t=(n=>{let r=!1;const o=dt(n,i=>{r=!0;const l="prefix"in(i=typeof i=="object"&&i||{})?String(i.prefix):"",a=typeof i.media=="object"&&i.media||{},s=typeof i.root=="object"?i.root||null:globalThis.document||null,d=typeof i.theme=="object"&&i.theme||{},m={prefix:l,media:a,theme:d,themeMap:typeof i.themeMap=="object"&&i.themeMap||{...$e},utils:typeof i.utils=="object"&&i.utils||{}},f=Ke(s),c={css:pe(m,f),globalCss:ot(m,f),keyframes:at(m,f),createTheme:ct(m,f),reset(){f.reset(),c.theme.toString()},theme:{},sheet:f,config:m,prefix:l,getCssText:f.toString,toString:f.toString};return String(c.theme=c.createTheme(d)),c});return r||o.reset(),o})(e);return t.styled=(({config:n,sheet:r})=>ut(n,()=>{const o=pe(n,r);return(...i)=>{const l=o(...i),a=l[L].type,s=h.forwardRef((d,m)=>{const f=d&&d.as||a,{props:c,deferredInjector:g}=l(d);return delete c.as,c.ref=m,g?h.createElement(h.Fragment,null,h.createElement(f,c),h.createElement(g,null)):h.createElement(f,c)});return s.className=l.className,s.displayName=`Styled.${a.displayName||a.name||a}`,s.selector=l.selector,s.toString=()=>l.selector,s[L]=l[L],s}}))(t),t};function Se(e,t=[]){let n=[];function r(i,l){const a=u.createContext(l),s=n.length;n=[...n,l];function d(f){const{scope:c,children:g,...b}=f,v=(c==null?void 0:c[e][s])||a,x=u.useMemo(()=>b,Object.values(b));return u.createElement(v.Provider,{value:x},g)}function m(f,c){const g=(c==null?void 0:c[e][s])||a,b=u.useContext(g);if(b)return b;if(l!==void 0)return l;throw new Error(`\`${f}\` must be used within \`${i}\``)}return d.displayName=i+"Provider",[d,m]}const o=()=>{const i=n.map(l=>u.createContext(l));return function(a){const s=(a==null?void 0:a[e])||i;return u.useMemo(()=>({[`__scope${e}`]:{...a,[e]:s}}),[a,s])}};return o.scopeName=e,[r,pt(o,...t)]}function pt(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(o=>({useScope:o(),scopeName:o.scopeName}));return function(i){const l=r.reduce((a,{useScope:s,scopeName:d})=>{const f=s(i)[`__scope${d}`];return{...a,...f}},{});return u.useMemo(()=>({[`__scope${t.scopeName}`]:l}),[l])}};return n.scopeName=t.scopeName,n}function se(e){const t=u.useRef(e);return u.useEffect(()=>{t.current=e}),u.useMemo(()=>(...n)=>{var r;return(r=t.current)===null||r===void 0?void 0:r.call(t,...n)},[])}const X=globalThis!=null&&globalThis.document?u.useLayoutEffect:()=>{};function gt(e,t){typeof e=="function"?e(t):e!=null&&(e.current=t)}function ve(...e){return t=>e.forEach(n=>gt(n,t))}function ke(...e){return u.useCallback(ve(...e),e)}const ye=u.forwardRef((e,t)=>{const{children:n,...r}=e,o=u.Children.toArray(n),i=o.find(ht);if(i){const l=i.props.children,a=o.map(s=>s===i?u.Children.count(l)>1?u.Children.only(null):u.isValidElement(l)?l.props.children:null:s);return u.createElement(ie,A({},r,{ref:t}),u.isValidElement(l)?u.cloneElement(l,void 0,a):null)}return u.createElement(ie,A({},r,{ref:t}),n)});ye.displayName="Slot";const ie=u.forwardRef((e,t)=>{const{children:n,...r}=e;return u.isValidElement(n)?u.cloneElement(n,{...bt(r,n.props),ref:ve(t,n.ref)}):u.Children.count(n)>1?u.Children.only(null):null});ie.displayName="SlotClone";const mt=({children:e})=>u.createElement(u.Fragment,null,e);function ht(e){return u.isValidElement(e)&&e.type===mt}function bt(e,t){const n={...t};for(const r in t){const o=e[r],i=t[r];/^on[A-Z]/.test(r)?o&&i?n[r]=(...a)=>{i(...a),o(...a)}:o&&(n[r]=o):r==="style"?n[r]={...o,...i}:r==="className"&&(n[r]=[o,i].filter(Boolean).join(" "))}return{...e,...n}}const $t=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"],q=$t.reduce((e,t)=>{const n=u.forwardRef((r,o)=>{const{asChild:i,...l}=r,a=i?ye:t;return u.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),u.createElement(a,A({},l,{ref:o}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),Ee="Avatar",[xt,In]=Se(Ee),[St,Ce]=xt(Ee),vt=u.forwardRef((e,t)=>{const{__scopeAvatar:n,...r}=e,[o,i]=u.useState("idle");return u.createElement(St,{scope:n,imageLoadingStatus:o,onImageLoadingStatusChange:i},u.createElement(q.span,A({},r,{ref:t})))}),kt="AvatarImage",yt=u.forwardRef((e,t)=>{const{__scopeAvatar:n,src:r,onLoadingStatusChange:o=()=>{},...i}=e,l=Ce(kt,n),a=wt(r),s=se(d=>{o(d),l.onImageLoadingStatusChange(d)});return X(()=>{a!=="idle"&&s(a)},[a,s]),a==="loaded"?u.createElement(q.img,A({},i,{ref:t,src:r})):null}),Et="AvatarFallback",Ct=u.forwardRef((e,t)=>{const{__scopeAvatar:n,delayMs:r,...o}=e,i=Ce(Et,n),[l,a]=u.useState(r===void 0);return u.useEffect(()=>{if(r!==void 0){const s=window.setTimeout(()=>a(!0),r);return()=>window.clearTimeout(s)}},[r]),l&&i.imageLoadingStatus!=="loaded"?u.createElement(q.span,A({},o,{ref:t})):null});function wt(e){const[t,n]=u.useState("idle");return u.useEffect(()=>{if(!e){n("error");return}let r=!0;const o=new window.Image,i=l=>()=>{r&&n(l)};return n("loading"),o.onload=i("loaded"),o.onerror=i("error"),o.src=e,()=>{r=!1}},[e]),t}const Rt=vt,It=yt,zt=Ct;var Bt=u.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1}),we=function(t,n,r){var o=r.get(t);return o?o(n):(console.error('Unsupported icon weight. Choose from "thin", "light", "regular", "bold", "fill", or "duotone".'),null)};function me(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var Re=u.forwardRef(function(e,t){var n=e.alt,r=e.color,o=e.size,i=e.weight,l=e.mirrored,a=e.children,s=e.renderPath,d=me(e,["alt","color","size","weight","mirrored","children","renderPath"]),m=u.useContext(Bt),f=m.color,c=f===void 0?"currentColor":f,g=m.size,b=m.weight,v=b===void 0?"regular":b,x=m.mirrored,$=x===void 0?!1:x,k=me(m,["color","size","weight","mirrored"]);return h.createElement("svg",Object.assign({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o??g,height:o??g,fill:r??c,viewBox:"0 0 256 256",transform:l||$?"scale(-1, 1)":void 0},k,d),!!n&&h.createElement("title",null,n),a,h.createElement("rect",{width:"256",height:"256",fill:"none"}),s(i??v,r??c))});Re.displayName="IconBase";const Ie=Re;var _=new Map;_.set("bold",function(e){return h.createElement(h.Fragment,null,h.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});_.set("duotone",function(e){return h.createElement(h.Fragment,null,h.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});_.set("fill",function(){return h.createElement(h.Fragment,null,h.createElement("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"}))});_.set("light",function(e){return h.createElement(h.Fragment,null,h.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});_.set("thin",function(e){return h.createElement(h.Fragment,null,h.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});_.set("regular",function(e){return h.createElement(h.Fragment,null,h.createElement("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var Pt=function(t,n){return we(t,n,_)},ze=u.forwardRef(function(e,t){return h.createElement(Ie,Object.assign({ref:t},e,{renderPath:Pt}))});ze.displayName="Check";const jt=ze;var O=new Map;O.set("bold",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}),h.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"}))});O.set("duotone",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"96",r:"64",opacity:"0.2"}),h.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),h.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});O.set("fill",function(){return h.createElement(h.Fragment,null,h.createElement("path",{d:"M231.9,212a120.7,120.7,0,0,0-67.1-54.2,72,72,0,1,0-73.6,0A120.7,120.7,0,0,0,24.1,212a7.7,7.7,0,0,0,0,8,7.8,7.8,0,0,0,6.9,4H225a7.8,7.8,0,0,0,6.9-4A7.7,7.7,0,0,0,231.9,212Z"}))});O.set("light",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}),h.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"}))});O.set("thin",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}),h.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"}))});O.set("regular",function(e){return h.createElement(h.Fragment,null,h.createElement("circle",{cx:"128",cy:"96",r:"64",fill:"none",stroke:e,strokeMiterlimit:"10",strokeWidth:"16"}),h.createElement("path",{d:"M31,216a112,112,0,0,1,194,0",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"}))});var At=function(t,n){return we(t,n,O)},Be=u.forwardRef(function(e,t){return h.createElement(Ie,Object.assign({ref:t},e,{renderPath:At}))});Be.displayName="User";const Mt=Be;function he(e,t,{checkForDefaultPrevented:n=!0}={}){return function(o){if(e==null||e(o),n===!1||!o.defaultPrevented)return t==null?void 0:t(o)}}function Wt({prop:e,defaultProp:t,onChange:n=()=>{}}){const[r,o]=Lt({defaultProp:t,onChange:n}),i=e!==void 0,l=i?e:r,a=se(n),s=u.useCallback(d=>{if(i){const f=typeof d=="function"?d(e):d;f!==e&&a(f)}else o(d)},[i,e,o,a]);return[l,s]}function Lt({defaultProp:e,onChange:t}){const n=u.useState(e),[r]=n,o=u.useRef(r),i=se(t);return u.useEffect(()=>{o.current!==r&&(i(r),o.current=r)},[r,o,i]),n}function Nt(e){const t=u.useRef({value:e,previous:e});return u.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}function Tt(e){const[t,n]=u.useState(void 0);return X(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(o=>{if(!Array.isArray(o)||!o.length)return;const i=o[0];let l,a;if("borderBoxSize"in i){const s=i.borderBoxSize,d=Array.isArray(s)?s[0]:s;l=d.inlineSize,a=d.blockSize}else l=e.offsetWidth,a=e.offsetHeight;n({width:l,height:a})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}function _t(e,t){return u.useReducer((n,r)=>{const o=t[n][r];return o??n},e)}const Pe=e=>{const{present:t,children:n}=e,r=Ot(t),o=typeof n=="function"?n({present:r.isPresent}):u.Children.only(n),i=ke(r.ref,o.ref);return typeof n=="function"||r.isPresent?u.cloneElement(o,{ref:i}):null};Pe.displayName="Presence";function Ot(e){const[t,n]=u.useState(),r=u.useRef({}),o=u.useRef(e),i=u.useRef("none"),l=e?"mounted":"unmounted",[a,s]=_t(l,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return u.useEffect(()=>{const d=J(r.current);i.current=a==="mounted"?d:"none"},[a]),X(()=>{const d=r.current,m=o.current;if(m!==e){const c=i.current,g=J(d);e?s("MOUNT"):g==="none"||(d==null?void 0:d.display)==="none"?s("UNMOUNT"):s(m&&c!==g?"ANIMATION_OUT":"UNMOUNT"),o.current=e}},[e,s]),X(()=>{if(t){const d=f=>{const g=J(r.current).includes(f.animationName);f.target===t&&g&&_e.flushSync(()=>s("ANIMATION_END"))},m=f=>{f.target===t&&(i.current=J(r.current))};return t.addEventListener("animationstart",m),t.addEventListener("animationcancel",d),t.addEventListener("animationend",d),()=>{t.removeEventListener("animationstart",m),t.removeEventListener("animationcancel",d),t.removeEventListener("animationend",d)}}else s("ANIMATION_END")},[t,s]),{isPresent:["mounted","unmountSuspended"].includes(a),ref:u.useCallback(d=>{d&&(r.current=getComputedStyle(d)),n(d)},[])}}function J(e){return(e==null?void 0:e.animationName)||"none"}const je="Checkbox",[Ft,zn]=Se(je),[Dt,Ht]=Ft(je),Ut=u.forwardRef((e,t)=>{const{__scopeCheckbox:n,name:r,checked:o,defaultChecked:i,required:l,disabled:a,value:s="on",onCheckedChange:d,...m}=e,[f,c]=u.useState(null),g=ke(t,C=>c(C)),b=u.useRef(!1),v=f?!!f.closest("form"):!0,[x=!1,$]=Wt({prop:o,defaultProp:i,onChange:d}),k=u.useRef(x);return u.useEffect(()=>{const C=f==null?void 0:f.form;if(C){const E=()=>$(k.current);return C.addEventListener("reset",E),()=>C.removeEventListener("reset",E)}},[f,$]),u.createElement(Dt,{scope:n,state:x,disabled:a},u.createElement(q.button,A({type:"button",role:"checkbox","aria-checked":T(x)?"mixed":x,"aria-required":l,"data-state":Ae(x),"data-disabled":a?"":void 0,disabled:a,value:s},m,{ref:g,onKeyDown:he(e.onKeyDown,C=>{C.key==="Enter"&&C.preventDefault()}),onClick:he(e.onClick,C=>{$(E=>T(E)?!0:!E),v&&(b.current=C.isPropagationStopped(),b.current||C.stopPropagation())})})),v&&u.createElement(Yt,{control:f,bubbles:!b.current,name:r,value:s,checked:x,required:l,disabled:a,style:{transform:"translateX(-100%)"}}))}),Vt="CheckboxIndicator",Gt=u.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:r,...o}=e,i=Ht(Vt,n);return u.createElement(Pe,{present:r||T(i.state)||i.state===!0},u.createElement(q.span,A({"data-state":Ae(i.state),"data-disabled":i.disabled?"":void 0},o,{ref:t,style:{pointerEvents:"none",...e.style}})))}),Yt=e=>{const{control:t,checked:n,bubbles:r=!0,...o}=e,i=u.useRef(null),l=Nt(n),a=Tt(t);return u.useEffect(()=>{const s=i.current,d=window.HTMLInputElement.prototype,f=Object.getOwnPropertyDescriptor(d,"checked").set;if(l!==n&&f){const c=new Event("click",{bubbles:r});s.indeterminate=T(n),f.call(s,T(n)?!1:n),s.dispatchEvent(c)}},[l,n,r]),u.createElement("input",A({type:"checkbox","aria-hidden":!0,defaultChecked:T(n)?!1:n},o,{tabIndex:-1,ref:i,style:{...e.style,...a,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function T(e){return e==="indeterminate"}function Ae(e){return T(e)?"indeterminate":e?"checked":"unchecked"}const qt=Ut,Zt=Gt;var Kt=Object.defineProperty,Jt=Object.defineProperties,Xt=Object.getOwnPropertyDescriptors,Q=Object.getOwnPropertySymbols,Me=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable,be=(e,t,n)=>t in e?Kt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ee=(e,t)=>{for(var n in t||(t={}))Me.call(t,n)&&be(e,n,t[n]);if(Q)for(var n of Q(t))We.call(t,n)&&be(e,n,t[n]);return e},Le=(e,t)=>Jt(e,Xt(t)),Qt=(e,t)=>{var n={};for(var r in e)Me.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&Q)for(var r of Q(e))t.indexOf(r)<0&&We.call(e,r)&&(n[r]=e[r]);return n},en={white:"#FFF",black:"#000",gray100:"#E1E1E6",gray200:"#A9A9B2",gray400:"#7C7C8A",gray500:"#505059",gray600:"#323238",gray700:"#29292E",gray800:"#202024",gray900:"#121214",ignite300:"#00B37E",ignite500:"#00875F",ignite700:"#015F43",ignite900:"#00291D"},tn={1:"0.25rem",2:"0.5rem",3:"0.75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",10:"2.5rem",12:"3rem",16:"4rem",20:"5rem",40:"10rem",64:"16rem",80:"20rem"},nn={px:"1px",xs:"4px",sm:"6px",md:"8px",lg:"16px",full:"99999px"},rn={xxs:"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","4xl":"2rem","5xl":"2.25rem","6xl":"3rem","7xl":"4rem","8xl":"4.5rem","9xl":"6rem"},on={regular:"400",medium:"500",bold:"700"},an={default:"Roboto, sans-serif",code:"monospace"},sn={shorter:"125%",short:"140%",base:"160%",tall:"180%"},{styled:y,css:Bn,globalCss:Pn,keyframes:Ne,getCssText:jn,theme:An,createTheme:Mn,config:Wn}=ft({themeMap:Le(ee({},$e),{height:"space",width:"space"}),theme:{colors:en,fontSizes:rn,fontWeights:on,fonts:an,lineHeights:sn,radii:nn,space:tn}}),ln=y("div",{padding:"$4",borderRadius:"$md",backgroundColor:"$gray800",border:"solid 1px $gray600"});ln.displayName="Box";var cn=y("p",{fontFamily:"$default",lineHeight:"$base",margin:0,color:"$gray100",variants:{size:{xxs:{fontSize:"$xxs"},xs:{fontSize:"$xs"},sm:{fontSize:"$sm"},md:{fontSize:"$md"},lg:{fontSize:"$lg"},xl:{fontSize:"$xl"},"2xl":{fontSize:"$2xl"},"4xl":{fontSize:"$4xl"},"5xl":{fontSize:"$5xl"},"6xl":{fontSize:"$6xl"},"7xl":{fontSize:"$7xl"},"8xl":{fontSize:"$8xl"},"9xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}}),Ln=y("h2",{fontFamily:"$default",lineHeight:"$shorter",margin:0,color:"$gray100",variants:{size:{sm:{fontSize:"$xl"},md:{fontSize:"$2xl"},lg:{fontSize:"$4xl"},"2xl":{fontSize:"$5xl"},"3xl":{fontSize:"$6xl"},"4xl":{fontSize:"$7xl"},"5xl":{fontSize:"$8xl"},"6xl":{fontSize:"$9xl"}}},defaultVariants:{size:"md"}}),dn=y(Rt,{borderRadius:"$full",display:"inline-block",width:"$12",height:"$12",overflow:"hidden"}),un=y(It,{width:"100%",height:"100%",objectFit:"cover",borderRadius:"inherit"}),fn=y(zt,{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"$gray600",color:"$gray800",svg:{width:"$6",height:"$6"}});function Nn(e){return I.jsxs(dn,{children:[I.jsx(un,ee({},e)),I.jsx(fn,{delayMs:600,children:I.jsx(Mt,{})})]})}var Tn=y("button",{all:"unset",borderRadius:"$sm",fontSize:"$sm",fontWeight:"$medium",fontFamily:"$default",textAlign:"center",minWidth:120,boxSizing:"border-box",padding:"0 $4",display:"flex",alignItems:"center",justifyContent:"center",gap:"$2",cursor:"pointer","&:disabled":{cursor:"not-allowed"},svg:{width:"$4",height:"$4"},variants:{variant:{primary:{color:"$white",background:"$ignite500","&:not(:disabled):hover":{background:"$ignite300"},"&:disabled":{background:"$gray200"}},secondary:{color:"$ignite300",border:"2px solid $ignite500","&:not(:disabled):hover":{background:"$ignite500",color:"$white"},"&:disabled":{background:"$gray200",color:"$gray200"}},tertiary:{color:"$gray100","&:not(:disabled):hover":{color:"$white"},"&:disabled":{color:"$gray600"}}},size:{sm:{height:38},md:{height:46}}},defaultVariants:{variant:"primary",size:"md"}}),pn=y("div",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",display:"flex",alignItems:"baseline","&:has(input:focus)":{borderColor:"$ignite300"},"&:has(input:disabled)":{opacity:.5,cursor:"not-allowed"}}),gn=y("span",{fontFamily:"$default",fontSize:"$sm",color:"$gray400",fontWeight:"regular"}),mn=y("input",{fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"regular",background:"transparent",border:0,width:"100%","&:focus":{outline:0},"&:disabled":{cursor:"not-allowed"},"&:placeholder":{color:"$gray400"}});function _n(e){var t=e,{prefix:n}=t,r=Qt(t,["prefix"]);return console.log("TextInput"),I.jsxs(pn,{children:[!!n&&I.jsx(gn,{children:n}),I.jsx(mn,ee({},r))]})}var hn=y("textarea",{backgroundColor:"$gray900",padding:"$3 $4",borderRadius:"$sm",boxSizing:"border-box",border:"2px solid $gray900",fontFamily:"$default",fontSize:"$sm",color:"$white",fontWeight:"$regular",resize:"vertical",minHeight:80,"&:focus":{outline:0,borderColor:"$ignite300"},"&:disabled":{opacity:.5,cursor:"not-allowed"},"&:placeholder":{color:"$gray400"}});hn.displayName="TextArea";var bn=y(qt,{all:"unset",width:"$6",height:"$6",backgroundColor:"$gray900",borderRadius:"$xs",lineHeight:0,cursor:"pointer",overflow:"hidden",boxSizing:"border-box",display:"flex",justifyContent:"center",alignItems:"center",border:"2px solid $gray900",'&[data-state="checked"]':{backgroundColor:"$ignite300"},"&:focus":{border:"2px solid $ignite300"}}),$n=Ne({from:{transform:"translateY(-100%)"},to:{transform:"translateY(0)"}}),xn=Ne({from:{transform:"translateY(0)"},to:{transform:"translateY(-100%)"}}),Sn=y(Zt,{color:"$white",width:"$4",height:"$4",'&[data-state="checked"]':{animation:`${$n} 200ms ease-out`},'&[data-state="unchecked"]':{animation:`${xn} 200ms ease-out`}});function On(e){return I.jsx(bn,Le(ee({},e),{children:I.jsx(Sn,{asChild:!0,children:I.jsx(jt,{weight:"bold"})})}))}var vn=y("div",{}),kn=y(cn,{color:"$gray200",defaultVariants:{size:"xs"}}),yn=y("div",{display:"grid",gridTemplateColumns:"repeat(var(--steps-size), 1fr)",gap:"$2",marginTop:"$1"}),En=y("div",{height:"$1",borderRadius:"$px",backgroundColor:"$gray600",variants:{active:{true:{backgroundColor:"$gray100"}}}});function Fn({size:e,currentStep:t=1}){return I.jsxs(vn,{children:[I.jsxs(kn,{children:["Passo ",t," de ",e]}),I.jsx(yn,{css:{"--steps-size":e},children:Array.from({length:e},(n,r)=>r+1).map(n=>I.jsx(En,{active:t>=n},n))})]})}export{Nn as A,ln as B,On as C,Ln as H,Ie as I,Fn as M,cn as T,Tn as a,hn as b,_n as c,we as r};
//# sourceMappingURL=index-250502e3.js.map
