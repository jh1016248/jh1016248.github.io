webpackJsonp([1],{68:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=[{type:"hot",name:"热门"},{type:"new",name:"新书"},{type:"reputation",name:"好评"},{type:"over",name:"完结"}],r="http://statics.zhuishushenqi.com/",o=function(e){return"http"+decodeURIComponent(e).split("http")[1]},i=function(e){return e>=1e4?(e/1e4).toFixed(2)+"万":e};t.typeList=n,t.imgDomain=r,t.imgLinkFomat=o,t.addWan=i},243:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),u=r(s),c=n(5),f=r(c);n(578);var p=n(68),d=n(15),m=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return a(t,e),l(t,[{key:"componentWillMount",value:function(){}},{key:"shouldComponentUpdate",value:function(e){return!(JSON.stringify(e.bookList)==JSON.stringify(this.props.bookList))}},{key:"toBookDetail",value:function(e){d.hashHistory.push("/book/"+e._id)}},{key:"render",value:function(){var e=this,t=this.props.bookList.map(function(t,n){return u.default.createElement("li",{key:n,onClick:e.toBookDetail.bind(e,t)},u.default.createElement("img",{src:(0,p.imgLinkFomat)(t.cover)}),u.default.createElement("div",{className:"info"},u.default.createElement("h3",null,t.title),u.default.createElement("p",{className:"author spacing-p"},u.default.createElement("span",null,t.author),u.default.createElement("span",null,t.majorCate)),u.default.createElement("p",{className:"intro"},t.shortIntro),u.default.createElement("p",{className:"spacing-p"},u.default.createElement("span",null,u.default.createElement("i",{className:"red"},(0,p.addWan)(t.latelyFollower)),"人气"),u.default.createElement("span",null,u.default.createElement("i",{className:"red"},t.retentionRatio,"%"),"读者留存"))))});return u.default.createElement("div",{className:"book-list"},u.default.createElement("ul",null,t))}}]),t}(s.Component);m.propTypes={bookList:f.default.array},t.default=m},245:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(1),u=r(s),c=n(5),f=r(c);n(580);var p=function(e){function t(){return o(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return a(t,e),l(t,[{key:"componentWillMount",value:function(){}}]),l(t,[{key:"shouldComponentUpdate",value:function(e){return this.props.list==[]||this.indexList==[]||JSON.stringify(e)==JSON.stringify(this.props)}},{key:"handleClick",value:function(e,t){this.props.changeIndex(e,t)}},{key:"render",value:function(){var e=this,t=u.default.createElement("div",{className:"details"},this.props.list.map(function(t,n){return u.default.createElement("div",{className:"filter-items",key:n},u.default.createElement("div",{className:"inner"},u.default.createElement("ul",null,t.map(function(t,r){return u.default.createElement("li",{key:r,className:e.props.indexList[n]==r?"active":"",onClick:e.handleClick.bind(e,n,r)},t.name?t.name:t)}))))})),n=this.props.list.map(function(t,n){return t.name?e.props.list[n][e.props.indexList[n]]:e.props.list[n][e.props.indexList[n]]}),r=n.map(function(e,t){return(0==t?"":" - ")+(e&&e.name?e.name:e)}),o=u.default.createElement("div",{className:"minus"},r,u.default.createElement("span",{className:"iconfont icon-arrow-top"}));return u.default.createElement("div",{className:"filter-wrap"},this.props.showMinus?o:t)}}]),t}(s.Component);p.propTypes={showMinus:f.default.bool,list:f.default.array,indexList:f.default.array,changeIndex:f.default.func},t.default=p},255:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),c=r(u),f=(n(15),n(22)),p=r(f),d=n(34),m=n(59),h=r(m),y=n(245),b=r(y),g=n(68),v=n(243),w=r(v),k=n(216),E=function(e){function t(e){i(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={pageIndex:1,showMinus:!1,subList:[],indexList:[],bookList:[],items:[].concat(o(Array(20).keys()))},n.getCategorys.bind(n),n}return l(t,e),s(t,[{key:"componentWillMount",value:function(){var e=this.props,t=e.location.query.gender,n=e.params.keyword;this.getSubCategory(n,t)}},{key:"componentDidMount",value:function(){var e=this,t=this.refs.page;t=document.querySelector(".react-weui-infiniteloader");var n=parseInt(document.documentElement.style.fontSize);t.onscroll=function(){var r=t.scrollTop,o=r>=.9*n;e.setState({showMinus:o})}}},{key:"getSubCategory",value:function(e,t){var n=this;(0,d.getSubCategories)().then(function(r){if(1==r.code){var o=r.data[t],i=o.filter(function(t){return t.major==e});i[0].mins.unshift("全部");var a=[0,0];n.setState({subList:i[0].mins,indexList:a},function(){n.getCategorys()})}})}},{key:"getCategorys",value:function(){var e=this,t=this.props,n=t.location.query.gender,r=t.params.keyword,o=this.state,i=o.indexList,a={gender:n,type:g.typeList[i[0]].type,major:r,start:o.pageIndex,minor:0==i[1]?"":o.subList[i[1]],limit:20};(0,d.getCategoryInfo)(a).then(function(t){console.log(t.data),e.setState({bookList:t.data.books})})}},{key:"changeIndex",value:function(e,t){var n=this,r=this.state.indexList;r[e]!=t&&(r[e]=t,this.setState({indexList:r,pageIndex:0},function(){n.getCategorys()}))}},{key:"render",value:function(){var e=this,t=[g.typeList,this.state.subList];return c.default.createElement("div",{className:"page",ref:"page",style:{paddingTop:this.state.showMinus?"1.8rem":"2.7rem"}},c.default.createElement(h.default,{title:this.props.params.keyword}),c.default.createElement(b.default,{showMinus:this.state.showMinus,list:t,indexList:this.state.indexList,changeIndex:this.changeIndex.bind(this)}),c.default.createElement("div",{id:"scroll-wrap"},c.default.createElement(k.InfiniteLoader,{onLoadMore:function(t,n){setTimeout(function(){e.state.items.length>22?n():e.setState({items:e.state.items.concat([e.state.items.length])},function(){return t()})},1e3)}},c.default.createElement(w.default,{bookList:this.state.bookList}))))}}]),t}(u.Component);t.default=(0,p.default)(E)},316:function(e,t,n){t=e.exports=n(18)(),t.push([e.id,".book-list ul li{padding:.2rem;background:#f5f2ed;overflow:hidden}.book-list ul li img{float:left;height:1.7rem;margin-right:.2rem}.book-list ul li .info h3{font-weight:400;font-size:.3rem;line-height:.5rem;margin-bottom:.1rem}.book-list ul li .info p{line-height:1.2;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-bottom:.15rem;color:#444}.book-list ul li .info p.author,.book-list ul li .info p.intro{color:#999}.book-list ul li .info p i{font-style:normal;color:red;margin-right:.04rem}",""])},318:function(e,t,n){t=e.exports=n(18)(),t.push([e.id,".filter-wrap{position:fixed;top:.9rem;background:#fff;width:100%;transition:all .3s;box-shadow:0 .015rem .02rem rgba(0,0,0,.1)}.filter-wrap .filter-items{width:100%;overflow-x:hidden;height:.9rem}.filter-wrap .filter-items .inner{overflow:auto;width:100%}.filter-wrap .filter-items .inner ul{width:auto;height:100%;white-space:nowrap;text-overflow:ellipsis;font-size:0}.filter-wrap .filter-items .inner ul li{display:inline-block;line-height:.9rem;padding:0 .3rem;font-size:.24rem}.filter-wrap .filter-items .inner ul li.active{color:#b93321}.filter-wrap .minus{height:.9rem;line-height:.9rem;text-align:center}.filter-wrap .minus .iconfont{margin-left:.1rem}",""])},578:function(e,t,n){var r=n(316);"string"==typeof r&&(r=[[e.id,r,""]]);n(20)(r,{});r.locals&&(e.exports=r.locals)},580:function(e,t,n){var r=n(318);"string"==typeof r&&(r=[[e.id,r,""]]);n(20)(r,{});r.locals&&(e.exports=r.locals)}});