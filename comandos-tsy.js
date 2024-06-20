// TSUYURI : BY GL YT MX

const fs = require('fs')
const axios = require('axios')
const { exec, spawn, execSync } = require('child_process')
const speed = require('performance-now')
const chalk = require('chalk')
const yargs = require('yargs/yargs')
const _ = require('lodash')
const moment = require('moment')
const gradient = require('gradient-string')
const Jimp = require('jimp')
const path = require('path')
const fetch = require('node-fetch')
const { performance } = require('perf_hooks')
const osu = require('node-os-utils')
const PhoneNumber = require('awesome-phonenumber')
const yts = require('yt-search')
const ytdl = require('ytdl-core')
const FormData = require('form-data') 
const { youtubedl, youtubedlv2 } = require('@bochilteam/scraper');
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent,  proto,  generateWAMessageContent, generateWAMessage,  prepareWAMessageMedia,  downloadContentFromMessage,  areJidsSameUser,  getContentType } = require('@whiskeysockets/baileys')
const {  smsg,  getGroupAdmins,  clockString,  sleep,  getBuffer,  fetchJson, isUrl } = require('./docs/func')
require('./store.js')

const msgs = (message) => {
return message.length >= 10 ? message.substring(0, 500) : message
}

module.exports = client = async (client, m, mesaages, store) => {
try {
const { type, quotedMsg, mentioned, now, fromMe } = m
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.message.listResponseMessage && m.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith('.') && m.message.listResponseMessage.singleSelectReply.selectedRowId) ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : '' : prefa ?? global.prefix

const command = body.slice(prefix.length).trim().split(/\s+/)[0].toLowerCase()
const args = body.trim().split(/\s+/).slice(1)
const chatContent = (() => { 
const messageTypes = { 'conversation': m.message.conversation, 'imageMessage': m.message.imageMessage?.caption, 'documentMessage': m.message.documentMessage?.caption, 'videoMessage': m.message.videoMessage?.caption, 'extendedTextMessage': m.message.extendedTextMessage?.text, 'buttonsResponseMessage': m.message.buttonsResponseMessage?.selectedButtonId, 'templateButtonReplyMessage': m.message.templateButtonReplyMessage?.selectedId, 'listResponseMessage': m.message.listResponseMessage?.singleSelectReply?.selectedRowId, 'messageContextInfo': m.message.listResponseMessage?.singleSelectReply?.selectedRowId }; return messageTypes[m.mtype] || '' })()
const pushname = m.pushName || 'Sin Nombre'
const text = args.join(' ')
const q = args.join(" ") 
const quoted = m.quoted || m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = m.key.remoteJid
const isCreator = global.owner.some(([number]) => number.replace(/[^\d\s().+:]/g, '').replace(/\s/g, '') + '@s.whatsapp.net' === m.sender)
const isbot = await client.decodeJid(client.user.id)
const sender = m.isGroup ? (m.key.participant || m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await client.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(isbot) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isAnti = true

const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `6285600793871-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': null, thumbnail: null,sendEphemeral: true}}
  
//Base de datos
let user = global.db.data.users[m.sender]
let chats = global.db.data.chats[m.chat]

let isNumber = x => typeof x === 'number' && !isNaN(x)
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!('lenguaje' in user)) user.lenguaje = 'es'
if (!('registered' in user)) user.registered = false

if (!user.registered) {
if (!('name' in user)) user.name = m.name
if (!isNumber(user.age)) user.age = -1
if (!isNumber(user.regTime)) user.regTime = -1
}
if (!isNumber(user.limit)) user.limit = 20
if(!isNumber(user.premium)) user.premium = false
} else global.db.data.users[m.sender] = { limit: 20 }

if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('antilink' in chats)) chats.antilink = true
if (!('antifake' in chats)) chats.antifake = false  
if (!('detect' in chats)) chats.detect = true 	
if (!('mute' in chats)) chats.mute = false
} else global.db.data.chats[m.chat] = {
antilink: true,
antifake: false,
detect: true, 	
mute: false
}
  
//Lenguaje
let lang = global.db.data.users[m.sender]?.lenguaje || 'es'
const L = JSON.parse(fs.readFileSync(`./docs/idiomas/${lang}.json`))
const { 
config: { anti_link: nLnk, anti_fake: aFk }, 
ai: { gemini, ia }, 
info: { menu, allmenu, ping, status, report, script }, 
dl: { play, play2, play3, gitclone: clone, tiktok, facebook },
group: { admins, settings, demote, fantasmas, hidetag, infogroup, kick, promote, tagall },
owner: { update: upd, join, restart }, 
rpg: { reg }, setup,
on_off: { antilink, antifake },
tools: { traducir },
stickers: { sticker }
} = L

global.mess = {
success: setup.text1, admin: setup.text2,
botAdmin: setup.text3, owner: setup.text4,
group: setup.text5, private: setup.text6,
bot: setup.text7, error: setup.text8,
wait: setup.text9, premium: setup.text10
}

const link = 'https://whatsapp.com/channel/0029VaeCUbe7oQhYspx4J52O'
const fotos = 'https://telegra.ph/file/6468a897ce677cdac4202.jpg'
const Title = wm
const Body = 'MDK'

if (m.message) {
const fecha = chalk.bold.magentaBright(`\n✨️ FECHA: ${chalk.whiteBright(moment().format('DD/MM/YY HH:mm:ss'))}`)
const mensaje = chalk.bold.greenBright(`\n✨️ MENSAJE: ${chalk.whiteBright(msgs(m.text))}`)
const usuario = chalk.bold.blueBright(`\n✨️ USUARIO: ${chalk.yellowBright(pushname)}`)
const remitente = chalk.bold.redBright(`\n✨️ REMITENTE: ${gradient('deepskyblue', 'darkorchid')(sender)}`)
const grupo = m.isGroup ? chalk.bold.cyanBright(`\nGrupo: ${chalk.greenBright(groupName)}\nID: ${gradient('violet', 'midnightblue')(from)}`) : chalk.bold.redBright('\nChat privado\n')
console.log(`${fecha}\n${mensaje}\n${usuario}\n${remitente}\n${grupo}`)
}

if (m.mtype === 'interactiveResponseMessage') {   
let msg = m.message[m.mtype]  || m.msg
if (msg.nativeFlowResponseMessage && !m.isBot ) { 
let { id } = JSON.parse(msg.nativeFlowResponseMessage.paramsJson) || {}  
if (id) {
let emit = { 
key : { ...m.key } , 
message:{ extendedTextMessage : { text : id } } ,
pushName : m.pushName,
messageTimestamp  : m.messageTimestamp || 754785898978
}
return client.ev.emit('messages.upsert', { messages : [ emit ] ,  type : 'notify'})
}}}

if (global.db.data.chats[m.chat].antilink && global.db.data.users[m.sender].lenguaje && groupMetadata) {
let linksProhibidos = {
'telegram': /telegram\.me|t\.me/gi,
'facebook': /facebook\.com/gi,
'whatsapp': /chat\.whatsapp\.com/gi,
'youtube': /youtu\.be|youtube\.com/gi
}
function vl(mensaje, tiposEnlaces) {
for (let tipo of tiposEnlaces) {
if (mensaje.match(linksProhibidos[tipo])) {
return true
}
}
return false
}
let EnlacesProhibidos = ['whatsapp', 'telegram']
if (vl(m.text, EnlacesProhibidos)) {
if (!isBotAdmins) return m.reply(nLnk.text6)
let gclink = (`https://chat.whatsapp.com/` + await client.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return client.sendMessage(m.chat, { text: nLnk.text1 + ` *${groupName}*` }, { quoted: m })
if (isAdmins) return client.sendMessage(m.chat, { text: nLnk.text2 }, { quoted: m })
if (isCreator) return client.sendMessage(m.chat, { text: nLnk.text3 }, { quoted: m })
await client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.key.id, participant: m.key.participant } })
client.sendMessage(from, { text: `${nLnk.text4}\n\n@${m.sender.split('@')[0]} ${nLnk.text5}`, contextInfo: { mentionedJid: [sender] } }, { quoted: m })
}
}

