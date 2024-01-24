/**
 * Highcharts JS v11.2.0 (2023-10-30)
 *
 * Exporting module
 *
 * (c) 2010-2021 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */!function(t){"object"==typeof module&&module.exports?(t.default=t,module.exports=t):"function"==typeof define&&define.amd?define("highcharts/modules/export-data",["highcharts","highcharts/modules/exporting"],function(e){return t(e),t.Highcharts=e,t}):t("undefined"!=typeof Highcharts?Highcharts:void 0)}(function(t){"use strict";var e=t?t._modules:{};function a(t,e,a,n){t.hasOwnProperty(e)||(t[e]=n.apply(null,a),"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:e,module:t[e]}})))}a(e,"Extensions/DownloadURL.js",[e["Core/Globals.js"]],function(t){var e=t.isSafari,a=t.win,n=t.win.document,o=a.URL||a.webkitURL||a;function i(t){var e=t.replace(/filename=.*;/,"").match(/data:([^;]*)(;base64)?,([0-9A-Za-z+/]+)/);if(e&&e.length>3&&a.atob&&a.ArrayBuffer&&a.Uint8Array&&a.Blob&&o.createObjectURL){for(var n=a.atob(e[3]),i=new a.ArrayBuffer(n.length),r=new a.Uint8Array(i),s=0;s<r.length;++s)r[s]=n.charCodeAt(s);return o.createObjectURL(new a.Blob([r],{type:e[1]}))}}return{dataURLtoBlob:i,downloadURL:function(t,o){var r=a.navigator,s=n.createElement("a");if("string"!=typeof t&&!(t instanceof String)&&r.msSaveOrOpenBlob){r.msSaveOrOpenBlob(t,o);return}t=""+t;var l=/Edge\/\d+/.test(r.userAgent);if((e&&"string"==typeof t&&0===t.indexOf("data:application/pdf")||l||t.length>2e6)&&!(t=i(t)||""))throw Error("Failed to convert to blob");if(void 0!==s.download)s.href=t,s.download=o,n.body.appendChild(s),s.click(),n.body.removeChild(s);else try{if(!a.open(t,"chart"))throw Error("Failed to open window")}catch(e){a.location.href=t}}}}),a(e,"Extensions/ExportData/ExportDataDefaults.js",[],function(){return{exporting:{csv:{annotations:{itemDelimiter:"; ",join:!1},columnHeaderFormatter:null,dateFormat:"%Y-%m-%d %H:%M:%S",decimalPoint:null,itemDelimiter:null,lineDelimiter:"\n"},showTable:!1,useMultiLevelHeaders:!0,useRowspanHeaders:!0},lang:{downloadCSV:"Download CSV",downloadXLS:"Download XLS",exportData:{annotationHeader:"Annotations",categoryHeader:"Category",categoryDatetimeHeader:"DateTime"},viewData:"View data table",hideData:"Hide data table"}}}),a(e,"Extensions/ExportData/ExportData.js",[e["Core/Renderer/HTML/AST.js"],e["Extensions/ExportData/ExportDataDefaults.js"],e["Core/Globals.js"],e["Core/Defaults.js"],e["Extensions/DownloadURL.js"],e["Core/Series/SeriesRegistry.js"],e["Core/Utilities.js"]],function(t,e,a,n,o,i,r){var s=this&&this.__spreadArray||function(t,e,a){if(a||2==arguments.length)for(var n,o=0,i=e.length;o<i;o++)!n&&o in e||(n||(n=Array.prototype.slice.call(e,0,o)),n[o]=e[o]);return t.concat(n||Array.prototype.slice.call(e))},l=a.doc,c=a.win,h=n.getOptions,d=n.setOptions,p=o.downloadURL,u=i.series,f=i.seriesTypes,m=f.arearange,x=f.gantt,g=f.map,b=f.mapbubble,v=f.treemap,y=f.xrange,w=r.addEvent,D=r.defined,T=r.extend,E=r.find,S=r.fireEvent,C=r.isNumber,L=r.pick,A=[];function U(){var t=this.getCSV(!0);p(F(t,"text/csv")||"data:text/csv,\uFEFF"+encodeURIComponent(t),this.getFilename()+".csv")}function R(){var t='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>Ark1</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><style>td{border:none;font-family: Calibri, sans-serif;} .number{mso-number-format:"0.00";} .text{ mso-number-format:"@";}</style><meta name=ProgId content=Excel.Sheet><meta charset=UTF-8></head><body>'+this.getTable(!0)+"</body></html>";p(F(t,"application/vnd.ms-excel")||"data:application/vnd.ms-excel;base64,"+c.btoa(unescape(encodeURIComponent(t))),this.getFilename()+".xls")}function k(t){var e="",a=this.getDataRows(),n=this.options.exporting.csv,o=L(n.decimalPoint,","!==n.itemDelimiter&&t?1.1.toLocaleString()[1]:"."),i=L(n.itemDelimiter,","===o?";":","),r=n.lineDelimiter;return a.forEach(function(t,n){for(var s="",l=t.length;l--;)"string"==typeof(s=t[l])&&(s='"'.concat(s,'"')),"number"==typeof s&&"."!==o&&(s=s.toString().replace(".",o)),t[l]=s;t.length=a.length?a[0].length:0,e+=t.join(i),n<a.length-1&&(e+=r)}),e}function O(t){var e,a,n,o,i,r,l,c=this.hasParallelCoordinates,h=this.time,d=this.options.exporting&&this.options.exporting.csv||{},p=this.xAxis,f={},m=[],x=[],g=[],b=this.options.lang.exportData,v=b.categoryHeader,y=b.categoryDatetimeHeader,w=function(e,a,n){if(d.columnHeaderFormatter){var o=d.columnHeaderFormatter(e,a,n);if(!1!==o)return o}return e?e instanceof u?t?{columnTitle:n>1?a:e.name,topLevelColumnTitle:e.name}:e.name+(n>1?" ("+a+")":""):e.options.title&&e.options.title.text||(e.dateTime?y:v):v},T=function(t,e,a){var n={},o={};return e.forEach(function(e){var i=(t.keyToAxis&&t.keyToAxis[e]||e)+"Axis",r=C(a)?t.chart[i][a]:t[i];n[e]=r&&r.categories||[],o[e]=r&&r.dateTime}),{categoryMap:n,dateTimeValueAxisMap:o}},A=function(t,e){var a=t.pointArrayMap||["y"];return t.data.some(function(t){return void 0!==t.y&&t.name})&&e&&!e.categories&&"name"!==t.exportKey?s(["x"],a,!0):a},U=[],R=0;for(r in this.series.forEach(function(e){var a,n,o=e.options.keys,r=e.xAxis,s=o||A(e,r),l=s.length,u=!e.requireSorting&&{},m=p.indexOf(r),b=T(e,s);if(!1!==e.options.includeInDataExport&&!e.options.isInternal&&!1!==e.visible){for(E(U,function(t){return t[0]===m})||U.push([m,R]),n=0;n<l;)i=w(e,s[n],s.length),g.push(i.columnTitle||i),t&&x.push(i.topLevelColumnTitle||i),n++;(a={chart:e.chart,autoIncrement:e.autoIncrement,options:e.options,pointArrayMap:e.pointArrayMap,index:e.index}).index,e.options.data.forEach(function(t,o){var i,p,x,g,v={series:a};c&&(b=T(e,s,o)),e.pointClass.prototype.applyOptions.apply(v,[t]);var y=e.data[o]&&e.data[o].name;if(p=(null!==(i=v.x)&&void 0!==i?i:"")+","+y,n=0,(!r||"name"===e.exportKey||!c&&r&&r.hasNames&&y)&&(p=y),u&&(u[p]&&(p+="|"+o),u[p]=!0),f[p]){var w="".concat(p,",").concat(f[p].pointers[e.index]),D=p;f[p].pointers[e.index]&&(f[w]||(f[w]=[],f[w].xValues=[],f[w].pointers=[]),p=w),f[D].pointers[e.index]+=1}else{f[p]=[],f[p].xValues=[];for(var E=[],S=0;S<e.chart.series.length;S++)E[S]=0;f[p].pointers=E,f[p].pointers[e.index]=1}for(f[p].x=v.x,f[p].name=y,f[p].xValues[m]=v.x;n<l;)g=v[x=s[n]],f[p][R+n]=L(b.categoryMap[x][g],b.dateTimeValueAxisMap[x]?h.dateFormat(d.dateFormat,g):null,g),n++}),R+=n}}),f)Object.hasOwnProperty.call(f,r)&&m.push(f[r]);for(o=t?[x,g]:[g],R=U.length;R--;)e=U[R][0],a=U[R][1],n=p[e],m.sort(function(t,a){return t.xValues[e]-a.xValues[e]}),l=w(n),o[0].splice(a,0,l),t&&o[1]&&o[1].splice(a,0,l),m.forEach(function(t){var e=t.name;n&&!D(e)&&(n.dateTime?(t.x instanceof Date&&(t.x=t.x.getTime()),e=h.dateFormat(d.dateFormat,t.x)):e=n.categories?L(n.names[t.x],n.categories[t.x],t.x):t.x),t.splice(a,0,e)});return S(this,"exportData",{dataRows:o=o.concat(m)}),o}function H(t){var e=function(t){if(!t.tagName||"#text"===t.tagName)return t.textContent||"";var a=t.attributes,n="<".concat(t.tagName);return a&&Object.keys(a).forEach(function(t){var e=a[t];n+=" ".concat(t,'="').concat(e,'"')}),n+=">"+(t.textContent||""),(t.children||[]).forEach(function(t){n+=e(t)}),n+="</".concat(t.tagName,">")};return e(this.getTableAST(t))}function N(t){var e=0,a=[],n=this.options,o=t?1.1.toLocaleString()[1]:".",i=L(n.exporting.useMultiLevelHeaders,!0),r=this.getDataRows(i),s=i?r.shift():null,l=r.shift(),c=function(t,e){var a=t.length;if(e.length!==a)return!1;for(;a--;)if(t[a]!==e[a])return!1;return!0},h=function(t,e,a,n){var i=L(n,""),r="highcharts-text"+(e?" "+e:"");return"number"==typeof i?(i=i.toString(),","===o&&(i=i.replace(".",o)),r="highcharts-number"):n||(r="highcharts-empty"),{tagName:t,attributes:a=T({class:r},a),textContent:i}};!1!==n.exporting.tableCaption&&a.push({tagName:"caption",attributes:{class:"highcharts-table-caption"},textContent:L(n.exporting.tableCaption,n.title.text?n.title.text:"Chart")});for(var d=0,p=r.length;d<p;++d)r[d].length>e&&(e=r[d].length);a.push(function(t,e,a){var o,r,s=[],l=0,d=a||e&&e.length,p=0;if(i&&t&&e&&!c(t,e)){for(var u=[];l<d;++l)if((o=t[l])===t[l+1])++p;else if(p)u.push(h("th","highcharts-table-topheading",{scope:"col",colspan:p+1},o)),p=0;else{o===e[l]?n.exporting.useRowspanHeaders?(r=2,delete e[l]):(r=1,e[l]=""):r=1;var f=h("th","highcharts-table-topheading",{scope:"col"},o);r>1&&f.attributes&&(f.attributes.valign="top",f.attributes.rowspan=r),u.push(f)}s.push({tagName:"tr",children:u})}if(e){var u=[];for(l=0,d=e.length;l<d;++l)void 0!==e[l]&&u.push(h("th",null,{scope:"col"},e[l]));s.push({tagName:"tr",children:u})}return{tagName:"thead",children:s}}(s,l,Math.max(e,l.length)));var u=[];r.forEach(function(t){for(var a=[],n=0;n<e;n++)a.push(h(n?"td":"th",null,n?{}:{scope:"row"},t[n]));u.push({tagName:"tr",children:a})}),a.push({tagName:"tbody",children:u});var f={tree:{tagName:"table",id:"highcharts-data-table-".concat(this.index),children:a}};return S(this,"aftergetTableAST",f),f.tree}function j(){this.toggleDataTable(!1)}function V(e){var a=(e=L(e,!this.isDataTableVisible))&&!this.dataTableDiv;if(a&&(this.dataTableDiv=l.createElement("div"),this.dataTableDiv.className="highcharts-data-table",this.renderTo.parentNode.insertBefore(this.dataTableDiv,this.renderTo.nextSibling)),this.dataTableDiv){var n=this.dataTableDiv.style,o=n.display;n.display=e?"block":"none",e?(this.dataTableDiv.innerHTML=t.emptyHTML,new t([this.getTableAST()]).addToDOM(this.dataTableDiv),S(this,"afterViewData",{element:this.dataTableDiv,wasHidden:a||o!==n.display})):S(this,"afterHideData")}this.isDataTableVisible=e;var i=this.exportDivElements,r=this.options.exporting,s=r&&r.buttons&&r.buttons.contextButton.menuItems,c=this.options.lang;if(r&&r.menuItemDefinitions&&c&&c.viewData&&c.hideData&&s&&i){var h=i[s.indexOf("viewData")];h&&t.setElementHTML(h,this.isDataTableVisible?c.hideData:c.viewData)}}function B(){this.toggleDataTable(!0)}function F(t,e){var a=c.navigator,n=c.URL||c.webkitURL||c;try{if(a.msSaveOrOpenBlob&&c.MSBlobBuilder){var o=new c.MSBlobBuilder;return o.append(t),o.getBlob("image/svg+xml")}return n.createObjectURL(new c.Blob(["\uFEFF"+t],{type:e}))}catch(t){}}function M(){var t=this,e=t.dataTableDiv,a=function(t,e){return t.children[e].textContent};if(e&&t.options.exporting&&t.options.exporting.allowTableSorting){var n=e.querySelector("thead tr");n&&n.childNodes.forEach(function(n){var o=n.closest("table");n.addEventListener("click",function(){var i,r,l=s([],e.querySelectorAll("tr:not(thead tr)"),!0),c=s([],n.parentNode.children,!0);l.sort((i=c.indexOf(n),r=t.ascendingOrderInTable=!t.ascendingOrderInTable,function(t,e){var n,o;return n=a(r?t:e,i),o=a(r?e:t,i),""===n||""===o||isNaN(n)||isNaN(o)?n.toString().localeCompare(o):n-o})).forEach(function(t){o.appendChild(t)}),c.forEach(function(t){["highcharts-sort-ascending","highcharts-sort-descending"].forEach(function(e){t.classList.contains(e)&&t.classList.remove(e)})}),n.classList.add(t.ascendingOrderInTable?"highcharts-sort-ascending":"highcharts-sort-descending")})})}}function I(){this.options&&this.options.exporting&&this.options.exporting.showTable&&!this.options.chart.forExport&&this.viewData()}return{compose:function(t){if(r.pushUnique(A,t)){w(t,"afterViewData",M),w(t,"render",I);var a=t.prototype;a.downloadCSV=U,a.downloadXLS=R,a.getCSV=k,a.getDataRows=O,a.getTable=H,a.getTableAST=N,a.hideData=j,a.toggleDataTable=V,a.viewData=B}if(r.pushUnique(A,d)){var n=h().exporting;n&&(T(n.menuItemDefinitions,{downloadCSV:{textKey:"downloadCSV",onclick:function(){this.downloadCSV()}},downloadXLS:{textKey:"downloadXLS",onclick:function(){this.downloadXLS()}},viewData:{textKey:"viewData",onclick:function(){this.toggleDataTable()}}}),n.buttons&&n.buttons.contextButton.menuItems&&n.buttons.contextButton.menuItems.push("separator","downloadCSV","downloadXLS","viewData")),d(e)}m&&r.pushUnique(A,m)&&(m.prototype.keyToAxis={low:"y",high:"y"}),x&&r.pushUnique(A,x)&&(x.prototype.exportKey="name",x.prototype.keyToAxis={start:"x",end:"x"}),y&&r.pushUnique(A,y)&&(y.prototype.keyToAxis={x2:"x"}),g&&r.pushUnique(A,g)&&(g.prototype.exportKey="name"),b&&r.pushUnique(A,b)&&(b.prototype.exportKey="name"),v&&r.pushUnique(A,v)&&(v.prototype.exportKey="name")}}}),a(e,"masters/modules/export-data.src.js",[e["Core/Globals.js"],e["Extensions/DownloadURL.js"],e["Extensions/ExportData/ExportData.js"]],function(t,e,a){t.dataURLtoBlob=e.dataURLtoBlob,t.downloadURL=e.downloadURL,a.compose(t.Chart)})});//# sourceMappingURL=export-data.js.map