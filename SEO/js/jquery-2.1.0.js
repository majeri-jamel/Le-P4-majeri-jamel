/*! jQuery v2.1.0 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */ ! function(a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
        if (!a.document) throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){var n=[],r=n.slice,i=n.concat,o=n.push,s=n.indexOf,a={},u=a.toString,l=a.hasOwnProperty,c="".trim,f={},p=e.document,d="2.1.0",h=function(e,t){return new h.fn.init(e,t)},g=/^-ms-/,m=/-([\da-z])/gi,v=function(e,t){return t.toUpperCase()};function y(e){var t=e.length,n=h.type(e);return"function"!==n&&!h.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e))}h.fn=h.prototype={jquery:d,constructor:h,selector:"",length:0,toArray:function(){return r.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:r.call(this)},pushStack:function(e){var t=h.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return h.each(this,e,t)},map:function(e){return this.pushStack(h.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(r.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:o,sort:n.sort,splice:n.splice},h.extend=h.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[a]||{},a++),"object"==typeof s||h.isFunction(s)||(s={}),a===u&&(s=this,a--);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],s!==(r=e[t])&&(l&&r&&(h.isPlainObject(r)||(i=h.isArray(r)))?(i?(i=!1,o=n&&h.isArray(n)?n:[]):o=n&&h.isPlainObject(n)?n:{},s[t]=h.extend(l,o,r)):void 0!==r&&(s[t]=r));return s},h.extend({expando:"jQuery"+(d+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===h.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return e-parseFloat(e)>=0},isPlainObject:function(e){if("object"!==h.type(e)||e.nodeType||h.isWindow(e))return!1;try{if(e.constructor&&!l.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?a[u.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval;(e=h.trim(e))&&(1===e.indexOf("use strict")?((t=p.createElement("script")).text=e,p.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(g,"ms-").replace(m,v)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r=0,i=e.length,o=y(e);if(n){if(o)for(;i>r&&!1!==t.apply(e[r],n);r++);else for(r in e)if(!1===t.apply(e[r],n))break}else if(o)for(;i>r&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":c.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(y(Object(e))?h.merge(n,"string"==typeof e?[e]:e):o.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:s.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;n>r;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,s=!n;o>i;i++)!t(e[i],i)!==s&&r.push(e[i]);return r},map:function(e,t,n){var r,o=0,s=e.length,a=[];if(y(e))for(;s>o;o++)null!=(r=t(e[o],o,n))&&a.push(r);else for(o in e)null!=(r=t(e[o],o,n))&&a.push(r);return i.apply([],a)},guid:1,proxy:function(e,t){var n,i,o;return"string"==typeof t&&(n=e[t],t=e,e=n),h.isFunction(e)?(i=r.call(arguments,2),(o=function(){return e.apply(t||this,i.concat(r.call(arguments)))}).guid=e.guid=e.guid||h.guid++,o):void 0},now:Date.now,support:f}),h.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){a["[object "+t+"]"]=t.toLowerCase()});var x=function(e){var t,n,r,i,o,s,a,u,l,c,f,p,d,h,g,m,v,y="sizzle"+-new Date,x=e.document,b=0,w=0,T=re(),C=re(),N=re(),k=function(e,t){return e===t&&(l=!0),0},E="undefined",D=1<<31,j={}.hasOwnProperty,S=[],A=S.pop,L=S.push,q=S.push,H=S.slice,O=S.indexOf||function(e){for(var t=0,n=this.length;n>t;t++)if(this[t]===e)return t;return-1},F="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",R=M.replace("w","w#"),W="\\["+P+"*("+M+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+R+")|)|)"+P+"*\\]",$=":("+M+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+W.replace(3,8)+")*)|.*)\\)|)",B=new RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),I=new RegExp("^"+P+"*,"+P+"*"),_=new RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),X=new RegExp("="+P+"*([^\\]'\"]*?)"+P+"*\\]","g"),z=new RegExp($),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:new RegExp("^(?:"+F+")$","i"),needsContext:new RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,G=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=/'|\\/g,ee=new RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),te=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)};try{q.apply(S=H.call(x.childNodes),x.childNodes),S[x.childNodes.length].nodeType}catch(e){q={apply:S.length?function(e,t){L.apply(e,H.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}function ne(e,t,r,i){var o,s,a,u,l,p,g,m,b,w;if((t?t.ownerDocument||t:x)!==f&&c(t),r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=(t=t||f).nodeType)&&9!==u)return[];if(d&&!i){if(o=J.exec(e))if(a=o[1]){if(9===u){if(!(s=t.getElementById(a))||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&v(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return q.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return q.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!h||!h.test(e))){if(m=g=y,b=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){for(p=de(e),(g=t.getAttribute("id"))?m=g.replace(Z,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=p.length;l--;)p[l]=m+he(p[l]);b=K.test(e)&&fe(t.parentNode)||t,w=p.join(",")}if(w)try{return q.apply(r,b.querySelectorAll(w)),r}catch(e){}finally{g||t.removeAttribute("id")}}}return we(e.replace(B,"$1"),t,r,i)}function re(){var e=[];return function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}}function ie(e){return e[y]=!0,e}function oe(e){var t=f.createElement("div");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function se(e,t){for(var n=e.split("|"),i=e.length;i--;)r.attrHandle[n[i]]=t}function ae(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function ue(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function le(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ce(e){return ie(function(t){return t=+t,ie(function(n,r){for(var i,o=e([],n.length,t),s=o.length;s--;)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}function fe(e){return e&&typeof e.getElementsByTagName!==E&&e}for(t in n=ne.support={},o=ne.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},c=ne.setDocument=function(e){var t,i=e?e.ownerDocument||e:x,s=i.defaultView;return i!==f&&9===i.nodeType&&i.documentElement?(f=i,p=i.documentElement,d=!o(i),s&&s!==s.top&&(s.addEventListener?s.addEventListener("unload",function(){c()},!1):s.attachEvent&&s.attachEvent("onunload",function(){c()})),n.attributes=oe(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=oe(function(e){return e.appendChild(i.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(i.getElementsByClassName)&&oe(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=oe(function(e){return p.appendChild(e).id=y,!i.getElementsByName||!i.getElementsByName(y).length}),n.getById?(r.find.ID=function(e,t){if(typeof t.getElementById!==E&&d){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},r.filter.ID=function(e){var t=e.replace(ee,te);return function(e){return e.getAttribute("id")===t}}):(delete r.find.ID,r.filter.ID=function(e){var t=e.replace(ee,te);return function(e){var n=typeof e.getAttributeNode!==E&&e.getAttributeNode("id");return n&&n.value===t}}),r.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==E?t.getElementsByTagName(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==E&&d?t.getElementsByClassName(e):void 0},g=[],h=[],(n.qsa=Q.test(i.querySelectorAll))&&(oe(function(e){e.innerHTML="<select t=''><option selected=''></option></select>",e.querySelectorAll("[t^='']").length&&h.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||h.push("\\["+P+"*(?:value|"+F+")"),e.querySelectorAll(":checked").length||h.push(":checked")}),oe(function(e){var t=i.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&h.push("name"+P+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||h.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),h.push(",.*:")})),(n.matchesSelector=Q.test(m=p.webkitMatchesSelector||p.mozMatchesSelector||p.oMatchesSelector||p.msMatchesSelector))&&oe(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",$)}),h=h.length&&new RegExp(h.join("|")),g=g.length&&new RegExp(g.join("|")),t=Q.test(p.compareDocumentPosition),v=t||Q.test(p.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},k=t?function(e,t){if(e===t)return l=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===i||e.ownerDocument===x&&v(x,e)?-1:t===i||t.ownerDocument===x&&v(x,t)?1:u?O.call(u,e)-O.call(u,t):0:4&r?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,o=e.parentNode,s=t.parentNode,a=[e],c=[t];if(!o||!s)return e===i?-1:t===i?1:o?-1:s?1:u?O.call(u,e)-O.call(u,t):0;if(o===s)return ae(e,t);for(n=e;n=n.parentNode;)a.unshift(n);for(n=t;n=n.parentNode;)c.unshift(n);for(;a[r]===c[r];)r++;return r?ae(a[r],c[r]):a[r]===x?-1:c[r]===x?1:0},i):f},ne.matches=function(e,t){return ne(e,null,null,t)},ne.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&c(e),t=t.replace(X,"='$1']"),!(!n.matchesSelector||!d||g&&g.test(t)||h&&h.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return ne(t,f,null,[e]).length>0},ne.contains=function(e,t){return(e.ownerDocument||e)!==f&&c(e),v(e,t)},ne.attr=function(e,t){(e.ownerDocument||e)!==f&&c(e);var i=r.attrHandle[t.toLowerCase()],o=i&&j.call(r.attrHandle,t.toLowerCase())?i(e,t,!d):void 0;return void 0!==o?o:n.attributes||!d?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},ne.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},ne.uniqueSort=function(e){var t,r=[],i=0,o=0;if(l=!n.detectDuplicates,u=!n.sortStable&&e.slice(0),e.sort(k),l){for(;t=e[o++];)t===e[o]&&(i=r.push(o));for(;i--;)e.splice(r[i],1)}return u=null,e},i=ne.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[r++];)n+=i(t);return n},(r=ne.selectors={cacheLength:50,createPseudo:ie,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(ee,te),e[3]=(e[4]||e[5]||"").replace(ee,te),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ne.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ne.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return V.CHILD.test(e[0])?null:(e[3]&&void 0!==e[4]?e[2]=e[4]:n&&z.test(n)&&(t=de(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(ee,te).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=T[e+" "];return t||(t=new RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&T(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==E&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ne.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,v=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){for(;g;){for(f=t;f=f[g];)if(a?f.nodeName.toLowerCase()===v:1===f.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[s?m.firstChild:m.lastChild],s&&x){for(d=(l=(c=m[y]||(m[y]={}))[e]||[])[0]===b&&l[1],p=l[0]===b&&l[2],f=d&&m.childNodes[d];f=++d&&f&&f[g]||(p=d=0)||h.pop();)if(1===f.nodeType&&++p&&f===t){c[e]=[b,d,p];break}}else if(x&&(l=(t[y]||(t[y]={}))[e])&&l[0]===b)p=l[1];else for(;(f=++d&&f&&f[g]||(p=d=0)||h.pop())&&((a?f.nodeName.toLowerCase()!==v:1!==f.nodeType)||!++p||(x&&((f[y]||(f[y]={}))[e]=[b,p]),f!==t)););return(p-=i)===r||p%r==0&&p/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||ne.error("unsupported pseudo: "+e);return i[y]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?ie(function(e,n){for(var r,o=i(e,t),s=o.length;s--;)e[r=O.call(e,o[s])]=!(n[r]=o[s])}):function(e){return i(e,0,n)}):i}},pseudos:{not:ie(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[y]?ie(function(e,t,n,i){for(var o,s=r(e,null,i,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:ie(function(e){return function(t){return ne(e,t).length>0}}),contains:ie(function(e){return function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:ie(function(e){return U.test(e||"")||ne.error("unsupported lang: "+e),e=e.replace(ee,te).toLowerCase(),function(t){var n;do{if(n=d?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===p},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return G.test(e.nodeName)},input:function(e){return Y.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ce(function(){return[0]}),last:ce(function(e,t){return[t-1]}),eq:ce(function(e,t,n){return[0>n?n+t:n]}),even:ce(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:ce(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:ce(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:ce(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=ue(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=le(t);function pe(){}function de(e,t){var n,i,o,s,a,u,l,c=C[e+" "];if(c)return t?0:c.slice(0);for(a=e,u=[],l=r.preFilter;a;){for(s in(!n||(i=I.exec(a)))&&(i&&(a=a.slice(i[0].length)||a),u.push(o=[])),n=!1,(i=_.exec(a))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),a=a.slice(n.length)),r.filter)!(i=V[s].exec(a))||l[s]&&!(i=l[s](i))||(n=i.shift(),o.push({value:n,type:s,matches:i}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ne.error(e):C(e,u).slice(0)}function he(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function ge(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=w++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,s){var a,u,l=[b,o];if(s){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,s))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if((a=(u=t[y]||(t[y]={}))[r])&&a[0]===b&&a[1]===o)return l[2]=a[2];if(u[r]=l,l[2]=e(t,n,s))return!0}}}function me(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function ve(e,t,n,r,i){for(var o,s=[],a=0,u=e.length,l=null!=t;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function ye(e,t,n,r,i,o){return r&&!r[y]&&(r=ye(r)),i&&!i[y]&&(i=ye(i,o)),ie(function(o,s,a,u){var l,c,f,p=[],d=[],h=s.length,g=o||function(e,t,n){for(var r=0,i=t.length;i>r;r++)ne(e,t[r],n);return n}(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:ve(g,p,e,a,u),v=n?i||(o?e:h||r)?[]:s:m;if(n&&n(m,v,a,u),r)for(l=ve(v,d),r(l,[],a,u),c=l.length;c--;)(f=l[c])&&(v[d[c]]=!(m[d[c]]=f));if(o){if(i||e){if(i){for(l=[],c=v.length;c--;)(f=v[c])&&l.push(m[c]=f);i(null,v=[],l,u)}for(c=v.length;c--;)(f=v[c])&&(l=i?O.call(o,f):p[c])>-1&&(o[l]=!(s[l]=f))}}else v=ve(v===s?v.splice(h,v.length):v),i?i(null,s,v,u):q.apply(s,v)})}function xe(e){for(var t,n,i,o=e.length,s=r.relative[e[0].type],u=s||r.relative[" "],l=s?1:0,c=ge(function(e){return e===t},u,!0),f=ge(function(e){return O.call(t,e)>-1},u,!0),p=[function(e,n,r){return!s&&(r||n!==a)||((t=n).nodeType?c(e,n,r):f(e,n,r))}];o>l;l++)if(n=r.relative[e[l].type])p=[ge(me(p),n)];else{if((n=r.filter[e[l].type].apply(null,e[l].matches))[y]){for(i=++l;o>i&&!r.relative[e[i].type];i++);return ye(l>1&&me(p),l>1&&he(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(B,"$1"),n,i>l&&xe(e.slice(l,i)),o>i&&xe(e=e.slice(i)),o>i&&he(e))}p.push(n)}return me(p)}function be(e,t){var n=t.length>0,i=e.length>0,o=function(o,s,u,l,c){var p,d,h,g=0,m="0",v=o&&[],y=[],x=a,w=o||i&&r.find.TAG("*",c),T=b+=null==x?1:Math.random()||.1,C=w.length;for(c&&(a=s!==f&&s);m!==C&&null!=(p=w[m]);m++){if(i&&p){for(d=0;h=e[d++];)if(h(p,s,u)){l.push(p);break}c&&(b=T)}n&&((p=!h&&p)&&g--,o&&v.push(p))}if(g+=m,n&&m!==g){for(d=0;h=t[d++];)h(v,y,s,u);if(o){if(g>0)for(;m--;)v[m]||y[m]||(y[m]=A.call(l));y=ve(y)}q.apply(l,y),c&&!o&&y.length>0&&g+t.length>1&&ne.uniqueSort(l)}return c&&(b=T,a=x),v};return n?ie(o):o}function we(e,t,i,o){var a,u,l,c,f,p=de(e);if(!o&&1===p.length){if((u=p[0]=p[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&d&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(ee,te),t)||[])[0]))return i;e=e.slice(u.shift().value.length)}for(a=V.needsContext.test(e)?0:u.length;a--&&(l=u[a],!r.relative[c=l.type]);)if((f=r.find[c])&&(o=f(l.matches[0].replace(ee,te),K.test(u[0].type)&&fe(t.parentNode)||t))){if(u.splice(a,1),!(e=o.length&&he(u)))return q.apply(i,o),i;break}}return s(e,p)(o,t,!d,i,K.test(e)&&fe(t.parentNode)||t),i}return pe.prototype=r.filters=r.pseudos,r.setFilters=new pe,s=ne.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){for(t||(t=de(e)),n=t.length;n--;)(o=xe(t[n]))[y]?r.push(o):i.push(o);o=N(e,be(i,r))}return o},n.sortStable=y.split("").sort(k).join("")===y,n.detectDuplicates=!!l,c(),n.sortDetached=oe(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),oe(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||se("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&oe(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||se("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),oe(function(e){return null==e.getAttribute("disabled")})||se(F,function(e,t,n){var r;return n?void 0:!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),ne}(e);h.find=x,h.expr=x.selectors,h.expr[":"]=h.expr.pseudos,h.unique=x.uniqueSort,h.text=x.getText,h.isXMLDoc=x.isXML,h.contains=x.contains;var b=h.expr.match.needsContext,w=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,T=/^.[^:#\[\.,]*$/;function C(e,t,n){if(h.isFunction(t))return h.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return h.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(T.test(t))return h.filter(t,e,n);t=h.filter(t,e)}return h.grep(e,function(e){return s.call(t,e)>=0!==n})}h.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?h.find.matchesSelector(r,e)?[r]:[]:h.find.matches(e,h.grep(t,function(e){return 1===e.nodeType}))},h.fn.extend({find:function(e){var t,n=this.length,r=[],i=this;if("string"!=typeof e)return this.pushStack(h(e).filter(function(){for(t=0;n>t;t++)if(h.contains(i[t],this))return!0}));for(t=0;n>t;t++)h.find(e,i[t],r);return(r=this.pushStack(n>1?h.unique(r):r)).selector=this.selector?this.selector+" "+e:e,r},filter:function(e){return this.pushStack(C(this,e||[],!1))},not:function(e){return this.pushStack(C(this,e||[],!0))},is:function(e){return!!C(this,"string"==typeof e&&b.test(e)?h(e):e||[],!1).length}});var N,k=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(h.fn.init=function(e,t){var n,r;if(!e)return this;if("string"==typeof e){if(!(n="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:k.exec(e))||!n[1]&&t)return!t||t.jquery?(t||N).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof h?t[0]:t,h.merge(this,h.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:p,!0)),w.test(n[1])&&h.isPlainObject(t))for(n in t)h.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}return(r=p.getElementById(n[2]))&&r.parentNode&&(this.length=1,this[0]=r),this.context=p,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):h.isFunction(e)?void 0!==N.ready?N.ready(e):e(h):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),h.makeArray(e,this))}).prototype=h.fn,N=h(p);var E=/^(?:parents|prev(?:Until|All))/,D={children:!0,contents:!0,next:!0,prev:!0};function j(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}h.extend({dir:function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&h(e).is(n))break;r.push(e)}return r},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),h.fn.extend({has:function(e){var t=h(e,this),n=t.length;return this.filter(function(){for(var e=0;n>e;e++)if(h.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],s=b.test(e)||"string"!=typeof e?h(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&h.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?h.unique(o):o)},index:function(e){return e?"string"==typeof e?s.call(h(e),this[0]):s.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(h.unique(h.merge(this.get(),h(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),h.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h.dir(e,"parentNode")},parentsUntil:function(e,t,n){return h.dir(e,"parentNode",n)},next:function(e){return j(e,"nextSibling")},prev:function(e){return j(e,"previousSibling")},nextAll:function(e){return h.dir(e,"nextSibling")},prevAll:function(e){return h.dir(e,"previousSibling")},nextUntil:function(e,t,n){return h.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return h.dir(e,"previousSibling",n)},siblings:function(e){return h.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return h.sibling(e.firstChild)},contents:function(e){return e.contentDocument||h.merge([],e.childNodes)}},function(e,t){h.fn[e]=function(n,r){var i=h.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=h.filter(r,i)),this.length>1&&(D[e]||h.unique(i),E.test(e)&&i.reverse()),this.pushStack(i)}});var S,A=/\S+/g,L={};function q(){p.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1),h.ready()}h.Callbacks=function(e){e="string"==typeof e?L[e]||function(e){var t=L[e]={};return h.each(e.match(A)||[],function(e,n){t[n]=!0}),t}(e):h.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(f){for(t=e.memory&&f,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(!1===a[s].apply(f[0],f[1])&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;!function t(n){h.each(n,function(n,r){var i=h.type(r);"function"===i?e.unique&&c.has(r)||a.push(r):r&&r.length&&"string"!==i&&t(r)})}(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&h.each(arguments,function(e,t){for(var n;(n=h.inArray(t,a,n))>-1;)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?h.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=void 0,this},disabled:function(){return!a},lock:function(){return u=void 0,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=[e,(t=t||[]).slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},h.extend({Deferred:function(e){var t=[["resolve","done",h.Callbacks("once memory"),"resolved"],["reject","fail",h.Callbacks("once memory"),"rejected"],["notify","progress",h.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return h.Deferred(function(n){h.each(t,function(t,o){var s=h.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&h.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o[0]+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?h.extend(e,r):r}},i={};return r.pipe=r.then,h.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,i,o=0,s=r.call(arguments),a=s.length,u=1!==a||e&&h.isFunction(e.promise)?a:0,l=1===u?e:h.Deferred(),c=function(e,n,i){return function(o){n[e]=this,i[e]=arguments.length>1?r.call(arguments):o,i===t?l.notifyWith(n,i):--u||l.resolveWith(n,i)}};if(a>1)for(t=new Array(a),n=new Array(a),i=new Array(a);a>o;o++)s[o]&&h.isFunction(s[o].promise)?s[o].promise().done(c(o,i,s)).fail(l.reject).progress(c(o,n,t)):--u;return u||l.resolveWith(i,s),l.promise()}}),h.fn.ready=function(e){return h.ready.promise().done(e),this},h.extend({isReady:!1,readyWait:1,holdReady:function(e){e?h.readyWait++:h.ready(!0)},ready:function(e){(!0===e?--h.readyWait:h.isReady)||(h.isReady=!0,!0!==e&&--h.readyWait>0||(S.resolveWith(p,[h]),h.fn.trigger&&h(p).trigger("ready").off("ready")))}}),h.ready.promise=function(t){return S||(S=h.Deferred(),"complete"===p.readyState?setTimeout(h.ready):(p.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1))),S.promise(t)},h.ready.promise();var H=h.access=function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===h.type(n))for(a in i=!0,n)h.access(e,t,a,n[a],!0,o,s);else if(void 0!==r&&(i=!0,h.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(h(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o};function O(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=h.expando+Math.random()}h.acceptData=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType},O.uid=1,O.accepts=h.acceptData,O.prototype={key:function(e){if(!O.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=O.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,h.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(h.isEmptyObject(o))h.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return void 0===t?n:n[t]},access:function(e,t,n){var r;return void 0===t||t&&"string"==typeof t&&void 0===n?void 0!==(r=this.get(e,t))?r:this.get(e,h.camelCase(t)):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(void 0===t)this.cache[o]={};else{h.isArray(t)?r=t.concat(t.map(h.camelCase)):(i=h.camelCase(t),t in s?r=[t,i]:r=(r=i)in s?[r]:r.match(A)||[]),n=r.length;for(;n--;)delete s[r[n]]}},hasData:function(e){return!h.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}};var F=new O,P=new O,M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,R=/([A-Z])/g;function W(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(R,"-$1").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:M.test(n)?h.parseJSON(n):n)}catch(e){}P.set(e,t,n)}else n=void 0;return n}h.extend({hasData:function(e){return P.hasData(e)||F.hasData(e)},data:function(e,t,n){return P.access(e,t,n)},removeData:function(e,t){P.remove(e,t)},_data:function(e,t,n){return F.access(e,t,n)},_removeData:function(e,t){F.remove(e,t)}}),h.fn.extend({data:function(e,t){var n,r,i,o=this[0],s=o&&o.attributes;if(void 0===e){if(this.length&&(i=P.get(o),1===o.nodeType&&!F.get(o,"hasDataAttrs"))){for(n=s.length;n--;)0===(r=s[n].name).indexOf("data-")&&(r=h.camelCase(r.slice(5)),W(o,r,i[r]));F.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){P.set(this,e)}):H(this,function(t){var n,r=h.camelCase(e);if(o&&void 0===t){if(void 0!==(n=P.get(o,e)))return n;if(void 0!==(n=P.get(o,r)))return n;if(void 0!==(n=W(o,r,void 0)))return n}else this.each(function(){var n=P.get(this,r);P.set(this,r,t),-1!==e.indexOf("-")&&void 0!==n&&P.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){P.remove(this,e)})}}),h.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=F.get(e,t),n&&(!r||h.isArray(n)?r=F.access(e,t,h.makeArray(n)):r.push(n)),r||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=h.queue(e,t),r=n.length,i=n.shift(),o=h._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){h.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return F.get(e,n)||F.access(e,n,{empty:h.Callbacks("once memory").add(function(){F.remove(e,[t+"queue",n])})})}}),h.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?h.queue(this[0],e):void 0===t?this:this.each(function(){var n=h.queue(this,e,t);h._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&h.dequeue(this,e)})},dequeue:function(e){return this.each(function(){h.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=h.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)(n=F.get(o[s],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var $=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,B=["Top","Right","Bottom","Left"],I=function(e,t){return e=t||e,"none"===h.css(e,"display")||!h.contains(e.ownerDocument,e)},_=/^(?:checkbox|radio)$/i;!function(){var e=p.createDocumentFragment().appendChild(p.createElement("div"));e.innerHTML="<input type='radio' checked='checked' name='t'/>",f.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",f.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var X="undefined";f.focusinBubbles="onfocusin"in e;var z=/^key/,U=/^(?:mouse|contextmenu)|click/,V=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function G(){return!0}function Q(){return!1}function J(){try{return p.activeElement}catch(e){}}h.event={global:{},add:function(e,t,n,r,i){var o,s,a,u,l,c,f,p,d,g,m,v=F.get(e);if(v)for(n.handler&&(n=(o=n).handler,i=o.selector),n.guid||(n.guid=h.guid++),(u=v.events)||(u=v.events={}),(s=v.handle)||(s=v.handle=function(t){return typeof h!==X&&h.event.triggered!==t.type?h.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(A)||[""]).length;l--;)d=m=(a=Y.exec(t[l])||[])[1],g=(a[2]||"").split(".").sort(),d&&(f=h.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=h.event.special[d]||{},c=h.extend({type:d,origType:m,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&h.expr.match.needsContext.test(i),namespace:g.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,g,s)||e.addEventListener&&e.addEventListener(d,s,!1)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),h.event.global[d]=!0)},remove:function(e,t,n,r,i){var o,s,a,u,l,c,f,p,d,g,m,v=F.hasData(e)&&F.get(e);if(v&&(u=v.events)){for(l=(t=(t||"").match(A)||[""]).length;l--;)if(d=m=(a=Y.exec(t[l])||[])[1],g=(a[2]||"").split(".").sort(),d){for(f=h.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],a=a[2]&&new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=p.length;o--;)c=p[o],!i&&m!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));s&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,g,v.handle)||h.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)h.event.remove(e,d+t[l],n,r,!0);h.isEmptyObject(u)&&(delete v.handle,F.remove(e,"events"))}},trigger:function(t,n,r,i){var o,s,a,u,c,f,d,g=[r||p],m=l.call(t,"type")?t.type:t,v=l.call(t,"namespace")?t.namespace.split("."):[];if(s=a=r=r||p,3!==r.nodeType&&8!==r.nodeType&&!V.test(m+h.event.triggered)&&(m.indexOf(".")>=0&&(v=m.split("."),m=v.shift(),v.sort()),c=m.indexOf(":")<0&&"on"+m,(t=t[h.expando]?t:new h.Event(m,"object"==typeof t&&t)).isTrigger=i?2:3,t.namespace=v.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+v.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:h.makeArray(n,[t]),d=h.event.special[m]||{},i||!d.trigger||!1!==d.trigger.apply(r,n))){if(!i&&!d.noBubble&&!h.isWindow(r)){for(u=d.delegateType||m,V.test(u+m)||(s=s.parentNode);s;s=s.parentNode)g.push(s),a=s;a===(r.ownerDocument||p)&&g.push(a.defaultView||a.parentWindow||e)}for(o=0;(s=g[o++])&&!t.isPropagationStopped();)t.type=o>1?u:d.bindType||m,(f=(F.get(s,"events")||{})[t.type]&&F.get(s,"handle"))&&f.apply(s,n),(f=c&&s[c])&&f.apply&&h.acceptData(s)&&(t.result=f.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,i||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(g.pop(),n)||!h.acceptData(r)||c&&h.isFunction(r[m])&&!h.isWindow(r)&&((a=r[c])&&(r[c]=null),h.event.triggered=m,r[m](),h.event.triggered=void 0,a&&(r[c]=a)),t.result}},dispatch:function(e){e=h.event.fix(e);var t,n,i,o,s,a=[],u=r.call(arguments),l=(F.get(this,"events")||{})[e.type]||[],c=h.event.special[e.type]||{};if(u[0]=e,e.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,e)){for(a=h.event.handlers.call(this,e,l),t=0;(o=a[t++])&&!e.isPropagationStopped();)for(e.currentTarget=o.elem,n=0;(s=o.handlers[n++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(s.namespace))&&(e.handleObj=s,e.data=s.data,void 0!==(i=((h.event.special[s.origType]||{}).handle||s.handler).apply(o.elem,u))&&!1===(e.result=i)&&(e.preventDefault(),e.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(!0!==u.disabled||"click"!==e.type){for(r=[],n=0;a>n;n++)void 0===r[i=(o=t[n]).selector+" "]&&(r[i]=o.needsContext?h(i,this).index(u)>=0:h.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return a<t.length&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button;return null==e.pageX&&null!=t.clientX&&(r=(n=e.target.ownerDocument||p).documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},fix:function(e){if(e[h.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];for(s||(this.fixHooks[i]=s=U.test(i)?this.mouseHooks:z.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new h.Event(o),t=r.length;t--;)e[n=r[t]]=o[n];return e.target||(e.target=p),3===e.target.nodeType&&(e.target=e.target.parentNode),s.filter?s.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==J()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===J()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&h.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(e){return h.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=h.extend(new h.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?h.event.trigger(i,null,t):h.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},h.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},h.Event=function(e,t){return this instanceof h.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.getPreventDefault&&e.getPreventDefault()?G:Q):this.type=e,t&&h.extend(this,t),this.timeStamp=e&&e.timeStamp||h.now(),void(this[h.expando]=!0)):new h.Event(e,t)},h.Event.prototype={isDefaultPrevented:Q,isPropagationStopped:Q,isImmediatePropagationStopped:Q,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=G,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=G,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=G,this.stopPropagation()}},h.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){h.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,i=e.handleObj;return(!r||r!==this&&!h.contains(this,r))&&(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}}),f.focusinBubbles||h.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){h.event.simulate(t,e.target,h.event.fix(e),!0)};h.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=F.access(r,t);i||r.addEventListener(e,n,!0),F.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=F.access(r,t)-1;i?F.access(r,t,i):(r.removeEventListener(e,n,!0),F.remove(r,t))}}}),h.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){for(s in"string"!=typeof t&&(n=n||t,t=void 0),e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=void 0):null==r&&("string"==typeof t?(r=n,n=void 0):(r=n,n=t,t=void 0)),!1===r)r=Q;else if(!r)return this;return 1===i&&(o=r,(r=function(e){return h().off(e),o.apply(this,arguments)}).guid=o.guid||(o.guid=h.guid++)),this.each(function(){h.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,h(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(!1===t||"function"==typeof t)&&(n=t,t=void 0),!1===n&&(n=Q),this.each(function(){h.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){h.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?h.event.trigger(e,t,n,!0):void 0}});var K=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Z=/<([\w:]+)/,ee=/<|&#?\w+;/,te=/<(?:script|style|link)/i,ne=/checked\s*(?:[^=]|=\s*.checked.)/i,re=/^$|\/(?:java|ecma)script/i,ie=/^true\/(.*)/,oe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,se={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ae(e,t){return h.nodeName(e,"table")&&h.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ue(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function le(e){var t=ie.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function ce(e,t){for(var n=0,r=e.length;r>n;n++)F.set(e[n],"globalEval",!t||F.get(t[n],"globalEval"))}function fe(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(F.hasData(e)&&(o=F.access(e),s=F.set(t,o),l=o.events))for(i in delete s.handle,s.events={},l)for(n=0,r=l[i].length;r>n;n++)h.event.add(t,i,l[i][n]);P.hasData(e)&&(a=P.access(e),u=h.extend({},a),P.set(t,u))}}function pe(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&h.nodeName(e,t)?h.merge([e],n):n}function de(e,t){var n=t.nodeName.toLowerCase();"input"===n&&_.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}se.optgroup=se.option,se.tbody=se.tfoot=se.colgroup=se.caption=se.thead,se.th=se.td,h.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=h.contains(e.ownerDocument,e);if(!(f.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||h.isXMLDoc(e)))for(s=pe(a),r=0,i=(o=pe(e)).length;i>r;r++)de(o[r],s[r]);if(t)if(n)for(o=o||pe(e),s=s||pe(a),r=0,i=o.length;i>r;r++)fe(o[r],s[r]);else fe(e,a);return(s=pe(a,"script")).length>0&&ce(s,!u&&pe(e,"script")),a},buildFragment:function(e,t,n,r){for(var i,o,s,a,u,l,c=t.createDocumentFragment(),f=[],p=0,d=e.length;d>p;p++)if((i=e[p])||0===i)if("object"===h.type(i))h.merge(f,i.nodeType?[i]:i);else if(ee.test(i)){for(o=o||c.appendChild(t.createElement("div")),s=(Z.exec(i)||["",""])[1].toLowerCase(),a=se[s]||se._default,o.innerHTML=a[1]+i.replace(K,"<$1></$2>")+a[2],l=a[0];l--;)o=o.lastChild;h.merge(f,o.childNodes),(o=c.firstChild).textContent=""}else f.push(t.createTextNode(i));for(c.textContent="",p=0;i=f[p++];)if((!r||-1===h.inArray(i,r))&&(u=h.contains(i.ownerDocument,i),o=pe(c.appendChild(i),"script"),u&&ce(o),n))for(l=0;i=o[l++];)re.test(i.type||"")&&n.push(i);return c},cleanData:function(e){for(var t,n,r,i,o,s,a=h.event.special,u=0;void 0!==(n=e[u]);u++){if(h.acceptData(n)&&((o=n[F.expando])&&(t=F.cache[o]))){if((r=Object.keys(t.events||{})).length)for(s=0;void 0!==(i=r[s]);s++)a[i]?h.event.remove(n,i):h.removeEvent(n,i,t.handle);F.cache[o]&&delete F.cache[o]}delete P.cache[n[P.expando]]}}}),h.fn.extend({text:function(e){return H(this,function(e){return void 0===e?h.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||ae(this,e).appendChild(e)})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=ae(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=e?h.filter(e,this):this,i=0;null!=(n=r[i]);i++)t||1!==n.nodeType||h.cleanData(pe(n)),n.parentNode&&(t&&h.contains(n.ownerDocument,n)&&ce(pe(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(h.cleanData(pe(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return h.clone(this,e,t)})},html:function(e){return H(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!te.test(e)&&!se[(Z.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(K,"<$1></$2>");try{for(;r>n;n++)1===(t=this[n]||{}).nodeType&&(h.cleanData(pe(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,function(t){e=this.parentNode,h.cleanData(pe(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=i.apply([],e);var n,r,o,s,a,u,l=0,c=this.length,p=this,d=c-1,g=e[0],m=h.isFunction(g);if(m||c>1&&"string"==typeof g&&!f.checkClone&&ne.test(g))return this.each(function(n){var r=p.eq(n);m&&(e[0]=g.call(this,n,r.html())),r.domManip(e,t)});if(c&&(r=(n=h.buildFragment(e,this[0].ownerDocument,!1,this)).firstChild,1===n.childNodes.length&&(n=r),r)){for(s=(o=h.map(pe(n,"script"),ue)).length;c>l;l++)a=n,l!==d&&(a=h.clone(a,!0,!0),s&&h.merge(o,pe(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,h.map(o,le),l=0;s>l;l++)a=o[l],re.test(a.type||"")&&!F.access(a,"globalEval")&&h.contains(u,a)&&(a.src?h._evalUrl&&h._evalUrl(a.src):h.globalEval(a.textContent.replace(oe,"")))}return this}}),h.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){h.fn[e]=function(e){for(var n,r=[],i=h(e),s=i.length-1,a=0;s>=a;a++)n=a===s?this:this.clone(!0),h(i[a])[t](n),o.apply(r,n.get());return this.pushStack(r)}});var he,ge={};function me(t,n){var r=h(n.createElement(t)).appendTo(n.body),i=e.getDefaultComputedStyle?e.getDefaultComputedStyle(r[0]).display:h.css(r[0],"display");return r.detach(),i}function ve(e){var t=p,n=ge[e];return n||("none"!==(n=me(e,t))&&n||((t=(he=(he||h("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(),t.close(),n=me(e,t),he.detach()),ge[e]=n),n}var ye=/^margin/,xe=new RegExp("^("+$+")(?!px)[a-z%]+$","i"),be=function(e){return e.ownerDocument.defaultView.getComputedStyle(e,null)};function we(e,t,n){var r,i,o,s,a=e.style;return(n=n||be(e))&&(s=n.getPropertyValue(t)||n[t]),n&&(""!==s||h.contains(e.ownerDocument,e)||(s=h.style(e,t)),xe.test(s)&&ye.test(t)&&(r=a.width,i=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=r,a.minWidth=i,a.maxWidth=o)),void 0!==s?s+"":s}function Te(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}!function(){var t,n,r=p.documentElement,i=p.createElement("div"),o=p.createElement("div");function s(){o.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",r.appendChild(i);var s=e.getComputedStyle(o,null);t="1%"!==s.top,n="4px"===s.width,r.removeChild(i)}o.style.backgroundClip="content-box",o.cloneNode(!0).style.backgroundClip="",f.clearCloneStyle="content-box"===o.style.backgroundClip,i.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",i.appendChild(o),e.getComputedStyle&&h.extend(f,{pixelPosition:function(){return s(),t},boxSizingReliable:function(){return null==n&&s(),n},reliableMarginRight:function(){var t,n=o.appendChild(p.createElement("div"));return n.style.cssText=o.style.cssText="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",n.style.marginRight=n.style.width="0",o.style.width="1px",r.appendChild(i),t=!parseFloat(e.getComputedStyle(n,null).marginRight),r.removeChild(i),o.innerHTML="",t}})}(),h.swap=function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=s[o];return i};var Ce=/^(none|table(?!-c[ea]).+)/,Ne=new RegExp("^("+$+")(.*)$","i"),ke=new RegExp("^([+-])=("+$+")","i"),Ee={position:"absolute",visibility:"hidden",display:"block"},De={letterSpacing:0,fontWeight:400},je=["Webkit","O","Moz","ms"];function Se(e,t){if(t in e)return t;for(var n=t[0].toUpperCase()+t.slice(1),r=t,i=je.length;i--;)if((t=je[i]+n)in e)return t;return r}function Ae(e,t,n){var r=Ne.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Le(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;4>o;o+=2)"margin"===n&&(s+=h.css(e,n+B[o],!0,i)),r?("content"===n&&(s-=h.css(e,"padding"+B[o],!0,i)),"margin"!==n&&(s-=h.css(e,"border"+B[o]+"Width",!0,i))):(s+=h.css(e,"padding"+B[o],!0,i),"padding"!==n&&(s+=h.css(e,"border"+B[o]+"Width",!0,i)));return s}function qe(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=be(e),s="border-box"===h.css(e,"boxSizing",!1,o);if(0>=i||null==i){if((0>(i=we(e,t,o))||null==i)&&(i=e.style[t]),xe.test(i))return i;r=s&&(f.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+Le(e,t,n||(s?"border":"content"),r,o)+"px"}function He(e,t){for(var n,r,i,o=[],s=0,a=e.length;a>s;s++)(r=e[s]).style&&(o[s]=F.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&I(r)&&(o[s]=F.access(r,"olddisplay",ve(r.nodeName)))):o[s]||(i=I(r),(n&&"none"!==n||!i)&&F.set(r,"olddisplay",i?n:h.css(r,"display"))));for(s=0;a>s;s++)(r=e[s]).style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}function Oe(e,t,n,r,i){return new Oe.prototype.init(e,t,n,r,i)}h.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=we(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=h.camelCase(t),u=e.style;return t=h.cssProps[a]||(h.cssProps[a]=Se(u,a)),s=h.cssHooks[t]||h.cssHooks[a],void 0===n?s&&"get"in s&&void 0!==(i=s.get(e,!1,r))?i:u[t]:("string"===(o=typeof n)&&(i=ke.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(h.css(e,t)),o="number"),void(null!=n&&n==n&&("number"!==o||h.cssNumber[a]||(n+="px"),f.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,r))||(u[t]="",u[t]=n))))}},css:function(e,t,n,r){var i,o,s,a=h.camelCase(t);return t=h.cssProps[a]||(h.cssProps[a]=Se(e.style,a)),(s=h.cssHooks[t]||h.cssHooks[a])&&"get"in s&&(i=s.get(e,!0,n)),void 0===i&&(i=we(e,t,r)),"normal"===i&&t in De&&(i=De[t]),""===n||n?(o=parseFloat(i),!0===n||h.isNumeric(o)?o||0:i):i}}),h.each(["height","width"],function(e,t){h.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&Ce.test(h.css(e,"display"))?h.swap(e,Ee,function(){return qe(e,t,r)}):qe(e,t,r):void 0},set:function(e,n,r){var i=r&&be(e);return Ae(0,n,r?Le(e,t,r,"border-box"===h.css(e,"boxSizing",!1,i),i):0)}}}),h.cssHooks.marginRight=Te(f.reliableMarginRight,function(e,t){return t?h.swap(e,{display:"inline-block"},we,[e,"marginRight"]):void 0}),h.each({margin:"",padding:"",border:"Width"},function(e,t){h.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+B[r]+t]=o[r]||o[r-2]||o[0];return i}},ye.test(e)||(h.cssHooks[e+t].set=Ae)}),h.fn.extend({css:function(e,t){return H(this,function(e,t,n){var r,i,o={},s=0;if(h.isArray(t)){for(r=be(e),i=t.length;i>s;s++)o[t[s]]=h.css(e,t[s],!1,r);return o}return void 0!==n?h.style(e,t,n):h.css(e,t)},e,t,arguments.length>1)},show:function(){return He(this,!0)},hide:function(){return He(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){I(this)?h(this).show():h(this).hide()})}}),h.Tween=Oe,Oe.prototype={constructor:Oe,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(h.cssNumber[n]?"":"px")},cur:function(){var e=Oe.propHooks[this.prop];return e&&e.get?e.get(this):Oe.propHooks._default.get(this)},run:function(e){var t,n=Oe.propHooks[this.prop];return this.pos=t=this.options.duration?h.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Oe.propHooks._default.set(this),this}},Oe.prototype.init.prototype=Oe.prototype,Oe.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=h.css(e.elem,e.prop,""))&&"auto"!==t?t:0:e.elem[e.prop]},set:function(e){h.fx.step[e.prop]?h.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[h.cssProps[e.prop]]||h.cssHooks[e.prop])?h.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Oe.propHooks.scrollTop=Oe.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},h.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},h.fx=Oe.prototype.init,h.fx.step={};var Fe,Pe,Me=/^(?:toggle|show|hide)$/,Re=new RegExp("^(?:([+-])=|)("+$+")([a-z%]*)$","i"),We=/queueHooks$/,$e=[function(e,t,n){var r,i,o,s,a,u,l,c=this,f={},p=e.style,d=e.nodeType&&I(e),g=F.get(e,"fxshow");for(r in n.queue||(null==(a=h._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,c.always(function(){c.always(function(){a.unqueued--,h.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"none"===(l=h.css(e,"display"))&&(l=ve(e.nodeName)),"inline"===l&&"none"===h.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",c.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]})),t)if(i=t[r],Me.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(d?"hide":"show")){if("show"!==i||!g||void 0===g[r])continue;d=!0}f[r]=g&&g[r]||h.style(e,r)}if(!h.isEmptyObject(f))for(r in g?"hidden"in g&&(d=g.hidden):g=F.access(e,"fxshow",{}),o&&(g.hidden=!d),d?h(e).show():c.done(function(){h(e).hide()}),c.done(function(){var t;for(t in F.remove(e,"fxshow"),f)h.style(e,t,f[t])}),f)s=Xe(d?g[r]:0,r,c),r in g||(g[r]=s.start,d&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}],Be={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Re.exec(t),o=i&&i[3]||(h.cssNumber[e]?"":"px"),s=(h.cssNumber[e]||"px"!==o&&+r)&&Re.exec(h.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do{s/=a=a||".5",h.style(n.elem,e,s+o)}while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function Ie(){return setTimeout(function(){Fe=void 0}),Fe=h.now()}function _e(e,t){var n,r=0,i={height:e};for(t=t?1:0;4>r;r+=2-t)i["margin"+(n=B[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function Xe(e,t,n){for(var r,i=(Be[t]||[]).concat(Be["*"]),o=0,s=i.length;s>o;o++)if(r=i[o].call(n,t,e))return r}function ze(e,t,n){var r,i,o=0,s=$e.length,a=h.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=Fe||Ie(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,s=l.tweens.length;s>o;o++)l.tweens[o].run(r);return a.notifyWith(e,[l,r,n]),1>r&&s?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:h.extend({},t),opts:h.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Fe||Ie(),duration:n.duration,tweens:[],createTween:function(t,n){var r=h.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(function(e,t){var n,r,i,o,s;for(n in e)if(i=t[r=h.camelCase(n)],o=e[n],h.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(s=h.cssHooks[r])&&"expand"in s)for(n in o=s.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);s>o;o++)if(r=$e[o].call(l,e,c,l.opts))return r;return h.map(c,Xe,l),h.isFunction(l.opts.start)&&l.opts.start.call(e,l),h.fx.timer(h.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}h.Animation=h.extend(ze,{tweener:function(e,t){h.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;i>r;r++)n=e[r],Be[n]=Be[n]||[],Be[n].unshift(t)},prefilter:function(e,t){t?$e.unshift(e):$e.push(e)}}),h.speed=function(e,t,n){var r=e&&"object"==typeof e?h.extend({},e):{complete:n||!n&&t||h.isFunction(e)&&e,duration:e,easing:n&&t||t&&!h.isFunction(t)&&t};return r.duration=h.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in h.fx.speeds?h.fx.speeds[r.duration]:h.fx.speeds._default,(null==r.queue||!0===r.queue)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){h.isFunction(r.old)&&r.old.call(this),r.queue&&h.dequeue(this,r.queue)},r},h.fn.extend({fadeTo:function(e,t,n,r){return this.filter(I).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=h.isEmptyObject(e),o=h.speed(t,n,r),s=function(){var t=ze(this,h.extend({},e),o);(i||F.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||!1===o.queue?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=h.timers,s=F.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&We.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&h.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=F.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=h.timers,s=r?r.length:0;for(n.finish=!0,h.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),h.each(["toggle","show","hide"],function(e,t){var n=h.fn[t];h.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(_e(t,!0),e,r,i)}}),h.each({slideDown:_e("show"),slideUp:_e("hide"),slideToggle:_e("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){h.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),h.timers=[],h.fx.tick=function(){var e,t=0,n=h.timers;for(Fe=h.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||h.fx.stop(),Fe=void 0},h.fx.timer=function(e){h.timers.push(e),e()?h.fx.start():h.timers.pop()},h.fx.interval=13,h.fx.start=function(){Pe||(Pe=setInterval(h.fx.tick,h.fx.interval))},h.fx.stop=function(){clearInterval(Pe),Pe=null},h.fx.speeds={slow:600,fast:200,_default:400},h.fn.delay=function(e,t){return e=h.fx&&h.fx.speeds[e]||e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},function(){var e=p.createElement("input"),t=p.createElement("select"),n=t.appendChild(p.createElement("option"));e.type="checkbox",f.checkOn=""!==e.value,f.optSelected=n.selected,t.disabled=!0,f.optDisabled=!n.disabled,(e=p.createElement("input")).value="t",e.type="radio",f.radioValue="t"===e.value}();var Ue,Ve=h.expr.attrHandle;h.fn.extend({attr:function(e,t){return H(this,h.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){h.removeAttr(this,e)})}}),h.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(e&&3!==o&&8!==o&&2!==o)return typeof e.getAttribute===X?h.prop(e,t,n):(1===o&&h.isXMLDoc(e)||(t=t.toLowerCase(),r=h.attrHooks[t]||(h.expr.match.bool.test(t)?Ue:void 0)),void 0===n?r&&"get"in r&&null!==(i=r.get(e,t))?i:null==(i=h.find.attr(e,t))?void 0:i:null!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):void h.removeAttr(e,t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(A);if(o&&1===e.nodeType)for(;n=o[i++];)r=h.propFix[n]||n,h.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!f.radioValue&&"radio"===t&&h.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),Ue={set:function(e,t,n){return!1===t?h.removeAttr(e,n):e.setAttribute(n,n),n}},h.each(h.expr.match.bool.source.match(/\w+/g),function(e,t){var n=Ve[t]||h.find.attr;Ve[t]=function(e,t,r){var i,o;return r||(o=Ve[t],Ve[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,Ve[t]=o),i}});var Ye=/^(?:input|select|textarea|button)$/i;h.fn.extend({prop:function(e,t){return H(this,h.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[h.propFix[e]||e]})}}),h.extend({propFix:{for:"htmlFor",class:"className"},prop:function(e,t,n){var r,i,o=e.nodeType;if(e&&3!==o&&8!==o&&2!==o)return(1!==o||!h.isXMLDoc(e))&&(t=h.propFix[t]||t,i=h.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||Ye.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),f.optSelected||(h.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),h.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){h.propFix[this.toLowerCase()]=this});var Ge=/[\t\r\n\f]/g;h.fn.extend({addClass:function(e){var t,n,r,i,o,s,a="string"==typeof e&&e,u=0,l=this.length;if(h.isFunction(e))return this.each(function(t){h(this).addClass(e.call(this,t,this.className))});if(a)for(t=(e||"").match(A)||[];l>u;u++)if(r=1===(n=this[u]).nodeType&&(n.className?(" "+n.className+" ").replace(Ge," "):" ")){for(o=0;i=t[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");s=h.trim(r),n.className!==s&&(n.className=s)}return this},removeClass:function(e){var t,n,r,i,o,s,a=0===arguments.length||"string"==typeof e&&e,u=0,l=this.length;if(h.isFunction(e))return this.each(function(t){h(this).removeClass(e.call(this,t,this.className))});if(a)for(t=(e||"").match(A)||[];l>u;u++)if(r=1===(n=this[u]).nodeType&&(n.className?(" "+n.className+" ").replace(Ge," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");s=e?h.trim(r):"",n.className!==s&&(n.className=s)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):this.each(h.isFunction(e)?function(n){h(this).toggleClass(e.call(this,n,this.className,t),t)}:function(){if("string"===n)for(var t,r=0,i=h(this),o=e.match(A)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else(n===X||"boolean"===n)&&(this.className&&F.set(this,"__className__",this.className),this.className=this.className||!1===e?"":F.get(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(Ge," ").indexOf(t)>=0)return!0;return!1}});var Qe=/\r/g;h.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=h.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,h(this).val()):e)?i="":"number"==typeof i?i+="":h.isArray(i)&&(i=h.map(i,function(e){return null==e?"":e+""})),(t=h.valHooks[this.type]||h.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=h.valHooks[i.type]||h.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(Qe,""):null==n?"":n:void 0}}),h.extend({valHooks:{select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;a>u;u++)if(!(!(n=r[u]).selected&&u!==i||(f.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&h.nodeName(n.parentNode,"optgroup"))){if(t=h(n).val(),o)return t;s.push(t)}return s},set:function(e,t){for(var n,r,i=e.options,o=h.makeArray(t),s=i.length;s--;)((r=i[s]).selected=h.inArray(h(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),h.each(["radio","checkbox"],function(){h.valHooks[this]={set:function(e,t){return h.isArray(t)?e.checked=h.inArray(h(e).val(),t)>=0:void 0}},f.checkOn||(h.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){h.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),h.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Je=h.now(),Ke=/\?/;h.parseJSON=function(e){return JSON.parse(e+"")},h.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return(!t||t.getElementsByTagName("parsererror").length)&&h.error("Invalid XML: "+e),t};var Ze,et,tt=/#.*$/,nt=/([?&])_=[^&]*/,rt=/^(.*?):[ \t]*([^\r\n]*)$/gm,it=/^(?:GET|HEAD)$/,ot=/^\/\//,st=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,at={},ut={},lt="*/".concat("*");try{et=location.href}catch(e){(et=p.createElement("a")).href="",et=et.href}function ct(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(A)||[];if(h.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ft(e,t,n,r){var i={},o=e===ut;function s(a){var u;return i[a]=!0,h.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function pt(e,t){var n,r,i=h.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&h.extend(!0,e,r),e}Ze=st.exec(et.toLowerCase())||[],h.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:et,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ze[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":lt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":h.parseJSON,"text xml":h.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?pt(pt(e,h.ajaxSettings),t):pt(h.ajaxSettings,e)},ajaxPrefilter:ct(at),ajaxTransport:ct(ut),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var n,r,i,o,s,a,u,l,c=h.ajaxSetup({},t),f=c.context||c,p=c.context&&(f.nodeType||f.jquery)?h(f):h.event,d=h.Deferred(),g=h.Callbacks("once memory"),m=c.statusCode||{},v={},y={},x=0,b="canceled",w={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!o)for(o={};t=rt.exec(i);)o[t[1].toLowerCase()]=t[2];t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=y[n]=y[n]||e,v[e]=t),this},overrideMimeType:function(e){return x||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else w.always(e[w.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),T(0,t),this}};if(d.promise(w).complete=g.add,w.success=w.done,w.error=w.fail,c.url=((e||c.url||et)+"").replace(tt,"").replace(ot,Ze[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=h.trim(c.dataType||"*").toLowerCase().match(A)||[""],null==c.crossDomain&&(a=st.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Ze[1]&&a[2]===Ze[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Ze[3]||("http:"===Ze[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=h.param(c.data,c.traditional)),ft(at,c,t,w),2===x)return w;for(l in(u=c.global)&&0==h.active++&&h.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!it.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Ke.test(r)?"&":"?")+c.data,delete c.data),!1===c.cache&&(c.url=nt.test(r)?r.replace(nt,"$1_="+Je++):r+(Ke.test(r)?"&":"?")+"_="+Je++)),c.ifModified&&(h.lastModified[r]&&w.setRequestHeader("If-Modified-Since",h.lastModified[r]),h.etag[r]&&w.setRequestHeader("If-None-Match",h.etag[r])),(c.data&&c.hasContent&&!1!==c.contentType||t.contentType)&&w.setRequestHeader("Content-Type",c.contentType),w.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+lt+"; q=0.01":""):c.accepts["*"]),c.headers)w.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(!1===c.beforeSend.call(f,w,c)||2===x))return w.abort();for(l in b="abort",{success:1,error:1,complete:1})w[l](c[l]);if(n=ft(ut,c,t,w)){w.readyState=1,u&&p.trigger("ajaxSend",[w,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){w.abort("timeout")},c.timeout));try{x=1,n.send(v,T)}catch(e){if(!(2>x))throw e;T(-1,e)}}else T(-1,"No Transport");function T(e,t,o,a){var l,v,y,b,T,C=t;2!==x&&(x=2,s&&clearTimeout(s),n=void 0,i=a||"",w.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=function(e,t,n){for(var r,i,o,s,a=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):void 0}(c,w,o)),b=function(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(s=l[u+" "+o]||l["* "+o]))for(i in l)if((a=i.split(" "))[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){!0===s?s=l[i]:!0!==l[i]&&(o=a[0],c.unshift(a[1]));break}if(!0!==s)if(s&&e.throws)t=s(t);else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(c,b,w,l),l?(c.ifModified&&((T=w.getResponseHeader("Last-Modified"))&&(h.lastModified[r]=T),(T=w.getResponseHeader("etag"))&&(h.etag[r]=T)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,v=b.data,l=!(y=b.error))):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),w.status=e,w.statusText=(t||C)+"",l?d.resolveWith(f,[v,C,w]):d.rejectWith(f,[w,C,y]),w.statusCode(m),m=void 0,u&&p.trigger(l?"ajaxSuccess":"ajaxError",[w,c,l?v:y]),g.fireWith(f,[w,C]),u&&(p.trigger("ajaxComplete",[w,c]),--h.active||h.event.trigger("ajaxStop")))}return w},getJSON:function(e,t,n){return h.get(e,t,n,"json")},getScript:function(e,t){return h.get(e,void 0,t,"script")}}),h.each(["get","post"],function(e,t){h[t]=function(e,n,r,i){return h.isFunction(n)&&(i=i||r,r=n,n=void 0),h.ajax({url:e,type:t,dataType:i,data:n,success:r})}}),h.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){h.fn[t]=function(e){return this.on(t,e)}}),h._evalUrl=function(e){return h.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})},h.fn.extend({wrapAll:function(e){var t;return h.isFunction(e)?this.each(function(t){h(this).wrapAll(e.call(this,t))}):(this[0]&&(t=h(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return this.each(h.isFunction(e)?function(t){h(this).wrapInner(e.call(this,t))}:function(){var t=h(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=h.isFunction(e);return this.each(function(n){h(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){h.nodeName(this,"body")||h(this).replaceWith(this.childNodes)}).end()}}),h.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0},h.expr.filters.visible=function(e){return!h.expr.filters.hidden(e)};var dt=/%20/g,ht=/\[\]$/,gt=/\r?\n/g,mt=/^(?:submit|button|image|reset|file)$/i,vt=/^(?:input|select|textarea|keygen)/i;function yt(e,t,n,r){var i;if(h.isArray(t))h.each(t,function(t,i){n||ht.test(e)?r(e,i):yt(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==h.type(t))r(e,t);else for(i in t)yt(e+"["+i+"]",t[i],n,r)}h.param=function(e,t){var n,r=[],i=function(e,t){t=h.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=h.ajaxSettings&&h.ajaxSettings.traditional),h.isArray(e)||e.jquery&&!h.isPlainObject(e))h.each(e,function(){i(this.name,this.value)});else for(n in e)yt(n,e[n],t,i);return r.join("&").replace(dt,"+")},h.fn.extend({serialize:function(){return h.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=h.prop(this,"elements");return e?h.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!h(this).is(":disabled")&&vt.test(this.nodeName)&&!mt.test(e)&&(this.checked||!_.test(e))}).map(function(e,t){var n=h(this).val();return null==n?null:h.isArray(n)?h.map(n,function(e){return{name:t.name,value:e.replace(gt,"\r\n")}}):{name:t.name,value:n.replace(gt,"\r\n")}}).get()}}),h.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var xt=0,bt={},wt={0:200,1223:204},Tt=h.ajaxSettings.xhr();e.ActiveXObject&&h(e).on("unload",function(){for(var e in bt)bt[e]()}),f.cors=!!Tt&&"withCredentials"in Tt,f.ajax=Tt=!!Tt,h.ajaxTransport(function(e){var t;return f.cors||Tt&&!e.crossDomain?{send:function(n,r){var i,o=e.xhr(),s=++xt;if(o.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)o[i]=e.xhrFields[i];for(i in e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest"),n)o.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete bt[s],t=o.onload=o.onerror=null,"abort"===e?o.abort():"error"===e?r(o.status,o.statusText):r(wt[o.status]||o.status,o.statusText,"string"==typeof o.responseText?{text:o.responseText}:void 0,o.getAllResponseHeaders()))}},o.onload=t(),o.onerror=t("error"),t=bt[s]=t("abort"),o.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:void 0}),h.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return h.globalEval(e),e}}}),h.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),h.ajaxTransport("script",function(e){var t,n;if(e.crossDomain)return{send:function(r,i){t=h("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),p.head.appendChild(t[0])},abort:function(){n&&n()}}});var Ct=[],Nt=/(=)\?(?=&|$)|\?\?/;h.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Ct.pop()||h.expando+"_"+Je++;return this[e]=!0,e}}),h.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=!1!==t.jsonp&&(Nt.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Nt.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=h.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(Nt,"$1"+i):!1!==t.jsonp&&(t.url+=(Ke.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||h.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Ct.push(i)),s&&h.isFunction(o)&&o(s[0]),s=o=void 0}),"script"):void 0}),h.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||p;var r=w.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=h.buildFragment([e],t,i),i&&i.length&&h(i).remove(),h.merge([],r.childNodes))};var kt=h.fn.load;h.fn.load=function(e,t,n){if("string"!=typeof e&&kt)return kt.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),h.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),s.length>0&&h.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?h("<div>").append(h.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},h.expr.filters.animated=function(e){return h.grep(h.timers,function(t){return e===t.elem}).length};var Et=e.document.documentElement;function Dt(e){return h.isWindow(e)?e:9===e.nodeType&&e.defaultView}h.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l=h.css(e,"position"),c=h(e),f={};"static"===l&&(e.style.position="relative"),a=c.offset(),o=h.css(e,"top"),u=h.css(e,"left"),("absolute"===l||"fixed"===l)&&(o+u).indexOf("auto")>-1?(s=(r=c.position()).top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),h.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):c.css(f)}},h.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){h.offset.setOffset(this,e,t)});var t,n,r=this[0],i={top:0,left:0},o=r&&r.ownerDocument;return o?(t=o.documentElement,h.contains(t,r)?(typeof r.getBoundingClientRect!==X&&(i=r.getBoundingClientRect()),n=Dt(o),{top:i.top+n.pageYOffset-t.clientTop,left:i.left+n.pageXOffset-t.clientLeft}):i):void 0},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===h.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),h.nodeName(e[0],"html")||(r=e.offset()),r.top+=h.css(e[0],"borderTopWidth",!0),r.left+=h.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-h.css(n,"marginTop",!0),left:t.left-r.left-h.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||Et;e&&!h.nodeName(e,"html")&&"static"===h.css(e,"position");)e=e.offsetParent;return e||Et})}}),h.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;h.fn[t]=function(i){return H(this,function(t,i,o){var s=Dt(t);return void 0===o?s?s[n]:t[i]:void(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o)},t,i,arguments.length,null)}}),h.each(["top","left"],function(e,t){h.cssHooks[t]=Te(f.pixelPosition,function(e,n){return n?(n=we(e,t),xe.test(n)?h(e).position()[t]+"px":n):void 0})}),h.each({Height:"height",Width:"width"},function(e,t){h.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){h.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(!0===r||!0===i?"margin":"border");return H(this,function(t,n,r){var i;return h.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?h.css(t,n,s):h.style(t,n,r,s)},t,o?r:void 0,o,null)}})}),h.fn.size=function(){return this.length},h.fn.andSelf=h.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return h});var jt=e.jQuery,St=e.$;return h.noConflict=function(t){return e.$===h&&(e.$=St),t&&e.jQuery===h&&(e.jQuery=jt),h},typeof t===X&&(e.jQuery=e.$=h),h});
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = "".trim,
        l = {},
        m = a.document,
        n = "2.1.0",
        o = function(a, b) {
            return new o.fn.init(a, b)
        },
        p = /^-ms-/,
        q = /-([\da-z])/gi,
        r = function(a, b) {
            return b.toUpperCase()
        };
    o.fn = o.prototype = {
        jquery: n,
        constructor: o,
        selector: "",
        length: 0,
        toArray: function() {
            return d.call(this)
        },
        get: function(a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        },
        pushStack: function(a) {
            var b = o.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        },
        each: function(a, b) {
            return o.each(this, a, b)
        },
        map: function(a) {
            return this.pushStack(o.map(this, function(b, c) {
                return a.call(b, c, b)
            }))
        },
        slice: function() {
            return this.pushStack(d.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, o.extend = o.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || o.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (a = arguments[h]))
                for (b in a) c = g[b], d = a[b], g !== d && (j && d && (o.isPlainObject(d) || (e = o.isArray(d))) ? (e ? (e = !1, f = c && o.isArray(c) ? c : []) : f = c && o.isPlainObject(c) ? c : {}, g[b] = o.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, o.extend({
        expando: "jQuery" + (n + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) {
            throw new Error(a)
        },
        noop: function() {},
        isFunction: function(a) {
            return "function" === o.type(a)
        },
        isArray: Array.isArray,
        isWindow: function(a) {
            return null != a && a === a.window
        },
        isNumeric: function(a) {
            return a - parseFloat(a) >= 0
        },
        isPlainObject: function(a) {
            if ("object" !== o.type(a) || a.nodeType || o.isWindow(a)) return !1;
            try {
                if (a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1
            } catch (b) {
                return !1
            }
            return !0
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        },
        globalEval: function(a) {
            var b, c = eval;
            a = o.trim(a), a && (1 === a.indexOf("use strict") ? (b = m.createElement("script"), b.text = a, m.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        },
        camelCase: function(a) {
            return a.replace(p, "ms-").replace(q, r)
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        },
        each: function(a, b, c) {
            var d, e = 0,
                f = a.length,
                g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1) break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1) break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1) break;
            return a
        },
        trim: function(a) {
            return null == a ? "" : k.call(a)
        },
        makeArray: function(a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? o.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        },
        inArray: function(a, b, c) {
            return null == b ? -1 : g.call(b, a, c)
        },
        merge: function(a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++) a[e++] = b[d];
            return a.length = e, a
        },
        grep: function(a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        },
        map: function(a, b, c) {
            var d, f = 0,
                g = a.length,
                h = s(a),
                i = [];
            if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), o.isFunction(a) ? (e = d.call(arguments, 2), f = function() {
                return a.apply(b || this, e.concat(d.call(arguments)))
            }, f.guid = a.guid = a.guid || o.guid++, f) : void 0
        },
        now: Date.now,
        support: l
    }), o.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });

    function s(a) {
        var b = a.length,
            c = o.type(a);
        return "function" === c || o.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var t = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s = "sizzle" + -new Date,
            t = a.document,
            u = 0,
            v = 0,
            w = eb(),
            x = eb(),
            y = eb(),
            z = function(a, b) {
                return a === b && (j = !0), 0
            },
            A = "undefined",
            B = 1 << 31,
            C = {}.hasOwnProperty,
            D = [],
            E = D.pop,
            F = D.push,
            G = D.push,
            H = D.slice,
            I = D.indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (this[b] === a) return b;
                return -1
            },
            J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            K = "[\\x20\\t\\r\\n\\f]",
            L = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            M = L.replace("w", "w#"),
            N = "\\[" + K + "*(" + L + ")" + K + "*(?:([*^$|!~]?=)" + K + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + M + ")|)|)" + K + "*\\]",
            O = ":(" + L + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + N.replace(3, 8) + ")*)|.*)\\)|)",
            P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
            Q = new RegExp("^" + K + "*," + K + "*"),
            R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
            S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
            T = new RegExp(O),
            U = new RegExp("^" + M + "$"),
            V = {
                ID: new RegExp("^#(" + L + ")"),
                CLASS: new RegExp("^\\.(" + L + ")"),
                TAG: new RegExp("^(" + L.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + N),
                PSEUDO: new RegExp("^" + O),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + J + ")$", "i"),
                needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i")
            },
            W = /^(?:input|select|textarea|button)$/i,
            X = /^h\d$/i,
            Y = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            $ = /[+~]/,
            _ = /'|\\/g,
            ab = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
            bb = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            };
        try {
            G.apply(D = H.call(t.childNodes), t.childNodes), D[t.childNodes.length].nodeType
        } catch (cb) {
            G = {
                apply: D.length ? function(a, b) {
                    F.apply(a, H.call(b))
                } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function db(a, b, d, e) {
            var f, g, h, i, j, m, p, q, u, v;
            if ((b ? b.ownerDocument || b : t) !== l && k(b), b = b || l, d = d || [], !a || "string" != typeof a) return d;
            if (1 !== (i = b.nodeType) && 9 !== i) return [];
            if (n && !e) {
                if (f = Z.exec(a))
                    if (h = f[1]) {
                        if (9 === i) {
                            if (g = b.getElementById(h), !g || !g.parentNode) return d;
                            if (g.id === h) return d.push(g), d
                        } else if (b.ownerDocument && (g = b.ownerDocument.getElementById(h)) && r(b, g) && g.id === h) return d.push(g), d
                    } else {
                        if (f[2]) return G.apply(d, b.getElementsByTagName(a)), d;
                        if ((h = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(h)), d
                    }
                if (c.qsa && (!o || !o.test(a))) {
                    if (q = p = s, u = b, v = 9 === i && a, 1 === i && "object" !== b.nodeName.toLowerCase()) {
                        m = ob(a), (p = b.getAttribute("id")) ? q = p.replace(_, "\\$&") : b.setAttribute("id", q), q = "[id='" + q + "'] ", j = m.length;
                        while (j--) m[j] = q + pb(m[j]);
                        u = $.test(a) && mb(b.parentNode) || b, v = m.join(",")
                    }
                    if (v) try {
                        return G.apply(d, u.querySelectorAll(v)), d
                    } catch (w) {} finally {
                        p || b.removeAttribute("id")
                    }
                }
            }
            return xb(a.replace(P, "$1"), b, d, e)
        }

        function eb() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }
            return b
        }

        function fb(a) {
            return a[s] = !0, a
        }

        function gb(a) {
            var b = l.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function hb(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function ib(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || B) - (~a.sourceIndex || B);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function jb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function kb(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function lb(a) {
            return fb(function(b) {
                return b = +b, fb(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function mb(a) {
            return a && typeof a.getElementsByTagName !== A && a
        }
        c = db.support = {}, f = db.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, k = db.setDocument = function(a) {
            var b, e = a ? a.ownerDocument || a : t,
                g = e.defaultView;
            return e !== l && 9 === e.nodeType && e.documentElement ? (l = e, m = e.documentElement, n = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() {
                k()
            }, !1) : g.attachEvent && g.attachEvent("onunload", function() {
                k()
            })), c.attributes = gb(function(a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = gb(function(a) {
                return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = Y.test(e.getElementsByClassName) && gb(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
            }), c.getById = gb(function(a) {
                return m.appendChild(a).id = s, !e.getElementsByName || !e.getElementsByName(s).length
            }), c.getById ? (d.find.ID = function(a, b) {
                if (typeof b.getElementById !== A && n) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function(a) {
                var b = a.replace(ab, bb);
                return function(a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function(a) {
                var b = a.replace(ab, bb);
                return function(a) {
                    var c = typeof a.getAttributeNode !== A && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function(a, b) {
                return typeof b.getElementsByTagName !== A ? b.getElementsByTagName(a) : void 0
            } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++]) 1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) {
                return typeof b.getElementsByClassName !== A && n ? b.getElementsByClassName(a) : void 0
            }, p = [], o = [], (c.qsa = Y.test(e.querySelectorAll)) && (gb(function(a) {
                a.innerHTML = "<select t=''><option selected=''></option></select>", a.querySelectorAll("[t^='']").length && o.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || o.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll(":checked").length || o.push(":checked")
            }), gb(function(a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && o.push("name" + K + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), o.push(",.*:")
            })), (c.matchesSelector = Y.test(q = m.webkitMatchesSelector || m.mozMatchesSelector || m.oMatchesSelector || m.msMatchesSelector)) && gb(function(a) {
                c.disconnectedMatch = q.call(a, "div"), q.call(a, "[s!='']:x"), p.push("!=", O)
            }), o = o.length && new RegExp(o.join("|")), p = p.length && new RegExp(p.join("|")), b = Y.test(m.compareDocumentPosition), r = b || Y.test(m.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, z = b ? function(a, b) {
                if (a === b) return j = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === t && r(t, a) ? -1 : b === e || b.ownerDocument === t && r(t, b) ? 1 : i ? I.call(i, a) - I.call(i, b) : 0 : 4 & d ? -1 : 1)
            } : function(a, b) {
                if (a === b) return j = !0, 0;
                var c, d = 0,
                    f = a.parentNode,
                    g = b.parentNode,
                    h = [a],
                    k = [b];
                if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : i ? I.call(i, a) - I.call(i, b) : 0;
                if (f === g) return ib(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) k.unshift(c);
                while (h[d] === k[d]) d++;
                return d ? ib(h[d], k[d]) : h[d] === t ? -1 : k[d] === t ? 1 : 0
            }, e) : l
        }, db.matches = function(a, b) {
            return db(a, null, null, b)
        }, db.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== l && k(a), b = b.replace(S, "='$1']"), !(!c.matchesSelector || !n || p && p.test(b) || o && o.test(b))) try {
                var d = q.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
            } catch (e) {}
            return db(b, l, null, [a]).length > 0
        }, db.contains = function(a, b) {
            return (a.ownerDocument || a) !== l && k(a), r(a, b)
        }, db.attr = function(a, b) {
            (a.ownerDocument || a) !== l && k(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !n) : void 0;
            return void 0 !== f ? f : c.attributes || !n ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, db.error = function(a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, db.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (j = !c.detectDuplicates, i = !c.sortStable && a.slice(0), a.sort(z), j) {
                while (b = a[f++]) b === a[f] && (e = d.push(f));
                while (e--) a.splice(d[e], 1)
            }
            return i = null, a
        }, e = db.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += e(a)
                } else if (3 === f || 4 === f) return a.nodeValue
            } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = db.selectors = {
            cacheLength: 50,
            createPseudo: fb,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(a) {
                    return a[1] = a[1].replace(ab, bb), a[3] = (a[4] || a[5] || "").replace(ab, bb), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || db.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && db.error(a[0]), a
                },
                PSEUDO: function(a) {
                    var b, c = !a[5] && a[2];
                    return V.CHILD.test(a[0]) ? null : (a[3] && void 0 !== a[4] ? a[2] = a[4] : c && T.test(c) && (b = ob(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(ab, bb).toLowerCase();
                    return "*" === a ? function() {
                        return !0
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                },
                CLASS: function(a) {
                    var b = w[a + " "];
                    return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && w(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== A && a.getAttribute("class") || "")
                    })
                },
                ATTR: function(a, b, c) {
                    return function(d) {
                        var e = db.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            t = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && t) {
                                k = q[s] || (q[s] = {}), j = k[a] || [], n = j[0] === u && j[1], m = j[0] === u && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [u, n, m];
                                        break
                                    }
                            } else if (t && (j = (b[s] || (b[s] = {}))[a]) && j[0] === u) m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (t && ((l[s] || (l[s] = {}))[a] = [u, m]), l === b)) break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || db.error("unsupported pseudo: " + a);
                    return e[s] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? fb(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = I.call(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: fb(function(a) {
                    var b = [],
                        c = [],
                        d = g(a.replace(P, "$1"));
                    return d[s] ? fb(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }),
                has: fb(function(a) {
                    return function(b) {
                        return db(a, b).length > 0
                    }
                }),
                contains: fb(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }),
                lang: fb(function(a) {
                    return U.test(a || "") || db.error("unsupported lang: " + a), a = a.replace(ab, bb).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = n ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                },
                root: function(a) {
                    return a === m
                },
                focus: function(a) {
                    return a === l.activeElement && (!l.hasFocus || l.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                },
                enabled: function(a) {
                    return a.disabled === !1
                },
                disabled: function(a) {
                    return a.disabled === !0
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) {
                    return !d.pseudos.empty(a)
                },
                header: function(a) {
                    return X.test(a.nodeName)
                },
                input: function(a) {
                    return W.test(a.nodeName)
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                },
                first: lb(function() {
                    return [0]
                }),
                last: lb(function(a, b) {
                    return [b - 1]
                }),
                eq: lb(function(a, b, c) {
                    return [0 > c ? c + b : c]
                }),
                even: lb(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a
                }),
                odd: lb(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a
                }),
                lt: lb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
                    return a
                }),
                gt: lb(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) d.pseudos[b] = jb(b);
        for (b in {
                submit: !0,
                reset: !0
            }) d.pseudos[b] = kb(b);

        function nb() {}
        nb.prototype = d.filters = d.pseudos, d.setFilters = new nb;

        function ob(a, b) {
            var c, e, f, g, h, i, j, k = x[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = Q.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(P, " ")
                }), h = h.slice(c.length));
                for (g in d.filter) !(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? db.error(a) : x(a, i).slice(0)
        }

        function pb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d
        }

        function qb(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = v++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [u, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) {
                            if (i = b[s] || (b[s] = {}), (h = i[d]) && h[0] === u && h[1] === f) return j[2] = h[2];
                            if (i[d] = j, j[2] = a(b, c, g)) return !0
                        }
            }
        }

        function rb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function sb(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function tb(a, b, c, d, e, f) {
            return d && !d[s] && (d = tb(d)), e && !e[s] && (e = tb(e, f)), fb(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || wb(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : sb(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = sb(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? I.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = sb(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r)
            })
        }

        function ub(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], i = g || d.relative[" "], j = g ? 1 : 0, k = qb(function(a) {
                    return a === b
                }, i, !0), l = qb(function(a) {
                    return I.call(b, a) > -1
                }, i, !0), m = [function(a, c, d) {
                    return !g && (d || c !== h) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
                }]; f > j; j++)
                if (c = d.relative[a[j].type]) m = [qb(rb(m), c)];
                else {
                    if (c = d.filter[a[j].type].apply(null, a[j].matches), c[s]) {
                        for (e = ++j; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return tb(j > 1 && rb(m), j > 1 && pb(a.slice(0, j - 1).concat({
                            value: " " === a[j - 2].type ? "*" : ""
                        })).replace(P, "$1"), c, e > j && ub(a.slice(j, e)), f > e && ub(a = a.slice(e)), f > e && pb(a))
                    }
                    m.push(c)
                }
            return rb(m)
        }

        function vb(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, i, j, k) {
                    var m, n, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = h,
                        v = f || e && d.find.TAG("*", k),
                        w = u += null == t ? 1 : Math.random() || .1,
                        x = v.length;
                    for (k && (h = g !== l && g); q !== x && null != (m = v[q]); q++) {
                        if (e && m) {
                            n = 0;
                            while (o = a[n++])
                                if (o(m, g, i)) {
                                    j.push(m);
                                    break
                                }
                            k && (u = w)
                        }
                        c && ((m = !o && m) && p--, f && r.push(m))
                    }
                    if (p += q, c && q !== p) {
                        n = 0;
                        while (o = b[n++]) o(r, s, g, i);
                        if (f) {
                            if (p > 0)
                                while (q--) r[q] || s[q] || (s[q] = E.call(j));
                            s = sb(s)
                        }
                        G.apply(j, s), k && !f && s.length > 0 && p + b.length > 1 && db.uniqueSort(j)
                    }
                    return k && (u = w, h = t), r
                };
            return c ? fb(f) : f
        }
        g = db.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = y[a + " "];
            if (!f) {
                b || (b = ob(a)), c = b.length;
                while (c--) f = ub(b[c]), f[s] ? d.push(f) : e.push(f);
                f = y(a, vb(e, d))
            }
            return f
        };

        function wb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++) db(a, b[d], c);
            return c
        }

        function xb(a, b, e, f) {
            var h, i, j, k, l, m = ob(a);
            if (!f && 1 === m.length) {
                if (i = m[0] = m[0].slice(0), i.length > 2 && "ID" === (j = i[0]).type && c.getById && 9 === b.nodeType && n && d.relative[i[1].type]) {
                    if (b = (d.find.ID(j.matches[0].replace(ab, bb), b) || [])[0], !b) return e;
                    a = a.slice(i.shift().value.length)
                }
                h = V.needsContext.test(a) ? 0 : i.length;
                while (h--) {
                    if (j = i[h], d.relative[k = j.type]) break;
                    if ((l = d.find[k]) && (f = l(j.matches[0].replace(ab, bb), $.test(i[0].type) && mb(b.parentNode) || b))) {
                        if (i.splice(h, 1), a = f.length && pb(i), !a) return G.apply(e, f), e;
                        break
                    }
                }
            }
            return g(a, m)(f, b, !n, e, $.test(a) && mb(b.parentNode) || b), e
        }
        return c.sortStable = s.split("").sort(z).join("") === s, c.detectDuplicates = !!j, k(), c.sortDetached = gb(function(a) {
            return 1 & a.compareDocumentPosition(l.createElement("div"))
        }), gb(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || hb("type|href|height|width", function(a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && gb(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || hb("value", function(a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), gb(function(a) {
            return null == a.getAttribute("disabled")
        }) || hb(J, function(a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), db
    }(a);
    o.find = t, o.expr = t.selectors, o.expr[":"] = o.expr.pseudos, o.unique = t.uniqueSort, o.text = t.getText, o.isXMLDoc = t.isXML, o.contains = t.contains;
    var u = o.expr.match.needsContext,
        v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        w = /^.[^:#\[\.,]*$/;

    function x(a, b, c) {
        if (o.isFunction(b)) return o.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType) return o.grep(a, function(a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (w.test(b)) return o.filter(b, a, c);
            b = o.filter(b, a)
        }
        return o.grep(a, function(a) {
            return g.call(b, a) >= 0 !== c
        })
    }
    o.filter = function(a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? o.find.matchesSelector(d, a) ? [d] : [] : o.find.matches(a, o.grep(b, function(a) {
            return 1 === a.nodeType
        }))
    }, o.fn.extend({
        find: function(a) {
            var b, c = this.length,
                d = [],
                e = this;
            if ("string" != typeof a) return this.pushStack(o(a).filter(function() {
                for (b = 0; c > b; b++)
                    if (o.contains(e[b], this)) return !0
            }));
            for (b = 0; c > b; b++) o.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? o.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        },
        filter: function(a) {
            return this.pushStack(x(this, a || [], !1))
        },
        not: function(a) {
            return this.pushStack(x(this, a || [], !0))
        },
        is: function(a) {
            return !!x(this, "string" == typeof a && u.test(a) ? o(a) : a || [], !1).length
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = o.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof o ? b[0] : b, o.merge(this, o.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : m, !0)), v.test(c[1]) && o.isPlainObject(b))
                        for (c in b) o.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                return d = m.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = m, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : o.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(o) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), o.makeArray(a, this))
        };
    A.prototype = o.fn, y = o(m);
    var B = /^(?:parents|prev(?:Until|All))/,
        C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    o.extend({
        dir: function(a, b, c) {
            var d = [],
                e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)
                if (1 === a.nodeType) {
                    if (e && o(a).is(c)) break;
                    d.push(a)
                }
            return d
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), o.fn.extend({
        has: function(a) {
            var b = o(a, this),
                c = b.length;
            return this.filter(function() {
                for (var a = 0; c > a; a++)
                    if (o.contains(this, b[a])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? o(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && o.find.matchesSelector(c, a))) {
                        f.push(c);
                        break
                    }
            return this.pushStack(f.length > 1 ? o.unique(f) : f)
        },
        index: function(a) {
            return a ? "string" == typeof a ? g.call(o(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(a, b) {
            return this.pushStack(o.unique(o.merge(this.get(), o(a, b))))
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });

    function D(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }
    o.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        },
        parents: function(a) {
            return o.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return o.dir(a, "parentNode", c)
        },
        next: function(a) {
            return D(a, "nextSibling")
        },
        prev: function(a) {
            return D(a, "previousSibling")
        },
        nextAll: function(a) {
            return o.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return o.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return o.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return o.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return o.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return o.sibling(a.firstChild)
        },
        contents: function(a) {
            return a.contentDocument || o.merge([], a.childNodes)
        }
    }, function(a, b) {
        o.fn[a] = function(c, d) {
            var e = o.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = o.filter(d, e)), this.length > 1 && (C[a] || o.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var E = /\S+/g,
        F = {};

    function G(a) {
        var b = F[a] = {};
        return o.each(a.match(E) || [], function(a, c) {
            b[c] = !0
        }), b
    }
    o.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : o.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function(l) {
                for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)
                    if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        b = !1;
                        break
                    }
                d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
            },
            k = {
                add: function() {
                    if (h) {
                        var c = h.length;
                        ! function g(b) {
                            o.each(b, function(b, c) {
                                var d = o.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
                            })
                        }(arguments), d ? f = h.length : b && (e = c, j(b))
                    }
                    return this
                },
                remove: function() {
                    return h && o.each(arguments, function(a, b) {
                        var c;
                        while ((c = o.inArray(b, h, c)) > -1) h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
                    }), this
                },
                has: function(a) {
                    return a ? o.inArray(a, h) > -1 : !(!h || !h.length)
                },
                empty: function() {
                    return h = [], f = 0, this
                },
                disable: function() {
                    return h = i = b = void 0, this
                },
                disabled: function() {
                    return !h
                },
                lock: function() {
                    return i = void 0, b || k.disable(), this
                },
                locked: function() {
                    return !i
                },
                fireWith: function(a, b) {
                    return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
                },
                fire: function() {
                    return k.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!c
                }
            };
        return k
    }, o.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", o.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", o.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", o.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var a = arguments;
                        return o.Deferred(function(c) {
                            o.each(b, function(b, f) {
                                var g = o.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && o.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? o.extend(a, d) : d
                    }
                },
                e = {};
            return d.pipe = d.then, o.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && o.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : o.Deferred(),
                h = function(a, b, c) {
                    return function(e) {
                        b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                },
                i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && o.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    o.fn.ready = function(a) {
        return o.ready.promise().done(a), this
    }, o.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? o.readyWait++ : o.ready(!0)
        },
        ready: function(a) {
            (a === !0 ? --o.readyWait : o.isReady) || (o.isReady = !0, a !== !0 && --o.readyWait > 0 || (H.resolveWith(m, [o]), o.fn.trigger && o(m).trigger("ready").off("ready")))
        }
    });

    function I() {
        m.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), o.ready()
    }
    o.ready.promise = function(b) {
        return H || (H = o.Deferred(), "complete" === m.readyState ? setTimeout(o.ready) : (m.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
    }, o.ready.promise();
    var J = o.access = function(a, b, c, d, e, f, g) {
        var h = 0,
            i = a.length,
            j = null == c;
        if ("object" === o.type(c)) {
            e = !0;
            for (h in c) o.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, o.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
                return j.call(o(a), c)
            })), b))
            for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    o.acceptData = function(a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };

    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }), this.expando = o.expando + Math.random()
    }
    K.uid = 1, K.accepts = o.acceptData, K.prototype = {
        key: function(a) {
            if (!K.accepts(a)) return 0;
            var b = {},
                c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = {
                        value: c
                    }, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, o.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        },
        set: function(a, b, c) {
            var d, e = this.key(a),
                f = this.cache[e];
            if ("string" == typeof b) f[b] = c;
            else if (o.isEmptyObject(f)) o.extend(this.cache[e], b);
            else
                for (d in b) f[d] = b[d];
            return f
        },
        get: function(a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        },
        access: function(a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, o.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        },
        remove: function(a, b) {
            var c, d, e, f = this.key(a),
                g = this.cache[f];
            if (void 0 === b) this.cache[f] = {};
            else {
                o.isArray(b) ? d = b.concat(b.map(o.camelCase)) : (e = o.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
                while (c--) delete g[d[c]]
            }
        },
        hasData: function(a) {
            return !o.isEmptyObject(this.cache[a[this.expando]] || {})
        },
        discard: function(a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var L = new K,
        M = new K,
        N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        O = /([A-Z])/g;

    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)
            if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? o.parseJSON(c) : c
                } catch (e) {}
                M.set(a, b, c)
            } else c = void 0;
        return c
    }
    o.extend({
        hasData: function(a) {
            return M.hasData(a) || L.hasData(a)
        },
        data: function(a, b, c) {
            return M.access(a, b, c)
        },
        removeData: function(a, b) {
            M.remove(a, b)
        },
        _data: function(a, b, c) {
            return L.access(a, b, c)
        },
        _removeData: function(a, b) {
            L.remove(a, b)
        }
    }), o.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--) d = g[c].name, 0 === d.indexOf("data-") && (d = o.camelCase(d.slice(5)), P(f, d, e[d]));
                    L.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() {
                M.set(this, a)
            }) : J(this, function(b) {
                var c, d = o.camelCase(a);
                if (f && void 0 === b) {
                    if (c = M.get(f, a), void 0 !== c) return c;
                    if (c = M.get(f, d), void 0 !== c) return c;
                    if (c = P(f, d, void 0), void 0 !== c) return c
                } else this.each(function() {
                    var c = M.get(this, d);
                    M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        },
        removeData: function(a) {
            return this.each(function() {
                M.remove(this, a)
            })
        }
    }), o.extend({
        queue: function(a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || o.isArray(c) ? d = L.access(a, b, o.makeArray(c)) : d.push(c)), d || []) : void 0
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = o.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = o._queueHooks(a, b),
                g = function() {
                    o.dequeue(a, b)
                };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return L.get(a, c) || L.access(a, c, {
                empty: o.Callbacks("once memory").add(function() {
                    L.remove(a, [b + "queue", c])
                })
            })
        }
    }), o.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? o.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = o.queue(this, a, b);
                o._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && o.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                o.dequeue(this, a)
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, b) {
            var c, d = 1,
                e = o.Deferred(),
                f = this,
                g = this.length,
                h = function() {
                    --d || e.resolveWith(f, [f])
                };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        R = ["Top", "Right", "Bottom", "Left"],
        S = function(a, b) {
            return a = b || a, "none" === o.css(a, "display") || !o.contains(a.ownerDocument, a)
        },
        T = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = m.createDocumentFragment(),
            b = a.appendChild(m.createElement("div"));
        b.innerHTML = "<input type='radio' checked='checked' name='t'/>", l.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", l.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var U = "undefined";
    l.focusinBubbles = "onfocusin" in a;
    var V = /^key/,
        W = /^(?:mouse|contextmenu)|click/,
        X = /^(?:focusinfocus|focusoutblur)$/,
        Y = /^([^.]*)(?:\.(.+)|)$/;

    function Z() {
        return !0
    }

    function $() {
        return !1
    }

    function _() {
        try {
            return m.activeElement
        } catch (a) {}
    }
    o.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, p, q, r = L.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = o.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function(b) {
                    return typeof o !== U && o.event.triggered !== b.type ? o.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(E) || [""], j = b.length;
                while (j--) h = Y.exec(b[j]) || [], n = q = h[1], p = (h[2] || "").split(".").sort(), n && (l = o.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = o.event.special[n] || {}, k = o.extend({
                    type: n,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && o.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(n, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), o.event.global[n] = !0)
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)
                    if (h = Y.exec(b[j]) || [], n = q = h[1], p = (h[2] || "").split(".").sort(), n) {
                        l = o.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                        while (f--) k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                        g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || o.removeEvent(a, n, r.handle), delete i[n])
                    } else
                        for (n in i) o.event.remove(a, n + b[j], c, d, !0);
                o.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, n, p = [d || m],
                q = j.call(b, "type") ? b.type : b,
                r = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || m, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + o.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[o.expando] ? b : new o.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : o.makeArray(c, [b]), n = o.event.special[q] || {}, e || !n.trigger || n.trigger.apply(d, c) !== !1)) {
                if (!e && !n.noBubble && !o.isWindow(d)) {
                    for (i = n.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode) p.push(g), h = g;
                    h === (d.ownerDocument || m) && p.push(h.defaultView || h.parentWindow || a)
                }
                f = 0;
                while ((g = p[f++]) && !b.isPropagationStopped()) b.type = f > 1 ? i : n.bindType || q, l = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), l && l.apply(g, c), l = k && g[k], l && l.apply && o.acceptData(g) && (b.result = l.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = q, e || b.isDefaultPrevented() || n._default && n._default.apply(p.pop(), c) !== !1 || !o.acceptData(d) || k && o.isFunction(d[q]) && !o.isWindow(d) && (h = d[k], h && (d[k] = null), o.event.triggered = q, d[q](), o.event.triggered = void 0, h && (d[k] = h)), b.result
            }
        },
        dispatch: function(a) {
            a = o.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (L.get(this, "events") || {})[a.type] || [],
                k = o.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = o.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((o.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i !== this; i = i.parentNode || this)
                    if (i.disabled !== !0 || "click" !== a.type) {
                        for (d = [], c = 0; h > c; c++) f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? o(e, this).index(i) >= 0 : o.find(e, this, null, [i]).length), d[e] && d.push(f);
                        d.length && g.push({
                            elem: i,
                            handlers: d
                        })
                    }
            return h < b.length && g.push({
                elem: this,
                handlers: b.slice(h)
            }), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || m, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function(a) {
            if (a[o.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new o.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = m), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && o.nodeName(this, "input") ? (this.click(), !1) : void 0
                },
                _default: function(a) {
                    return o.nodeName(a.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    void 0 !== a.result && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = o.extend(new o.Event, c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? o.event.trigger(e, null, b) : o.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, o.removeEvent = function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, o.Event = function(a, b) {
        return this instanceof o.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.getPreventDefault && a.getPreventDefault() ? Z : $) : this.type = a, b && o.extend(this, b), this.timeStamp = a && a.timeStamp || o.now(), void(this[o.expando] = !0)) : new o.Event(a, b)
    }, o.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = Z, this.stopPropagation()
        }
    }, o.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        o.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !o.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), l.focusinBubbles || o.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = function(a) {
            o.event.simulate(b, a.target, o.event.fix(a), !0)
        };
        o.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = L.access(d, b);
                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
            }
        }
    }), o.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a) this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = $;
            else if (!d) return this;
            return 1 === e && (f = d, d = function(a) {
                return o().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = o.guid++)), this.each(function() {
                o.event.add(this, a, d, c, b)
            })
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1)
        },
        off: function(a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj) return d = a.handleObj, o(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a) this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function() {
                o.event.remove(this, a, c, b)
            })
        },
        trigger: function(a, b) {
            return this.each(function() {
                o.event.trigger(a, b, this)
            })
        },
        triggerHandler: function(a, b) {
            var c = this[0];
            return c ? o.event.trigger(a, b, c, !0) : void 0
        }
    });
    var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        bb = /<([\w:]+)/,
        cb = /<|&#?\w+;/,
        db = /<(?:script|style|link)/i,
        eb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        fb = /^$|\/(?:java|ecma)script/i,
        gb = /^true\/(.*)/,
        hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ib = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, ib.th = ib.td;

    function jb(a, b) {
        return o.nodeName(a, "table") && o.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function kb(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function lb(a) {
        var b = gb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function mb(a, b) {
        for (var c = 0, d = a.length; d > c; c++) L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
    }

    function nb(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)
                    for (c = 0, d = j[e].length; d > c; c++) o.event.add(b, e, j[e][c])
            }
            M.hasData(a) && (h = M.access(a), i = o.extend({}, h), M.set(b, i))
        }
    }

    function ob(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && o.nodeName(a, b) ? o.merge([a], c) : c
    }

    function pb(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }
    o.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0),
                i = o.contains(a.ownerDocument, a);
            if (!(l.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || o.isXMLDoc(a)))
                for (g = ob(h), f = ob(a), d = 0, e = f.length; e > d; d++) pb(f[d], g[d]);
            if (b)
                if (c)
                    for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++) nb(f[d], g[d]);
                else nb(a, h);
            return g = ob(h, "script"), g.length > 0 && mb(g, !i && ob(a, "script")), h
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, n = a.length; n > m; m++)
                if (e = a[m], e || 0 === e)
                    if ("object" === o.type(e)) o.merge(l, e.nodeType ? [e] : e);
                    else if (cb.test(e)) {
                f = f || k.appendChild(b.createElement("div")), g = (bb.exec(e) || ["", ""])[1].toLowerCase(), h = ib[g] || ib._default, f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2], j = h[0];
                while (j--) f = f.lastChild;
                o.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
            } else l.push(b.createTextNode(e));
            k.textContent = "", m = 0;
            while (e = l[m++])
                if ((!d || -1 === o.inArray(e, d)) && (i = o.contains(e.ownerDocument, e), f = ob(k.appendChild(e), "script"), i && mb(f), c)) {
                    j = 0;
                    while (e = f[j++]) fb.test(e.type || "") && c.push(e)
                }
            return k
        },
        cleanData: function(a) {
            for (var b, c, d, e, f, g, h = o.event.special, i = 0; void 0 !== (c = a[i]); i++) {
                if (o.acceptData(c) && (f = c[L.expando], f && (b = L.cache[f]))) {
                    if (d = Object.keys(b.events || {}), d.length)
                        for (g = 0; void 0 !== (e = d[g]); g++) h[e] ? o.event.remove(c, e) : o.removeEvent(c, e, b.handle);
                    L.cache[f] && delete L.cache[f]
                }
                delete M.cache[c[M.expando]]
            }
        }
    }), o.fn.extend({
        text: function(a) {
            return J(this, function(a) {
                return void 0 === a ? o.text(this) : this.empty().each(function() {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        },
        remove: function(a, b) {
            for (var c, d = a ? o.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || o.cleanData(ob(c)), c.parentNode && (b && o.contains(c.ownerDocument, c) && mb(ob(c, "script")), c.parentNode.removeChild(c));
            return this
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) 1 === a.nodeType && (o.cleanData(ob(a, !1)), a.textContent = "");
            return this
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return o.clone(this, a, b)
            })
        },
        html: function(a) {
            return J(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a && 1 === b.nodeType) return b.innerHTML;
                if ("string" == typeof a && !db.test(a) && !ib[(bb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(ab, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (o.cleanData(ob(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() {
            var a = arguments[0];
            return this.domManip(arguments, function(b) {
                a = this.parentNode, o.cleanData(ob(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        },
        detach: function(a) {
            return this.remove(a, !0)
        },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                k = this.length,
                m = this,
                n = k - 1,
                p = a[0],
                q = o.isFunction(p);
            if (q || k > 1 && "string" == typeof p && !l.checkClone && eb.test(p)) return this.each(function(c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (k && (c = o.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (f = o.map(ob(c, "script"), kb), g = f.length; k > j; j++) h = c, j !== n && (h = o.clone(h, !0, !0), g && o.merge(f, ob(h, "script"))), b.call(this[j], h, j);
                if (g)
                    for (i = f[f.length - 1].ownerDocument, o.map(f, lb), j = 0; g > j; j++) h = f[j], fb.test(h.type || "") && !L.access(h, "globalEval") && o.contains(i, h) && (h.src ? o._evalUrl && o._evalUrl(h.src) : o.globalEval(h.textContent.replace(hb, "")))
            }
            return this
        }
    }), o.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        o.fn[a] = function(a) {
            for (var c, d = [], e = o(a), g = e.length - 1, h = 0; g >= h; h++) c = h === g ? this : this.clone(!0), o(e[h])[b](c), f.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var qb, rb = {};

    function sb(b, c) {
        var d = o(c.createElement(b)).appendTo(c.body),
            e = a.getDefaultComputedStyle ? a.getDefaultComputedStyle(d[0]).display : o.css(d[0], "display");
        return d.detach(), e
    }

    function tb(a) {
        var b = m,
            c = rb[a];
        return c || (c = sb(a, b), "none" !== c && c || (qb = (qb || o("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qb[0].contentDocument, b.write(), b.close(), c = sb(a, b), qb.detach()), rb[a] = c), c
    }
    var ub = /^margin/,
        vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"),
        wb = function(a) {
            return a.ownerDocument.defaultView.getComputedStyle(a, null)
        };

    function xb(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || o.contains(a.ownerDocument, a) || (g = o.style(a, b)), vb.test(g) && ub.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function yb(a, b) {
        return {
            get: function() {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }! function() {
        var b, c, d = "padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",
            e = m.documentElement,
            f = m.createElement("div"),
            g = m.createElement("div");
        g.style.backgroundClip = "content-box", g.cloneNode(!0).style.backgroundClip = "", l.clearCloneStyle = "content-box" === g.style.backgroundClip, f.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", f.appendChild(g);

        function h() {
            g.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%", e.appendChild(f);
            var d = a.getComputedStyle(g, null);
            b = "1%" !== d.top, c = "4px" === d.width, e.removeChild(f)
        }
        a.getComputedStyle && o.extend(l, {
            pixelPosition: function() {
                return h(), b
            },
            boxSizingReliable: function() {
                return null == c && h(), c
            },
            reliableMarginRight: function() {
                var b, c = g.appendChild(m.createElement("div"));
                return c.style.cssText = g.style.cssText = d, c.style.marginRight = c.style.width = "0", g.style.width = "1px", e.appendChild(f), b = !parseFloat(a.getComputedStyle(c, null).marginRight), e.removeChild(f), g.innerHTML = "", b
            }
        })
    }(), o.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var zb = /^(none|table(?!-c[ea]).+)/,
        Ab = new RegExp("^(" + Q + ")(.*)$", "i"),
        Bb = new RegExp("^([+-])=(" + Q + ")", "i"),
        Cb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Db = {
            letterSpacing: 0,
            fontWeight: 400
        },
        Eb = ["Webkit", "O", "Moz", "ms"];

    function Fb(a, b) {
        if (b in a) return b;
        var c = b[0].toUpperCase() + b.slice(1),
            d = b,
            e = Eb.length;
        while (e--)
            if (b = Eb[e] + c, b in a) return b;
        return d
    }

    function Gb(a, b, c) {
        var d = Ab.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Hb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += o.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= o.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= o.css(a, "border" + R[f] + "Width", !0, e))) : (g += o.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += o.css(a, "border" + R[f] + "Width", !0, e)));
        return g
    }

    function Ib(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = wb(a),
            g = "border-box" === o.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = xb(a, b, f), (0 > e || null == e) && (e = a.style[b]), vb.test(e)) return e;
            d = g && (l.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function Jb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", tb(d.nodeName)))) : f[g] || (e = S(d), (c && "none" !== c || !e) && L.set(d, "olddisplay", e ? c : o.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }
    o.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = xb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = o.camelCase(b),
                    i = a.style;
                return b = o.cssProps[h] || (o.cssProps[h] = Fb(i, h)), g = o.cssHooks[b] || o.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Bb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(o.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || o.cssNumber[h] || (c += "px"), l.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = "", i[b] = c)), void 0)
            }
        },
        css: function(a, b, c, d) {
            var e, f, g, h = o.camelCase(b);
            return b = o.cssProps[h] || (o.cssProps[h] = Fb(a.style, h)), g = o.cssHooks[b] || o.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xb(a, b, d)), "normal" === e && b in Db && (e = Db[b]), "" === c || c ? (f = parseFloat(e), c === !0 || o.isNumeric(f) ? f || 0 : e) : e
        }
    }), o.each(["height", "width"], function(a, b) {
        o.cssHooks[b] = {
            get: function(a, c, d) {
                return c ? 0 === a.offsetWidth && zb.test(o.css(a, "display")) ? o.swap(a, Cb, function() {
                    return Ib(a, b, d)
                }) : Ib(a, b, d) : void 0
            },
            set: function(a, c, d) {
                var e = d && wb(a);
                return Gb(a, c, d ? Hb(a, b, d, "border-box" === o.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), o.cssHooks.marginRight = yb(l.reliableMarginRight, function(a, b) {
        return b ? o.swap(a, {
            display: "inline-block"
        }, xb, [a, "marginRight"]) : void 0
    }), o.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        o.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, ub.test(a) || (o.cssHooks[a + b].set = Gb)
    }), o.fn.extend({
        css: function(a, b) {
            return J(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (o.isArray(b)) {
                    for (d = wb(a), e = b.length; e > g; g++) f[b[g]] = o.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? o.style(a, b, c) : o.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() {
            return Jb(this, !0)
        },
        hide: function() {
            return Jb(this)
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                S(this) ? o(this).show() : o(this).hide()
            })
        }
    });

    function Kb(a, b, c, d, e) {
        return new Kb.prototype.init(a, b, c, d, e)
    }
    o.Tween = Kb, Kb.prototype = {
        constructor: Kb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (o.cssNumber[c] ? "" : "px")
        },
        cur: function() {
            var a = Kb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Kb.propHooks._default.get(this)
        },
        run: function(a) {
            var b, c = Kb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? o.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Kb.propHooks._default.set(this), this
        }
    }, Kb.prototype.init.prototype = Kb.prototype, Kb.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = o.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            },
            set: function(a) {
                o.fx.step[a.prop] ? o.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[o.cssProps[a.prop]] || o.cssHooks[a.prop]) ? o.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, o.easing = {
        linear: function(a) {
            return a
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, o.fx = Kb.prototype.init, o.fx.step = {};
    var Lb, Mb, Nb = /^(?:toggle|show|hide)$/,
        Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"),
        Pb = /queueHooks$/,
        Qb = [Vb],
        Rb = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = Ob.exec(b),
                    f = e && e[3] || (o.cssNumber[a] ? "" : "px"),
                    g = (o.cssNumber[a] || "px" !== f && +d) && Ob.exec(o.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, o.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function Sb() {
        return setTimeout(function() {
            Lb = void 0
        }), Lb = o.now()
    }

    function Tb(a, b) {
        var c, d = 0,
            e = {
                height: a
            };
        for (b = b ? 1 : 0; 4 > d; d += 2 - b) c = R[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function Ub(a, b, c) {
        for (var d, e = (Rb[b] || []).concat(Rb["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function Vb(a, b, c) {
        var d, e, f, g, h, i, j, k = this,
            l = {},
            m = a.style,
            n = a.nodeType && S(a),
            p = L.get(a, "fxshow");
        c.queue || (h = o._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i()
        }), h.unqueued++, k.always(function() {
            k.always(function() {
                h.unqueued--, o.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [m.overflow, m.overflowX, m.overflowY], j = o.css(a, "display"), "none" === j && (j = tb(a.nodeName)), "inline" === j && "none" === o.css(a, "float") && (m.display = "inline-block")), c.overflow && (m.overflow = "hidden", k.always(function() {
            m.overflow = c.overflow[0], m.overflowX = c.overflow[1], m.overflowY = c.overflow[2]
        }));
        for (d in b)
            if (e = b[d], Nb.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (n ? "hide" : "show")) {
                    if ("show" !== e || !p || void 0 === p[d]) continue;
                    n = !0
                }
                l[d] = p && p[d] || o.style(a, d)
            }
        if (!o.isEmptyObject(l)) {
            p ? "hidden" in p && (n = p.hidden) : p = L.access(a, "fxshow", {}), f && (p.hidden = !n), n ? o(a).show() : k.done(function() {
                o(a).hide()
            }), k.done(function() {
                var b;
                L.remove(a, "fxshow");
                for (b in l) o.style(a, b, l[b])
            });
            for (d in l) g = Ub(n ? p[d] : 0, d, k), d in p || (p[d] = g.start, n && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function Wb(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = o.camelCase(c), e = b[d], f = a[c], o.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = o.cssHooks[d], g && "expand" in g) {
                f = g.expand(f), delete a[d];
                for (c in f) c in a || (a[c] = f[c], b[c] = e)
            } else b[d] = e
    }

    function Xb(a, b, c) {
        var d, e, f = 0,
            g = Qb.length,
            h = o.Deferred().always(function() {
                delete i.elem
            }),
            i = function() {
                if (e) return !1;
                for (var b = Lb || Sb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
            },
            j = h.promise({
                elem: a,
                props: o.extend({}, b),
                opts: o.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Lb || Sb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = o.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d), d
                },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (Wb(k, j.opts.specialEasing); g > f; f++)
            if (d = Qb[f].call(j, a, k, j.opts)) return d;
        return o.map(k, Ub, j), o.isFunction(j.opts.start) && j.opts.start.call(a, j), o.fx.timer(o.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    o.Animation = o.extend(Xb, {
            tweener: function(a, b) {
                o.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++) c = a[d], Rb[c] = Rb[c] || [], Rb[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? Qb.unshift(a) : Qb.push(a)
            }
        }), o.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? o.extend({}, a) : {
                complete: c || !c && b || o.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !o.isFunction(b) && b
            };
            return d.duration = o.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in o.fx.speeds ? o.fx.speeds[d.duration] : o.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
                o.isFunction(d.old) && d.old.call(this), d.queue && o.dequeue(this, d.queue)
            }, d
        }, o.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(S).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = o.isEmptyObject(a),
                    f = o.speed(b, c, d),
                    g = function() {
                        var b = Xb(this, o.extend({}, a), f);
                        (e || L.get(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = o.timers,
                        g = L.get(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && Pb.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && o.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = L.get(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = o.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, o.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), o.each(["toggle", "show", "hide"], function(a, b) {
            var c = o.fn[b];
            o.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Tb(b, !0), a, d, e)
            }
        }), o.each({
            slideDown: Tb("show"),
            slideUp: Tb("hide"),
            slideToggle: Tb("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            o.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }), o.timers = [], o.fx.tick = function() {
            var a, b = 0,
                c = o.timers;
            for (Lb = o.now(); b < c.length; b++) a = c[b], a() || c[b] !== a || c.splice(b--, 1);
            c.length || o.fx.stop(), Lb = void 0
        }, o.fx.timer = function(a) {
            o.timers.push(a), a() ? o.fx.start() : o.timers.pop()
        }, o.fx.interval = 13, o.fx.start = function() {
            Mb || (Mb = setInterval(o.fx.tick, o.fx.interval))
        }, o.fx.stop = function() {
            clearInterval(Mb), Mb = null
        }, o.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, o.fn.delay = function(a, b) {
            return a = o.fx ? o.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        function() {
            var a = m.createElement("input"),
                b = m.createElement("select"),
                c = b.appendChild(m.createElement("option"));
            a.type = "checkbox", l.checkOn = "" !== a.value, l.optSelected = c.selected, b.disabled = !0, l.optDisabled = !c.disabled, a = m.createElement("input"), a.value = "t", a.type = "radio", l.radioValue = "t" === a.value
        }();
    var Yb, Zb, $b = o.expr.attrHandle;
    o.fn.extend({
        attr: function(a, b) {
            return J(this, o.attr, a, b, arguments.length > 1)
        },
        removeAttr: function(a) {
            return this.each(function() {
                o.removeAttr(this, a)
            })
        }
    }), o.extend({
        attr: function(a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === U ? o.prop(a, b, c) : (1 === f && o.isXMLDoc(a) || (b = b.toLowerCase(), d = o.attrHooks[b] || (o.expr.match.bool.test(b) ? Zb : Yb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = o.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void o.removeAttr(a, b))
        },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = o.propFix[c] || c, o.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!l.radioValue && "radio" === b && o.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), Zb = {
        set: function(a, b, c) {
            return b === !1 ? o.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, o.each(o.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = $b[b] || o.find.attr;
        $b[b] = function(a, b, d) {
            var e, f;
            return d || (f = $b[b], $b[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $b[b] = f), e
        }
    });
    var _b = /^(?:input|select|textarea|button)$/i;
    o.fn.extend({
        prop: function(a, b) {
            return J(this, o.prop, a, b, arguments.length > 1)
        },
        removeProp: function(a) {
            return this.each(function() {
                delete this[o.propFix[a] || a]
            })
        }
    }), o.extend({
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !o.isXMLDoc(a), f && (b = o.propFix[b] || b, e = o.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), l.optSelected || (o.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), o.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        o.propFix[this.toLowerCase()] = this
    });
    var ac = /[\t\r\n\f]/g;
    o.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (o.isFunction(a)) return this.each(function(b) {
                o(this).addClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(E) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = o.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a,
                i = 0,
                j = this.length;
            if (o.isFunction(a)) return this.each(function(b) {
                o(this).removeClass(a.call(this, b, this.className))
            });
            if (h)
                for (b = (a || "").match(E) || []; j > i; i++)
                    if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                        g = a ? o.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(o.isFunction(a) ? function(c) {
                o(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function() {
                if ("string" === c) {
                    var b, d = 0,
                        e = o(this),
                        f = a.match(E) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    });
    var bc = /\r/g;
    o.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = o.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, o(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : o.isArray(e) && (e = o.map(e, function(a) {
                        return null == a ? "" : a + ""
                    })), b = o.valHooks[this.type] || o.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = o.valHooks[e.type] || o.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bc, "") : null == c ? "" : c)
            }
        }
    }), o.extend({
        valHooks: {
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (l.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && o.nodeName(c.parentNode, "optgroup"))) {
                            if (b = o(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = o.makeArray(b),
                        g = e.length;
                    while (g--) d = e[g], (d.selected = o.inArray(o(d).val(), f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), o.each(["radio", "checkbox"], function() {
        o.valHooks[this] = {
            set: function(a, b) {
                return o.isArray(b) ? a.checked = o.inArray(o(a).val(), b) >= 0 : void 0
            }
        }, l.checkOn || (o.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), o.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        o.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), o.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c)
        },
        unbind: function(a, b) {
            return this.off(a, null, b)
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d)
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var cc = o.now(),
        dc = /\?/;
    o.parseJSON = function(a) {
        return JSON.parse(a + "")
    }, o.parseXML = function(a) {
        var b, c;
        if (!a || "string" != typeof a) return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && o.error("Invalid XML: " + a), b
    };
    var ec, fc, gc = /#.*$/,
        hc = /([?&])_=[^&]*/,
        ic = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        jc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        kc = /^(?:GET|HEAD)$/,
        lc = /^\/\//,
        mc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        nc = {},
        oc = {},
        pc = "*/".concat("*");
    try {
        fc = location.href
    } catch (qc) {
        fc = m.createElement("a"), fc.href = "", fc = fc.href
    }
    ec = mc.exec(fc.toLowerCase()) || [];

    function rc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(E) || [];
            if (o.isFunction(c))
                while (d = f[e++]) "+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function sc(a, b, c, d) {
        var e = {},
            f = a === oc;

        function g(h) {
            var i;
            return e[h] = !0, o.each(a[h] || [], function(a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function tc(a, b) {
        var c, d, e = o.ajaxSettings.flatOptions || {};
        for (c in b) void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && o.extend(!0, a, d), a
    }

    function uc(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)
            for (e in h)
                if (h[e] && h[e].test(d)) {
                    i.unshift(e);
                    break
                }
        if (i[0] in c) f = i[0];
        else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function vc(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                        g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                        break
                    }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try {
                    b = g(b)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: g ? l : "No conversion from " + i + " to " + f
                    }
                }
        }
        return {
            state: "success",
            data: b
        }
    }
    o.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: fc,
            type: "GET",
            isLocal: jc.test(ec[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": pc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": o.parseJSON,
                "text xml": o.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? tc(tc(a, o.ajaxSettings), b) : tc(o.ajaxSettings, a)
        },
        ajaxPrefilter: rc(nc),
        ajaxTransport: rc(oc),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = o.ajaxSetup({}, b),
                l = k.context || k,
                m = k.context && (l.nodeType || l.jquery) ? o(l) : o.event,
                n = o.Deferred(),
                p = o.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!f) {
                                f = {};
                                while (b = ic.exec(e)) f[b[1].toLowerCase()] = b[2]
                            }
                            b = f[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? e : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a, r[a] = b), this
                    },
                    overrideMimeType: function(a) {
                        return t || (k.mimeType = a), this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return c && c.abort(b), x(0, b), this
                    }
                };
            if (n.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || fc) + "").replace(gc, "").replace(lc, ec[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = o.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = mc.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === ec[1] && h[2] === ec[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (ec[3] || ("http:" === ec[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = o.param(k.data, k.traditional)), sc(nc, k, b, v), 2 === t) return v;
            i = k.global, i && 0 === o.active++ && o.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !kc.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (dc.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = hc.test(d) ? d.replace(hc, "$1_=" + cc++) : d + (dc.test(d) ? "&" : "?") + "_=" + cc++)), k.ifModified && (o.lastModified[d] && v.setRequestHeader("If-Modified-Since", o.lastModified[d]), o.etag[d] && v.setRequestHeader("If-None-Match", o.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + pc + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers) v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (j in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) v[j](k[j]);
            if (c = sc(oc, k, b, v)) {
                v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, c.send(r, x)
                } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");

            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = uc(k, v, f)), u = vc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (o.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (o.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? n.resolveWith(l, [r, x, v]) : n.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --o.active || o.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) {
            return o.get(a, b, c, "json")
        },
        getScript: function(a, b) {
            return o.get(a, void 0, b, "script")
        }
    }), o.each(["get", "post"], function(a, b) {
        o[b] = function(a, c, d, e) {
            return o.isFunction(c) && (e = e || d, d = c, c = void 0), o.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), o.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
        o.fn[b] = function(a) {
            return this.on(b, a)
        }
    }), o._evalUrl = function(a) {
        return o.ajax({
            url: a,
            type: "GET",
            dataType: "script",
            async: !1,
            global: !1,
            "throws": !0
        })
    }, o.fn.extend({
        wrapAll: function(a) {
            var b;
            return o.isFunction(a) ? this.each(function(b) {
                o(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = o(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                var a = this;
                while (a.firstElementChild) a = a.firstElementChild;
                return a
            }).append(this)), this)
        },
        wrapInner: function(a) {
            return this.each(o.isFunction(a) ? function(b) {
                o(this).wrapInner(a.call(this, b))
            } : function() {
                var b = o(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) {
            var b = o.isFunction(a);
            return this.each(function(c) {
                o(this).wrapAll(b ? a.call(this, c) : a)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                o.nodeName(this, "body") || o(this).replaceWith(this.childNodes)
            }).end()
        }
    }), o.expr.filters.hidden = function(a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, o.expr.filters.visible = function(a) {
        return !o.expr.filters.hidden(a)
    };
    var wc = /%20/g,
        xc = /\[\]$/,
        yc = /\r?\n/g,
        zc = /^(?:submit|button|image|reset|file)$/i,
        Ac = /^(?:input|select|textarea|keygen)/i;

    function Bc(a, b, c, d) {
        var e;
        if (o.isArray(b)) o.each(b, function(b, e) {
            c || xc.test(a) ? d(a, e) : Bc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        });
        else if (c || "object" !== o.type(b)) d(a, b);
        else
            for (e in b) Bc(a + "[" + e + "]", b[e], c, d)
    }
    o.param = function(a, b) {
        var c, d = [],
            e = function(a, b) {
                b = o.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
        if (void 0 === b && (b = o.ajaxSettings && o.ajaxSettings.traditional), o.isArray(a) || a.jquery && !o.isPlainObject(a)) o.each(a, function() {
            e(this.name, this.value)
        });
        else
            for (c in a) Bc(c, a[c], b, e);
        return d.join("&").replace(wc, "+")
    }, o.fn.extend({
        serialize: function() {
            return o.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var a = o.prop(this, "elements");
                return a ? o.makeArray(a) : this
            }).filter(function() {
                var a = this.type;
                return this.name && !o(this).is(":disabled") && Ac.test(this.nodeName) && !zc.test(a) && (this.checked || !T.test(a))
            }).map(function(a, b) {
                var c = o(this).val();
                return null == c ? null : o.isArray(c) ? o.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(yc, "\r\n")
                    }
                }) : {
                    name: b.name,
                    value: c.replace(yc, "\r\n")
                }
            }).get()
        }
    }), o.ajaxSettings.xhr = function() {
        try {
            return new XMLHttpRequest
        } catch (a) {}
    };
    var Cc = 0,
        Dc = {},
        Ec = {
            0: 200,
            1223: 204
        },
        Fc = o.ajaxSettings.xhr();
    a.ActiveXObject && o(a).on("unload", function() {
        for (var a in Dc) Dc[a]()
    }), l.cors = !!Fc && "withCredentials" in Fc, l.ajax = Fc = !!Fc, o.ajaxTransport(function(a) {
        var b;
        return l.cors || Fc && !a.crossDomain ? {
            send: function(c, d) {
                var e, f = a.xhr(),
                    g = ++Cc;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                    for (e in a.xhrFields) f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c) f.setRequestHeader(e, c[e]);
                b = function(a) {
                    return function() {
                        b && (delete Dc[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Ec[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                            text: f.responseText
                        } : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Dc[g] = b("abort"), f.send(a.hasContent && a.data || null)
            },
            abort: function() {
                b && b()
            }
        } : void 0
    }), o.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return o.globalEval(a), a
            }
        }
    }), o.ajaxPrefilter("script", function(a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), o.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function(d, e) {
                    b = o("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function(a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), m.head.appendChild(b[0])
                },
                abort: function() {
                    c && c()
                }
            }
        }
    });
    var Gc = [],
        Hc = /(=)\?(?=&|$)|\?\?/;
    o.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Gc.pop() || o.expando + "_" + cc++;
            return this[a] = !0, a
        }
    }), o.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Hc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = o.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hc, "$1" + e) : b.jsonp !== !1 && (b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
            return g || o.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
            g = arguments
        }, d.always(function() {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gc.push(e)), g && o.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), o.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || m;
        var d = v.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = o.buildFragment([a], b, e), e && e.length && o(e).remove(), o.merge([], d.childNodes))
    };
    var Ic = o.fn.load;
    o.fn.load = function(a, b, c) {
        if ("string" != typeof a && Ic) return Ic.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = a.slice(h), a = a.slice(0, h)), o.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && o.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function(a) {
            f = arguments, g.html(d ? o("<div>").append(o.parseHTML(a)).find(d) : a)
        }).complete(c && function(a, b) {
            g.each(c, f || [a.responseText, b, a])
        }), this
    }, o.expr.filters.animated = function(a) {
        return o.grep(o.timers, function(b) {
            return a === b.elem
        }).length
    };
    var Jc = a.document.documentElement;

    function Kc(a) {
        return o.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }
    o.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = o.css(a, "position"),
                l = o(a),
                m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = o.css(a, "top"), i = o.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), o.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, o.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) {
                o.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0],
                e = {
                    top: 0,
                    left: 0
                },
                f = d && d.ownerDocument;
            if (f) return b = f.documentElement, o.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Kc(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        },
        position: function() {
            if (this[0]) {
                var a, b, c = this[0],
                    d = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === o.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), o.nodeName(a[0], "html") || (d = a.offset()), d.top += o.css(a[0], "borderTopWidth", !0), d.left += o.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - o.css(c, "marginTop", !0),
                    left: b.left - d.left - o.css(c, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var a = this.offsetParent || Jc;
                while (a && !o.nodeName(a, "html") && "static" === o.css(a, "position")) a = a.offsetParent;
                return a || Jc
            })
        }
    }), o.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(b, c) {
        var d = "pageYOffset" === c;
        o.fn[b] = function(e) {
            return J(this, function(b, e, f) {
                var g = Kc(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), o.each(["top", "left"], function(a, b) {
        o.cssHooks[b] = yb(l.pixelPosition, function(a, c) {
            return c ? (c = xb(a, b), vb.test(c) ? o(a).position()[b] + "px" : c) : void 0
        })
    }), o.each({
        Height: "height",
        Width: "width"
    }, function(a, b) {
        o.each({
            padding: "inner" + a,
            content: b,
            "": "outer" + a
        }, function(c, d) {
            o.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return J(this, function(b, c, d) {
                    var e;
                    return o.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? o.css(b, c, g) : o.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), o.fn.size = function() {
        return this.length
    }, o.fn.andSelf = o.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
        return o
    });
    var Lc = a.jQuery,
        Mc = a.$;
    return o.noConflict = function(b) {
        return a.$ === o && (a.$ = Mc), b && a.jQuery === o && (a.jQuery = Lc), o
    }, typeof b === U && (a.jQuery = a.$ = o), o
});