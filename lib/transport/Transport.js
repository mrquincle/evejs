/**
 * Abstract prototype of a transport
 * @param {Object} [config]
 * @constructor
 */
function Transport(config) {}

Transport.prototype.type = null;

/**
 * Connect a peer
 * @param {String} id
 * @param {Function} onMessage            Invoked as onMessage(from, message)
 * @return {Promise.<Transport, Error>}  Returns a promise which resolves when
 *                                        connected.
 */
Transport.prototype.connect = function(id, onMessage) {
  throw new Error('Cannot invoke abstract function "connect"');
};

/**
 * Disconnect a peer by its id
 * @param {String} id
 */
Transport.prototype.disconnect = function(id) {
  throw new Error('Cannot invoke abstract function "disconnect"');
};

/**
 * Send a message to a peer
 * @param {String} from    Id of sender
 * @param {String} to      Id of addressed peer
 * @param {String} message
 */
Transport.prototype.send = function(from, to, message) {
  throw new Error('Cannot invoke abstract function "send"');
};

module.exports = Transport;