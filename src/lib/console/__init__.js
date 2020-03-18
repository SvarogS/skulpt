const $builtinmodule = function(name) {
  const mod = {};

  const setValue = function(variable, value) {
    Sk.builtins.console.setValue(variable, value);
  };
  mod.setValue = new Sk.builtin.func(function(variable, value) {
    return setValue(variable.v, value.v);
  });

  const getValue = function(variable) {
    return Sk.ffi.remapToPy(Sk.builtins.console.getValue(variable));
  };
  mod.getValue = new Sk.builtin.func(function(variable) {
    return getValue(variable.v);
  });


  return mod;
};
