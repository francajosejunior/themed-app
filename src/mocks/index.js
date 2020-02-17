const modules = [];
const context = require.context('./', false, /Mock\.js$/);

context.keys().forEach(filename => {
  const ctx = context(filename);
  if (ctx.default) {
    modules.push(ctx.default);
  }
});

export default url => {
  let result;
  modules.forEach(m => {
    result = m(url);
  });
  if (result) {
    return result;
  }
  return undefined;
};
