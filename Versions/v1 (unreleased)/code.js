// New format for unsandboxed extensions:
(function(Scratch) {
  'use strict';
  class D4S {
    getInfo () {
      return { /* ... */ };
    }
  }
  Scratch.extensions.register(new D4S());
})(Scratch);
