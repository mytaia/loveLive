webpackJsonp([8,6],[function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}var r=n(216),i=(s(r),n(202)),a=s(i),o=n(215),u=(s(o),n(201)),l=s(u);n(214);var c=n(52),d=s(c),f=n(256),p=s(f),v=n(133),_=s(v),h=n(137),m=s(h);n(240);var g=n(30),w=s(g);d.default.component(l.default.name,l.default),d.default.component(a.default.name,a.default),d.default.component("alert",w.default),new d.default({el:"#app",router:_.default,store:m.default,components:{App:p.default},template:"<App/>"})},,,,,,,function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.test=t.getRelationList=t.addFriend=t.clearReadMsg=t.getOtherInfo=t.getUserInfo=t.fixInforReq=t.signout=t.login=t.signup=t.dongTaiReply=t.postNewDongTai=t.getSquareActive=void 0;var r=n(92),i=s(r),a=n(58);i.default.defaults.withCredentials=!0;var o=i.default.create({baseURL:a.baseUrl,timeout:8e3});t.getSquareActive=function(e){return o.post("square/getDongTais",e)},t.postNewDongTai=function(e){return o.post("postNewDongTai",e)},t.dongTaiReply=function(e){return o.post("dongTaiReply",e)},t.signup=function(e){return o.post("signup",e)},t.login=function(e){return o.post("login",e)},t.signout=function(){return o.get("signout")},t.fixInforReq=function(e){return o.post("fixInfoReq",e)},t.getUserInfo=function(){return o.get("getUserInfo")},t.getOtherInfo=function(e,t){return o.get("getOtherInfo/?own_id="+e+"&other_id="+t)},t.clearReadMsg=function(e){return o.get("clearReadMsg/?other_id="+e)},t.addFriend=function(e,t){return o.get("addFriend/?own_id="+e+"&other_id="+t)},t.getRelationList=function(){return o.get("getRelationList")},t.test=function(e){return o.post("test",e)}},,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){n(238);var s=n(1)(n(111),n(296),"data-v-f9a0dc7e",null);e.exports=s.exports},,,,,,,,,,,,,,,,,,,,function(e,t,n){n(223);var s=n(1)(n(113),n(281),"data-v-2e62c710",null);e.exports=s.exports},function(e,t,n){n(218);var s=n(1)(n(116),n(276),null,null);e.exports=s.exports},,,,,,,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="http://179357c9y4.iok.la:27823/";t.baseUrl=n},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){n(231);var s=n(1)(n(115),n(289),"data-v-76e380b8",null);e.exports=s.exports},,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(11),i=s(r),a=n(7),o=n(10),u=n(247),l=s(u),c=n(58);t.default={created:function(){var e=this,t=void 0;t=function(t){e.ADD_NEW_MSG(t)},(0,a.getUserInfo)().then(function(n){var s=n.data;s.type?e.$router.push({path:"/login"}):(e.SET_USER_INFO(s.data),e.ADD_NEW_MSGS(s.msgArr),e.SET_SOCKET(l.default.connect(c.baseUrl)),e.INIT_SOCKET(),e.$store.state.socket.on("msgFromOne",t))})},methods:(0,i.default)({},(0,o.mapMutations)(["SET_USER_INFO","SET_SOCKET","INIT_SOCKET","ADD_NEW_MSG","ADD_NEW_MSGS"]))}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{message:{type:String,default:"something happen"}},methods:{closeMd:function(){this.$emit("closeMd")}}}},,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}}}},,function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(149),i=s(r);t.default={props:{probeType:{type:Number,default:1},click:{type:Boolean,default:!0},scrollX:{type:Boolean,default:!1},listenScroll:{type:Boolean,default:!1},data:{default:""},pullup:{type:Boolean,default:!1},pulldown:{type:Boolean,default:!1},beforeScroll:{type:Boolean,default:!1},refreshDelay:{type:Number,default:20}},mounted:function(){var e=this;setTimeout(function(){e._initScroll()},20)},methods:{_initScroll:function(){var e=this;if(this.$refs.wrapper){if(this.scroll=new i.default(this.$refs.wrapper,{probeType:this.probeType,click:this.click,scrollX:this.scrollX}),this.listenScroll){var t=this;this.scroll.on("scroll",function(e){t.$emit("scroll",e)})}this.pullup&&this.scroll.on("scrollEnd",function(){e.scroll.y<=e.scroll.maxScrollY+50&&e.$emit("scrollToEnd")}),this.pulldown&&this.scroll.on("touchend",function(t){t.y>50&&e.$emit("pulldown")}),this.beforeScroll&&this.scroll.on("beforeScrollStart",function(){e.$emit("beforeScroll")})}},disable:function(){this.scroll&&this.scroll.disable()},enable:function(){this.scroll&&this.scroll.enable()},refresh:function(){this.scroll&&this.scroll.refresh()},scrollTo:function(){this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},scrollToElement:function(){this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)}},watch:{data:function(){var e=this;setTimeout(function(){e.refresh()},this.refreshDelay)}}}},function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(11),i=s(r),a=n(261),o=s(a),u=n(10);t.default={components:{sliderMiddleware:o.default},data:function(){return{sliderIfShow:!1}},computed:(0,i.default)({},(0,u.mapGetters)(["getNewMsgsLen","getNewReplysLen"])),methods:{showSlider:function(){this.sliderIfShow=!0},handHideSlider:function(){this.sliderIfShow=!1}}}},function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(11),i=s(r),a=n(7),o=n(140),u=n(10);t.default={data:function(){return{isShowModel:!1,signOutMessage:"登出失败"}},computed:(0,i.default)({},(0,u.mapGetters)(["getNewMsgsLen","getNewReplysLen"]),{userInfo:function(){return this.$store.state.userInfo}}),methods:(0,i.default)({},(0,u.mapMutations)(["SIGN_OUT"]),{toFixInfo:function(){this.$router.push("./fixInfo")},handSignout:function(){var e=this;(0,a.signout)().then(function(t){var n=t.data.message;"登出成功"===n&&(e.signOutMessage=n,e.isShowModel=!0,(0,o.setCookie)("connect.sid","",-1),e.$store.commit("SIGN_OUT"),e.$router.push("./login"))})},closeMd:function(){this.isShowModel=!1}})}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={methods:{hideSlider:function(){this.$emit("tempHandHideSlider")}}}},function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(259),i=s(r),a=n(260),o=s(a);t.default={data:function(){return{}},components:{sliderList:i.default,sliderMask:o.default},props:["sliderIfShow"],methods:{tempHandHideSlider:function(){this.$emit("handHideSlider")}}}},,,,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(34),i=s(r),a=n(32),o=s(a),u=n(33),l=s(u),c=n(11),d=s(c),f=n(88),p=s(f),v=n(7),_=n(10);t.default={data:function(){return{squareActive:{},replyDongTaiId:"",textarea:"",mdState:!1,message:"",replyWho:"",replyWhoName:""}},computed:(0,d.default)({},(0,_.mapGetters)(["getOwnId"])),components:{myScroll:p.default},created:function(){var e=this,t={getType:"INIT",getNum:8};(0,v.getSquareActive)(t).then(function(t){t.data.data&&(e.squareActive=t.data.data)})},methods:{refreshDongTai:function(){var e=this,t=this.squareActive[0].meta.updateAt,n={getType:"REFRESH",getNum:8,counterpart_time:t};(0,v.getSquareActive)(n).then(function(t){t.data.data&&(e.squareActive=[].concat((0,l.default)(t.data.data),(0,l.default)(e.squareActive)))})},getOldDongTai:function(){var e=this,t=this.squareActive[this.squareActive.length-1].meta.updateAt,n={getType:"GET_OLD",getNum:8,counterpart_time:t};(0,v.getSquareActive)(n).then(function(t){t.data.data&&(e.squareActive=[].concat((0,l.default)(e.squareActive),(0,l.default)(t.data.data)))})},goUserDetailInfo:function(e){this.$router.push("/userDetailInfo/"+e)},openReply:function(e,t,n){e!==this.$store.state.userInfo._id&&(this.replyWho=e,this.replyWhoName=n,this.openComment(t,!0))},openComment:function(e,t){t||(this.replyWho="",this.replyWhoName=""),e===this.replyDongTaiId?this.replyDongTaiId="":this.replyDongTaiId=e},sendDongTaiReply:function(e,t,n){var s=this;return(0,o.default)(i.default.mark(function r(){var a,o,u;return i.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if(n.isTrusted!==!0){r.next=10;break}return a={data:{dongTai_id:e,content:s.textarea,to:t,from:s.$store.state.userInfo._id}},r.next=4,(0,v.dongTaiReply)(a);case 4:o=r.sent,u=s.squareActive.find(function(t){return t._id==e}),u.reply.push({_id:e,content:s.textarea,to:{_id:s.replyWho?s.replyWho:u.whoPublish._id,userName:s.replyWhoName?s.replyWhoName:u.whoPublish.userName},from:{_id:s.$store.state.userInfo._id,userName:s.$store.state.userInfo.userName}}),s.replyDongTaiId="",s.message=o.data.msg,s.mdState=!0;case 10:case"end":return r.stop()}},r,s)}))()},closeMd:function(){this.mdState=!1}}}},function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(50),i=s(r),a=n(51),o=s(a);t.default={components:{navComponent:i.default,slider:o.default}}},,,,,,,function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(52),i=s(r),a=n(298),o=s(a),u=n(134),l=s(u);i.default.use(o.default);var c=new o.default({mode:"history",routes:l.default});t.default=c},function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(268),i=s(r),a=n(267),o=s(a),u=n(265),l=s(u),c=n(266),d=s(c),f=function(e){return n.e(2,function(){return e(n(270))})},p=function(e){return n.e(0,function(){return e(n(264))})},v=function(e){return n.e(0,function(){return e(n(262))})},_=function(e){return n.e(0,function(){return e(n(274))})},h=function(e){return n.e(3,function(){return e(n(272))})},m=function(e){return n.e(1,function(){return e(n(269))})},g=function(e){return n.e(1,function(){return e(n(273))})},w=function(e){return n.e(5,function(){return e(n(263))})},M=function(e){return n.e(4,function(){return e(n(271))})},y=[{path:"",component:i.default,children:[{path:"",component:o.default},{path:"/actives",component:l.default},{path:"/random",component:d.default}]},{path:"/fixInfo",component:w},{path:"/friends",component:p},{path:"/search",component:h},{name:"login",path:"/login",component:m},{path:"/signup",component:g},{path:"/photoAlbum",component:M},{path:"/chat/:user_id",component:v},{path:"/userDetailInfo/:user_id",component:_},{path:"/newDongTai",component:f}];t.default=y},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={getSocket:function(e){return e.socket},getChatMan:function(e){return e.chatMan},getOwnId:function(e){return e.userInfo._id},getOwnAvatarUrl:function(e){return e.userInfo.avatarUrl},getOwnUserName:function(e){return e.userInfo.userName},getTheOneMsg:function(e){return function(t){return e.newMsgs.filter(function(e,n,s){return e.from===t})}},getNewMsgsLen:function(e){return e.newMsgs.length},getNewMsgs:function(e){return e.newMsgs},getNewReplysLen:function(e){try{return e.userInfo.newReply.length}catch(e){return 0}}}},function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(52),i=s(r),a=n(10),o=s(a),u=n(138),l=s(u),c=n(135),d=s(c),f=n(136),p=s(f);i.default.use(o.default);var v={userInfo:{},isLogin:!1,socket:{},chatMan:{},newMsgs:[]};t.default=new o.default.Store({state:v,actions:d.default,mutations:l.default,getters:p.default})},function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r,i=n(146),a=s(i),o=n(33),u=s(o),l=n(22),c=s(l),d="SET_USER_INFO",f="SIGN_OUT",p="FIX_USER_INFO",v="SET_SOCKET",_="INIT_SOCKET",h="REMOVE_NEW_MSGS",m="ADD_NEW_MSG",g="ADD_NEW_MSGS",w="SET_CHAT_MAN";t.default=(r={},(0,a.default)(r,d,function(e,t){e.userInfo=t,e.isLogin=!0}),(0,a.default)(r,f,function(e){e.userInfo={},e.isLogin=!1}),(0,a.default)(r,p,function(e,t){e.userInfo=(0,c.default)({},e.userInfo,t)}),(0,a.default)(r,v,function(e,t){e.socket=t}),(0,a.default)(r,_,function(e){var t=e.socket;t.on("news",function(e){console.log(e)}),t.emit("getARoom",{user_id:e.userInfo._id})}),(0,a.default)(r,m,function(e,t){e.newMsgs=[].concat((0,u.default)(e.newMsgs),[t])}),(0,a.default)(r,g,function(e,t){e.newMsgs=[].concat((0,u.default)(e.newMsgs),(0,u.default)(t))}),(0,a.default)(r,h,function(e,t){var n=void 0;"string"!=typeof t?(n=e.newMsgs.filter(function(e,n,s){return e._id!==t._id}),e.newMsgs=n):(n=e.newMsgs.filter(function(e,n,s){return e.from!==t}),e.newMsgs=n)}),(0,a.default)(r,w,function(e,t){e.chatMan=t}),r)},,function(e,t){"use strict";function n(e,t,n){var s=new Date;s.setTime(s.getTime()+24*n*60*60*1e3);var r="expires="+s.toUTCString();document.cookie=e+"="+t+"; "+r}function s(e){for(var t=e+"=",n=document.cookie.split(";"),s=0;s<n.length;s++){for(var r=n[s];" "==r.charAt(0);)r=r.substring(1);if(r.indexOf(t)!=-1)return r.substring(t.length,r.length)}return""}Object.defineProperty(t,"__esModule",{value:!0});var n=t.setCookie=n,s=t.getCookie=s},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,,,function(e,t){},function(e,t){},,,function(e,t){},function(e,t){},,function(e,t){},function(e,t){},,function(e,t){},function(e,t){},function(e,t){},,,function(e,t){},,function(e,t){},,,,,,,,,,,,,,,,function(e,t,n){n(234);var s=n(1)(n(110),n(292),null,null);e.exports=s.exports},,,function(e,t,n){n(233);var s=n(1)(n(117),n(291),null,null);e.exports=s.exports},function(e,t,n){n(230);var s=n(1)(n(118),n(288),null,null);e.exports=s.exports},function(e,t,n){n(217);var s=n(1)(n(119),n(275),null,null);e.exports=s.exports},,,,function(e,t,n){n(227);var s=n(1)(n(123),n(285),"data-v-4bf6a65a",null);e.exports=s.exports},function(e,t,n){n(224);var s=n(1)(n(124),n(282),"data-v-32e204e6",null);e.exports=s.exports},function(e,t,n){n(228);var s=n(1)(n(125),n(286),"data-v-5c42b4e7",null);e.exports=s.exports},function(e,t,n){n(235);var s=n(1)(n(126),n(293),"data-v-cfdbc854",null);e.exports=s.exports},,,,,,,function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"slider-wrap"},[n("transition",{attrs:{name:"sliderOutIn"}},[e.sliderIfShow?n("slider-list"):e._e()],1),e._v(" "),n("transition",{attrs:{name:"mask"}},[e.sliderIfShow?n("slider-mask",{on:{tempHandHideSlider:e.tempHandHideSlider}}):e._e()],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"slider"},[n("div",{staticClass:"slider-botton",on:{click:e.showSlider}},[n("div",{directives:[{name:"show",rawName:"v-show",value:0!=e.getNewMsgsLen||0!=e.getNewReplysLen,expression:"getNewMsgsLen != 0 || getNewReplysLen != 0"}],staticClass:"new-msg-red-point"})]),e._v(" "),n("slider-middleware",{attrs:{"slider-if-show":e.sliderIfShow},on:{handHideSlider:e.handHideSlider}})],1)},staticRenderFns:[]}},,,,,function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"nav"},[n("ul",{staticClass:"nav-left"},[n("li"),e._v(" "),n("li",[n("router-link",{attrs:{tag:"span",to:"/"}},[e._v("主页")])],1)]),e._v(" "),n("ul",{staticClass:"nav-right"},[n("router-link",{attrs:{tag:"li",to:"/"}},[e._v("主页")]),e._v(" "),n("router-link",{attrs:{tag:"li",to:"/friends"}},[e._v("好友")]),e._v(" "),n("router-link",{attrs:{tag:"li",to:"/search"}},[e._v("搜索")])],1)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n    random 哈哈哈哈\n")])},staticRenderFns:[]}},,,function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v("\n    active 哈哈哈哈\n    active 哈哈哈哈active 哈哈哈哈\n    active 哈哈哈哈\n")])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"square"},[n("my-scroll",{attrs:{data:e.squareActive,pulldown:!0,pullup:!0},on:{pulldown:e.refreshDongTai,scrollToEnd:e.getOldDongTai}},[n("div",{staticClass:"content"},e._l(e.squareActive,function(t){return n("div",{staticClass:"square-item"},[n("div",{staticClass:"square-item-userinfo-wrapper"},[n("img",{staticClass:"user-head-img",attrs:{src:t.whoPublish.avatarUrl,alt:"用户头像"},on:{click:function(n){e.goUserDetailInfo(t.whoPublish._id)}}}),e._v(" "),n("div",{staticClass:"square-item-username"},[e._v(e._s(t.whoPublish.userName))]),e._v(" "),n("div",{staticClass:"square-icon-wrapper",on:{click:function(n){e.openComment(t._id)}}},[n("svg",{staticClass:"icon",attrs:{viewBox:"0 0 1024 1024",version:"1.1"}},[n("path",{attrs:{d:"M184.32 891.667692c-12.603077 0-25.206154-2.363077-37.809231-7.876923-37.021538-14.966154-59.864615-49.624615-59.864615-89.009231v-275.692307c0-212.676923 173.292308-385.969231 385.969231-385.969231h78.76923c212.676923 0 385.969231 173.292308 385.969231 385.969231 0 169.353846-137.846154 307.2-307.2 307.2H289.083077l-37.021539 37.021538c-18.904615 18.116923-43.323077 28.356923-67.741538 28.356923zM472.615385 195.347692c-178.018462 0-322.953846 144.935385-322.953847 322.953846v275.692308c0 21.267692 15.753846 29.144615 20.48 31.507692 4.726154 2.363077 22.055385 7.876923 37.021539-7.08923l46.473846-46.473846c6.301538-6.301538 14.178462-9.452308 22.055385-9.452308h354.461538c134.695385 0 244.184615-109.489231 244.184616-244.184616 0-178.018462-144.935385-322.953846-322.953847-322.953846H472.615385z",fill:"#7F7F7F","p-id":"2438"}}),n("path",{attrs:{d:"M321.378462 512m-59.076924 0a59.076923 59.076923 0 1 0 118.153847 0 59.076923 59.076923 0 1 0-118.153847 0Z",fill:"#BFBFBF","p-id":"2439"}}),n("path",{attrs:{d:"M518.301538 512m-59.076923 0a59.076923 59.076923 0 1 0 118.153847 0 59.076923 59.076923 0 1 0-118.153847 0Z",fill:"#BFBFBF","p-id":"2440"}}),n("path",{attrs:{d:"M715.224615 512m-59.076923 0a59.076923 59.076923 0 1 0 118.153846 0 59.076923 59.076923 0 1 0-118.153846 0Z",fill:"#BFBFBF","p-id":"2441"}})])]),e._v(" "),n("div",{staticClass:"square-icon-wrapper xin"},[n("svg",{staticClass:"icon",attrs:{viewBox:"0 0 1024 1024"}},[n("path",{attrs:{d:"M737.32128 142.264121c-87.171362 0-162.578796 22.773679-225.540779 134.118604-47.548946-94.462418-135.072325-135.281079-219.141022-137.445372l0-0.077771-5.330402 0c-0.034792 0-0.069585-0.001023-0.105401-0.001023l0 0.001023 0 0 0-0.001023c-0.025583 0-0.052189 0.001023-0.077771 0.001023l-3.958148 0 0 0.050142c-113.074312 2.165316-218.990596 95.248318-218.969107 265.001513 0 294.743908 448.282816 481.231229 448.282816 481.231229s447.319885-186.487322 447.319885-483.048621C959.818747 231.458559 851.370803 142.264121 737.32128 142.264121zM690.644191 694.155666c-69.032236 52.048423-139.222855 89.232301-178.221054 108.222817-39.11281-18.990516-109.507066-56.136531-178.731684-108.073414-87.417979-65.552995-191.628412-169.160701-191.628412-290.393833 0-61.809741 16.908088-112.799042 48.927339-147.410328 24.705682-26.710338 57.290821-41.863457 92.176352-42.940998l0 0.203638 9.471722 0c120.94149 2.950192 219.370243 192.793958 219.370243 192.793958s90.361007-182.169993 225.312582-189.662641c36.731576-2.039449 71.019497 14.753005 96.383164 41.495066 31.549553 33.251312 48.230468 82.954317 48.230468 143.703913C881.934912 524.350283 777.910721 628.411313 690.644191 694.155666z","p-id":"1680",fill:"#7F7F7F"}})])]),e._v(" "),n("div",{staticClass:"square-icon-wrapper xin",staticStyle:{display:"none"}},[n("svg",{staticClass:"icon",attrs:{viewBox:"0 0 1024 1024",version:"1.1"}},[n("path",{attrs:{d:"M700.856275 155.542542c-74.768891 0-144.295384 72.696696-190.046381 127.260405C465.073224 228.226958 395.563104 155.542542 320.754305 155.542542c-134.789892 0-244.443291 105.780185-244.443291 235.799424 0 77.56968 39.277562 131.98808 70.844511 175.712931 91.752704 126.998439 322.464249 285.038872 332.234777 291.701618 9.410324 6.414083 20.424168 9.629311 31.401174 9.629311 11.005658 0 21.998013-3.215228 31.397081-9.629311 9.782807-6.662747 240.514819-164.703179 332.23887-291.701618 31.586392-43.723827 70.873164-98.143251 70.873164-175.712931C945.299567 261.321704 835.645145 155.542542 700.856275 155.542542L700.856275 155.542542zM700.856275 155.542542","p-id":"1566"}})])])]),e._v(" "),n("div",{staticClass:"square-contentText-wrapper"},[n("div",{staticClass:"square-contentText"},[e._v("\n                        "+e._s(t.content)+"\n                    ")])]),e._v(" "),e._l(t.reply,function(s){return n("div",{staticClass:"reply-content-wrapper"},[s.from._id==e.getOwnId||(s.to?s.to._id:"")==e.getOwnId?n("div",{on:{click:function(n){e.openReply(s.from._id,t._id,s.from.userName)}}},[n("span",[e._v(e._s(s.from.userName))]),e._v("回复"),n("span",[e._v(e._s(s.to?s.to.userName:""))]),e._v(":\n                        "+e._s(s.content)+"\n                    ")]):e._e()])}),e._v(" "),e.replyWho&&e.replyDongTaiId===t._id?n("div",{staticClass:"reply-input-wrapper"},[n("div",{staticClass:"input-reply-wrapper"},[n("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}})],1),e._v(" "),n("div",{staticClass:"send-reply-wrapper",on:{click:function(n){e.sendDongTaiReply(t._id,e.replyWho,n)}}},[n("button",[e._v("回复")])])]):e._e(),e._v(" "),e.replyWho||e.replyDongTaiId!==t._id?e._e():n("div",{staticClass:"reply-input-wrapper"},[n("div",{staticClass:"input-reply-wrapper"},[n("el-input",{attrs:{type:"textarea",autosize:"",placeholder:"请输入内容"},model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}})],1),e._v(" "),n("div",{staticClass:"send-reply-wrapper",on:{click:function(n){e.sendDongTaiReply(t._id,t.whoPublish._id,n)}}},[n("button",[e._v("评论")])])])],2)}))]),e._v(" "),n("alert",{directives:[{name:"show",rawName:"v-show",value:e.mdState,expression:"mdState"}],attrs:{message:e.message},on:{closeMd:e.closeMd}})],1)},staticRenderFns:[]}},,function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mask",on:{click:e.hideSlider}})},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"wrapper",staticClass:"wrapper"},[e._t("default")],2)},staticRenderFns:[]}},,function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"slider-content-wrap"},[n("div",{staticClass:"userHeadImgWrap"},[n("img",{staticClass:"userHeadImg",attrs:{src:e.userInfo.avatarUrl,alt:"用户头像"}}),e._v(" "),n("div",{staticClass:"user-name"},[e._v(e._s(e.userInfo.userName))])]),e._v(" "),n("ul",[n("li",{staticClass:"sidebar-item",on:{click:e.toFixInfo}},[e._v("完善信息")]),e._v(" "),n("li",{staticClass:"sidebar-item"},[e._v("相册")]),e._v(" "),n("li",{staticClass:"sidebar-item"},[n("div",{staticClass:"newMsgAlert"},[n("div",{staticClass:"wrapper-sidebar-svg"},[n("svg",{attrs:{viewBox:"0 0 1024 1024"}},[n("path",{attrs:{d:"M798.408 569.848v-88.407c0-124.764-89.85-229.568-211.378-259.101v-1.493c0-41.949-31.487-75.954-70.328-75.954-38.838 0-70.328 34.004-70.328 75.954v1.733c-121.026 29.856-210.392 134.428-210.392 258.856v72.751h-0.059c1.453 89.798-70.493 107.41-70.493 155.882s39.292 67.386 87.767 67.386h122.755c1.714 58.393 64.233 105.335 141.109 105.335s139.395-46.938 141.109-105.335h122.438c48.475 0 87.771-18.91 87.771-67.386 0.005-45.503-63.661-64.015-69.969-140.22zM517.151 847.314c-58.389 0-105.722-30.723-105.722-68.625 0-0.413 0.010-0.825 0.026-1.239h211.395c0.010 0.413 0.026 0.822 0.026 1.239-0.005 37.901-47.336 68.625-105.727 68.625zM833.375 712.797c-2.197 22.761-32.25 30.008-51.159 30.008h-530.469c-14.482 1.97-51.705-5.107-51.156-29.513v-6.198c0.483-22.037 54.625-40.822 70.179-118.866v-34.038h-0.557v-66.675c0-119.753 91.718-218.82 211.063-235.378v-29.628c0-23.405 15.775-42.378 35.235-42.378s35.235 18.973 35.235 42.378v29.588c119.477 16.445 211.34 115.569 211.34 235.419v66.674h-0.205v30.694h0.273c0.712 56.066 69.668 102.662 70.217 119.522l0.005 8.391z",fill:"#333333","p-id":"3285"}})]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:0!=e.getNewMsgsLen||0!=e.getNewReplysLen,expression:"getNewMsgsLen != 0 || getNewReplysLen != 0"}],staticClass:"new-msg-red-point"})]),e._v(" "),n("span",[e._v("消息")])])]),e._v(" "),n("li",{staticClass:"sidebar-item"},[e._v("关于loveLive")]),e._v(" "),n("li",{staticClass:"sidebar-item",on:{click:e.handSignout}},[e._v("退出登陆")])]),e._v(" "),n("alert",{directives:[{name:"show",rawName:"v-show",value:e.isShowModel,expression:"isShowModel"}],attrs:{message:e.signOutMessage},on:{closeMd:e.closeMd}})],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-view",{staticStyle:{height:"100%"}})},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("nav-component"),e._v(" "),n("slider"),e._v(" "),n("div",{staticClass:"content-wrapper"},[n("div",{staticClass:"content-nav"},[n("ul",[n("router-link",{attrs:{tag:"li",to:"/newDongTai"}},[n("div",{staticClass:"writeIcon"},[n("svg",{attrs:{viewBox:"0 0 1024 1024"}},[n("path",{attrs:{d:"M800 960 224 960c-52.928 0-96-43.072-96-96L128 224c0-52.928 43.072-96 96-96l448 0c17.696 0 32 14.336 32 32s-14.304 32-32 32L224 192C206.368 192 192 206.368 192 224l0 640c0 17.664 14.368 32 32 32l576 0c17.664 0 32-14.336 32-32L832 352c0-17.664 14.304-32 32-32s32 14.336 32 32l0 512C896 916.928 852.928 960 800 960z","p-id":"4816",fill:"#fff"}}),n("path",{attrs:{d:"M612 448c-8.192 0-16.384-3.136-22.624-9.376-12.512-12.512-12.512-32.736 0-45.248l318.016-318.016c12.512-12.512 32.736-12.512 45.248 0s12.512 32.736 0 45.248l-318.016 318.016C628.384 444.896 620.192 448 612 448z","p-id":"4817",fill:"#fff"}}),n("path",{attrs:{d:"M480 448 288 448c-17.664 0-32-14.336-32-32s14.336-32 32-32l192 0c17.664 0 32 14.336 32 32S497.664 448 480 448z","p-id":"4818",fill:"#fff"}}),n("path",{attrs:{d:"M672 640 288 640c-17.664 0-32-14.304-32-32s14.336-32 32-32l384 0c17.696 0 32 14.304 32 32S689.696 640 672 640z","p-id":"4819",fill:"#fff"}})])])]),e._v(" "),n("router-link",{attrs:{tag:"li",to:"/"}},[e._v("广场")]),e._v(" "),n("router-link",{attrs:{tag:"li",to:"/actives"}},[e._v("活动")]),e._v(" "),n("router-link",{attrs:{tag:"li",to:"/random"}},[e._v("缘旦")])],1)]),e._v(" "),n("router-view")],1)],1)},staticRenderFns:[]}},,,function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"md-modal"},[n("p",[e._v(e._s(e.message))]),e._v(" "),n("button",{staticClass:"md-close",on:{click:e.closeMd}},[e._v("关闭")])]),e._v(" "),n("div",{staticClass:"md-mask"})])},staticRenderFns:[]}},,,,function(e,t){}]);