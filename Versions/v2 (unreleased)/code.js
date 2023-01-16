// New format for unsandboxed extensions:
(function(Scratch) {
  'use strict';
  class D4S {
    getInfo() {
      return {
        // `id` is the internal ID of the extension. It should never change!
        // `name` is what the user sees in the toolbox. It can be changed
        id: 'd4s',
        name: 'D4S',

        blocks: [
          {
            // `opcode` is the internal ID of the block. It should never change!
            opcode: 'd4s_base_token',
            blockType: Scratch.BlockType.COMMAND,
            text: 'Connect to discord, with token [TOKEN]'
            arguments: {
              TOKEN: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'token'
              }
            }
          }
        ]
      };
    }
    
    // Where the blocks do stuff
    d4s_base_token(args) {
      // You can just return a value: any string, boolean, or number will work.
      // If you have to perform an asynchronous action like a request, just return a Promise.
      // The block will wait until the Promise resolves and return the resolved value.
      return args.TOKEN;
    }
  }
  Scratch.extensions.register(new D4S());
})(Scratch);
