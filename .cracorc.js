const CracoLessPlugin = require('craco-less');
const CracoAlias = require('craco-alias');
//#0066ff
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#344e41' },
            javascriptEnabled: true
          }
        }
      }
    },
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: './tsconfig.json'
      }
    }
  ]
};
