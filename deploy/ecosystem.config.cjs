module.exports = {
  apps: [
    { name: 'directus', script: '/directus/cli.js', args: 'start', cwd: '/directus', env: { PORT: '8055' } },
    { name: 'site', script: '/app/dist/server/entry.mjs', cwd: '/app', env: { PORT: '4321', HOST: '0.0.0.0', CMS_URL: 'http://127.0.0.1:8055' } },
  ],
};
