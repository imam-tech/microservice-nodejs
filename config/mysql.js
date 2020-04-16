const knex  = require('knex')
const bookshelf = require('bookshelf')
const eloquent  = require('bookshelf-eloquent')

const main = knex({
    client:mysql,
    connection:{
        host     : 'localhost',
        user     : 'root',
        password : 'qwerty@12',
        database : 'master_com',
        charset  : 'utf8'
    }
})

const DB    = bookshelf(main)
DB.plugin(eloquent)

module.exports  = DB