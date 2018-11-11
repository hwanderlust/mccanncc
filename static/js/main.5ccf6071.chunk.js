(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){var t=e.msg;return r.a.createElement("div",{className:"error-msg"},t)}},23:function(e,t,a){e.exports=a(36)},28:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(19),o=a.n(c),i=a(38),l=(a(28),a(6)),u=a(7),s=a(9),d=a(8),f=a(10),h=a(39),m=a(34),v=(a(30),a(41)),g=a(40),p=a(11),b=a(5),E=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={text:""},a.handleChange=function(e){a.setState(Object(p.a)({},e.target.name,e.target.value))},a.clearSearch=function(){a.setState({text:""})},a.prepareSearchQuery=function(){return a.state.text.replace(" ","")},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state.text);var t=a.prepareSearchQuery(),n="https://www.reddit.com/r/".concat(t,"/top/.json");fetch(n,{method:"GET"}).then(function(e){return e.json()}).then(function(e){console.log("raw",e),a.context.handleSearch(e),a.clearSearch()}).catch(function(e){console.error(e),a.clearSearch()})},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",className:"search-bar",name:"text",placeholder:"search subreddits",value:this.state.text,onChange:this.handleChange}))}}]),t}(r.a.PureComponent);E.contextType=b.a;var S=E,O=Object(n.memo)(function(){return r.a.createElement(b.a,null,function(e){return r.a.createElement("nav",{className:"nav-bar"},r.a.createElement(v.a,{exact:!0,to:"/",className:"nav-item",activeClassName:"active"},r.a.createElement("i",{className:"fab fa-reddit-alien"}),"Home"),r.a.createElement(v.a,{to:"/favorites",className:"nav-item",activeClassName:"active"},r.a.createElement("i",{className:"fas fa-heart"}),"Favorites (",e.favorited,")"),r.a.createElement(S,null))})}),j=Object(g.a)(O),w=a(17),y=Object(n.lazy)(function(){return a.e(2).then(a.bind(null,18))}),k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={data:null},a.renderTiles=function(){return a.state.data.map(function(e){var t=localStorage.getItem("favs");if(t&&(t=JSON.parse(t)).filter(function(t){return t.id===e.id}).length)return r.a.createElement(y,{key:e.id,tile:e,fav:!0});return r.a.createElement(y,{key:e.id,tile:e,fav:!1})})},a}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(b.a,null,function(t){return t.data!==e.state.data&&e.setState({data:t.data},function(){return console.log("updated state")}),r.a.createElement("main",{className:"tile-area"},r.a.createElement(n.Suspense,{delayMs:1e3,fallback:r.a.createElement("div",null,"Loading...")},t.searchError?r.a.createElement(w.a,{msg:"Unfortunately such a subreddit can't be found"}):null,e.state.data?e.renderTiles():null))})}}]),t}(n.Component);k.contextType=b.a;var x=k,N=Object(n.memo)(function(){return r.a.createElement(b.a,null,function(e){return r.a.createElement("header",null,r.a.createElement("h1",null,e.search))})}),F=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(N,null),r.a.createElement(x,null))},C=Object(n.lazy)(function(){return a.e(1).then(a.bind(null,37))}),D=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null),r.a.createElement(h.a,null,r.a.createElement(m.a,{exact:!0,path:"/",component:F}),r.a.createElement(m.a,{exact:!0,path:"/favorites",render:function(){return r.a.createElement(n.Suspense,{delayMs:1e3,fallback:r.a.createElement("div",null,"Loading!")},r.a.createElement(C,null))}})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(i.a,{basename:"/mccanncc"},r.a.createElement(b.b,null,r.a.createElement(D,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},5:function(e,t,a){"use strict";var n=a(20),r=a(6),c=a(7),o=a(9),i=a(8),l=a(10),u=a(0),s=a.n(u),d=function(e){var t="https://www.reddit.com",a={};return a.id=e.id,a.kind=e.name.slice(0,2),a.title=e.title||"",a.author=e.author||e.name||"",a.picture="t3"===a.kind?e.url:e.banner_img||e.header_img||e.icon_img||"http://i.imgur.com/lqHeX.jpg",a.thumbnail=e.thumbnail||"",a.score=e.score||e.subscribers||0,a.description=e.description||"",a.creation=h(e.created_utc),a.url=e.permalink?t+e.permalink:t+e.url,a},f=function(e,t){return 1===Math.floor(e)?e+" ".concat(t):e+" ".concat(t,"s")},h=function(e){var t=((new Date).getTime()-new Date(1e3*e))/36e5;return t>24?(t=(((new Date).getTime()-new Date(1e3*e))/864e5).toFixed(0),f(t,"day")+" ago"):t<1?(t=(((new Date).getTime()-new Date(1e3*e))/6e4).toFixed(0),f(t,"minute")+" ago"):(t=t.toFixed(0),f(t,"hour")+" ago")};a.d(t,"a",function(){return v}),a.d(t,"b",function(){return g});var m=s.a.createContext(),v=m.Consumer,g=function(e){function t(){var e,a;Object(r.a)(this,t);for(var c=arguments.length,l=new Array(c),u=0;u<c;u++)l[u]=arguments[u];return(a=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={favorited:0,handleSearch:null,handleFavoriting:null,handleUnfavoriting:null,favorites:[],data:null,searchError:!1},a.handleInitialDataFetch=function(){fetch("https://www.reddit.com/r/analog/top/.json").then(function(e){return e.json()}).then(function(e){console.log(e),a.setState(function(t){return{data:e.data.children.map(function(e){return d(e.data)})}},function(){return console.log(a.state)})}).catch(function(e){return console.error(e)})},a.handlePersistingFavs=function(){var e=localStorage.getItem("favs"),t=JSON.parse(e);e&&a.setState({favorites:t,favorited:t.length},function(){return console.log("StoreProvider DidMount:",a.state)})},a.makeFunctionsAvailable=function(){a.setState({handleSearch:a.handleSearch,handleFavoriting:a.handleFavoriting,handleUnfavoriting:a.handleUnfavoriting})},a.handleFavoriting=function(e){a.setState(function(t){var a,r=localStorage.getItem("favs");return(a=r?JSON.parse(r):t.favorites).push(Object(n.a)({},e)),localStorage.setItem("favs",JSON.stringify(a)),{favorited:++t.favorited,favorites:a}},function(){return console.log(a.state)})},a.handleUnfavoriting=function(e){var t,n=localStorage.getItem("favs");a.setState(function(a){return t=n?JSON.parse(n).filter(function(t){return t.id!==e}):a.favorites.filter(function(t){return t.id!==e}),localStorage.setItem("favs",JSON.stringify(t)),{favorited:--a.favorited,favorites:t}},function(){return console.log(a.state)})},a.handleSearch=function(e){if(e.error||!e.data.children.length)return a.setState({searchError:!0}),void setTimeout(function(){a.setState({searchError:!1})},2500);console.log(e.data.children),a.setState(function(t){return{data:e.data.children.map(function(e){return d(e.data)})}},function(){return console.log(a.state)})},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log("ctx mounted"),this.handleInitialDataFetch(),this.handlePersistingFavs(),this.makeFunctionsAvailable()}},{key:"render",value:function(){return s.a.createElement(m.Provider,{value:this.state},this.props.children)}}]),t}(s.a.Component)}},[[23,4,3]]]);
//# sourceMappingURL=main.5ccf6071.chunk.js.map