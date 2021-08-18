module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'strapi-dev1.ctkkdi0tsumb.eu-west-1.rds.amazonaws.com'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi-dev'),
        username: env('DATABASE_USERNAME', 'admin'),
        password: env('DATABASE_PASSWORD', 'JOv8QBl8Jxb11n9DPM4U'),
      },
      options: {
        ssl: false
      }
    },
  },
});
