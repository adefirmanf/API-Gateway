const elasticsearch = require('elasticsearch')
const service = require('../config/service').service

const client = new elasticsearch.Client({
    host : `${service.url}:${service.port}`
})

function Get(){
    return new Promise((resolve, reject)=>{      
        client.search({
            index : 'api',
            type : 'endpoints',
        }).then((msg)=>{
            resolve(msg.hits.hits)
        })
    })
}

module.exports = Get;