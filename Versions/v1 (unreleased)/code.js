// Old sandboxed extensions (worker or <iframe> sandbox):
class MyExtension {
  getInfo () {
    return { /* ... */ };
  }
}
Scratch.extensions.register(new MyExtension());

// Old unsandboxed extensions or "plugins":
class MyExtension {
  getInfo () {
    return { /* ... */ };
  }
}
(function() {
  var extensionInstance = new MyExtension(window.vm.extensionManager.runtime)
  var serviceName = window.vm.extensionManager._registerInternalExtension(extensionInstance)
  window.vm.extensionManager._loadedExtensions.set(extensionInstance.getInfo().id, serviceName)
})();

// New format for unsandboxed extensions:
(function(Scratch) {
  'use strict';
  class MyExtension {
    getInfo () {
      return { /* ... */ };
    }
  }
  Scratch.extensions.register(new MyExtension());
})(Scratch);
