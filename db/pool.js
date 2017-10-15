var mysql=require('mysql');
var pool=global.pool;

if(!pool){
    pool=mysql.createPool({
        user:'root',
        password:'root',
        database:'exam'
    });
    global.pool=pool;
}
module.exports=pool;