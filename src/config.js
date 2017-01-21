/**
 * @flow
 */

// Used by all environments
const baseConf = {

}

// Dev & Prod Environment
const devConf = {
  FOREST_ENV_SECRET: '7aad16d3dd6e545705a67aba490c505e3519c9d439b6a3d37897643c248c0012',
  FOREST_AUTH_SECRET: '',
  MONGO: 'mongodb://tree:tree@ds117819.mlab.com:17819/dev_tree',
}
const prodConf = {
  FOREST_ENV_SECRET: '7aad16d3dd6e545705a67aba490c505e3519c9d439b6a3d37897643c248c0012',
  FOREST_AUTH_SECRET: '',
  MONGO: 'mongodb://tree:tree@ds117819.mlab.com:17819/prod_tree',
}

const exportConf = {}

switch (process.env.NODE_ENV) {
  case 'production':
    Object.assign(exportConf, baseConf, prodConf)
    break
  default:
    Object.assign(exportConf, baseConf, devConf)
}

export default exportConf
