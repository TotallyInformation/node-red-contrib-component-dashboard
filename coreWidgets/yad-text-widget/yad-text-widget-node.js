module.exports = function(RED) {
  "use strict";

  function yadNode(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    node.config = config;
    node.yad = RED.nodes.getNode(node.config.yad);

    node.yad.initElementNode(node);

    node.initMessageOnConnect = {text: node.config.defaultText};

    node.on('input', function(m) {
      node.yad.sendMessage(node, m, 'text');
    });

    node.on('close', function() {
      node.yad.closeElementNode(node);
    });
  }

  /*
  yadNode.prototype.recMessage = function(m) {
    var node = this;
    node.send(m);
  }
  */

  RED.nodes.registerType("yad-text-widget", yadNode);
}
