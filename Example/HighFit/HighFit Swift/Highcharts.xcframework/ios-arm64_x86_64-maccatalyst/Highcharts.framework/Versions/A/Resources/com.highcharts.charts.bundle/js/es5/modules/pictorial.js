/**
 * Highcharts JS v11.2.0 (2023-10-30)
 *
 * Pictorial graph series type for Highcharts
 *
 * (c) 2010-2022 Torstein Honsi, Magdalena Gut
 *
 * License: www.highcharts.com/license
 */!function(t){"object"==typeof module&&module.exports?(t.default=t,module.exports=t):"function"==typeof define&&define.amd?define("highcharts/modules/pictorial",["highcharts"],function(e){return t(e),t.Highcharts=e,t}):t("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(t){"use strict";var e=t?t._modules:{};function i(t,e,i,r){t.hasOwnProperty(e)||(t[e]=r.apply(null,i),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,module:t[e]}})))}i(e,"Extensions/PatternFill.js",[e["Core/Animation/AnimationUtilities.js"],e["Core/Chart/Chart.js"],e["Core/Globals.js"],e["Core/Defaults.js"],e["Core/Series/Point.js"],e["Core/Series/Series.js"],e["Core/Renderer/SVG/SVGRenderer.js"],e["Core/Utilities.js"]],function(t,e,i,r,o,a,n,s){var h,p,c=t.animObject,d=r.getOptions,l=s.addEvent,f=s.defined,u=s.erase,g=s.merge,y=s.pick,m=s.removeEvent,x=s.wrap,w=i.patterns=(h=[],p=d().colors,["M 0 0 L 5 5 M 4.5 -0.5 L 5.5 0.5 M -0.5 4.5 L 0.5 5.5","M 0 5 L 5 0 M -0.5 0.5 L 0.5 -0.5 M 4.5 5.5 L 5.5 4.5","M 2 0 L 2 5 M 4 0 L 4 5","M 0 2 L 5 2 M 0 4 L 5 4","M 0 1.5 L 2.5 1.5 L 2.5 0 M 2.5 5 L 2.5 3.5 L 5 3.5"].forEach(function(t,e){h.push({path:t,color:p[e],width:5,height:5,patternTransform:"scale(1.4 1.4)"})}),["M 0 0 L 5 10 L 10 0","M 3 3 L 8 3 L 8 8 L 3 8 Z","M 5 5 m -4 0 a 4 4 0 1 1 8 0 a 4 4 0 1 1 -8 0","M 0 0 L 10 10 M 9 -1 L 11 1 M -1 9 L 1 11","M 0 10 L 10 0 M -1 1 L 1 -1 M 9 11 L 11 9"].forEach(function(t,e){h.push({path:t,color:p[e+5],width:10,height:10})}),h);function v(t,e){var i,r=JSON.stringify(t),o=r.length||0,a=0,n=0;if(e){i=Math.max(Math.floor(o/500),1);for(var s=0;s<o;s+=i)a+=r.charCodeAt(s);a&=a}for(;n<o;++n)a=(a<<5)-a+r.charCodeAt(n),a&=a;return a.toString(16).replace("-","1")}o.prototype.calculatePatternDimensions=function(t){if(!t.width||!t.height){var e=this.graphic&&(this.graphic.getBBox&&this.graphic.getBBox(!0)||this.graphic.element&&this.graphic.element.getBBox())||{},i=this.shapeArgs;if(i&&(e.width=i.width||e.width,e.height=i.height||e.height,e.x=i.x||e.x,e.y=i.y||e.y),t.image){if(!e.width||!e.height){t._width="defer",t._height="defer";var r=this.series.chart.mapView&&this.series.chart.mapView.getSVGTransform().scaleY;f(r)&&r<0&&(t._inverted=!0);return}t.aspectRatio&&(e.aspectRatio=e.width/e.height,t.aspectRatio>e.aspectRatio?e.aspectWidth=e.height*t.aspectRatio:e.aspectHeight=e.width/t.aspectRatio),t._width=t.width||Math.ceil(e.aspectWidth||e.width),t._height=t.height||Math.ceil(e.aspectHeight||e.height)}t.width||(t._x=t.x||0,t._x+=e.x-Math.round(e.aspectWidth?Math.abs(e.aspectWidth-e.width)/2:0)),t.height||(t._y=t.y||0,t._y+=e.y-Math.round(e.aspectHeight?Math.abs(e.aspectHeight-e.height)/2:0))}},n.prototype.addPattern=function(t,e){var i,r,o,a=y(e,!0),n=c(a),h=t.width||t._width||32,p=t.height||t._height||32,d=t.color||"#343434",l=t.id,f=this;if(!l&&(this.idCounter=this.idCounter||0,l="highcharts-pattern-"+this.idCounter+"-"+(this.chartIndex||0),++this.idCounter),this.forExport&&(l+="-export"),this.defIds=this.defIds||[],!(this.defIds.indexOf(l)>-1)){this.defIds.push(l);var u={id:l,patternUnits:"userSpaceOnUse",patternContentUnits:t.patternContentUnits||"userSpaceOnUse",width:h,height:p,x:t._x||t.x||0,y:t._y||t.y||0};return t._inverted&&(u.patternTransform="scale(1, -1)",t.patternTransform&&(t.patternTransform+=" scale(1, -1)")),t.patternTransform&&(u.patternTransform=t.patternTransform),(i=this.createElement("pattern").attr(u).add(this.defs)).id=l,t.path?(r=s.isObject(t.path)?t.path:{d:t.path},t.backgroundColor&&function(t){f.rect(0,0,h,p).attr({fill:t}).add(i)}(t.backgroundColor),o={d:r.d},this.styledMode||(o.stroke=r.stroke||d,o["stroke-width"]=y(r.strokeWidth,2),o.fill=r.fill||"none"),r.transform&&(o.transform=r.transform),this.createElement("path").attr(o).add(i),i.color=d):t.image&&(a?this.image(t.image,0,0,h,p,function(){this.animate({opacity:y(t.opacity,1)},n),m(this.element,"load")}).attr({opacity:0}).add(i):this.image(t.image,0,0,h,p).add(i)),t.image&&a||void 0===t.opacity||[].forEach.call(i.element.childNodes,function(e){e.setAttribute("opacity",t.opacity)}),this.patternElements=this.patternElements||{},this.patternElements[l]=i,i}},x(a.prototype,"getColor",function(t){var e=this.options.color;e&&e.pattern&&!e.pattern.color?(delete this.options.color,t.apply(this,Array.prototype.slice.call(arguments,1)),e.pattern.color=this.color,this.color=this.options.color=e):t.apply(this,Array.prototype.slice.call(arguments,1))}),l(a,"render",function(){var t=this.chart.isResizing;(this.isDirtyData||t||!this.chart.hasRendered)&&(this.points||[]).forEach(function(e){var i=e.options&&e.options.color;i&&i.pattern&&(t&&!(e.shapeArgs&&e.shapeArgs.width&&e.shapeArgs.height)?(i.pattern._width="defer",i.pattern._height="defer"):e.calculatePatternDimensions(i.pattern))})}),l(o,"afterInit",function(){var t=this.options.color;t&&t.pattern&&("string"==typeof t.pattern.path&&(t.pattern.path={d:t.pattern.path}),this.color=this.options.color=g(this.series.options.color,t))}),l(n,"complexColor",function(t){var e=t.args[0],i=t.args[1],r=t.args[2],a=this.chartIndex||0,n=e.pattern,s="#343434";if(void 0!==e.patternIndex&&w&&(n=w[e.patternIndex]),!n)return!0;if(n.image||"string"==typeof n.path||n.path&&n.path.d){var h=r.parentNode&&r.parentNode.getAttribute("class");h=h&&h.indexOf("highcharts-legend")>-1,("defer"===n._width||"defer"===n._height)&&o.prototype.calculatePatternDimensions.call({graphic:{element:r}},n),(h||!n.id)&&((n=g({},n)).id="highcharts-pattern-"+a+"-"+v(n)+v(n,!0)),this.addPattern(n,!this.forExport&&y(n.animation,this.globalAnimation,{duration:100})),s="url(".concat(this.url,"#").concat(n.id+(this.forExport?"-export":""),")")}else s=n.color||s;return r.setAttribute(i,s),e.toString=function(){return s},!1}),l(e,"endResize",function(){(this.renderer&&this.renderer.defIds||[]).filter(function(t){return t&&t.indexOf&&0===t.indexOf("highcharts-pattern-")}).length&&(this.series.forEach(function(t){t.visible&&t.points.forEach(function(t){var e=t.options&&t.options.color;e&&e.pattern&&(e.pattern._width="defer",e.pattern._height="defer")})}),this.redraw(!1))}),l(e,"redraw",function(){var t={},e=this.renderer,i=(e.defIds||[]).filter(function(t){return t.indexOf&&0===t.indexOf("highcharts-pattern-")});i.length&&([].forEach.call(this.renderTo.querySelectorAll('[color^="url("], [fill^="url("], [stroke^="url("]'),function(i){var r=i.getAttribute("fill")||i.getAttribute("color")||i.getAttribute("stroke");r&&(t[r.replace(e.url,"").replace("url(#","").replace(")","")]=!0)}),i.forEach(function(i){!t[i]&&(u(e.defIds,i),e.patternElements[i]&&(e.patternElements[i].destroy(),delete e.patternElements[i]))}))})}),i(e,"Series/Pictorial/PictorialUtilities.js",[e["Core/Utilities.js"]],function(t){var e=t.defined;return{rescalePatternFill:function(t,e,i,r,o){void 0===o&&(o=1);var a=t&&t.attr("fill"),n=a&&a.match(/url\(([^)]+)\)/);if(n){var s=document.querySelector("".concat(n[1]," path"));if(s){var h=s.getBBox();if(0===h.width){var p=s.parentElement;t.renderer.box.appendChild(s),h=s.getBBox(),p.appendChild(s)}var c=1/(h.width+o),d=e/r/h.height,l=h.width/h.height,f=i/e,u=-h.width/2;l<f&&(c=c*l/f),s.setAttribute("stroke-width",o/(i*c)),s.setAttribute("transform","translate(0.5, 0)"+"scale(".concat(c," ").concat(d,") ")+"translate(".concat(u+o*c/2,", ").concat(-h.y,")"))}}},invertShadowGroup:function(t,e){var i=e.chart.inverted;i&&t.attr({rotation:i?90:0,scaleX:i?-1:1})},getStackMetrics:function(t,i){var r=t.len,o=0;return i&&e(i.max)&&(o=t.toPixels(i.max,!0),r=t.len-o),{height:r,y:o}}}}),i(e,"Series/Pictorial/PictorialPoint.js",[e["Core/Series/SeriesRegistry.js"],e["Series/Pictorial/PictorialUtilities.js"]],function(t,e){var i,r=this&&this.__extends||(i=function(t,e){return(i=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),o=t.seriesTypes.column.prototype.pointClass,a=e.rescalePatternFill,n=e.getStackMetrics;return function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.options=void 0,e.series=void 0,e.pathDef=void 0,e}return r(e,t),e.prototype.setState=function(){t.prototype.setState.apply(this,arguments);var e=this.series,i=e.options.paths;if(this.graphic&&this.shapeArgs&&i){var r=i[this.index%i.length];a(this.graphic,n(e.yAxis,r).height,this.shapeArgs.width||0,this.shapeArgs.height||1/0,this.series.options.borderWidth||0)}},e}(o)}),i(e,"Series/Pictorial/PictorialSeries.js",[e["Core/Animation/AnimationUtilities.js"],e["Core/Chart/Chart.js"],e["Series/Pictorial/PictorialPoint.js"],e["Series/Pictorial/PictorialUtilities.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Axis/Stacking/StackItem.js"],e["Core/Utilities.js"]],function(t,e,i,r,o,a,n){var s,h=this&&this.__extends||(s=function(t,e){return(s=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])})(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Class extends value "+String(e)+" is not a constructor or null");function i(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(i.prototype=e.prototype,new i)}),p=o.seriesTypes.column,c=t.animObject,d=r.getStackMetrics,l=r.invertShadowGroup,f=r.rescalePatternFill,u=n.addEvent,g=n.defined,y=n.merge,m=n.objectEach,x=n.pick,w=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.paths=void 0,e.data=void 0,e.options=void 0,e.points=void 0,e}return h(e,t),e.prototype.animate=function(t){var e=this.chart,i=this.group,r=c(this.options.animation),o=[this.getSharedClipKey(),r.duration,r.easing,r.defer].join(","),a=e.sharedClips[o];if(t&&i){var n=this.getClipBox();a||(n.y=n.height,n.height=0,a=e.renderer.clipRect(n),e.sharedClips[o]=a),i.clip(a)}else if(a&&!a.hasClass("highcharts-animating")){var s=this.getClipBox();a.addClass("highcharts-animating").animate(s,r)}},e.prototype.animateDrilldown=function(){},e.prototype.animateDrillupFrom=function(){},e.prototype.pointAttribs=function(e){var i=t.prototype.pointAttribs.apply(this,arguments),r=this.options.paths;if(e&&e.shapeArgs&&r){var o=r[e.index%r.length],a=d(this.yAxis,o),n=a.y,s=a.height,h=o.definition;h!==e.pathDef?(e.pathDef=h,i.fill={pattern:{path:{d:h,fill:i.fill,strokeWidth:i["stroke-width"],stroke:i.stroke},x:e.shapeArgs.x,y:n,width:e.shapeArgs.width||0,height:s,patternContentUnits:"objectBoundingBox",backgroundColor:"none",color:"#ff0000"}}):e.pathDef&&e.graphic&&delete i.fill}return delete i.stroke,delete i.strokeWidth,i},e.prototype.getExtremes=function(){var e=t.prototype.getExtremes.apply(this,arguments),i=this.options.paths;return i&&i.forEach(function(t){g(t.max)&&g(e.dataMax)&&t.max>e.dataMax&&(e.dataMax=t.max)}),e},e.defaultOptions=y(p.defaultOptions,{borderWidth:0}),e}(p);function v(t){var e=Object.keys(t.points).filter(function(t){return t.split(",").length>1}),i=t.axis.chart.series,r=e.map(function(t){return parseFloat(t.split(",")[0])}),o=-1;r.forEach(function(t){i[t]&&i[t].visible&&(o=t)});var a=t.axis.chart.series[o];if(a&&a.is("pictorial")&&t.axis.hasData()&&a.xAxis.hasData()){var n=a.xAxis,s=t.axis.options,h=t.axis.chart,p=t.shadow,c=n.toPixels(t.x,!0),u=h.inverted?n.len-c:c,g=a.options.paths||[],y=t.x%g.length,m=g[y],w=a.getColumnMetrics&&a.getColumnMetrics().width,v=d(a.yAxis,m),C=v.height,A=v.y,b=s.stackShadow,_=x(b&&b.borderWidth,a.options.borderWidth,1);if(!p&&b&&b.enabled&&m)t.shadowGroup||(t.shadowGroup=h.renderer.g("shadow-group").add()),t.shadowGroup.attr({translateX:h.inverted?t.axis.pos:n.pos,translateY:h.inverted?n.pos:t.axis.pos}),t.shadow=h.renderer.rect(u,A,w,C).attr({fill:{pattern:{path:{d:m.definition,fill:b.color||"#dedede",strokeWidth:_,stroke:b.borderColor||"transparent"},x:u,y:A,width:w,height:C,patternContentUnits:"objectBoundingBox",backgroundColor:"none",color:"#dedede"}}}).add(t.shadowGroup),l(t.shadowGroup,t.axis),f(t.shadow,C,w,C,_),t.setOffset(a.pointXOffset||0,a.barW||0);else if(p&&t.shadowGroup){p.animate({x:u,y:A,width:w,height:C});var E=p.attr("fill"),M=E&&E.match(/url\(([^)]+)\)/);M&&h.renderer.patternElements&&h.renderer.patternElements[M[1].slice(1)].animate({x:u,y:A,width:w,height:C}),t.shadowGroup.animate({translateX:h.inverted?t.axis.pos:n.pos,translateY:h.inverted?n.pos:t.axis.pos}),l(t.shadowGroup,t.axis),f(p,C,w,C,_),t.setOffset(a.pointXOffset||0,a.barW||0)}}else t.shadow&&t.shadowGroup&&(t.shadow.destroy(),t.shadow=void 0,t.shadowGroup.destroy(),t.shadowGroup=void 0)}function C(t,e){t.axes&&t.axes.forEach(function(t){t.stacking&&m(t.stacking.stacks,function(t){m(t,function(t){e(t)})})})}function A(t){C(t,function(t){t.shadow&&t.shadowGroup&&(t.shadow.destroy(),t.shadowGroup.destroy(),delete t.shadow,delete t.shadowGroup)})}return u(w,"afterRender",function(){var t=this,e=t.options.paths,i=/url\(([^)]+)\)/;t.points.forEach(function(r){if(r.graphic&&r.shapeArgs&&e){var o=e[r.index%e.length],a=r.graphic.attr("fill"),n=a&&a.match(i),s=d(t.yAxis,o),h=s.y,p=s.height;if(n&&t.chart.renderer.patternElements){var c=t.chart.renderer.patternElements[n[1].slice(1)];c&&c.animate({x:r.shapeArgs.x,y:h,width:r.shapeArgs.width||0,height:p})}f(r.graphic,d(t.yAxis,o).height,r.shapeArgs.width||0,r.shapeArgs.height||1/0,t.options.borderWidth||0)}})}),u(e,"render",function(){C(this,v)}),u(a,"afterSetOffset",function(t){if(this.shadow){var e=this.axis,i=e.chart,r=e.len,o=t.xOffset,a=t.width,n=i.inverted?o-i.xAxis[0].len:o,s=i.inverted?-r:0;this.shadow.attr({translateX:n,translateY:s}),this.shadow.animate({width:a})}}),u(e,"afterDrilldown",function(t){A(this)}),u(e,"afterDrillUp",function(t){A(this)}),w.prototype.pointClass=i,o.registerSeriesType("pictorial",w),w}),i(e,"masters/modules/pictorial.src.js",[],function(){})});//# sourceMappingURL=pictorial.js.map