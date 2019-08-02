(function(n){function e(e){for(var r,s,a=e[0],u=e[1],c=e[2],f=0,p=[];f<a.length;f++)s=a[f],o[s]&&p.push(o[s][0]),o[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(n[r]=u[r]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),t()}function t(){for(var n,e=0;e<i.length;e++){for(var t=i[e],r=!0,a=1;a<t.length;a++){var u=t[a];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),n=s(s.s=t[0]))}return n}var r={},o={app:0},i=[];function s(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.m=n,s.c=r,s.d=function(n,e,t){s.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},s.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},s.t=function(n,e){if(1&e&&(n=s(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)s.d(t,r,function(e){return n[e]}.bind(null,r));return t},s.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return s.d(e,"a",e),e},s.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=u;i.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"034f":function(n,e,t){"use strict";var r=t("64a9"),o=t.n(r);o.a},"0884":function(n,e,t){"use strict";var r=t("40ba"),o=t.n(r);o.a},"40ba":function(n,e,t){},"43f1":function(n,e,t){"use strict";var r=t("7c8e"),o=t.n(r);o.a},"56d7":function(n,e,t){"use strict";t.r(e);var r=t("2b0e"),o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("ChessBoard")],1)},i=[],s=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"chessboard"}},[t("Grid")],1)},a=[],u=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"board-layout"}},[t("div",{attrs:{id:"vertical-line-wrapper"}},n._l(n.vertical_labels,function(n,e){return t("span",{key:n,staticClass:"vertical-line",style:"left:"+5.55555555*e+"%"})}),0),n._l(n.vertical_labels,function(e,r){return t("span",{key:e,staticClass:"board-row",style:"bottom:"+5.55555555*r+"%"},n._l(n.horizontal_labels,function(r,o){return t("span",{key:e+r,staticClass:"board-point",class:{"board-point black":n.pointed_grid.includes(r+e)},style:"left: calc("+5.55555555*o+"% - 4px)",on:{click:function(t){return n.gridPointClickHandler(r+e)}}},[n.showStone(r+e)?t("Stone",{attrs:{player:n.determinePlayerType(r+e)}}):n._e()],1)}),0)})],2)},c=[],l=t("e814"),f=t.n(l),p=(t("20d6"),t("7514"),t("6762"),t("2fdb"),t("ac6a"),t("75fc")),h=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{class:"white"===n.player?"white-player":"black-player",style:n.takenOut?"display: none;":null,attrs:{id:"stone"}})},d=[],v=(t("c5f6"),{name:"Stone",props:{player:String,takenOut:Number}}),b=v,m=(t("43f1"),t("2877")),y=Object(m["a"])(b,h,d,!1,null,"1cf232eb",null),g=y.exports,_={name:"Grid",components:{Stone:g},props:{msg:String},methods:{gridPointClickHandler:function(n){this.moves;var e={position:n,step:this.moves.length,connectedStones:this.measurePoint(n).friendlyStones,chi:this.measurePoint(n).chi,takenOut:!1},t=Object(p["a"])(this.moves).concat(e);this.moves=t,this.updateSurroundingStoneInfo(n)},updateSurroundingStoneInfo:function(n){var e=this,t=this.measurePoint(n).takenByStone,r=t.map(function(n){var e=n.position;return e});this.moves.forEach(function(n){return n.connectedStones=e.measurePoint(n.position).friendlyStones,r.includes(n.position)&&!1===n.takenOut&&n.chi--,n});var o=this.measurePoint(n).opposingStones;console.log(o);var i=o.filter(function(n){var e=n.chi,t=n.takenOut;return 0===e&&!1===t});console.log(i),i.length&&i.forEach(function(n){if(n.connectedStones.length){var t=e.uniqueConnections(n),r=t.map(function(n){return n.chi}),o=r.reduce(function(n,e){return n+e});0===o&&e.removeStones(t)}else e.removeStones([n])})},uniqueConnections:function(n){for(var e=[n],t=0;t<e.length;t++)for(var r=e[t].connectedStones,o=0;o<r.length;o++){var i=e.map(function(n){return n.position});i.includes(r[o].position)||e.push(r[o])}return e},removeStones:function(n){var e=n.map(function(n){var e=n.step;return e});this.nonTakenOutMoves.forEach(function(n){return e.includes(n.step)&&(n.takenOut=!0),n});var t=this.measureGroup(n).surroundingStones;this.recoverChi(t)},recoverChi:function(n){var e=n.map(function(n){var e=n.step;return e});this.nonTakenOutMoves.forEach(function(n){return e.includes(n.step)&&n.chi++,n})},showStone:function(n){return this.nonTakenOutMoves.find(function(e){var t=e.position,r=e.takenOut;return t===n&&!r})},determinePlayerType:function(n){var e=this.moves.findIndex(function(e,t){var r=e.position,o=e.takenOut;return r===n&&!1===o});return e%2===0?"black":"white"},measurePoint:function(n){var e=this.determinePlayerType(n),t=n[0],r=f()(n.slice(1)),o=this.horizontal_labels.indexOf(t),i=this.vertical_labels.indexOf(r),s=this.horizontal_labels[o-1]+this.vertical_labels[i]+"",a=this.horizontal_labels[o+1]+this.vertical_labels[i]+"",u=this.horizontal_labels[o]+this.vertical_labels[i+1]+"",c=this.horizontal_labels[o]+this.vertical_labels[i-1]+"",l=[u,s,c,a],p=l.filter(function(n){return!n.includes("NaN")&&!n.includes("undefined")}),h=this.moves.filter(function(n){var e=n.position,t=n.takenOut;return p.includes(e)&&!1===t}),d=h.filter(function(n){var t=n.step;switch(e){case"white":return t%2===0;case"black":return t%2===1}}),v=h.filter(function(n){var t=n.step;switch(e){case"black":return t%2===0;case"white":return t%2===1}});return{opposingStones:d,friendlyStones:v,takenByStone:h,chi:p.length-d.length-v.length}},measureGroup:function(n){var e=this,t=n.map(function(n){var t=n.position,r=e.measurePoint(t).opposingStones;return r}).flat();return{surroundingStones:t}}},data:function(){return{vertical_labels:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19],horizontal_labels:["A","B","C","D","E","F","G","H","J","K","L","M","N","O","P","Q","R","S","T"],pointed_grid:["D4","D10","D16","K4","K10","K16","Q4","Q10","Q16"],moves:[]}},computed:{black_moves:function(){return this.moves.filter(function(n,e){return e%2===0})},white_moves:function(){return this.moves.filter(function(n,e){return e%2===1})},nonTakenOutMoves:function(){return this.moves.filter(function(n){return!1===n.takenOut})}}},S=_,k=(t("aca6"),Object(m["a"])(S,u,c,!1,null,"0be346e2",null)),O=k.exports,w={name:"ChessBoard",props:{msg:String},components:{Grid:O}},P=w,x=(t("0884"),Object(m["a"])(P,s,a,!1,null,"4e59a6ac",null)),j=x.exports,C={name:"app",components:{ChessBoard:j}},T=C,E=(t("034f"),Object(m["a"])(T,o,i,!1,null,null,null)),M=E.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(n){return n(M)}}).$mount("#app")},"64a9":function(n,e,t){},"7c8e":function(n,e,t){},"869b":function(n,e,t){},aca6:function(n,e,t){"use strict";var r=t("869b"),o=t.n(r);o.a}});
//# sourceMappingURL=app.15c19004.js.map