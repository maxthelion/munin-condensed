var LinkStore = function(){
  var self = this;
  this._data = {}
  
  this.save = function(){
    var s = window.btoa( JSON.stringify(self._data) )
    history.pushState(null, null, '#'+ s)
  };

  this.onLoad = function(callback){
    window.addEventListener("popstate", function(e) {
      if (window.location.hash.replace(/#/g, '') == ""){
        self._data = {}
      } else {
        self._data = JSON.parse( window.atob( window.location.hash.replace(/#/g, '') ) );
      }
      callback( self );
    });
  };
}

