'use strict';
//Mediator
var mediator = (function () {
    // Storage for our topics/events
    var channels = {};
    // Subscribe to an event, supply a callback to be executed
    // when that event is broadcast
    var subscribe = function (channel, fn) {
        if (!channels[channel]) channels[channel] = [];
        channels[channel].push({
            context: this,
            callback: fn
        });
        return this;
    };
    // Publish/broadcast an event to the rest of the application
    var publish = function (channel, eventArgs) {

        if (!channels[channel]) return false;
        for (var i = 0, l = channels[channel].length; i < l; i++) {
            channels[channel][i].callback(eventArgs);
        }
        return this;
    };
    return {
        publish: publish,
        subscribe: subscribe,
        installTo: function (obj) {
            obj.subscribe = subscribe;
            obj.publish = publish;
        }
    };
}());