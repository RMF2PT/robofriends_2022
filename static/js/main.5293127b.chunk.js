(this.webpackJsonprobofriends_2022=this.webpackJsonprobofriends_2022||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),s=n(7),c=n.n(s),a=(n(13),n(2)),i=n(3),h=n(5),l=n(4),u=n(1),d=function(e){e.robots;throw new Error("NOOOO")},b=n(8),j=function(e){var t=e.searchChange;return Object(u.jsxs)("div",{className:"flex items-center rounded-full border-grey-light border m-4",children:[Object(u.jsx)("button",{children:Object(u.jsx)("span",{className:"flex items-center text-grey p-2",children:Object(u.jsx)(b.a,{className:"h-5 w-5 text-gray-900"})})}),Object(u.jsx)("input",{className:"w-auto rounded mr-4 bg-transparent text-gray-900 placeholder-gray-300 focus:outline-none",type:"text",placeholder:"Search...",onChange:t})]})},f=function(e){return Object(u.jsx)("div",{className:"overflow-y-auto border-gray-900 border-t-2 flex flex-grow place-items-start justify-center w-full",children:e.children})},g=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(u.jsx)("h1",{children:"Oooops That is not good!"}):this.props.children}}]),n}(r.Component),x=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({robots:t})}))}},{key:"render",value:function(){var e=this,t=this.state.robots.filter((function(t){return t.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return 0===this.state.robots.length?Object(u.jsx)("h1",{children:"Loading"}):Object(u.jsxs)("div",{className:"bg-gradient-to-r from-indigo-400 to-green-800 w-full h-screen flex flex-col items-center",children:[Object(u.jsx)("h1",{className:"uppercase text-4xl p-2 text-green-400 mt-4",children:"Robofriends"}),Object(u.jsx)(j,{searchChange:this.onSearchChange}),Object(u.jsx)(f,{children:Object(u.jsx)(g,{children:Object(u.jsx)(d,{robots:t})})})]})}}]),n}(r.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),r(e),o(e),s(e),c(e)}))};c.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(x,{})}),document.getElementById("root")),O()}},[[15,1,2]]]);
//# sourceMappingURL=main.5293127b.chunk.js.map