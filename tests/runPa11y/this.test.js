const fs = require('fs');
const path = require('path');

// actual test
const pluginCore = require('../../plugin/pluginCore.js');
test('runPa11y works', async () => {
  const results = await pluginCore.runPa11y({
    htmlFilePaths: [path.join(__dirname, 'publishDir/index.html')],
    build: { failBuild() {} },
    timeout: 30000
  });
  expect(results).toMatchSnapshot();
});
