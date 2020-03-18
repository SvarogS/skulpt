const $builtinmodule = function(name) {
  const mod = {};

  const goRight = function(steps) {
    Sk.builtins.raccoon.goRight(steps);
    return 'right';
  };
  mod.goRight = new Sk.builtin.func(function(steps = 1) {
    return goRight(steps.v);
  });

  const goLeft = function(steps) {
    Sk.builtins.raccoon.goLeft(steps);
  };
  mod.goLeft = new Sk.builtin.func(function(steps = 1) {
    return goLeft(steps.v);
  });

  const goUp = function(steps) {
    Sk.builtins.raccoon.goUp(steps);
  };
  mod.goUp = new Sk.builtin.func(function(steps = 1) {
    return goUp(steps.v);
  });

  const goDown = function(steps) {
    Sk.builtins.raccoon.goDown(steps);
  };
  mod.goDown = new Sk.builtin.func(function(steps = 1) {
    return goDown(steps.v);
  });

  const wait = function(steps) {
    Sk.builtins.raccoon.wait(steps);
  };
  mod.wait = new Sk.builtin.func(function(steps = 1) {
    return wait(steps.v);
  });

  const look = function(xOffset, yOffset) {
  	return Sk.ffi.remapToPy(Sk.builtins.raccoon.look(xOffset, yOffset));
  };
  mod.look = new Sk.builtin.func(function(xOffset = 0, yOffset = 0) {
    return look(xOffset.v, yOffset.v);
  });

  // mod.Stack = Sk.misceval.buildClass(mod, function($gbl, $loc) {
  //     $loc.__init__ = new Sk.builtin.func(function(self) {
  //         self.stack = [];
  //     });
  //     $loc.push = new Sk.builtin.func(function(self,x) {
  //         self.stack.push(x);
  //     });
  //     $loc.pop = new Sk.builtin.func(function(self) {
  //         return self.stack.pop();
  //     });
  // }, 'Stack', []);

  return mod;
};
