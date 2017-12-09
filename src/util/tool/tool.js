import store from '../../vuex/store'
import Vue from 'vue'
/** 
*   Toast公共方法
*/
export function toast(str, icon) {
    store.dispatch('showToast', true)
    if (icon == 'success') {
        store.dispatch('showSuccess', true)
        store.dispatch('showFail', false)
    } else {
         store.dispatch('showSuccess', false)
        store.dispatch('showFail', true)
    }
    store.dispatch('toastMsg',str);
    setTimeout(() => {
        store.dispatch('showToast', false); 
    },1500); 
}
/**
 * dialog公共方法
 */
export function alert(str) {
    store.dispatch('showAlert', true)
    store.dispatch('alertMsg', str)
    setTimeout(() => {
        store.dispatch('showAlert', false); 
    },1500);
}

/****
 * 获取移动端屏幕高度宽度
 */
export function getMobileWidth(){
 return  document.documentElement.clientWidth;
}
export function getMobileHeight(){
    return  document.documentElement.clientHeight;
}
/****设置屏幕是否可以缩放 */
export function isscalable(){
MP.content="width=device-width, user-scalable=yes, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0";
}

/****手势缩放 */
export function gesture(){
        /**外部容器wrapper**/
		var wrapper = document.querySelector('.tablewrapper');
		/***内置容器**/
		var element = document.querySelector('.tablescale');
		var vendors;
		var distance = {};
		var origin;
		var scale = 1;
		var isCanScale = false;
		vendors = vendor();
		/**事件监听**/
		wrapper.addEventListener('touchstart', handleTouch);
		wrapper.addEventListener('touchmove', handleTouch);
		wrapper.addEventListener('touchend', handleTouch);
		wrapper.addEventListener('touchcancel', handleTouch);
	    /**句柄函数**/
		function handleTouch(e) {
			e.preventDefault();
			switch(e.type) {
				case 'touchstart':
					if (e.touches.length > 1) {
	 					distance.start = getDistance({
	 						x: e.touches[0].screenX, 
	 						y: e.touches[0].screenY  
						}, {
	 						x: e.touches[1].screenX, 
	 						y: e.touches[1].screenY
	 					});
	 				}
					break;
				 case 'touchmove':
					if (e.touches.length === 2) {
	 					origin = getOrigin({
							x: event.touches[0].pageX, 
							y: event.touches[0].pageY
						}, {
							x: event.touches[1].pageX, 
							y: event.touches[1].pageY
						});
						distance.stop = getDistance({
	 						x: e.touches[0].screenX, 
	 						y: e.touches[0].screenY  
						}, {
	 						x: e.touches[1].screenX, 
	 						y: e.touches[1].screenY
	 					});
	 					scale = distance.stop / distance.start;
	 					isCanScale = true;
	 					setScaleAnimation(scale, true);
	 				}
					break;
				 case 'touchend':
					scale = 1;
					setScaleAnimation(scale);
					break;
				 case 'touchcancel':
					scale = 1;
					setScaleAnimation(scale);
					break;
				  default:;
			}
		}
         function setScaleAnimation(scale, animation) {
			var transition_animation = '';
			var x, y;
			if (!isCanScale) {
				return;
			}
			isCanScale = false;
			if (animation) {
				transition_animation = 'none';
			} else {
				transition_animation = vendors.TRANSFORM_PROPERTY + ' 0.3s ease-out';
			}
			element.style[vendors.TRANSITION] = transition_animation;
			x = origin.x + (-origin.x) * scale;
			y = origin.y + (-origin.y) * scale;
			element.style[vendors.TRANSFORM] = 'matrix(' + scale + ', 0, 0, ' + scale + ', ' + x + ', ' + y +  ')';
		}
     }
      function vendor() {
			var TRANSITION = 'transition';
			var TRANSITION_END = 'transitionend';
			var TRANSFORM = 'transform';
			var TRANSFORM_PROPERTY = 'transform';
			var TRANSITION_PROPERTY = 'transition';
			if (typeof document.body.style.webkitTransform !== undefined) {
				TRANSFORM = 'webkitTransform';
				TRANSITION = 'webkitTransition';
				TRANSITION_END = 'webkitTransitionEnd';
				TRANSFORM_PROPERTY = '-webkit-transform';
				TRANSITION_PROPERTY = '-webkit-transition';
			}
			return {
				TRANSFORM: TRANSFORM,
				TRANSITION: TRANSITION,
				TRANSITION_END: TRANSITION_END,
				TRANSFORM_PROPERTY: TRANSFORM_PROPERTY,
				TRANSITION_PROPERTY: TRANSITION_PROPERTY
			};
		}
	    function getOrigin(first, second) {
			return {
				x: (first.x + second.x) / 2,
				y: (first.y + second.y) / 2
			};
		}
       function getDistance(start, stop) {
        return Math.sqrt(Math.pow((stop.x - start.x), 2) + Math.pow((stop.y - start.y), 2));
       }

var _st = window.setTimeout;
export  function  setTimeout(fRef, mDelay){
 if (typeof fRef == 'function') {
  var argu = Array.prototype.slice.call(arguments, 2);
  var f = function(){
    fRef.apply(null, argu);
  };
  return _st(f, mDelay);
 }
 return _st(fRef, mDelay);
}



// 存储localStorage时设置前缀
const storePrefix = 'CEB_';

// 存储localStorage
export const setStore = (name, content) => {
	if (!name) return;
	if (typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	window.localStorage.setItem(storePrefix + name, content);
}

// 获取localStorage
export const getStore = name => {
	if (!name) return;
	return window.localStorage.getItem(storePrefix + name);
}

// 删除localStorage
export const removeStore = name => {
	if (!name) return;
	window.localStorage.removeItem(storePrefix + name);
}

//弹出框
export function alertMsg($this,option){
    var _this=$this;
	//vux弹窗
    _this.$vux.alert.show(
      {
       title: option.title,
       content:option.content,
       onShow () {
       console.log('Plugin: I\'m showing')
       },
       onHide () {
       console.log('Plugin: I\'m hiding')
      }
     }
 )
}