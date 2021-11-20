let handler = function (m) {
  // this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  let contacts = []
  for (let owner of Object.entries(global.Owner).filter(v => v[1].isCreator)) {
    contacts.push(...[owner[0], owner[1].name])
  }
  if (contacts.length < 3) return this.sendContact(m.chat, '6285926431562', 'Acadian store', m)
  this.sendContactRulzt(m.chat, '6285926431562', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
