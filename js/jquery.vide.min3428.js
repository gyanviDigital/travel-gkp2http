/*!
 *  Vide - v0.3.1
 *  Easy as hell jQuery plugin for video backgrounds.
 *  http://vodkabears.github.io/vide/
 *
 *  Made by Ilya Makarov
 *  Under MIT License
 */
!function(a,b,c,d){"use strict";function e(a){var b,c,d,e,f,g,h,i={};for(f=a.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,",").split(","),h=0,g=f.length;g>h&&(c=f[h],-1===c.search(/^(http|https|ftp):\/\//)&&-1!==c.search(":"));h++)b=c.indexOf(":"),d=c.substring(0,b),e=c.substring(b+1),e||(e=void 0),"string"==typeof e&&(e="true"===e||("false"===e?!1:e)),"string"==typeof e&&(e=isNaN(e)?e:+e),i[d]=e;return null==d&&null==e?a:i}function f(a){a=""+a;var b,c,d,e=a.split(/\s+/),f="50%",g="50%";for(d=0,b=e.length;b>d;d++)c=e[d],"left"===c?f="0%":"right"===c?f="100%":"top"===c?g="0%":"bottom"===c?g="100%":"center"===c?0===d?f="50%":g="50%":0===d?f=c:g=c;return{x:f,y:g}}function g(b,c){var d=function(){c(this.src)};a('<img src="'+b+'.gif">').load(d),a('<img src="'+b+'.jpg">').load(d),a('<img src="'+b+'.jpeg">').load(d),a('<img src="'+b+'.png">').load(d)}function h(a){a.$video.prop({autoplay:a.settings.autoplay,loop:a.settings.loop,volume:a.settings.volume,muted:a.settings.muted,playbackRate:a.settings.playbackRate})}function i(b,c,d){if(this.$element=a(b),"string"==typeof c&&(c=e(c)),d?"string"==typeof d&&(d=e(d)):d={},"string"==typeof c)c=c.replace(/\.\w*$/,"");else if("object"==typeof c)for(var f in c)c.hasOwnProperty(f)&&(c[f]=c[f].replace(/\.\w*$/,""));this.settings=a.extend({},k,d),this.path=c,this.init()}var j="vide",k={volume:1,playbackRate:1,muted:!0,loop:!0,autoplay:!0,position:"50% 50%",posterType:"detect",resizing:!0},l=/iPad|iPhone|iPod/i.test(d.userAgent),m=/Android/i.test(d.userAgent);i.prototype.init=function(){var b,c,d=this,e=f(d.settings.position);d.$wrapper=a("<div>").css({position:"absolute","z-index":-1,top:0,left:0,bottom:0,right:0,overflow:"hidden","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","background-repeat":"no-repeat","background-position":e.x+" "+e.y}),c=d.path,"object"==typeof d.path&&(d.path.poster?c=d.path.poster:d.path.mp4?c=d.path.mp4:d.path.webm?c=d.path.webm:d.path.ogv&&(c=d.path.ogv)),"detect"===d.settings.posterType?g(c,function(a){d.$wrapper.css("background-image","url("+a+")")}):"none"!==d.settings.posterType&&d.$wrapper.css("background-image","url("+c+"."+d.settings.posterType+")"),"static"===d.$element.css("position")&&d.$element.css("position","relative"),d.$element.prepend(d.$wrapper),l||m||(b="","object"==typeof d.path?(d.path.mp4&&(b+='<source src="'+d.path.mp4+'.mp4" type="video/mp4">'),d.path.webm&&(b+='<source src="'+d.path.webm+'.webm" type="video/webm">'),d.path.ogv&&(b+='<source src="'+d.path.ogv+'.ogv" type="video/ogv">'),d.$video=a("<video>"+b+"</video>")):d.$video=a('<video><source src="'+d.path+'.mp4" type="video/mp4"><source src="'+d.path+'.webm" type="video/webm"><source src="'+d.path+'.ogv" type="video/ogg"></video>'),d.$video.css("visibility","hidden"),h(d),d.$wrapper.append(d.$video),d.$video.css({margin:"auto",position:"absolute","z-index":-1,top:e.y,left:e.x,"-webkit-transform":"translate(-"+e.x+", -"+e.y+")","-ms-transform":"translate(-"+e.x+", -"+e.y+")",transform:"translate(-"+e.x+", -"+e.y+")"}),d.$video.on("canplaythrough."+j,function(){d.$video.css("visibility","visible"),h(d),d.settings.autoplay&&d.$video[0].play(),d.resize(),d.$wrapper.css("background-image","none")}),d.$element.on("resize."+j,function(){d.settings.resizing&&d.resize()}))},i.prototype.getVideoObject=function(){return this.$video?this.$video[0]:null},i.prototype.resize=function(){if(this.$video){var a=this.$video[0].videoHeight,b=this.$video[0].videoWidth,c=this.$wrapper.height(),d=this.$wrapper.width();this.$video.css(d/b>c/a?{width:d+2,height:"auto"}:{width:"auto",height:c+2})}},i.prototype.destroy=function(){this.$element.off(j),this.$video&&this.$video.off(j),delete a[j].lookup[this.index],this.$element.removeData(j),this.$wrapper.remove()},a[j]={lookup:[]},a.fn[j]=function(b,c){var d;return this.each(function(){d=a.data(this,j),d&&d.destroy(),d=new i(this,b,c),d.index=a[j].lookup.push(d)-1,a.data(this,j,d)}),this},a(c).ready(function(){a(b).on("resize."+j,function(){for(var b,c=a[j].lookup.length,d=0;c>d;d++)b=a[j].lookup[d],b&&b.settings.resizing&&b.resize()}),a(c).find("[data-"+j+"-bg]").each(function(b,c){var d=a(c),e=d.data(j+"-options"),f=d.data(j+"-bg");d[j](f,e)})})}(window.jQuery,window,document,navigator);