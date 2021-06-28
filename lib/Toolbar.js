"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _clsx = _interopRequireDefault(require("clsx"));

var _constants = require("./utils/constants");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _dropdownChevron = _interopRequireDefault(require("../images/dropdown-chevron.png"));

require("./sass/styles.scss");

var Toolbar =
/*#__PURE__*/
function (_React$Component) {
  (0, _inheritsLoose2.default)(Toolbar, _React$Component);

  function Toolbar() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.navigate = function (action) {
      _this.props.onNavigate(action);
    };

    _this.view = function (view) {
      _this.props.onView(view);
    };

    return _this;
  }

  var _proto = Toolbar.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        messages = _this$props.localizer.messages,
        label = _this$props.label;
    return (
      /*#__PURE__*/
      _react.default.createElement("div", {
        className: "rbc-toolbar"
      },
      /*#__PURE__*/
      _react.default.createElement("div", {
        id: "date-nav",
        className: "rbc-btn-group"
      },
      /*#__PURE__*/
      _react.default.createElement("button", {
        className: "btn secondary",
        type: "button",
        onClick: this.navigate.bind(null, _constants.navigate.TODAY)
      }, messages.today),
      /*#__PURE__*/
      _react.default.createElement("button", {
        className: "rounded nav-prev",
        type: "button",
        onClick: this.navigate.bind(null, _constants.navigate.PREVIOUS)
      },
      /*#__PURE__*/
      _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faChevronLeft
      })),
      /*#__PURE__*/
      _react.default.createElement("button", {
        className: "rounded  nav-next",
        type: "button",
        onClick: this.navigate.bind(null, _constants.navigate.NEXT)
      },
      /*#__PURE__*/
      _react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
        icon: _freeSolidSvgIcons.faChevronRight
      }))),
      /*#__PURE__*/
      _react.default.createElement("span", {
        className: "rbc-toolbar-label"
      }, label),
      /*#__PURE__*/
      _react.default.createElement("span", null,
      /*#__PURE__*/
      _react.default.createElement("span", {
        id: "timeframe-selector"
      }, this.viewNamesGroup(messages)),
      /*#__PURE__*/
      _react.default.createElement("select", {
        className: "outlined-clickable secondary",
        style: {
          background: "url(" + _dropdownChevron.default + ")  96% / 18% no-repeat",
          paddingRight: '30px',
          marginLeft: '2vw',
          zIndex: 100
        }
      },
      /*#__PURE__*/
      _react.default.createElement("option", null, "Sanford"),
      /*#__PURE__*/
      _react.default.createElement("option", null, "Atlanta"),
      /*#__PURE__*/
      _react.default.createElement("option", null, "Orlando"))))
    );
  };

  _proto.viewNamesGroup = function viewNamesGroup(messages) {
    var _this2 = this;

    var viewNames = this.props.views;
    var view = this.props.view;

    if (viewNames.length > 1) {
      return viewNames.map(function (name) {
        return (
          /*#__PURE__*/
          _react.default.createElement("button", {
            type: "button",
            key: name,
            className: (0, _clsx.default)({
              'rbc-active': view === name
            }),
            onClick: _this2.view.bind(null, name)
          }, messages[name])
        );
      });
    }
  };

  return Toolbar;
}(_react.default.Component);

Toolbar.propTypes = process.env.NODE_ENV !== "production" ? {
  view: _propTypes.default.string.isRequired,
  views: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
  label: _propTypes.default.node.isRequired,
  localizer: _propTypes.default.object,
  onNavigate: _propTypes.default.func.isRequired,
  onView: _propTypes.default.func.isRequired
} : {};
var _default = Toolbar;
exports.default = _default;
module.exports = exports["default"];