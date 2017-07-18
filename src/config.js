/**
 * @flow
 */

// Used by all environments
const baseConf = {
  TREE_NAMES: [
    'Maple',
    'Wisteria',
    'Oak',
    'Sequoia',
    'Eucalyptus',
    'Jacarandas',
    'Baobab',
    'Rhododendron',
  ],
}

// Dev & Prod Environment
const devConf = {
  FOREST_ENV_SECRET: 'fade15699f05eff37e7911db953f5fb87fe639f149d30e9721c237b0273622eb',
  FOREST_AUTH_SECRET: 'tJbww6kBsDOMfeI9wxobxnhDxMttkO4F',
  MONGO: 'mongodb://tree:tree@ds117819.mlab.com:17819/dev_tree',
}
const prodConf = {
  FOREST_ENV_SECRET: '99b2cc318043c7e5ca043421d033897db5deb7b457e5bcf18e03b16c6a6afc41',
  FOREST_AUTH_SECRET: 'b2ce0bdabdffc42c841121797a18983f47f0e92a88a22690f171ff39f01ed7b7',
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
