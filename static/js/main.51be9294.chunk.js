(this["webpackJsonpfinger-synth-web"]=this["webpackJsonpfinger-synth-web"]||[]).push([[0],{67:function(e,t,n){},68:function(e,t,n){},78:function(e,t,n){},80:function(e,t,n){"use strict";n.r(t);var c=n(9),a=n.n(c),s=n(31),i=n.n(s),r=(n(67),n(68),n(3)),u=n.n(r),o=n(4),l=n(5),d=n(25),v=n(15),h=(n(78),n(0)),j=n(1),f=function(){function e(){Object(h.a)(this,e),this.filter=new v.b(2e4,"lowpass").toDestination(),this.distortion=(new v.a).connect(this.filter),this.synth=(new v.c).connect(this.distortion)}return Object(j.a)(e,[{key:"play",value:function(e,t){this.synth.triggerAttack(),this.filter.frequency.value=150*t,this.synth.frequency.value=e}},{key:"changeFreq",value:function(e){this.synth.frequency.value=e}},{key:"changeMod",value:function(e){this.filter.frequency.value=150*e}},{key:"stop",value:function(){this.synth.triggerRelease()}}]),e}(),b=n(6),O=n(8),p=function(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),a=n[0],s=n[1],i=Object(c.useRef)(null);Object(c.useEffect)((function(){document.addEventListener("touchstart",(function(e){e.target!==i.current&&s(!1)}))}),[]);var r=e.options.find((function(t){return t.value===e.selectedValue}));return Object(O.jsxs)("div",{className:"selector",children:[Object(O.jsx)("div",{className:"selector-name",children:e.name}),Object(O.jsxs)("div",{className:"selector-menu",onClick:function(){return s(!a)},ref:i,children:[Object(O.jsx)("div",{className:"selector-selected",children:r.display}),Object(O.jsx)("div",{className:"selector-options",children:a&&e.options.filter((function(t){return t.value!==e.selectedValue})).map((function(t){return Object(O.jsx)("div",{className:"option",onClick:function(){return e.onSelect(t.value)},children:t.display},t.value)}))})]})]})},y=function(e){var t=[];Object(b.a)(Array(7)).forEach((function(e,n){t.push({display:n+1,value:n+1})}));var n=[];return Object(b.a)(Array(12)).forEach((function(e,t){n.push({display:t+1,value:t+1})})),Object(O.jsx)("div",{className:"margin",children:Object(O.jsxs)("div",{className:"controls",children:[Object(O.jsx)(p,{name:"Key",options:[{display:"C",value:32.7},{display:"C#",value:34.65},{display:"D",value:36.71},{display:"D#",value:38.89},{display:"E",value:41.2},{display:"F",value:43.65},{display:"F#",value:46.25},{display:"G",value:49},{display:"G#",value:51.91},{display:"A",value:55},{display:"A#",value:58.27},{display:"B",value:61.74}],selectedValue:e.selectedKey,onSelect:e.setKey}),Object(O.jsx)(p,{name:"Base Octave",options:t,selectedValue:e.startingOctave,onSelect:e.setStartingOctave}),Object(O.jsx)(p,{name:"Octave Range",options:n,selectedValue:e.octaves,onSelect:e.setOctaves})]})})},g=function(e){var t=Object(c.useState)(null),n=Object(l.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)(32.7),r=Object(l.a)(i,2),h=r[0],j=r[1],b=Object(c.useState)(3),p=Object(l.a)(b,2),g=p[0],m=p[1],x=Object(c.useState)(3),w=Object(l.a)(x,2),S=w[0],k=w[1],N=Object(d.a)().domain([window.innerHeight-.05*window.innerHeight,.05*window.innerHeight]).range(function(){var e=h*g;return[e,e*S*2]}()),T=Object(d.a)().domain([1,100]).range([1,window.innerWidth]),C=function(e){return N(parseInt(e))},F=function(e){return T.invert(e)},E=function(){var e=Object(o.a)(u.a.mark((function e(t){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=F(t.changedTouches[0].clientX),c=C(t.changedTouches[0].clientY),a.play(c,n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),q=function(e){var t=C(e.changedTouches[0].clientY),n=F(e.changedTouches[0].clientX);a.changeMod(n),a.changeFreq(t)},A=function(){a.stop()},K=function(){var e=Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.d();case 2:s(new f);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)(y,{selectedKey:h,setKey:j,octaves:S,setOctaves:k,startingOctave:g,setStartingOctave:m}),a?Object(O.jsx)("div",{className:"keyboard",onTouchStart:E,onTouchMove:q,onTouchEnd:A,onTouchCancel:A}):Object(O.jsx)("div",{className:"keyboard",onTouchStart:K,children:Object(O.jsx)("div",{className:"start",children:"Press to Start"})}),Object(O.jsx)("div",{className:"margin"})]})};var m=function(){return Object(O.jsx)(g,{})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),s(e),i(e)}))};i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(m,{})}),document.getElementById("root")),x()}},[[80,1,2]]]);
//# sourceMappingURL=main.51be9294.chunk.js.map