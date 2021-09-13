/*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.18
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
! function(factory) {!function(e){"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],e):e("undefined"!=typeof module&&module.exports?require("jquery"):jQuery)}(function(e){"use strict";function n(n,D){function P(n){if(!(!0===me.data(M+"_intouch")||e(n.target).closest(D.excludedElements,me).length>0)){var o=n.originalEvent?n.originalEvent:n;if(!o.pointerType||"mouse"!=o.pointerType||0!=D.fallbackToMouseEvents){var a,u=o.touches,s=u?u[0]:o;return xe=b,u?Se=u.length:!1!==D.preventDefaultEvents&&n.preventDefault(),he=0,de=null,fe=null,ye=null,ge=0,we=0,ve=0,Te=1,be=0,(c={})[t]=ne(t),c[i]=ne(i),c[r]=ne(r),c[l]=ne(l),Ee=c,Z(),K(0,s),!u||Se===D.fingers||D.fingers===v||C()?(Me=le(),2==Se&&(K(1,u[1]),we=ve=ie(Oe[0].start,Oe[1].start)),(D.swipeStatus||D.pinchStatus)&&(a=j(o,xe))):a=!1,!1===a?(j(o,xe=m),a):(D.hold&&(Ae=setTimeout(e.proxy(function(){me.trigger("hold",[o.target]),D.hold&&(a=D.hold.call(me,o,o.target))},this),D.longTapThreshold)),J(!0),null)}}var c}function L(n){var c,p,h,d,f=n.originalEvent?n.originalEvent:n;if(xe!==E&&xe!==m&&!B()){var T,b=f.touches,x=$(b?b[0]:f);if(De=le(),b&&(Se=b.length),D.hold&&clearTimeout(Ae),xe=y,2==Se&&(0==we?(K(1,b[1]),we=ve=ie(Oe[0].start,Oe[1].start)):($(b[1]),ve=ie(Oe[0].end,Oe[1].end),Oe[0].end,Oe[1].end,ye=Te<1?a:o),Te=(ve/we*1).toFixed(2),be=Math.abs(we-ve)),Se===D.fingers||D.fingers===v||!b||C()){if(de=re(x.start,x.end),function(e,n){if(!1!==D.preventDefaultEvents)if(D.allowPageScroll===u)e.preventDefault();else{var o=D.allowPageScroll===s;switch(n){case t:(D.swipeLeft&&o||!o&&D.allowPageScroll!=g)&&e.preventDefault();break;case i:(D.swipeRight&&o||!o&&D.allowPageScroll!=g)&&e.preventDefault();break;case r:(D.swipeUp&&o||!o&&D.allowPageScroll!=w)&&e.preventDefault();break;case l:(D.swipeDown&&o||!o&&D.allowPageScroll!=w)&&e.preventDefault()}}}(n,fe=re(x.last,x.end)),h=x.start,d=x.end,he=Math.round(Math.sqrt(Math.pow(d.x-h.x,2)+Math.pow(d.y-h.y,2))),ge=te(),function(e,n){e!=u&&(n=Math.max(n,ee(e)),Ee[e].distance=n)}(de,he),T=j(f,xe),!D.triggerOnTouchEnd||D.triggerOnTouchLeave){var S=!0;if(D.triggerOnTouchLeave){var O={left:(p=(c=e(c=this)).offset()).left,right:p.left+c.outerWidth(),top:p.top,bottom:p.top+c.outerHeight()};S=function(e,n){return e.x>n.left&&e.x<n.right&&e.y>n.top&&e.y<n.bottom}(x.end,O)}!D.triggerOnTouchEnd&&S?xe=U(y):D.triggerOnTouchLeave&&!S&&(xe=U(E)),xe!=m&&xe!=E||j(f,xe)}}else j(f,xe=m);!1===T&&j(f,xe=m)}}function R(e){var n=e.originalEvent?e.originalEvent:e,t=n.touches;if(t){if(t.length&&!B())return function(e){Pe=le(),Le=e.touches.length+1}(n),!0;if(t.length&&B())return!0}return B()&&(Se=Le),De=le(),ge=te(),_()||!H()?j(n,xe=m):D.triggerOnTouchEnd||!1===D.triggerOnTouchEnd&&xe===y?(!1!==D.preventDefaultEvents&&!1!==e.cancelable&&e.preventDefault(),j(n,xe=E)):!D.triggerOnTouchEnd&&W()?N(n,xe=E,h):xe===y&&j(n,xe=m),J(!1),null}function k(){Se=0,De=0,Me=0,we=0,ve=0,Te=1,Z(),J(!1)}function A(e){var n=e.originalEvent?e.originalEvent:e;D.triggerOnTouchLeave&&j(n,xe=U(E))}function I(){me.unbind(ae,P),me.unbind(pe,k),me.unbind(ue,L),me.unbind(se,R),ce&&me.unbind(ce,A),J(!1)}function U(e){var n=e,t=q(),i=H(),r=_();return!t||r?n=m:!i||e!=y||D.triggerOnTouchEnd&&!D.triggerOnTouchLeave?!i&&e==E&&D.triggerOnTouchLeave&&(n=m):n=E,n}function j(e,n){var t,i=e.touches;return(!(!F()||!X())||X())&&(t=N(e,n,c)),(!(!Q()||!C())||C())&&!1!==t&&(t=N(e,n,p)),G()&&z()&&!1!==t?t=N(e,n,d):ge>D.longTapThreshold&&he<T&&D.longTap&&!1!==t?t=N(e,n,f):!(1!==Se&&x||!(isNaN(he)||he<D.threshold)||!W())&&!1!==t&&(t=N(e,n,h)),n===m&&k(),n===E&&(i&&i.length||k()),t}function N(n,u,s){var g;if(s==c){if(me.trigger("swipeStatus",[u,de||null,he||0,ge||0,Se,Oe,fe]),D.swipeStatus&&!1===(g=D.swipeStatus.call(me,n,u,de||null,he||0,ge||0,Se,Oe,fe)))return!1;if(u==E&&F()){if(clearTimeout(ke),clearTimeout(Ae),me.trigger("swipe",[de,he,ge,Se,Oe,fe]),D.swipe&&!1===(g=D.swipe.call(me,n,de,he,ge,Se,Oe,fe)))return!1;switch(de){case t:me.trigger("swipeLeft",[de,he,ge,Se,Oe,fe]),D.swipeLeft&&(g=D.swipeLeft.call(me,n,de,he,ge,Se,Oe,fe));break;case i:me.trigger("swipeRight",[de,he,ge,Se,Oe,fe]),D.swipeRight&&(g=D.swipeRight.call(me,n,de,he,ge,Se,Oe,fe));break;case r:me.trigger("swipeUp",[de,he,ge,Se,Oe,fe]),D.swipeUp&&(g=D.swipeUp.call(me,n,de,he,ge,Se,Oe,fe));break;case l:me.trigger("swipeDown",[de,he,ge,Se,Oe,fe]),D.swipeDown&&(g=D.swipeDown.call(me,n,de,he,ge,Se,Oe,fe))}}}if(s==p){if(me.trigger("pinchStatus",[u,ye||null,be||0,ge||0,Se,Te,Oe]),D.pinchStatus&&!1===(g=D.pinchStatus.call(me,n,u,ye||null,be||0,ge||0,Se,Te,Oe)))return!1;if(u==E&&Q())switch(ye){case o:me.trigger("pinchIn",[ye||null,be||0,ge||0,Se,Te,Oe]),D.pinchIn&&(g=D.pinchIn.call(me,n,ye||null,be||0,ge||0,Se,Te,Oe));break;case a:me.trigger("pinchOut",[ye||null,be||0,ge||0,Se,Te,Oe]),D.pinchOut&&(g=D.pinchOut.call(me,n,ye||null,be||0,ge||0,Se,Te,Oe))}}return s==h?u!==m&&u!==E||(clearTimeout(ke),clearTimeout(Ae),z()&&!G()?(Re=le(),ke=setTimeout(e.proxy(function(){Re=null,me.trigger("tap",[n.target]),D.tap&&(g=D.tap.call(me,n,n.target))},this),D.doubleTapThreshold)):(Re=null,me.trigger("tap",[n.target]),D.tap&&(g=D.tap.call(me,n,n.target)))):s==d?u!==m&&u!==E||(clearTimeout(ke),clearTimeout(Ae),Re=null,me.trigger("doubletap",[n.target]),D.doubleTap&&(g=D.doubleTap.call(me,n,n.target))):s==f&&(u!==m&&u!==E||(clearTimeout(ke),Re=null,me.trigger("longtap",[n.target]),D.longTap&&(g=D.longTap.call(me,n,n.target)))),g}function H(){var e=!0;return null!==D.threshold&&(e=he>=D.threshold),e}function _(){var e=!1;return null!==D.cancelThreshold&&null!==de&&(e=ee(de)-he>=D.cancelThreshold),e}function q(){return!(D.maxTimeThreshold&&ge>=D.maxTimeThreshold)}function Q(){var e=Y(),n=V(),t=null===D.pinchThreshold||be>=D.pinchThreshold;return e&&n&&t}function C(){return!!(D.pinchStatus||D.pinchIn||D.pinchOut)}function F(){var e=q(),n=H(),t=Y(),i=V();return!_()&&i&&t&&n&&e}function X(){return!!(D.swipe||D.swipeStatus||D.swipeLeft||D.swipeRight||D.swipeUp||D.swipeDown)}function Y(){return Se===D.fingers||D.fingers===v||!x}function V(){return 0!==Oe[0].end.x}function W(){return!!D.tap}function z(){return!!D.doubleTap}function G(){if(null==Re)return!1;var e=le();return z()&&e-Re<=D.doubleTapThreshold}function Z(){Pe=0,Le=0}function B(){var e=!1;Pe&&(le()-Pe<=D.fingerReleaseThreshold&&(e=!0));return e}function J(e){me&&(!0===e?(me.bind(ue,L),me.bind(se,R),ce&&me.bind(ce,A)):(me.unbind(ue,L,!1),me.unbind(se,R,!1),ce&&me.unbind(ce,A,!1)),me.data(M+"_intouch",!0===e))}function K(e,n){var t={start:{x:0,y:0},last:{x:0,y:0},end:{x:0,y:0}};return t.start.x=t.last.x=t.end.x=n.pageX||n.clientX,t.start.y=t.last.y=t.end.y=n.pageY||n.clientY,Oe[e]=t,t}function $(e){var n=void 0!==e.identifier?e.identifier:0,t=function(e){return Oe[e]||null}(n);return null===t&&(t=K(n,e)),t.last.x=t.end.x,t.last.y=t.end.y,t.end.x=e.pageX||e.clientX,t.end.y=e.pageY||e.clientY,t}function ee(e){if(Ee[e])return Ee[e].distance}function ne(e){return{direction:e,distance:0}}function te(){return De-Me}function ie(e,n){var t=Math.abs(e.x-n.x),i=Math.abs(e.y-n.y);return Math.round(Math.sqrt(t*t+i*i))}function re(e,n){if(a=n,(o=e).x==a.x&&o.y==a.y)return u;var o,a,s=function(e,n){var t=e.x-n.x,i=n.y-e.y,r=Math.atan2(i,t),l=Math.round(180*r/Math.PI);return l<0&&(l=360-Math.abs(l)),l}(e,n);return s<=45&&s>=0?t:s<=360&&s>=315?t:s>=135&&s<=225?i:s>45&&s<135?l:r}function le(){return(new Date).getTime()}D=e.extend({},D);var oe=x||O||!D.fallbackToMouseEvents,ae=oe?O?S?"MSPointerDown":"pointerdown":"touchstart":"mousedown",ue=oe?O?S?"MSPointerMove":"pointermove":"touchmove":"mousemove",se=oe?O?S?"MSPointerUp":"pointerup":"touchend":"mouseup",ce=oe?O?"mouseleave":null:"mouseleave",pe=O?S?"MSPointerCancel":"pointercancel":"touchcancel",he=0,de=null,fe=null,ge=0,we=0,ve=0,Te=1,be=0,ye=0,Ee=null,me=e(n),xe="start",Se=0,Oe={},Me=0,De=0,Pe=0,Le=0,Re=0,ke=null,Ae=null;try{me.bind(ae,P),me.bind(pe,k)}catch(n){e.error("events not supported "+ae+","+pe+" on jQuery.swipe")}this.enable=function(){return this.disable(),me.bind(ae,P),me.bind(pe,k),me},this.disable=function(){return I(),me},this.destroy=function(){I(),me.data(M,null),me=null},this.option=function(n,t){if("object"==typeof n)D=e.extend(D,n);else if(void 0!==D[n]){if(void 0===t)return D[n];D[n]=t}else{if(!n)return D;e.error("Option "+n+" does not exist on jQuery.swipe.options")}return null}}var t="left",i="right",r="up",l="down",o="in",a="out",u="none",s="auto",c="swipe",p="pinch",h="tap",d="doubletap",f="longtap",g="horizontal",w="vertical",v="all",T=10,b="start",y="move",E="end",m="cancel",x="ontouchstart"in window,S=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled&&!x,O=(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&!x,M="TouchSwipe";e.fn.swipe=function(t){var i=e(this),r=i.data(M);if(r&&"string"==typeof t){if(r[t])return r[t].apply(r,Array.prototype.slice.call(arguments,1));e.error("Method "+t+" does not exist on jQuery.swipe")}else if(r&&"object"==typeof t)r.option.apply(r,arguments);else if(!(r||"object"!=typeof t&&t))return function(t){return!t||void 0!==t.allowPageScroll||void 0===t.swipe&&void 0===t.swipeStatus||(t.allowPageScroll=u),void 0!==t.click&&void 0===t.tap&&(t.tap=t.click),t||(t={}),t=e.extend({},e.fn.swipe.defaults,t),this.each(function(){var i=e(this),r=i.data(M);r||(r=new n(this,t),i.data(M,r))})}.apply(this,arguments);return i},e.fn.swipe.version="1.6.18",e.fn.swipe.defaults={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:!0,triggerOnTouchLeave:!1,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:".noSwipe",preventDefaultEvents:!0},e.fn.swipe.phases={PHASE_START:b,PHASE_MOVE:y,PHASE_END:E,PHASE_CANCEL:m},e.fn.swipe.directions={LEFT:t,RIGHT:i,UP:r,DOWN:l,IN:o,OUT:a},e.fn.swipe.pageScroll={NONE:u,HORIZONTAL:g,VERTICAL:w,AUTO:s},e.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:v}});
    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], factory) : factory("undefined" != typeof module && module.exports ? require("jquery") : jQuery)
}(function($) {
    "use strict";

    function init(options) {
        return !options || void 0 !== options.allowPageScroll || void 0 === options.swipe && void 0 === options.swipeStatus || (options.allowPageScroll = NONE), void 0 !== options.click && void 0 === options.tap && (options.tap = options.click), options || (options = {}), options = $.extend({}, $.fn.swipe.defaults, options), this.each(function() {
            var $this = $(this),
                plugin = $this.data(PLUGIN_NS);
            plugin || (plugin = new TouchSwipe(this, options), $this.data(PLUGIN_NS, plugin))
        })
    }

    function TouchSwipe(element, options) {
        function touchStart(jqEvent) {
            if (!(getTouchInProgress() || $(jqEvent.target).closest(options.excludedElements, $element).length > 0)) {
                var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
                if (!event.pointerType || "mouse" != event.pointerType || 0 != options.fallbackToMouseEvents) {
                    var ret, touches = event.touches,
                        evt = touches ? touches[0] : event;
                    return phase = PHASE_START, touches ? fingerCount = touches.length : options.preventDefaultEvents !== !1 && jqEvent.preventDefault(), distance = 0, direction = null, currentDirection = null, pinchDirection = null, duration = 0, startTouchesDistance = 0, endTouchesDistance = 0, pinchZoom = 1, pinchDistance = 0, maximumsMap = createMaximumsData(), cancelMultiFingerRelease(), createFingerData(0, evt), !touches || fingerCount === options.fingers || options.fingers === ALL_FINGERS || hasPinches() ? (startTime = getTimeStamp(), 2 == fingerCount && (createFingerData(1, touches[1]), startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start)), (options.swipeStatus || options.pinchStatus) && (ret = triggerHandler(event, phase))) : ret = !1, ret === !1 ? (phase = PHASE_CANCEL, triggerHandler(event, phase), ret) : (options.hold && (holdTimeout = setTimeout($.proxy(function() {
                        $element.trigger("hold", [event.target]), options.hold && (ret = options.hold.call($element, event, event.target))
                    }, this), options.longTapThreshold)), setTouchInProgress(!0), null)
                }
            }
        }

        function touchMove(jqEvent) {
            var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
            if (phase !== PHASE_END && phase !== PHASE_CANCEL && !inMultiFingerRelease()) {
                var ret, touches = event.touches,
                    evt = touches ? touches[0] : event,
                    currentFinger = updateFingerData(evt);
                if (endTime = getTimeStamp(), touches && (fingerCount = touches.length), options.hold && clearTimeout(holdTimeout), phase = PHASE_MOVE, 2 == fingerCount && (0 == startTouchesDistance ? (createFingerData(1, touches[1]), startTouchesDistance = endTouchesDistance = calculateTouchesDistance(fingerData[0].start, fingerData[1].start)) : (updateFingerData(touches[1]), endTouchesDistance = calculateTouchesDistance(fingerData[0].end, fingerData[1].end), pinchDirection = calculatePinchDirection(fingerData[0].end, fingerData[1].end)), pinchZoom = calculatePinchZoom(startTouchesDistance, endTouchesDistance), pinchDistance = Math.abs(startTouchesDistance - endTouchesDistance)), fingerCount === options.fingers || options.fingers === ALL_FINGERS || !touches || hasPinches()) {
                    if (direction = calculateDirection(currentFinger.start, currentFinger.end), currentDirection = calculateDirection(currentFinger.last, currentFinger.end), validateDefaultEvent(jqEvent, currentDirection), distance = calculateDistance(currentFinger.start, currentFinger.end), duration = calculateDuration(), setMaxDistance(direction, distance), ret = triggerHandler(event, phase), !options.triggerOnTouchEnd || options.triggerOnTouchLeave) {
                        var inBounds = !0;
                        if (options.triggerOnTouchLeave) {
                            var bounds = getbounds(this);
                            inBounds = isInBounds(currentFinger.end, bounds)
                        }!options.triggerOnTouchEnd && inBounds ? phase = getNextPhase(PHASE_MOVE) : options.triggerOnTouchLeave && !inBounds && (phase = getNextPhase(PHASE_END)), phase != PHASE_CANCEL && phase != PHASE_END || triggerHandler(event, phase)
                    }
                } else phase = PHASE_CANCEL, triggerHandler(event, phase);
                ret === !1 && (phase = PHASE_CANCEL, triggerHandler(event, phase))
            }
        }

        function touchEnd(jqEvent) {
            var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent,
                touches = event.touches;
            if (touches) {
                if (touches.length && !inMultiFingerRelease()) return startMultiFingerRelease(event), !0;
                if (touches.length && inMultiFingerRelease()) return !0
            }
            return inMultiFingerRelease() && (fingerCount = fingerCountAtRelease), endTime = getTimeStamp(), duration = calculateDuration(), didSwipeBackToCancel() || !validateSwipeDistance() ? (phase = PHASE_CANCEL, triggerHandler(event, phase)) : options.triggerOnTouchEnd || options.triggerOnTouchEnd === !1 && phase === PHASE_MOVE ? (options.preventDefaultEvents !== !1 && jqEvent.cancelable !== !1 && jqEvent.preventDefault(), phase = PHASE_END, triggerHandler(event, phase)) : !options.triggerOnTouchEnd && hasTap() ? (phase = PHASE_END, triggerHandlerForGesture(event, phase, TAP)) : phase === PHASE_MOVE && (phase = PHASE_CANCEL, triggerHandler(event, phase)), setTouchInProgress(!1), null
        }

        function touchCancel() {
            fingerCount = 0, endTime = 0, startTime = 0, startTouchesDistance = 0, endTouchesDistance = 0, pinchZoom = 1, cancelMultiFingerRelease(), setTouchInProgress(!1)
        }

        function touchLeave(jqEvent) {
            var event = jqEvent.originalEvent ? jqEvent.originalEvent : jqEvent;
            options.triggerOnTouchLeave && (phase = getNextPhase(PHASE_END), triggerHandler(event, phase))
        }

        function removeListeners() {
            $element.unbind(START_EV, touchStart), $element.unbind(CANCEL_EV, touchCancel), $element.unbind(MOVE_EV, touchMove), $element.unbind(END_EV, touchEnd), LEAVE_EV && $element.unbind(LEAVE_EV, touchLeave), setTouchInProgress(!1)
        }

        function getNextPhase(currentPhase) {
            var nextPhase = currentPhase,
                validTime = validateSwipeTime(),
                validDistance = validateSwipeDistance(),
                didCancel = didSwipeBackToCancel();
            return !validTime || didCancel ? nextPhase = PHASE_CANCEL : !validDistance || currentPhase != PHASE_MOVE || options.triggerOnTouchEnd && !options.triggerOnTouchLeave ? !validDistance && currentPhase == PHASE_END && options.triggerOnTouchLeave && (nextPhase = PHASE_CANCEL) : nextPhase = PHASE_END, nextPhase
        }

        function triggerHandler(event, phase) {
            var ret, touches = event.touches;
            return (didSwipe() || hasSwipes()) && (ret = triggerHandlerForGesture(event, phase, SWIPE)), (didPinch() || hasPinches()) && ret !== !1 && (ret = triggerHandlerForGesture(event, phase, PINCH)), didDoubleTap() && ret !== !1 ? ret = triggerHandlerForGesture(event, phase, DOUBLE_TAP) : didLongTap() && ret !== !1 ? ret = triggerHandlerForGesture(event, phase, LONG_TAP) : didTap() && ret !== !1 && (ret = triggerHandlerForGesture(event, phase, TAP)), phase === PHASE_CANCEL && touchCancel(event), phase === PHASE_END && (touches ? touches.length || touchCancel(event) : touchCancel(event)), ret
        }

        function triggerHandlerForGesture(event, phase, gesture) {
            var ret;
            if (gesture == SWIPE) {
                if ($element.trigger("swipeStatus", [phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData, currentDirection]), options.swipeStatus && (ret = options.swipeStatus.call($element, event, phase, direction || null, distance || 0, duration || 0, fingerCount, fingerData, currentDirection), ret === !1)) return !1;
                if (phase == PHASE_END && validateSwipe()) {
                    if (clearTimeout(singleTapTimeout), clearTimeout(holdTimeout), $element.trigger("swipe", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipe && (ret = options.swipe.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection), ret === !1)) return !1;
                    switch (direction) {
                        case LEFT:
                            $element.trigger("swipeLeft", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeLeft && (ret = options.swipeLeft.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection));
                            break;
                        case RIGHT:
                            $element.trigger("swipeRight", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeRight && (ret = options.swipeRight.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection));
                            break;
                        case UP:
                            $element.trigger("swipeUp", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeUp && (ret = options.swipeUp.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection));
                            break;
                        case DOWN:
                            $element.trigger("swipeDown", [direction, distance, duration, fingerCount, fingerData, currentDirection]), options.swipeDown && (ret = options.swipeDown.call($element, event, direction, distance, duration, fingerCount, fingerData, currentDirection))
                    }
                }
            }
            if (gesture == PINCH) {
                if ($element.trigger("pinchStatus", [phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]), options.pinchStatus && (ret = options.pinchStatus.call($element, event, phase, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData), ret === !1)) return !1;
                if (phase == PHASE_END && validatePinch()) switch (pinchDirection) {
                    case IN:
                        $element.trigger("pinchIn", [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]), options.pinchIn && (ret = options.pinchIn.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData));
                        break;
                    case OUT:
                        $element.trigger("pinchOut", [pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData]), options.pinchOut && (ret = options.pinchOut.call($element, event, pinchDirection || null, pinchDistance || 0, duration || 0, fingerCount, pinchZoom, fingerData))
                }
            }
            return gesture == TAP ? phase !== PHASE_CANCEL && phase !== PHASE_END || (clearTimeout(singleTapTimeout), clearTimeout(holdTimeout), hasDoubleTap() && !inDoubleTap() ? (doubleTapStartTime = getTimeStamp(), singleTapTimeout = setTimeout($.proxy(function() {
                doubleTapStartTime = null, $element.trigger("tap", [event.target]), options.tap && (ret = options.tap.call($element, event, event.target))
            }, this), options.doubleTapThreshold)) : (doubleTapStartTime = null, $element.trigger("tap", [event.target]), options.tap && (ret = options.tap.call($element, event, event.target)))) : gesture == DOUBLE_TAP ? phase !== PHASE_CANCEL && phase !== PHASE_END || (clearTimeout(singleTapTimeout), clearTimeout(holdTimeout), doubleTapStartTime = null, $element.trigger("doubletap", [event.target]), options.doubleTap && (ret = options.doubleTap.call($element, event, event.target))) : gesture == LONG_TAP && (phase !== PHASE_CANCEL && phase !== PHASE_END || (clearTimeout(singleTapTimeout), doubleTapStartTime = null, $element.trigger("longtap", [event.target]), options.longTap && (ret = options.longTap.call($element, event, event.target)))), ret
        }

        function validateSwipeDistance() {
            var valid = !0;
            return null !== options.threshold && (valid = distance >= options.threshold), valid
        }

        function didSwipeBackToCancel() {
            var cancelled = !1;
            return null !== options.cancelThreshold && null !== direction && (cancelled = getMaxDistance(direction) - distance >= options.cancelThreshold), cancelled
        }

        function validatePinchDistance() {
            return null === options.pinchThreshold || pinchDistance >= options.pinchThreshold
        }

        function validateSwipeTime() {
            var result;
            return result = !options.maxTimeThreshold || !(duration >= options.maxTimeThreshold)
        }

        function validateDefaultEvent(jqEvent, direction) {
            if (options.preventDefaultEvents !== !1)
                if (options.allowPageScroll === NONE) jqEvent.preventDefault();
                else {
                    var auto = options.allowPageScroll === AUTO;
                    switch (direction) {
                        case LEFT:
                            (options.swipeLeft && auto || !auto && options.allowPageScroll != HORIZONTAL) && jqEvent.preventDefault();
                            break;
                        case RIGHT:
                            (options.swipeRight && auto || !auto && options.allowPageScroll != HORIZONTAL) && jqEvent.preventDefault();
                            break;
                        case UP:
                            (options.swipeUp && auto || !auto && options.allowPageScroll != VERTICAL) && jqEvent.preventDefault();
                            break;
                        case DOWN:
                            (options.swipeDown && auto || !auto && options.allowPageScroll != VERTICAL) && jqEvent.preventDefault();
                            break;
                        case NONE:
                    }
                }
        }

        function validatePinch() {
            var hasCorrectFingerCount = validateFingers(),
                hasEndPoint = validateEndPoint(),
                hasCorrectDistance = validatePinchDistance();
            return hasCorrectFingerCount && hasEndPoint && hasCorrectDistance
        }

        function hasPinches() {
            return !!(options.pinchStatus || options.pinchIn || options.pinchOut)
        }

        function didPinch() {
            return !(!validatePinch() || !hasPinches())
        }

        function validateSwipe() {
            var hasValidTime = validateSwipeTime(),
                hasValidDistance = validateSwipeDistance(),
                hasCorrectFingerCount = validateFingers(),
                hasEndPoint = validateEndPoint(),
                didCancel = didSwipeBackToCancel(),
                valid = !didCancel && hasEndPoint && hasCorrectFingerCount && hasValidDistance && hasValidTime;
            return valid
        }

        function hasSwipes() {
            return !!(options.swipe || options.swipeStatus || options.swipeLeft || options.swipeRight || options.swipeUp || options.swipeDown)
        }

        function didSwipe() {
            return !(!validateSwipe() || !hasSwipes())
        }

        function validateFingers() {
            return fingerCount === options.fingers || options.fingers === ALL_FINGERS || !SUPPORTS_TOUCH
        }

        function validateEndPoint() {
            return 0 !== fingerData[0].end.x
        }

        function hasTap() {
            return !!options.tap
        }

        function hasDoubleTap() {
            return !!options.doubleTap
        }

        function hasLongTap() {
            return !!options.longTap
        }

        function validateDoubleTap() {
            if (null == doubleTapStartTime) return !1;
            var now = getTimeStamp();
            return hasDoubleTap() && now - doubleTapStartTime <= options.doubleTapThreshold
        }

        function inDoubleTap() {
            return validateDoubleTap()
        }

        function validateTap() {
            return (1 === fingerCount || !SUPPORTS_TOUCH) && (isNaN(distance) || distance < options.threshold)
        }

        function validateLongTap() {
            return duration > options.longTapThreshold && distance < DOUBLE_TAP_THRESHOLD
        }

        function didTap() {
            return !(!validateTap() || !hasTap())
        }

        function didDoubleTap() {
            return !(!validateDoubleTap() || !hasDoubleTap())
        }

        function didLongTap() {
            return !(!validateLongTap() || !hasLongTap())
        }

        function startMultiFingerRelease(event) {
            previousTouchEndTime = getTimeStamp(), fingerCountAtRelease = event.touches.length + 1
        }

        function cancelMultiFingerRelease() {
            previousTouchEndTime = 0, fingerCountAtRelease = 0
        }

        function inMultiFingerRelease() {
            var withinThreshold = !1;
            if (previousTouchEndTime) {
                var diff = getTimeStamp() - previousTouchEndTime;
                diff <= options.fingerReleaseThreshold && (withinThreshold = !0)
            }
            return withinThreshold
        }

        function getTouchInProgress() {
            return !($element.data(PLUGIN_NS + "_intouch") !== !0)
        }

        function setTouchInProgress(val) {
            $element && (val === !0 ? ($element.bind(MOVE_EV, touchMove), $element.bind(END_EV, touchEnd), LEAVE_EV && $element.bind(LEAVE_EV, touchLeave)) : ($element.unbind(MOVE_EV, touchMove, !1), $element.unbind(END_EV, touchEnd, !1), LEAVE_EV && $element.unbind(LEAVE_EV, touchLeave, !1)), $element.data(PLUGIN_NS + "_intouch", val === !0))
        }

        function createFingerData(id, evt) {
            var f = {
                start: {
                    x: 0,
                    y: 0
                },
                last: {
                    x: 0,
                    y: 0
                },
                end: {
                    x: 0,
                    y: 0
                }
            };
            return f.start.x = f.last.x = f.end.x = evt.pageX || evt.clientX, f.start.y = f.last.y = f.end.y = evt.pageY || evt.clientY, fingerData[id] = f, f
        }

        function updateFingerData(evt) {
            var id = void 0 !== evt.identifier ? evt.identifier : 0,
                f = getFingerData(id);
            return null === f && (f = createFingerData(id, evt)), f.last.x = f.end.x, f.last.y = f.end.y, f.end.x = evt.pageX || evt.clientX, f.end.y = evt.pageY || evt.clientY, f
        }

        function getFingerData(id) {
            return fingerData[id] || null
        }

        function setMaxDistance(direction, distance) {
            direction != NONE && (distance = Math.max(distance, getMaxDistance(direction)), maximumsMap[direction].distance = distance)
        }

        function getMaxDistance(direction) {
            if (maximumsMap[direction]) return maximumsMap[direction].distance
        }

        function createMaximumsData() {
            var maxData = {};
            return maxData[LEFT] = createMaximumVO(LEFT), maxData[RIGHT] = createMaximumVO(RIGHT), maxData[UP] = createMaximumVO(UP), maxData[DOWN] = createMaximumVO(DOWN), maxData
        }

        function createMaximumVO(dir) {
            return {
                direction: dir,
                distance: 0
            }
        }

        function calculateDuration() {
            return endTime - startTime
        }

        function calculateTouchesDistance(startPoint, endPoint) {
            var diffX = Math.abs(startPoint.x - endPoint.x),
                diffY = Math.abs(startPoint.y - endPoint.y);
            return Math.round(Math.sqrt(diffX * diffX + diffY * diffY))
        }

        function calculatePinchZoom(startDistance, endDistance) {
            var percent = endDistance / startDistance * 1;
            return percent.toFixed(2)
        }

        function calculatePinchDirection() {
            return pinchZoom < 1 ? OUT : IN
        }

        function calculateDistance(startPoint, endPoint) {
            return Math.round(Math.sqrt(Math.pow(endPoint.x - startPoint.x, 2) + Math.pow(endPoint.y - startPoint.y, 2)))
        }

        function calculateAngle(startPoint, endPoint) {
            var x = startPoint.x - endPoint.x,
                y = endPoint.y - startPoint.y,
                r = Math.atan2(y, x),
                angle = Math.round(180 * r / Math.PI);
            return angle < 0 && (angle = 360 - Math.abs(angle)), angle
        }

        function calculateDirection(startPoint, endPoint) {
            if (comparePoints(startPoint, endPoint)) return NONE;
            var angle = calculateAngle(startPoint, endPoint);
            return angle <= 45 && angle >= 0 ? LEFT : angle <= 360 && angle >= 315 ? LEFT : angle >= 135 && angle <= 225 ? RIGHT : angle > 45 && angle < 135 ? DOWN : UP
        }

        function getTimeStamp() {
            var now = new Date;
            return now.getTime()
        }

        function getbounds(el) {
            el = $(el);
            var offset = el.offset(),
                bounds = {
                    left: offset.left,
                    right: offset.left + el.outerWidth(),
                    top: offset.top,
                    bottom: offset.top + el.outerHeight()
                };
            return bounds
        }

        function isInBounds(point, bounds) {
            return point.x > bounds.left && point.x < bounds.right && point.y > bounds.top && point.y < bounds.bottom
        }

        function comparePoints(pointA, pointB) {
            return pointA.x == pointB.x && pointA.y == pointB.y
        }
        var options = $.extend({}, options),
            useTouchEvents = SUPPORTS_TOUCH || SUPPORTS_POINTER || !options.fallbackToMouseEvents,
            START_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
            MOVE_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
            END_EV = useTouchEvents ? SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
            LEAVE_EV = useTouchEvents ? SUPPORTS_POINTER ? "mouseleave" : null : "mouseleave",
            CANCEL_EV = SUPPORTS_POINTER ? SUPPORTS_POINTER_IE10 ? "MSPointerCancel" : "pointercancel" : "touchcancel",
            distance = 0,
            direction = null,
            currentDirection = null,
            duration = 0,
            startTouchesDistance = 0,
            endTouchesDistance = 0,
            pinchZoom = 1,
            pinchDistance = 0,
            pinchDirection = 0,
            maximumsMap = null,
            $element = $(element),
            phase = "start",
            fingerCount = 0,
            fingerData = {},
            startTime = 0,
            endTime = 0,
            previousTouchEndTime = 0,
            fingerCountAtRelease = 0,
            doubleTapStartTime = 0,
            singleTapTimeout = null,
            holdTimeout = null;
        try {
            $element.bind(START_EV, touchStart), $element.bind(CANCEL_EV, touchCancel)
        } catch (e) {
            $.error("events not supported " + START_EV + "," + CANCEL_EV + " on jQuery.swipe")
        }
        this.enable = function() {
            return this.disable(), $element.bind(START_EV, touchStart), $element.bind(CANCEL_EV, touchCancel), $element
        }, this.disable = function() {
            return removeListeners(), $element
        }, this.destroy = function() {
            removeListeners(), $element.data(PLUGIN_NS, null), $element = null
        }, this.option = function(property, value) {
            if ("object" == typeof property) options = $.extend(options, property);
            else if (void 0 !== options[property]) {
                if (void 0 === value) return options[property];
                options[property] = value
            } else {
                if (!property) return options;
                $.error("Option " + property + " does not exist on jQuery.swipe.options")
            }
            return null
        }
    }
    var VERSION = "1.6.18",
        LEFT = "left",
        RIGHT = "right",
        UP = "up",
        DOWN = "down",
        IN = "in",
        OUT = "out",
        NONE = "none",
        AUTO = "auto",
        SWIPE = "swipe",
        PINCH = "pinch",
        TAP = "tap",
        DOUBLE_TAP = "doubletap",
        LONG_TAP = "longtap",
        HORIZONTAL = "horizontal",
        VERTICAL = "vertical",
        ALL_FINGERS = "all",
        DOUBLE_TAP_THRESHOLD = 10,
        PHASE_START = "start",
        PHASE_MOVE = "move",
        PHASE_END = "end",
        PHASE_CANCEL = "cancel",
        SUPPORTS_TOUCH = "ontouchstart" in window,
        SUPPORTS_POINTER_IE10 = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !SUPPORTS_TOUCH,
        SUPPORTS_POINTER = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !SUPPORTS_TOUCH,
        PLUGIN_NS = "TouchSwipe",
        defaults = {
            fingers: 1,
            threshold: 75,
            cancelThreshold: null,
            pinchThreshold: 20,
            maxTimeThreshold: null,
            fingerReleaseThreshold: 250,
            longTapThreshold: 500,
            doubleTapThreshold: 200,
            swipe: null,
            swipeLeft: null,
            swipeRight: null,
            swipeUp: null,
            swipeDown: null,
            swipeStatus: null,
            pinchIn: null,
            pinchOut: null,
            pinchStatus: null,
            click: null,
            tap: null,
            doubleTap: null,
            longTap: null,
            hold: null,
            triggerOnTouchEnd: !0,
            triggerOnTouchLeave: !1,
            allowPageScroll: "auto",
            fallbackToMouseEvents: !0,
            excludedElements: ".noSwipe",
            preventDefaultEvents: !0
        };
    $.fn.swipe = function(method) {
        var $this = $(this),
            plugin = $this.data(PLUGIN_NS);
        if (plugin && "string" == typeof method) {
            if (plugin[method]) return plugin[method].apply(plugin, Array.prototype.slice.call(arguments, 1));
            $.error("Method " + method + " does not exist on jQuery.swipe")
        } else if (plugin && "object" == typeof method) plugin.option.apply(plugin, arguments);
        else if (!(plugin || "object" != typeof method && method)) return init.apply(this, arguments);
        return $this
    }, $.fn.swipe.version = VERSION, $.fn.swipe.defaults = defaults, $.fn.swipe.phases = {
        PHASE_START: PHASE_START,
        PHASE_MOVE: PHASE_MOVE,
        PHASE_END: PHASE_END,
        PHASE_CANCEL: PHASE_CANCEL
    }, $.fn.swipe.directions = {
        LEFT: LEFT,
        RIGHT: RIGHT,
        UP: UP,
        DOWN: DOWN,
        IN: IN,
        OUT: OUT
    }, $.fn.swipe.pageScroll = {
        NONE: NONE,
        HORIZONTAL: HORIZONTAL,
        VERTICAL: VERTICAL,
        AUTO: AUTO
    }, $.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        FOUR: 4,
        FIVE: 5,
        ALL: ALL_FINGERS
    }
});