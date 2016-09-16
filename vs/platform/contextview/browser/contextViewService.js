var __decorate=this&&this.__decorate||function(e,t,o,n){var i,r=arguments.length,c=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(c=(r<3?i(c):r>3?i(t,o,c):i(t,o))||c);return r>3&&c&&Object.defineProperty(t,o,c),c},__param=this&&this.__param||function(e,t){return function(o,n){t(o,n,e)}};define(["require","exports","vs/base/browser/ui/contextview/contextview","vs/platform/telemetry/common/telemetry","vs/platform/message/common/message"],function(e,t,o,n,i){/*---------------------------------------------------------------------------------------------
     *  Copyright (c) Microsoft Corporation. All rights reserved.
     *  Licensed under the MIT License. See License.txt in the project root for license information.
     *--------------------------------------------------------------------------------------------*/
"use strict";var r=function(){function e(e,t,n){this.contextView=new o.ContextView(e)}return e.prototype.dispose=function(){this.contextView.dispose()},e.prototype.setContainer=function(e){this.contextView.setContainer(e)},e.prototype.showContextView=function(e){this.contextView.show(e)},e.prototype.layout=function(){this.contextView.layout()},e.prototype.hideContextView=function(e){this.contextView.hide(e)},e=__decorate([__param(1,n.ITelemetryService),__param(2,i.IMessageService)],e)}();t.ContextViewService=r});