"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _logo = _interopRequireDefault(require("./logo.svg"));

var _menu_icon = _interopRequireDefault(require("./menu_icon.png"));

var _styleModule = _interopRequireDefault(require("./styles/style.module.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const data = [{
  img: "",
  name: "Dashboard",
  url: "/dashboard"
}, {
  img: "",
  name: "Document",
  url: "/document"
}, {
  img: "",
  name: "Service availibility",
  url: "service"
}];
let isMobile = false; // testing 

const Slider = props => {
  const [isMobile, setIsMobile] = (0, _react.useState)(false);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_styleModule.default.menuItemWrapper, " ").concat(isMobile ? _styleModule.default.fixWidth : "")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.menuTitleWrapper
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "".concat(isMobile ? _styleModule.default.dNone : "", " ").concat(_styleModule.default.title)
  }, "CIMB"), /*#__PURE__*/_react.default.createElement("div", {
    onClick: () => {
      setIsMobile(!isMobile);
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.menuIcon
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.menuIcon
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.menuIcon
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.separater
  }), /*#__PURE__*/_react.default.createElement("ul", {
    className: _styleModule.default.menuList
  }, data && data.length > 0 && data.map((item, index) => {
    return /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
      href: "".concat(item.url)
    }, /*#__PURE__*/_react.default.createElement("img", {
      src: _logo.default,
      alt: "logo"
    }), /*#__PURE__*/_react.default.createElement("label", {
      className: "".concat(_styleModule.default.label, " ").concat(isMobile ? _styleModule.default.dNone : "")
    }, item.name)));
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.logout
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "/"
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("img", {
    src: _logo.default,
    alt: "logo"
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: "".concat(_styleModule.default.label, " ").concat(isMobile ? _styleModule.default.dNone : "")
  }, "Logout"))))));
};

var _default = Slider;
exports.default = _default;