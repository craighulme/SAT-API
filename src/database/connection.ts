import mysql from 'mysql2/promise';

let connection;

async function connectToDatabase() {
  if (!connection) {
    connection = await mysql.createConnection({
      host: 'localhost',
      user: 'your-username',
      password: 'your-password',
      database: 'sat-preparation-system'
    });
  }
  return connection;
}

export default connectToDatabase;