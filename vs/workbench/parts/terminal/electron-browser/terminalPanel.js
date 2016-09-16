/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
var __extends=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)},__decorate=this&&this.__decorate||function(e,t,n,i){var r,o=arguments.length,a=o<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,i);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(o<3?r(a):o>3?r(t,n,a):r(t,n))||a);return o>3&&a&&Object.defineProperty(t,n,a),a},__param=this&&this.__param||function(e,t){return function(n,i){t(n,i,e)}};define(["require","exports","vs/base/browser/dom","vs/base/common/lifecycle","vs/nls","vs/base/common/platform","vs/base/browser/builder","vs/platform/theme/common/themes","vs/platform/configuration/common/configuration","vs/platform/contextview/browser/contextView","vs/platform/instantiation/common/instantiation","vs/platform/keybinding/common/keybinding","vs/platform/message/common/message","vs/platform/telemetry/common/telemetry","vs/workbench/parts/terminal/electron-browser/terminalConfigHelper","vs/workbench/parts/terminal/electron-browser/terminal","vs/workbench/services/themes/common/themeService","vs/platform/workspace/common/workspace","vs/workbench/parts/terminal/electron-browser/terminalActions","vs/workbench/browser/panel","vs/base/browser/ui/actionbar/actionbar","vs/base/browser/mouseEvent","vs/workbench/parts/terminal/electron-browser/terminalInstance","vs/base/common/winjs.base"],function(e,t,n,i,r,o,a,s,c,l,m,h,p,u,f,v,g,d,I,y,S,b,T,w){"use strict";var A=function(e){function t(t,n,i,r,o,a,s,c,l){e.call(this,v.TERMINAL_PANEL_ID,t),this.configurationService=n,this.contextMenuService=i,this.instantiationService=r,this.keybindingService=o,this.contextService=a,this.terminalService=s,this.themeService=c,this.messageService=l,this.toDispose=[],this.terminalInstances=[]}return __extends(t,e),t.prototype.layout=function(e){if(e){var t=this.terminalService.getActiveTerminalIndex();t!==-1&&this.terminalInstances.length>0&&this.terminalInstances[this.terminalService.getActiveTerminalIndex()].layout(e)}},t.prototype.getActions=function(){var e=this;return this.actions||(this.actions=[this.instantiationService.createInstance(I.SwitchTerminalInstanceAction,I.SwitchTerminalInstanceAction.ID,I.SwitchTerminalInstanceAction.LABEL),this.instantiationService.createInstance(I.CreateNewTerminalAction,I.CreateNewTerminalAction.ID,I.CreateNewTerminalAction.PANEL_LABEL),this.instantiationService.createInstance(I.KillTerminalAction,I.KillTerminalAction.ID,I.KillTerminalAction.PANEL_LABEL)],this.actions.forEach(function(t){e.toDispose.push(t)})),this.actions},t.prototype.getContextMenuActions=function(){var e=this;return this.contextMenuActions||(this.contextMenuActions=[this.instantiationService.createInstance(I.CreateNewTerminalAction,I.CreateNewTerminalAction.ID,r.localize("createNewTerminal","New Terminal")),new S.Separator,this.instantiationService.createInstance(I.CopyTerminalSelectionAction,I.CopyTerminalSelectionAction.ID,r.localize("copy","Copy")),this.instantiationService.createInstance(I.TerminalPasteAction,I.TerminalPasteAction.ID,r.localize("paste","Paste"))],this.contextMenuActions.forEach(function(t){e.toDispose.push(t)})),this.contextMenuActions},t.prototype.getActionItem=function(t){return t.id===I.SwitchTerminalInstanceAction.ID?this.instantiationService.createInstance(I.SwitchTerminalInstanceActionItem,t):e.prototype.getActionItem.call(this,t)},t.prototype.create=function(t){return e.prototype.create.call(this,t),this.parentDomElement=t.getHTMLElement(),this.terminalService.initConfigHelper(t),n.addClass(this.parentDomElement,"integrated-terminal"),this.themeStyleElement=document.createElement("style"),this.fontStyleElement=document.createElement("style"),this.terminalContainer=document.createElement("div"),n.addClass(this.terminalContainer,"terminal-outer-container"),this.parentDomElement.appendChild(this.themeStyleElement),this.parentDomElement.appendChild(this.fontStyleElement),this.parentDomElement.appendChild(this.terminalContainer),this.attachEventListeners(),this.configurationHelper=new f.TerminalConfigHelper(o.platform,this.configurationService,t),this.terminalService.createNew()},t.prototype.attachEventListeners=function(){var e=this;this.toDispose.push(n.addDisposableListener(this.parentDomElement,"mousedown",function(t){if(0!==e.terminalInstances.length)if(2===t.which&&o.isLinux)e.terminalInstances[e.terminalService.getActiveTerminalIndex()].focus(!0);else if(3===t.which){var n=e.parentDomElement;if(t instanceof MouseEvent){var i=new b.StandardMouseEvent(t);n={x:i.posx,y:i.posy}}e.contextMenuService.showContextMenu({getAnchor:function(){return n},getActions:function(){return w.TPromise.as(e.getContextMenuActions())},getActionsContext:function(){return e.parentDomElement},getKeyBinding:function(t){var n=e.keybindingService.lookupKeybindings(t.id);return n.length>0?n[0]:null}})}})),this.toDispose.push(n.addDisposableListener(this.parentDomElement,"mouseup",function(t){0!==e.terminalInstances.length&&3!==t.which&&e.terminalInstances[e.terminalService.getActiveTerminalIndex()].focus()})),this.toDispose.push(n.addDisposableListener(this.parentDomElement,"keyup",function(e){27===e.keyCode&&e.stopPropagation()}))},t.prototype.createNewTerminalInstance=function(e,t){var n=this;return this.createTerminal(e,t).then(function(){n.updateConfig(),n.focus()})},t.prototype.closeActiveTerminal=function(){return this.closeTerminal(this.terminalService.getActiveTerminalIndex())},t.prototype.closeTerminal=function(e){var t=this;return new w.TPromise(function(n){t.onTerminalInstanceExit(t.terminalInstances[e])})},t.prototype.setVisible=function(t){var n=this;if(t){if(!(this.terminalInstances.length>0))return e.prototype.setVisible.call(this,t).then(function(){n.terminalService.createNew()});this.updateConfig(),this.updateTheme()}return e.prototype.setVisible.call(this,t)},t.prototype.createTerminal=function(e,t){var n=this;return new w.TPromise(function(i){var r=new T.TerminalInstance(e,n.terminalContainer,n.contextMenuService,n.contextService,n.instantiationService,n.keybindingService,n.terminalService,n.messageService,t,n.onTerminalInstanceExit.bind(n));n.terminalInstances.push(r),n.setActiveTerminal(n.terminalInstances.length-1),n.toDispose.push(n.themeService.onDidThemeChange(n.updateTheme.bind(n))),n.toDispose.push(n.configurationService.onDidUpdateConfiguration(n.updateConfig.bind(n))),n.updateTheme(),n.updateConfig(),i(r)})},t.prototype.setActiveTerminal=function(e){this.terminalInstances.forEach(function(t,n){t.toggleVisibility(n===e)})},t.prototype.onTerminalInstanceExit=function(e){var t=this.terminalInstances.indexOf(e);t!==-1&&(this.terminalInstances[t].dispose(),this.terminalInstances.splice(t,1)),this.terminalInstances.length>0&&this.setActiveTerminal(this.terminalService.getActiveTerminalIndex()),0===this.terminalInstances.length?this.terminalService.hide():this.terminalService.focus()},t.prototype.updateTheme=function(e){var t=this;e||(e=this.themeService.getTheme());var n=s.getBaseThemeId(e);if(n!==this.currentBaseThemeId){this.currentBaseThemeId=n;var i=this.configurationHelper.getTheme(n),r="";i.forEach(function(e,n){var i=t.convertHexCssColorToRgba(e,.996);r+=".monaco-workbench .panel.integrated-terminal .xterm .xterm-color-"+n+" { color: "+e+"; }"+(".monaco-workbench .panel.integrated-terminal .xterm .xterm-color-"+n+"::selection { background-color: "+i+"; }")+(".monaco-workbench .panel.integrated-terminal .xterm .xterm-bg-color-"+n+" { background-color: "+e+"; }")+(".monaco-workbench .panel.integrated-terminal .xterm .xterm-bg-color-"+n+"::selection { color: "+e+"; }")}),this.themeStyleElement.innerHTML=r}},t.prototype.convertHexCssColorToRgba=function(e,t){var n=parseInt(e.substr(1,2),16),i=parseInt(e.substr(3,2),16),r=parseInt(e.substr(5,2),16);return"rgba("+n+", "+i+", "+r+", "+t+")"},t.prototype.updateConfig=function(){this.updateFont(),this.updateCursorBlink()},t.prototype.updateFont=function(){if(0!==this.terminalInstances.length){var e=this.configurationHelper.getFont();n.toggleClass(this.parentDomElement,"enable-ligatures",this.configurationHelper.getFontLigaturesEnabled()),this.font&&!this.fontsDiffer(this.font,e)||(this.fontStyleElement.innerHTML=".monaco-workbench .panel.integrated-terminal .xterm {"+("font-family: "+e.fontFamily+";")+("font-size: "+e.fontSize+";")+("line-height: "+e.lineHeight+";")+"}",this.font=e),this.terminalInstances[this.terminalService.getActiveTerminalIndex()].setFont(e),this.layout(new a.Dimension(this.parentDomElement.offsetWidth,this.parentDomElement.offsetHeight))}},t.prototype.fontsDiffer=function(e,t){return e.charHeight!==t.charHeight||e.charWidth!==t.charWidth||e.fontFamily!==t.fontFamily||e.fontSize!==t.fontSize||e.lineHeight!==t.lineHeight},t.prototype.updateCursorBlink=function(){var e=this;this.terminalInstances.forEach(function(t){t.setCursorBlink(e.configurationHelper.getCursorBlink())})},t.prototype.focus=function(){var e=this.terminalService.getActiveTerminalIndex();e!==-1&&this.terminalInstances.length>0&&this.terminalInstances[e].focus(!0)},t.prototype.dispose=function(){for(this.toDispose=i.dispose(this.toDispose);this.terminalInstances.length>0;)this.terminalInstances.pop().dispose();e.prototype.dispose.call(this)},t=__decorate([__param(0,u.ITelemetryService),__param(1,c.IConfigurationService),__param(2,l.IContextMenuService),__param(3,m.IInstantiationService),__param(4,h.IKeybindingService),__param(5,d.IWorkspaceContextService),__param(6,v.ITerminalService),__param(7,g.IThemeService),__param(8,p.IMessageService)],t)}(y.Panel);t.TerminalPanel=A});