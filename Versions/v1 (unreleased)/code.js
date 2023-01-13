// New format for unsandboxed extensions:
(function(Scratch) {
  'use strict';
  class D4S {
    getInfo() {
      return {
        // `id` is the internal ID of the extension
        // It should never change!
        // If you choose to make an actual extension, please change this to something else.
        // Only the characters a-z and 0-9 can be used. No spaces or special characters.
        id: 'myextensionexample',

        // `name` is what the user sees in the toolbox
        // It can be changed without breaking projects.
        name: 'Cool Extension',

        blocks: [
          {
            // `opcode` is the internal ID of the block
            // It should never change!
            // It corresponds to the class method with the same name.
            opcode: 'hello',
            blockType: Scratch.BlockType.REPORTER,
            text: 'Hello, world!'
          }
        ]
      };
    }

    /**
     * Corresponds to `opcode: 'hello'` above
     */
    hello() {
      // You can just return a value: any string, boolean, or number will work.
      // If you have to perform an asynchronous action like a request, just return a Promise.
      // The block will wait until the Promise resolves and return the resolved value.
      return 'Hello, world!';
    }
  }
  Scratch.extensions.register(new D4S());
})(Scratch);
