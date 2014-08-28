Package.describe({
  summary: 'Automatically shows a NProgress.js bar during DDP data exchange',
  version: '0.2.9',
});

Package.on_use(function (api) {
  api.versionsFrom('0.9.0');
  api.use('mrt:nprogress@0.0.5');
  api.add_files('auto-nprogress.js', 'client');
});

Package.on_test(function (api) {
  api.use(['tinytest', 'test-helpers', 'mrt:nprogress@0.0.5'], 'client');
  api.add_files('tests/auto-nprogress-test.js');
  api.add_files('auto-nprogress.js', 'client');
});
