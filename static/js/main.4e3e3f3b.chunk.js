(this["webpackJsonpfinger-synth-web"]=this["webpackJsonpfinger-synth-web"]||[]).push([[0],{63:function(e,t,n){},64:function(e,t,n){},66:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(8),o=n.n(c),i=n(27),a=n.n(i),s=(n(63),n(64),n(3)),l=n(21),r=(n(66),n(16)),j=new r.b(15e3,"lowpass").toDestination(),u=(new r.a).connect(j),v=(new r.c).connect(u),d={play:function(e,t){v.triggerAttack(),j.frequency.value=150*t,v.frequency.value=e},changeFreq:function(e){v.frequency.value=e},changeMod:function(e){j.frequency.value=150*e},stop:function(){v.triggerRelease()}},h=n(2),O=function(e){return Object(h.jsx)("div",{className:"margin",children:Object(h.jsxs)("div",{className:"controls",children:[Object(h.jsxs)("div",{className:"note-selector",children:["Key:",Object(h.jsxs)("select",{onInput:function(t){return e.setKey(t.target.value)},value:e.selectedKey,children:[Object(h.jsx)("option",{value:32.7,children:"C"}),Object(h.jsx)("option",{value:34.65,children:"C#"}),Object(h.jsx)("option",{value:36.71,children:"D"}),Object(h.jsx)("option",{value:38.89,children:"D#"}),Object(h.jsx)("option",{value:41.2,children:"E"}),Object(h.jsx)("option",{value:43.65,children:"F"}),Object(h.jsx)("option",{value:46.25,children:"F#"}),Object(h.jsx)("option",{value:49,children:"G"}),Object(h.jsx)("option",{value:51.91,children:"G#"}),Object(h.jsx)("option",{value:55,children:"A"}),Object(h.jsx)("option",{value:58.27,children:"A#"}),Object(h.jsx)("option",{value:61.74,children:"B"})]})]}),Object(h.jsxs)("div",{className:"note-selector",children:["Starting Octave:",Object(h.jsxs)("select",{onInput:function(t){return e.setStartingOctave(t.target.value)},value:e.startingOctave,children:[Object(h.jsx)("option",{value:1,children:"1"}),Object(h.jsx)("option",{value:2,children:"2"}),Object(h.jsx)("option",{value:3,children:"3"}),Object(h.jsx)("option",{value:4,children:"4"}),Object(h.jsx)("option",{value:5,children:"5"}),Object(h.jsx)("option",{value:6,children:"6"}),Object(h.jsx)("option",{value:7,children:"7"})]})]}),Object(h.jsxs)("div",{className:"note-selector",children:["Octaves:",Object(h.jsxs)("select",{onInput:function(t){return e.setOctaves(t.target.value)},value:e.octaves,children:[Object(h.jsx)("option",{value:1,children:"1"}),Object(h.jsx)("option",{value:2,children:"2"}),Object(h.jsx)("option",{value:3,children:"3"}),Object(h.jsx)("option",{value:4,children:"4"}),Object(h.jsx)("option",{value:5,children:"5"}),Object(h.jsx)("option",{value:6,children:"6"}),Object(h.jsx)("option",{value:7,children:"7"}),Object(h.jsx)("option",{value:8,children:"8"}),Object(h.jsx)("option",{value:9,children:"9"}),Object(h.jsx)("option",{value:10,children:"10"}),Object(h.jsx)("option",{value:11,children:"11"}),Object(h.jsx)("option",{value:12,children:"12"})]})]})]})})},b=function(e){var t=Object(c.useState)(32.7),n=Object(s.a)(t,2),o=n[0],i=n[1],a=Object(c.useState)(3),r=Object(s.a)(a,2),j=r[0],u=r[1],v=Object(c.useState)(3),b=Object(s.a)(v,2),p=b[0],x=b[1],g=Object(l.a)().domain([800,30]).range(function(){var e=o*j;return[e,e*p*2]}()),f=Object(l.a)().domain([1,100]).range([1,365]),y=function(e){return g(parseInt(e))},m=function(e){return f.invert(e)};return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(O,{selectedKey:o,setKey:i,octaves:p,setOctaves:x,startingOctave:j,setStartingOctave:u}),Object(h.jsx)("div",{className:"keyboard",onTouchStart:function(e){var t=m(e.changedTouches[0].clientX),n=y(e.changedTouches[0].clientY);d.play(n,t)},onTouchMove:function(e){var t=y(e.changedTouches[0].clientY),n=m(e.changedTouches[0].clientX);d.changeMod(n),d.changeFreq(t)},onTouchEnd:d.stop,onTouchCancel:d.stop}),Object(h.jsx)("div",{className:"margin"})]})};var p=function(){return Object(h.jsx)(b,{})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,77)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),i(e),a(e)}))};a.a.render(Object(h.jsx)(o.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root")),x()}},[[76,1,2]]]);
//# sourceMappingURL=main.4e3e3f3b.chunk.js.map