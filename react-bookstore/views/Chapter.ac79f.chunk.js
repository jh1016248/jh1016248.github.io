webpackJsonp([3],{85:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),u=r(1),c=o(u),l=r(5),p=o(l);r(132);var f=function(e){function t(){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this))}return i(t,e),s(t,[{key:"componentWillMount",value:function(){}},{key:"chooseChapter",value:function(e){this.props.chooseChapter(e)}},{key:"render",value:function(){var e=this,t=this.props.list.map(function(t,r){return c.default.createElement("li",{key:r,onClick:e.chooseChapter.bind(e,r)},r+1+". "+t.title)});return c.default.createElement("div",{className:"chapter-list"},c.default.createElement("ul",null,t))}}]),t}(u.Component);f.propTypes={list:p.default.array,chooseChapter:p.default.func},t.default=f},86:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),u=r(1),c=o(u),l=(r(15),r(5)),p=o(l),f=r(31),h=r(34),d=r(85),b=o(d),y=function(e){function t(e){return n(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return i(t,e),s(t,[{key:"componentWillMount",value:function(){var e=this;this.props.bookId!=this.props._bookId&&(0,h.getBookSources)(this.props.bookId).then(function(t){if(1==t.code){var r=t.data[0]._id;e.props.setBookId(r),e.getBookChapters(r)}})}},{key:"componentDidUpdate",value:function(e){}},{key:"getBookChapters",value:function(e){var t=this;(0,h.getBookChapters)(e).then(function(e){1==e.code&&t.props.setBookChapters(e.data.chapters)})}},{key:"render",value:function(){var e=JSON.parse(JSON.stringify(this.props.chapterList)),t=this.props.reverse?e.reverse():e;return c.default.createElement(b.default,{list:t,chooseChapter:this.props.chooseChapter})}}]),t}(u.Component);y.propTypes={bookId:p.default.string,_bookId:p.default.string,chapterList:p.default.array,chooseChapter:p.default.func,reverse:p.default.bool,setBookId:p.default.func,setBookChapters:p.default.func};var v=function(e){return{_bookId:e.Book._bookId,chapterList:e.Book.chapterList}},m=function(e){return{setBookChapters:function(t){e({type:"SET_BOOK_CHAPTERS",chapterList:t})},setBookId:function(t){e({type:"SET_BOOK_ID",bookId:t})}}};t.default=(0,f.connect)(v,m)(y)},101:function(e,t,r){t=e.exports=r(18)(),t.push([e.id,".chapter-list ul{padding-left:.2rem}.chapter-list ul li{border-bottom:.015rem solid #f5f5f5;height:.4rem;line-height:.4rem;padding:.2rem 0;color:#666}",""])},132:function(e,t,r){var o=r(101);"string"==typeof o&&(o=[[e.id,o,""]]);r(20)(o,{});o.locals&&(e.exports=o.locals)},248:function(e,t,r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),u=r(1),c=o(u),l=r(15),p=r(22),f=o(p),h=r(31),d=r(5),b=o(d),y=r(59),v=o(y),m=(r(34),r(86)),_=o(m);r(585);var k=function(e){function t(e){n(this,t);var r=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={reverse:!1},r}return i(t,e),s(t,[{key:"componentWillMount",value:function(){}},{key:"reverseList",value:function(){this.setState({reverse:!this.state.reverse})}},{key:"chooseChapter",value:function(e){l.hashHistory.push("/book/"+this.props.params.id+"/"+(e+1))}},{key:"render",value:function(){return c.default.createElement("div",{className:"page pt90"},c.default.createElement(v.default,{title:this.state.title||"章节列表"}),c.default.createElement("div",{className:"chapter-header"},c.default.createElement("div",null,c.default.createElement("strong",null,"目录"),c.default.createElement("span",null,"共",this.props.chapterList.length,"章")),c.default.createElement("span",{onClick:this.reverseList.bind(this)},this.state.reverse?"正序":"倒序")),this.props.params.id?c.default.createElement(_.default,{bookId:this.props.params.id,reverse:this.state.reverse,chooseChapter:this.chooseChapter.bind(this)}):"")}}]),t}(u.Component);k.propTypes={chapterList:b.default.array},t.default=(0,f.default)((0,h.connect)(function(e){return{chapterList:e.Book.chapterList}})(k))},323:function(e,t,r){t=e.exports=r(18)(),t.push([e.id,".chapter-header{display:flex;justify-content:space-between;padding:.3rem;border-bottom:.015rem solid #e8e8e8;font-size:.26rem}.chapter-header strong{margin-right:.5em;font-size:.28rem}.chapter-header div span{color:#666}",""])},585:function(e,t,r){var o=r(323);"string"==typeof o&&(o=[[e.id,o,""]]);r(20)(o,{});o.locals&&(e.exports=o.locals)}});