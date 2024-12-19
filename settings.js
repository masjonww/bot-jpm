require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "6281312988127"
global.namaowner = "Dnz."
global.namaowner2 = "Dnz"

//======== Setting Bot & Link ========//
global.namabot = "Dnz" 
global.namabot2 = "DnzBot"
global.version = "v5.0.0" // jangan di ganti
global.foother = "Created By Dnz" 
global.waowner = "https://wa.me/6281312988127"
global.idsaluran = "-"
global.linkgc = 'https://chat.whatsapp.com/EIZANS3dcmr88kVyD8JV2J'
global.linksaluran = "https://whatsapp.com/channel/0029Vak2I117NoZs4B6gTx3H"
global.linkyt = 'https://www.youtube.com/@dnzstore01'
global.linktele = "https://t.me/dnzoffc"
global.packname = "Created By Dnz"
global.author = "Dnz" // jangan diganti

global.vidgif = 'https://files.catbox.moe/2gbwxv.mp4'
global.thumbgif = 'https://files.catbox.moe/1gyjic.jpg'

//========== Setting Event ==========//
global.autoread = false
global.anticall = false
global.autoreadsw = false
global.owneroff = false
global.antibug = true

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 5500
global.delayjpm = 5500

//========== Setting Foto ===========//

//========== Setting Panell ==========//
global.egg = "15"
global.loc = "1"
global.domain = "https://dnz.xyz"
global.apikey = "ptla_SBy6XTXMc88AMaTHzLPP62wKyv3dqPZqNOflNK9Z2At"
global.capikey = "ptlc_jJg6odEwMO8iztfrxjeyAU2ZqgGYboIzgQyx58LYRb"

//========= Setting Payment =========//
//Kalo Gak Ada Isi Aja jadi false
global.dana = false
global.gopay = false
global.ovo = false
global.qris = fs.readFileSync("./media/qris.jpg")
                             
//=========== Api Domain ===========//
global.zone1 = "594688a8d2f3ec8eac31bb0235bf9107"
global.apitoken1 = "KZiF7fjkM_zi1qVRWES4cv26YWCCkTRRgC1Ey9"
global.tld1 = "dnzstore.my.id"

//========== Api Domain 2 ==========//
global.zone2 = "a476ffcf9243c44a02220f184da527e8";
global.apitoken2 = "RsbJAI6X7s7bPEj23R7sf28cqHibApP1EBSoF4FZ";
global.tld2 = "mypanell.biz.id";
//========== Api Domain 3 ==========//
global.zone3 = "5f4a582dd80c518fb2c7a425256fb491";
global.apitoken3 = "iQbJQgfe6kTyEfdOy_EV8UAHKj80VgQg4t6rTjby";
global.tld3 = "tokopanellku.my.id";
//========== Api Domain 4 ==========//
global.zone4 = "d41a17e101c0f89f0aec609c31137f91";
global.apitoken4 = "miC4wpso1vMcRFR62ZvOFfFd9xTlawvHcXPYZgwi";
global.tld4 = "panellstore.net";

//========= Setting Message =========//
global.msg = {
"error": "Error terjasi kesalahan",
"done": "Done Bang ✅", 
"wait": "⏳Memproses . . .", 
"group": "Command Ini Hanya Untuk Didalam Grup", 
"private": "Command Ini Hanya Untuk Di Private Chat", 
"admin": "Command Ini Hanya Untuk Admin Grup", 
"adminbot": "Command Ini Dapat Di Gunakan Ketika Bot Menjadi Admin", 
"owner": "Maaf Command Ini Hanya Untuk Owner Bot",
"ZenzKey": "zenzkey_7fc49f657e25",
"developer": "Command Ini Hanya Untuk Developer Bot!"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})