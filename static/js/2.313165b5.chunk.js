(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{175:function(e,t,a){"use strict";a.r(t);var n=a(22),r=a(23),c=a(25),l=a(24),o=a(26),i=a(0),s=a.n(i),u=a(11),m=Object(i.memo)(function(e){var t=e.title,a=e.url;return s.a.createElement("a",{href:a,target:"_blank",rel:"noopener noreferrer",className:"pic-title"},s.a.createElement("h3",null,t))}),p=Object(i.memo)(function(e){var t=e.tile;return s.a.createElement("figcaption",{className:"pic-details"},s.a.createElement("span",null,s.a.createElement("i",{className:"fas fa-user"})," ".concat(t.author)),s.a.createElement("span",null,s.a.createElement("i",{className:"far fa-clock"})," ".concat(t.creation)),s.a.createElement("span",null,s.a.createElement("i",{className:"fas fa-bolt"})," ".concat(t.score)))}),f=Object(i.memo)(function(e){var t=e.picture,a=e.author,n=e.title,r=e.handleOnload,c=e.handleOnError,l=e.description;return s.a.createElement("figure",{className:"pic-container"},l?s.a.createElement("p",{className:"tile-desc"},l):s.a.createElement("img",{className:"tile-pic",src:t,onLoad:r,alt:"".concat(n," by ").concat(a),onError:c}))}),d=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).toggleFavClass=function(){var e=a.favIcon.current.className;a.state.fav?a.favIcon.current.className=e.slice(0,e.length-4):a.favIcon.current.className+=" red"},a.toggleFav=function(){var e=a.context,t=e.handleFavoriting,n=e.handleUnfavoriting,r=a.props.tile;a.toggleFavClass(),a.setState(function(e){return e.fav?n(r.id):t(r),{fav:!e.fav}},function(){console.log(a.state)})},a.handleKeyPress=function(e){"Enter"===e.key&&a.toggleFav()},a.handleOnload=function(){a.props.tile.picture&&a.setState({loaded:!0})},a.handleOnError=function(e){if(a.props.tile.thumbnail)e.target.src=a.props.tile.thumbnail;else{var t=document.createElement("img");t.src="http://i.imgur.com/lqHeX.jpg";var n=e.target.parentElement;e.target.remove(),n.appendChild(t)}},a.handleTouch=function(e){var t;e.persist(),a.setState(function(a){return t=a,{touched:a.touched<2?++a.touched:1,timeStamp:e.timeStamp}},function(){2===a.state.touched&&a.state.timeStamp-t.timeStamp<=1e3&&a.toggleFav()})},a.passPictureDown=function(){return a.state.loaded?a.props.tile.picture:a.props.tile.thumbnail},a.state={fav:!1,loaded:!1,touched:0,timeStamp:0},a.favIcon=s.a.createRef(),a}return Object(o.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.props.fav&&(this.favIcon.current.className+=" red",this.setState({fav:!0}))}},{key:"componentWillUnmount",value:function(){console.log("UNMOUNT")}},{key:"render",value:function(){var e=this.props,t=e.tile,a=e.style;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"tile-wrapper",onTouchStartCapture:this.handleTouch},s.a.createElement("div",{className:"tile-container",style:a,onDoubleClick:this.toggleFav,tabIndex:"0"},s.a.createElement(f,{picture:this.passPictureDown(),title:t.title,author:t.author,description:t.description,handleOnload:this.handleOnload,handleOnError:this.handleOnError}),s.a.createElement(m,{title:t.title,url:t.url}),s.a.createElement(p,{tile:t})),s.a.createElement("i",{ref:this.favIcon,className:"fab fa-gratipay fav-icon",onClick:this.toggleFav,onKeyPress:this.handleKeyPress,tabIndex:"0"})))}}]),t}(i.PureComponent);d.contextType=u.a;t.default=d}}]);
//# sourceMappingURL=2.313165b5.chunk.js.map