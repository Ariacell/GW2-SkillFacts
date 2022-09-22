const skillArray = require('./skillIds.json')
const fs = require('fs')
const https = require('https');

// console.log(skillArray[400])

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
        path: `/v2/skills/${id}`,
        method: 'GET',
      };

    await getSkillDetails(`https://${options.hostname}${options.path}`, skillNameIdMappings)
}
console.log("MAPPINGS: ", skillNameIdMappings)
fs.writeFileSync('skillIdMap', Buffer.from(JSON.stringify(skillNameIdMappings)))
}

getAllSkillIds()
