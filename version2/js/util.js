define(function (require) {

  var $ = require('jquery');

  return {
    loadTemplate: function( name ) {
      if ( !this._cache[ name ] ) {
        this._cache[ name ] = $.get( '/templates/' + name );
      }

      return this._cache[ name ];
    },

    _cache: {}
  };
});
