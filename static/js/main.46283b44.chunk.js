(this["webpackJsonpfirebase-mini-project-extended-starter-code"]=this["webpackJsonpfirebase-mini-project-extended-starter-code"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var r=n(2),s=n.n(r),c=n(4),a=n.n(c),o=(n(13),n(5)),i=n(7),l=n(8),u=n(6),b=n(0),j=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).counterStarts=function(){console.log("this");var e=t.state.cstate;setInterval((function(){t.setState((function(t){return{val:t.val+1}}))}),1e3),"Start Counter"===e?t.setState({cstate:"Stop Counter"}):t.setState({cstate:"Start Counter"})},t.state={val:0,cstate:"Start Counter"},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"counter-shell",style:d.counter_shell,children:[Object(b.jsxs)("h1",{style:d.style,children:[Object(b.jsx)("br",{}),"Counter:",this.state.val>10?10:this.state.val]}),Object(b.jsx)("br",{}),Object(b.jsxs)("h1",{style:d.style,children:[Object(b.jsx)("br",{}),"Counter-2:",this.state.val]}),Object(b.jsx)("button",{style:d.button,id:"button-counter",className:"button-counter",onClick:function(){return t.counterStarts()},children:this.state.cstate})]})})}}]),n}(s.a.Component),d={counter_shell:{height:"400px",width:"300px",border:"4px solid teal",margin:"20px auto"},style:{color:"teal"},button:{color:"white",backgroundColor:"teal",padding:"10px",margin:"40px",fontWeight:"900",cursor:"pointer"}};function h(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(j,{name:"randi"})})}var x=document.getElementById("root");a.a.render(Object(b.jsx)(r.StrictMode,{children:Object(b.jsx)(h,{})}),x)}},[[15,1,2]]]);
//# sourceMappingURL=main.46283b44.chunk.js.map