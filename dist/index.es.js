import { jsxs, jsx } from 'react/jsx-runtime';
import React from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
  /*!
  	Copyright (c) 2018 Jed Watson.
  	Licensed under the MIT License (MIT), see
  	http://jedwatson.github.io/classnames
  */
  /* global define */

  (function () {

    var hasOwn = {}.hasOwnProperty;
    function classNames() {
      var classes = [];
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg) continue;
        var argType = typeof arg;
        if (argType === 'string' || argType === 'number') {
          classes.push(arg);
        } else if (Array.isArray(arg)) {
          if (arg.length) {
            var inner = classNames.apply(null, arg);
            if (inner) {
              classes.push(inner);
            }
          }
        } else if (argType === 'object') {
          if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
            classes.push(arg.toString());
            continue;
          }
          for (var key in arg) {
            if (hasOwn.call(arg, key) && arg[key]) {
              classes.push(key);
            }
          }
        }
      }
      return classes.join(' ');
    }
    if (module.exports) {
      classNames.default = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
});

var styles$8 = {"_wrapper":"Switch-module__wrapper__61fvE","_content":"Switch-module__content__HuUBx","_slider":"Switch-module__slider__dxGyl","_slider_active":"Switch-module__slider_active__KuBeX"};

var Switch = function (_a) {
    var _b, _c;
    var disabled = _a.disabled, _d = _a.style, style = _d === void 0 ? {} : _d, _e = _a.checked, checked = _e === void 0 ? false : _e, _f = _a.className, className = _f === void 0 ? "" : _f, _g = _a.onChange, onChange = _g === void 0 ? function () { } : _g;
    var _h = React.useState(checked), isChecked = _h[0], setIsChecked = _h[1];
    var onCheckBoxChange = function (e) {
        var isChecked = e.currentTarget.checked;
        setIsChecked(isChecked);
        onChange(isChecked);
    };
    return (jsxs("label", __assign({ className: classnames(styles$8._wrapper, (_b = {},
            _b[className] = className,
            _b)), style: style }, { children: [jsx("input", { type: "checkbox", className: styles$8._content, disabled: disabled, checked: isChecked, onChange: onCheckBoxChange }), jsx("span", { className: classnames(styles$8._slider, (_c = {},
                    _c[styles$8._slider_active] = isChecked,
                    _c)) })] })));
};

var styles$7 = {"_content":"TextArea-module__content__Mh46l","_with_resize":"TextArea-module__with_resize__i5EtR"};

var TextArea = function (_a) {
    var _b;
    var placeholder = _a.placeholder, value = _a.value, disabled = _a.disabled, readOnly = _a.readOnly, _c = _a.resizeble, resizeble = _c === void 0 ? false : _c, _d = _a.className, className = _d === void 0 ? "" : _d, _e = _a.onChange, onChange = _e === void 0 ? function () { } : _e;
    var _f = React.useState(value || ""), textAreaValue = _f[0], setTextAreaValue = _f[1];
    var onTextAreaChange = function (e) {
        var newValue = e.currentTarget.value;
        setTextAreaValue(newValue);
        onChange(newValue);
    };
    return (jsx("textarea", { placeholder: placeholder, value: textAreaValue, onChange: onTextAreaChange, disabled: disabled, readOnly: readOnly, className: classnames(styles$7._content, (_b = {},
            _b[styles$7._with_resize] = resizeble,
            _b[className] = className,
            _b)) }));
};

var styles$6 = {"_wrapper":"Button-module__wrapper__VJ4-G","_disabled":"Button-module__disabled__CK6G-","_wrapper_in":"Button-module__wrapper_in__vaRTA","_content":"Button-module__content__B-95H","_before":"Button-module__before__PkIpN","_content_in":"Button-module__content_in__Xqef-","_after":"Button-module__after__8TS0-","_stretched":"Button-module__stretched__AFWBU","_with_hover":"Button-module__with_hover__Byp-8","_with_active":"Button-module__with_active__7Tx-A","_mode_primary":"Button-module__mode_primary__yvgvn","_mode_secondary":"Button-module__mode_secondary__LLNY8","_sz_s":"Button-module__sz_s__iDhjB","_sz_m":"Button-module__sz_m__f8XgQ","_sz_l":"Button-module__sz_l__jwSjX","_position_start":"Button-module__position_start__tAWD-","_position_center":"Button-module__position_center__KwpSY","_position_end":"Button-module__position_end__kdW7G"};

