Package.describe({
  name: 'pascoual:chartjs',
  version: '2.0.0_1',
  summary: 'Chart.js - Simple, clean and engaging charts for designers and developers',
  git: 'https://github.com/pascoual/meteor-chartjs.git',
  documentation: 'README.md'
});


Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('templating', 'client');
  api.addFiles([
    'canvas.html',
    //'color.js',
    'Chart.js'
  ], 'client');

  //api.export('Color', 'client');
  api.export('TmpChart', 'client');
});