if (global.db.data.chats[m.chat].antifake && !isAdmins && global.db.data.users[m.sender].lenguaje) {
let forbidPrefixes = ['965', '966', '971', '974', '212', '213', '216', '44', '1', '62', '61', '64', '353', '33', '32', '41', '352', '377', '351', '244', '258', '91', '977', '880', '92', '94', '960', '7', '380', '375', '998', '996', '373', '374', '994', '992', '62', '49', '43', '39', '378', '379', '86', '886', '852', '853', '65', '850', '82', '93', '98', '48', '84', '856', '855', '254', '255', '256', '250', '257', '258', '252', '269', '243', '90', '998', '60', '222', '27', '265']
for (let prefix of forbidPrefixes) {
if (m.sender.startsWith(prefix)) {
await m.reply(aFk.text1)
client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}}}
  
switch(prefix && command) {

case 'play': {
if (!text) return m.reply(play.text1)
try {
m.react('🚩') 
const search = await yts(`${text}`)
const data = search.all
const Ibuff = await getBuffer(data[0].image)
const ytMsg = `\`${play.text2}\`\n\n${play.text3} _${search.all[0].title}_\n${play.text4} _${search.all[0].views}_\n${play.text5} _${search.videos[0].url}_`
await client.sendButton(m.chat, ytMsg, play.text6, null, [['Audio 🔊', `${prefix}play2 ${text}`], ['Video 🎞️', `${prefix}play3 ${text}`], [`${play.text7}`, `${prefix}yts ${text}`]], null, null, m)
} catch (e) {
return m.reply(play.text8 + '\n\n> ' + e)
}
}
break

case 'ytmp3': case 'play2': {
if (!text) return m.reply(play2.text1)
const search = await yts(`${text}`)
const data = await search.all.filter((v) => v.type == 'video')
m.react('🕕') 
try {
var resC = data[0]
} catch {
var resD = data[1]
}
try {
let c = '360' + 'p'
let y = search.videos[0].url
const yt = await youtubedl(y).catch(async _ => await youtubedlv2(y))
const dl_url = await yt.video[c].download()
const ttl = await yt.title
const size = await yt.video[c].fileSizeH
client.sendMessage(m.chat, { audio: {url: dl_url}, mimetype: 'audio/mpeg'}, {quoted: m})
m.react('✅') 
} catch (e) {
return m.reply(play3.text2 + '\n\n> ' + e)
m.react('❎') 
}
}
break

case 'ytmp4': case 'play3': {
if (!text) return m.reply(play3.text1)
const search3 = await yts(`${text}`)
const data2 = await search3.all.filter((v) => v.type == 'video')
m.react('✨️') 
try {
var resC = data2[0]
} catch {
var resD = data2[1]
}
try {
let c = '720' + 'p'
let y = search3.videos[0].url
const yt = await youtubedl(y).catch(async _ => await youtubedlv2(y))
const dl_url = await yt.video[c].download()
const ttl = await yt.title
const size = await yt.video[c].fileSizeH
await client.sendMessage(m.chat, { document: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `✨️ TsuyuriBot : By GL YT MX ✨️`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m })
m.react('🌹') 
} catch (e) {
return m.reply(play3.text2 + '\n\n> ' + e)
m.react('❌️') 
}
}
break  
    
//「 FUNCION EVA (>) <OWNER> 」
if (budy.startsWith('_')) {
if (!isCreator) return
try {
return m.reply(JSON.stringify(eval(budy.slice(2)), null, '\t'))
} catch (e) {
e = String(e)
m.reply(e)
}}
if (budy.startsWith('-')) {
if (!isCreator) return
try {
return  reply(JSON.stringify(eval(`(async () => { ${budy.slice(3)} })()`), null, '\t'))  //gata.sendMessage(from, JSON.stringify(eval(`(async () => { ${budy.slice(3)} })()`), null, '\t'), text, { quoted: msg })
} catch (e) {
e = String(e)
m.reply(e)
}}
		
}
} catch (MDK) {
console.log(MDK)
}}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.greenBright(`\n\nSe actualizo el archivo ${__filename}`))
delete require.cache[file]
require(file)
})
