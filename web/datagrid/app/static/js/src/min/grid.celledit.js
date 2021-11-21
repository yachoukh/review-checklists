(function(h){"function"===typeof define&&define.amd?define(["jquery","./grid.base","./jquery.fmatter","./grid.common"],h):"object"===typeof exports?h(require("jquery")):h(jQuery)})(function(h){var t=h.jgrid,C=function(){var a=h.makeArray(arguments);a.unshift("");a.unshift("");a.unshift(this.p);return t.feedback.apply(this,a)},D=function(a,b){var c=this.grid.fbRows;return h((null!=c&&c[0].cells.length>b?c[a.rowIndex]:a).cells[b])};t.extend({editCell:function(a,b,c){return this.each(function(){var e=
this,f=h(e),g=e.p,l,k,d,m;l=e.rows;if(e.grid&&!0===g.cellEdit&&null!=l&&null!=l[a]&&(a=parseInt(a,10),b=parseInt(b,10),!isNaN(a)&&!isNaN(b))){var w=l[a],n=null!=w?w.id:null,p=h(w),q=parseInt(g.iCol,10),u=parseInt(g.iRow,10),B=h(l[u]),x=g.savedRow;if(null!=n){g.selrow=n;g.knv||f.jqGrid("GridNav");if(0<x.length){if(!0===c&&a===u&&b===q)return;f.jqGrid("saveCell",x[0].id,x[0].ic)}else setTimeout(function(){h("#"+t.jqID(g.knv)).attr("tabindex","-1").focus()},1);m=g.colModel[b];l=m.name;if("subgrid"!==
l&&"cb"!==l&&"rn"!==l){d=D.call(e,w,b);w=m.editable;h.isFunction(w)&&(w=w.call(e,{rowid:n,iCol:b,iRow:a,name:l,cm:m,mode:"cell"}));var v=f.jqGrid("getGuiStyles","states.select","edit-cell"),z=f.jqGrid("getGuiStyles","states.hover","selected-row");if(!0!==w||!0!==c||d.hasClass("not-editable-cell"))0<=q&&0<=u&&(D.call(e,B[0],q).removeClass(v),B.removeClass(z)),d.addClass(v),p.addClass(z),k=d.html().replace(/&#160;/ig,""),C.call(e,"onSelectCell",n,l,k,a,b);else{0<=q&&0<=u&&(D.call(e,B[0],q).removeClass(v),
B.removeClass(z));d.addClass(v);p.addClass(z);m.edittype||(m.edittype="text");p=m.edittype;try{k=h.unformat.call(e,d,{rowId:n,colModel:m},b)}catch(F){k="textarea"===p?d.text():d.html()}g.autoEncodeOnEdit&&(k=t.oldDecodePostedData(k));x.push({id:a,ic:b,name:l,v:k});if("&nbsp;"===k||"&#160;"===k||1===k.length&&160===k.charCodeAt(0))k="";h.isFunction(g.formatCell)&&(q=g.formatCell.call(e,n,l,k,a,b),void 0!==q&&(k=q));C.call(e,"beforeEditCell",n,l,k,a,b);m=h.extend({},m.editoptions||{},{id:a+"_"+l,name:l,
rowId:n,mode:"cell",cm:m,iCol:b});var y=t.createEl.call(e,p,m,k,!0,h.extend({},t.ajaxOptions,g.ajaxSelectOptions||{})),p=d;(q=!0===g.treeGrid&&l===g.ExpandColumn)&&(p=d.children("span.cell-wrapperleaf,span.cell-wrapper"));p.html("").append(y).attr("tabindex","0");q&&h(y).width(d.width()-d.children("div.tree-wrap").outerWidth());t.bindEv.call(e,y,m);setTimeout(function(){h(y).focus()},1);h("input, select, textarea",d).on("keydown",function(c){27===c.keyCode&&(0<h("input.hasDatepicker",d).length?h(".ui-datepicker").is(":hidden")?
f.jqGrid("restoreCell",a,b):h("input.hasDatepicker",d).datepicker("hide"):f.jqGrid("restoreCell",a,b));if(13===c.keyCode&&!c.shiftKey)return f.jqGrid("saveCell",a,b),!1;if(9===c.keyCode){if(e.grid.hDiv.loading)return!1;c.shiftKey?f.jqGrid("prevCell",a,b):f.jqGrid("nextCell",a,b)}c.stopPropagation()});C.call(e,"afterEditCell",n,l,k,a,b);f.triggerHandler("jqGridAfterEditCell",[n,l,k,a,b])}g.iCol=b;g.iRow=a}}}})},saveCell:function(a,b){return this.each(function(){var c=this,e=h(c),f=c.p,g=c.grid,l=t.info_dialog,
k=t.jqID;if(g&&!0===f.cellEdit){var d=e.jqGrid("getGridRes","errors"),m=d.errcap,w=e.jqGrid("getGridRes","edit").bClose,n=f.savedRow,p=1<=n.length?0:null;if(null!==p){var q=c.rows[a],u=q.id,B=h(q),x=f.colModel[b],v=x.name,z,y=D.call(c,q,b),F={},r=t.getEditedValue.call(c,y,x,F);if(r!==n[p].v){z=e.triggerHandler("jqGridBeforeSaveCell",[u,v,r,a,b]);void 0!==z&&(r=z);h.isFunction(f.beforeSaveCell)&&(z=f.beforeSaveCell.call(c,u,v,r,a,b),void 0!==z&&(r=z));var E=t.checkValues.call(c,r,b,void 0,void 0,{oldValue:n[p].v,
newValue:r,cmName:v,rowid:u,iCol:b,iRow:a,cm:x,tr:q,td:y,mode:"cell"}),q=x.formatoptions||{};if(null==E||!0===E||!0===E[0]){p=e.triggerHandler("jqGridBeforeSubmitCell",[u,v,r,a,b])||{};h.isFunction(f.beforeSubmitCell)&&((p=f.beforeSubmitCell.call(c,u,v,r,a,b))||(p={}));0<h("input.hasDatepicker",y).length&&h("input.hasDatepicker",y).datepicker("hide");"date"===x.formatter&&!0!==q.sendFormatted&&(r=h.unformat.date.call(c,r,x));if("remote"===f.cellsubmit)if(f.cellurl){var A={};A[v]=r;d=f.prmNames;q=
d.oper;A[d.id]=t.stripPref(f.idPrefix,u);A[q]=d.editoper;A=h.extend(p,A);f.autoEncodeOnEdit&&h.each(A,function(a,c){h.isFunction(c)||(A[a]=t.oldEncodePostedData(c))});e.jqGrid("progressBar",{method:"show",loadtype:f.loadui,htmlcontent:e.jqGrid("getGridRes","defaults.savetext")||"Saving..."});g.hDiv.loading=!0;h.ajax(h.extend({url:h.isFunction(f.cellurl)?f.cellurl.call(c,f.cellurl,a,b,u,r,v):f.cellurl,data:t.serializeFeedback.call(c,f.serializeCellData,"jqGridSerializeCellData",A),type:"POST",complete:function(k){g.endReq.call(c);
if((300>k.status||304===k.status)&&(0!==k.status||4!==k.readyState)){var d=e.triggerHandler("jqGridAfterSubmitCell",[c,k,A.id,v,r,a,b])||[!0,""];if(!0===d||!0===d[0]&&h.isFunction(f.afterSubmitCell))d=f.afterSubmitCell.call(c,k,A.id,v,r,a,b);null==d||!0===d||!0===d[0]?(e.jqGrid("setCell",u,b,r,!1,!1,!0),y.addClass("dirty-cell"),B.addClass("edited"),C.call(c,"afterSaveCell",u,v,r,a,b),n.splice(0,1)):(l.call(c,m,d[1],w),e.jqGrid("restoreCell",a,b))}},error:function(d,k,g){e.triggerHandler("jqGridErrorCell",
[d,k,g]);h.isFunction(f.errorCell)?f.errorCell.call(c,d,k,g):l.call(c,m,d.status+" : "+d.statusText+"<br/>"+k,w);e.jqGrid("restoreCell",a,b)}},t.ajaxOptions,f.ajaxCellOptions||{}))}else try{l.call(c,m,d.nourl,w),e.jqGrid("restoreCell",a,b)}catch(G){}"clientArray"===f.cellsubmit&&(e.jqGrid("setCell",u,b,"select"===x.edittype&&"select"!==x.formatter?F.text:r,!1,!1,!0),y.addClass("dirty-cell"),B.addClass("edited"),C.call(c,"afterSaveCell",u,v,r,a,b),n.splice(0,1))}else try{setTimeout(function(){var a=
t.getRelativeRect.call(c,y);l.call(c,m,r+" "+E[1],w,{top:a.top,left:a.left+h(c).closest(".ui-jqgrid").offset().left})},50),e.jqGrid("restoreCell",a,b)}catch(G){}}else e.jqGrid("restoreCell",a,b)}setTimeout(function(){h("#"+k(f.knv)).attr("tabindex","-1").focus()},0)}})},restoreCell:function(a,b){return this.each(function(){var c=this.p,e=this.rows[a],f=e.id,g,l;if(this.grid&&!0===c.cellEdit){var k=c.savedRow;g=D.call(this,e,b);if(1<=k.length){if(h.isFunction(h.fn.datepicker))try{h("input.hasDatepicker",
g).datepicker("hide")}catch(d){}e=c.colModel[b];!0===c.treeGrid&&e.name===c.ExpandColumn?g.children("span.cell-wrapperleaf,span.cell-wrapper").empty():g.empty();g.attr("tabindex","-1");g=k[0].v;l=e.formatoptions||{};"date"===e.formatter&&!0!==l.sendFormatted&&(g=h.unformat.date.call(this,g,e));h(this).jqGrid("setCell",f,b,g,!1,!1,!0);C.call(this,"afterRestoreCell",f,g,a,b);k.splice(0,1)}setTimeout(function(){h("#"+c.knv).attr("tabindex","-1").focus()},0)}})},nextCell:function(a,b){return this.each(function(){var c=
h(this),e=this.p,f=!1,g,l,k,d=this.rows;if(this.grid&&!0===e.cellEdit&&null!=d&&null!=d[a]){for(g=b+1;g<e.colModel.length;g++)if(k=e.colModel[g],l=k.editable,h.isFunction(l)&&(l=l.call(this,{rowid:d[a].id,iCol:g,iRow:a,name:k.name,cm:k,mode:"cell"})),!0===l){f=g;break}!1!==f?c.jqGrid("editCell",a,f,!0):0<e.savedRow.length&&c.jqGrid("saveCell",a,b)}})},prevCell:function(a,b){return this.each(function(){var c=h(this),e=this.p,f=!1,g,l,k,d=this.rows;if(this.grid&&!0===e.cellEdit&&null!=d&&null!=d[a]){for(g=
b-1;0<=g;g--)if(k=e.colModel[g],l=k.editable,h.isFunction(l)&&(l=l.call(this,{rowid:d[a].id,iCol:g,iRow:a,name:k.name,cm:k,mode:"cell"})),!0===l){f=g;break}!1!==f?c.jqGrid("editCell",a,f,!0):0<e.savedRow.length&&c.jqGrid("saveCell",a,b)}})},GridNav:function(){return this.each(function(){function a(a,b,f){a=c.rows[a];if("v"===f.substr(0,1)){var e=d.clientHeight,h=d.scrollTop,k=a.offsetTop+a.clientHeight,g=a.offsetTop;"vd"===f&&k>=e&&(d.scrollTop+=a.clientHeight);"vu"===f&&g<h&&(d.scrollTop-=a.clientHeight)}"h"===
f&&(f=d.scrollLeft,b=a.cells[b],a=b.offsetLeft,b.offsetLeft+b.clientWidth>=d.clientWidth+parseInt(f,10)?d.scrollLeft+=b.clientWidth:a<f&&(d.scrollLeft-=b.clientWidth))}function b(a,b){var c=0,e,h=f.colModel;if("lft"===b)for(c=a+1,e=a;0<=e;e--)if(!0!==h[e].hidden){c=e;break}if("rgt"===b)for(c=a-1,e=a;e<h.length;e++)if(!0!==h[e].hidden){c=e;break}return c}var c=this,e=h(c),f=c.p,g=c.grid,l,k;if(g&&!0===f.cellEdit){var d=g.bDiv;f.knv=f.id+"_kn";var m=h("<div style='position:fixed;top:0px;width:1px;height:1px;' tabindex='0'><div tabindex='-1' style='width:1px;height:1px;' id='"+
f.knv+"'></div></div>");h(m).insertBefore(g.cDiv);h("#"+f.knv).focus().keydown(function(h){var d=parseInt(f.iRow,10),g=parseInt(f.iCol,10);k=h.keyCode;"rtl"===f.direction&&(37===k?k=39:39===k&&(k=37));switch(k){case 38:0<d-1&&(a(d-1,g,"vu"),e.jqGrid("editCell",d-1,g,!1));break;case 40:d+1<=c.rows.length-1&&(a(d+1,g,"vd"),e.jqGrid("editCell",d+1,g,!1));break;case 37:0<=g-1&&(l=b(g-1,"lft"),a(d,l,"h"),e.jqGrid("editCell",d,l,!1));break;case 39:g+1<=f.colModel.length-1&&(l=b(g+1,"rgt"),a(d,l,"h"),e.jqGrid("editCell",
d,l,!1));break;case 13:0<=g&&0<=d&&e.jqGrid("editCell",d,g,!0);break;default:return!0}return!1})}})},getChangedCells:function(a){var b=[];a||(a="all");this.each(function(){var c=this,e=c.p,f=t.htmlDecode,g=c.rows;c.grid&&!0===e.cellEdit&&h(g).each(function(l){var k={};if(h(this).hasClass("edited")){var d=this;h(this.cells).each(function(b){var m=e.colModel[b],n=m.name,p=D.call(c,d,b);if("cb"!==n&&"subgrid"!==n&&"rn"!==n&&("dirty"!==a||p.hasClass("dirty-cell")))try{k[n]=h.unformat.call(c,p[0],{rowId:g[l].id,
colModel:m},b)}catch(q){k[n]=f(p.html())}});k.id=this.id;b.push(k)}})});return b}})});
//# sourceMappingURL=grid.celledit.map