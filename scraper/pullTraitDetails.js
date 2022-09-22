const skillArray = require('./traitIds.json')
const fs = require('fs')
const https = require('https');

const getSkillDetails = async (url, nameIdMap) => {
    return new Promise((resolve) => {
        let data = ''

        https.get(url, res => {

            res.on('data', chunk => { data += chunk }) 

            res.on('end', () => {
                const jsonData = JSON.parse(data)
                if (nameIdMap[jsonData.name]){
                    nameIdMap[jsonData.name].push(jsonData.id)
                } else {
                    nameIdMap[jsonData.name] = [jsonData.id]
                }
               resolve(console.log(data));

            })
        }) 
    })
}

const skillNameIdMappings = {}

async function getAllSkillIds(){
    for (const id of skillArray) {
    const options = {
        hostname: 'api.guildwars2.com',
        port: 443,
        path: `/v2/traits/${id}`,
        method: 'GET',
      };

    await getSkillDetails(`https://${options.hostname}${options.path}`, skillNameIdMappings)
}
console.log("MAPPINGS: ", skillNameIdMappings)
fs.writeFileSync('traitIdMap', Buffer.from(JSON.stringify(skillNameIdMappings)))
}

getAllSkillIds()
