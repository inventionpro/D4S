// New format for unsandboxed extensions:
(function(Scratch) {
  'use strict';
  // This is for compatibility with plugin loaders that don't implement window.Scratch
  // This code was borrowed from pen+ extension https://github.com/TurboWarp/extensions/blob/master/extensions/penplus.js
  // and as for justification I will say expanding the extension outside of turbowarp
  if (!Scratch) {
    Scratch = {
      // @ts-expect-error
      BlockType: {
        COMMAND: 'command',
        REPORTER: 'reporter',
        BOOLEAN: 'boolean',
        HAT: 'hat'
      },
      // @ts-expect-error
      ArgumentType: {
        STRING: 'string',
        NUMBER: 'number',
        COLOR: 'color',
        ANGLE: 'angle',
        BOOLEAN: 'Boolean',
        MATRIX: 'matrix',
        NOTE: 'note'
      },
      // @ts-expect-error
      vm: window.vm,
      extensions: {
        unsandboxed: true,
        register: (object) => {
          // @ts-expect-error
          const serviceName = vm.extensionManager._registerInternalExtension(object);
          // @ts-expect-error
          vm.extensionManager._loadedExtensions.set(object.getInfo().id, serviceName);
        }
      }
    };
    if (!Scratch.vm) {
      throw new Error('The VM does not exist');
    }
  }

  if (!Scratch.extensions.unsandboxed) {
    throw new Error('Pen+ must be run unsandboxed');
  }

  // actual extension
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
      client.login(args.TOKEN);
      return '';
    }
  }
  Scratch.extensions.register(new D4S());
})(Scratch);
