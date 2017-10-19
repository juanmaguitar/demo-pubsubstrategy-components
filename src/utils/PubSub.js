import $ from 'jquery'

var topics = {};

$.Topic = function( id ) {
  var callbacks, method,
    topic = id && topics[ id ];

  if ( !topic ) {
    callbacks = $.Callbacks("unique stopOnFalse");
    topic = {
      publish: callbacks.fire,
      subscribe: callbacks.add,
      unsubscribe: callbacks.remove
    };
    if ( id ) {
      topics[ id ] = topic;
    }
  }
  return topic;
};