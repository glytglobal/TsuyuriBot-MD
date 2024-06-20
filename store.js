// <EDITAR LOS NUMEROS AQUI>

const fs = require('fs')
const chalk = require('chalk')

// OWNERS
global.owner = [
['5493794297363', true], 
['5493795319019'], 
['5493795319022']]

// VARIABLES <INFO>
global.wm = '✨️ TsuyuriBot-MD ✨️'
global.prefa = '.'
global.session = 'session'
global.vs = '1.0.0'
global.author = 'MDK - GL YT MX'

// VARIABLES <MENSAJES>
global.exito = "🌹 𝐑𝐄𝐀𝐋𝐈𝐙𝐀𝐃𝐎 𝐂𝐎𝐍 𝐄𝐗𝐈𝐓𝐎 🌹"
global.error = "❗️ 𝐎𝐂𝐔𝐑𝐑𝐈𝐎 𝐔𝐍 𝐄𝐑𝐑𝐎𝐑 ❗️"
global.usomal = "⛔️ 𝐔𝐒𝐎 𝐌𝐀𝐋 ⛔️"
global.ejemplo = "❕️ 𝐄𝐉𝐄𝐌𝐏𝐋𝐎 ❕️"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Actualización '${__filename}'`))
delete require.cache[file]
require(file)
})
