window.__require=function t(e,o,r){function n(i,p){if(!o[i]){if(!e[i]){var s=i.split("/");if(s=s[s.length-1],!e[s]){var a="function"==typeof __require&&__require;if(!p&&a)return a(s,!0);if(c)return c(s,!0);throw new Error("Cannot find module '"+i+"'")}i=s}var u=o[i]={exports:{}};e[i][0].call(u.exports,function(t){return n(e[i][1][t]||t)},u,u.exports,t,e,o,r)}return o[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<r.length;i++)n(r[i]);return n}({birdAtlas:[function(t,e,o){"use strict";cc._RF.push(e,"2ca8feUFppAGq2CO9n9N8yE","birdAtlas");var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var p=t.length-1;p>=0;p--)(n=t[p])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,s=i.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.atlas=null,e.frames=[],e.sprite=null,e.index=0,e.interval=.2,e}return n(e,t),e.prototype.onLoad=function(){this.sprite=this.getComponent(cc.Sprite),null!=this.atlas&&(this.frames=this.atlas.getSpriteFrames())},e.prototype.start=function(){this.schedule(this.ontimer,this.interval)},e.prototype.ontimer=function(){this.index>this.frames.length-1&&(this.index=0),0!=this.frames.length&&(this.sprite.spriteFrame=this.frames[this.index],this.index++)},e.prototype.onDestroy=function(){this.unschedule(this.ontimer)},c([s([cc.SpriteAtlas])],e.prototype,"atlas",void 0),c([p],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],bird:[function(t,e,o){"use strict";cc._RF.push(e,"9b130A18aFKwY76Wz/uDCiZ","bird");var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var p=t.length-1;p>=0;p--)(n=t[p])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,s=i.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e}return n(e,t),e.prototype.start=function(){},e.prototype.nodeBox=function(){return this.node.getBoundingBoxToWorld()},e.prototype.onLoad=function(){var t=cc.director.getCollisionManager();t.enabled=!0,t.enabledDebugDraw=!1},e.prototype.onCollisionEnter=function(t,e){this.node.removeFromParent(),console.log("\u78b0\u649e\u4e86"),console.log(t,e)},c([s(cc.Label)],e.prototype,"label",void 0),c([p],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],landing:[function(t,e,o){"use strict";cc._RF.push(e,"6aa36eru4tDrqOCGK5RmMuv","landing");var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var p=t.length-1;p>=0;p--)(n=t[p])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,s=i.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e}return n(e,t),e.prototype.onLoad=function(){this.node.on("touchstart",this.btn,this)},e.prototype.start=function(){},e.prototype.btn=function(){cc.director.loadScene("main")},c([s(cc.Label)],e.prototype,"label",void 0),c([s],e.prototype,"text",void 0),c([p],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],main:[function(t,e,o){"use strict";cc._RF.push(e,"974d122UtdM+qXr2bNyqZZk","main");var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var p=t.length-1;p>=0;p--)(n=t[p])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,s=i.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.bird=null,e}return n(e,t),e.prototype.onLoad=function(){},e.prototype.start=function(){this.NewBird(),this.schedule(this.NewBird,5)},e.prototype.NewBird=function(){var t=cc.instantiate(this.bird);this.node.addChild(t,88),t.setPosition(this.getNewRandomPosition()),cc.tween(t).to(10,{position:cc.v3(t.getPosition().x,-cc.view.getVisibleSize().height/2-20,0)}).start()},e.prototype.getNewRandomPosition=function(){var t=400*Math.random()-180,e=cc.view.getVisibleSize().height/2;return cc.log("\u7269\u54c1\u521b\u5efa\u5750\u6807"+t+"  "+e),cc.v3(t,e,0)},e.prototype.update=function(){},c([s(cc.Prefab)],e.prototype,"bird",void 0),c([p],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],move:[function(t,e,o){"use strict";cc._RF.push(e,"dd154ue7O1Ob4YJQDmyzdIR","move");var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var p=t.length-1;p>=0;p--)(n=t[p])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,s=i.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e}return n(e,t),e.prototype.onLoad=function(){this.node.on("touchmove",this.movePlayer,this)},e.prototype.start=function(){},e.prototype.movePlayer=function(t){var e=t.getDelta(),o=cc.find("Canvas/player"),r=o.getPosition();e.x>.1?o.setScale(-1,1):o.setScale(1,1),o.setPosition(cc.v3(r.x+e.x,r.y,0)),t.stopPropagation()},c([s(cc.Label)],e.prototype,"label",void 0),c([s],e.prototype,"text",void 0),c([p],e)}(cc.Component);o.default=a,cc._RF.pop()},{}],start:[function(t,e,o){"use strict";cc._RF.push(e,"82487rrnrNODYjyEjmdBAgm","start");var r,n=this&&this.__extends||(r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,r){var n,c=arguments.length,i=c<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,r);else for(var p=t.length-1;p>=0;p--)(n=t[p])&&(i=(c<3?n(i):c>3?n(e,o,i):n(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,s=i.property,a=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.label=null,e.text="hello",e}return n(e,t),e.prototype.onLoad=function(){this.node.on("touchstart",this.startBtn,this)},e.prototype.start=function(){},e.prototype.startBtn=function(){cc.director.loadScene("GameScene")},c([s(cc.Label)],e.prototype,"label",void 0),c([s],e.prototype,"text",void 0),c([p],e)}(cc.Component);o.default=a,cc._RF.pop()},{}]},{},["bird","birdAtlas","landing","main","move","start"]);