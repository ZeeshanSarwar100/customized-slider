"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

var _logo = _interopRequireDefault(require("./logo.svg"));

var _styleModule = _interopRequireDefault(require("./styles/style.module.scss"));

var _reactDeviceDetect = require("react-device-detect");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Slider = props => {
  const [isMobileFlag, setIsMobileFlag] = (0, _react.useState)(_reactDeviceDetect.isMobile);
  const {
    data,
    isLoggendIn
  } = props;
  const [isOpenCollapse, setIsOpenCollapse] = (0, _react.useState)(!_reactDeviceDetect.isMobile);
  (0, _react.useEffect)(() => {
    setIsMobileFlag(_reactDeviceDetect.isMobile);
  }, [_reactDeviceDetect.isMobile]);
  console.log("mobile , collapse", _reactDeviceDetect.isMobile, isOpenCollapse);

  const toggleCollapse = () => {
    setIsOpenCollapse(!isOpenCollapse);
    _reactDeviceDetect.isDesktop && props.callBackIsCollapseToggle(); // setIsMobileFlag(!)
  };

  console.log("is mobile flag heree", isMobileFlag);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_styleModule.default.mainWrapper, " ").concat(_reactDeviceDetect.isMobile ? isOpenCollapse ? _styleModule.default.fullWidth : _styleModule.default.fixWidth : '')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(_styleModule.default.menuItemWrapper)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.menuTitleWrapper
  }, /*#__PURE__*/_react.default.createElement("label", {
    className: "".concat(!isOpenCollapse ? _styleModule.default.dNone : "", " ").concat(_styleModule.default.title)
  }, "CIMB"), /*#__PURE__*/_react.default.createElement("div", {
    onClick: () => {
      toggleCollapse();
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
      className: "".concat(_styleModule.default.label, " ").concat(!isOpenCollapse ? _styleModule.default.dNone : "")
    }, item.name)));
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: _styleModule.default.logout
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "/"
  }, /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("img", {
    src: _logo.default,
    alt: "logo"
  }), /*#__PURE__*/_react.default.createElement("label", {
    className: "".concat(_styleModule.default.label, " ").concat(!isOpenCollapse ? _styleModule.default.dNone : "")
  }, "Logout"))))));
};

var _default = Slider;
exports.default = _default;