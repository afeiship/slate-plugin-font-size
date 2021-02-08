'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * @usage:
                                                                                                                                                                                                                                                                   * Editor.addMark(editor,'font-size', 'lightgreen');
                                                                                                                                                                                                                                                                   */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _slateHyperscript = require('slate-hyperscript');

var _nextSlatePlugin = require('@jswork/next-slate-plugin');

var _nextSlatePlugin2 = _interopRequireDefault(_nextSlatePlugin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _nextSlatePlugin2.default.define({
  id: 'font-size',
  serialize: {
    input: function input(_ref, children) {
      var el = _ref.el;

      var nodeName = el.nodeName.toLowerCase();
      if (nodeName === 'span' && el.style.fontSize) {
        return (0, _slateHyperscript.jsx)('text', { fontSize: el.style.fontSize }, children);
      }
    },
    output: function output(node, children) {
      var el = node.el;
      el.style.fontSize = node['font-size'];
      return el;
    }
  },
  render: function render(_, _ref2) {
    var attributes = _ref2.attributes,
        children = _ref2.children,
        leaf = _ref2.leaf;

    return _react2.default.createElement(
      'span',
      _extends({ style: { fontSize: leaf['font-size'] } }, attributes),
      children
    );
  }
});