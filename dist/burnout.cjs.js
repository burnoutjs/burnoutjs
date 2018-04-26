"use strict";var createMap=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,e=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:window).document.createElement("div");return e.style="\n    display: grid;\n    grid-template-columns: repeat("+t.cols+", "+r+"px);\n    grid-template-rows: repeat("+t.rows+", "+r+"px);\n    width: "+t.cols*r+"px;\n    height: "+t.rows*r+"px;\n    overflow: hidden;\n  ",e},createCamera=function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,e=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:window).document.createElement("div");return e.style="\n    width: "+t.cols*r+"px;\n    height: "+t.rows*r+"px;\n  ",e},stringifyPosition=function(t){return"grid-area: \n            "+t.rowStart+" / \n            "+t.columnStart+" /\n            "+t.rowEnd+" /\n            "+t.columnEnd},createBlock=function(t){var r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:window).document.createElement("div");return r.classList.add(t.className),r.style=stringifyPosition(t.position),r},createAvatar=function(t){var r=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:window).document.createElement("div");return r.classList.add(t.className),r.style=stringifyPosition(t.position),r},moveUp=function(t){return{rowStart:t.rowStart-1,columnStart:t.columnStart,rowEnd:t.rowEnd-1,columnEnd:t.columnEnd}},moveDown=function(t){return{rowStart:t.rowStart+1,columnStart:t.columnStart,rowEnd:t.rowEnd+1,columnEnd:t.columnEnd}},moveLeft=function(t){return{rowStart:t.rowStart,columnStart:t.columnStart-1,rowEnd:t.rowEnd,columnEnd:t.columnEnd-1}},moveRight=function(t){return{rowStart:t.rowStart,columnStart:t.columnStart+1,rowEnd:t.rowEnd,columnEnd:t.columnEnd+1}},wasBumped=function(t,r){var e=void 0;return{result:r.some(function(r){var n=t.columnStart===r.columnStart,o=t.columnEnd===r.columnEnd,i=t.rowStart===r.rowStart,a=t.rowEnd===r.rowEnd;return e=r,n&&o&&(i&&a)}),block:e}},stringifyTranslate=function(t){return"transform: translate("+t.x+"px, "+t.y+"px);"},keyPress=function(t,r){return t.which===r||t.keyCode===r},setKeyboardControls=function(t,r,e,n,o,i){var a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:window,s={currentAvatarPosition:t.startPosition,currentAvatarSide:null,currentCameraPosition:{x:0,y:0}};a.addEventListener("keydown",function(a){if(keyPress(a,i.up)){var c=moveUp(s.currentAvatarPosition);t.side&&"up"!==s.currentAvatarSide&&(t.ref.className=t.side.up,s.currentAvatarSide="up");var l=wasBumped(c,n);l.result&&l.block.action(l.block);var u=wasBumped(c,e);if(u.result)return void u.block.action(u.block);s.currentCameraPosition.y+=o,r.style=r.style.cssText+stringifyTranslate(s.currentCameraPosition),t.ref.style=stringifyPosition(c),s.currentAvatarPosition=c}if(keyPress(a,i.down)){var d=moveDown(s.currentAvatarPosition);t.side&&"down"!==s.currentAvatarSide&&(t.ref.className=t.side.down,s.currentAvatarSide="down");var v=wasBumped(d,n);v.result&&v.block.action(v.block);var f=wasBumped(d,e);if(f.result)return void f.block.action(f.block);s.currentCameraPosition.y-=o,r.style=r.style.cssText+stringifyTranslate(s.currentCameraPosition),t.ref.style=stringifyPosition(d),s.currentAvatarPosition=d}if(keyPress(a,i.left)){var m=moveLeft(s.currentAvatarPosition);t.side&&"left"!==s.currentAvatarSide&&(t.ref.className=t.side.left,s.currentAvatarSide="left");var p=wasBumped(m,n);p.result&&p.block.action(p.block);var w=wasBumped(m,e);if(w.result)return void w.block.action(w.block);s.currentCameraPosition.x+=o,r.style=r.style.cssText+stringifyTranslate(s.currentCameraPosition),t.ref.style=stringifyPosition(m),s.currentAvatarPosition=m}if(keyPress(a,i.right)){var y=moveRight(s.currentAvatarPosition);t.side&&"right"!==s.currentAvatarSide&&(t.ref.className=t.side.right,s.currentAvatarSide="right");var k=wasBumped(y,n);k.result&&k.block.action&&k.block.action(k.block);var b=wasBumped(y,e);if(b.result)return void(b.block.action&&b.block.action(b.block));s.currentCameraPosition.x-=o,r.style=r.style.cssText+stringifyTranslate(s.currentCameraPosition),t.ref.style=stringifyPosition(y),s.currentAvatarPosition=y}})},burnout=function(){var t={mapRef:null,viewRef:null,blocksRefs:[],collisionBlocksPositions:[],overBlocksPositions:[],blockSize:null,avatar:{ref:null,startPosition:null,side:null}};return{defineMap:function(r){var e=createMap(r.map,r.blockSize),n=createCamera(r.view,r.blockSize);r.developer&&(e.style.border="1px solid",n.style.border="1px solid red",n.style.overflow="visible"),n.appendChild(e),t.viewRef=n,t.mapRef=e,t.blockSize=r.blockSize},defineBlock:function(r){var e=createBlock(r);r.collision&&t.collisionBlocksPositions.push(r.position),r.over&&t.overBlocksPositions.push(r.position),t.blocksRefs.push(e)},defineAvatar:function(r){var e=createAvatar(r);t.avatar.ref=e,t.avatar.startPosition=r.position,t.avatar.side=r.side},renderMap:function(r){t.blocksRefs.forEach(function(r){t.mapRef.appendChild(r)}),t.mapRef.appendChild(t.avatar.ref),r.appendChild(t.viewRef)},defineControls:function(r){r.keyboard&&setKeyboardControls(t.avatar,t.mapRef,t.collisionBlocksPositions,t.overBlocksPositions,t.blockSize,r.keyboard)},getAvatar:function(){return t.avatar.ref},getMap:function(){return t.mapRef},getView:function(){return t.viewRef},getBlock:function(r){return t.blocksRefs.filter(function(t){return stringifyPosition(r).replace(/\s/g,"")==t.style.cssText.replace(/\s/g,"").replace(/\;/g,"")})[0]}}},burnout$1=burnout();module.exports=burnout$1;
