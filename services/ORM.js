var ORM = function(database_driver, database_host, database_user, database_password, database_name, database_charset) {
    
    var knex = require('knex')({
        client: database_driver,
        connection: {
            host     : database_host,
            user     : database_user,
            password : database_password,
            database : database_name,
            charset  : database_charset
        }
    });

    var bookshelf = require('bookshelf')(knex);

    return bookshelf;
};

module.exports = ORM;