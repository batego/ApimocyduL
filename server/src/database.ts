import mysql from 'promise-mysql';
import keys from './keys';

const pool= mysql.createPool(keys.database);

pool.getConnection().then(conection =>{
    pool.releaseConnection(conection);
    console.log('MySql is Connect Now..!');
}).catch((err)=>{
    console.log(`Error Conectando la Base de Datos ${err}`);
});

export default pool;