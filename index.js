const Discord = require('discord.js')
const client = new Discord.Client()

var sort_message_id = 368829711754723340
const reacEnum = ['Argent','Or','Platine','Diamant','Champion','GrandChampion']

 
client.on('ready', () => {
  console.log('I am ready!')
})
 
client.on('message', message => {
  console.log(message.id+' sent by '+message.author.username+': '+message.content)
  if (message.content === 'cul') {
    sort_message_id = message.id
  }
  if (message.author.username === 'Francophony') message.reply('J\'ai oublié mon adresse email ! :(')
})

client.on('messageReactionAdd', (messageReaction, user) => {
  console.log(user.username+' has reacted')
  if (messageReaction.message.id === sort_message_id) {
    var reac = messageReaction.emoji.name
    if (reacEnum.indexOf(reac)!==-1) console.log(user.username+' has now role '+reac+' (PC)')
  }
  // messageReaction.message
})

client.on('messageReactionRemove', (messageReaction, user) => {
  // console.log(messageReaction)
})
 
client.login('MzY4Nzg2NjQ2MTY4MTA5MDU2.DMPPKA.8M6kILG7Taefw5vh3M5cfEBE6xE')

