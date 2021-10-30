let handler = async m => m.reply(`
*「 LIST HARGA SEWA BOT 」*

❖━━━━━❖•RULZT JB•❖━━━━━━❖
➳OPEN JASA SEWA BOT
❖━━━━━❖•◈•❖━━━━━━❖
✰KEUNTUNGAN SEWA BOT✰
➳BISA BUAT JAGA GRUP
➳BISA BUAT BERSENANG SENANG
❖━━━━━❖•◈•❖━━━━━━❖
✰HARGA SEWA BOT✰
➳PERBULAN : 15K
➳PERMANEN : 30k
❖━━━━━❖•◈•❖━━━━━━❖
✰NOMOR OWNER BOT✰
➳wa.me/6285926431562
❖━━━━━❖•◈•❖━━━━━━❖
✰BOTZ AKTIF 24 JAM✰
`.trim()) // Tambah sendiri kalo mau
handler.help = ['sewabot', 'buypremium']
handler.tags = ['main']
handler.command = /^(sewabot|buypremium)$/i

handler.limit = false

module.exports = handler
