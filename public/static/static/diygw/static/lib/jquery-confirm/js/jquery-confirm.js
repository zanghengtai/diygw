!function(t){"use strict";"object"==typeof exports?module.exports=t(window.jQuery):"function"==typeof define&&define.amd?define(["jquery"],t):window.jQuery&&!window.jQuery.fn.bootstrapValidator&&t(window.jQuery)}(function(t){"use strict";var n,i;t.fn.confirm=function(i,e){return"undefined"==typeof i&&(i={}),"string"==typeof i&&(i={content:i,title:!!e&&e}),t(this).each(function(){var e=t(this);e.on("click",function(s){s.preventDefault();var o=t.extend({},i);if(e.attr("data-title")&&(o.title=e.attr("data-title")),e.attr("data-content")&&(o.content=e.attr("data-content")),"undefined"==typeof o.buttons&&(o.buttons={}),o.$target=e,e.attr("href")&&0==Object.keys(o.buttons).length){var a=t.extend(!0,{},n.pluginDefaults.defaultButtons,(n.defaults||{}).defaultButtons||{}),c=Object.keys(a)[0];o.buttons=a,o.buttons[c].action=function(){location.href=e.attr("href")}}o.closeIcon=!1,t.confirm(o)})}),t(this)},t.confirm=function(i,e){if("undefined"==typeof i&&(i={}),"string"==typeof i&&(i={content:i,title:!!e&&e}),"object"!=typeof i.buttons&&(i.buttons={}),0==Object.keys(i.buttons).length){var s=t.extend(!0,{},n.pluginDefaults.defaultButtons,(n.defaults||{}).defaultButtons||{});i.buttons=s}return n(i)},t.alert=function(i,e){if("undefined"==typeof i&&(i={}),"string"==typeof i&&(i={content:i,title:!!e&&e}),"object"!=typeof i.buttons&&(i.buttons={}),0==Object.keys(i.buttons).length){var s=t.extend(!0,{},n.pluginDefaults.defaultButtons,(n.defaults||{}).defaultButtons||{}),o=Object.keys(s)[0];i.buttons[o]=s[o]}return n(i)},t.dialog=function(t,i){return"undefined"==typeof t&&(t={}),"string"==typeof t&&(t={content:t,title:!!i&&i,closeIcon:function(){}}),t.buttons={},"undefined"==typeof t.closeIcon&&(t.closeIcon=function(){}),t.confirmKeys=[13],n(t)},n=function(e){"undefined"==typeof e&&(e={});var s=t.extend(!0,{},n.pluginDefaults);n.defaults&&(s=t.extend(!0,s,n.defaults)),s=t.extend(!0,{},s,e);var o=new i(s);return n.instances.push(o),o},i=function(n){t.extend(this,n),this._init()},i.prototype={_init:function(){var n=this;this._lastFocused=t("body").find(":focus"),this._id=Math.round(99999*Math.random()),setTimeout(function(){n.open()},0)},_buildHTML:function(){var n=this;this._parseAnimation(this.animation,"o"),this._parseAnimation(this.closeAnimation,"c"),this._parseBgDismissAnimation(this.backgroundDismissAnimation),this._parseColumnClass(this.columnClass),this._parseTheme(this.theme),this._parseType(this.type);var i=t(this.template);i.find(".jconfirm-box").addClass(this.animationParsed).addClass(this.backgroundDismissAnimationParsed).addClass(this.typeParsed),this.typeAnimated&&i.find(".jconfirm-box").addClass("jconfirm-type-animated"),this.useBootstrap?(i.find(".jc-bs3-row").addClass(this.bootstrapClasses.row),i.find(".jconfirm-box-container").addClass(this.columnClassParsed),this.containerFluid?i.find(".jc-bs3-container").addClass(this.bootstrapClasses.containerFluid):i.find(".jc-bs3-container").addClass(this.bootstrapClasses.container)):i.find(".jconfirm-box").css("width",this.boxWidth),this.titleClass&&i.find(".jconfirm-title-c").addClass(this.titleClass),i.addClass(this.themeParsed);var e="jconfirm-box"+this._id;i.find(".jconfirm-box").attr("aria-labelledby",e).attr("tabindex",-1),i.find(".jconfirm-content").attr("id",e),null!=this.bgOpacity&&i.find(".jconfirm-bg").css("opacity",this.bgOpacity),this.rtl&&i.addClass("jconfirm-rtl"),this.$el=i.appendTo(this.container),this.$jconfirmBoxContainer=this.$el.find(".jconfirm-box-container"),this.$jconfirmBox=this.$body=this.$el.find(".jconfirm-box"),this.$jconfirmBg=this.$el.find(".jconfirm-bg"),this.$title=this.$el.find(".jconfirm-title"),this.$content=this.$el.find("div.jconfirm-content"),this.$contentPane=this.$el.find(".jconfirm-content-pane"),this.$icon=this.$el.find(".jconfirm-icon-c"),this.$closeIcon=this.$el.find(".jconfirm-closeIcon"),this.$btnc=this.$el.find(".jconfirm-buttons"),this.$scrollPane=this.$el.find(".jconfirm-scrollpane"),this._contentReady=t.Deferred(),this._modalReady=t.Deferred(),this.setTitle(),this.setIcon(),this._setButtons(),this._parseContent(),this.isAjax&&this.showLoading(!1),t.when(this._contentReady,this._modalReady).then(function(){n.isAjaxLoading?setTimeout(function(){n.isAjaxLoading=!1,n.setContent(),n.setTitle(),n.setIcon(),setTimeout(function(){n.hideLoading(!1)},100),"function"==typeof n.onContentReady&&n.onContentReady()},50):(n.setContent(),n.setTitle(),n.setIcon(),"function"==typeof n.onContentReady&&n.onContentReady()),n.autoClose&&n._startCountDown()}),n._contentHash=this._hash(n.$content.html()),n._contentHeight=this.$content.height(),this._watchContent(),this.setDialogCenter(),"none"==this.animation&&(this.animationSpeed=1,this.animationBounce=1),this.$body.css(this._getCSS(this.animationSpeed,this.animationBounce)),this.$contentPane.css(this._getCSS(this.animationSpeed,1)),this.$jconfirmBg.css(this._getCSS(this.animationSpeed,1))},_typePrefix:"jconfirm-type-",typeParsed:"",_parseType:function(t){this.typeParsed=this._typePrefix+t},setType:function(t){var n=this.typeParsed;this._parseType(t),this.$jconfirmBox.removeClass(n).addClass(this.typeParsed)},themeParsed:"",_themePrefix:"jconfirm-",setTheme:function(t){var n=this.theme;this.theme=t||this.theme,this._parseTheme(this.theme),n&&this.$el.removeClass(n),this.$el.addClass(this.themeParsed),this.theme=t},_parseTheme:function(n){var i=this;n=n.split(","),t.each(n,function(e,s){s.indexOf(i._themePrefix)==-1&&(n[e]=i._themePrefix+t.trim(s))}),this.themeParsed=n.join(" ").toLowerCase()},backgroundDismissAnimationParsed:"",_bgDismissPrefix:"jconfirm-hilight-",_parseBgDismissAnimation:function(n){var i=n.split(","),e=this;t.each(i,function(n,s){s.indexOf(e._bgDismissPrefix)==-1&&(i[n]=e._bgDismissPrefix+t.trim(s))}),this.backgroundDismissAnimationParsed=i.join(" ").toLowerCase()},animationParsed:"",closeAnimationParsed:"",_animationPrefix:"jconfirm-animation-",setAnimation:function(t){this.animation=t||this.animation,this._parseAnimation(this.animation,"o")},_parseAnimation:function(n,i){i=i||"o";var e=n.split(","),s=this;t.each(e,function(n,i){i.indexOf(s._animationPrefix)==-1&&(e[n]=s._animationPrefix+t.trim(i))});var o=e.join(" ").toLowerCase();return"o"==i?this.animationParsed=o:this.closeAnimationParsed=o,o},setCloseAnimation:function(t){this.closeAnimation=t||this.closeAnimation,this._parseAnimation(this.closeAnimation,"c")},setAnimationSpeed:function(t){this.animationSpeed=t||this.animationSpeed},columnClassParsed:"",setColumnClass:function(t){this.columnClass=t||this.columnClass,this._parseColumnClass(this.columnClass),this.$jconfirmBoxContainer.addClass(this.columnClassParsed)},_parseColumnClass:function(t){t=t.toLowerCase();var n;switch(t){case"xl":case"xlarge":n="col-md-12";break;case"l":case"large":n="col-md-8 col-md-offset-2";break;case"m":case"medium":n="col-md-6 col-md-offset-3";break;case"s":case"small":n="col-md-4 col-md-offset-4";break;case"xs":case"xsmall":n="col-md-2 col-md-offset-5";break;default:n=t}this.columnClassParsed=n},_hash:function(t){return btoa(encodeURIComponent(t))},_watchContent:function(){var t=this;this._timer&&clearInterval(this._timer),this._timer=setInterval(function(){var n=t._hash(t.$content.html()),i=t.$content.height();t._contentHash==n&&t._contentHeight==i||(t._contentHash=n,t._contentHeight=i,t.setDialogCenter(),t._imagesLoaded())},this.watchInterval)},_hilightAnimating:!1,_hiLightModal:function(){var t=this;if(!this._hilightAnimating){t.$body.addClass("hilight");var n=2;this._hilightAnimating=!0,setTimeout(function(){t._hilightAnimating=!1,t.$body.removeClass("hilight")},1e3*n)}},_bindEvents:function(){var n=this;this.boxClicked=!1,this.$scrollPane.click(function(t){if(!n.boxClicked){var i,e=!1,s=!1;if(i="function"==typeof n.backgroundDismiss?n.backgroundDismiss():n.backgroundDismiss,"string"==typeof i&&"undefined"!=typeof n.buttons[i]?(e=i,s=!1):s="undefined"==typeof i||1==!!i,e){var o=n.buttons[e].action.apply(n);s="undefined"==typeof o||!!o}s?n.close():n._hiLightModal()}n.boxClicked=!1}),this.$jconfirmBox.click(function(t){n.boxClicked=!0}),setTimeout(function(){t(window).on("keyup."+n._id,function(t){n.reactOnKey(t)})},10),t(window).on("resize."+this._id,function(){n.setDialogCenter(!0)})},_cubic_bezier:"0.36, 0.55, 0.19",_getCSS:function(t,n){return{"-webkit-transition-duration":t/1e3+"s","transition-duration":t/1e3+"s","-webkit-transition-timing-function":"cubic-bezier("+this._cubic_bezier+", "+n+")","transition-timing-function":"cubic-bezier("+this._cubic_bezier+", "+n+")"}},_imagesLoaded:function(){var n=this;n.imageLoadInterval&&clearInterval(n.imageLoadInterval),t.each(this.$content.find("img:not(.loaded)"),function(i,e){n.imageLoadInterval=setInterval(function(){var i=t(e).css("height");"0px"!==i&&(t(e).addClass("loaded"),clearInterval(n.imageLoadInterval),n.setDialogCenter())},40)})},_setButtons:function(){var n=this,i=0;if("object"!=typeof this.buttons&&(this.buttons={}),t.each(this.buttons,function(e,s){i+=1,"function"==typeof s&&(n.buttons[e]=s={action:s}),n.buttons[e].text=s.text||e,n.buttons[e].btnClass=s.btnClass||"btn-default",n.buttons[e].action=s.action||function(){},n.buttons[e].keys=s.keys||[],t.each(n.buttons[e].keys,function(t,i){n.buttons[e].keys[t]=i.toLowerCase()});var o=t('<button type="button" class="btn '+n.buttons[e].btnClass+'">'+n.buttons[e].text+"</button>").click(function(t){t.preventDefault();var i=n.buttons[e].action.apply(n);n.onAction(e),n._stopCountDown(),("undefined"==typeof i||i)&&n.close()});n.buttons[e].el=o,n.buttons[e].setText=function(t){o.html(t)},n.buttons[e].addClass=function(t){o.addClass(t)},n.buttons[e].removeClass=function(t){o.removeClass(t)},n.buttons[e].disable=function(){o.prop("disabled",!0)},n.buttons[e].enable=function(){o.prop("disabled",!1)},n.buttons[e].show=function(){o.css("display",""),n.setDialogCenter()},n.buttons[e].hide=function(){o.css("display","none"),n.setDialogCenter()},n["$_"+e]=n["$$"+e]=o,n.$btnc.append(o)}),0===i&&this.$btnc.hide(),null===this.closeIcon&&0===i&&(this.closeIcon=!0),this.closeIcon){if(this.closeIconClass){var e='<i class="'+this.closeIconClass+'"></i>';this.$closeIcon.html(e)}this.$closeIcon.click(function(t){t.preventDefault();var i,e=!1,s=!1;if(i="function"==typeof n.closeIcon?n.closeIcon():n.closeIcon,"string"==typeof i&&"undefined"!=typeof n.buttons[i]?(e=i,s=!1):s="undefined"==typeof i||1==!!i,e){var o=n.buttons[e].action.apply(n);s="undefined"==typeof o||!!o}s&&n.close()}),this.$closeIcon.show()}else this.$closeIcon.hide()},setTitle:function(t,n){if(n=n||!1,"undefined"!=typeof t)if("string"==typeof t)this.title=t;else if("function"==typeof t){"function"==typeof t.promise&&console.error("Promise was returned from title function, this is not supported.");var i=t();"string"==typeof i?this.title=i:this.title=!1}else this.title=!1;this.isAjax&&!n||this.$title.html(this.title||"")},setIcon:function(t,n){if(n=n||!1,"undefined"!=typeof t)if("string"==typeof t)this.icon=t;else if("function"==typeof t){var i=t();"string"==typeof i?this.icon=i:this.icon=!1}else this.icon=!1;this.isAjax&&!n||this.$icon.html(this.icon?'<i class="'+this.icon+'"></i>':"")},setContentPrepend:function(t,n){this.contentParsed=t+this.contentParsed,this.isAjaxLoading&&!n||this.$content.prepend(t)},setContentAppend:function(t,n){this.contentParsed=this.contentParsed+t,this.isAjaxLoading&&!n||this.$content.append(t)},setContent:function(t,n){n=n||!1;var i=this;this.contentParsed="undefined"==typeof t?this.contentParsed:t,this.isAjaxLoading&&!n||(this.$content.html(this.contentParsed),this.setDialogCenter(),setTimeout(function(){i.$body.find("input[autofocus]:visible:first").focus()},100))},loadingSpinner:!1,showLoading:function(t){this.loadingSpinner=!0,this.$jconfirmBox.addClass("loading"),t&&this.$btnc.find("button").prop("disabled",!0),this.setDialogCenter()},hideLoading:function(t){this.loadingSpinner=!1,this.$jconfirmBox.removeClass("loading"),t&&this.$btnc.find("button").prop("disabled",!1),this.setDialogCenter()},ajaxResponse:!1,contentParsed:"",isAjax:!1,isAjaxLoading:!1,_parseContent:function(){var n=this,i="&nbsp;";if("function"==typeof this.content){var e=this.content.apply(this);"string"==typeof e?this.content=e:"object"==typeof e&&"function"==typeof e.always?(this.isAjax=!0,this.isAjaxLoading=!0,e.always(function(t,i,e){n.ajaxResponse={data:t,status:i,xhr:e},n._contentReady.resolve(t,i,e),"function"==typeof n.contentLoaded&&n.contentLoaded(t,i,e)}),this.content=i):this.content=i}if("string"==typeof this.content&&"url:"===this.content.substr(0,4).toLowerCase()){this.isAjax=!0,this.isAjaxLoading=!0;var s=this.content.substring(4,this.content.length);t.get(s).done(function(t){n.contentParsed=t}).always(function(t,i,e){n.ajaxResponse={data:t,status:i,xhr:e},n._contentReady.resolve(t,i,e),"function"==typeof n.contentLoaded&&n.contentLoaded(t,i,e)})}this.content||(this.content=i),this.isAjax||(this.contentParsed=this.content,this.setContent(this.contentParsed),n._contentReady.resolve())},_stopCountDown:function(){clearInterval(this.autoCloseInterval),this.$cd&&this.$cd.remove()},_startCountDown:function(){var n=this,i=this.autoClose.split("|");if(2!==i.length)return console.error("Invalid option for autoClose. example 'close|10000'"),!1;var e=i[0],s=parseInt(i[1]);if("undefined"==typeof this.buttons[e])return console.error("Invalid button key '"+e+"' for autoClose"),!1;var o=s/1e3;this.$cd=t('<span class="countdown"> ('+o+")</span>").appendTo(this["$_"+e]),this.autoCloseInterval=setInterval(function(){n.$cd.html(" ("+(o-=1)+") "),0===o&&(n["$$"+e].trigger("click"),n._stopCountDown())},1e3)},_getKey:function(t){switch(t){case 192:return"tilde";case 13:return"enter";case 16:return"shift";case 9:return"tab";case 20:return"capslock";case 17:return"ctrl";case 91:return"win";case 18:return"alt";case 27:return"esc";case 32:return"space"}var n=String.fromCharCode(t);return!!/^[A-z0-9]+$/.test(n)&&n.toLowerCase()},reactOnKey:function(n){var i=this,e=t(".jconfirm");if(e.eq(e.length-1)[0]!==this.$el[0])return!1;var s=n.which;if(this.$content.find(":input").is(":focus")&&/13|32/.test(s))return!1;var o=this._getKey(s);if("esc"===o&&this.escapeKey)if(this.escapeKey===!0)this.$scrollPane.trigger("click");else if("string"==typeof this.escapeKey||"function"==typeof this.escapeKey){var a;a="function"==typeof this.escapeKey?this.escapeKey():this.escapeKey,a&&("undefined"==typeof this.buttons[a]?console.warn("Invalid escapeKey, no buttons found with key "+a):this["$_"+a].trigger("click"))}t.each(this.buttons,function(t,n){n.keys.indexOf(o)!=-1&&i["$_"+t].trigger("click")})},setDialogCenter:function(){var n,i,e;n=0,i=0,"none"!=this.$contentPane.css("display")&&(n=this.$content.outerHeight()||0,i=this.$contentPane.height()||0);var s=this.$content.children();if(0!=s.length){var o=parseInt(s.eq(0).css("margin-top"));o&&(n+=o)}0==i&&(i=n);var a,c=t(window).height();a=this.$body.outerHeight()-i+n;var r=(c-a)/2,l=100;a>c-l?(e={"margin-top":l/2,"margin-bottom":l/2},t("body").addClass("jconfirm-no-scroll-"+this._id)):(e={"margin-top":r,"margin-bottom":l/2},t("body").removeClass("jconfirm-no-scroll-"+this._id)),this.$contentPane.css({height:n}).scrollTop(0),this.$body.css(e)},_unwatchContent:function(){clearInterval(this._timer)},close:function(){var n=this;"function"==typeof this.onClose&&this.onClose(),this._unwatchContent(),clearInterval(this.imageLoadInterval),t(window).unbind("resize."+this._id),t(window).unbind("keyup."+this._id),t("body").removeClass("jconfirm-no-scroll-"+this._id),this.$body.addClass(this.closeAnimationParsed),this.$jconfirmBg.addClass("jconfirm-bg-h");var i="none"==this.closeAnimation?1:this.animationSpeed;return setTimeout(function(){if(n.$el.remove(),n._lastFocused.length&&t.contains(document,n._lastFocused[0])){var i=t(window).scrollTop(),e=n._lastFocused.offset().top,s=t(window).height();e>i&&e<i+s?n._lastFocused.focus():t("html, body").animate({scrollTop:e-Math.round(s/3)},n.animationSpeed,"swing",function(){n._lastFocused.focus()})}"function"==typeof n.onDestroy&&n.onDestroy()},.4*i),!0},open:function(){return this._buildHTML(),this._bindEvents(),this._open(),!0},_open:function(){var t=this;"function"==typeof t.onOpenBefore&&t.onOpenBefore(),this.$body.removeClass(this.animationParsed),this.$jconfirmBg.removeClass("jconfirm-bg-h"),this.$body.focus(),setTimeout(function(){t.$body.css(t._getCSS(t.animationSpeed,1)),t.$body.css({"transition-property":t.$body.css("transition-property")+", margin"}),t._modalReady.resolve(),"function"==typeof t.onOpen&&t.onOpen()},this.animationSpeed)},isClosed:function(){return""===this.$el.css("display")},isOpen:function(){return!this.isClosed()},toggle:function(){this.isOpen()?this.close():this.open()}},n.instances=[],n.pluginDefaults={template:'<div class="jconfirm"><div class="jconfirm-bg jconfirm-bg-h"></div><div class="jconfirm-scrollpane"><div class="jc-bs3-container"><div class="jc-bs3-row"><div class="jconfirm-box-container"><div class="jconfirm-box" role="dialog" aria-labelledby="labelled" tabindex="-1"><div class="jconfirm-closeIcon">&times;</div><div class="jconfirm-title-c"><span class="jconfirm-icon-c"></span><span class="jconfirm-title"></span></div><div class="jconfirm-content-pane"><div class="jconfirm-content"></div></div><div class="jconfirm-buttons"></div><div class="jconfirm-clear"></div></div></div></div></div></div></div>',title:"Hello",titleClass:"",type:"default",typeAnimated:!0,content:"Are you sure to continue?",buttons:{},defaultButtons:{ok:{action:function(){}},close:{action:function(){}}},contentLoaded:function(){},icon:"",bgOpacity:null,theme:"light",animation:"zoom",closeAnimation:"scale",animationSpeed:400,animationBounce:1.2,escapeKey:!0,rtl:!1,container:"body",containerFluid:!1,backgroundDismiss:!1,backgroundDismissAnimation:"shake",autoClose:!1,closeIcon:null,closeIconClass:!1,watchInterval:100,columnClass:"col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1",boxWidth:"50%",useBootstrap:!0,bootstrapClasses:{container:"container",containerFluid:"container-fluid",row:"row"},onContentReady:function(){},onOpenBefore:function(){},onOpen:function(){},onClose:function(){},onDestroy:function(){},onAction:function(){}}});