var Text = function (_a) {
    var _b;
    var _c = _a.weight, weight = _c === void 0 ? "" : _c, size = _a.size, lineHeight = _a.lineHeight, children = _a.children, _d = _a.style, style = _d === void 0 ? {} : _d, _e = _a.className, className = _e === void 0 ? "" : _e, _f = _a.color, color = _f === void 0 ? "" : _f;
    return (jsx("span", __assign({ className: classnames((_b = {}, _b[className] = className, _b)), style: __assign({ fontWeight: weight, fontSize: size, lineHeight: lineHeight, color: color }, style) }, { children: children })));
};

var Button = function (_a) {
    var _b;
    var disabled = _a.disabled, before = _a.before, after = _a.after, children = _a.children, stretched = _a.stretched, _c = _a.hasHover, hasHover = _c === void 0 ? true : _c, _d = _a.hasActive, hasActive = _d === void 0 ? true : _d, _e = _a.className, className = _e === void 0 ? "" : _e, _f = _a.contentPosition, contentPosition = _f === void 0 ? "center" : _f, _g = _a.mode, mode = _g === void 0 ? "primary" : _g, _h = _a.size, size = _h === void 0 ? "l" : _h, _j = _a.onClick, onClick = _j === void 0 ? function () { } : _j;
    return (jsx("div", __assign({ className: classnames(styles$6._wrapper, (_b = {},
            _b[styles$6._stretched] = stretched,
            _b[styles$6._with_hover] = hasHover,
            _b[styles$6._with_active] = hasActive,
            _b[styles$6._disabled] = disabled,
            _b[styles$6["_position_".concat(contentPosition)]] = styles$6["_position_".concat(contentPosition)],
            _b[styles$6["_mode_".concat(mode)]] = styles$6["_mode_".concat(mode)],
            _b[styles$6["_sz_".concat(size)]] = styles$6["_sz_".concat(size)],
            _b[className] = className,
            _b)) }, { children: jsx("button", __assign({ className: styles$6._wrapper_in, disabled: disabled, onClick: function () {
                if (!disabled) {
                    onClick();
                }
            } }, { children: jsxs("div", __assign({ className: styles$6._content }, { children: [before ? jsx("div", __assign({ className: styles$6._before }, { children: before })) : null, children ? (jsx(Text, __assign({ size: 12, lineHeight: "14px", className: styles$6._content_in }, { children: children }))) : null, after ? jsx("div", __assign({ className: styles$6._after }, { children: after })) : null] })) })) })));
};

var styles$5 = {"__wrapper":"Group-module___wrapper__uh06Y"};

var Group = function (_a) {
    var _b;
    var _c = _a.space, space = _c === void 0 ? 0 : _c, children = _a.children, _d = _a.className, className = _d === void 0 ? "" : _d;
    return (jsx("div", __assign({ className: classnames(styles$5.__wrapper, (_b = {},
            _b[className] = className,
            _b)), style: { gap: space } }, { children: children })));
};

var styles$4 = {"__wrapper":"Avatar-module___wrapper__vKNZA","__load_error":"Avatar-module___load_error__lDoMv","__content":"Avatar-module___content__IEZBm","__fallback_content":"Avatar-module___fallback_content__O05jz"};

var Avatar = function (_a) {
    var _b;
    var src = _a.src, alt = _a.alt, _c = _a.size, size = _c === void 0 ? 24 : _c, _d = _a.fallbackName, fallbackName = _d === void 0 ? "" : _d, _e = _a.className, className = _e === void 0 ? "" : _e;
    var _f = React.useState(!src), isAvatarLoadError = _f[0], setIsAvatarLoadError = _f[1];
    var onAvatarLoadFailed = function () {
        setIsAvatarLoadError(true);
    };
    React.useEffect(function () {
        setIsAvatarLoadError(!src);
    }, [src]);
    return (jsxs("div", __assign({ className: classnames(styles$4.__wrapper, (_b = {},
            _b[styles$4.__load_error] = isAvatarLoadError,
            _b[className] = className,
            _b)), style: {
            width: size,
            height: size,
        } }, { children: [!isAvatarLoadError ? (jsx("img", { onError: onAvatarLoadFailed, src: src, alt: alt, className: styles$4.__content })) : null, isAvatarLoadError ? (jsx(Text, __assign({ color: "var(--color_avatar_fallback)", size: 14, lineHeight: "14px", weight: "600", className: styles$4.__fallback_content }, { children: fallbackName }))) : null] })));
};

