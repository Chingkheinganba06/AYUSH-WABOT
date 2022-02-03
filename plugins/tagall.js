let handler = async (m, { conn, text, participants }) => {
  let users = participants.map(u => u.jid)
  m.reply(text + '\n' + users.map(v => '🎗️@' + v.replace(/@.+/, '')).join`\n`, null, {
    contextInfo: { mentionedJid: users }
  })
}
handler.help = ['tagall']
handler.tags = ['group']
handler.command = /^tagall$/i

handler.admin = false
handler.group = true
handler.owner = false
handler.mod = false

module.exports = handler
