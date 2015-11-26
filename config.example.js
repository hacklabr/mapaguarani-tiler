// More examples here: https://github.com/CartoDB/Windshaft-cartodb/blob/master/config/environments/

module.exports = {
  port: 4000,
  postgres: {
    user: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    srid: 4326
  },
  dbname: 'mapaguarani',
  redis: {
    host: '127.0.0.1',
    port: 6379
  },
  // Seconds since "last creation" before a detached
  // or template instance map expires. Or: how long do you want
  // to be able to navigate the map without a reload ?
  // Defaults to 7200 (2 hours)
  mapConfigTTL: 7200,
  // idle socket timeout, in milliseconds
  socket_timeout: 600000.
  geometry_field: 'polygon',
  cache_basedir: '/tmp/windshaft/millstone',
  land_tenures_api: 'http://localhost:8000/api/land_tenures',
  land_tenures_status_api: 'http://localhost:8000/api/land_tenures_status'
};
