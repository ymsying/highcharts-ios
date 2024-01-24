/**
 * Highstock JS v11.2.0 (2023-10-30)
 *
 * Indicator series type for Highcharts Stock
 *
 * (c) 2010-2021 Wojciech Chmiel
 *
 * License: www.highcharts.com/license
 */!function(t){"object"==typeof module&&module.exports?(t.default=t,module.exports=t):"function"==typeof define&&define.amd?define("highcharts/indicators/aroon-oscillator",["highcharts","highcharts/modules/stock"],function(o){return t(o),t.Highcharts=o,t}):t("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(t){"use strict";var o=t?t._modules:{};function e(t,o,e,i){t.hasOwnProperty(o)||(t[o]=i.apply(null,e),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:o,module:t[o]}})))}e(o,"Stock/Indicators/MultipleLinesComposition.js",[o["Core/Series/SeriesRegistry.js"],o["Core/Utilities.js"]],function(t,o){var e,i=t.seriesTypes.sma.prototype,n=o.defined,r=o.error,a=o.merge;return function(t){var e=[],s=["bottomLine"],p=["top","bottom"],l=["top"];function c(t){return"plot"+t.charAt(0).toUpperCase()+t.slice(1)}function h(t,o){var e=[];return(t.pointArrayMap||[]).forEach(function(t){t!==o&&e.push(c(t))}),e}function u(){var t,o=this,e=o.pointValKey,s=o.linesApiNames,p=o.areaLinesNames,l=o.points,u=o.options,f=o.graph,y={options:{gapSize:u.gapSize}},d=[],g=h(o,e),m=l.length;if(g.forEach(function(o,e){for(d[e]=[];m--;)t=l[m],d[e].push({x:t.x,plotX:t.plotX,plotY:t[o],isNull:!n(t[o])});m=l.length}),o.userOptions.fillColor&&p.length){var v=d[g.indexOf(c(p[0]))],A=1===p.length?l:d[g.indexOf(c(p[1]))],x=o.color;o.points=A,o.nextPoints=v,o.color=o.userOptions.fillColor,o.options=a(l,y),o.graph=o.area,o.fillGraph=!0,i.drawGraph.call(o),o.area=o.graph,delete o.nextPoints,delete o.fillGraph,o.color=x}s.forEach(function(t,e){d[e]?(o.points=d[e],u[t]?o.options=a(u[t].styles,y):r('Error: "There is no '+t+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names."'),o.graph=o["graph"+t],i.drawGraph.call(o),o["graph"+t]=o.graph):r('Error: "'+t+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")}),o.points=l,o.options=u,o.graph=f,i.drawGraph.call(o)}function f(t){var o,e=[],n=[];if(t=t||this.points,this.fillGraph&&this.nextPoints){if((o=i.getGraphPath.call(this,this.nextPoints))&&o.length){o[0][0]="L",e=i.getGraphPath.call(this,t),n=o.slice(0,e.length);for(var r=n.length-1;r>=0;r--)e.push(n[r])}}else e=i.getGraphPath.apply(this,arguments);return e}function y(t){var o=[];return(this.pointArrayMap||[]).forEach(function(e){o.push(t[e])}),o}function d(){var t,o=this,e=this.pointArrayMap,n=[];n=h(this),i.translate.apply(this,arguments),this.points.forEach(function(i){e.forEach(function(e,r){t=i[e],o.dataModify&&(t=o.dataModify.modifyValue(t)),null!==t&&(i[n[r]]=o.yAxis.toPixels(t,!0))})})}t.compose=function(t){if(o.pushUnique(e,t)){var i=t.prototype;i.linesApiNames=i.linesApiNames||s.slice(),i.pointArrayMap=i.pointArrayMap||p.slice(),i.pointValKey=i.pointValKey||"top",i.areaLinesNames=i.areaLinesNames||l.slice(),i.drawGraph=u,i.getGraphPath=f,i.toYData=y,i.translate=d}return t}}(e||(e={})),e}),e(o,"Stock/Indicators/AroonOscillator/AroonOscillatorIndicator.js",[o["Stock/Indicators/MultipleLinesComposition.js"],o["Core/Series/SeriesRegistry.js"],o["Core/Utilities.js"]],function(t,o,e){var i,n=this&&this.__extends||(i=function(t,o){return(i=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])})(t,o)},function(t,o){if("function"!=typeof o&&null!==o)throw TypeError("Class extends value "+String(o)+" is not a constructor or null");function e(){this.constructor=t}i(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}),r=o.seriesTypes.aroon,a=e.extend,s=e.merge,p=function(t){function o(){var o=null!==t&&t.apply(this,arguments)||this;return o.data=void 0,o.options=void 0,o.points=void 0,o}return n(o,t),o.prototype.getValues=function(o,e){var i,n,r=[],a=[],s=[],p=t.prototype.getValues.call(this,o,e);for(n=0;n<p.yData.length;n++)i=p.yData[n][0]-p.yData[n][1],r.push([p.xData[n],i]),a.push(p.xData[n]),s.push(i);return{values:r,xData:a,yData:s}},o.defaultOptions=s(r.defaultOptions,{tooltip:{pointFormat:'<span style="color:{point.color}">●</span><b> {series.name}</b>: {point.y}'}}),o}(r);return a(p.prototype,{nameBase:"Aroon Oscillator",linesApiNames:[],pointArrayMap:["y"],pointValKey:"y"}),t.compose(r),o.registerSeriesType("aroonoscillator",p),p}),e(o,"masters/indicators/aroon-oscillator.src.js",[],function(){})});//# sourceMappingURL=aroon-oscillator.js.map