var styles$3 = {"_wrapper":"Cell-module__wrapper__dl9ji","_disabled":"Cell-module__disabled__xH0CN","_with_mouse":"Cell-module__with_mouse__pluJY","_wrapper_in":"Cell-module__wrapper_in__Zqvfe","_content":"Cell-module__content__QVxFo","_with_description":"Cell-module__with_description__XpGmR","_before_icon":"Cell-module__before_icon__IJKmP","_after_icon":"Cell-module__after_icon__mwTNI","_before":"Cell-module__before__HKt8q","_indicator":"Cell-module__indicator__XIX-Z","_after":"Cell-module__after__uxoOT","_content_description":"Cell-module__content_description__fK-qQ","_content_in":"Cell-module__content_in__ZFZHf","_mp_start":"Cell-module__mp_start__1qlQv","_mp_center":"Cell-module__mp_center__SEO56","_mp_end":"Cell-module__mp_end__EvDOL","_mode_primary":"Cell-module__mode_primary__bChr3","_mode_accent":"Cell-module__mode_accent__BnpEk"};

var Cell = function (_a) {
    var _b;
    var before = _a.before, children = _a.children, description = _a.description, indicator = _a.indicator, beforeIcon = _a.beforeIcon, afterIcon = _a.afterIcon, after = _a.after, disabled = _a.disabled, multiPosition = _a.multiPosition, withMouse = _a.withMouse, _c = _a.className, className = _c === void 0 ? "" : _c, _d = _a.mode, mode = _d === void 0 ? "primary" : _d, _e = _a.hasActive, hasActive = _e === void 0 ? true : _e, _f = _a.hasHover, hasHover = _f === void 0 ? true : _f, _g = _a.onClick, onClick = _g === void 0 ? function () { } : _g;
    return (jsx("div", __assign({ className: classnames(styles$3._wrapper, (_b = {},
            _b[styles$3["_mode_".concat(mode)]] = mode,
            _b[styles$3._with_description] = description && children,
            _b[styles$3._with_active] = hasActive,
            _b[styles$3._with_hover] = hasHover,
            _b[styles$3._disabled] = disabled,
            _b[styles$3["_mp_".concat(multiPosition)]] = multiPosition,
            _b[styles$3._with_mouse] = withMouse,
            _b[className] = className,
            _b)), onClick: function () {
            if (!disabled) {
                onClick();
            }
        } }, { children: jsxs("div", __assign({ className: styles$3._wrapper_in }, { children: [beforeIcon ? (jsx("div", __assign({ className: styles$3._before_icon }, { children: beforeIcon }))) : null, before ? jsx("div", __assign({ className: styles$3._before }, { children: before })) : null, children || description ? (jsxs("div", __assign({ className: styles$3._content }, { children: [children ? (jsx(Text, __assign({ className: styles$3._content_in, size: 12, lineHeight: "14px" }, { children: children }))) : null, description ? (jsx(Text, __assign({ className: styles$3._content_description, size: 12, lineHeight: "14px" }, { children: description }))) : null] }))) : null, indicator ? (jsx(Text, __assign({ className: styles$3._indicator, size: 12, lineHeight: "14px" }, { children: indicator }))) : null, after ? (jsx(Text, __assign({ className: styles$3._after, size: 12, lineHeight: "14px" }, { children: after }))) : null, afterIcon ? (jsx("div", __assign({ className: styles$3._after_icon }, { children: afterIcon }))) : null] })) })));
};

var styles$2 = {"_wrapper":"BlockHeader-module__wrapper__aerG1","_content":"BlockHeader-module__content__XcuTJ","_after":"BlockHeader-module__after__VZKFR"};

var BlockHeader = function (_a) {
    var _b;
    var children = _a.children, after = _a.after, _c = _a.className, className = _c === void 0 ? "" : _c;
    return (jsxs("div", __assign({ className: classnames(styles$2._wrapper, (_b = {},
            _b[className] = className,
            _b)) }, { children: [children ? (jsx(Text, __assign({ className: styles$2._content, size: 12, lineHeight: "14px" }, { children: children }))) : null, after ? (jsx(Text, __assign({ className: styles$2._after, size: 12, lineHeight: "14px" }, { children: after }))) : null] })));
};

var styles$1 = {"_wrapper":"Panel-module__wrapper__0P0z5"};

var Panel = function (_a) {
    var _b;
    var padding = _a.padding, children = _a.children, _c = _a.className, className = _c === void 0 ? "" : _c;
    return (jsx("div", __assign({ className: classnames(styles$1._wrapper, (_b = {},
            _b[className] = className,
            _b)), style: {
            padding: padding,
        } }, { children: children })));
};

var styles = {"_wrapper":"Separator-module__wrapper__nrhhk","_wrapper_in":"Separator-module__wrapper_in__e82nK"};

var Separator = function (_a) {
    var _b;
    var _c = _a.className, className = _c === void 0 ? "" : _c;
    return (jsx("div", __assign({ className: classnames(styles._wrapper, (_b = {},
            _b[className] = className,
            _b)) }, { children: jsx("div", { className: styles._wrapper_in }) })));
};

export { Avatar, BlockHeader, Button, Cell, Group, Panel, Separator, Switch, Text, TextArea };
