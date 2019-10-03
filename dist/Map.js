"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash.isequal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Map =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Map, _React$Component);

  function Map() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Map);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Map)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "mapNode", null);

    _defineProperty(_assertThisInitialized(_this), "map", null);

    _defineProperty(_assertThisInitialized(_this), "markers", []);

    _defineProperty(_assertThisInitialized(_this), "initializeMap", function () {
      var _this$props = _this.props,
          center = _this$props.center,
          zoomControl = _this$props.zoomControl,
          location = _this$props.location,
          zoom = _this$props.zoom,
          hybrid = _this$props.hybrid,
          search = _this$props.search,
          onResize = _this$props.onResize,
          onZoom = _this$props.onZoom,
          onMove = _this$props.onMove,
          onClick = _this$props.onClick,
          onDblclick = _this$props.onDblclick,
          onMousedown = _this$props.onMousedown,
          onMouseup = _this$props.onMouseup,
          onMouseover = _this$props.onMouseover,
          onMouseout = _this$props.onMouseout,
          onKeypress = _this$props.onKeypress;
      var timer = setInterval(function () {
        if (MapmyIndia && MapmyIndia.Map) {
          clearInterval(timer);
          /**
           * Init Map
           */

          _this.map = new MapmyIndia.Map(_this.mapNode, {
            center: center,
            zoomControl: zoomControl,
            location: location,
            zoom: zoom,
            hybrid: hybrid,
            search: search
          });

          _this.renderMarkers();
          /**
           * Attach events
           */


          onResize && _this.map.addEventListener("resize", onResize);
          onZoom && _this.map.addEventListener("zoom", onZoom);
          onClick && _this.map.addEventListener("click", onClick);
          onDblclick && _this.map.addEventListener("dblclick", onDblclick);
          onKeypress && _this.map.addEventListener("keypress", onKeypress);
          onMousedown && _this.map.addEventListener("mousedown", onMousedown);
          onMouseout && _this.map.addEventListener("resize", onMouseout);
          onMouseover && _this.map.addEventListener("mouseover", onMouseover);
          onMove && _this.map.addEventListener("move", onMove);
          onMouseup && _this.map.addEventListener("mouseup", onMouseup);
        }
      }, 100);
    });

    _defineProperty(_assertThisInitialized(_this), "removeMarkers", function () {
      _this.markers.map(function (mk) {
        return _this.map.removeLayer(mk);
      });

      _this.markers = [];
    });

    _defineProperty(_assertThisInitialized(_this), "renderMarkers", function () {
      var _this$props$markers = _this.props.markers,
          markers = _this$props$markers === void 0 ? [] : _this$props$markers;

      if (!_this.map) {
        return;
      }

      markers.map(function (m) {
        if (m.position && Array.isArray(m.position)) {
          var position = m.position,
              draggable = m.draggable,
              title = m.title,
              icon = m.icon,
              onClick = m.onClick,
              onDragend = m.onDragend;
          var mk = new L.Marker(position, {
            draggable: draggable,
            title: title
          });
          title && mk.bindPopup(title);
          onDragend && mk.on("dragend", onDragend);
          onClick && mk.on("click", onClick);

          _this.map.addLayer(mk);

          _this.markers.push(mk);
        }
      });
    });

    return _this;
  }

  _createClass(Map, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.initializeMap();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (!(0, _lodash["default"])(this.props.markers, nextProps.markers)) {
        this.removeMarkers();
        this.renderMarkers();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          width = _this$props2.width,
          height = _this$props2.height;
      return _react["default"].createElement("div", {
        ref: function ref(e) {
          return _this2.mapNode = e;
        },
        id: "map",
        className: "map",
        style: {
          width: width,
          height: height
        }
      });
    }
  }]);

  return Map;
}(_react["default"].Component);

exports["default"] = Map;
Map.defaultProps = {
  center: [18.5314, 73.8446],
  zoomControl: true,
  hybrid: true,
  location: true,
  search: true,
  zoom: 15,
  height: "500px",
  width: "100%",
  markers: []
};
Map.propTypes = {
  // map attributes
  center: _propTypes["default"].array,
  zoomControl: _propTypes["default"].bool,
  location: _propTypes["default"].bool,
  height: _propTypes["default"].string,
  width: _propTypes["default"].string,
  zoom: _propTypes["default"].number,
  hybrid: _propTypes["default"].bool,
  search: _propTypes["default"].bool,
  // Map events
  onResize: _propTypes["default"].func,
  onZoom: _propTypes["default"].func,
  onMove: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  onDblclick: _propTypes["default"].func,
  onMousedown: _propTypes["default"].func,
  onMouseup: _propTypes["default"].func,
  onMouseover: _propTypes["default"].func,
  onMouseout: _propTypes["default"].func,
  onKeypress: _propTypes["default"].func,
  // Markers
  markers: _propTypes["default"].array
};