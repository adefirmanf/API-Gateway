const path = process.env.PWD + '/config/service.json'
const fs = require('fs')
const sha256 = require('sha256')

//You can't running file in here. Please using `npm run generate` on base project

function Generate(){
    let data = require(path)
    data.token = sha256(data.secret)
    fs.writeFile(path, JSON.stringify(data, null, 2), (err)=>{
        if(err){console.log(err)}
        console.log(`Your token has been generated : ${data.token}`)
    })
}
Generate()