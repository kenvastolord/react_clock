(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),o=n.n(c),a=n(2),i=n(3),s=n(5),r=n(4),l=n(1),m=n.n(l),u=(n(12),n(0)),d=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={time:new Date},e.timerId=0,e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.timerId=window.setInterval((function(){var t=new Date;console.info(t.toUTCString().slice(-12,-4)),e.setState({time:t})}),1e3)}},{key:"componentDidUpdate",value:function(e){this.props.clockName!==e.clockName&&console.debug("Renamed from ".concat(e.clockName," to ").concat(this.props.clockName))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"Clock",children:[Object(u.jsx)("strong",{className:"Clock__name",children:this.props.clockName})," time is ",Object(u.jsx)("span",{className:"Clock__time",children:this.state.time.toUTCString().slice(-12,-4)})]})}}]),n}(m.a.Component);function h(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var k=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={hasClock:!0,clockName:"Clock-0"},e.timerId=0,e.hideClock=function(t){t.preventDefault(),e.setState({hasClock:!1})},e.showClock=function(){e.setState({hasClock:!0})},e.setRandomName=function(){e.setState({clockName:h()})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("contextmenu",this.hideClock),this.timerId=window.setInterval(this.setRandomName,3300)}},{key:"componentDidUpdate",value:function(){document.addEventListener("click",this.showClock)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId),document.removeEventListener("contextmenu",this.hideClock),document.removeEventListener("click",this.showClock)}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"React clock"}),this.state.hasClock&&Object(u.jsx)(d,{clockName:this.state.clockName})]})}}]),n}(m.a.Component);o.a.render(Object(u.jsx)(k,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.856a1ad0.chunk.js.map