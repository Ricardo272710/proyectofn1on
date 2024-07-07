// By https://github.com/elrebelde21

let handler = async (m, { conn, text}) => {

m.reply(`╭┄〔 *𝗧𝗶𝗺𝗲 Spider 𝗕𝗼𝘁* 〕┄⊱\n┊\n┊ *${pickRandom(global.anuel)}*\n┊\n╰━⊰ Ricardo ⊱━დ`)
}
handler.tags = ['humor']
handler.command = ['ricardo']
export default handler

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}

global.ricardo = ["¿Se te olvidó que tú y yo somos fueguito🔥y me lo chupaste en tu cuarto?"]
