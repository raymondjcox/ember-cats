/* jshint node: true */

module.exports = {
  development: {
    buildEnv: 'production',
    store: {
      type: 'redis',
      host: "localhost",
      port: 6379
    },
    assets: {
      type: 's3',
      gzip: true, // if undefined or set to true, files are gziped
      gzipExtensions: ['js', 'css', 'svg'], // if undefined, js, css & svg files are gziped
      accessKeyId: process.env['MY_AWS_ACCESS_KEY_ID'],
      secretAccessKey: process.env['MY_AWS_ACCESS_KEY_SECRET'],
      bucket: 'embercats'
    }
  }
};
