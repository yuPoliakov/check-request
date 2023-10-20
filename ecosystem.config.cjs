module.exports = {
  apps: [
    {
      name: 'check-request',
      port: 80,
      exec_mode: 'cluster',
      instances: '1',
      script: './.output/server/index.mjs'
    },
  ],
}