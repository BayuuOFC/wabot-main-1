let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Axis [083834441926]
│ • Telkomsel [081285866502]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay [089525518325]
│ • DANA [01285866502]
╰────
“Setiap orang berada di bawah naungan sedekahnya (pada hari kiamat) hingga diputuskan di antara manusia atau ia berkata: “Ditetapkan hukuman di antara manusia.” Yazid berkata: “Abul Khair tidak pernah melewati satu haripun melainkan ia bersedekah padanya dengan sesuatu, walaupun hanya sepotong kue atau bawang merah atau seperti ini.” (HR. Al-Baihqi, Al-Hakim dan Ibnu Khuzaimah).
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
