require('./settings')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const fetch = require('node-fetch')
const os = require('os')
const maker = require('mumaker')
const hx = require("hxz-api")
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const Pikakey = require('xfarr-api')
const cheerio = require ("cheerio")
const { AnyaPikaTiktok } = require('./lib/tiktokbyPika')
let { msgFilter } = require('./lib/antispam')
let { covid } = require('./lib/covid.js') 
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const thiccysapi = require('textmaker-thiccy')
const { AnyaPikaWiki } = require('./lib/AnyaPikawiki.js')
const textpro = require('./lib/textpro')
const { mediafireDl } = require('./lib/mediafire.js')
const { Gempa } = require("./lib/gempa.js")
const { jadwaltv }= require('./lib/jadwaltv')
const Pikatod = require("tod-api")
const { pinterest } = require("./lib/pinterest")
const toHur = require('@develoka/angka-terbilang-js')
const { hentai } = require('./lib/scraper2.js')
const {
 FajarNews, 
 BBCNews,
  metroNews,
  CNNNews,
  iNews,
  KumparanNews,
  TribunNews,
  DailyNews,
  DetikNews,
  OkezoneNews,
  CNBCNews,
  KompasNews,
  SindoNews,
  TempoNews,
  IndozoneNews,
  AntaraNews,
  RepublikaNews,
  VivaNews,
  KontanNews,
  MerdekaNews,
  KomikuSearch,
  AniPlanetSearch,
  KomikFoxSearch,
  KomikStationSearch,
  MangakuSearch,
  KiryuuSearch,
  KissMangaSearch,
  KlikMangaSearch,
  PalingMurah,
  LayarKaca21,
  AminoApps,
  Mangatoon,
  WAModsSearch,
  Emojis,
  CoronaInfo,
  JalanTikusMeme, 
  Cerpen,
  Quotes,
  Couples,
  Darkjokes
} = require("dhn-api")
//rpg function\\
   const { 
     addInventoriDarah, 
      cekDuluJoinAdaApaKagaDiJson, 
      addDarah, 
      kurangDarah, 
     getDarah 
   }  = require('./storage/user/darah.js')
   const { 
     cekInventoryAdaAtauGak, 
      addInventori,  
       addBesi, 
       addEmas, 
       addEmerald,
       addUmpan,
       addPotion,
       kurangBesi, 
       kurangEmas, 
       kurangEmerald, 
       kurangUmpan,
       kurangPotion,
       getBesi, 
      getEmas, 
     getEmerald,
     getUmpan,
    getPotion
   } = require('./storage/user/alat_tukar.js')
   const { 
    addInventoriMonay, 
    cekDuluJoinAdaApaKagaMonaynyaDiJson, 
    addMonay, 
    kurangMonay, 
   getMonay 
   } = require('./storage/user/monay.js')
   const { 
    addInventoriLimit, 
    cekDuluJoinAdaApaKagaLimitnyaDiJson, 
    addLimit, 
    kurangLimit, 
    getLimit 
   } = require('./storage/user/limit.js')
   const { 
    cekDuluHasilBuruanNya, 
     addInventoriBuruan, 
     addIkan,
      addAyam, 
      addKelinci, 
      addDomba, 
      addSapi,
      addGajah,
      kurangIkan,
      kurangAyam, 
      kurangKelinci, 
      kurangDomba, 
      kurangSapi,
      kurangGajah,
      getIkan,
      getAyam, 
      getKelinci, 
      getDomba,
     getSapi,
    getGajah
   } = require('./storage/user/buruan.js')
   let DarahAwal =  global.rpg.darahawal
   const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)   
   const isCekDarah = getDarah(m.sender)
   const isUmpan = getUmpan(m.sender)
   const isPotion = getPotion(m.sender)
   const isIkan = getIkan(m.sender)
   const isAyam = getAyam(m.sender)
   const isKelinci = getKelinci(m.sender)
   const isDomba = getDomba(m.sender)
   const isSapi = getSapi(m.sender)
   const isGajah = getGajah(m.sender)
   const isMonay = getMonay(m.sender)
   const isLimit = getLimit(m.sender)
   const isBesi = getBesi(m.sender)
   const isEmas = getEmas(m.sender)
   const isEmerald = getEmerald(m.sender)
   const isInventory = cekInventoryAdaAtauGak(m.sender)
   const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
   const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
   const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
   const ikan = ['🐟','🐠','🐡']   


//rpg database\\
 let _limit = JSON.parse(fs.readFileSync('./storage/user/limit.json'));
 let _buruan = JSON.parse(fs.readFileSync('./storage/user/hasil_buruan.json'));
 let _darahOrg = JSON.parse(fs.readFileSync('./storage/user/darah.json'));

let Pikachusticker = JSON.parse(fs.readFileSync('./AnyaPikaMedia/theme/storemedia/sticker.json'));
let Pikachuaudio = JSON.parse(fs.readFileSync('./AnyaPikaMedia/theme/storemedia/audio.json'));
let Pikachuimage = JSON.parse(fs.readFileSync('./AnyaPikaMedia/theme/storemedia/image.json'));
let Pikachuvideo = JSON.parse(fs.readFileSync('./AnyaPikaMedia/theme/storemedia/video.json'));
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'));
const _autostick = JSON.parse(fs.readFileSync('./database/autostickpc.json'));
let banUser = JSON.parse(fs.readFileSync('./database/banUser.json'));
let banchat = JSON.parse(fs.readFileSync('./database/banChat.json'));
let bad = JSON.parse(fs.readFileSync('./src/toxic/bad.json'))
//read database\\
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []

module.exports = AnyaPika = async (AnyaPika, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&-.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&-.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await AnyaPika.decodeJid(AnyaPika.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
	    const isMedia = /image|video|sticker|audio/.test(mime)
	    const from = mek.key.remoteJid
	    const type = Object.keys(mek.message)[0]        
	    const content = JSON.stringify(mek.message)
	    const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()

        //group\\
const groupMetadata = m.isGroup ? await AnyaPika.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const groupDescription = m. isGroup ? groupMetadata.desc : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || true
const AntiLink = m.isGroup ? ntilink.includes(from) : false
const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : true
const antiWame = m.isGroup ? ntwame.includes(from) : false
const antiToxic = m.isGroup ? nttoxic.includes(from) : true
const antiVirtex = m.isChat ? ntvirtex.includes(from) : true
const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
const isAutoStick = _autostick.includes(from)
const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
const Autoreply = m.isGroup ? autorep.includes(from) : true
const isBan = banUser.includes(m.sender)
const isBanChat = m.isGroup ? banchat.includes(from) : false
autoreadsw = false
        //member\\
        let picaks = [flaming,fluming,flarun,flasmurf]
		let picak = picaks[Math.floor(Math.random() * picaks.length)]
		
          try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
                if (!isNumber(user.afkTime)) user.afkTime = -1
                if (!('afkReason' in user)) user.afkReason = ''
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                afkTime: -1,
                afkReason: '',
                limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
                if (!('mute' in chats)) chats.mute = false
            } else global.db.data.chats[m.chat] = {
                mute: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = false
		if (!('templateImage' in setting)) setting.templateImage = false
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false
		if (!('templateDocument' in setting)) setting.templateDocument = true
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: false,
		templateImage: false,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
		templateDocument: true,
	    }
	    
        } catch (err) {
            console.error(err)
        }
	
	// FAKE TEXT IMG
const textImg = (teks) => {
AnyaPika.sendMessage(m.chat, { text :teks, }, {quoted: m, thumbnail: fs.readFileSync('./AnyaPikaMedia/image/wpmobile.png')}) 
}

//FAKE CONTACT
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `120363026115750939@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Click to chat\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
//FAKEREPLY PRODUCT
const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "919971690443@s.whatsapp.net" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": log0 //The picture
},
"title": `${global.ownername}`, 
"description": `${botname3}`, 
"currencyCode": "USD",
"priceAmount1000": "2000",
"retailerId": `${global.watermark}`,
"productImageCount": 1
},
"businessOwnerJid": `0@s.whatsapp.net`
}
}
} 
//FAKEREPLY TROLI
const ftroli = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
orderMessage: {
itemCount : 1,
status: 1,
surface : 1,
message: `${global.ownername}`, //
orderTitle: `${botname3}`,
thumbnail: log0, //Pic
sellerJid: '0@s.whatsapp.net'

}
}
}
//FAKEREPLY LOCATION
const flokasi = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
locationMessage: {
name: `${global.location}`,
jpegThumbnail: log0
}
}
}
//FAKEREPLY DOCUMENT
const fdocs = {
key : {
 participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `${botname3}`, 
jpegThumbnail: log0
}
}
}
//FAKEREPLY VIDEO
const fvideo = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "916909137213-1613049930@g.us" } : {}) 
},
message: { 
"videoMessage": { 
"title": `${botname3}`,
"h": `${global.ownername}`,
'seconds': '30', 
'caption': `${global.watermark}`,
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GROUPINVITE
const fgclink = {
"key": {
"fromMe": false,
"participant": "0@s.whatsapp.net",
"remoteJid": "0@s.whatsapp.net"
},
"message": {
"groupInviteMessage": {
"groupJid": "120363026115750939@g.us",
"inviteCode": `${global.ownername}`,
"groupName": `${botname3}`, 
"caption":`${global.watermark}`, 
'jpegThumbnail': log0
}
}
}
//FAKEREPLY GIF
const fgif = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "120363026115750939@g.us" } : {}) 
},
message: { 
 "videoMessage": { 
 "title":`${botname3}`,
 "h": `${global.ownername}`,
 'seconds': "30", 
 'gifPlayback': 'true', 
 'caption': `${global.watermark}`,
 'jpegThumbnail': log0
}
}
} 
//FAKEREPLY TEXT WITH THUMBNAIL
const ftextt = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "120363026115750939@g.us" } : {}) 
},
message: { 
"extendedTextMessage": {
 "text":`${global.ownername}`,
"title": `${botname3}`,
 'jpegThumbnail': log0
}
} 
}
//FAKEREPLY VN
const fvn = {
key: { 
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? 
{ remoteJid: "120363026115750939@g.us" } : {}) 
},
message: { 
"audioMessage": {
"mimetype":"audio/ogg; codecs=opus",
"seconds": "9999999999999999",
"ptt": "true"
}
} 
}
	
	//group target \\
const reply = (teks) => {
           AnyaPika.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${botname3}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./AnyaPikaMedia/theme/Anyapic.jpg`),"sourceUrl": `${linkz}`}}}, { quoted: m})
        }
        
        const replay = (teks) => {
            AnyaPika.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `${botname3}`,"body": `${ownername}`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": fs.readFileSync(`./AnyaPikaMedia/theme/Anyapic.jpg`),"sourceUrl": `${linkz}`}}}, { quoted: m})
        }
	
        //Public & Self\\
        if (!AnyaPika.public) {
            if (!m.key.fromMe) return
        }
        if (m.message) {
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
	
	//reset limit every 12 hours\\
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Limit Reseted')
        }, {
            scheduled: true,
            timezone: "Asia/Kolkata"
        })
        
        //hitter
// global.hit = {}
// if (isCmd) {
// 	data = await fetchJson('https://api.countapi.xyz/hit/XBOT/visits?') 
// 	jumlahcmd = `${data.value}`
// 	dataa = await fetchJson(`https://api.countapi.xyz/hit/XBOT${moment.tz('Asia/Kolkata').format('DDMMYYYY')}/visits`)
// 	jumlahharian = `${dataa.value}`
// 	}
        
	//auto set bio\\
	if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await AnyaPika.setStatus(`${AnyaPika.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}
	
	//antispam or auto react
//if (m.message && msgFilter.isFiltered(from)) {
//console.log(`${globalthemeemoji}[SPAM]`, color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))
//return AnyaPika.sendMessage(from, { react: { text: `${globalthemeemoji}`, key: m.key }})
//}
	
//auto read whatsapp status
if (autoreadsw) {
		if (from === 'status@broadcast') {
		AnyaPika.chatRead(from)
	}
	}
//autoreader gc and pm
if (global.autoreadpmngc) {
if (command) {
await AnyaPika.sendPresenceUpdate('composing', m.chat)
AnyaPika.sendReadReceipt(from, m.sender, [m.key.id])}
}
  //autoread gc only
//   if (global.autoReadGc) {
//   if (m.isGroup) { AnyaPika.sendReadReceipt(m.chat, m.sender, [m.key.id]) }
// }
  //auto recording all
    if (global.autoRecord) { if (m.chat) { AnyaPika.sendPresenceUpdate('recording', m.chat) }
}
//autotyper all
  if (global.autoTyping) { if (m.chat) { AnyaPika.sendPresenceUpdate('composing', m.chat) }
}
//auto available all
  if (global.available) { if (m.chat) { AnyaPika.sendPresenceUpdate('available', m.chat) }
  }

// Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await AnyaPika.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await AnyaPika.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        //Autosticker pc
                if (isAutoStick) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
                let mediac = await quoted.download()
                await AnyaPika.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
                console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return
                let mediac = await quoted.download()
                await AnyaPika.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }


if (!isCmd && !m.isGroup){
    const botreply = await axios.get(`http://api.brainshop.ai/get?bid=168848&key=v4GwpQWOS3tSQddf&uid=[uid]&msg=[${budy}]`)
    txt = `${botreply.data.cnt}`
    m.reply(txt)
    }

	// AntiLinkgc
if (AntiLink) {
linkgce = await AnyaPika.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
reply(`\`\`\`「 Group Link Detected 」\`\`\`\n\nYou won't be kicked by a bot because what you send is a link to this group`)
} else if (isUrl(m.text)) {
bvl = `\`\`\`「 Group Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to post any link`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await AnyaPika.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
AnyaPika.sendMessage(from, {text:`\`\`\`「 Group Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
}
  // Antiwame by Pika
  if (antiWame)
  if (budy.includes(`wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await AnyaPika.groupParticipantsUpdate(m.chat, [kice], 'remove')
AnyaPika.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
if (antiWame)
if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await AnyaPika.groupParticipantsUpdate(m.chat, [kice], 'remove')
AnyaPika.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}

if (antiVirtex) {
if (budy.length > 1500) {
reply(`Somebody spammed virus!! Mark as read⚠️\n`.repeat(1200))
if (!isBotAdmins) return reply(mess.botAdmin)
// let { chat, fromEveryone, id} = m.quoted
const key = {
    remoteJid: m.chat,
    fromMe: false,
    id: budy,
    participants : m.sender
}
AnyaPika.groupParticipantsUpdate(m.chat, [m.sender], 'remove',{ delete: key })
}
}
if (antiToxic)
if (bad.includes(messagesD)) {
tos = [`Maa - Baap ne tameez nhi sikhai ${pushname} tujhe?`,`Bolna sikh kar aa ${pushname}`,`Stop being toxic ${pushname} now !!`,`Hay, ${pushname} dont be toxic yrr...🙂`,`Bas kro ${pushname} don't abuse`,`Chup kar na bsdk ${pushname}...Huh`]
sin =  tos[Math.floor(Math.random() * (tos.length))]
reply(sin)
if (m.text) {
bvl = `Huh~\nMaster...atleast aapko to ye sab nhi bolna chahiye !🙂`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await AnyaPika.groupParticipantsUpdate(m.chat, [kice], 'remove')
AnyaPika.sendMessage(from, {text:`ㅤ ㅤ⍙__⍙ 💢\n💢 (  ∗_∗ )         \n        | >💔 𝘛𝘰𝘥 𝘥𝘪𝘺𝘢 𝘯𝘢 𝘮𝘦𝘳𝘢 𝘥𝘪𝘭....\n\n𝘈𝘣 𝘯𝘪𝘬𝘢𝘭 _@${pushname}_ 𝘣𝘴𝘥𝘬, 𝘢𝘢 𝘮𝘢𝘵 𝘫𝘢𝘯𝘢 𝘸𝘢𝘱𝘢𝘴 _!!_`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})}
}
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await AnyaPika.groupParticipantsUpdate(m.chat, [kice], 'remove')
AnyaPika.sendMessage(from, {text:`\`\`\`「 github Video Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink youtube channel by Pika
if (AntiLinkYoutubeChannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await AnyaPika.groupParticipantsUpdate(m.chat, [kice], 'remove')
AnyaPika.sendMessage(from, {text:`\`\`\`「 github Channel Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube channel link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink instagram by Pika
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await AnyaPika.groupParticipantsUpdate(m.chat, [kice], 'remove')
AnyaPika.sendMessage(from, {text:`\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending instagram link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}

if (AntiLinkFacebook)
if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await AnyaPika.groupParticipantsUpdate(m.chat, [kice], 'remove')
AnyaPika.sendMessage(from, {text:`\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending facebook link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}

if (AntiLinkTelegram)
if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin has sent a telegram link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await AnyaPika.groupParticipantsUpdate(m.chat, [kice], 'remove')
AnyaPika.sendMessage(from, {text:`\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending telegram link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}

if (AntiLinkTiktok)
if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin has sent a tiktok link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await AnyaPika.groupParticipantsUpdate(m.chat, [kice], 'remove')
AnyaPika.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending tiktok link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}

if (AntiLinkTwitter)
if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin has sent a twitter link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await AnyaPika.groupParticipantsUpdate(m.chat, [kice], 'remove')
AnyaPika.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending twitter link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}

if (AntiLinkAll)
if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await AnyaPika.groupParticipantsUpdate(m.chat, [kice], 'remove')
AnyaPika.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}

       //react function
const reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }

   //randoming function
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
//--------document randomizer
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)

//--------tagall randomizer
let tagallMsg = [tag1,tag2,tag3,tag4,tag5,tag6,tag7,tag8,tag9,tag10]
let tagmsg = pickRandom(tagallMsg)

//--------symbols randomizer
let symbols = [symb1,symb2,symb3,symb4,symb5,symb6,symb7,symb8,symb9,symb10]
let symb = pickRandom(symbols)

//--------footer randomizer
let footermsg = [footer1,footer2,footer3,footer4,footer5,footer6,footer7,footer8,footer9,footer10,footer11,footer12,footer13,footer14,footer15,footer16,footer17,footer18,footer19,footer20,footer21,footer22,footer23,footer24,footer25,footer26,footer27,footer28,footer29,footer30,footer31,footer32,footer33,footer34,footer35,footer36]
let footer = pickRandom(footermsg)

//--------Botname for information section 
let anyaname3 = [name16,name17,name18,name19,name20]
let botname3 = pickRandom(anyaname3)

//--------Botname for documents 
let anyaname2 = [name11,name12,name13,name14,name25]
let botname2 = pickRandom(anyaname2)

//--------Botname for command captions 
let anyaname1 = [name1,name2,name3,name4,name5,name6,name7,name8,name9,name10]
let botname1 = pickRandom(anyaname1) 

//--------Links for displaying on documents 
let displaylink = [link1,link2,link3,link4]
let linkgit = pickRandom(displaylink)

//-------Themeemoji
let themeemojimsg = [global.themeemoji1,global.themeemoji2,global.themeemoji3,global.themeemoji4,global.themeemoji5,global.themeemoji6,global.themeemoji7,global.themeemoji8,global.themeemoji9,global.themeemoji10]
let globalthemeemoji = pickRandom(themeemojimsg)

//--------document thumbnails
let menuimages = [thumb1,thumb2,thumb3,thumb4,thumb5,thumb6,thumb7,thumb8,thumb9,thumb10,thumb11,thumb12,thumb13,thumb14,thumb15,thumb16,thumb17,thumb18,thumb19,thumb20,thumb21,thumb22,thumb23,thumb24,thumb25,thumb26,thumb27,thumb28,thumb29,thumb30,thumb31]
let menuimage = pickRandom(menuimages)

//--------Command reacts
let menureact = [global.reactmoji1,global.reactmoji2,global.reactmoji3,global.reactmoji4,global.reactmoji5,global.reactmoji6,global.reactmoji7,global.reactmoji8,global.reactmoji9,global.reactmoji10,global.reactmoji11,global.reactmoji12,global.reactmoji13,global.reactmoji14]
let menureactemoji = pickRandom(menureact)
let allmenureact = [global.reactmoji15,global.reactmoji16,global.reactmoji17,global.reactmoji18,global.reactmoji19,global.reactmoji20,global.reactmoji21,global.reactmoji22,global.reactmoji23,global.reactmoji24,global.reactmoji25,global.reactmoji26]
let allmenureactemoji = pickRandom(allmenureact)

	     for (let anji of Pikachusticker){
				if (budy === anji){
                                AnyaPika.sendMessage(from, { react: { text: `${global.reactmoji1}`, key: m.key }})
					let result = fs.readFileSync(`./AnyaPikaMedia/sticker/${anji}.webp`)
					AnyaPika.sendMessage(m.chat, { sticker: result }, { quoted: m })
					}
			}
			  //if (Autoreply) //remove forwad slashes to make it autoreply on off
			for (let anju of Pikachuaudio){
				if (budy === anju){
					let result = fs.readFileSync(`./AnyaPikaMedia/audio/${anju}.mp3`)
					AnyaPika.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
					}
			}
			  //if (Autoreply) //remove forwad slashes to make it autoreply on off
			for (let anjh of Pikachuimage){
				if (budy === anjh){
					let result = fs.readFileSync(`./AnyaPikaMedia/image/${anjh}.jpg`)
					AnyaPika.sendMessage(m.chat, { image: result }, { quoted: m })
					}
			}
			  //if (Autoreply) //remove forwad slashes to make it autoreply on off
					for (let anjh of Pikachuvideo){
				if (budy === anjh){
					let result = fs.readFileSync(`./AnyaPikaMedia/video/${anjh}.mp4`)
					AnyaPika.sendMessage(m.chat, { video: result }, { quoted: m })
					}
				  }

	    
	    
	    
	    
//emoji 
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
emoji.get(satu)
.then(emoji => {
const buttons = [{buttonId: "y", buttonText: {displayText:satu}, type: 1}]
const buttonMessage = {image: {url: emoji.images[dua].url},caption: "Here you go!",footerText:`${footer}` , buttons: buttons,headerType: 4}
AnyaPika.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (e) {
reply("Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji")
}
}

      //Mute Chat\\
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }
        
        //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
        
        //Respon Cmd with media\\
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: AnyaPika.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, AnyaPika.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        AnyaPika.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?give up|surr?ender)$/i.test(m.text)
            if (!isSurender) {
                let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
                if (room.terjawab[index]) return !0
                room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer The Following Questions :\n${room.soal}\n\n\nThere Is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'Surrender!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            AnyaPika.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await AnyaPika.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Music 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, AnyaPika.user.name, m)
                delete tebaklagu[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await reply(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
                delete kuismath[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await AnyaPika.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, AnyaPika.user.name, m)
                delete tebakgambar[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await AnyaPika.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, AnyaPika.user.name, m)
                delete tebakkata[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await AnyaPika.sendButtonText(m.chat, [{ buttonId: 'guess blank', buttonText: { displayText: 'Guess The Blank' }, type: 1 }], `🎮 Guess The Blank 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant To Play Again? Press The Button Below`, AnyaPika.user.name, m)
                delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await AnyaPika.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, AnyaPika.user.name, m)
                delete tebakkalimat[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await AnyaPika.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, AnyaPika.user.name, m)
                delete tebaklirik[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
                await AnyaPika.sendButtonText(m.chat, [{ buttonId: 'guess riddle', buttonText: { displayText: 'Guess The Riddle' }, type: 1 }], `🎮 Guess The Riddle 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, AnyaPika.user.name, m)
                delete tebaktebakan[m.sender.split('@')[0]]
            } else reply('*Wrong Answer!*')
        }
        
        //TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'Game Has Ended',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Typed *surrender* to surrender and admited defeat`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await AnyaPika.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await AnyaPika.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP\\
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nope(k.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nope(k.)?yes)/i.test(m.text)) {
	    AnyaPika.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} Refuse Suit, Suit Canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    AnyaPika.sendText(m.chat, `Suit Has Been Sent To Chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Please Choose A Suit In The Respective Chat"
Click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) AnyaPika.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) AnyaPika.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) AnyaPika.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    AnyaPika.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    reply(`You Have Chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih2) AnyaPika.sendText(roof.p2, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    reply(`You Have Chosen ${m.text} ${!roof.pilih ? `\n\nWaiting For The Opponent To Choose` : ''}`)
	    if (!roof.pilih) AnyaPika.sendText(roof.p, '_The Opponent Has Chosen_\nNow It Is Your Turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    AnyaPika.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            reply(`
Don't tag him!
He's in AFK/Offline ${reason ? 'dengan alasan ' + reason : 'no reason'}
It's been ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            reply(`
You Came Back Online From AFK${user.afkReason ? ' after ' + user.afkReason : ''}
In ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
        
                
                const timestampe = speed();
const latensie = speed() - timestampe
                const menulist = `🦋⃟≛⃝ 𝗔𝗻𝘆𝗮ᵇʸ ᵖⁱᵏᵃ•••      ⬇️`
   
// short story
async function cerpen (category) {
    return new Promise((resolve, reject) => {
        let title = category.toLowerCase().replace(/[()*]/g, "")
        let judul = title.replace(/\s/g, "-")
        let page = Math.floor(Math.random() * 5)
        axios.get('http://cerpenmu.com/category/cerpen-'+judul+'/page/'+page)
        .then((get) => {
            let $ = cheerio.load(get.data)
            let link = []
            $('article.post').each(function (a, b) {
                link.push($(b).find('a').attr('href'))
            })
            let random = link[Math.floor(Math.random() * link.length)]
            axios.get(random)
            .then((res) => {
                let $$ = cheerio.load(res.data)
                let hasil = {
                    title: $$('#content > article > h1').text(),
                    author: $$('#content > article').text().split('Short Story: ')[1].split('Category: ')[0],
                    kategori: $$('#content > article').text().split('Category: ')[1].split('\n')[0],
                    lolos: $$('#content > article').text().split('Passed moderation on: ')[1].split('\n')[0],
                    cerita: $$('#content > article > p').text()
                }
                resolve(hasil)
            })
        })
    })
}

switch(command) {
	
 case 'banchat': {
 if (isBan) return reply(mess.ban)	 			
if (!isCreator) return replay(mess.owner)
if (args[0] === "on") {
if (isBanChat) return replay('Already Banned')
banchat.push(from)
replay('Success in banning the gc')
var groupe = await AnyaPika.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AnyaPika.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nThe bot has been disabled in this group, now no one will able to use the bot in this group!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!isBanChat) return replay('Already Unbanned')
let off = banchat.indexOf(from)
banchat.splice(off, 1)
replay('Success in unbanning the gc')
} else {
  let buttonsntnsfw = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Ban' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Unban' }, type: 1 }
  ]
  await AnyaPika.sendButtonText(m.chat, buttonsntnsfw, `Please click the button below\n\nBan to Ban\nUnban to unban`, `${botname3}`, m)
  }
  }
  break

case 'ban': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
if (!args[0]) return replay(`Select add or del(add to ban, del to unban), For Example: Reply *${prefix}ban add* to the user u want to ban`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banUser.includes(orgnye)
if (args[0] === "add") {
if (isBane) return ads('User was already banned')
banUser.push(orgnye)
replay(`Successfully banned the user`)
} else if (args[0] === "del") {
if (!isBane) return ads('User was already unbanned')
let delbans = banUser.indexOf(orgnye)
banUser.splice(delbans, 1)
replay(`Successfully unbanned the user`)
} else {
replay("Error")
}
}
break
	
        var AnyaPika = await getBuffer(picak+`User's Inventory`)
   
        case 'userlimit': 
        if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
{      
   let txt = `「 *ALL LIMIT USER* 」\n\n`
     for (let i of _limit){
     txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Limit* : ${i.limit}\n`
     }
    reply(txt)       
  }
 break
 
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
case 'resetgrouplink':
case 'resetgclink':
case 'resetgruplink': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
AnyaPika.groupRevokeInvite(m.chat)
}
break
	    case 'afk': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                let user = global.db.data.users[m.sender]
                user.afkTime = + new Date
                user.afkReason = text
                reply(`${m.pushName} Has Gone Afk/Offline${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'ttt': case 'tictactoe': {
        	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replay(`You Are Still In The Game`)
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            reply('Partner found!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if (room.x !== room.o) await AnyaPika.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await AnyaPika.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            reply('Waiting For Partner' + (text ? ` Type The Command Below ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            AnyaPika.sendText(m.chat, `Successfully Deleted The TicTacToe Session`, m)
            } else if (!this.game) {
            reply(`TicTacToe🎮 Session Does Not Exist`)
            } else reply('?')
            } catch (e) {
            reply('Damaged')
            }
            }
            break
            
            case 'chat': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                if (!q) return replay(`Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete`)
                if (args[0] === 'mute') {
                    AnyaPika.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unmute') {
                    AnyaPika.chatModify({ mute: null }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'archive') {
                    AnyaPika.chatModify({  archive: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unarchive') {
                    AnyaPika.chatModify({ archive: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'read') {
                    AnyaPika.chatModify({ markRead: true }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'unread') {
                    AnyaPika.chatModify({ markRead: false }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'delete') {
                    AnyaPika.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
	    case 'family100': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if ('family100'+m.chat in _family100) {
                    reply('There Are Still Unfinished Sessions!')
                    reply(false)
                }
                let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                let hasil = `*Answer The Following Questions :*\n${random.soal}\n\nThere Is *${random.jawaban.length}* Answer ${random.jawaban.find(v => v.includes(' ')) ? `(Some Answers Have Spaces)` : ''}`.trim()
                _family100['family100'+m.chat] = {
                    id: 'family100'+m.chat,
                    pesan: await AnyaPika.sendText(m.chat, hasil, m),
                    ...random,
                    terjawab: Array.from(random.jawaban, () => false),
                    hadiah: 6,
                }
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            if (!m.quoted && !text) return replay(`Send/Reply Text With Caption ${prefix + command}`)
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
case 'guess': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(`Example : ${prefix + command} song\n\nOption : \n1.song\n2. picture\n3. saying\n4. sentence\n5. lyrics\n6.food`)
if (args[0] === "song") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
let result = anu[Math.floor(Math.random() * anu.length)]
let msg = await AnyaPika.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
AnyaPika.sendText(m.chat, `What is the name of this song?\n\nArtist : ${result.artist}\nTime : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
AnyaPika.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess the song' }, type: 1 }], `Time has run out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${botname3}`, m)
delete tebaklagu[m.sender.split('@')[0]]
}
} else if (args[0] === 'picture') {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
AnyaPika.sendImage(m.chat, result.img, `Please answer the question above\n\nDescription : ${result.deskripsi}\nTime : 60s`, m).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
AnyaPika.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess the picture' }, type: 1 }], `Time has run out\nAnswer:  ${tebakgambar[m.sender.split('@')[0]]}\n\nWant to play? press the button below`,`${botname3}`, m)
delete tebakgambar[m.sender.split('@')[0]]
}
} else if (args[0] === 'word') {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
let anu = await fetchJson('https://raw.githubusercontent.com/DGxeon/fungames/main/GuessTheWord.js')
let result = anu[Math.floor(Math.random() * anu.length)]
AnyaPika.sendText(m.chat, `Please answer the following question\n\n${result.soal}\nTime : 60s`, m).then(() => {
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
AnyaPika.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `Time Out\nAnswer:  ${tebakkata[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${botname3}`, m)
delete tebakkata[m.sender.split('@')[0]]
}
} else if (args[0] === 'sentence') {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
let anu = await fetchJson('https://raw.githubusercontent.com/DGxeon/fungames/main/GuessTheSentence.js')
let result = anu[Math.floor(Math.random() * anu.length)]
AnyaPika.sendText(m.chat, `Please answer the following question\n\n${result.soal}\nTime : 60s`, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
AnyaPika.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess the Sentence' }, type: 1 }], `Time Out\nAnswer:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${botname3}`, m)
delete tebakkalimat[m.sender.split('@')[0]]
}
} else if (args[0] === 'lyrics') {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
AnyaPika.sendText(m.chat, `Fill the missing lyrics below : *${result.soal}*?\nTime : 60s`, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
AnyaPika.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `Time Out\nAnswer:  ${tebaklirik[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${botname3}`, m)
delete tebaklirik[m.sender.split('@')[0]]
}
} else if (args[0] === 'guess saying') {
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return replay("There are still unfinished sessions!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
AnyaPika.sendText(m.chat, `*Answer the following questions :*\n${result.soal}*\nTime : 60s`, m).then(() => {
caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
AnyaPika.sendButtonText(m.chat, [{ buttonId: 'guess saying', buttonText: { displayText: 'Guess The Saying' }, type: 1 }], `Time Out\nAnswer:  ${caklontong[m.sender.split('@')[0]]}\nDescription : ${caklontong_desk[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${botname3}`, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
}
}
}
break
		
	case 'react': { 
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
AnyaPika.sendMessage(m.chat, reactionMessage)} 
break
		
		
            case 'kuismath': case 'math': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return replay(`There Are Still Unfinished Sessions!`)
                let { genMath, modes } = require('./lib/math')
                if (!text) return replay(`Mode: ${Object.keys(modes).join(' | ')}\nFor Examples: ${prefix}math medium`)
                let result = await genMath(text.toLowerCase())
                AnyaPika.sendText(m.chat, `*What Is The Result Of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
                    kuismath[m.sender.split('@')[0]] = result.jawaban
                })
                await sleep(result.waktu)
                if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
                    console.log("Answer: " + result.jawaban)
                    reply("Time Out\nAnswer: " + kuismath[m.sender.split('@')[0]])
                    delete kuismath[m.sender.split('@')[0]]
                }
            }
            break
            case 'mysoulmate': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Your Match Is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await AnyaPika.sendButtonText(m.chat, buttons, jawab, AnyaPika.user.name, m, {mentions: ments})
            }
            break
            case 'couple': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieeee, What's Going On❤️💖👀`
            let menst = [orang, jodoh]
            let buttons = [
                        { buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
                    ]
                    await AnyaPika.sendButtonText(m.chat, buttons, jawab, AnyaPika.user.name, m, {mentions: menst})
            }
            break
            
case 'rate':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Use Text, Example : ${prefix + command} My Dp`)
					const ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
AnyaPika.sendMessage(from, { text: `Rate : ${q}\nAnswer : *${te}%*` }, { quoted: m })

					break
  case 'handsomecheck':
  if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @XBOT`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
AnyaPika.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })

					break
case 'beautifulcheck':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @XBOT`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
AnyaPika.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` }, { quoted: m })
					break
					case 'charactercheck':
					if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
					if (!text) return replay(`Tag Someone, Example : ${prefix + command} @XBOT`)
					const Pikachu =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = Pikachu[Math.floor(Math.random() * Pikachu.length)]
					AnyaPika.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })
				     break
                    case 'awesomecheck':
  case 'chutiyacheck':
  case 'murderercheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
                 case 'prettycheck':
                    case 'lovelycheck':
                      case 'uglycheck':
                                  	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
				if (!text) return replay(`Tag Someone, Example : ${prefix + command} @XBOT`)
					const sangeh = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
AnyaPika.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${sange}%*` }, { quoted: m })
					break
                    case 'stupid':
      case 'foolish?':
      case 'smart?':
      case 'idiot?':
      case 'gay?':
      case 'lesbi?':
      case 'bastard?':
      case 'stubble?':
      case 'dog?':
      case 'fuck?':
      case 'ape?':
      case 'noob?':
      case 'great?':
      case 'horny?':
      case 'wibu?':
      case 'asshole?':
      case 'handsome?':
      case 'beautiful?':
      case 'cute?':
      case 'kind':
      case 'ugly?':
      case 'pretty?':
      case 'lesbian?':
      case 'randi?':
      case 'gandu?':
      case 'madarchod?':
      case 'kala?':
      case 'gora?':
      case 'chutiya?':
      case 'nibba?':
      case 'nibbi?':
      case 'bhosdiwala?':
      case 'chutmarika?':
      case 'bokachoda?':
      case 'suarerbaccha?':
      case 'bolochoda?':
      case 'muthal?':
      case 'muthbaaz?':
      case 'randibaaz?':
      case 'topibaaz?':
      case 'cunt?':
      case 'nerd?':
      case 'behenchod?':
      case 'behnchoda?':
      case 'bhosdika?':
      case 'nerd?':
      case 'mc?':
      case 'bsdk?':
      case 'bhosdk?':
      case 'nigger?':
      case 'loda?':
      case 'laund?':
      case 'nigga?':
      case 'noobra?':
      case 'tharki?':
      case 'nibba?':
      case 'nibbi?':
      case 'mumu?':
      case 'rascal?':
      case 'scumbag?':
      case 'nuts?':
      case 'comrade?':
      case 'fagot?':
      case 'scoundrel?':
      case 'ditch?':
      case 'dope?':
      case 'gucci?':
      case 'lit?':
      case 'dumbass?':
      case 'sexy?':
      case 'crackhead?':
      case 'mf?':
      case 'motherfucker?':
      case 'dogla?':
      case 'bewda?':
      case 'boka?':
      case 'khanki?':
      case 'bal?':
      case 'sucker?':
      case 'fuckboy?':
      case 'playboy?':
      case 'fuckgirl?':
      case 'playgirl?':
      case 'hot?': {
      	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `The Most *${command}* Here Is @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
                        { buttonId: '👀', buttonText: { displayText: '👀😂' }, type: 1 }
                    ]
                    await AnyaPika.sendButtonText(m.chat, buttons, jawab, botname, m, {mentions: ments})
            }
            break
case 'dare':
                   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
              const dare =[
    "eat 2 tablespoons of rice without any side dishes, if it's dragging you can drink",
    "spill people who make you pause",
    "call crush/pickle now and send ss",
    "drop only emote every time you type on gc/pc for 1 day.",
    "say Welcome to Who Wants To Be a Millionaire! to all the groups you have",
    "call ex saying miss",
    "sing the chorus of the last song you played",
    "vn your ex/crush/girlfriend, says hi (name), wants to call, just a moment. I miss🥺👉🏼👈🏼",
	"Bang on the table (which is at home) until you get scolded for being noisy",
    "Tell random people _I was just told I was your twin first, we separated, then I had plastic surgery. And this is the most ciyusss_ thing",
    "mention ex's name",
    "make 1 rhyme for the members!",
    "send ur whatsapp chat list",
    "chat random people with gheto language then ss here",
    "tell your own version of embarrassing things",
    "tag the person you hate",
    "Pretending to be possessed, for example: possessed by dog, possessed by grasshoppers, possessed by refrigerator, etc.",
    "change name to *I AM DONKEY* for 24 hours",
    "shout *ma chuda ma chuda ma chuda* in front of your house",
    "snap/post boyfriend photo/crush",
    "tell me your boyfriend type!",
    "say *i hv crush on you, do you want to be my girlfriend?* to the opposite sex, the last time you chatted (submit on wa/tele), wait for him to reply, if you have, drop here",
    "record ur voice that read *titar ke age do titar, titar ke piche do titar*",
    "prank chat ex and say *i love u, please come back.* without saying dare!",
    "chat to contact wa in the order according to your battery %, then tell him *i am lucky to hv you!*",
    "change the name to *I am a child of randi* for 5 hours",
    "type in bengali 24 hours",
    "Use selmon bhoi photo for 3 days",
    "drop a song quote then tag a suitable member for that quote",
    "send voice note saying can i call u baby?",
    "ss recent call whatsapp",
    "Say *YOU ARE SO BEAUTIFUL DON'T LIE* to guys!",
    "pop to a group member, and say fuck you",
    "Act like a chicken in front of ur parents",
    "Pick up a random book and read one page out loud in vn n send it here",
    "Open your front door and howl like a wolf for 10 seconds",
    "Take an embarrassing selfie and paste it on your profile picture",
    "Let the group choose a word and a well known song. You have to sing that song and send it in voice note",
    "Walk on your elbows and knees for as long as you can",
    "sing national anthem in voice note",
    "Breakdance for 30 seconds in the sitting room😂",
    "Tell the saddest story you know",
    "make a twerk dance video and put it on status for 5mins",
    "Eat a raw piece of garlic",
    "Show the last five people you texted and what the messages said",
    "put your full name on status for 5hrs",
    "make a short dance video without any filter just with a music and put it on ur status for 5hrs",
    "call ur bestie, bitch",
    "put your photo without filter on ur status for 10mins",
    "say i love oli london in voice note🤣🤣",
    "Send a message to your ex and say I still like you",
    "call Crush/girlfriend/bestie now and screenshot here",
    "pop to one of the group member personal chat and Say you ugly bustard",
    "say YOU ARE BEAUTIFUL/HANDSOME to one of person who is in top of ur pinlist or the first person on ur chatlist",
    "send voice notes and say, can i call u baby, if u r boy tag girl/if girl tag boy",
    "write i love you (random grup member name, who is online) in personal chat, (if u r boy write girl name/if girl write boy name) take a snap of the pic and send it here",
    "use any bollywood actor photo as ur pfp for 3 days",
    "put your crush photo on status with caption, this is my crush",
    "change name to I AM GAY for 5 hours",
    "chat to any contact in whatsapp and say i will be ur bf/gf for 5hours",
    "send voice note says i hv crush on you, want to be my girlfriend/boyfriend or not? to any random person from the grup(if u girl choose boy, if boy choose girl",
    "slap ur butt hardly send the sound of slap through voice note😂",
    "state ur gf/bf type and send the photo here with caption, ugliest girl/boy in the world",
    "shout bravooooooooo and send here through voice note",
    "snap your face then send it here",
    "Send your photo with a caption, i am lesbian",
    "shout using harsh words and send it here through vn",
    "shout you bastard in front of your mom/papa",
    "change the name to i am idiot for 24 hours",
    "slap urself firmly and send the sound of slap through voice note😂",
    "say i love the bot owner Pika through voice note",
    "send your gf/bf pic here",
    "make any tiktok dance challenge video and put it on status, u can delete it after 5hrs",
    "breakup with your best friend for 5hrs without telling him/her that its a dare",
     "tell one of your frnd that u love him/her and wanna marry him/her, without telling him/her that its a dare",
     "say i love depak kalal through voice note",
     "write i am feeling horny and put it on status, u can delete it only after 5hrs",
     "write i am lesbian and put it on status, u can delete only after 5hrs",
     "kiss your mommy or papa and say i love you😌",
     "put your father name on status for 5hrs",
     "send abusive words in any grup, excepting this grup, and send screenshot proof here"
]
              const Pikadare = dare[Math.floor(Math.random() * dare.length)]
              buffer = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              AnyaPika.sendMessage(from, { image: buffer, caption: '_You choose DARE_\n'+ Pikadare }, {quoted:m})
              break
                            break
       case 'truth':
       if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
              const truth =[
    "Have you ever liked anyone? How long?",
    "If you can or if you want, which gc/outside gc would you make friends with? (maybe different/same type)",
    "apa ketakutan terbesar kamu?",
    "Have you ever liked someone and felt that person likes you too?",
    "What is the name of your friend's ex-girlfriend that you used to secretly like?",
    "Have you ever stolen money from your father or mom? The reason?",
    "What makes you happy when you're sad?",
    "Ever had a one sided love? if so who? how does it feel bro?", 
    "been someone's mistress?",
    "the most feared thing",
    "Who is the most influential person in your life?",
    "what proud thing did you get this year", 
    "Who is the person who can make you awesome", 
    "Who is the person who has ever made you very happy?", 
    "Who is closest to your ideal type of partner here", 
    "Who do you like to play with??", 
    "Have you ever rejected people? the reason why?",
    "Mention an incident that made you hurt that you still remember", 
    "What achievements have you got this year??",
    "What's your worst habit at school??",
    "What song do you sing most in the shower",
    "Have you ever had a near-death experience",
    "When was the last time you were really angry. Why?",
    "Who is the last person who called you",
    "Do you have any hidden talents, What are they",
    "What word do you hate the most?",
    "What is the last github video you watched?",
    "What is the last thing you Googled",
    "Who in this group would you want to swap lives with for a week",
    "What is the scariest thing thats ever happened to you",
    "Have you ever farted and blamed it on someone else",
    "When is the last time you made someone else cry",
    "Have you ever ghosted a friend",
    "Have you ever seen a dead body",
    "Which of your family members annoys you the most and why",
    "If you had to delete one app from your phone, which one would it be",
    "What app do you waste the most time on",
    "Have you ever faked sick to get home from school",
    "What is the most embarrassing item in your room",
    "What five items would you bring if you got stuck on a desert island",
    "Have you ever laughed so hard you peed your pants",
    "Do you smell your own farts",
    "have u ever peed on the bed while sleeping ðŸ¤£ðŸ¤£",
    "What is the biggest mistake you have ever made",
    "Have you ever cheated in an exam",
    "What is the worst thing you have ever done",
    "When was the last time you cried",
    "whom do you love the most among ur parents", 
    "do u sometimes put ur finger in ur nosetrilðŸ¤£", 
    "who was ur crush during the school days",
    "tell honestly, do u like any boy in this grup",
    "have you ever liked anyone? how long?",
    "do you have gf/bf','what is your biggest fear?",
    "have you ever liked someone and felt that person likes you too?",
    "What is the name of your ex boyfriend of your friend that you once liked quietly?",
    "ever did you steal your mothers money or your fathers money",
    "what makes you happy when you are sad",
    "do you like someone who is in this grup? if you then who?",
    "have you ever been cheated on by people?",
    "who is the most important person in your life",
    "what proud things did you get this year",
    "who is the person who can make you happy when u r sad",
    "who is the person who ever made you feel uncomfortable",
    "have you ever lied to your parents",
    "do you still like ur ex",
    "who do you like to play together with?",
    "have you ever stolen big thing in ur life? the reason why?",
    "Mention the incident that makes you hurt that you still remember",
    "what achievements have you got this year?",
    "what was your worst habit at school?",
    "do you love the bot creator, Pika?ðŸ¦„",
    "have you ever thought of taking revenge from ur teacher?",
    "do you like current prime minister of ur country",
    "you non veg or veg",
    "if you could be invisible, what is the first thing you would do",
    "what is a secret you kept from your parents",
    "Who is your secret crush",
    "whois the last person you creeped on social media",
    "If a genie granted you three wishes, what would you ask for",
    "What is your biggest regret",
    "What animal do you think you most look like",
    "How many selfies do you take a day",
    "What was your favorite childhood show",
    "if you could be a fictional character for a day, who would you choose",
    "whom do you text the most",
    "What is the biggest lie you ever told your parents",
    "Who is your celebrity crush",
    "Whats the strangest dream you have ever had",
    "do you play pubg, if you then send ur id number"
]
              const Pikatruth = truth[Math.floor(Math.random() * truth.length)]
              buffer = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              AnyaPika.sendMessage(from, { image: buffer, caption: '_You choose TRUTH_\n'+ Pikatruth }, {quoted:m})
              break

case 'wangy':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
              if (!text) return replay(`Use Text, Example : ${prefix + command} hinata`)
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaah the smell of hair ${qq} smelly i want to smell the fragrance ${qq} AAAAAAAAH ~ Her hair.... aaah i want to stroke her hair too ~~ AAAAAH ${qq} first time out in anime is cute too ❤️ ❤️ ❤️ so AAAAAAAH ${qq} AAAAAA LUCCUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️what ? ${qq} it's not real ? Just HELL you say ? no, no no no no no no no no no no no no no no no !! I DON'T CARE ABOUT THE REALITY, I DON'T CARE. ❤️ ❤️ ❤️ ${qq} me ... ${qq} on the laptop watching me, ${qq} .. you believe in me ? aaaaaaaaaaah thanks ${q} I don't want to give up ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH I STILL HAVE ${qq} ALSO NOT THE SAME AAAAAAAAAAAAAAH`
             reply(awikwok)
              break
case 'checkdeath':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
             if (!text) return replay(`Use Someone's Name, Example : ${prefix + command} Bot`)
              predea = await axios.get(`https://api.agify.io/?name=${q}`)
              reply(`Name : ${predea.data.name}\n*Dead At Age :* ${predea.data.age} Year.\n\n_Quick, Quick, Repent Bro, Because No One Knows About Death_`)
              break  
            case 'join': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                if (!text) return replay(`Enter The Group Link!`)
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replay(`Invalid Link!`)
                reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await AnyaPika.groupAcceptInvite(result).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
                               case 'leavegc': case 'leavegroup': {
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	reply(mess.wait)
                if (!isCreator) return replay(`${mess.owner}`)
                await AnyaPika.groupLeave(m.chat).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
            }
            break
            case 'setexif': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
               if (!isCreator) return replay(`${mess.owner}`)
               if (!text) return replay(`Example : ${prefix + command} packname|author`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          reply(`Exif Has Been Successfully Changed to\n\n${themeemoji} Packname : ${global.packname}\n${themeemoji} Author : ${global.author}`)
            }
            break
	case 'remove': case 'nikalbsdk': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await AnyaPika.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await AnyaPika.groupParticipantsUpdate(m.chat, [users], 'add')
	}
	break
	case 'promote': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await AnyaPika.groupParticipantsUpdate(m.chat, [users], 'promote')
	}
	break
	case 'demote': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await AnyaPika.groupParticipantsUpdate(m.chat, [users], 'demote')
	}
	break
        case 'block': {
        	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		if (!isCreator) return replay(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await AnyaPika.updateBlockStatus(users, 'block')
	}
	break
        case 'unblock': {
        	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
		if (!isCreator) return replay(`${mess.owner}`)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await AnyaPika.updateBlockStatus(users, 'unblock')
	}
	break
	    case 'setname': case 'setgcname': case 'setsubject': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) replay(`${mess.admin}`)
                if (!text) replay(`Where Is The Text?`)
                await AnyaPika.groupUpdateSubject(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdescription': {
          	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) replay(`${mess.admin}`)
                if (!text) replay(`Where Is The Text?`)
                await AnyaPika.groupUpdateDescription(m.chat, text).then((res) => reply(mess.success)).catch((err) => reply(jsonformat(err)))
            }
            break
          case 'setbotpp': {
          	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                let media = await AnyaPika.downloadAndSaveMediaMessage(quoted)
                await AnyaPika.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
           case 'setgrouppp': case 'setgruppp': case 'setgcpp': {
           	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
                let media = await AnyaPika.downloadAndSaveMediaMessage(quoted)
                await AnyaPika.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                reply(mess.success)
                }
                break
            case 'tagall': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
let teks = `╭╼━━━━᚜ 𝓐𝓷𝔂𝓪 𝓫𝔂 𝓟𝓲𝓴𝓪 ᚛━━╾ᐧᐧᐧᐧ⳹
│                                                 
│             *༺ TAGALL ༻*
│
${menureactemoji} 𝗚𝗿𝗼𝘂𝗽 𝗻𝗮𝗺𝗲 : ${groupMetadata.subject}
├───────────♡
${globalthemeemoji} 𝗠𝗲𝘀𝘀𝗮𝗴𝗲 : ${args.join(" ") ? args.join(" ") : 'no message'}
├───────────♡
${allmenureactemoji} 𝗔𝗻𝗻𝗼𝘂𝗻𝗰𝗲𝗿 : @${m.sender.split('@')[0]}
╰╼━━━━━━━━━━━━━━━━╾ᐧᐧᐧᐧ⳹ \n\n╭╼━━━━᚜ 𝓜𝓮𝓶𝓫𝓮𝓻𝓼 𝓝𝓪𝓶𝓮 ᚛━━╾ᐧᐧᐧᐧ⳹
╽                                                   `
                for (let mem of participants) {
                teks += `\n┃${globalthemeemoji}@${mem.id.split('@')[0]}`
                }
                AnyaPika.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
                	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!isBotAdmins) return replay(`${mess.botAdmin}`)
            if (!isAdmins) return replay(`${mess.admin}`)
            AnyaPika.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
		if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return reply(mess.endLimit) //wont response when limit runs out\\
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) return replay(`Enter Query Text!`)
                let anu = await styletext(text)
                let teks = `Entered Text ${text}\n\n`
                for (let i of anu) {
                    teks += `${themeemoji} *${i.name}* : ${i.result}\n`
                }
                reply(teks)
	    }
	    break
               case 'vote': {
               	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            if (m.chat in vote) replay(`_There Are Still Votes In This Chat!_\n\n*${prefix}delvote* - To Delete Vote Session`)
            if (!text) return replay(`Enter Reason For Vote, Example: *${prefix + command} Handsome Owner*`)
            reply(`Voting Starts!\n\n*${prefix}upvote* - For Upvote\n*${prefix}devote* - For Devote\n*${prefix}checkvote* - To Check The Vote\n*${prefix}delvote* - To Delete Vote Session`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
]

            let buttonMessageVote = {
                text: teks_vote,
                footer: `${footer}`,
                buttons: buttonsVote,
                headerType: 1
            }
            AnyaPika.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
               	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) replay(`You've Voted`)
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┃╠🔥${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┃╠🔥${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
            ]

            let buttonMessageUpvote = {
                text: teks_vote,
                footer: `${footer}`,
                buttons: buttonsUpvote,
                headerType: 1,
                mentions: menvote
             }
            AnyaPika.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
                case 'devote': {
                	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replay(`You've Voted`)
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `┃╠🔥${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `┃╠🔥${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: 'Upvote'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: 'Devote'}, type: 1}
            ]

            let buttonMessageDevote = {
                text: teks_vote,
                footer: `${footer}`,
                buttons: buttonsDevote,
                headerType: 1,
                mentions: menvote
            }
            AnyaPika.sendMessage(m.chat, buttonMessageDevote)
	}
            break
                 
case 'checkvote':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(`${mess.group}`)
if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
┃╠ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `┃╠🔥${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
┃╠ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `┃╠🔥${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}delvote* - To Delete Vote Session


©${AnyaPika.user.id}
`
AnyaPika.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
			if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            if (!m.isGroup) return replay(`${mess.group}`)
            if (!(m.chat in vote)) return replay(`_*No Voting In This Group!*_\n\n*${prefix}vote* - To Start Voting`)
            delete vote[m.chat]
            reply('Successfully Deleted The Vote Session In This Group')
	    }
            break
               case 'group': case 'grup': {
               	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === 'close'){
                    await AnyaPika.groupSettingUpdate(m.chat, 'announcement').then((res) => reply(`Successful Closing The Group`)).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await AnyaPika.groupSettingUpdate(m.chat, 'not_announcement').then((res) => reply(`Successful Opening The Group`)).catch((err) => reply(jsonformat(err)))
                } else {
                let buttons = [
                        { buttonId: 'group open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'group close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await AnyaPika.sendButtonText(m.chat, buttons, `Group Mode`, AnyaPika.user.name, m)

             }
            }
            break
            case 'editinfo': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
             if (args[0] === 'open'){
                await AnyaPika.groupSettingUpdate(m.chat, 'unlocked').then((res) => reply(`Successfully Opened Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else if (args[0] === 'close'){
                await AnyaPika.groupSettingUpdate(m.chat, 'locked').then((res) => reply(`Successfully Closed Edit Group Info`)).catch((err) => reply(jsonformat(err)))
             } else {
             let buttons = [
                        { buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
                        { buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
                    ]
                    await AnyaPika.sendButtonText(m.chat, buttons, `Mode Edit Info`, AnyaPika.user.name, m)

            }
            }
            break
case 'autosticker':
case 'autostiker':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return reply(mess.botAdmin)
if (!isAdmins && !isCreator) return reply(mess.admin)
if (args.length < 1) return reply('type auto sticker on to enable\ntype auto sticker off to disable')
if (args[0]  === 'on'){
if (isAutoSticker) return reply(`Already activated`)
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
reply('autosticker activated')
} else if (args[0] === 'off'){
let anu = autosticker.indexOf(from)
autosticker.splice(anu, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
reply('auto sticker deactivated')
}
break
case 'autostickerpc':
case 'autostikerpc':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (args.length < 1) return reply('type autosticker on to activate\ntype autosticker off to disable')
if (args[0]  === 'on'){
if (isAutoStick) return reply(`Already activated`)
_autostick.push(from)
fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
reply('autosticker pc activated')
} else if (args[0] === 'off'){
let anu = autosticker.indexOf(from)
_autostick.splice(anu, 1)
fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
reply('autosticker pc deactivated')
}
break
case 'antilinkgc': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLink) return replay('Already activated')
ntilink.push(from)
replay('Success in turning on group chat antilink in this group')
var groupe = await AnyaPika.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AnyaPika.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the group link in this group or u will be kicked immediately`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLink) return replay('Already deactivated')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
replay('Success in turning off group chat antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await AnyaPika.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${botname3}`, m)
  }
  }
  break
case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return replay('Already activated')
ntilinkytvid.push(from)
replay('Success in turning on youtube video antilink in this group')
var groupe = await AnyaPika.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AnyaPika.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube video link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return replay('Already deactivated')
let off = ntilinkytvid.indexOf(from)
ntilinkytvid.splice(off, 1)
replay('Success in turning off youtube video antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await AnyaPika.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${botname3}`, m)
  }
  }
  break
case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return replay('Already activated')
ntilinkytch.push(from)
replay('Success in turning on youtube channel antilink in this group')
var groupe = await AnyaPika.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AnyaPika.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube channel link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return replay('Already deactivated')
let off = ntilinkytch.indexOf(from)
ntilinkytch.splice(off, 1)
replay('Success in turning off youtube channel antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await AnyaPika.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${botname3}`, m)
  }
  }
  break
case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkInstagram) return replay('Already activated')
ntilinkig.push(from)
replay('Success in turning on instagram antilink in this group')
var groupe = await AnyaPika.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AnyaPika.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the instagram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkInstagram) return replay('Already deactivated')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
replay('Success in turning off instagram antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await AnyaPika.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${botname3}`, m)
  }
  }
  break
case 'antilinkfacebook': case 'antilinkfb': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkFacebook) return replay('Already activated')
ntilinkfb.push(from)
replay('Success in turning on facebook antilink in this group')
var groupe = await AnyaPika.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AnyaPika.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the facebook link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return replay('Already deactivated')
let off = ntilinkfb.indexOf(from)
ntilinkfb.splice(off, 1)
replay('Success in turning off facebook antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await AnyaPika.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${botname3}`, m)
  }
  }
  break
case 'antilinktelegram': case 'antilinktg': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkTelegram) return replay('Already activated')
ntilinktg.push(from)
replay('Success in turning on telegram antilink in this group')
var groupe = await AnyaPika.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AnyaPika.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the telegram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return replay('Already deactivated')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
replay('Success in turning off telegram antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await AnyaPika.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${botname3}`, m)
  }
  }
  break
case 'antilinktiktok': case 'antilinktt': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkTiktok) return replay('Already activated')
ntilinktt.push(from)
replay('Success in turning on tiktok antilink in this group')
var groupe = await AnyaPika.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AnyaPika.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the tiktok link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return replay('Already deactivated')
let off = ntilinktt.indexOf(from)
ntilinktt.splice(off, 1)
replay('Success in turning off tiktok antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await AnyaPika.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${botname3}`, m)
  }
  }
  break
            case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return replay('Already activated')
ntilinktwt.push(from)
replay('Success in turning on twitter antilink in this group')
var groupe = await AnyaPika.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AnyaPika.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the twitter link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return replay('Already deactivated')
let off = ntilinktwt.indexOf(from)
ntilinktwt.splice(off, 1)
replay('Success in turning off twitter antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await AnyaPika.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${botname3}`, m)
  }
  }
  break
              case 'antilinkall': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return replay('Already activated')
ntilinkall.push(from)
replay('Success in turning on all antilink in this group')
var groupe = await AnyaPika.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AnyaPika.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return replay('Already deactivated')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
replay('Success in turning off all antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await AnyaPika.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${botname3}`, m)
  }
  }
  break
case 'antivirus': case 'antivirtex': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (antiVirtex) return replay('Already activated')
ntvirtex.push(from)
replay('Success in turning on antivirus in this group')
var groupe = await AnyaPika.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AnyaPika.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNo body is allowed to send virus in this group, member who send will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiVirtex) return replay('Already deactivated')
let off = ntvirtex.indexOf(from)
ntvirtex.splice(off, 1)
replay('Success in turning off antivirus this group')
} else {
  let buttonsntvirtex = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await AnyaPika.sendButtonText(m.chat, buttonsntvirtex, `Please click the button below\n\nOn to enable\nOff to disable`, `${botname3}`, m)
  }
  }
  break
    case 'autoreply': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (Autoreply) return replay('Already activated')
autorep.push(from)
replay('Success in turning on the autoreply in this group')
} else if (args[0] === "off") {
if (!Autoreply) return replay('Already deactivated')
let off = autorep.indexOf(from)
autorep.splice(off, 1)
replay('Success in turning off autoreply in this group')
} else {
  let buttonswlcm = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await AnyaPika.sendButtonText(m.chat, buttonswlcm, `Please click the button below\n\nOn to enable\nOff to disable`, `${botname3}`, m)
  }
  }
  break
case 'antitoxic': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (antiToxic) return replay(`Antitoxic already activated hai ${pushname} babe.`)
nttoxic.push(from)
replay('ㅤㅤ⍙__⍙\n      (  ^⌔^ )\n       | >❤️ 𝘠𝘦 𝘭𝘰 𝘮𝘦𝘳𝘢 𝘥𝘪𝘭....\n\n𝐍𝐨𝐰 𝐝𝐨𝐧`𝐭 𝐛𝐞 𝐭𝐨𝐱𝐢𝐜...𝐎𝐤𝐚𝐲?')
var groupe = await AnyaPika.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AnyaPika.sendMessage(from, {text: `❒✗-  Because, now if you'll be toxic in this group....⚠️\n\n𝗬𝗼𝘂'𝗹𝗹 𝗯𝗲 𝗴𝗲𝘁 𝗸𝗶𝗰𝗸𝗲𝗱 𝗶𝗺𝗺𝗲𝗱𝗶𝗮𝘁𝗲𝘁𝗹𝘆`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiToxic) return replay(`Antitoxic in already turned 𝗼𝗳𝗳 ${pushname}...\n\n_Tap on 𝗼𝗻𝗻 button if you want to turn it 𝗼𝗻𝗻._`)
let off = nttoxic.indexOf(from)
nttoxic.splice(off, 1)
replay('ㅤㅤ   ⍙__⍙\n         ( ^⌔^  )\n𝘉𝘺𝘦~🖤< |\n𝐌𝐞 𝐜𝐡𝐚𝐥𝐢 𝐚𝐩𝐧𝐚 𝐝𝐢𝐥 𝐥𝐞 𝐤𝐚𝐫....\n\n❒✗-  𝘛𝘶𝘮𝘭𝘰𝘨 𝘢𝘣 𝘣𝘪𝘯𝘥𝘢𝘴𝘴 𝘨𝘢𝘢𝘭𝘪 𝘥𝘰 𝘣𝘦𝘯𝘤𝘩𝘰 _!!_')
} else {
  let buttonsnttoxic = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await AnyaPika.sendButtonText(m.chat, buttonsnttoxic, `Please click the button below\n\nOn to enable\nOff to disable`, `${botname3}`, m)
  }
  }
  break
case 'antiwame': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (antiWame) return replay('Already activated')
ntwame.push(from)
replay('Success in turning on antiwame in this group')
var groupe = await AnyaPika.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AnyaPika.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to send wa.me in this group, one who sends will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiWame) return replay('Already deactivated')
let off = nttoxic.indexOf(from)
ntwame.splice(off, 1)
replay('Success in turning off antiwame in this group')
} else {
  let buttonsntwame = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await AnyaPika.sendButtonText(m.chat, buttonsntwame, `Please click the button below\n\nOn to enable\nOff to disable`, `${botname3}`, m)
  }
  }
  break
  case 'nsfw': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!isBotAdmins) return replay(mess.botAdmin)
if (!isAdmins && !isCreator) return replay(mess.admin)
if (args[0] === "on") {
if (AntiNsfw) return replay('Already activated')
ntnsfw.push(from)
replay('Success in turning on nsfw in this group')
var groupe = await AnyaPika.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
AnyaPika.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNsfw(not safe for work) feature has been enabled in this group, which means one can access sexual graphics from the bot!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return replay('Already deactivated')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
replay('Success in turning off nsfw in this group')
} else {
  let buttonsntnsfw = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await AnyaPika.sendButtonText(m.chat, buttonsntnsfw, `Please click the button below\n\nOn to enable\nOff to disable`, `${botname3}`, m)
  }
  }
  break
             case 'mute': {
             	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (args[0] === "on") {
                if (db.data.chats[m.chat].mute) return reply(`Previously Active`)
                db.data.chats[m.chat].mute = true
                reply(`${AnyaPika.user.name} Has Been Muted In This Group !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].mute) return reply(`Previously Inactive`)
                db.data.chats[m.chat].mute = false
                reply(`${AnyaPika.user.name} Has Been Unmuted In This Group!`)
                } else {
                 let buttons = [
                        { buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await AnyaPika.sendButtonText(m.chat, buttons, `Mute Bot`, AnyaPika.user.name, m)
                }
             }
             break
case 'setppbot': case 'setbotpp': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
let media = await AnyaPika.downloadAndSaveMediaMessage(quoted)
await AnyaPika.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
replay(mess.success)
}
break
            case 'linkgroup': case 'linkgc': case 'gclink': case 'grouplink': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) return replay(`${mess.group}`)
                let response = await AnyaPika.groupInviteCode(m.chat)
                AnyaPika.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n${groupMetadata.subject} Group Link`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!m.isGroup) replay(`${mess.group}`)
                if (!isBotAdmins) return replay(`${mess.botAdmin}`)
                if (!isAdmins) return replay(`${mess.admin}`)
                if (!text) return replay(`Enter The enable/disable Values`)
                if (args[0] === 'enable') {
                    await AnyaPika.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                } else if (args[0] === 'disable') {
                    await AnyaPika.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => reply(jsonformat(res))).catch((err) => reply(jsonformat(err)))
                }
            }
            break
case 'grupsetting':
            case 'groupsetting':{
            	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                    let sections = []
                    let com = [`group open`,`autosticker on`,`welcome on`,`antilinkgc on`,`antilinktg on`,`antilinktt on`,`antilinkytch on`,`antilinkytvid on`,`antilinkig on`,`antilinkfb on`,`antilinktwit on`,`antilinkall on`,`antiwame on`,`antitoxic on`,`antivirus on`,`autoreply on`,`group open`]
                    let comm = [`group close`,`autosticker off`,`welcome off`,`antilinkgc off`,`antilinktg on`,`antilinktt on`,`antilinkytch on`,`antilinkytvid on`,`antilinkig on`,`antilinkfb on`,`antilinktwit on`,`antilinkall on`,`antiwame on`,`antitoxic on`,`antivirus on`,`autoreply on`,`group close`]
                    let listnya = [`Group open/close`,`Auto-Sticker on/off`,`Welcome/Left on/off`,`Antilink Group on/off`,`Antilink Telegram on/off`,`Antilink Tiktok on/off`,`Antilink Youtube Channel on/off`,`Antilink Youtube Video on/off`,`Antilink Instagram on/off`,`Antilink Facebook on/off`,`Antilink Twitter on/off`,`Antilink All on/off`,`Anti Wame on/off`,`Anti Toxic on/off`,`Anti Virus on/off`,`Auto Reply on/off`,`Group open/close`]
                    let suruh = [`Enable`, `Disable`]
                    let fiturname = [`Group`,`Auto Sticker`,`Welcome`,`Antilink Group`,`Antilink Telegram`,`Antilink Tiktok`,`Antilink Youtube Channel`,`Antilink Youtube Video`,`Antilink Instagram`,`Antilink Facebook`,`Antilink Twitter`,`Antilink All`,`Anti Wame`,`Anti Toxic`,`Anti Virus`,`Auto Reply`,`Group`]
                    let startnum = 0; let startnu = 0; let startn = 0;let start = 0
                    let startnumm = 1
                    for (let x of com) {
                        const yy = {title: `${listnya[startnum++]}`,
                    rows: [
                       {
                        title: `${suruh[0]}`,
                        description: `Activate ${fiturname[startnu++]}`,
                        rowId: `${prefix}${x}`
                      },{
                        title: `${suruh[1]}`,
                        description: `Deactivate ${fiturname[startn++]}`,
                        rowId: `${prefix}${comm[start++]}`
                      }
                    ]
                   }
                        sections.push(yy)
                    }
                    const sendm =  AnyaPika.sendMessage(
      from, 
      {
       text: "Group Settings",
       footer: `${footer}`,
       title: "Set your group settings here......",
       buttonText: "Click Button",
       sections
      }, { quoted : m }
    )  
}
  break
case 'igstalk':{
if (!text) return reply(`Example : ${prefix + command} text`) 
let { result: anu } = await fetchJson(`https://zenzapis.xyz/stalker/ig?username=${text}&apikey=afae961f1c`)
if (anu.status == false) return m.reply(anu.result.message)
AnyaPika.sendMedia(m.chat, anu.caption.profile_hd, '', `⭔ Full Name : ${anu.caption.full_name}\n⭔ User Name : ${anu.caption.user_name}\n⭔ ID ${anu.caption.user_id}\n⭔ Followers : ${anu.caption.followers}\n⭔ Following : ${anu.caption.following}\n⭔ Bussines : ${anu.caption.bussines}\n⭔ Profesional : ${anu.caption.profesional}\n⭔ Verified : ${anu.caption.verified}\n⭔ Private : ${anu.caption.private}\n⭔ Bio : ${anu.caption.biography}\n⭔ Bio Url : ${anu.caption.bio_url}\n url:'https://instagram.com/'${anu.caption.user_name}`, m)
}
break
		
case 'restart':	case 'BOTRESTART':{	
if (!isCreator) return replay(mess.owner)
exec("npm i -g pm2 && pm2 start nexus.js && pm2 save && pm2 logs")
replay(`RESTARTING THE BOT..............`)
}
break

 case 'deletethis': case 'delthis': case 'deletethismessage': case 'delthismsg': case 'ignoreit': {
    if (isBan) return reply(mess.banned)	 			
 if (isBanChat) return reply(mess.bangc)
 if (!isBotAdmins) return replay(mess.botadmin)
 if (!isAdmins && !isCreator) return replay(mess.useradmin)
 if (!m.quoted) return reply('Please mention a message baka!')
 let { chat, fromMe, id} = m.quoted

const key = {
    remoteJid: m.chat,
    fromMe: false,
    id: m.quoted.id,
    participant: m.quoted.sender
}

await AnyaPika.sendMessage(m.chat, { delete: key })
 }
 break

case 'delete': case 'del': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted) reply(false)
let { chat, fromEveryone, id, isBaileys } = m.quoted
if (!isBaileys) return replay(`The Message Was Not Sent By A Bot!`)
AnyaPika.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
            break
case 'bcgc': case 'bcgroup': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
if (!args.join(" ")) return replay(`Where is the text?\n\nExample : ${prefix + command} ${global.ownername}`)
let getGroups = await AnyaPika.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
let unicorn = ["https://i.pinimg.com/564x/1e/9a/c9/1e9ac9e3ec037fa9642fba616e4d35be.jpg"]
replay(`Send broadcast to ${anu.length} group chat, time's up ${anu.length * 1.5} second`)
for (let i of anu) {
await sleep(1500)
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let ntus = {
image: unicorn,
jpegThumbnail: log0,
caption: text,
footer: `${footer}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"I deserve something for my hardwork",
body: "Click to follow", 
thumbnail: menuimage,
mediaType:1,
mediaUrl: `${link1}`,
sourceUrl: `${linkgit}`
}}
}
AnyaPika.sendMessage(m.chat , ntus , { quoted: m })
}
replay(`Successfully Sent Broadcast To ${anu.length} Group`)
}
break
case 'bc': case 'broadcast': case 'bcall': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
if (!args.join(" ")) return replay(`Where is the text??\n\nExample : ${prefix + command} ${global.ownername}`)
let anu = await store.chats.all().map(v => v.id)
let unicorn =  ["https://i.pinimg.com/564x/1e/9a/c9/1e9ac9e3ec037fa9642fba616e4d35be.jpg"]
replay(`Send Broadcast To ${anu.length} Chat\nTime's up ${anu.length * 1.5} second`)
for (let yoi of anu) {
await sleep(1500)
let buttons = [
{buttonId: `sc`, buttonText: {displayText: 'SUPPORT'}, type: 1}
]
let ntus = {
image: unicorn,
jpegThumbnail: log0,
caption: text,
footer: `${footer}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"I deserve something for my hardwork",
body: "Click to donate", 
thumbnail: menuimage,
mediaType:1,
mediaUrl: `${link1}`,
sourceUrl: `${linkgit}`
}}
}
AnyaPika.sendMessage(m.chat , ntus , { quoted: m })
}
replay('Broadcast Success')
}
break
 case 'bcimage': case 'bcvideo': case 'bcaudio': {
                  if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
                if (!/video/.test(mime) && !/image/.test(mime) && !/audio/.test(mime)) return reply(`*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}`)
                let anu = await store.chats.all().map(v => v.id)
                let ftroli = {key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "916909137213-1604595598@g.us"}, "message": {orderMessage: {itemCount: 999999999,status: 200, thumbnail: menuimage, surface: 200, message: `${ownername}'s Broadcast`, orderTitle: `${botname}`, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
                reply(`*Send Broadcast To* ${anu.length} *Group Chat, Time ${anu.length * 1.5} secs*`)
                for (let i of anu) {
                    await sleep(1500)
                    let butoon = [{
                                urlButton: {
                                displayText: 'github 🍓',
url: `${global.websitex}`
                                }
                            }, {
urlButton: {
displayText: 'Script 🍜',
url: `${global.botscript}`
}
}, {
quickReplyButton: {
displayText: 'Bot Status 🚀',
id: 'ping'
}
}, {
quickReplyButton: {
displayText: 'Menu 🐰',
id: 'menu'
}  
}, {
quickReplyButton: {
displayText: 'Owner 😈',
id: 'owner'
}
}]
                    let media = await AnyaPika.downloadAndSaveMediaMessage(quoted)
                    let buffer = fs.readFileSync(media)
                    if (/webp/.test(mime)) {
                    AnyaPika.sendMessage(i, { sticker: { url: media } }, { quoted: ftroli })
                    } else if (/image/.test(mime)) {
                    let AnyaPikachu = `*「 ${global.ownername}'s Broadcast」*${text ? '\n\n' + text : ''}`
                    AnyaPika.send5ButImg(i, AnyaPikachu, `${botname3}`, buffer, butoon)
                    } else if (/video/.test(mime)) {
                    let AnyaPikachu = `*「 ${global.ownername}'s Broadcast」*${text ? '\n\n' + text : ''}`
                    AnyaPika.sendMessage(i, {video: buffer, caption: `${botname}`}, { quoted: ftroli })
                    } else if (/audio/.test(mime)) {
                    AnyaPika.sendMessage(i, {audio: buffer, mimetype: 'audio/mpeg'}, { quoted : ftroli })
                    } else {
                    reply(`*Send/Reply Video/Audio/Image You Want to Broadcast With Caption* ${prefix + command}`)
                    }
                    await fs.unlinkSync(media)
                    }
                reply(` *Send Broadcast To* ${anu.length} *Chats*`)
            }
            break
case 'bcloc': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return replay(mess.owner)
                if (!text) return reply(`Use ${prefix}bcloc text\n\nExample : ${prefix + command} attention everybody`)
                let anu = await store.chats.all().map(v => v.id)
                let [melo, melo2] = text.split`|`
                reply(`*Send Broadcast To* ${anu.length} Chat\nTime ${anu.length * 1.5} sec`)
	     	for (let yoi of anu) {
	     	await sleep(1500)
		    var button = [{ buttonId: `${prefix}ho`, buttonText: { displayText: `${melo2}` }, type: 1 }]              
            AnyaPika.sendMessage(yoi, { caption: `${melo}`, location: { jpegThumbnail: await getBuffer(picak+`${ownername}'s Broadcast`) }, buttons: button, footer: `${footer}`, mentions: [m.sender] })
		}		
            }
            break
case 'chatinfo': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted) replay('Reply Message')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) return replay('The message was not sent by a bot!')
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `${globalthemeemoji} @${i.userJid.split('@')[0]}\n`
teks += ` ┗━${globalthemeemoji} *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ${globalthemeemoji} *Status :* ${read ? 'Read' : 'Sent'}\n\n`
}
AnyaPika.sendTextWithMentions(m.chat, teks, m)
}
break
case 'q': case 'quoted': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted) return replay('Reply Message!!')
let wokwol = await AnyaPika.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return replay('The message you replied to does not contain a reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
break
case 'profile': case 'myprofile':
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
  if (!isDarah){ addInventoriDarah(m.sender, DarahAwal) }
  if (!isInventory){ addInventori(m.sender) }
  if (!isInventoriBuruan){ addInventoriBuruan(m.sender) }
     

     var flob = await getBuffer(picak+'User Profile')
     var bio= await AnyaPika.fetchStatus(m.sender)
     var bioo = bio.status
     const adn= isAdmins? "True":"False"
     
     try {
        
        pfp=await AnyaPika.profilePictureUrl(m.sender, 'image')
    
          } catch (e) {
     
      pfp ='https://wallpapercave.com/wp/wp10524580.jpg'
    }

     const profilexx = `💝 *USER PROFILE* 💝 

╭╼━━━᚜𝓤𝓼𝓮𝓻 𝓲𝓷𝓯𝓸 ᚛━━╾ᐧᐧᐧᐧ⳹
┊
🥵 𝗬𝗼𝘂𝗿 𝗻𝗮𝗺𝗲 :
┊➥ ${pushname}
🐤 𝗬𝗼𝘂𝗿 𝗯𝗶𝗼 :
┊➥ ${bioo}
🎃 𝗚𝗿𝗼𝘂𝗽 𝗻𝗮𝗺𝗲 :
┊➥ ${groupMetadata.subject}
❤️ 𝗚𝗿𝗼𝘂𝗽 𝗮𝗱𝗺𝗶𝗻 *?* :
┊➥ ${adn}
🔥 𝗕𝗼𝘁 𝗻𝗮𝗺𝗲 :
┊➥ ${botname3}
╰╼━━━━━━━━━━━━╾ᐧᐧᐧᐧ⳹

Please choose the buttons below to use 𝗺𝗼𝗿𝗲 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀. ✨`
 


let buttonspro = [
    {buttonId: `${prefix}soulmate`, buttonText: {displayText: `My soulmate 😚`}, type: 1},
    {buttonId: `${prefix}menu`, buttonText: {displayText: `🍓 Menu 🍓`}, type: 1}
    ]
            let buttonMessage = {
                image: { url: pfp },
                caption: profilexx,
                footer: `${footer}`,
                buttons: buttonspro,
                headerType: 4
            }
        AnyaPika.sendMessage(m.chat,buttonMessage,{quoted:m})
        	
            break
case 'listpc': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
let teks = `     「 Personal Chat List 」\n\nThere are ${anu.length} users using bot in personal chat`
for (let i of anu) {
 teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("Asia/Kolkata").format("DD/MM/YYYY HH:mm:ss")}`
}
AnyaPika.sendTextWithMentions(m.chat, teks, m)
}
break
case 'listgc': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `*💝 𝘛𝘰𝘵𝘢𝘭 _${anu.length}_ 𝘶𝘴𝘦𝘳𝘴 𝘢𝘳𝘦 𝘶𝘴𝘪𝘯𝘨 _${global.BotName4}_ 𝘪𝘯 𝘵𝘩𝘦𝘳𝘦 𝘨𝘳𝘰𝘶𝘱𝘴.*\n`
for (let i of anu) {
 let metadata = await AnyaPika.groupMetadata(i)
 if (metadata.owner === "undefined") {
 loldd = false
 } else {
 loldd = metadata.owner
 }
 teks += `\n┏━━━━᚜ 𝓐𝓷𝔂𝓪 𝓫𝔂 𝓟𝓲𝓴𝓪 ᚛━━╾ᐧᐧᐧᐧ⳹
╽
┃➥ 𝗡𝗮𝗺𝗲 :
┃✑ ${metadata.subject ? metadata.subject : "undefined"}
┃➥ 𝗢𝘄𝗻𝗲𝗿 :
┃✑ ${loldd ? '@' + loldd.split("@")[0] : "undefined"}
┃➥ 𝗚𝗿𝗼𝘂𝗽 𝗜𝗗 :
┃✑ ${metadata.id ? metadata.id : "undefined"}
┃➥ 𝗖𝗿𝗲𝗮𝘁𝗶𝗼𝗻 𝘁𝗶𝗺𝗲 :
┃✑ ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss') : "undefined"}
┃➥ 𝗠𝗲𝗺𝗯𝗲𝗿𝘀 :
┃✑ ${metadata.participants.length ? metadata.participants.length : "undefined"}
┗━━━━━━━━━━━━━━━━╾ᐧᐧᐧᐧ⳹`
}
AnyaPika.sendTextWithMentions(m.chat, teks, m)
}
break
case 'listonline': case 'online': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
let liston = 1
AnyaPika.sendText(m.chat, 'ㅤ ࿙⳼ 𝗢𝗻𝗹𝗶𝗻𝗲 𝗹𝗶𝘀𝘁 🖥️✋🏻 ⳹࿚\n\n┌╼━━━᚜ 𝓐𝓷𝔂𝓪 𝓑𝔂 𝓟𝓲𝓴𝓪 ᚛━╾ᐧᐧᐧᐧ⳹\n┊\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
break
case 'patrick':
case 'patricksticker': {
	                	            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await AnyaPika.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break      
case 'attp': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
           if (!text) reply(`Use ${prefix}attp hello\n*Example : ${prefix + command} ${ownername}*` )
           await AnyaPika.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/attp?teks=${text}`, 'Anya', 'Op', m, {asSticker: true}).catch((err) => reply(mess.error))
         }
         break
case 'ttp': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
           if (!text) return reply(`*Example : ${prefix + command} hello*`)
           await AnyaPika.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/texttopng2?teks=${text}`, 'A L Y A', 'B O T M D', m, {asSticker: true})
         
                     }
                     break
            case 'soundcloud': case 'scdl': {               
                if (!text) return reply(mess.linkm)
                if (!isUrl(args[0]) && !args[0].includes('soundcloud.com')) return reply(`*Not a soundcloud link*`)
                Pikakey.SoundCloud(`${text}`).then(async (data) => {
                    let txt = `*SOUNDCLOUD DOWNLOADER*\n\n`
                    txt += `*${themeemoji}Title :* ${data.title}\n`
                    txt += `*${themeemoji}Quality :* ${data.medias[0].quality}\n`
                    txt += `*${themeemoji}Type :* ${data.medias[0].extension}\n`
                    txt += `*${themeemoji}Size :* ${data.medias[0].formattedSize}\n`
                    txt += `*${themeemoji}Url Source :* ${data.url}\n\n`
                    txt += `*${botname}*`
                buf = await getBuffer(data.thumbnail)   
                AnyaPika.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m }).catch((err) => reply(mess.error))    
                AnyaPika.sendMessage(m.chat, { audio: { url: data.medias[0].url }, mimetype: 'audio/mpeg', fileName: data.title+'.m4a' }, { quoted: m })
                }).catch((err) => {
                    reply(mess.error)
                })
            }
            break

case 'lovesticker':
case 'lovestick' :{
	            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await AnyaPika.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'gura':
case 'gurastick':{
	                	            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await AnyaPika.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await AnyaPika.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
let media = await quoted.download()
let encmedia = await AnyaPika.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
}
}
break
case 'swm': case 'take': case 'stickerwm': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return reply(`Example :\nswm ${global.author}|${global.packname}`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
AnyaPika.downloadAndSaveMediaMessage(quoted, "gifee")
AnyaPika.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await AnyaPika.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: global.atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Maximum 10 seconds!')
let media = await quoted.download()
let encmedia = await AnyaPika.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
}
}
break
case 'smeme': case 'stickermeme': case 'stickmeme': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let { TelegraPh } = require('./lib/uploader')
if (!text) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
if (text.includes('|')) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
if (!/image/.test(mime)) return reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
reply(mess.wait)
mee = await AnyaPika.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await AnyaPika.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
            case 'ebinary': {
            	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            if (!m.quoted.text && !text) return replay(`Reply Text With Caption ${prefix + command}`)
            let { eBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let eb = await eBinary(teks)
            reply(eb)
        }
        break
            case 'dbinary': {
            	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            if (!m.quoted.text && !text) return replay(`Reply Text With Caption ${prefix + command}`)
            let { dBinary } = require('./lib/binary')
            let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
            let db = await dBinary(teks)
            reply(db)
        }
        break
case 'bts':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
teks = `Here you go!`
buffer = `https://api.dapuhy.xyz/api/randomimage/batues?apikey=0gly81wDky`
AnyaPika.sendMessage(from, {image:{url:buffer}, caption:"Here you go!"}, {quoted:m})
break
case 'wallneon': case 'wallrandom': case 'wallcode': case 'wallpubg': case 'wallml': 	
try{
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
nyz2 = await fetchJson(`https://myselfff.herokuapp.com/docs/wallpaper/${command}`) 
nyz3 = await getBuffer(nyz2.list.gambar)
AnyaPika.sendMessage(from, {image : nyz3, caption:`By `${botname3}`}, {quoted:m}) 						
} catch (e) {
error("Error!")
}
break
case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'lizard':
case 'meow':
case 'tickle':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AnyaPika.sendMessage(m.chat, buttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'masturbation': case 'jahy': case 'hentai': case 'glasses': case 'gangbang': case 'foot': 
case 'femdom': case 'cum': case 'ero': case 'cuckold': case 'blowjob': case 'bdsm': 
case 'ahegao': case 'ass': case 'orgy': case 'panties': case 'pussy': case 'thighs': case 'yuri': case 'tentacles':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
try{
reply(mess.wait)
NoHorny = await fetchJson(`https://myselfff.herokuapp.com/docs/nsfw/${command}`)
YesHorny = await getBuffer(NoHorny.result)
AnyaPika.sendMessage(from, {image:YesHorny},{quoted:m})
} catch (e) {error("Error")}	
break
   case 'spank':
      if (isBan) return reply(mess.ban)	 			
   if (isBanChat) return reply(mess.banChat)
   if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
reply(mess.wait)
spankd = await axios.get(`https://nekos.life/api/v2/img/spank`)                                   
  let spbuff = await getBuffer(spankd.data.url)
let spgif = await GIFBufferToVideoBuffer(spbuff)   
        await AnyaPika.sendMessage(m.chat,{video: spgif, gifPlayback:true},{ quoted:m }).catch(err => {
                    return reply('Error!')
                                    })
break
case 'blowjobgif': case 'bj' :
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
reply(mess.wait)
bjd = await axios.get(`https://api.waifu.pics/nsfw/blowjob`)         
  let bjf = await getBuffer(bjd.data.url)
let bjif = await GIFBufferToVideoBuffer(bjf)   
        await AnyaPika.sendMessage(m.chat,{video: bjif, gifPlayback:true},{ quoted:m }).catch(err => {
                    return reply('error..')
                                    })
break
case 'hentaivid': case 'hentaivideo': {
	                        	            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
                reply(mess.wait)
                anu = await hentai()
                result912 = anu[Math.floor(Math.random(), anu.length)]
                AnyaPika.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}` }, { quoted: m })
            }
            break
case 'trap' :
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
 let trapbot = [
    {buttonId: `trap`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let button2Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
  buttons: trapbot,
  headerType: 1
  }     
            await AnyaPika.sendMessage(m.chat, button2Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'hentai-neko' :
case 'hneko' :
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
 let hnekobot = [
    {buttonId: `.hneko`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
  buttons: hnekobot,
  headerType: 1
  }      
            await AnyaPika.sendMessage(m.chat, button3Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'hentai-waifu' :
case 'nwaifu' :
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
if (!AntiNsfw) return reply(mess.nsfw)
reply(mess.wait)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
 let nwaifubot = [
    {buttonId: `.hneko`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let button4Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
  buttons: nwaifubot,
  headerType: 1
  }      
            await AnyaPika.sendMessage(m.chat, button4Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'gasm':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	if (!AntiNsfw) return reply(mess.nsfw)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonsssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AnyaPika.sendMessage(m.chat, buttonsssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break   
case 'smug2':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/smug`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let button1ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AnyaPika.sendMessage(m.chat, button1ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'foxgirl':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let button12ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AnyaPika.sendMessage(m.chat, button12ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break   
case 'animenom' :
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.isGroup) return replay(mess.group)
    waifudd = await axios.get(`https://waifu.pics/api/sfw/nom`)
 let xxhnekobot = [
    {buttonId: `.nom`, buttonText: {displayText: `Next ⚡`}, type: 1},
    ]
  let xx1button3Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
  buttons: xxhnekobot,
  headerType: 1
  }      
            await AnyaPika.sendMessage(m.chat, xx1button3Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'waifu-face':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let button112ssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AnyaPika.sendMessage(m.chat, button112ssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'neko2':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
   waifud = await axios.get('https://waifu.pics/api/sfw/neko')
                var wbutsss = [
        {buttonId: `.neko`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonssMessage = {
       image: {url:waifud.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
      buttons: wbutsss,
      headerType: 4
      }
            await AnyaPika.sendMessage(m.chat,buttonssMessage, { quoted:m }).catch(err => {
                    return('Error!')
                })               
                break
case 'animecuddle':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonsosMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AnyaPika.sendMessage(m.chat, buttonsosMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break   
case 'animeslap':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let btutttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AnyaPika.sendMessage(m.chat, btutttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animepat':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let xxbuttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AnyaPika.sendMessage(m.chat, xxbuttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeneko':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/neko`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonsTsMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AnyaPika.sendMessage(m.chat, buttonsTsMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animehug':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonussMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AnyaPika.sendMessage(m.chat, buttonussMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animekiss':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let bxxuttonssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AnyaPika.sendMessage(m.chat, bxxuttonssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewlp':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttoxnssMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AnyaPika.sendMessage(m.chat, buttoxnssMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animespank':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)
                           var wbuttsss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonssxMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
      buttons: wbuttsss,
      headerType: 4
      }     
            await AnyaPika.sendMessage(m.chat, buttonssxMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animecry':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/cry`)
                           var wbutt1sss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let button1ssxMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
      buttons: wbutt1sss,
      headerType: 4
      }     
            await AnyaPika.sendMessage(m.chat, button1ssxMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animekill':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/kill`)
                           var wbuttszzss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsxMessages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
      buttons: wbuttszzss,
      headerType: 4
      }     
            await AnyaPika.sendMessage(m.chat, buttonszzsxMessages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animelick':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/lick`)
                           var wbuttszz12ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx12Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
      buttons: wbuttszz12ss,
      headerType: 4
      }     
            await AnyaPika.sendMessage(m.chat, buttonszzsx12Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animebite':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/bite`)
                           var wbuttszz123ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx123Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
      buttons: wbuttszz123ss,
      headerType: 4
      }     
            await AnyaPika.sendMessage(m.chat, buttonszzsx123Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeyeet':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/yeet`)
                           var wbuttszz124ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx124Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
      buttons: wbuttszz124ss,
      headerType: 4
      }     
            await AnyaPika.sendMessage(m.chat, buttonszzsx124Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animebully':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/lick`)
                           var wbuttszz125ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx125Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
      buttons: wbuttszz125ss,
      headerType: 4
      }     
            await AnyaPika.sendMessage(m.chat, buttonszzsx125Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animebonk':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/bonk`)
                           var wbuttszz126ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx126Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
      buttons: wbuttszz126ss,
      headerType: 4
      }     
            await AnyaPika.sendMessage(m.chat, buttonszzsx126Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewink':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/wink`)
                           var wbuttszz127ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx127Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
      buttons: wbuttszz127ss,
      headerType: 4
      }     
            await AnyaPika.sendMessage(m.chat, buttonszzsx127Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animepoke':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/poke`)
                           var wbuttszz128ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx128Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
      buttons: wbuttszz128ss,
      headerType: 4
      }     
            await AnyaPika.sendMessage(m.chat, buttonszzsx128Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animesmile':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/smile`)
                           var wbuttszz129ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx129Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
      buttons: wbuttszz129ss,
      headerType: 4
      }     
            await AnyaPika.sendMessage(m.chat, buttonszzsx129Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewave':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/wave`)
                           var wbuttszz1210ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1210Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
      buttons: wbuttszz1210ss,
      headerType: 4
      }     
            await AnyaPika.sendMessage(m.chat, buttonszzsx1210Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeawoo':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/awoo`)
                           var wbuttszz1211ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1211Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
      buttons: wbuttszz1211ss,
      headerType: 4
      }     
            await AnyaPika.sendMessage(m.chat, buttonszzsx1211Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeblush':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/blush`)
                           var wbuttszz1212ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1212Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
      buttons: wbuttszz1212ss,
      headerType: 4
      }     
            await AnyaPika.sendMessage(m.chat, buttonszzsx1212Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animesmug':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/smug`)
                           var wbuttszz1213ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1213Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
      buttons: wbuttszz1213ss,
      headerType: 4
      }     
            await AnyaPika.sendMessage(m.chat, buttonszzsx1213Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animeglomp':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/glomp`)
                           var wbuttszz1214ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1214Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
      buttons: wbuttszz1214ss,
      headerType: 4
      }     
            await AnyaPika.sendMessage(m.chat, buttonszzsx1214Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animehappy':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/happy`)
                           var wbuttszz1215ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1215Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
      buttons: wbuttszz1215ss,
      headerType: 4
      }     
            await AnyaPika.sendMessage(m.chat, buttonszzsx1215Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animedance':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/dance`)
                           var wbuttszz1216ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1216Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
      buttons: wbuttszz1216ss,
      headerType: 4
      }     
            await AnyaPika.sendMessage(m.chat, buttonszzsx1216Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animecringe':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/cringe`)
                           var wbuttszz1217ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1217Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
      buttons: wbuttszz1217ss,
      headerType: 4
      }     
            await AnyaPika.sendMessage(m.chat, buttonszzsx1217Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animehighfive':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/highfive`)
                           var wbuttszz1218ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1218Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
      buttons: wbuttszz1218ss,
      headerType: 4
      }     
            await AnyaPika.sendMessage(m.chat, buttonszzsx1218Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animehandhold':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/handhold`)
                           var wbuttszz1219ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1219Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`, 
      buttons: wbuttszz1219ss,
      headerType: 4
      }     
            await AnyaPika.sendMessage(m.chat, buttonszzsx1219Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animemegumin':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://api.waifu.pics/sfw/megumin`)
                           var wbuttszz1220ss = [
        {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
        ]
      let buttonszzsx1220Messages = {
       image: {url:waifudd.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
      buttons: wbuttszz1220ss,
      headerType: 4
      }     
            await AnyaPika.sendMessage(m.chat, buttonszzsx1220Messages,{ quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'shinobu2':  
 if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
                    ud = await axios.get('https://waifu.pics/api/sfw/shinobu')
var wbutsss = [
    {buttonId: `.shinobu`, buttonText: {displayText: `Next ✨`}, type: 1},
         ]
      let buttonsesMessage = {
      image: {url:ud.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
          buttons: wbutsss,
     headerType: 4
                      }
await AnyaPika.sendMessage(m.chat,buttonsesMessage, { quoted:m }).catch(err => {
     return('Error!')
    })               
break
case 'megumin2':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
                    ud = await axios.get('https://waifu.pics/api/sfw/megumin')
var wbutsss = [
    {buttonId: `.megumin`, buttonText: {displayText: `Next ✨`}, type: 1},
         ]
      let buttonzMessage = {
      image: {url:ud.data.url},
       caption:  `Here you go!`,
      footer: `${footer}`,
          buttons: wbutsss,
     headerType: 4
                      }
await AnyaPika.sendMessage(m.chat,buttonzMessage, { quoted:m }).catch(err => {
     return('Error!')
    })               
break     
case 'awoo2':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)
 var wbuttsss = [
    {buttonId: `.${command}`, buttonText: {displayText: `Next ✨`}, type: 1},
    ]
  let button1Messages = {
   image: {url:waifudd.data.url},
   caption:  `Here you go!`,
   footer: `${footer}`,
  buttons: wbuttsss,
  headerType: 2
  }       
            await AnyaPika.sendMessage(m.chat, button1Messages, { quoted:m }).catch(err => {
                    return('Error!')
                })
break
case 'animewall2': case 'animewallpaper2':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return reply('What wallpaper do you want?')
const wall = new AnimeWallpaper();
    const pages = [1,2,3,4];
        const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
            .getAnimeWall4({ title: q, type: "sfw", page: pages })
            .catch(() => null);
const i = Math.floor(Math.random() * wallpaper.length);
var walb = [
        {buttonId: `.${command} ${q}`, buttonText: {displayText: `Next ✨`}, type: 1},        
        ]
      let wal = {
       image: {url:wallpaper[i].image},
       caption: `*Query :* ${q}`,
      footer: `${footer}`,
      buttons: walb,
      headerType: 4
      }     
            await AnyaPika.sendMessage(m.chat, wal,{ quoted:m }).catch(err => {
                    return('Error!')
                })
AnyaPika.sendMessage(m.chat,{image:{url:wallpaper[i].image},caption:`*Query :* ${q}`})            
break
case 'cry':case 'kill':case 'kick':case 'hug':case 'pat':case 'lick':case 'kiss':case 'bite':case 'yeet':case 'bully':case 'bonk':case 'wink':case 'poke':case 'nom':case 'slap':case 'smile':case 'wave':case 'awoo':case 'blush':case 'smug':case 'glomp':case 'happy':case 'dance':case 'cringe':case 'cuddle':case 'highfive':case 'shinobu':case 'megumin':case 'handhold':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
					axios.get(`https://api.waifu.pics/sfw/${command}`)
					.then(({data}) => {
						AnyaPika.sendImageAsSticker(m.chat, data.url, m, { packname: global.packname, author: global.author })
					})
					break
case 'waifu' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(`_Command processing_ ᵃⁿʸᵃ ᵇʸ ᵖⁱᵏᵃ.....`)	
    waifuddd = await axios.get('https://waifu.pics/api/sfw/waifu')
 let buons = [
{buttonId: `waifu-face`, buttonText: {displayText: 'Menu'}, type: 1},
{buttonId: `owner`, buttonText: {displayText: 'owner👑'}, type: 1}
]
        let button4Messagess = {
        image: {url:waifuddd.data.url},
        caption: `_${botname1}_ 𝘨𝘰𝘵 𝘺𝘰𝘶𝘳 𝘸𝘢𝘪𝘧𝘶 _${pushname}_ 𝘣𝘢𝘣𝘺 🥵.`,
        buttons: buons,
        headerType: 4
         }     
                                  
    await AnyaPika.sendMessage(m.chat, button4Messagess, { quoted:m }).catch(err => {
        return('error..')
        })
break

case 'neko' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)	
    waifuddd = await axios.get('https://waifu.pics/api/sfw/neko')
 var wbuttsssr = [
    {buttonId: `-neko2`, buttonText: {displayText: `Neko once more 😋`}, type: 1},
    {buttonId: `-meow`, buttonText: {displayText: 'Kitty waifu 😻'}, type: 1}
    ]
        let buttonMessagessf = {
        image: {url:waifuddd.data.url},
        caption: 'Nyaa...',
        buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await AnyaPika.sendMessage(m.chat, buttonMessagessf, { quoted:m }).catch(err => {
        return('error..')
        })
break


case 'loli' :
    if (isBan) return reply(mess.banned)	 			
    if (isBanChat) return reply(mess.bangc)
    if (!m.isGroup) return replay(mess.grouponly)
reply(mess.waiting)	
    waifuddd = await axios.get('https://waifu.pics/api/sfw/shinobu')
 var wbuttsssr = [
    {buttonId: `-loli`, buttonText: {displayText: `𝘖𝘯𝘦 𝘮𝘰𝘳𝘦 𝘓𝘰𝘭𝘪❤️`}, type: 1},
    {buttonId: `-neko`, buttonText: {displayText: `Neko 🍓`}, type: 1},
    {buttonId: `-foxgirl`, buttonText: {displayText: `Fox waifu 🦊`}, type: 1}
    ]
        let buttonMessagessfgr = {
        image: {url:waifuddd.data.url},
        caption: 'Dont be a lolicon !',
        buttons: wbuttsssr,
        headerType: 2
         }     
                                  
    await AnyaPika.sendMessage(m.chat, buttonMessagessfgr, { quoted:m }).catch(err => {
        return('error..')
        })
break
case 'naruto':
			if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
				reply(mess.wait)
			    var query = ["naruto hd","naruto boruto","naruto sasuke", "naruto aesthetic", "naruto aesthetic"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `naruto`, buttonText: { displayText: "Next➡️" }, type: 1 }]
				AnyaPika.sendMessage(from, { caption: `Here you go!`, image: { url: pickRandom(data.result) }, buttons: but, footer: `${footer}` }, { quoted: m })
 			    break
case 'yaoi':
			if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
				reply(mess.wait)
			    var query = ["yaoi","yaoi aesthetic","yaoi hd","yaoi ganteng"]
                var data = await pinterest(pickRandom(query))
				var but = [{buttonId: `${command}`, buttonText: { displayText: "Next➡️" }, type: 1 }]
				AnyaPika.sendMessage(from, { caption: "Here you go!", image: { url: pickRandom(data.result) }, buttons: but, footer: `${footer}` }, { quoted: m })
 			    break
case 'coffee': case 'kopi': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            let buttons = [
                    {buttonId: `coffe`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: 'https://coffee.alexflipnote.dev/random' },
                    caption: `Here you go!`,
                    footer: `${footer}`,
                    buttons: buttons,
                    headerType: 4
                }
                AnyaPika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'zippyshare': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!text) return reply(mess.linkm)
if (!isUrl(args[0]) && !args[0].includes('zippyshare.com')) return reply(`The link is not a zippyshare link`)
anu = await fetchJson(`https://violetics.pw/api/downloader/zippyshare?apikey=df7d-425a-3bc8&url=${text}`)
m.reply(`*${util.format(anu)}*`)
linkyke = await getBuffer(anu.result.dlink)
AnyaPika.sendMessage(m.chat, {document: linkyke, mimetype: 'application/zip', fileName: `${anu.result.filename}`}, {quoted:m}).catch ((err) => reply(mess.error))     
}
break
case 'savefrom': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
  if (!text) return m.reply(`Failed to download media and send audio ${prefix + command} url link`) 
  if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`The link you provided is invalid`)
  let noh = require('@bochilteam/scraper')                
  noh.savefrom(`${text}`).then(async (data) => {
  let sections = []   
  for (let i of data.url) {
  const list = {title: `${i.type}`,
  rows: [
	    {
	     title: `Quality ${i.subname}`, 
	     rowId: `${prefix}get ${text}`,
      description: `${data.hosting}`	     
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  AnyaPika.sendMessage(
      m.chat, 
      {
       text: `${data.meta.title} *Here is the list of videos, click the button below to choose*`,
       footer: `${footer}`, 
       title: "*SAVE FROM*",
       buttonText: "CLICK HERE",
       sections
      }, { quoted : m })                 
                }).catch((err) => {
                    reply(mess.error)
                })
            }
            break
case 'jail': case 'pixelate': case 'blur': case 'imagesketch': case 'triggeredwebp': case 'shit': case 'burn': case 'invert': case 'wanted': case 'rip': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await AnyaPika.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/${command}?url=${anu}`)
                AnyaPika.sendMessage(m.chat, { image: buf, caption: `Made by ${botname}` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
case 'gayeffect': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await AnyaPika.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/gay?url=${anu}`)
                AnyaPika.sendMessage(m.chat, { image: buf, caption: `Made by ${botname}` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
case 'deleteeffect': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await AnyaPika.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/delete?url=${anu}`)
                AnyaPika.sendMessage(m.chat, { image: buf, caption: `Made by ${botname}` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
case 'framed': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await AnyaPika.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/fotojatoh?url=${anu}`)
                AnyaPika.sendMessage(m.chat, { image: buf, caption: `Made by ${botname}` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
case 'beautifuleffect': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
	            if (!/image/.test(mime)) return reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader2')
                let media = await AnyaPika.downloadAndSaveMediaMessage(quoted)                
                let anu = await TelegraPh(media)
                let buf = await getBuffer(`https://cililitan.herokuapp.com/api/beautiful?url=${anu}`)
                AnyaPika.sendMessage(m.chat, { image: buf, caption: `Made by ${botname}` }, { quoted: m}).catch ((err) => reply(mess.error))
                }
                break
            case 'readmore': {
            if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} kemse ho?`)
                anu = await fetchJson(`https://cililitan.herokuapp.com/api/readmore?teks=${text}`)
               reply(`${anu.result}`)
            }
            break
case 'toviewonce': case 'toonce': { 
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
        if (!quoted) return reply(`Reply image`)
        if (/image/.test(mime)) {
anu = await AnyaPika.downloadAndSaveMediaMessage(quoted)
AnyaPika.sendMessage(m.chat, {image: {url: anu},viewOnce : true},{quoted: m })
        } else if (/video/.test(mime)) {
        anu = await AnyaPika.downloadAndSaveMediaMessage(quoted)
        AnyaPika.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: m })
        }
        }
        break
        case 'tinyurl': {
        	 if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
            reply(mess.wait)
            try {
              anu = await axios.get(`https://tinyurl.com/api-create.php?url=${q}`)
              reply(`${anu.data} here you go!`)
              } catch (e) {
              emror = String(e)
              reply(`${e}`)
            }
        }
        break
case 'fliptext': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (args.length < 1) return replay(`Example:\n${prefix}fliptext ${ownername}`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
replay(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
break
case 'toletter': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!Number(args[0])) return replay(`Example:\n${prefix}toletter 956`)
try {
quere = args.join(" ")
convertes = await toHur(quere)
replay(`\`\`\`「 ALPHABET 」\`\`\`\n*•> Number :*\n${quere}\n*•> Alphabet :*\n${convertes}`)
} catch {
replay(`Error!`)
}
}
break
case 'translate': case 'trans': {
if (isBan) return reply(mess.ban)
if (!args.join(" ")) return replay("The text?")
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=en&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
replay(`🌐Translate : ${Detek}\n📘Results : ${Infoo}`)
}
break
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
Pikachu_buffer = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await AnyaPika.sendMessage(m.chat, { audio: Pikachu_buffer, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break

case'glitch3':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dbox':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
.catch((err) => console.log(err));
break


case 'waterdrop':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
     `${q}`,])
    .then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
    .catch((err) => console.log(err));
     break


case 'lion2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
  if(!q) return reply(`Use ${prefix + command} text`)
  reply(mess.wait)
  maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
      `${q}`,])
     .then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
     .catch((err) => console.log(err));
     break


case 'papercut':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
      if(!q) return reply(`Use ${prefix + command} text`)
      reply(mess.wait)
      maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
         .then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
         .catch((err) => console.log(err));
         break


case 'transformer':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
      if(!q) return reply(`Use ${prefix + command} text`)
      reply(mess.wait)
      maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
.catch((err) => console.log(err));
break
   

case 'harrypot':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
       if(!q) return reply(`Use ${prefix + command} text|text`)
       reply(mess.wait)
       teks1 = q.split("|")[0]
       teks2 = q.split("|")[1]
       maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
 .catch((err) => console.log(err));
 break


case 'neondevil':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
      if(!q) return reply(`Use ${prefix + command} text`)
      reply(mess.wait)
      maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
         .then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
         .catch((err) => console.log(err));
         break


case '3dstone':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
  .then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break


case '3davengers':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
  .then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break


case 'thunder':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${q}`,])
  .then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   

case 'window':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   case 'blackpinkneon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html", [
    `${q}`,])
  .then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'graffiti':
   case 'grafiti':
      if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'pornhub2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'blackpink2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${q}`,])
  .then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'glitch':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    `${q}`,])
  .then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'glitch2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'glitch3':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case '3dspace':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'lion':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text|text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case '3dneon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${q}`,])
  .then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'neon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
    `${q}`,])
  .then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'greenneon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${q}`,])
  .then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   
  
case 'bokeh':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   

case 'holographic':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'bear':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'wolf':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break




case 'joker':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${q}`,])
  .then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break


case 'dropwater2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
    `${q}`,])
  .then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   case 'summertime':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html", [
    `${q}`,])
  .then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'neonlight2':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    `${q}`,])
  .then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'thewall':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/break-wall-text-effect-871.html", [
    `${q}`,])
  .then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
case 'natural':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${q}`,])
  .then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break 

case 'carbon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'pencil':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Use ${prefix + command} text`)
reply(mess.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => AnyaPika.sendMessage(m.chat, { image: { url: data }, caption: `Made by `${botname3}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
 
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow2': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case '.': case '3dstone2': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'halloween': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': case 'demon': {
             if (!q) return reply(`Example : ${prefix + command} ${global.ownername}`) 
                if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
             reply(mess.wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'           
             let anu = await maker.textpro(link, q)
                AnyaPika.sendMessage(m.chat, { image: { url: anu }, caption: `Made by `${botname3}` }, { quoted: m })
             }
             break

case 'textmaker': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (args.length < 1) return reply(`Example :\n${prefix + command} <name>`)
if (args[0] === 'glitch') {
if (args.length < 2) return reply(`Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`)
let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
AnyaPika.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else if (args[0] === 'glow') {
if (args.length < 2) return reply(`Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`)
let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
AnyaPika.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else {
reply(`*Text Maker List :*\n•> glitch\n•> glow`)
}
}
break
//logo maker
case 'hoorror':{
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/horror-blood-text-effect-online-883.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
  case 'whitebear':{
  	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'thunder2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-thunder-text-effect-online-881.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'blackpink':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-blackpink-logo-style-online-1001.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'neon':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/neon-light-text-effect-online-882.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'matrix2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/matrix-style-text-effect-online-884.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'sky':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break

case 'magma':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-a-magma-hot-text-effect-online-1030.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'sand':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/sand-writing-text-effect-online-990.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'pencil':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'graffiti':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'metallic':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-a-metallic-text-effect-free-online-1041.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'steel':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/steel-text-effect-online-921.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'harrypotter':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-harry-potter-text-effect-online-1025.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'underwater':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/3d-underwater-text-effect-generator-online-1013.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'luxury':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/3d-luxury-gold-text-effect-online-1003.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'glue2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'fabric':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/fabric-text-effect-online-964.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'neonlight':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/neon-light-glitch-text-generator-online-1063.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'lava':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/lava-text-effect-online-914.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'toxic':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/toxic-text-effect-online-901.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'ancient':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'christmas2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/sparkles-merry-christmas-text-effect-1054.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'sci_fi':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'rainbow':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
     let link = `https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html`
     let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'classic':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/video-game-classic-8-bit-text-effect-1037.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'watercolor2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'halloween2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'halloweenfire':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/halloween-fire-text-effect-940.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'writing':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/sand-writing-text-effect-online-990.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'foggy':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/write-text-on-foggy-window-online-free-1015.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'marvel':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'skeleton2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'sketch':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-a-sketch-text-effect-online-1044.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'wonderful':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'cool':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'collwall':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'multicolor2':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'batman':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/make-a-batman-logo-online-free-1066.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'juice':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let link = `https://textpro.me/fruit-juice-text-effect-861.html`
let anui = await textpro(link, q)
     reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    AnyaPika.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'pornhub':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Example: ${prefix + command} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
console.log(anu)
AnyaPika.sendMessage(from,{image:{url:anu}, caption:"Here you go!"},{quoted:m})
}
break
case 'retro':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Example: ${prefix + command} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [`${logo4}`,`${logo9}`])
console.log(anu)
AnyaPika.sendMessage(from,{image:{url:anu}, caption:"Here you go!"},{quoted:m})
}
break
case 'horror':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Example: ${prefix + command} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-a-cinematic-horror-text-effect-1045.html", [`${logo4}`,`${logo9}`])
console.log(anu)
AnyaPika.sendMessage(from,{image:{url:anu}, caption:"Here you go!"},{quoted:m})
}
break
case '8bit':{
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply(`Example: ${prefix + command} ajg | ea`)
reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [`${logo4}`,`${logo9}`])
console.log(anu)
AnyaPika.sendMessage(from,{image:{url:anu}, caption:"Here you go!"},{quoted:m})
}
break
case 'emoji': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return reply('Where is the emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await AnyaPika.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `Made by `${botname3}`}, {quoted:m})
await AnyaPika.sendMessage(from, {text:"reply #s to this image to make sticker"}, {quoted:mese})
})
}
break

case 'igemoji': 
case 'instagramemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Enter emoji, maximum 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "11")
break
case 'iphoneemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "0")
break
case 'googleemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "1")
break
case 'samsungemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "2")
break
case 'microsoftemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "3")
break
case 'whatsappemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "4")
break
case 'twitteremoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "5")
break
case 'facebookemoji': 
case 'fbemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "6")
break
case 'skypeemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "7")
break
case 'joyemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "8")
break
case 'mojiemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "9")
case 'pediaemoji': 
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply("Enter emoji, max 1 emoji, eg?" + ` ${prefix + command} 😀`)
reply(mess.wait)
emote(q, "10")
break

case 'emojimix': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) reply(`*Example :* ${prefix + command} 🦄+🤣`)
let [emoji1, emoji2] = q.split`+`
let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of kuntuh.results) {
let encmedia = await AnyaPika.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
	case 'toimage': case 'toimg': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
reply(mess.wait)
let media = await AnyaPika.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
AnyaPika.sendMessage(m.chat, { image: buffer }, { quoted: m})
fs.unlinkSync(ran)
})
}
break
case 'tomp4': case 'tovideo': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
reply(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await AnyaPika.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await AnyaPika.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Converted From Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'toaud': case 'toaudio': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
if (!m.quoted) return reply(`Send/Reply Video/Audio You Want To Use As Audio With Caption ${prefix + command}`)
reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
AnyaPika.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
break
case 'tomp3': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (/document/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
if (!m.quoted) return reply(`Send/Reply Video/Audio You Want To Convert Into MP3 With Caption ${prefix + command}`)
reply(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./lib/converter')
let audio = await toAudio(media, 'mp4')
AnyaPika.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Converted By ${AnyaPika.user.name} (${m.id}).mp3`}, { quoted : m })
}
break
case 'tovn': case 'toptt': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!/video/.test(mime) && !/audio/.test(mime)) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
if (!m.quoted) return reply(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
reply(mess.wait)
let media = await quoted.download()
let { toPTT } = require('./lib/converter')
let audio = await toPTT(media, 'mp4')
AnyaPika.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
break
case 'togif': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!m.quoted) return reply('Reply Image')
if (!/webp/.test(mime)) return reply(`Reply sticker with caption *${prefix + command}*`)
reply(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await AnyaPika.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await AnyaPika.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Converted From Webp To Gif' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break
	case 'tourl': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
reply(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await AnyaPika.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
            case 'imagenobgxxx': case 'removebgxxx': case 'remove-bgxxx': {
	    if (!quoted) return replay(`Send/Reply Image With Caption ${prefix + command}`)
	    if (!/image/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
	    if (/webp/.test(mime)) return replay(`Send/Reply Image With Caption ${prefix + command}`)
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await AnyaPika.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    reply(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    AnyaPika.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	case 'yts': case 'ytsearch': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(`Example : ${prefix + command} stay jb`)
let yts = require("yt-search")
let search = await yts(args.join(" "))
let teks = '*| YOUTUBE SEARCH |*\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks = `${globalthemeemoji} No : ${no++}\n${globalthemeemoji} Type : ${i.type}\n${globalthemeemoji} Video ID : ${i.videoId}\n${globalthemeemoji} Title : ${i.title}\n${globalthemeemoji} Views : ${i.views}\n${globalthemeemoji} Duration : ${i.timestamp}\n${globalthemeemoji} Uploaded : ${i.ago}\n${globalthemeemoji} Author : ${i.author.name}\n${globalthemeemoji} Url : ${i.url}\n\n─────────────────\n\n`
}
AnyaPika.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
break
case 'google': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(`Example: ${prefix + command} <query>\nUses : ${prefix + command} apa arti cinta`)
let google = require('google-it')
google({'query': args.join(" ")}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `${globalthemeemoji} *Title* : ${g.title}\n`
teks += `${globalthemeemoji} *Description* : ${g.snippet}\n`
teks += `${globalthemeemoji} *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
reply(teks)
})
}
break
case 'gimage': case 'googleimage': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply("What picture are you looking for??")
let gis = require('g-i-s')
gis(args.join(" "), async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `gimage ${args.join(" ")}`, buttonText: {displayText: 'Next Image 👀'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `*| GOOGLE IMAGE |*

${globalthemeemoji} Query : ${text}
${globalthemeemoji} Media Url : ${images}`,
footer: `${footer}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${global.ownername}`,
body:`${global.watermark}`,
thumbnail: log0,
mediaType:2,
mediaUrl: `${link1}`,
sourceUrl: `${linkgit}`
}}
}
AnyaPika.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
	case 'igstoryxx': case 'instagramstoryxx': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(`Example :\n${prefix + command} 3.69_pika`)
try {
hx.igstory(args[0]).then(async(resed) => {
ini_anu = []
anu_list = []
textbv = `*| INSTAGRAM STORY |*\n\n${globalthemeemoji} Username : ${resed.user.username ? resed.user.name : "undefined"}\n${globalthemeemoji} Followers : ${resed.user.followers}`
urut = 1
for (let i = 0; i < resed.medias.length; i++) {
ini_anu.push({
 "type": resed.medias[i].fileType,
 "url": resed.medias[i].url
})
}
ilod = 1
for (let i of ini_anu) {
anu_list.push({buttonId: `ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
}
textbv += `\n\n_Select the media below to download_`
let buttons = anu_list
let buttonMessage = {
image:log0,
jpegThumbnail:thum,
caption: textbv,
footer: `${footer}`,
buttons: buttons,
headerType: 4
}
AnyaPika.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (err) {
reply(String(err))
}
}
break
case 'igs2': case 'igstory2': case 'instagramstory2': {
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Where is the username?\nExample: ${prefix}igstory 3.69_pika`)
                let urlnya = text
	            hx.igstory(urlnya)
	            .then(async(result) => {
		        var halo = 0		
	            AnyaPika.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTAGRAM STORY 」----*\n\n*${themeemoji} Username :* ${result.user.username}\n*${themeemoji} Fullname :* ${result.user.fullName}\n*${themeemoji} Followers :* ${result.user.followers}\n*${themeemoji} Following :* ${result.user.following}\n*${themeemoji} ID :* ${result.user.id}\n*${themeemoji} Filetype :* ${result.medias[0].fileType}\n*${themeemoji} Type :* ${result.medias[0].type}\n*${themeemoji} Media :* ${result.medias.length}\n*${themeemoji} Bio :* ${result.user.biography}\n\n*${botname}*` }, { quoted: m })	                                  	                      	            
		        for(let i of result.medias) {
			    if(i.url.includes('mp4')){
				let link = await getBuffer(i.url)
                AnyaPika.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m }) 
                } else {
                    let link = await getBuffer(i.url)
                  AnyaPika.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Story ${i.type}*` }, { quoted: m })                  
                }
            }
            }).catch((err) => reply(`Sorry username ${text} was not found or maybe he/she has no story uploaded in her id`))
            }	
			break
case 'ig2': case 'igdl2': case 'instagram2': {
               if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Where is the link bro`)
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(`The link you provided is not a instagram link`)             
                let urlnya = text
	            hx.igdl(urlnya)
	            .then(async(result) => {	  
	            var halo = 0		
	            AnyaPika.sendMessage(m.chat, { image: { url: result.user.profilePicUrl }, jpegThumbnail: await getBuffer(result.user.profilePicUrl), caption: `*----「 INSTAGRAM DOWNLOADER 」----*\n\n*${themeemoji} Username :* ${result.user.username}\n*${themeemoji} Fullname :* ${result.user.fullName}\n*${themeemoji} Followers :* ${result.user.followers}\n*${themeemoji} Following :* ${result.user.following}\n*${themeemoji} ID :* ${result.user.id}\n*${themeemoji} Filetype :* ${result.medias[0].fileType}\n*${themeemoji} Type :* ${result.medias[0].type}\n*${themeemoji} Jumlah Media :* ${result.medias.length}\n*${themeemoji} Url :* ${text}\n\n*${botname}*` }, { quoted: m })	                                  	                      	            
		        for(let i of result.medias) {		
		        if(i.url.includes('mp4')){		           			    				
				let link = await getBuffer(i.url)
                AnyaPika.sendMessage(m.chat, { video: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Instagram ${i.type}*` }, { quoted: m })
                } else {
                let link = await getBuffer(i.url)
                AnyaPika.sendMessage(m.chat, { image: link, jpegThumbnail: await getBuffer(i.preview), caption: `*Instagram ${i.type}*` }, { quoted: m })                      
               }
              }
            }).catch((err) => reply(mess.error))
            }		
			break
case 'igdl': case 'instagram': case 'instagramreels': case 'igreels': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(`Example :\n${prefix + command} https://www.instagram.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`)
try {
hx.igdl(args[0]).then(async(resed) => {
ini_anu = []
anu_list = []
textbv = `*| INSTAGRAM DOWNLOADER |*\n\n${globalthemeemoji} Username : ${resed.user.username ? resed.user.name : "undefined"}\n${globalthemeemoji} Followers : ${resed.user.followers}`
urut = 1
for (let i = 0; i < resed.medias.length; i++) {
ini_anu.push({
 "type": resed.medias[i].fileType,
 "url": resed.medias[i].url
})
}
ilod = 1
for (let i of ini_anu) {
anu_list.push({buttonId: `ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
}
textbv += `\n\n_Select the media below to download_`
let buttons = anu_list
let buttonMessage = {
image:log0,
jpegThumbnail:thum,
caption: textbv,
footer: `${footer}`,
buttons: buttons,
headerType: 4
}
AnyaPika.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (err) {
reply(String(err))
}
}
break
case 'ig': {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (args[0] === "mp4") {
AnyaPika.sendMessage(from, {video:{url:args[1]}, caption:'Done!', mimetype:'video/mp4'}, {quoted:m})
} else if (args[0] === "jpg") {
AnyaPika.sendMessage(from, {image:{url:args[1]}, caption:'Done!'}, {quoted:m})
} else {
reply("Error! ")
}
}
break
case 'mp4' : {
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(`Where's the link ?`)
try {
AnyaPika.sendMessage(from, {video:{url:args[0]}, caption:"Succes", contextInfo:{externalAdReply:{
title:`${botname3}`,
body:`${global.ownername}`,
thumbnail: log0,
mediaType:2,
mediaUrl: `${link1}`,
sourceUrl: `${linkgit}`
}}}, {quoted:m})
} catch {
reply("Link error!")
}
}
break
case 'jpeg': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(`Where's the link?`)
try {
AnyaPika.sendMessage(from, {image:{url:args[0]}, caption:"Success", contextInfo:{externalAdReply:{
title:`${botname3}`,
body:`${global.ownername}`,
thumbnail: log0,
mediaType:2,
mediaUrl: `${link1}`,
sourceUrl: `${linkgit}`
}}}, {quoted:m})
} catch {
reply("Link error")
}
}
break
case 'igtv': {	            
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Where is the link boss?`)
                const { instagramdl, instagramdlv2, instagramdlv3 } = require('@bochilteam/scraper')
                if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply('*The link you provided is not valid*')
                instagramdlv3(`${text}`).then(async (data) => {            
                var buf = await getBuffer(data[0].thumbnail)        
                AnyaPika.sendMessage(m.chat, { video: { url: data[0].url }, jpegThumbnail:buf, caption: `${botname}`}, { quoted: m })
                }).catch((err) => {
                    reply(mess.error)
                })
            }
            break
            case 'twitter': case 'td': case 'twitterdl': {     
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)	             
             if (!text) return reply(`Where is the link?`)
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(`The link you provided is not valid`)
                Xkey.Twitter(`${text}`).then(async (data) => {                    
                    let txt = `*TWITTER DOWNLOADER*\n\n`
                    txt += `*${themeemoji}TITLE :* ${data.title}\n`
                    txt += `*${themeemoji}QUALITY :* ${data.medias[1].quality}\n`
                    txt += `*${themeemoji}TYPE :* ${data.medias[1].extension}\n`
                    txt += `*${themeemoji}SIZE :* ${data.medias[1].formattedSize}\n`
                    txt += `*${themeemoji}DURATION :* ${data.medias.length}\n`
                    txt += `*${themeemoji}URL :* ${data.url}\n\n`
                    txt += `*${botname}*`
                buf = await getBuffer(data.thumbnail)    
                AnyaPika.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })
                for (let i of data.medias) {
                AnyaPika.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*${text}*`}, { quoted: m })
                }
                }).catch((err) => {
                    reply(mess.error)
                })
            }
            break
            case 'twittermp3': case 'twitteraudio': { 
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)	             
             if (!text) return reply(`Where is the link?`)
                if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(`*The link you provided is not valid*`)
                Xkey.Twitter(`${text}`).then(async (data) => {
                AnyaPika.sendMessage(m.chat, { audio: { url: data.medias[1].url }, mimetype: 'audio/mp4'}, { quoted: m })
                }).catch((err) => {
                    reply(mess.reply)
                })
            }
            break
case 'twitterxx': case 'twdlxx': case 'twmp4xx': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(`Example :\n${prefix + command} https://twitter.com/cinema21/status/1517754155644821504?t=rUnbyqwh4vAE1QXMXlsVeQ&s=19`)
try {
let lotwit = await aiovideodl(args[0])
teks = `*| TWITTER DOWNLOADER |*

Caption : ${lotwit.title ? lotwit.title : "undefined"}
Type : ${lotwit.medias[1].extension}
Size : ${lotwit.medias[1].formattedSize}
Link : ${lotwit.medias[1].url}

_Choose the video quality below by clicking the button_`
let buttons = [
{buttonId: `twddl ${lotwit.medias[0].url}`, buttonText: {displayText: `Quality ${lotwit.medias[0].quality}`}, type: 1},
{buttonId: `twddl ${lotwit.medias[2].url}`, buttonText: {displayText: `Quality ${lotwit.medias[2].quality}`}, type: 1}
]
let buttonMessage = {
video: {url:lotwit.medias[1].url},
caption: teks,
footer: `${footer}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${botname3}`,
body:lotwit.title ? lotwit.title : "Twitter Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
AnyaPika.sendMessage(from, buttonMessage, {quoted:m})
} catch {
reply("Error link!")
}
}
break
case 'twddlxx': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu 🐥'}, type: 1}
]
let buttonMessage = {
video: {url:args[0]},
caption: "Done!",
footer: `${footer}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${botname3}`,
body: "Twitter Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
AnyaPika.sendMessage(from, buttonMessage, {quoted:m})
}
break
case 'fbdl': case 'fb': case 'facebook': case 'fbmp4': {     	    
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
             if (!text) return reply(`Where is the link bro?\nExample: ${prefix}facebook https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
                if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`The link you provided is not valid`)
            let bocil = require('@bochilteam/scraper')  
                bocil.facebookdlv2(`${text}`).then(async (data) => {                   
                    let txt = `*FB DOWNLOADER*\n\n`
                    txt += `*${themeemoji}TITLE :* ${data.title}\n`
                    txt += `*${themeemoji}QUALITY :* ${data.result[0].quality}\n`
                    txt += `*${themeemoji}DESCRIPTION :* ${data.description}\n`
                    txt += `*${themeemoji}ID :* ${watermark}\n`
                    txt += `*${themeemoji}URL :* ${text}\n\n`
                buf = await getBuffer(data.thumbnail)    
                AnyaPika.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m })         
                for (let i of data.result) {     
                AnyaPika.sendMessage(m.chat, { video: { url: i.url }, jpegThumbnail:buf, caption: `*${themeemoji} Quality :* ${i.quality}`}, { quoted: m })
                }          
                }).catch((err) => {
                    reply(mess.error)
                })
            }
            break
            case 'fbmp3': case 'facebookmp3': case 'facebookaudio': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                  if (!text) return reply(`Where is the link?\nExample: ${prefix + command} https://www.facebook.com/groups/599913174599515/permalink/705467384044093/`)
                  if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(`The link you provided is not valid`)
  let noh = require('@bochilteam/scraper')                
  noh.savefrom(`${text}`).then(async (anu) => {  
  AnyaPika.sendMessage(m.chat, { audio: { url: anu.url[0].url }, mimetype: 'audio/mp4' }, { quoted: m })      
                }).catch((err) => {
                    reply(mess.error)
                })
            }
            break
case 'facebookxx': case 'fbdlxxx': case 'fbmp4xxx': case 'fbxxx': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(`Example :\n${prefix + command} https://fb.watch/cAX2dep-BZ/`)
try {
let resd = await aiovideodl(args[0])
teks = `*| FACEBOOK DOWNLOADER |*

Type : video/${resd.medias[0].extension}
Quality : ${resd.medias[0].quality}
Size : ${resd.medias[0].formattedSize}

_For HD quality you can click the button below_`
let buttons = [
{buttonId: `fbddl ${resd.medias[1].url}`, buttonText: {displayText: 'QualityHD'}, type: 1}
]
let buttonMessage = {
video: {url:resd.medias[0].url},
caption: teks,
footer: `${footer}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${botname3}`,
body:"Facebook Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
AnyaPika.sendMessage(from, buttonMessage, {quoted:m})
} catch {
reply("Link invalid!")
}
}
break
case 'fbddlxx': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu 🐥'}, type: 1}
]
let buttonMessage = {
video: {url:args[0]},
caption: "Done!",
footer: `${footer}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${botname3}`,
body: " Facebook Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
AnyaPika.sendMessage(from, buttonMessage, {quoted:m})
}
break
            case 'pinterest2': {
            	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                reply(mess.wait)
		let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                AnyaPika.sendMessage(m.chat, { image: { url: result }, caption: '${themeemoji} Media Url : '+result }, { quoted: m })
            }
            break
case 'webtonsearch': case 'webtoon':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!text) return reply('What Are you Looking For??')
                await reply(mess.wait)
                Xkey.Webtoons(q).then(async data => {
                    let txt = `*------「 WEBTOONS-SEARCH 」------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*👍🏻 Like :* ${i.like}\n`
                        txt += `*🤴🏻 Creator :* ${i.creator}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n ----------------------------------------------------------\n`
                    }
                    await reply(txt)
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
            case 'wattpad': {
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            if (!text) return reply(`Example : ${prefix + command} love`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/wattpad?query=$text}&apikey=hdiiofficial`)
            let { judul, dibaca, divote, bab, waktu, url, thumb, description } = res.result[0]
            let capt = `Wattpad From query\n\n`
            capt += ` Title: ${judul}\n`
            capt += ` Read: ${dibaca}\n`
            capt += ` Vote: ${divote}\n`
            capt += ` Chapter: ${bab}\n`
            capt += ` Url: ${url}\n`
            capt += ` Description: ${description}`
            AnyaPika.sendImage(m.chat, thumb, capt, m)
            }
            break
case 'apk': case 'apkmod': case 'apkdl': {      
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
  if (!text) return reply(`Use${prefix + command} whatsapp`) 
  let noh = require('./lib/myfunc2')                
  noh.rexdl(`${text}`).then(async (data) => {
  let sections = []   
  for (let i of data) {
  const list = {title: `${i.judul}`,
  rows: [
	    {
	     title: `${i.judul}`, 
	     rowId: `${prefix}donlod ${i.link}`,
	     description: `Category: ${i.kategori}\nPublish: ${i.upload_date}\nInfo: ${i.deskripsi}`
	    }, 
	    ]
     }
     sections.push(list)   
     }
  const sendm =  AnyaPika.sendMessage(
      m.chat, 
      {
       text: `${ucapannya2} ${pushname} *Search Results From ${text} Click the button below to choose*`,
       footer:`${footer}`,
       title: "*APK DOWNLOADER,*",
       buttonText: "CLICK HERE",
       sections
      }, { quoted : m })                 
                }).catch((err) => {
                    reply(`*${text} Not found*`)
                })
            }
            break
case 'donlod': {                
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Use${prefix + command} whatsapp`)
                if (!isUrl(args[0]) && !args[0].includes('rexdl.com')) reply('*The link you provided is invalid*')
           let rex = require('./lib/ApkDown.js')
           rex.ApkDown(`${text}`).then(async (anu) => {        
           if (anu[0].size.split('MB')[0] >= 150) return reply('*File Over Limit* '+util.format(anu))
           for (let i of anu) {    
           linkye = `*APK DOWNLOAD*\n\n*Title:* ${i.title}\n*Updated:* ${i.up}\n*Version:* ${i.vers}\n*Size:* ${i.size}\n*Url:* \n*Desc:* ${i.desc}`         
                AnyaPika.sendMessage(m.chat, { image: await getBuffer(i.thumb), jpegThumbnail: await getBuffer(i.thumb), caption: `${linkye}` }, { quoted: m })
                AnyaPika.sendMessage(m.chat, {document: await getBuffer(i.link), mimetype: `application/vnd.android.package-archive`, fileName: `${i.title}`}, {quoted:m})  
                }  
                }).catch((err) => {
                    reply(mess.error)
                }) 
                }                          
                break
case 'tagme': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
AnyaPika.sendMessage(m.chat, {text:`@${m.sender.split("@")[0]}`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
}
break
           case 'git': case 'gitclone':
           if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	reply(mess.wait)
            let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
            if (!args[0]) reply(`Use ${prefix}gitclone repo link\nExample: https://github.com//Anya-pika-v2`)
    if (!regex1.test(args[0])) return reply(mess.linkm)
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    AnyaPika.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => reply(mess.error))
			break

case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
 	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
              if (!q) return reply(`Example : ${prefix + command} ${global.ownername}`) 
          
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             let anu = await maker.textpro(link, q)
                AnyaPika.sendMessage(m.chat, { image: { url: anu }, caption: `Made by ${botname3},For my Darling ` }, { quoted: m })
             }
             break
            case 'drakorxxx':
               if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!text) return reply('What Are You Looking For??')
                await reply(mess.wait)
                Xkey.Drakor(`${text}`).then(async data => {
                    let txt = `*-----「 DRAKOR-SEARCH 」-----*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📆 Years :* ${i.years}\n`
                        txt += `*🎥 Genre :* ${i.genre}\n`
                        txt += `*📚 Url :* ${i.url}\n-----------------------------------------------------\n`
                    }
                    await sendFileFromUrl(from,data[0].thumbnail,txt,m)
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
            case 'drakor': {
            	            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            if (!text) return reply(`Example : ${prefix + command} love`)
            let res = await fetchJson(`https://zenzapis.xyz/webzone/drakor?query=${text}&apikey=hdiiofficial`)
            let capt = `Drakor Search From : ${text}\n\n`
            for (let i of res.result) {
            capt += `${themeemoji} Title: ${i.judul}\n`
            capt += `${themeemoji} Years: ${i.years}\n`
            capt += `${themeemoji} Genre: ${i.genre}\n`
            capt += `${themeemoji} Url: ${i.url}\n`
            capt += `${themeemoji} Thumbnail Url: ${i.thumbnail}\n\n──────────────────────\n`
            }
            AnyaPika.sendImage(m.chat, res.result[0].thumbnail, capt, m)
            }
            break
            case 'animexxx':{
            	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`What Anime Are You Looking For??`)
                await reply(mess.wait)
                Xkey.Anime(q).then(async data => {
                    let txt = `*-------「 ANIME-SEARCH 」-------*\n\n`
                    for (let i of data) {
                        txt += `*📫 Title :* ${i.judul}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "Watch🎥",
						"url": `${websitex}`
						}
					}
				]
				await AnyaPika.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.error)
                })
                }
            break
            case 'characterxxx': case 'karakterxxx':
               if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`What Anime Character Are You Looking For??`)
                await reply(mess.wait)
                Xkey.Character(q).then(async data => {
                    let txt = `*---「 CHARACTER-SEARCH 」---*\n\n`
                    for (let i of data) {
                        txt += `*📫 Character :* ${i.character}\n`
                        txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "github📍",
						"url": `${websitex}`
						}
					}
				]
				await AnyaPika.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.error)
                })
            break
            case 'manga2':
               if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`What Manga Are You Looking For??`)
                await reply(mess.wait)
                Xkey.Manga(`${text}`).then(async data => {
                    let txt = `*------「 MANGA-SEARCH 」------*\n\n`
                    for (let i of data) {
                         txt += `*📫 Title :* ${i.judul}\n`
                         txt += `*📚 Url :* ${i.link}\n-----------------------------------------------------\n`
                    }
                    let gam = await getBuffer(data[0].thumbnail.replace('https://www.anime-planet.com',''))
                    var but = [
				{
					"urlButton": {
						"displayText": "github📍",
						"url": `${websitex}`
						}
					}
				]
				await AnyaPika.send5ButLoc(from, txt , `© ${ownername}`,gam, but , { userJid: m.chat, quoted: m })
                })
                .catch((err) => {
                    reply(mess.error)
                })
                case 'anime':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	    if(!q) return reply(`Which anime do you want to search?\nExample ${prefix}manga naruto`)
reply(mess.wait)						
const { Anime } =require("@shineiichijo/marika")
    const client = new Anime();
     let anime = await client.searchAnime(q)
    let result = anime.data[0];
    console.log(result)
   let details = `🎀 *Title: ${result.title}*\n`;
    details += `🎋 *Format: ${result.type}*\n`;
    details += `📈 *Status: ${result.status.toUpperCase().replace(/\_/g, " ")}*\n`;
    details += `🍥 *Total episodes: ${result.episodes}*\n`;
    details += `🎈 *Duration: ${result.duration}*\n`;
    details += `🧧 *Genres:*\n`;
    for (let i = 0; i < result.genres.length; i++) {
      details += `\t\t\t\t\t\t\t\t*${result.genres[i].name}*\n`;
    }
    details += `✨ *Based on: ${result.source.toUpperCase()}*\n`;
    details += `📍 *Studios:*\n`;
    for (let i = 0; i < result.studios.length; i++) {
      details += `\t\t\t\t\t\t\t\t*${result.studios[i].name}*\n`;
    }
    details += `🎴 *Producers:*\n`;
    for (let i = 0; i < result.producers.length; i++) {
      details += `\t\t\t\t\t\t\t\t\t\t*${result.producers[i].name}*\n`;
    }
    details += `💫 *Premiered on: ${result.aired.from}*\n`;
    details += `?? *Ended on: ${result.aired.to}*\n`;
    details += `🎐 *Popularity: ${result.popularity}*\n`;
    details += `🎏 *Favorites: ${result.favorites}*\n`;
    details += `🎇 *Rating: ${result.rating}*\n`;
    details += `🏅 *Rank: ${result.rank}*\n\n`;
    if (result.trailer.url !== null)
      details += `♦ *Trailer: ${result.trailer.url}*\n\n`;
    details += `🌐 *URL: ${result.url}*\n\n`;
    if (result.background !== null)
      details += `🎆 *Background:* ${result.background}*\n\n`;
    details += `❄ *Description:* ${result.synopsis.replace(
      /\[Written by MAL Rewrite]/g,
      ""
    )}`
AnyaPika.sendMessage(m.chat,{image:{url:result.images.jpg.large_image_url},caption:details},{quoted:m})   
break
case 'manga':
   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
reply(mess.wait)						
const { Manga } =require("@shineiichijo/marika")
const manga = new Manga();
if(!q) return reply(`Which manga do you want to search?\nExample ${prefix}manga naruto`)
let srh = await manga.searchManga(q)
    let mang = `🎀 *Title: ${srh.data[0].title}*\n`;
    mang += `📈 *Status: ${srh.data[0].status}*\n`;
    mang += `🌸 *Total Volumes: ${srh.data[0].volumes}*\n`;
    mang += `🎗 *Total Chapters: ${srh.data[0].chapters}*\n`;
    mang += `🧧 *Genres:*\n`;
    for (let i = 0; i < srh.data[0].genres.length; i++) {
      mang += `\t\t\t\t\t\t\t\t*${srh.data[0].genres[i].name}*\n`;
    }
    mang += `✨ *Published on: ${srh.data[0].published.from}*\n`;
    mang += `🌟 *Score: ${srh.data[0].scored}*\n`;
    mang += `🎐 *Popularity: ${srh.data[0].popularity}*\n`;
    mang += `🎏 *Favorites: ${srh.data[0].favorites}*\n`;
    mang += `✍ *Authors:*\n`;
    for (let i = 0; i < srh.data[0].authors.length; i++) {
      mang += `\t\t\t\t\t\t\t\t\t*${srh.data[0].authors[i].name}* *(${srh.data[0].authors[0].type})*\n`;
    }
    mang += `\n🌐 *URL: ${srh.data[0].url}*\n\n`;
    if (srh.data[0].background !== null)
      mang += `🎆 *Background:* ${srh.data[0].background}`;
    mang += `❄️ *Description:* ${srh.data[0].synopsis.replace(
      /\[Written by MAL Rewrite]/g,
      ""
    )}`;
AnyaPika.sendMessage(m.chat,{image:{url:srh.data[0].images.jpg.large_image_url},caption:mang},{quoted:m})   
break
            break
case 'lyrics': {
		            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	    if (!text) return reply(`Use example ${prefix}lyrics Despacito`)
	reply(mess.wait)
	const { lyrics, lyricsv2 } = require('@bochilteam/scraper')
    const result = await lyricsv2(text).catch(async _ => await lyrics(text))
    reply(`
${themeemoji} Title : *${result.title}*
${themeemoji} Author : ${result.author}
${themeemoji} Lyrics : ${result.lyrics}
${themeemoji} Url : ${result.link}
`.trim())
}
break
case 'earthquake':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
const tres = await Gempa()
var { Waktu, Lintang, Bujur, Magnitude, Kedalaman, Wilayah, Map } = tres.result
console.log(Map)
const captt = `Time : ${Waktu}\nLatitude : ${Lintang}\nLongitude : ${Bujur}\nRegion : ${Wilayah}`
AnyaPika.sendMessage(from, { image : { url : Map }, caption : captt})
break
case 'covidindo':
case 'covid':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
const c = await covid()
var { kasus, kematian, sembuh } = c[0]
AnyaPika.sendMessage(from, {text : `Case : ${kasus}\n\nDead : ${kematian}\n\nHealed : ${sembuh}`}, m)
break
case 'tvschedule':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply('Send orders *#tvschedule [channel]*')
reply(await jadwaltv(q))
break
case 'playstore': case 'apk':
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if(!q) return reply('what are you looking for?')
let play = await hx.playstore(q)
let storee = '❉─────────────────────❉\n'
for (let i of play){
storee += `\n*「 *PLAY STORE* 」*\n
- *Name* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Dev Link* : ${i.link_dev}\n❉─────────────────────❉`
}
reply(storee)
break
case 'film':
if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	reply(mess.wait)
if (!q) return reply(`What film you wanna search?\nExample: ${prefix}film Spiderman`)
Pikakey.Film(q)
    .then(data => {console.log(data)
    let krl = `*❒「  Film ${q} 」*\n*🌿 Author* : ${data[0].author}\n\n`
			    for (let i of data) {
                krl += (`\n────────────────────\n\n *📍Title :* ${i.judul}\n *📟 Quality :* ${i.quality}\n *🖥️ Type : ${i.type}*\n *⌛ Uploaded :* ${i.upload}\n *🌍 Source :* ${i.link}`)
                }
               AnyaPika.sendMessage(from, { image: { url: data[0].thumb}, caption: krl }, { quoted: fdocs })
});
break
case 'img':
case 'image': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                reply(mess.wait)
		let { pinterest } = require('./lib/scraperW')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                AnyaPika.sendMessage(m.chat, { image: { url: result }, caption: ` ${themeemoji} Media Url : `+result }, { quoted: m })
            }
            break
case 'mcserver': case 'mcquery': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(`Example : \n${prefix + command} ip|port\nUses : \n${prefix + command} play.Pika.com|19132`)
const Query = require("minecraft-query");

const qury = args.join(" ")
const iphost = qury.split("|")[0];
const portnya = qury.split("|")[1];

if (!iphost) return replay(`Where's your ip?`)
if (!portnya) return replay(`Where's the port??`)

const q = new Query({host: iphost, port: portnya, timeout: 7500});

q.fullStat()
.then(success => {
replay(jsonformat(success));
return q.basicStat()
})
.then(success => {
replay(jsonformat(success));
q.close();
})
}
break
case 'mcpedl': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(`Example : ${prefix + command} shader`)
Pikatod.mcpedl(args.join(" ")).then(async(res) => {
teks = `*| MCPEDL SEARCH |*`
for (let i of res) {
teks += `\n\nName : ${i.name}\nCategory : ${i.category}\nDate : ${i.date}\nDesc : ${i.desc}\nLink : ${i.link}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu🥀'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: `${footer}`,
buttons: buttons,
headerType: 4
}
AnyaPika.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'happymod': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(`Example : ${prefix + command} mobile legend`)
Pikatod.happymod(args.join(" ")).then(async(res) => {
teks = '```「 HappyMod Search 」```'
for (let i of res) {
teks += `\n\n${i.name}\n`
teks += `${i.link}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu🥀'}, type: 1}
]
let buttonMessage = {
image: {url:res[0].icon},
jpegThumbnail: thum,
caption: teks,
footer: `${footer}`,
buttons: buttons,
headerType: 4
}
AnyaPika.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'searchgc': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (args.length < 1) return replay(`Example :\n${prefix}searchgc Classy Editor`)
nae = args.join(" ")
hx.linkwa(nae).then(res => {
teks = '```「 Search Group 」```'
for (let i of res) {
teks += `\n\n•> Group Whatsapp :\n`
teks += `${i.link}\n`
teks += `${i.nama}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu🥀'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: `${footer}`,
buttons: buttons,
headerType: 4
}
AnyaPika.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'servermc': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
Pikatod.servermc().then(async(res) => {
let teks = '*| MINECRAFT SERVER |*\n\nhttps://minecraftpocket-servers.com/country/indonesia/\n\n'
let no = 1
for (let i of res) {
teks += `${themeemoji} Server To ${no++}\nip : ${i.ip}\nport : ${i.port}\nversi : ${i.versi}\nplayer : ${i.player}\n\n`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu🥀'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: `${footer}`,
buttons: buttons,
headerType: 4
}
AnyaPika.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'fajar-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
replay(teks) 
})
break
case "quotes":
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
var res = await Quotes()
teks = "══════════════════"
teks += `\nAuthor: ${res.author}\n`
teks += `\nQuotes:\n`
teks += `${res.quotes}\n`
teks += "══════════════════"
replay(teks)
break
case "darkjoke":
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
var res = await Darkjokes()
teks = "\nDarkjokes*"
AnyaPika.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })
break
case 'cnn-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
CNNNews().then(res => {
no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
replay(teks) 
})
break
case 'tvsearch':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply('Where is the title?') 
LayarKaca21(q).then(async(res) => {
no = 0
teks = "══════════════════"
for (let i of res) {
  no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += `══════════════════`
replay(teks) 
})
break
case 'cnbc-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
CNBCNews().then(async(res) => {
no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
AnyaPika.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break
case 'tribun-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
TribunNews().then(async(res) => {
no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
AnyaPika.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
break
case 'indozone-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
IndozoneNews().then(async(res) => {
no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
AnyaPika.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
break
case 'kompas-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
KompasNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
AnyaPika.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break
case 'detik-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
DetikNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
AnyaPika.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break
case 'daily-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
DailyNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
AnyaPika.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break

case 'inews-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
iNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
replay(teks) 
})
break
case 'okezone-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
OkezoneNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
AnyaPika.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break

case 'sindo-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
SindoNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
replay(teks) 
})
break
case 'tempo-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
TempoNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
AnyaPika.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break
case 'antara-news':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
AntaraNews().then(async(res) => {

no = 0
teks = "══════════════════"
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `News: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Type: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += "══════════════════"
AnyaPika.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
break

case "kontan-news":
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
  KontanNews().then(async (res) => {
    
    teks = "══════════════════"
    no = 0
    for (let i of res) {
      no += 1
      teks += `\n• ${no.toString()} •\n`
      teks += `News: ${i.berita}\n`
      teks += `Type: ${i.berita_jenis}\n`
      teks += `Upload: ${i.berita_diupload}\n`
      teks += `Link: ${i.berita_url}\n`
    }
    teks += "══════════════════"
    AnyaPika.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

  })
  break
case "merdeka-news":
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
  MerdekaNews().then(async (res) => {
    
    teks = "══════════════════"
    no = 0
    for (let i of res) {
      no += 1
      teks += `\n• ${no.toString()} •\n`
      teks += `News: ${i.berita}\n`
      teks += `Upload: ${i.berita_diupload}\n`
      teks += `Link: ${i.berita_url}\n`
    }
    teks += "══════════════════"
    AnyaPika.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

  })
  break
case 'shortstoryx':{
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply(`*List*\n${prefix}shortstory Anak\n${prefix}shortstory Bahasa Daerah\n${prefix}shortstory Bahasa Inggris\n${prefix}shortstory Bahasa Jawa\n${prefix}shortstory Bahasa Sunda\n${prefix}shortstory Budaya\n${prefix}shortstory Cinta\n${prefix}shortstory Cinta Islami\n${prefix}shortstory Cinta Pertama\n${prefix}shortstory Cinta Romantis\n${prefix}shortstory Cinta Sedih\n${prefix}shortstory Cinta Segitiga\n${prefix}shortstory Cinta Sejati\n${prefix}shortstory Galau\n${prefix}shortstory Gokil\n${prefix}shortstory Inspiratif\n${prefix}shortstory Jepang\n${prefix}shortstory Kehidupan\n${prefix}shortstory Keluarga\n${prefix}shortstory Kisah Nyata\n${prefix}shortstory Korea\n${prefix}shortstory Kristen\n${prefix}shortstory Liburan\n${prefix}shortstory Lingkungan\n${prefix}shortstory Lucu\n${prefix}shortstory Malaysia\n${prefix}shortstory Mengharukan\n${prefix}shortstory Misteri\n${prefix}shortstory Motivasi\n${prefix}shortstory Nasihat\n${prefix}shortstory Nasionalisme\n${prefix}shortstory Olahraga\n${prefix}shortstory Patah Hati\n${prefix}shortstory Penantian\n${prefix}shortstory Pendidikan\n${prefix}shortstory Pengalaman Pribadi\n${prefix}shortstory Pengorbanan\n${prefix}shortstory Penyesalan\n${prefix}shortstory Perjuangan\n${prefix}shortstory Perpisahan\n${prefix}shortstory Persahabatan\n${prefix}shortstory Petualangan\n${prefix}shortstory Ramadhan\n${prefix}shortstory Remaja\n${prefix}shortstory Renungan\n${prefix}shortstory Rindu\n${prefix}shortstory Rohani\n${prefix}shortstory Romantis\n${prefix}shortstory Sastra\n${prefix}shortstory Sedih\n${prefix}shortstory Sejarah\n${prefix}shortstory Slice Of Life\n${prefix}shortstory Terjemahan\n${prefix}shortstory Thriller`)
let cerpe = await cerpen(q)
reply(`${globalthemeemoji} _*Title :*_ ${cerpe.title}\n${globalthemeemoji} _*Author :*_ ${cerpe.author}\n${globalthemeemoji} _*Category :*_ ${cerpe.kategori}\n${globalthemeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${globalthemeemoji} _*Story :*_\n${cerpe.cerita}`)
}
break
case 'loveshortstoryx':{
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let cerpe = await cerpen(`Cinta segitiga`)
        reply(`${themeemoji} _*Title :*_ ${cerpe.title}\n${themeemoji} _*Author :*_ ${cerpe.author}\n${themeemoji} _*Category :*_ ${cerpe.kategori}\n${themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${themeemoji} _*Story :*_\n${cerpe.cerita}`)
}
break
case 'islamicshortstoryx':{
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let cerpe = await cerpen(`Cinta segitiga`)
        reply(`${themeemoji} _*Title :*_ ${cerpe.title}\n${themeemoji} _*Author :*_ ${cerpe.author}\n${themeemoji} _*Category :*_ ${cerpe.kategori}\n${themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${themeemoji} _*Story :*_\n${cerpe.cerita}`)
}
break
case 'disturbingshorystoryx':{
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let cerpe = await cerpen(`galau`)
       reply(`${themeemoji} _*Title :*_ ${cerpe.title}\n${themeemoji} _*Author :*_ ${cerpe.author}\n${themeemoji} _*Category :*_ ${cerpe.kategori}\n${themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${themeemoji} _*Story :*_\n${cerpe.cerita}`)
}
break
case 'friendshipshortstoryx':{
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let cerpe = await cerpen(`persahabatan`)
        reply(`${themeemoji} _*Title :*_ ${cerpe.title}\n${themeemoji} _*Author :*_ ${cerpe.author}\n${themeemoji} _*Category :*_ ${cerpe.kategori}\n${themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${themeemoji} _*Story :*_\n${cerpe.cerita}`)
}
break
case 'sacrificeshortstoryx':{
	   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let cerpe = await cerpen(`Pengorbanan`)
reply(`${themeemoji} _*Title :*_ ${cerpe.title}\n${themeemoji} _*Author :*_ ${cerpe.author}\n${themeemoji} _*Category :*_ ${cerpe.kategori}\n${themeemoji} _*Pass Moderation :*_ ${cerpe.lolos}\n${themeemoji} _*Story :*_\n${cerpe.cerita}`)
}
break
	    case 'couplepp':  case 'ppcouple': {
		   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                reply(mess.wait)
                let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
                let random = anu[Math.floor(Math.random() * anu.length)]
                AnyaPika.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male🙎🏻‍♂️` }, { quoted: m })
                AnyaPika.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female🙎🏻‍♀️` }, { quoted: m })
            }
	    break
            
case 'wallpaper': case 'animewallpaper': case 'animewall': {
	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                if (!args.join(" ")) return reply("What picture are you looking for??")
		let { wallpaper } = require('./lib/scraperW')
                anu = await wallpaper(args)
                result = anu[Math.floor(Math.random() * anu.length)]
		let buttons = [
                    {buttonId: `.wallpaper ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image[0] },
                    caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`,
                    footer: `${footer}`,
                    buttons: buttons,
                    headerType: 4
                }
                AnyaPika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
            case 'wikimedia': {
            	 	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Enter Query Title`)
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttons = [
                    {buttonId: `wikimedia ${text}`, buttonText: {displayText: '➡️Next Image➡️'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: result.image },
                    caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`,
                    footer: `${footer}`,
                    buttons: buttons,
                    headerType: 4
                }
                AnyaPika.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break           
	    case 'tiktok':{
  	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
  if (!q) return reply('Where is the link?')
  reply(mess.wait)
  if (!q.includes('tiktok')) return reply(`That's not a tiktok link!`)
   const musim_rambutan = await AnyaPikaTiktok(`${q}`).catch(e => {
 reply(mess.error) 
} )
   console.log(musim_rambutan)
   const Pikatiktokop = musim_rambutan.result.watermark
texttk = `Wanna download no watermark or audio?
_Please choose the button below_`
let buttons = [
{buttonId: `ttnowm ${q}`, buttonText: {displayText: 'No Watermark ❌'}, type: 1},
{buttonId: `ttaud ${q}`, buttonText: {displayText: 'Audio 🎶'}, type: 1}
]
let buttonMessage = {
video: {url:Pikatiktokop},
caption: texttk,
footer:`${footer}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: `${ownername}`,
body: `${pushname}`,
thumbnail: log0,
mediaType:1,
mediaUrl: q,
sourceUrl: q
}}
}
AnyaPika.sendMessage(from, buttonMessage, {quoted:m})
}
break
  case 'tiktoknowm': case 'ttnowm':{
  	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
  if (!q) return reply('Where is the link?')
  reply(mess.wait)
  if (!q.includes('tiktok')) return reply(`That's not a tiktok link!`)
   const musim_rambutan = await AnyaPikaTiktok(`${q}`).catch(e => {
 reply(mess.error) 
} )
   console.log(musim_rambutan)
   const Pikachutiktoknowm = musim_rambutan.result.nowatermark
    AnyaPika.sendMessage(from, { video: { url: Pikachutiktoknowm }, caption: "Here you go!" }, { quoted: m })
   }
  break
  case 'tiktokaudio':
case 'tiktokmusic':
case 'ttaud':{
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
  if (!q) return reply('Where is the audio?')
  if (!q.includes('tiktok')) return reply(`That's not a tiktok link!`)
   const musim_rambutan = await AnyaPikaTiktok(`${q}`).catch(e => {
 reply(mess.error) 
} )
   console.log(musim_rambutan)
   const Pikachutiktokaudio = musim_rambutan.result.nowatermark
    AnyaPika.sendMessage(from, { audio: { url: Pikachutiktokaudio }, mimetype: 'audio/mp4' }, { quoted: m })
   }
 break
case 'music': case 'play': case 'song': case 'ytplay': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
let yts = require("yt-search")
let search = await yts(text)
let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let ytvc = await hx.youtube(anu.url)
let buttons = [
{buttonId: `ytvd ${ytvc.link}`, buttonText: {displayText: '► Video'}, type: 1},
{buttonId: `ytad ${ytvc.mp3}`, buttonText: {displayText: '♫ Audio'}, type: 1}
]
let buttonMessage = {
image: { url: anu.thumbnail },
caption: `*| YOUTUBE PLAY |*

${globalthemeemoji}Title : ${anu.title}
${globalthemeemoji}Ext : Search
${globalthemeemoji}ID : ${anu.videoId}
${globalthemeemoji}Duration : ${anu.timestamp}
${globalthemeemoji}Viewers : ${anu.views}
${globalthemeemoji}Uploaded : ${anu.ago}
${globalthemeemoji}Author : ${anu.author.name}
${globalthemeemoji}Channel : ${anu.author.url}
${globalthemeemoji}Description : ${anu.description}
${globalthemeemoji}Url : ${anu.url}`,
footer: `${footer}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: anu.title,
body: `${botname3}`,
thumbnail: log0,
mediaType:2,
mediaUrl: anu.url,
sourceUrl: anu.url
}}
}
AnyaPika.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
case 'getmusic': case 'getvideo': case 'yt': case 'youtube': case 'ytvideo': case 'ytmp3': case 'ytmp4': case 'ytmusic': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args[0]) return reply(mess.linkm)
try {
hx.youtube(args[0]).then(async(res) => {
textyt = `*| YOUTUBE DOWNLOADER |*

${globalthemeemoji} Title : ${res.title}
${globalthemeemoji} Size : ${res.size}
${globalthemeemoji} Quality : ${res.quality}

_Select video or audio and wait a while_`
let buttons = [
{buttonId: `ytvd ${res.link}`, buttonText: {displayText: '► Video'}, type: 1},
{buttonId: `ytad ${res.mp3}`, buttonText: {displayText: '♫ Audio'}, type: 1}
]
let buttonMessage = {
image: {url:res.thumb},
caption: textyt,
footer: `${footer}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: res.title,
body: `${global.ownername}`,
thumbnail: {url:res.thumb},
mediaType:2,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
AnyaPika.sendMessage(from, buttonMessage, {quoted:m})
}).catch(_ => _)
} catch {
reply("Link error!")
}
}
break
case 'ytvd': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
AnyaPika.sendMessage(from, {video:{url:args[0]}, mimetype:"video/mp4", caption:"Success", contextInfo:{externalAdReply:{
title:`${botname3}`,
body:`${botname3}`,
thumbnail: log0,
mediaType:2,
mediaUrl: `${link1}`,
sourceUrl: `${linkgit}`
}}}, {quoted:m})
}
break
case 'ytad': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
AnyaPika.sendMessage(from, {audio:{url:args[0]}, mimetype:"audio/mp4", ptt:true, contextInfo:{externalAdReply:{
title:`${botname3}`,
body:`${botname3}`,
thumbnail: log0,
mediaType:2,
mediaUrl: `${link1}`,
sourceUrl: `${linkgit}`
}}}, {quoted:m})
}
break
            case 'ytdl': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(mess.linkm)
                if (!isUrl(args[0]) && !args[0].includes('youtube.com')) return reply(`The link you provided is invalid`)
                anu = await fetchJson(`https://api.akuari.my.id/downloader/youtube?link=${text}`)        
                if (anu.filesize_video >= 999999) return reply('*File Over Limit* '+util.format(anu))
                tummb = await getBuffer(anu.thumb)
                audio = await getBuffer(anu.audio)        
                AnyaPika.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `${anu.title}`}, { quoted : m }).catch((err) => reply(mess.error))
                AnyaPika.sendMessage(m.chat, { video: { url: anu.video }, jpegThumbnail:tummb, caption: `${util.format(anu)}`}, { quoted: m }).catch((err) => reply(mess.error))
            }
            break
case 'ytshorts': case 'shorts': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
  if (!text) return reply(`*Use ${prefix + command} put yt shorts link*`)
  if (!isUrl(args[0]) && !args[0].includes('youtube')) return reply(`The link you provided is not valid`)
  Xkey.Youtube(`${text}`).then(async (data) => {
  if (data.medias[0].formattedSize.split('MB')[0] >= 999) return reply('*File Over Limit* '+util.format(data)) 
  cap = `
*YOUTUBE SHORTS*

*${themeemoji}TITLE:* ${data.title}\n*${themeemoji}QUALITY:* ${data.medias[0].quality}\n*${themeemoji}SIZE:* ${data.medias[0].formattedSize}\n*${themeemoji}DURATION* ${data.duration}\n*${themeemoji}ID:* ${data.medias[0].cached}\n*${themeemoji}LINK:* ${data.url}\n\n*${botname}*`
  buf = await getBuffer(data.thumbnail)
  AnyaPika.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${cap}` }, { quoted: m })
  AnyaPika.sendMessage(m.chat, { video: { url: data.medias[0].url }, jpegThumbnail:buf, caption: `*${themeemoji}TITLE:* ${data.title}\n*${themeemoji}QUALITY:* ${data.medias[0].quality}\n*${themeemoji}SIZE:* ${data.medias[0].formattedSize}` }, { quoted: m })  
                }).catch((err) => {
                    reply(mess.reply)
                })
            }
            break
	  case 'pinterest': case 'pin': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return reply("What picture are you looking for?")
try {
hx.pinterest(args.join(" ")).then(async(res) => {
imgnyee = res[Math.floor(Math.random() * res.length)]
let buttons = [
{buttonId: `pinterest ${args.join(" ")}`, buttonText: {displayText: 'Next Image 👀'}, type: 1}
]
let buttonMessage = {
image: { url: imgnyee },
caption:  `${global.dogeemoji} Title : ` + args.join(" ") + `\n${global.dogeemoji} Media Url : `+imgnyee,
footer: `${footer}`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`${botname3}`,
body:`${global.ownername}`,
thumbnail: log0,
mediaType:2,
mediaUrl: `${link1}`,
sourceUrl: `${linkgit}`
}}
}
AnyaPika.sendMessage(m.chat, buttonMessage, { quoted: m })
}).catch(_ => _)
} catch {
reply("Error")
}
}
break
case 'mediafire': {
	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
if (!text) return reply(mess.linkm)
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return reply(`The link you provided is invalid`)
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 999) return reply('*File Over Limit* '+util.format(baby1))
const result4 = `*MEDIAFIRE DOWNLOADER*
				
*Name* : ${baby1[0].nama}
*Size* : ${baby1[0].size}
*Mime* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
reply(`${result4}`)
AnyaPika.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => reply(mess.error))
}
break
            case 'umma': case 'ummadl': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	        if (!text) return reply(`Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`)
                let { umma } = require('./lib/scraper')
		let anu = await umma(isUrl(text)[0])
		if (anu.type == 'video') {
		    let buttons = [
                        {buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: '🎵Audio🎵'}, type: 1},
                        {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: '📽️Video📽️'}, type: 1}
                    ]
		    let buttonMessage = {
		        image: { url: anu.author.profilePic },
			caption: `
${themeemoji} Title : ${anu.title}
${themeemoji} Author : ${anu.author.name}
${themeemoji} Like : ${anu.like}
${themeemoji} Caption : ${anu.caption}
${themeemoji} Url : ${anu.media[0]}
To Download Media, Please Click One Of The Buttons Below Or Enter The ytmp3/ytmp4 Command With The Url Above
`,
			footer: `${footer}`,
			buttons,
			headerType: 4
		    }
		    AnyaPika.sendMessage(m.chat, buttonMessage, { quoted: m })
		} else if (anu.type == 'image') {
		    anu.media.map(async (url) => {
		        AnyaPika.sendMessage(m.chat, { image: { url }, caption: `${themeemoji} Title : ${anu.title}\n${themeemoji} Author : ${anu.author.name}\n${themeemoji} Like : ${anu.like}\n${themeemoji} Caption : ${anu.caption}` }, { quoted: m })
		    })
		}
	    }
	    break
        case 'ringtone': {
        	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
		if (!text) return reply(`Where is the ringtone name noob?, Example : ${prefix + command} charlie puth`)
        let { ringtone } = require('./lib/scraper')
		let anu = await ringtone(text)
		let result = anu[Math.floor(Math.random() * anu.length)]
		AnyaPika.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }
	    break
case 'tempo': {
if (isBan) return reply(mess.ban)
if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
var req = args.join(' ')
media = await AnyaPika.downloadAndSaveMediaMessage(quoted, "tempo")
if (isQuotedAudio) {
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
AnyaPika.sendMessage(from, {audio:hah, mimetype:'audio/mp4', ptt:true}, {quoted:m})
fs.unlinkSync(ran)
})
} else if (isQuotedVideo) {
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
AnyaPika.sendMessage(from, {video:hah, mimetype:'video/mp4'}, {quoted:m})
fs.unlinkSync(ran)
})
} else {
reply("Send video/audio")
}
}
break
case 'volume': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return reply(`Example: ${prefix + command} 10`)
media = await AnyaPika.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
AnyaPika.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
AnyaPika.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
} else {
reply("Send video/audio")
}
}
break
		   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
		if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                reply(mess.wait)
                let media = await AnyaPika.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                AnyaPika.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply To The Audio You Want To Change With Caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
            case 'setcmd': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!m.quoted) return reply(`Reply Message!`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
                if (!text) return reply(`For What Command?`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`You Have No Permission To Change This Sticker Command`)
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                reply(`Done!`)
            }
            break
            case 'delcmd': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) return reply(`No Hashes`)
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) return reply(`You Have No Permission To Delete This Sticker Command`)
                delete global.db.data.sticker[hash]
                reply(`Done!`)
            }
            break
            case 'listcmd': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                let teks = `
*Hash List*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                AnyaPika.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                if (!m.quoted) return reply(`Reply Message!`)
                if (!m.quoted.fileSha256) return reply(`SHA256 Hash Missing`)
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) return reply(`Hash Not Found In Database`)
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                reply('Done!')
            }
            break
            case 'addmsg': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!m.quoted) return reply(`Reply Message You Want To Save In Database`)
                if (!text) return reply(`Example : ${prefix + command} File Name`)
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) return reply(`'${text}' Has Been Registered In The Message List`)
                msgs[text.toLowerCase()] = quoted.fakeObj
reply(`Successfully Added Message In Message List As '${text}'
    
Access With ${prefix}getmsg ${text}

View List Of Messages With ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!text) return reply(`Example : ${prefix + command} file name\n\nView Message List With ${prefix}listmsg`)
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
                AnyaPika.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 DATABASE LIST 」\n\n'
		for (let i of seplit) {
		    teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return reply(`'${text}' Not Listed In The Message List`)
		delete msgs[text.toLowerCase()]
		reply(`Delete Successfully '${text}' From The Message list`)
            }
	    break
	    case 'anonymous': {
		if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
                    { buttonId: 'Start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                ]
                AnyaPika.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await AnyaPika.getName(m.sender)} Welcome To Anonymous Chat\n\nClick The Button Below To Find A Partner\`\`\``, AnyaPika.user.name, m)
            }
			break
            case 'keluar': case 'leave': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let room = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!room) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                    ]
                    await AnyaPika.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner \`\`\``)
                   reply(false)
                }
                reply('Ok')
                let other = room.other(m.sender)
                if (other) await AnyaPika.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[room.id]
                if (command === 'leave') break
            }
            case 'mulai': case 'start': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                    ]
                    await AnyaPika.sendButtonText(m.chat, buttons, `\`\`\`You Are Still In An Anonymous Session, Press The Button Below To Terminate Your Anonymous Session\`\`\``, AnyaPika.user.name, m)
                    reply(false)
                }
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: '⏩Skip⏩' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                    ]
                    await AnyaPika.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, AnyaPika.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await AnyaPika.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, AnyaPika.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                    ]
                    await AnyaPika.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, AnyaPika.user.name, m)
                }
                break
            }
            case 'next': case 'lanjut': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (m.isGroup) return reply('Features Cannot Be Used For Groups!')
                this.anonymous = this.anonymous ? this.anonymous : {}
                let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
                if (!romeo) {
                    let buttons = [
                        { buttonId: 'start', buttonText: { displayText: '🚶Start🚶' }, type: 1 }
                    ]
                    await AnyaPika.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In An Anonymous Session, Press The Button To Find A Partner\`\`\``)
                    reply(false)
                }
                let other = romeo.other(m.sender)
                if (other) await AnyaPika.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
                delete this.anonymous[romeo.id]
                let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
                if (room) {
                    let buttons = [
                        { buttonId: 'next', buttonText: { displayText: '⏩Skip⏩' }, type: 1 },
                        { buttonId: 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                    ]
                    await AnyaPika.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, AnyaPika.user.name, m)
                    room.b = m.sender
                    room.state = 'CHATTING'
                    await AnyaPika.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, Now You Can Send Message\`\`\``, AnyaPika.user.name, m)
                } else {
                    let id = + new Date
                    this.anonymous[id] = {
                        id,
                        a: m.sender,
                        b: '',
                        state: 'WAITING',
                        check: function (who = '') {
                            return [this.a, this.b].includes(who)
                        },
                        other: function (who = '') {
                            return who === this.a ? this.b : who === this.b ? this.a : ''
                        },
                    }
                    let buttons = [
                        { buttonId: 'keluar', buttonText: { displayText: '🛑Stop🛑' }, type: 1 }
                    ]
                    await AnyaPika.sendButtonText(m.chat, buttons, `\`\`\`Please Wait, Looking For A Partner\`\`\``, AnyaPika.user.name, m)
                }
                break
            }
            case 'public': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                AnyaPika.public = true
                reply('Successful Change To Public Usage')
            }
            break
            case 'self': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                if (!isCreator) return replay(`${mess.owner}`)
                AnyaPika.public = false
                reply('Successful Change To Self Usage')
            }
            break
case 'setstatuts':
case 'setbio':
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!q) return reply('Send orders *#setbio text*')
AnyaPika.setStatus(`${q}`)
reply(mess.success)
break
case 'description': 
	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
        reply(`ㅤ ㅤ࿙⳼ 𝗗𝗘𝗦𝗖𝗥𝗜𝗣𝗧𝗜𝗢𝗡 ⳹࿚\n\n${groupMetadata.desc}\n\n𝘏𝘦𝘳𝘦'𝘴 𝘰𝘶𝘳 𝘨𝘳𝘰𝘶𝘱 𝘥𝘦𝘴𝘤𝘳𝘪𝘱𝘵𝘪𝘰𝘯 _${pushname}_ 𝘣𝘢𝘣𝘺❤️\n\n${footer}`)
        break
case 'antitag': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!isCreator) return
if (args.length < 1) return replay(`Type on to enable\nType off to disable`)
if (args[0] === 'on') {
if (antitags === true) return
global.antitags = true
replay(`Successfully activated antitag!`)
} else if (args[0] === 'off') {
if (antitags === false) return
global.antitags = false
replay(`Successfully deactivated antitag!`)
} else {
replay('Choose on or off')
}
}
break
            case 'ping': case 'p': case 'botstatus': case 'statusbot': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                reply(respon)
            }
            break
            case 'speedtest': {
            	   if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) reply(stdout)
        if (stderr.trim()) reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
                AnyaPika.sendContact(m.chat, global.vcardowner, m)
            }
            break
  case 'setmenu': {
            	if (isBan) return reply(mess.ban)
	if (isBanChat) return reply(mess.banChat)
            if (!isCreator) return reply(mess.owner)
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
                setbot.templateImage = true
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateDocument = false
                reply(mess.success)
                } else if (args[0] === 'templateVideo'){
                setbot.templateImage = false
                setbot.templateVideo = true
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateLocation = false
                reply(mess.success)
                } else if (args[0] === 'templateGif'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = true
                setbot.templateMsg = false
                setbot.templateDocument = false
                reply(mess.success)
                //} else if (args[0] === 'templateMessage'){
                /////setbot.templateImage = false
                /////setbot.templateVideo = false
                /////setbot.templateGif = false
                /////setbot.templateMsg = true
                //////setbot.templateDocument = false
                //////reply(mess.success)
                } else if (args[0] === 'templateDocument'){
                setbot.templateImage = false
                setbot.templateVideo = false
                setbot.templateGif = false
                setbot.templateMsg = false
                setbot.templateDocument = true
                reply(mess.success)
                } else {
                let sections = [
                {
                title: "😛CHANGE BOT MENU😛",
                rows: [
                {title: "Image Menu", rowId: `setmenu templateImage`, description: `Tap to change bot menu to Image Menu`},
                {title: "Gif Menu", rowId: `setmenu templateGif`, description: `Tap to change bot menu to Gif Menu`},
                {title: "Video Menu", rowId: `setmenu templateVideo`, description: `Tap to change bot menu to Video Menu`},
                ///////////////{title: "Text Menu", rowId: `setmenu templateMessage`, description: `Tap to change bot menu to Text Menu`},
                {title: "Document Menu", rowId: `setmenu templateDocument`, description: `Tap to change bot menu to Document Menu`}
                ]
                },
                ]
                AnyaPika.sendListMsg(m.chat, `Please select the menu you want to change!`, ` `, AnyaPika.user.name, `Click Here`, sections, m)
                }
            }
            break
case 'request': {
   if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
if (!args.join(" ")) return replay(`Example : ${prefix + command} hello dev please add a downloader feature`)
teks = `*| REQUEST |*`
teks1 = `\n\nNumber : @${m.sender.split("@")[0]}\nRequest : ${args.join(" ")}`
teks2 = `\n\nSuccessfully sent to owner`
for (let i of owner) {
AnyaPika.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
AnyaPika.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
break
                    case 'bug': case 'report': {
                    	if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
                    	if(!text) return reply(`Enter The Bug\n\nExample: ${command} Menu Error`)
                    	AnyaPika.sendMessage(`${owner}@s.whatsapp.net`, {text: `*Bug Report From:* wa.me/${m.sender.split("@")[0]}
Report Message: ${text}` })
reply(`Successfully Reported To The Owner\n\nPlease Make Sure The Bug Is Valid \n\n If You Play With This, Use This Feature Again And Again For No Reason, You Will Be Blocked For Sure !`)
                    }
break
case 'alive': case 'panel': case 'menu': case 'help': case '?': case 'commands': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
AnyaPika.sendMessage(from, { react: { text: `${menureactemoji}`, key: m.key }})
let text  = `${global.aliveMessage}`
let buttons = [
{buttonId: `Listmenu`, buttonText: {displayText: '🥵 𝘓𝘪𝘴𝘵 𝘮𝘦𝘯𝘶'}, type: 1},
{buttonId: `${symb}allmenu`, buttonText: {displayText:'𝘈𝘭𝘭 𝘮𝘦𝘯𝘶 🎃'},type: 1}
]
let ntus = {
image: fs.readFileSync('./AnyaPikaMedia/theme/Menu/Menuimg.jpg'),
jpegThumbnail: menuimage,
caption: text,
footer: `Choose your menu type here....`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`𝑯𝒆𝒚,\n𝑰'𝒂𝒎 ${botname2}`,
body: `${global.MenuDocCap}`, 
thumbnail: menuimage,
mediaType:1,
mediaUrl: `${link1}`,
sourceUrl: `${linkgit}`
}}
}
AnyaPika.sendMessage(m.chat , ntus , { quoted: m })
}
break
case 'listmenu': {
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `Hi ${pushname}`,
                    description: `Please Choose The Menu\n\n`,
                    buttonText: "Menu",
                    footerText: `${footer}`,
                    listType: "SINGLE_SELECT",
                    sections: [{
								"title": "❥⃟𝐗𝐁𝐎𝐓 𝐌𝐀𝐈𝐍 𝐅𝐄𝐀𝐓𝐔𝐑𝐄𝐒 𝐎𝐅 𝐁𝐎𝐓 🦄",
								"rows": [
									{
										"title": "𝐎𝐓𝐇𝐄𝐑 ☕",
										"description": "ⒹⒾⓈⓅⓁⒶⓎⓈ ⓉⒽⒺ ⓁⒾⓈⓉ ⓄⒻ ⓄⓉⒽⒺⓇ ⒻⒺⒶⓉⓊⓇⒺⓈ",
										"rowId": `${prefix}othermenu`
									}
								]
							},
							{
								"title": "𝐁𝐎𝐓 𝐅𝐄𝐀𝐓𝐔𝐑𝐄𝐒 ❤️",
								"rows": [
									{
										"title": "All Menu 🥀",
										"description": "ⒹⒾⓈⓅⓁⒶⓎⓈ ⓉⒽⒺ ⓁⒾⓈⓉ ⓄⒻ ⒶⓁⓁ ⓉⒽⒺ ⒻⒺⒶⓉⓊⓇⒺⓈ!",
										"rowId": `${prefix}allmenu`
									},
									{
										"title": "𝐎𝐖𝐍𝐄𝐑 𝐌𝐄𝐍𝐔 💠",
										"description": "ⒹⒾⓈⓅⓁⒶⓎⓈ ⓉⒽⒺ ⓁⒾⓈⓉ ⓄⒻ ⓄⓌⓃⒺⓇ ⒻⒺⒶⓉⓊⓇⒺⓈ",
										"rowId": `${prefix}ownermenu`
										},
									{
										"title": "𝐆𝐑𝐎𝐔𝐏 𝐌𝐄𝐍𝐔 ✨",
										"description": "ⒹⒾⓈⓅⓁⒶⓎⓈ ⓉⒽⒺ ⓁⒾⓈⓉ ⓄⒻ ⓂⒶⒾⓃ ⒻⒺⒶⓉⓊⓇⒺⓈ",
										"rowId": `${prefix}groupmenu`
										},
										{
										"title": "𝐌𝐀𝐊𝐄𝐑 𝐌𝐄𝐍𝐔 🌈",
										"description": "ⒹⒾⓈⓅⓁⒶⓎⓈ ⓉⒽⒺ ⓁⒾⓈⓉ ⓄⒻ ⓁⓄⒼⓄ ⓂⒶⓀⒾⓃⒼ ⒻⒺⒶⓉⓊⓇⒺⓈ",
										"rowId": `${prefix}indomenu`
									},
									{
										"title": "𝐒𝐎𝐔𝐍𝐃 𝐌𝐄𝐍𝐔 🎵",
										"description": "ⒹⒾⓈⓅⓁⒶⓎⓈ ⓉⒽⒺ ⓁⒾⓈⓉ ⓄⒻ ⓈⓄⓊⓃⒹ ⒻⒺⒶⓉⓊⓇⒺⓈ",
										"rowId": `${prefix}soundmenu`
									},
									{
										"title": "𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃 𝐌𝐄𝐍𝐔 ↘️",
										"description": "ⒹⒾⓈⓅⓁⒶⓎⓈ ⓉⒽⒺ ⓁⒾⓈⓉ ⓄⒻ ⒹⓄⓌⓃⓁⓄⒶⒹ ⒻⒺⒶⓉⓊⓇⒺⓈ",
										"rowId": `${prefix}downloadmenu`
									},
									{
										"title": "𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐌𝐄𝐍𝐔 🃏",
										"description": "ⒹⒾⓈⓅⓁⒶⓎⓈ ⓉⒽⒺ ⓁⒾⓈⓉ ⓄⒻ ⓈⓉⒾⒸⓀⒺⓇ ⒻⒺⒶⓉⓊⓇⒺⓈ",
										"rowId": `${prefix}indomenu`
									},
									{
										"title": "𝐒𝐄𝐀𝐑𝐂𝐇 𝐌𝐄𝐍𝐔 🔎",
										"description": "ⒹⒾⓈⓅⓁⒶⓎⓈ ⓉⒽⒺ ⓁⒾⓈⓉ ⓄⒻ ⓈⒺⒶⓇⒸⒽⒾⓃⒼ ⒻⒺⒶⓉⓊⓇⒺⓈ",
										"rowId": `${prefix}searchmenu`
									},
									{
										"title": "𝐓𝐎𝐎𝐋 𝐌𝐄𝐍𝐔 ⚙️",
										"description": "ⒹⒾⓈⓅⓁⒶⓎⓈ ⓉⒽⒺ ⓁⒾⓈⓉ ⓄⒻ ⓉⓄⓄⓁ ⒻⒺⒶⓉⓊⓇⒺⓈ",
										"rowId": `${prefix}toolmenu`
									},
									{
										"title": "𝐑𝐀𝐍𝐃𝐎𝐌 𝐈𝐌𝐀𝐆𝐄 𝐌𝐄𝐍𝐔 🌆",
										"description": "ⒹⒾⓈⓅⓁⒶⓎⓈ ⓉⒽⒺ ⓁⒾⓈⓉ ⓄⒻ ⓇⒶⓃⒹⓄⓂ ⒾⓂⒶⒼⒺ ⒻⒺⒶⓉⓊⓇⒺⓈ",
										"rowId": `${prefix}randomimagemenu`
									},
									{
										"title": "𝐈𝐌𝐀𝐆𝐄 𝐄𝐅𝐅𝐄𝐂𝐓 𝐌𝐄𝐍𝐔 🖼️",
										"description": "ⒹⒾⓈⓅⓁⒶⓎⓈ ⓉⒽⒺ ⓁⒾⓈⓉ ⓄⒻ ⒾⓂⒶⒼⒺ ⒺⒻⒻⒺⒸⓉ ⒻⒺⒶⓉⓊⓇⒺⓈ",
										"rowId": `${prefix}imageeffectmenu`
									},
										{
											"title": "𝐀𝐍𝐈𝐌𝐄 𝐌𝐄𝐍𝐔 😘",
										"description": "ⒹⒾⓈⓅⓁⒶⓎⓈ ⓉⒽⒺ ⓁⒾⓈⓉ ⓄⒻ ⓇⒶⓃⒹⓄⓂ ⒶⓃⒾⓂⒺ ⒻⒺⒶⓉⓊⓇⒺⓈ",
										"rowId": `${prefix}animemenu`
										},
										{
											"title": "𝐄𝐌𝐎𝐓𝐄 𝐌𝐄𝐍𝐔 😀",
										"description": "ⒹⒾⓈⓅⓁⒶⓎⓈ ⓉⒽⒺ ⓁⒾⓈⓉ ⓄⒻ ⒺⓂⓄⓉⒺ ⒻⒺⒶⓉⓊⓇⒺⓈ",
										"rowId": `${prefix}emotemenu`
										},
										{
										"title": "𝐀𝐍𝐈𝐌𝐄 𝐒𝐓𝐈𝐂𝐊𝐄𝐑 𝐌𝐄𝐍𝐔 ☺️",
										"description": "ⒹⒾⓈⓅⓁⒶⓎⓈ ⓉⒽⒺ ⓁⒾⓈⓉ ⓄⒻ ⒶⓃⒾⓂⒺ ⓈⓉⒾⒸⓀⒺⓇ ⒻⒺⒶⓉⓊⓇⒺⓈ",
										"rowId": `${prefix}animestickermenu`
									     },
									{
										"title": "𝐍𝐒𝐅𝐖 𝐌𝐄𝐍𝐔 🤓",
										"description": "ⒹⒾⓈⓅⓁⒶⓎⓈ ⓉⒽⒺ ⓁⒾⓈⓉ ⓄⒻ ⓃⓈⒻⒺ ⒻⒺⒶⓉⓊⓇⒺⓈ",
										"rowId": `${prefix}nsfwmenu`
									     },
										{
											"title": "𝐅𝐔𝐍 𝐌𝐄𝐍𝐔 🕺",
										"description": "ⒹⒾⓈⓅⓁⒶⓎⓈ ⓉⒽⒺ ⓁⒾⓈⓉ ⓄⒻ ⒻⓊⓃ ⒻⒺⒶⓉⓊⓇⒺⓈ",
										"rowId": `${prefix}funmenu`
										},
										{
										"title": "𝐆𝐀𝐌𝐄 𝐌𝐄𝐍𝐔 🎮",
										"description": "ⒹⒾⓈⓅⓁⒶⓎⓈ ⓉⒽⒺ ⓁⒾⓈⓉ ⓄⒻ ⒼⒶⓂⒺ ⒻⒺⒶⓉⓊⓇⒺⓈ",
										"rowId": `${prefix}indomenu`
									},
										{
											"title": "𝐂𝐎𝐍𝐕𝐄𝐑𝐓 𝐌𝐄𝐍𝐔 ⚒️",
										"description": "ⒹⒾⓈⓅⓁⒶⓎⓈ ⓉⒽⒺ ⓁⒾⓈⓉ ⓄⒻ ⒸⓄⓃⓋⒺⓇⓉ ⒻⒺⒶⓉⓊⓇⒺⓈ",
										"rowId": `${prefix}convertmenu`
										},
										{
											"title": "𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄 𝐌𝐄𝐍𝐔 ♻️",
										"description": "ⒹⒾⓈⓅⓁⒶⓎⓈ ⓉⒽⒺ ⓁⒾⓈⓉ ⓄⒻ ⒹⒶⓉⒶⒷⒶⓈⒺ ⒻⒺⒶⓉⓊⓇⒺⓈ",
										"rowId": `${prefix}databasemenu`
										},
										{
										"title": "𝐈𝐍𝐃𝐎 𝐌𝐄𝐍𝐔  🦜",
										"description": "ⒹⒾⓈⓅⓁⒶⓎⓈ ⓉⒽⒺ ⓁⒾⓈⓉ ⓄⒻ ⒾⓃⒹⓄ ⒻⒺⒶⓉⓊⓇⒺⓈ",
										"rowId": `${prefix}indomenu`
									},
										{
											"title": "𝐇𝐎𝐑𝐎𝐒𝐂𝐎𝐏𝐄 𝐌𝐄𝐍𝐔 🕊️",
										"description": "ⒹⒾⓈⓅⓁⒶⓎⓈ ⓉⒽⒺ ⓁⒾⓈⓉ ⓄⒻ ⒽⓄⓇⓄⓈⒸⓄⓅⒺ ⒻⒺⒶⓉⓊⓇⒺⓈ",
										"rowId": `${prefix}indohoroscopemenu`
										}
								]
							},
							{
								"title": "𝐂𝐇𝐀𝐓 𝐖𝐈𝐓𝐇 𝐅𝐄𝐋𝐋𝐎𝐖 𝐔𝐒𝐄𝐑𝐒 🌝🌝",
								"rows": [
									{
										"title": "𝐀𝐍𝐎𝐍𝐘𝐌𝐎𝐔𝐒 𝐂𝐇𝐀𝐓 𝐌𝐄𝐍𝐔 🙎🏻‍♂️",
										"description": "ⒹⒾⓈⓅⓁⒶⓎⓈ ⓉⒽⒺ ⓁⒾⓈⓉ ⓄⒻ ⒶⓃⓄⓃⓎⓂⓄⓊⓈ ⒸⒽⒶⓉ ⒻⒺⒶⓉⓊⓇⒺⓈ",
										"rowId": `${prefix}anonymousmenu`
									}
								]
							},
							{
								"title": "Credit ©️",
								"rows": [
									{
										"title": "𝐓𝐇𝐀𝐍𝐊𝐒 𝐓𝐎 ❤️",
										"description": "ⒹⒾⓈⓅⓁⒶⓎⓈ ⓉⒽⒺ ⓁⒾⓈⓉ ⓄⒻ ⒸⓇⒺⒹⒾⓉ ⓄⒻ ⓉⒽⒺ ⒷⓄⓉ !!",
										"rowId": `${prefix}tqtt`
									}
								]
							}
						],
          listType: 1
                }
            }), {})
            AnyaPika.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
case 'allmenu': {
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
AnyaPika.sendMessage(from, { react: { text: `${allmenureactemoji}`, key: m.key }})
var unicorn = await getBuffer(picak+'All Menu')
const allmenu = `╭╼━━᚜ 𝓐𝓷𝔂𝓪 𝓫𝔂 𝓟𝓲𝓴𝓪 ᚛╾ᐧᐧᐧᐧ⳹
❤️ 𝗨𝘀𝗲𝗿 𝗻𝗮𝗺𝗲 : 
┊➥ ${pushname}
┝┅━┅━┅━┅━┅━♡
🔥 𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝘂𝘀𝗲𝗿𝘀 :
┊➥ ${Object.keys(global.db.data.users).length} users
┝┅━┅━┅━┅━┅━♡
🍓 𝗕𝗼𝘁 𝗿𝘂𝗻𝘁𝗶𝗺𝗲 :
┊➥ ${runtime(process.uptime())}
┝┅━┅━┅━┅━┅━♡
🥵 𝗢𝘄𝗻𝗲𝗿 𝗻𝗮𝗺𝗲 :
┊➥ ${global.ownername}
┝┅━┅━┅━┅━┅━♡
🎃 𝗚𝗿𝗼𝘂𝗽 :
┊➥ ${groupMetadata.subject}
╰╼━━━━━━━━━━━━╾ᐧᐧᐧᐧ⳹
 *━━━〈  🧾 Menu 🧾  〉━━━*

❒✗ ${prefix}allmenu
❒✗ ${prefix}ownermenu
❒✗ ${prefix}groupmenu
❒✗ ${prefix}antilinkmenu 
❒✗ ${prefix}textpromenu
❒✗ ${prefix}downloadermenu
❒✗ ${prefix}searchmenu
❒✗ ${prefix}convertmenu
❒✗ ${prefix}audiomenu
❒✗ ${prefix}photoeffectsmenu
❒✗ ${prefix}imagemenu
❒✗ ${prefix}emotemenu
❒✗ ${prefix}weebmenu
❒✗ ${prefix}stickermenu
❒✗ ${prefix}reactionmenu
❒✗ ${prefix}animestickermenu
❒✗ ${prefix}funmenu

 *━━━〈  💻 Core 💻  〉━━━*

❒✗ ${prefix}alive  *(Bot working?)*
❒✗ ${prefix}restart
❒✗ ${prefix}afk
❒✗ ${prefix}chatinfo
❒✗ ${prefix}script
❒✗ ${prefix}speedtest
❒✗ ${prefix}ping
❒✗ ${prefix}owner
❒✗ ${prefix}Menu
❒✗ ${prefix}delete
❒✗ ${prefix}chatinfo
❒✗ ${prefix}listpc
❒✗ ${prefix}listgc
❒✗ ${prefix}request
❒✗ ${prefix}report
❒✗ ${prefix}setcmd
❒✗ ${prefix}listcmd
❒✗ ${prefix}delcmd
❒✗ ${prefix}lockcmd
❒✗ ${prefix}addmsg
❒✗ ${prefix}listmsg
❒✗ ${prefix}getmsg
❒✗ ${prefix}delmsg

*━━━〈  🥵 Owner 🥵  〉━━━*	

❒✗ ${prefix}self
❒✗ ${prefix}public
❒✗ ${prefix}antitag
❒✗ ${prefix}RentBot
❒✗ ${prefix}Rentlist
❒✗ ${prefix}ban
❒✗ ${prefix}banchat
❒✗ ${prefix}deletethis
❒✗ ${prefix}join
❒✗ ${prefix}leavegc
❒✗ ${prefix}setbio
❒✗ ${prefix}bcgroup
❒✗ ${prefix}bcall
❒✗ ${prefix}bcimage
❒✗ ${prefix}bcvideo
❒✗ ${prefix}bcaudio
❒✗ ${prefix}bclocation
❒✗ ${prefix}setppbot
❒✗ ${prefix}setexif
❒✗ ${prefix}block
❒✗ ${prefix}unblock
❒✗ ${prefix}coowner

*━━━〈  🐦 Group 🐦  〉━━━*

❒✗ ${prefix}groupsetting
❒✗ ${prefix}grouplink
❒✗ ${prefix}ephemeral
❒✗ ${prefix}setgcpp
❒✗ ${prefix}setname *(group)*
❒✗ ${prefix}setdesc
❒✗ ${prefix}group 
❒✗ ${prefix}resetgrouplink
❒✗ ${prefix}editinfo
❒✗ ${prefix}add
❒✗ ${prefix}remove
❒✗ ${prefix}hidetag
❒✗ ${prefix}tagall
❒✗ ${prefix}antivirus
❒✗ ${prefix}antitoxic
❒✗ ${prefix}autoreply
❒✗ ${prefix}promote
❒✗ ${prefix}demote
❒✗ ${prefix}react *(emoji)*
❒✗ ${prefix}vote
❒✗ ${prefix}devote
❒✗ ${prefix}upvote
❒✗ ${prefix}checkvote
❒✗ ${prefix}delvote
❒✗ ${prefix}couplepp

 *━━━〈  🔪 AntiLink 🔪  〉━━━*

❒✗ ${prefix}antiwame
❒✗ ${prefix}antilinkgc
❒✗ ${prefix}antilinktg
❒✗ ${prefix}antilinktt
❒✗ ${prefix}antilinkytch *(channel)*
❒✗ ${prefix}antilinkytvid *(video)*
❒✗ ${prefix}antilinkig
❒✗ ${prefix}antilinkfb
❒✗ ${prefix}antilinktwitter
❒✗ ${prefix}antilinkall

*━━━〈  ✨ Text Maker ✨  〉━━━*

❒✗ ${prefix}candy
❒✗ ${prefix}blackpinkneon
❒✗ ${prefix}deepsea
❒✗ ${prefix}scifi
❒✗ ${prefix}fiction
❒✗ ${prefix}berry
❒✗ ${prefix}fruitjuice
❒✗ ${prefix}biscuit
❒✗ ${prefix}wood
❒✗ ${prefix}chocolate
❒✗ ${prefix}matrix
❒✗ ${prefix}blood
❒✗ ${prefix}halloween
❒✗ ${prefix}wicker
❒✗ ${prefix}darkgold
❒✗ ${prefix}firework
❒✗ ${prefix}skeleton
❒✗ ${prefix}sand
❒✗ ${prefix}glue
❒✗ ${prefix}leaves
❒✗ ${prefix}magma
❒✗ ${prefix}lava
❒✗ ${prefix}rock
❒✗ ${prefix}bloodglas
❒✗ ${prefix}underwater
❒✗ ${prefix}textmaker
❒✗ ${prefix}honey
❒✗ ${prefix}ice
❒✗ ${prefix}watercolor
❒✗ ${prefix}multicolor
❒✗ ${prefix}snow
❒✗ ${prefix}harrypot
❒✗ ${prefix}harrypotter
❒✗ ${prefix}brokenglass
❒✗ ${prefix}waterpipe
❒✗ ${prefix}spooky
❒✗ ${prefix}circuit
❒✗ ${prefix}metalic
❒✗ ${prefix}demon
❒✗ ${prefix}sparklechristmas
❒✗ ${prefix}Christmas
❒✗ ${prefix}3Dchristmas
❒✗ ${prefix}3Dbox
❒✗ ${prefix}waterdrop
❒✗ ${prefix}lion2
❒✗ ${prefix}papercut
❒✗ ${prefix}transformer
❒✗ ${prefix}neondevil
❒✗ ${prefix}3Davengers
❒✗ ${prefix}3Dstone
❒✗ ${prefix}3Dstone2
❒✗ ${prefix}summertime
❒✗ ${prefix}thunder
❒✗ ${prefix}window
❒✗ ${prefix}graffiti
❒✗ ${prefix}graffitibike
❒✗ ${prefix}pornhub
❒✗ ${prefix}glitch
❒✗ ${prefix}glitch2
❒✗ ${prefix}glitch3
❒✗ ${prefix}blackpink
❒✗ ${prefix}3Dspace
❒✗ ${prefix}lion
❒✗ ${prefix}3Dneon
❒✗ ${prefix}greenneon
❒✗ ${prefix}bokeh
❒✗ ${prefix}holographic
❒✗ ${prefix}bear
❒✗ ${prefix}wolf
❒✗ ${prefix}joker
❒✗ ${prefix}dropwater
❒✗ ${prefix}dropwater2
❒✗ ${prefix}thewall
❒✗ ${prefix}neonlight
❒✗ ${prefix}natural
❒✗ ${prefix}carbon
❒✗ ${prefix}pencil
❒✗ ${prefix}blackpink2
❒✗ ${prefix}neon
❒✗ ${prefix}neonlight2
❒✗ ${prefix}toxic
❒✗ ${prefix}strawberry 
❒✗ ${prefix}discovery
❒✗ ${prefix}1917
❒✗ ${prefix}sci_fi
❒✗ ${prefix}ancient
❒✗ ${prefix}fabric
❒✗ ${prefix}horror
❒✗ ${prefix}whitebear
❒✗ ${prefix}juice
❒✗ ${prefix}batman
❒✗ ${prefix}multicolor
❒✗ ${prefix}collwall
❒✗ ${prefix}wonder
❒✗ ${prefix}cool
❒✗ ${prefix}sketch
❒✗ ${prefix}marvel
❒✗ ${prefix}foggy
❒✗ ${prefix}writing
❒✗ ${prefix}Halloweenfire
❒✗ ${prefix}classic

*━━━〈  🎃 Downloader 🎃  〉━━━*

❒✗ ${prefix}instagram
❒✗ ${prefix}igtv
❒✗ ${prefix}igstory
❒✗ ${prefix}facebook
❒✗ ${prefix}fbmp3
❒✗ ${prefix}twitter
❒✗ ${prefix}twittermp3 
❒✗ ${prefix}tiktok
❒✗ ${prefix}tiktokaudio
❒✗ ${prefix}tiktoknown
❒✗ ${prefix}mediafire
❒✗ ${prefix}ytmp3
❒✗ ${prefix}ytmp4
❒✗ ${prefix}getmusic
❒✗ ${prefix}getvudeo
❒✗ ${prefix}gitclone
❒✗ ${prefix}soundcloud
❒✗ ${prefix}zippyshare
	
 *━━━〈  🧐 Search 🧐  〉━━━*
 
❒✗ ${prefix}play
❒✗ ${prefix}song
❒✗ ${prefix}yts
❒✗ ${prefix}lyrics
❒✗ ${prefix}google
❒✗ ${prefix}playstore
❒✗ ${prefix}gimage
❒✗ ${prefix}pinterest
❒✗ ${prefix}image
❒✗ ${prefix}film
❒✗ ${prefix}wallpaper
❒✗ ${prefix}seachgc
❒✗ ${prefix}happymod
❒✗ ${prefix}tvsearch
❒✗ ${prefix}wikimedia
❒✗ ${prefix}ytsearch
❒✗ ${prefix}ringtone
❒✗ ${prefix}webtoon
❒✗ ${prefix}anime
❒✗ ${prefix}animestory
❒✗ ${prefix}manga
❒✗ ${prefix}wattpad
❒✗ ${prefix}covid

*━━━〈  🫧 Convert 🫧  〉━━━*

❒✗ ${prefix}toimg
❒✗ ${prefix}sticker
❒✗ ${prefix}toviewonce
❒✗ ${prefix}readmore
❒✗ ${prefix}take
❒✗ ${prefix}smeme
❒✗ ${prefix}emoji
❒✗ ${prefix}tovideo
❒✗ ${prefix}togif
❒✗ ${prefix}tourl
❒✗ ${prefix}toVN
❒✗ ${prefix}tomo3
❒✗ ${prefix}toaudio
❒✗ ${prefix}Enbnary
❒✗ ${prefix}Dbinary 
❒✗ ${prefix}tinyurl
❒✗ ${prefix}styletext

 *━━━〈  🔉 Audio 🔉  〉━━━*
 
❒✗ ${prefix}volume
❒✗ ${prefix}tempo
❒✗ ${prefix}bass
❒✗ ${prefix}blown
❒✗ ${prefix}deep
❒✗ ${prefix}earrape
❒✗ ${prefix}fast
❒✗ ${prefix}fat
❒✗ ${prefix}nightcore
❒✗ ${prefix}reverse
❒✗ ${prefix}robot
❒✗ ${prefix}slow
❒✗ ${prefix}squirrel

*━━〈 🖼️ Photo effects 🖼️ 〉━━*

❒✗ ${prefix}wanted
❒✗ ${prefix}blur
❒✗ ${prefix}framed 
❒✗ ${prefix}gayeffect
❒✗ ${prefix}imagessketch
❒✗ ${prefix}invert
❒✗ ${prefix}burn
❒✗ ${prefix}triggeredwebp
❒✗ ${prefix}shit
❒✗ ${prefix}rip
❒✗ ${prefix}jail
❒✗ ${prefix}beutifuleffect
❒✗ ${prefix}deleteeffect
❒✗ ${prefix}pixelate

*━━━〈  📷 image 📷  〉━━━*

❒✗ ${prefix}coffee 
❒✗ ${prefix}Bts
❒✗ ${prefix}woof
❒✗ ${prefix}meow
❒✗ ${prefix}lizard
❒✗ ${prefix}wallneon
❒✗ ${prefix}wallpubg
❒✗ ${prefix}wallml
❒✗ ${prefix}wallrandom
❒✗ ${prefix}wallcode
❒✗ ${prefix}animewall
❒✗ ${prefix}animewall2

*━━━〈  💃 emote 💃  〉━━━*

❒✗ ${prefix}Instagramemoji 
❒✗ ${prefix}facebookemoji
❒✗ ${prefix}iphoneemoji
❒✗ ${prefix}samsungemoji
❒✗ ${prefix}joyemoji
❒✗ ${prefix}skypeemoji
❒✗ ${prefix}twitteremoji
❒✗ ${prefix}whatsappemoji
❒✗ ${prefix}microsoftemoji
❒✗ ${prefix}googleemoji
❒✗ ${prefix}pediaemoji
❒✗ ${prefix}microsoftemoji

 *━━━〈  ❤️ Weeb ❤️  〉━━━*

❒✗ ${prefix}naruto
❒✗ ${prefix}yaoi
❒✗ ${prefix}neko2
❒✗ ${prefix}waifu
❒✗ ${prefix}waifu2
❒✗ ${prefix}awoo2
❒✗ ${prefix}shinobu
❒✗ ${prefix}waifu-face
❒✗ ${prefix}foxgirl
❒✗ ${prefix}megumin2
❒✗ ${prefix}loli
❒✗ ${prefix}8ball
❒✗ ${prefix}goose
❒✗ ${prefix}avatar
❒✗ ${prefix}tickle
❒✗ ${prefix}gecg
❒✗ ${prefix}feed

 *━━━〈  👻 Stickers 👻  〉━━━*

❒✗ ${prefix}patrick
❒✗ ${prefix}emoji
❒✗ ${prefix}emojimix
❒✗ ${prefix}attp
❒✗ ${prefix}ttp  *(text)*
❒✗ ${prefix}lovesticker

 *━━━〈  🥶 Reactions 🥶  〉━━━*

❒✗ ${prefix}bully
❒✗ ${prefix}cuddle
❒✗ ${prefix}cry
❒✗ ${prefix}hug
❒✗ ${prefix}awoo
❒✗ ${prefix}kiss
❒✗ ${prefix}lick
❒✗ ${prefix}pat
❒✗ ${prefix}smug
❒✗ ${prefix}bonk
❒✗ ${prefix}yeet
❒✗ ${prefix}blush
❒✗ ${prefix}smile
❒✗ ${prefix}wave
❒✗ ${prefix}highfive
❒✗ ${prefix}handhold
❒✗ ${prefix}nom
❒✗ ${prefix}glomp
❒✗ ${prefix}bite
❒✗ ${prefix}slap
❒✗ ${prefix}kick
❒✗ ${prefix}kill
❒✗ ${prefix}happy
❒✗ ${prefix}wink
❒✗ ${prefix}poke
❒✗ ${prefix}dance
❒✗ ${prefix}cringe
❒✗ ${prefix}neko
❒✗ ${prefix}gura

 *━━〈 💖 Anime sticker 💖 〉━━*

❒✗ ${prefix}animenom
❒✗ ${prefix}animeslap
❒✗ ${prefix}animespank
❒✗ ${prefix}animepat
❒✗ ${prefix}animeneko
❒✗ ${prefix}animekiss
❒✗ ${prefix}animewlp
❒✗ ${prefix}animecuddle
❒✗ ${prefix}animecry
❒✗ ${prefix}animekill
❒✗ ${prefix}animelick
❒✗ ${prefix}animebite
❒✗ ${prefix}animeyeet
❒✗ ${prefix}animebully
❒✗ ${prefix}animebonk
❒✗ ${prefix}animewink
❒✗ ${prefix}animepoke
❒✗ ${prefix}animesmile
❒✗ ${prefix}animewave
❒✗ ${prefix}animeawoo
❒✗ ${prefix}animeblush
❒✗ ${prefix}animesmug
❒✗ ${prefix}animeglomp
❒✗ ${prefix}animehappt
❒✗ ${prefix}animedance
❒✗ ${prefix}animecringe
❒✗ ${prefix}animehighfive
❒✗ ${prefix}animehandhold
❒✗ ${prefix}animemegumin
❒✗ ${prefix}smug2

 *━━━〈  💃 Fun 💃  〉━━━*

❒✗ ${prefix}rate *(Text)*
❒✗ ${prefix}wangy
❒✗ ${prefix}beautifulcheck
❒✗ ${prefix}awesomecheck
❒✗ ${prefix}prettycheck
❒✗ ${prefix}lesbiancheck
❒✗ ${prefix}gaycheck
❒✗ ${prefix}cutecheck
❒✗ ${prefix}uglycheck
❒✗ ${prefix}hornycheck
❒✗ ${prefix}charactercheck 
❒✗ ${prefix}lovelycheck
❒✗ ${prefix}murderercheck
❒✗ ${prefix}chutiyacheck 
❒✗ ${prefix}dethcheck
❒✗ ${prefix}couple
❒✗ ${prefix}mysoulmate
❒✗ ${prefix}hot
❒✗ ${prefix}sexy
❒✗ ${prefix}kind
❒✗ ${prefix}idiot
❒✗ ${prefix}handsome
❒✗ ${prefix}beutiful 
❒✗ ${prefix}cute
❒✗ ${prefix}pretty
❒✗ ${prefix}lesbian
❒✗ ${prefix}noob
❒✗ ${prefix}bastard

....Type 𝗙𝘂𝗻𝗺𝗲𝗻𝘂𝟮 for more....

 *━━━〈  🎮 Games 🎮  〉━━━*

❒✗ ${prefix}truth
❒✗ ${prefix}dare
❒✗ ${prefix}tictactoe
❒✗ ${prefix}delttt
❒✗ ${prefix}guess  *(𝙾𝚙𝚝𝚒𝚘𝚗)*
❒✗ ${prefix}math

 *━━〈  🙆 Anonymous chat 🙆  〉━━*

❒✗ ${prefix}anonymous 
❒✗ ${prefix}start
❒✗ ${prefix}next
❒✗ ${prefix}leave

 *━━━〈  ⚒️ Tools ⚒️  〉━━━*

❒✗ ${prefix}translate
❒✗ ${prefix}fliptext 
❒✗ ${prefix}toletter  *(number)*
` 
let buons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1},
{buttonId: `owner`, buttonText: {displayText: 'owner👑'}, type: 1}
]
let ntus = {
image: unicorn,
jpegThumbnail: menuimage,
caption: allmenu,
footer: `${footer}\n𝗠𝘆 𝗻𝗮𝗺𝗲 : ${botname1}\n𝗠𝘆 𝘀𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} msㅤㅤㅤ`,
buttons: buons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`𝑯𝒆𝒚,\n𝑰'𝒂𝒎 ${botname2}`,
body: `${Menudoccap}`, 
thumbnail: menuimage,
mediaType:1,
mediaUrl: `${link1}`,
sourceUrl: `${linkgit}`
}}
}
AnyaPika.sendMessage(m.chat , ntus , { quoted: m })
}
break 
case 'ownermenu': {
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Owner Menu')
let teks  =  `ㅤㅤ࿙༺⟅∙𝑶𝒘𝒏𝒆𝒓 𝑴𝒆𝒏𝒖∙⟆༻࿚

╭╼━━᚜ 𝓐𝓷𝔂𝓪 𝓫𝔂 𝓟𝓲𝓴𝓪 ᚛╾ᐧᐧᐧᐧ⳹
❤️ 𝗨𝘀𝗲𝗿 𝗻𝗮𝗺𝗲 : 
┊➥ ${pushname}
┝┅━┅━┅━┅━┅━♡
🥵 𝗢𝘄𝗻𝗲𝗿 𝗻𝗮𝗺𝗲 :
┊➥ ${global.ownername}
┝┅━┅━┅━┅━┅━♡
🎃 𝗚𝗿𝗼𝘂𝗽 :
┊➥ ${groupMetadata.subject}
╰╼━━━━━━━━━━━━╾ᐧᐧᐧᐧ⳹
╭╼━━᚜ 𝓞𝔀𝓷𝓮𝓻 𝓶𝓮𝓷𝓾 ᚛━╾ᐧᐧᐧᐧ⳹
┊
❒✗ ${prefix}self
❒✗ ${prefix}public
❒✗ ${prefix}antitag
❒✗ ${prefix}RentBot
❒✗ ${prefix}Rentlist
❒✗ ${prefix}ban
❒✗ ${prefix}banchat
❒✗ ${prefix}deletethis
❒✗ ${prefix}join
❒✗ ${prefix}leavegc
❒✗ ${prefix}setbio
❒✗ ${prefix}bcgroup
❒✗ ${prefix}bcall
❒✗ ${prefix}bcimage
❒✗ ${prefix}bcvideo
❒✗ ${prefix}bcaudio
❒✗ ${prefix}bclocation
❒✗ ${prefix}setppbot
❒✗ ${prefix}setexif
❒✗ ${prefix}block
❒✗ ${prefix}unblock
❒✗ ${prefix}coowner
┊
╰╼━━━━━━━━━━━╾ᐧᐧᐧᐧ༻` 
let buttons = [
{buttonId: `${prefix}tagall ${tagmsg}`, buttonText: {displayText: '𝘛𝘢𝘨𝘢𝘭𝘭✨'}, type: 1},
{buttonId: `${prefix}owner`, buttonText: {displayText: '𝘖𝘸𝘯𝘦𝘳❤️'}, type: 1}
]
let ntus = {
image: unicorn,
jpegThumbnail: menuimage,
caption: teks,
footer: `${footer}\n𝗠𝘆 𝗻𝗮𝗺𝗲 : ${botname1}\n𝗠𝘆 𝘀𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} msㅤㅤㅤ`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`𝑯𝒆𝒚,\n𝑰'𝒂𝒎 ${botname2}`,
body: `${Menudoccap}`,
thumbnail: menuimage,
mediaType:1,
mediaUrl: `${link1}`,
sourceUrl: `${linkgit}`
}}
}
AnyaPika.sendMessage(m.chat , ntus , { quoted: m })
}
break
case 'groupmenu':{
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Group Menu')
let teks =  `ㅤㅤ࿙༺⟅∙𝑮𝒓𝒐𝒖𝒑 𝑴𝒆𝒏𝒖∙⟆༻࿚

╭╼━━᚜ 𝓐𝓷𝔂𝓪 𝓫𝔂 𝓟𝓲𝓴𝓪 ᚛╾ᐧᐧᐧᐧ⳹
❤️ 𝗨𝘀𝗲𝗿 𝗻𝗮𝗺𝗲 : 
┊➥ ${pushname}
┝┅━┅━┅━┅━┅━♡
🥵 𝗢𝘄𝗻𝗲𝗿 𝗻𝗮𝗺𝗲 :
┊➥ ${global.ownername}
┝┅━┅━┅━┅━┅━♡
🎃 𝗚𝗿𝗼𝘂𝗽 :
┊➥ ${groupMetadata.subject}
╰╼━━━━━━━━━━━━╾ᐧᐧᐧᐧ⳹
╭╼━━᚜ 𝓖𝓻𝓸𝓾𝓹 𝓶𝓮𝓷𝓾 ᚛━╾ᐧᐧᐧᐧ⳹
┊
❒✗ ${prefix}groupsetting
❒✗ ${prefix}grouplink
❒✗ ${prefix}ephemeral
❒✗ ${prefix}setgcpp
❒✗ ${prefix}setname *(group)*
❒✗ ${prefix}setdesc
❒✗ ${prefix}group 
❒✗ ${prefix}resetgrouplink
❒✗ ${prefix}editinfo
❒✗ ${prefix}add
❒✗ ${prefix}remove
❒✗ ${prefix}hidetag
❒✗ ${prefix}tagall
❒✗ ${prefix}antivirus
❒✗ ${prefix}antitoxic
❒✗ ${prefix}autoreply
❒✗ ${prefix}promote
❒✗ ${prefix}demote
❒✗ ${prefix}react *(emoji)*
❒✗ ${prefix}vote
❒✗ ${prefix}devote
❒✗ ${prefix}upvote
❒✗ ${prefix}checkvote
❒✗ ${prefix}delvote
❒✗ ${prefix}couplepp
┊
╰╼━━━━━━━━━━━╾ᐧᐧᐧᐧ༻` 
let button = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let ntus = {
image: unicorn,
jpegThumbnail: log0,
caption: teks,
footer: `${footer}\n𝗠𝘆 𝗻𝗮𝗺𝗲 : ${botname1}\n𝗠𝘆 𝘀𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} msㅤㅤㅤ`,
buttons: button,
headerType: 4,
contextInfo:{externalAdReply:{
title:`𝑯𝒆𝒚,\n𝑰'𝒂𝒎 ${botname2}`,
body: `${Menudoccap}`,
thumbnail: menuimage,
mediaType:1,
mediaUrl: `${link1}`,
sourceUrl: `${linkgit}`
}}
}
AnyaPika.sendMessage(m.chat , ntus , { quoted: m })
}
break
case 'antilinkmenu':{
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Rpg Menu')
let teks =  `ㅤ   ࿙༺⟅∙𝑨𝒏𝒕𝒊𝒍𝒊𝒏𝒌 𝑴𝒆𝒏𝒖∙⟆༻࿚

╭╼━━᚜ 𝓐𝓷𝔂𝓪 𝓫𝔂 𝓟𝓲𝓴𝓪 ᚛╾ᐧᐧᐧᐧ⳹
❤️ 𝗨𝘀𝗲𝗿 𝗻𝗮𝗺𝗲 : 
┊➥ ${pushname}
┝┅━┅━┅━┅━┅━♡
🥵 𝗢𝘄𝗻𝗲𝗿 𝗻𝗮𝗺𝗲 :
┊➥ ${global.ownername}
┝┅━┅━┅━┅━┅━♡
🎃 𝗚𝗿𝗼𝘂𝗽 :
┊➥ ${groupMetadata.subject}
╰╼━━━━━━━━━━━━╾ᐧᐧᐧᐧ⳹
╭╼━᚜ 𝓐𝓷𝓽𝓲𝓵𝓲𝓷𝓴 𝓶𝓮𝓷𝓾 ᚛━╾ᐧᐧᐧ⳹
┊
❒✗ ${prefix}antiwame
❒✗ ${prefix}antilinkgc
❒✗ ${prefix}antilinktg
❒✗ ${prefix}antilinktt
❒✗ ${prefix}antilinkytch *(channel)*
❒✗ ${prefix}antilinkytvid *(video)*
❒✗ ${prefix}antilinkig
❒✗ ${prefix}antilinkfb
❒✗ ${prefix}antilinktwitter
❒✗ ${prefix}antilinkall
┊
╰╼━━━━━━━━━━━╾ᐧᐧᐧᐧ༻`
let buttns = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let ntus = {
image: unicorn,
jpegThumbnail: log0,
caption: teks,
footer: `${footer}\n𝗠𝘆 𝗻𝗮𝗺𝗲 : ${botname1}\n𝗠𝘆 𝘀𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} msㅤㅤㅤ`,
buttons: buttns,
headerType: 4,
contextInfo:{externalAdReply:{
title:`𝑯𝒆𝒚,\n𝑰'𝒂𝒎 ${botname2}`,
body: `${Menudoccap}`,
thumbnail: menuimage,
mediaType:1,
mediaUrl: `${link1}`,
sourceUrl: `${linkgit}`
}}
}
AnyaPika.sendMessage(m.chat , ntus , { quoted: m })
}
break
case 'textpromenu': {
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Maker Menu')
let teks = `ㅤㅤ࿙༺⟅∙•𝑻𝒆𝒙𝒕 𝑴𝒆𝒏𝒖∙•⟆༻࿚

╭╼━━᚜ 𝓐𝓷𝔂𝓪 𝓫𝔂 𝓟𝓲𝓴𝓪 ᚛╾ᐧᐧᐧᐧ⳹
❤️ 𝗨𝘀𝗲𝗿 𝗻𝗮𝗺𝗲 : 
┊➥ ${pushname}
┝┅━┅━┅━┅━┅━♡
🥵 𝗢𝘄𝗻𝗲𝗿 𝗻𝗮𝗺𝗲 :
┊➥ ${global.ownername}
┝┅━┅━┅━┅━┅━♡
🎃 𝗚𝗿𝗼𝘂𝗽 :
┊➥ ${groupMetadata.subject}
╰╼━━━━━━━━━━━━╾ᐧᐧᐧᐧ⳹
╭╼━━᚜ 𝓣𝓮𝔁𝓽 𝓶𝓮𝓷𝓾 ᚛━╾ᐧᐧᐧᐧᐧᐧᐧ⳹
┊
❒✗ ${prefix}candy
❒✗ ${prefix}blackpinkneon
❒✗ ${prefix}deepsea
❒✗ ${prefix}scifi
❒✗ ${prefix}fiction
❒✗ ${prefix}berry
❒✗ ${prefix}fruitjuice
❒✗ ${prefix}biscuit
❒✗ ${prefix}wood
❒✗ ${prefix}chocolate
❒✗ ${prefix}matrix
❒✗ ${prefix}blood
❒✗ ${prefix}halloween
❒✗ ${prefix}wicker
❒✗ ${prefix}darkgold
❒✗ ${prefix}firework
❒✗ ${prefix}skeleton
❒✗ ${prefix}sand
❒✗ ${prefix}glue
❒✗ ${prefix}leaves
❒✗ ${prefix}magma
❒✗ ${prefix}lava
❒✗ ${prefix}rock
❒✗ ${prefix}bloodglas
❒✗ ${prefix}underwater
❒✗ ${prefix}textmaker
❒✗ ${prefix}honey
❒✗ ${prefix}ice
❒✗ ${prefix}watercolor
❒✗ ${prefix}multicolor
❒✗ ${prefix}snow
❒✗ ${prefix}harrypot
❒✗ ${prefix}harrypotter
❒✗ ${prefix}brokenglass
❒✗ ${prefix}waterpipe
❒✗ ${prefix}spooky
❒✗ ${prefix}circuit
❒✗ ${prefix}metalic
❒✗ ${prefix}demon
❒✗ ${prefix}sparklechristmas
❒✗ ${prefix}Christmas
❒✗ ${prefix}3Dchristmas
❒✗ ${prefix}3Dbox
❒✗ ${prefix}waterdrop
❒✗ ${prefix}lion2
❒✗ ${prefix}papercut
❒✗ ${prefix}transformer
❒✗ ${prefix}neondevil
❒✗ ${prefix}3Davengers
❒✗ ${prefix}3Dstone
❒✗ ${prefix}3Dstone2
❒✗ ${prefix}summertime
❒✗ ${prefix}thunder
❒✗ ${prefix}window
❒✗ ${prefix}graffiti
❒✗ ${prefix}graffitibike
❒✗ ${prefix}pornhub
❒✗ ${prefix}glitch
❒✗ ${prefix}glitch2
❒✗ ${prefix}glitch3
❒✗ ${prefix}blackpink
❒✗ ${prefix}3Dspace
❒✗ ${prefix}lion
❒✗ ${prefix}3Dneon
❒✗ ${prefix}greenneon
❒✗ ${prefix}bokeh
❒✗ ${prefix}holographic
❒✗ ${prefix}bear
❒✗ ${prefix}wolf
❒✗ ${prefix}joker
❒✗ ${prefix}dropwater
❒✗ ${prefix}dropwater2
❒✗ ${prefix}thewall
❒✗ ${prefix}neonlight
❒✗ ${prefix}natural
❒✗ ${prefix}carbon
❒✗ ${prefix}pencil
❒✗ ${prefix}blackpink2
❒✗ ${prefix}neon
❒✗ ${prefix}neonlight2
❒✗ ${prefix}toxic
❒✗ ${prefix}strawberry 
❒✗ ${prefix}discovery
❒✗ ${prefix}1917
❒✗ ${prefix}sci_fi
❒✗ ${prefix}ancient
❒✗ ${prefix}fabric
❒✗ ${prefix}horror
❒✗ ${prefix}whitebear
❒✗ ${prefix}juice
❒✗ ${prefix}batman
❒✗ ${prefix}multicolor
❒✗ ${prefix}collwall
❒✗ ${prefix}wonder
❒✗ ${prefix}cool
❒✗ ${prefix}sketch
❒✗ ${prefix}marvel
❒✗ ${prefix}foggy
❒✗ ${prefix}writing
❒✗ ${prefix}Halloweenfire
❒✗ ${prefix}classic
┊
╰╼━━━━━━━━━━━╾ᐧᐧᐧᐧ༻`
let bttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let ntus = {
image: unicorn,
jpegThumbnail: log0,
caption: teks,
footer: `${footer}\n𝗠𝘆 𝗻𝗮𝗺𝗲 : ${botname1}\n𝗠𝘆 𝘀𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} msㅤㅤㅤ`,
buttons: bttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`𝑯𝒆𝒚,\n𝑰'𝒂𝒎 ${botname2}`,
body: `${Menudoccap}`,
thumbnail: menuimage,
mediaType:1,
mediaUrl: `${link1}`,
sourceUrl: `${linkgit}`
}}
}
AnyaPika.sendMessage(m.chat , ntus , { quoted: m })
}
break
case 'downloadermenu':{
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Download Menu')
let teks =  `ㅤ   ࿙༺⟅∙𝑫𝒐𝒘𝒏𝒍𝒐𝒂𝒅 𝑴𝒆𝒏𝒖∙⟆༻࿚

╭╼━━᚜ 𝓐𝓷𝔂𝓪 𝓫𝔂 𝓟𝓲𝓴𝓪 ᚛╾ᐧᐧᐧᐧ⳹
❤️ 𝗨𝘀𝗲𝗿 𝗻𝗮𝗺𝗲 : 
┊➥ ${pushname}
┝┅━┅━┅━┅━┅━♡
🥵 𝗢𝘄𝗻𝗲𝗿 𝗻𝗮𝗺𝗲 :
┊➥ ${global.ownername}
┝┅━┅━┅━┅━┅━♡
🎃 𝗚𝗿𝗼𝘂𝗽 :
┊➥ ${groupMetadata.subject}
╰╼━━━━━━━━━━━━╾ᐧᐧᐧᐧ⳹
╭╼━᚜ 𝓓𝓸𝔀𝓷𝓵𝓸𝓪𝓭 𝓶𝓮𝓷𝓾 ᚛╾ᐧᐧᐧᐧ⳹
┊
❒✗ ${prefix}instagram
❒✗ ${prefix}igtv
❒✗ ${prefix}igstory
❒✗ ${prefix}facebook
❒✗ ${prefix}fbmp3
❒✗ ${prefix}twitter
❒✗ ${prefix}twittermp3 
❒✗ ${prefix}tiktok
❒✗ ${prefix}tiktokaudio
❒✗ ${prefix}tiktoknown
❒✗ ${prefix}mediafire
❒✗ ${prefix}ytmp3
❒✗ ${prefix}ytmp4
❒✗ ${prefix}getmusic
❒✗ ${prefix}getvudeo
❒✗ ${prefix}gitclone
❒✗ ${prefix}soundcloud
❒✗ ${prefix}zippyshare
┊
╰╼━━━━━━━━━━━╾ᐧᐧᐧᐧ༻` 
let uttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let ntus = {
image: unicorn,
jpegThumbnail: log0,
caption: teks,
footer: `${footer}\n𝗠𝘆 𝗻𝗮𝗺𝗲 : ${botname1}\n𝗠𝘆 𝘀𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} msㅤㅤㅤ`,
buttons: uttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`𝑯𝒆𝒚,\n𝑰'𝒂𝒎 ${botname2}`,
body: `${Menudoccap}`,
thumbnail: menuimage,
mediaType:1,
mediaUrl: `${link1}`,
sourceUrl: `${linkgit}`
}}
}
AnyaPika.sendMessage(m.chat , ntus , { quoted: m })
}
break
case 'searchmenu': {
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Search Menu')
let teks =  `ㅤ   ࿙༺⟅∙𝑺𝒆𝒂𝒓𝒄𝒉 𝑴𝒆𝒏𝒖∙⟆༻࿚

╭╼━━᚜ 𝓐𝓷𝔂𝓪 𝓫𝔂 𝓟𝓲𝓴𝓪 ᚛╾ᐧᐧᐧᐧ⳹
❤️ 𝗨𝘀𝗲𝗿 𝗻𝗮𝗺𝗲 : 
┊➥ ${pushname}
┝┅━┅━┅━┅━┅━♡
🥵 𝗢𝘄𝗻𝗲𝗿 𝗻𝗮𝗺𝗲 :
┊➥ ${global.ownername}
┝┅━┅━┅━┅━┅━♡
🎃 𝗚𝗿𝗼𝘂𝗽 :
┊➥ ${groupMetadata.subject}
╰╼━━━━━━━━━━━━╾ᐧᐧᐧᐧ⳹
╭╼━━᚜ 𝓢𝓮𝓪𝓻𝓬𝓱 𝓶𝓮𝓷𝓾 ᚛━╾ᐧᐧᐧᐧ⳹
┊
❒✗ ${prefix}play
❒✗ ${prefix}song
❒✗ ${prefix}yts
❒✗ ${prefix}lyrics
❒✗ ${prefix}google
❒✗ ${prefix}playstore
❒✗ ${prefix}gimage
❒✗ ${prefix}pinterest
❒✗ ${prefix}image
❒✗ ${prefix}film
❒✗ ${prefix}wallpaper
❒✗ ${prefix}seachgc
❒✗ ${prefix}happymod
❒✗ ${prefix}tvsearch
❒✗ ${prefix}wikimedia
❒✗ ${prefix}ytsearch
❒✗ ${prefix}ringtone
❒✗ ${prefix}webtoon
❒✗ ${prefix}anime
❒✗ ${prefix}animestory
❒✗ ${prefix}manga
❒✗ ${prefix}wattpad
┊
╰╼━━━━━━━━━━━╾ᐧᐧᐧᐧ༻`
let butons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let ntus = {
image: unicorn,
jpegThumbnail: log0,
caption: teks,
footer: `${footer}\n𝗠𝘆 𝗻𝗮𝗺𝗲 : ${botname1}\n𝗠𝘆 𝘀𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} msㅤㅤㅤ`,
buttons: butons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`𝑯𝒆𝒚,\n𝑰'𝒂𝒎 ${botname2}`,
body: `${Menudoccap}`, 
thumbnail: menuimage,
mediaType:1,
mediaUrl: `${link1}`,
sourceUrl: `${linkgit}`
}}
}
AnyaPika.sendMessage(m.chat , ntus , { quoted: m })
}
break
case 'convertmenu': {
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Convert Menu')
let teks = `ㅤ   ࿙༺⟅∙𝑪𝒐𝒏𝒗𝒆𝒓𝒕 𝑴𝒆𝒏𝒖∙⟆༻࿚

╭╼━━᚜ 𝓐𝓷𝔂𝓪 𝓫𝔂 𝓟𝓲𝓴𝓪 ᚛╾ᐧᐧᐧᐧ⳹
❤️ 𝗨𝘀𝗲𝗿 𝗻𝗮𝗺𝗲 : 
┊➥ ${pushname}
┝┅━┅━┅━┅━┅━♡
🥵 𝗢𝘄𝗻𝗲𝗿 𝗻𝗮𝗺𝗲 :
┊➥ ${global.ownername}
┝┅━┅━┅━┅━┅━♡
🎃 𝗚𝗿𝗼𝘂𝗽 :
┊➥ ${groupMetadata.subject}
╰╼━━━━━━━━━━━━╾ᐧᐧᐧᐧ⳹
╭╼━━᚜ 𝓒𝓸𝓷𝓿𝓮𝓻𝓽 𝓶𝓮𝓷𝓾 ᚛━╾ᐧᐧᐧᐧ⳹
┊
❒✗ ${prefix}toimg
❒✗ ${prefix}sticker
❒✗ ${prefix}toviewonce
❒✗ ${prefix}readmore
❒✗ ${prefix}take
❒✗ ${prefix}smeme
❒✗ ${prefix}emoji
❒✗ ${prefix}tovideo
❒✗ ${prefix}togif
❒✗ ${prefix}tourl
❒✗ ${prefix}toVN
❒✗ ${prefix}tomo3
❒✗ ${prefix}toaudio
❒✗ ${prefix}Enbnary
❒✗ ${prefix}Dbinary 
❒✗ ${prefix}tinyurl
❒✗ ${prefix}styletext
┊
╰╼━━━━━━━━━━━╾ᐧᐧᐧᐧ༻`
let buttns = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let ntus = {
image: unicorn,
jpegThumbnail: log0,
caption: teks,
footer: `${footer}\n𝗠𝘆 𝗻𝗮𝗺𝗲 : ${botname1}\n𝗠𝘆 𝘀𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} msㅤㅤㅤ`,
buttons: buttns,
headerType: 4,
contextInfo:{externalAdReply:{
title:`𝑯𝒆𝒚,\n𝑰'𝒂𝒎 ${botname2}`,
body: `${Menudoccap}`,
thumbnail: menuimage,
mediaType:1,
mediaUrl: `${link1}`,
sourceUrl: `${linkgit}`
}}
}
AnyaPika.sendMessage(m.chat , ntus , { quoted: m })
}
break
case 'funmenu2': {
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Random Image Menu')
let teks = `ㅤㅤ࿙༺⟅∙𝑭𝒖𝒏 𝑴𝒆𝒏𝒖 𝟐∙⟆༻࿚

╭╼━━᚜ 𝓐𝓷𝔂𝓪 𝓱𝔂 𝓟𝓲𝓴𝓪 ᚛╾ᐧᐧᐧᐧ⳹
❤️ 𝗨𝘀𝗲𝗿 𝗻𝗮𝗺𝗲 : 
┊➥ ${pushname}
┝┅━┅━┅━┅━┅━♡
🥵 𝗢𝘄𝗻𝗲𝗿 𝗻𝗮𝗺𝗲 :
┊➥ ${global.ownername}
┝┅━┅━┅━┅━┅━♡
🎃 𝗚𝗿𝗼𝘂𝗽 :
┊➥ ${groupMetadata.subject}
╰╼━━━━━━━━━━━━╾ᐧᐧᐧᐧ⳹
╭╼━━᚜ 𝓕𝓾𝓷2 𝓶𝓮𝓷𝓾 ᚛━╾ᐧᐧᐧᐧ⳹
┊
❒✗ ${prefix}foolish? 
❒✗ ${prefix}smart? 
❒✗ ${prefix}idiot? 
❒✗ ${prefix}gay? 
❒✗ ${prefix}lesbi? 
❒✗ ${prefix}bastard? 
❒✗ ${prefix}stubble? 
❒✗ ${prefix}dog? 
❒✗ ${prefix}fuck? 
❒✗ ${prefix}ape? 
❒✗ ${prefix}noob? 
❒✗ ${prefix}great? 
❒✗ ${prefix}horny? 
❒✗ ${prefix}wibu? 
❒✗ ${prefix}asshole? 
❒✗ ${prefix}handsome? 
❒✗ ${prefix}beautiful? 
❒✗ ${prefix}cute? 
❒✗ ${prefix}kind? 
❒✗ ${prefix}ugly? 
❒✗ ${prefix}pretty? 
❒✗ ${prefix}lesbian? 
❒✗ ${prefix}randi? 
❒✗ ${prefix}gandu? 
❒✗ ${prefix}madarchod? 
❒✗ ${prefix}kala? 
❒✗ ${prefix}gora? 
❒✗ ${prefix}chutiya? 
❒✗ ${prefix}nibba? 
❒✗ ${prefix}nibbi? 
❒✗ ${prefix}bhosdiwala? 
❒✗ ${prefix}chutmarika? 
❒✗ ${prefix}bokachoda? 
❒✗ ${prefix}stupid? 
❒✗ ${prefix}suarerbaccha? 
❒✗ ${prefix}bolochoda? 
❒✗ ${prefix}muthal? 
❒✗ ${prefix}muthbaaz? 
❒✗ ${prefix}randibaaz? 
❒✗ ${prefix}topibaaz? 
❒✗ ${prefix}cunt? 
❒✗ ${prefix}nerd? 
❒✗ ${prefix}behenchod? 
❒✗ ${prefix}behnchoda? 
❒✗ ${prefix}bhosdika? 
❒✗ ${prefix}nigger? 
❒✗ ${prefix}lund? 
❒✗ ${prefix}nigga? 
❒✗ ${prefix}tharki? 
❒✗ ${prefix}mumu? 
❒✗ ${prefix}rascal? 
❒✗ ${prefix}scumbag? 
❒✗ ${prefix}comrade? 
❒✗ ${prefix}fagot? 
❒✗ ${prefix}scoundrel? 
❒✗ ${prefix}ditch? 
❒✗ ${prefix}dope? 
❒✗ ${prefix}lit? 
❒✗ ${prefix}dumbass? 
❒✗ ${prefix}sexy? 
❒✗ ${prefix}crackhead? 
❒✗ ${prefix}motherfucker? 
❒✗ ${prefix}dogla? 
❒✗ ${prefix}bewda? 
❒✗ ${prefix}boka? 
❒✗ ${prefix}khanki? 
❒✗ ${prefix}bal? 
❒✗ ${prefix}sucker? 
❒✗ ${prefix}fuckboy? 
❒✗ ${prefix}playboy? 
❒✗ ${prefix}fuckgirl? 
❒✗ ${prefix}playgirl? 
❒✗ ${prefix}hot? 
┊
╰╼━━━━━━━━━━━╾ᐧᐧᐧᐧ༻` 
let buttns = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let ntus = {
image: unicorn,
jpegThumbnail: log0,
caption: teks,
footer: `${footer}\n𝗠𝘆 𝗻𝗮𝗺𝗲 : ${botname1}\n𝗠𝘆 𝘀𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} msㅤㅤㅤ`,
buttons: buttns,
headerType: 4,
contextInfo:{externalAdReply:{
title:`𝑯𝒆𝒚,\n𝑰'𝒂𝒎 ${botname2}`,
body: `${Menudoccap}`,
thumbnail: menuimage,
mediaType:1,
mediaUrl: `${link1}`,
sourceUrl: `${linkgit}`
}}
}
AnyaPika.sendMessage(m.chat , ntus , { quoted: m })
}
break

case 'emotemenu':{
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Emote Menu')
let teks = `ㅤㅤ࿙༺⟅∙𝑬𝒎𝒐𝒕𝒆 𝑴𝒆𝒏𝒖∙⟆༻࿚

╭╼━━᚜ 𝓐𝓷𝔂𝓪 𝓫𝔂 𝓟𝓲𝓴𝓪 ᚛╾ᐧᐧᐧᐧ⳹
❤️ 𝗨𝘀𝗲𝗿 𝗻𝗮𝗺𝗲 : 
┊➥ ${pushname}
┝┅━┅━┅━┅━┅━♡
🥵 𝗢𝘄𝗻𝗲𝗿 𝗻𝗮𝗺𝗲 :
┊➥ ${global.ownername}
┝┅━┅━┅━┅━┅━♡
🎃 𝗚𝗿𝗼𝘂𝗽 :
┊➥ ${groupMetadata.subject}
╰╼━━━━━━━━━━━━╾ᐧᐧᐧᐧ⳹
╭╼━━᚜ 𝓔𝓶𝓸𝓽𝓮 𝓶𝓮𝓷𝓾 ᚛━╾ᐧᐧᐧᐧ⳹
┊
❒✗ ${prefix}Instagramemoji 
❒✗ ${prefix}facebookemoji
❒✗ ${prefix}iphoneemoji
❒✗ ${prefix}samsungemoji
❒✗ ${prefix}joyemoji
❒✗ ${prefix}skypeemoji
❒✗ ${prefix}twitteremoji
❒✗ ${prefix}whatsappemoji
❒✗ ${prefix}microsoftemoji
❒✗ ${prefix}googleemoji
❒✗ ${prefix}pediaemoji
❒✗ ${prefix}microsoftemoji
┊
╰╼━━━━━━━━━━━╾ᐧᐧᐧᐧ༻` 
let buttns = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let ntus = {
image: unicorn,
jpegThumbnail: log0,
caption: teks,
footer: `${footer}\n𝗠𝘆 𝗻𝗮𝗺𝗲 : ${botname1}\n𝗠𝘆 𝘀𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} msㅤㅤㅤ`,
buttons: buttns,
headerType: 4,
contextInfo:{externalAdReply:{
title:`𝑯𝒆𝒚,\n𝑰'𝒂𝒎 ${botname2}`,
body: `${Menudoccap}`,
thumbnail: menuimage,
mediaType:1,
mediaUrl: `${link1}`,
sourceUrl: `${linkgit}`
}}
}
AnyaPika.sendMessage(m.chat , ntus , { quoted: m })
}
break
case 'photoeffectsmenu': {
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Image Effect Menu')
let teks =  `ㅤㅤ࿙༺⟅∙𝑷𝒉𝒐𝒕𝒐 𝑴𝒆𝒏𝒖∙⟆༻࿚

╭╼━━᚜ 𝓐𝓷𝔂𝓪 𝓫𝔂 𝓟𝓲𝓴𝓪 ᚛╾ᐧᐧᐧᐧ⳹
❤️ 𝗨𝘀𝗲𝗿 𝗻𝗮𝗺𝗲 : 
┊➥ ${pushname}
┝┅━┅━┅━┅━┅━♡
🥵 𝗢𝘄𝗻𝗲𝗿 𝗻𝗮𝗺𝗲 :
┊➥ ${global.ownername}
┝┅━┅━┅━┅━┅━♡
🎃 𝗚𝗿𝗼𝘂𝗽 :
┊➥ ${groupMetadata.subject}
╰╼━━━━━━━━━━━━╾ᐧᐧᐧᐧ⳹
╭╼━━᚜ 𝓟𝓱𝓸𝓽𝓸 𝓶𝓮𝓷𝓾 ᚛━╾ᐧᐧᐧᐧ⳹
┊
❒✗ ${prefix}wanted
❒✗ ${prefix}blur
❒✗ ${prefix}framed 
❒✗ ${prefix}gayeffect
❒✗ ${prefix}imagessketch
❒✗ ${prefix}invert
❒✗ ${prefix}burn
❒✗ ${prefix}triggeredwebp
❒✗ ${prefix}shit
❒✗ ${prefix}rip
❒✗ ${prefix}jail
❒✗ ${prefix}beutifuleffect
❒✗ ${prefix}deleteeffect
❒✗ ${prefix}pixelate
┊
╰╼━━━━━━━━━━━╾ᐧᐧᐧᐧ༻` 
let buttns = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let ntus = {
image: unicorn,
jpegThumbnail: log0,
caption: teks,
footer: `${footer}\n𝗠𝘆 𝗻𝗮𝗺𝗲 : ${botname1}\n𝗠𝘆 𝘀𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} msㅤㅤㅤ`,
buttons: buttns,
headerType: 4,
contextInfo:{externalAdReply:{
title:`𝑯𝒆𝒚,\n𝑰'𝒂𝒎 ${botname2}`,
body: `${Menudoccap}`,
thumbnail: menuimage,
mediaType:1,
mediaUrl: `${link1}`,
sourceUrl: `${linkgit}`
}}
}
AnyaPika.sendMessage(m.chat , ntus , { quoted: m })
}
break
case 'animestickermenu':{
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Anime Menu')
let teks =  `ㅤ   ࿙༺⟅∙𝑨𝒏𝒊. 𝒔𝒕𝒊. 𝑴𝒆𝒏𝒖∙⟆༻࿚

╭╼━━᚜ 𝓐𝓷𝔂𝓪 𝓱𝔂 𝓟𝓲𝓴𝓪 ᚛╾ᐧᐧᐧᐧ⳹
❤️ 𝗨𝘀𝗲𝗿 𝗻𝗮𝗺𝗲 : 
┊➥ ${pushname}
┝┅━┅━┅━┅━┅━♡
🥵 𝗢𝘄𝗻𝗲𝗿 𝗻𝗮𝗺𝗲 :
┊➥ ${global.ownername}
┝┅━┅━┅━┅━┅━♡
🎃 𝗚𝗿𝗼𝘂𝗽 :
┊➥ ${groupMetadata.subject}
╰╼━━━━━━━━━━━━╾ᐧᐧᐧᐧ⳹
╭╼━━᚜ 𝓐𝓷𝓲𝓶𝓮 𝓶𝓮𝓷𝓾 ᚛━╾ᐧᐧᐧᐧ⳹
┊
❒✗ ${prefix}animenom
❒✗ ${prefix}animeslap
❒✗ ${prefix}animespank
❒✗ ${prefix}animepat
❒✗ ${prefix}animeneko
❒✗ ${prefix}animekiss
❒✗ ${prefix}animewlp
❒✗ ${prefix}animecuddle
❒✗ ${prefix}animecry
❒✗ ${prefix}animekill
❒✗ ${prefix}animelick
❒✗ ${prefix}animebite
❒✗ ${prefix}animeyeet
❒✗ ${prefix}animebully
❒✗ ${prefix}animebonk
❒✗ ${prefix}animewink
❒✗ ${prefix}animepoke
❒✗ ${prefix}animesmile
❒✗ ${prefix}animewave
❒✗ ${prefix}animeawoo
❒✗ ${prefix}animeblush
❒✗ ${prefix}animesmug
❒✗ ${prefix}animeglomp
❒✗ ${prefix}animehappt
❒✗ ${prefix}animedance
❒✗ ${prefix}animecringe
❒✗ ${prefix}animehighfive
❒✗ ${prefix}animehandhold
❒✗ ${prefix}animemegumin
❒✗ ${prefix}smug2
┊
╰╼━━━━━━━━━━━╾ᐧᐧᐧᐧ༻` 
let buttns = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let ntus = {
image: unicorn,
jpegThumbnail: log0,
caption: teks,
footer: `${footer}\n𝗠𝘆 𝗻𝗮𝗺𝗲 : ${botname1}\n𝗠𝘆 𝘀𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} msㅤㅤㅤ`,
buttons: buttns,
headerType: 4,
contextInfo:{externalAdReply:{
title:`𝑯𝒆𝒚,\n𝑰'𝒂𝒎 ${botname2}`,
body: `${Menudoccap}`,
thumbnail: menuimage,
mediaType:1,
mediaUrl: `${link1}`,
sourceUrl: `${linkgit}`
}}
}
AnyaPika.sendMessage(m.chat , ntus , { quoted: m })
}
break
case 'stickermenu': {
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Sticker Menu')
let teks =  `ㅤㅤ࿙༺⟅∙𝑺𝒕𝒊𝒄𝒌𝒆𝒓 𝑴𝒆𝒏𝒖∙⟆༻࿚

╭╼━━᚜ 𝓐𝓷𝔂𝓪 𝓫𝔂 𝓟𝓲𝓴𝓪 ᚛╾ᐧᐧᐧᐧ⳹
❤️ 𝗨𝘀𝗲𝗿 𝗻𝗮𝗺𝗲 : 
┊➥ ${pushname}
┝┅━┅━┅━┅━┅━♡
🥵 𝗢𝘄𝗻𝗲𝗿 𝗻𝗮𝗺𝗲 :
┊➥ ${global.ownername}
┝┅━┅━┅━┅━┅━♡
🎃 𝗚𝗿𝗼𝘂𝗽 :
┊➥ ${groupMetadata.subject}
╰╼━━━━━━━━━━━━╾ᐧᐧᐧᐧ⳹
╭╼━━᚜ 𝓢𝓽𝓲𝓬𝓴𝓮𝓻 𝓶𝓮𝓷𝓾 ᚛━╾ᐧᐧᐧ⳹
┊
❒✗ ${prefix}patrick
❒✗ ${prefix}emoji
❒✗ ${prefix}emojimix
❒✗ ${prefix}attp
❒✗ ${prefix}ttp  *(text)*
❒✗ ${prefix}lovesticker
┊
╰╼━━━━━━━━━━━╾ᐧᐧᐧᐧ༻`
let buttns = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let ntus = {
image: unicorn,
jpegThumbnail: log0,
caption: teks,
footer: `${footer}\n𝗠𝘆 𝗻𝗮𝗺𝗲 : ${botname1}\n𝗠𝘆 𝘀𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} msㅤㅤㅤ`,
buttons: buttns,
headerType: 4,
contextInfo:{externalAdReply:{
title:`𝑯𝒆𝒚,\n𝑰'𝒂𝒎 ${botname2}`,
body: `${Menudoccap}`,
thumbnail: menuimage,
mediaType:1,
mediaUrl: `${link1}`,
sourceUrl: `${linkgit}`
}}
}
AnyaPika.sendMessage(m.chat , ntus , { quoted: m })
}
break
case 'reactionmenu': {
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Anime Sticker Menu')
let teks = `ㅤ  ࿙༺⟅∙𝑹𝒆𝒂𝒄𝒕𝒊𝒐𝒏 𝑴𝒆𝒏𝒖∙⟆༻࿚

╭╼━━᚜ 𝓐𝓷𝔂𝓪 𝓫𝔂 𝓟𝓲𝓴𝓪 ᚛╾ᐧᐧᐧᐧ⳹
❤️ 𝗨𝘀𝗲𝗿 𝗻𝗮𝗺𝗲 : 
┊➥ ${pushname}
┝┅━┅━┅━┅━┅━♡
🥵 𝗢𝘄𝗻𝗲𝗿 𝗻𝗮𝗺𝗲 :
┊➥ ${global.ownername}
┝┅━┅━┅━┅━┅━♡
🎃 𝗚𝗿𝗼𝘂𝗽 :
┊➥ ${groupMetadata.subject}
╰╼━━━━━━━━━━━━╾ᐧᐧᐧᐧ⳹
╭╼━━᚜ 𝓡𝓮𝓪𝓬𝓽𝓲𝓸𝓷 𝓶𝓮𝓷𝓾᚛━╾ᐧᐧᐧ⳹
┊
❒✗ ${prefix}bully
❒✗ ${prefix}cuddle
❒✗ ${prefix}cry
❒✗ ${prefix}hug
❒✗ ${prefix}awoo
❒✗ ${prefix}kiss
❒✗ ${prefix}lick
❒✗ ${prefix}pat
❒✗ ${prefix}smug
❒✗ ${prefix}bonk
❒✗ ${prefix}yeet
❒✗ ${prefix}blush
❒✗ ${prefix}smile
❒✗ ${prefix}wave
❒✗ ${prefix}highfive
❒✗ ${prefix}handhold
❒✗ ${prefix}nom
❒✗ ${prefix}glomp
❒✗ ${prefix}bite
❒✗ ${prefix}slap
❒✗ ${prefix}kick
❒✗ ${prefix}kill
❒✗ ${prefix}happy
❒✗ ${prefix}wink
❒✗ ${prefix}poke
❒✗ ${prefix}dance
❒✗ ${prefix}cringe
❒✗ ${prefix}neko
❒✗ ${prefix}gura
┊
╰╼━━━━━━━━━━━╾ᐧᐧᐧᐧ༻`
let buttns = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let ntus = {
image: unicorn,
jpegThumbnail: log0,
caption: teks,
footer: `${footer}\n𝗠𝘆 𝗻𝗮𝗺𝗲 : ${botname1}\n𝗠𝘆 𝘀𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} msㅤㅤㅤ`,
buttons: buttns,
headerType: 4,
contextInfo:{externalAdReply:{
title:`𝑯𝒆𝒚,\n𝑰'𝒂𝒎 ${botname2}`,
body: `${Menudoccap}`, 
thumbnail: menuimage,
mediaType:1,
mediaUrl: `${link1}`,
sourceUrl: `${linkgit}`
}}
}
AnyaPika.sendMessage(m.chat , ntus , { quoted: m })
}
break
case 'nsfwmenu': {
if (isBan) return reply(mess.ban)	 			
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Nsfw Menu')
let teks =  `ㅤㅤ࿙༺⟅∙𝑵𝑭𝑺𝑾 𝑴𝒆𝒏𝒖∙⟆༻࿚

╭╼━━᚜ 𝓐𝓷𝔂𝓪 𝓱𝔂 𝓟𝓲𝓴𝓪 ᚛╾ᐧᐧᐧᐧ⳹
❤️ 𝗨𝘀𝗲𝗿 𝗻𝗮𝗺𝗲 : 
┊➥ ${pushname}
┝┅━┅━┅━┅━┅━♡
🥵 𝗢𝘄𝗻𝗲𝗿 𝗻𝗮𝗺𝗲 :
┊➥ ${global.ownername}
┝┅━┅━┅━┅━┅━♡
🎃 𝗚𝗿𝗼𝘂𝗽 :
┊➥ ${groupMetadata.subject}
╰╼━━━━━━━━━━━━╾ᐧᐧᐧᐧ⳹
╭╼━━᚜ 𝓝𝓼𝓯𝔀 𝓶𝓮𝓷𝓾 ᚛━╾ᐧᐧᐧᐧ⳹
┊
❒✗ ${prefix}hentaivideo
❒✗ ${prefix}yuri
❒✗ ${prefix}masterbation 
❒✗ ${prefix}thighs
❒✗ ${prefix}pussy
❒✗ ${prefix}panties
❒✗ ${prefix}orgy
❒✗ ${prefix}ahegao
❒✗ ${prefix}ass
❒✗ ${prefix}bdsm
❒✗ ${prefix}blowjob
❒✗ ${prefix}cuckold
❒✗ ${prefix}ero
❒✗ ${prefix}gasm
❒✗ ${prefix}cum
❒✗ ${prefix}fendom
❒✗ ${prefix}foot
❒✗ ${prefix}gangbang
❒✗ ${prefix}glasses
❒✗ ${prefix}jahy
❒✗ ${prefix}trap
❒✗ ${prefix}blowjobgif
❒✗ ${prefix}spank
❒✗ ${prefix}hneko
❒✗ ${prefix}nwaifu
┊
╰╼━━━━━━━━━━━╾ᐧᐧᐧᐧ༻`
let buttns = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let ntus = {
image: fs.readFileSync('./AnyaPikaMedia/theme/Menu/Menuimg.jpg'),
jpegThumbnail: menuimage,
caption: teks,
footer: `${footer}\n𝗠𝘆 𝗻𝗮𝗺𝗲 : ${botname1}\n𝗠𝘆 𝘀𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} msㅤㅤㅤ`,
buttons: buttns,
headerType: 4,
contextInfo:{externalAdReply:{
title:`𝑯𝒆𝒚,\n𝑰'𝒂𝒎 ${botname2}`,
body: `${Menudoccap}`,
thumbnail: menuimage,
mediaType:1,
mediaUrl: `${link1}`,
sourceUrl: `${linkgit}`
}}
}
AnyaPika.sendMessage(m.chat , ntus , { quoted: m })
}
break
case 'funmenu': {
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Fun Menu')
let teks = `ㅤㅤ࿙༺⟅∙•𝑭𝒖𝒏 𝑴𝒆𝒏𝒖•∙⟆༻࿚

╭╼━━᚜ 𝓐𝓷𝔂𝓪 𝓱𝔂 𝓟𝓲𝓴𝓪 ᚛╾ᐧᐧᐧᐧ⳹
❤️ 𝗨𝘀𝗲𝗿 𝗻𝗮𝗺𝗲 : 
┊➥ ${pushname}
┝┅━┅━┅━┅━┅━♡
🥵 𝗢𝘄𝗻𝗲𝗿 𝗻𝗮𝗺𝗲 :
┊➥ ${global.ownername}
┝┅━┅━┅━┅━┅━♡
🎃 𝗚𝗿𝗼𝘂𝗽 :
┊➥ ${groupMetadata.subject}
╰╼━━━━━━━━━━━━╾ᐧᐧᐧᐧ⳹
╭╼━━᚜ 𝓕𝓾𝓷 𝓶𝓮𝓷𝓾 ᚛━╾ᐧᐧᐧᐧᐧᐧ⳹
┊
❒✗ ${prefix}rate *(Text)*
❒✗ ${prefix}wangy
❒✗ ${prefix}beautifulcheck
❒✗ ${prefix}awesomecheck
❒✗ ${prefix}prettycheck
❒✗ ${prefix}lesbiancheck
❒✗ ${prefix}gaycheck
❒✗ ${prefix}cutecheck
❒✗ ${prefix}uglycheck
❒✗ ${prefix}hornycheck
❒✗ ${prefix}charactercheck 
❒✗ ${prefix}lovelycheck
❒✗ ${prefix}murderercheck
❒✗ ${prefix}chutiyacheck 
❒✗ ${prefix}dethcheck
❒✗ ${prefix}couple
❒✗ ${prefix}mysoulmate
❒✗ ${prefix}hot
❒✗ ${prefix}sexy
❒✗ ${prefix}kind
❒✗ ${prefix}idiot
❒✗ ${prefix}handsome
❒✗ ${prefix}beutiful 
❒✗ ${prefix}cute
❒✗ ${prefix}pretty
❒✗ ${prefix}lesbian
❒✗ ${prefix}noob
❒✗ ${prefix}bastard
┊
╰╼━━━━━━━━━━━╾ᐧᐧᐧᐧ༻`
let buttns = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1},
{buttonId: `${symb}funmenu2`, buttonText: {displayText: '𝘍𝘶𝘯 2.0'}, type: 1}
]
let ntus = {
image: unicorn,
jpegThumbnail: log0,
caption: teks,
footer: `${footer}\n𝗠𝘆 𝗻𝗮𝗺𝗲 : ${botname1}\n𝗠𝘆 𝘀𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} msㅤㅤㅤ`,
buttons: buttns,
headerType: 4,
contextInfo:{externalAdReply:{
title:`𝑯𝒆𝒚,\n𝑰'𝒂𝒎 ${botname2}`,
body: `${Menudoccap}`,
thumbnail: menuimage,
mediaType:1,
mediaUrl: `${link1}`,
sourceUrl: `${linkgit}`
}}
}
AnyaPika.sendMessage(m.chat , ntus , { quoted: m })
}
break
case 'soundmenu': {
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Sound Menu')
let teks = `╔═══════➻「 𝓢𝓞𝓤𝓝𝓓 」	
╿
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍1
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍2
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍3
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍4
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍5
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍6
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍7
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍8
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍9
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍10
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍11
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍12
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍13
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍14
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍15
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍16
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍17
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍18
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍19
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍20
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍21
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍22
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍23
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍24
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍25
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍26
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍27
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍28
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍29
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍30
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍31
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍32
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍33
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍34
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍35
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍36
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍37
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍38
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍39
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍40
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍41
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍42
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍43
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍44
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍45
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍46
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍47
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍48
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍49
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍50
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍51
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍52
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍53
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍54
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍55
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍56
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍57
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍58
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍59
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍60
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍61
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍62
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍63
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍64
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍65
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍66
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍67
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍68
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍69
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍70
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍71
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍72
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍73
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍74
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍75
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍76
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍77
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍78
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍79
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍80
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍81
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍82
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍83
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍84
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍85
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍86
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍87
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍88
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍89
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍90
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍91
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍92
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍93
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍94
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍95
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍96
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍97
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍98
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍99
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍100
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍101
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍102
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍103
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍104
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍105
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍106
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍107
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍108
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍109
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍110
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍111
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍112
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍113
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍114
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍115
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍116
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍117
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍118
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍119
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍120
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍121
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍122
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍123
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍124
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍125
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍126
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍127
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍128
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍129
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍130
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍131
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍132
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍133
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍134
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍135
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍136
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍137
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍138
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍139
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍140
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍141
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍142
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍143
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍144
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍145
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍146
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍147
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍148
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍149
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍150
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍151
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍152
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍153
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍154
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍155
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍156
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍157
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍158
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍159
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍160
╠🔥${prefix}𝚂𝚘𝚞𝚗𝚍161
╽
╚┅┅┅┅┅┅┅༻` 
let buttns = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let ntus = {
image: unicorn,
jpegThumbnail: log0,
caption: teks,
footer: `${footer}\n𝗠𝘆 𝗻𝗮𝗺𝗲 : ${botname1}\n𝗠𝘆 𝘀𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} msㅤㅤㅤ`,
buttons: buttns,
headerType: 4,
contextInfo:{externalAdReply:{
title:`𝑯𝒆𝒚,\n𝑰'𝒂𝒎 ${botname2}`,
body: `${Menudoccap}`,
thumbnail: menuimage,
mediaType:1,
mediaUrl: `${link1}`,
sourceUrl: `${linkgit}`
}}
}
AnyaPika.sendMessage(m.chat , ntus , { quoted: m })
}
break
case 'gamemenu': {
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Game Menu')
let teks =  `ㅤㅤ࿙༺⟅∙𝑮𝒂𝒎𝒆 𝑴𝒆𝒏𝒖∙⟆༻࿚

╭╼━━᚜ 𝓐𝓷𝔂𝓪 𝓱𝔂 𝓟𝓲𝓴𝓪 ᚛╾ᐧᐧᐧᐧ⳹
❤️ 𝗨𝘀𝗲𝗿 𝗻𝗮𝗺𝗲 : 
┊➥ ${pushname}
┝┅━┅━┅━┅━┅━♡
🥵 𝗢𝘄𝗻𝗲𝗿 𝗻𝗮𝗺𝗲 :
┊➥ ${global.ownername}
┝┅━┅━┅━┅━┅━♡
🎃 𝗚𝗿𝗼𝘂𝗽 :
┊➥ ${groupMetadata.subject}
╰╼━━━━━━━━━━━━╾ᐧᐧᐧᐧ⳹
╭╼━━᚜ 𝓖𝓪𝓶𝓮 𝓶𝓮𝓷𝓾 ᚛━╾ᐧᐧᐧᐧ⳹
┊
❒✗ ${prefix}truth
❒✗ ${prefix}dare
❒✗ ${prefix}tictactoe
❒✗ ${prefix}delttt
❒✗ ${prefix}guess  *(𝙾𝚙𝚝𝚒𝚘𝚗)*
❒✗ ${prefix}math
┊
╰╼━━━━━━━━━━━╾ᐧᐧᐧᐧ༻` 
let buttns = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let ntus = {
image: unicorn,
jpegThumbnail: log0,
caption: teks,
footer: `${footer}\n𝗠𝘆 𝗻𝗮𝗺𝗲 : ${botname1}\n𝗠𝘆 𝘀𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} msㅤㅤㅤ`,
buttons: buttns,
headerType: 4,
contextInfo:{externalAdReply:{
title:`𝑯𝒆𝒚,\n𝑰'𝒂𝒎 ${botname2}`,
body: `${Menudoccap}`,
thumbnail: menuimage,
mediaType:1,
mediaUrl: `${link1}`,
sourceUrl: `${linkgit}`
}}
}
AnyaPika.sendMessage(m.chat , ntus , { quoted: m })
}
break
case 'anonymousmenu':{
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Anonymous Menu')
let teks = `ㅤㅤ࿙༺⟅∙𝑨𝒏𝒐𝒏𝒚𝒎𝒐𝒖𝒔 𝑴𝒆𝒏𝒖∙⟆༻࿚

╭╼━━᚜ 𝓐𝓷𝔂𝓪 𝓱𝔂 𝓟𝓲𝓴𝓪 ᚛╾ᐧᐧᐧᐧ⳹
❤️ 𝗨𝘀𝗲𝗿 𝗻𝗮𝗺𝗲 : 
┊➥ ${pushname}
┝┅━┅━┅━┅━┅━♡
🥵 𝗢𝘄𝗻𝗲𝗿 𝗻𝗮𝗺𝗲 :
┊➥ ${global.ownername}
┝┅━┅━┅━┅━┅━♡
🎃 𝗚𝗿𝗼𝘂𝗽 :
┊➥ ${groupMetadata.subject}
╰╼━━━━━━━━━━━━╾ᐧᐧᐧᐧ⳹
╭╼━᚜ 𝓐𝓷𝓸𝓷𝔂𝓶𝓸𝓾𝓼 𝓶𝓮𝓷𝓾 ᚛╾ᐧᐧ⳹
┊
❒✗ ${prefix}anonymous 
❒✗ ${prefix}start
❒✗ ${prefix}next
❒✗ ${prefix}leave
┊
╰╼━━━━━━━━━━━╾ᐧᐧᐧᐧ༻` 
let buttns = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let ntus = {
image: unicorn,
jpegThumbnail: log0,
caption: teks,
footer: `${footer}\n𝗠𝘆 𝗻𝗮𝗺𝗲 : ${botname1}\n𝗠𝘆 𝘀𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} msㅤㅤㅤ`,
buttons: buttns,
headerType: 4,
contextInfo:{externalAdReply:{
title:`𝑯𝒆𝒚,\n𝑰'𝒂𝒎 ${botname2}`,
body: `${Menudoccap}`,
thumbnail: menuimage,
mediaType:1,
mediaUrl: `${link1}`,
sourceUrl: `${linkgit}`
}}
}
AnyaPika.sendMessage(m.chat , ntus , { quoted: m })
}
break
case 'toolmenu': {
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Tool Menu')
let teks = `ㅤㅤ࿙༺⟅∙𝑻𝒐𝒐𝒍 𝑴𝒆𝒏𝒖∙⟆༻࿚

╭╼━━᚜ 𝓐𝓷𝔂𝓪 𝓱𝔂 𝓟𝓲𝓴𝓪 ᚛╾ᐧᐧᐧᐧ⳹
❤️ 𝗨𝘀𝗲𝗿 𝗻𝗮𝗺𝗲 : 
┊➥ ${pushname}
┝┅━┅━┅━┅━┅━♡
🥵 𝗢𝘄𝗻𝗲𝗿 𝗻𝗮𝗺𝗲 :
┊➥ ${global.ownername}
┝┅━┅━┅━┅━┅━♡
🎃 𝗚𝗿𝗼𝘂𝗽 :
┊➥ ${groupMetadata.subject}
╰╼━━━━━━━━━━━━╾ᐧᐧᐧᐧ⳹
╭╼━━᚜ 𝓣𝓸𝓸𝓵 𝓶𝓮𝓷𝓾 ᚛━╾ᐧᐧᐧᐧ⳹
┊
❒✗ ${prefix}translate
❒✗ ${prefix}fliptext 
❒✗ ${prefix}toletter  *(number)*
┊
╰╼━━━━━━━━━━━╾ᐧᐧᐧᐧ༻`
let buttns = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let ntus = {
image: unicorn,
jpegThumbnail: log0,
caption: teks,
footer: `${footer}\n𝗠𝘆 𝗻𝗮𝗺𝗲 : ${botname1}\n𝗠𝘆 𝘀𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} msㅤㅤㅤ`,
buttons: buttns,
headerType: 4,
contextInfo:{externalAdReply:{
title:`𝑯𝒆𝒚,\n𝑰'𝒂𝒎 ${botname2}`,
body: `${Menudoccap}`,
thumbnail: menuimage,
mediaType:1,
mediaUrl: `${link1}`,
sourceUrl: `${linkgit}`
}}
}
AnyaPika.sendMessage(m.chat , ntus , { quoted: m })
}
break
case 'audiomenu': {
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Database Menu')
let teks = `ㅤㅤ࿙༺⟅∙𝑨𝒖𝒅𝒊𝒐 𝑴𝒆𝒏𝒖∙⟆༻࿚

╭╼━━᚜ 𝓐𝓷𝔂𝓪 𝓫𝔂 𝓟𝓲𝓴𝓪 ᚛╾ᐧᐧᐧᐧ⳹
❤️ 𝗨𝘀𝗲𝗿 𝗻𝗮𝗺𝗲 : 
┊➥ ${pushname}
┝┅━┅━┅━┅━┅━♡
🥵 𝗢𝘄𝗻𝗲𝗿 𝗻𝗮𝗺𝗲 :
┊➥ ${global.ownername}
┝┅━┅━┅━┅━┅━♡
🎃 𝗚𝗿𝗼𝘂𝗽 :
┊➥ ${groupMetadata.subject}
╰╼━━━━━━━━━━━━╾ᐧᐧᐧᐧ⳹
╭╼━━᚜ 𝓐𝓾𝓭𝓲𝓸 𝓶𝓮𝓷𝓾 ᚛━╾ᐧᐧᐧᐧ⳹
┊
❒✗ ${prefix}volume
❒✗ ${prefix}tempo
❒✗ ${prefix}bass
❒✗ ${prefix}blown
❒✗ ${prefix}deep
❒✗ ${prefix}earrape
❒✗ ${prefix}fast
❒✗ ${prefix}fat
❒✗ ${prefix}nightcore
❒✗ ${prefix}reverse
❒✗ ${prefix}robot
❒✗ ${prefix}slow
❒✗ ${prefix}squirrel
┊
╰╼━━━━━━━━━━━╾ᐧᐧᐧᐧ༻`
let buttns = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let ntus = {
image: unicorn,
jpegThumbnail: log0,
caption: teks,
footer: `${footer}\n𝗠𝘆 𝗻𝗮𝗺𝗲 : ${botname1}\n𝗠𝘆 𝘀𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} msㅤㅤㅤ`,
buttons: buttns,
headerType: 4,
contextInfo:{externalAdReply:{
title:`𝑯𝒆𝒚,\n𝑰'𝒂𝒎 ${botname2}`,
body: `${Menudoccap}`,
thumbnail: menuimage,
mediaType:1,
mediaUrl: `${link1}`,
sourceUrl: `${linkgit}`
}}
}
AnyaPika.sendMessage(m.chat , ntus , { quoted: m })
}
break
case 'imagemenu': {
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Indo Menu')
let teks =  `ㅤㅤ࿙༺⟅∙𝑰𝒎𝒂𝒈𝒆 𝑴𝒆𝒏𝒖∙⟆༻࿚

╭╼━━᚜ 𝓐𝓷𝔂𝓪 𝓫𝔂 𝓟𝓲𝓴𝓪 ᚛╾ᐧᐧᐧᐧ⳹
❤️ 𝗨𝘀𝗲𝗿 𝗻𝗮𝗺𝗲 : 
┊➥ ${pushname}
┝┅━┅━┅━┅━┅━♡
🥵 𝗢𝘄𝗻𝗲𝗿 𝗻𝗮𝗺𝗲 :
┊➥ ${global.ownername}
┝┅━┅━┅━┅━┅━♡
🎃 𝗚𝗿𝗼𝘂𝗽 :
┊➥ ${groupMetadata.subject}
╰╼━━━━━━━━━━━━╾ᐧᐧᐧᐧ⳹
╭╼━━᚜ 𝓘𝓶𝓪𝓰𝓮 𝓶𝓮𝓷𝓾 ᚛━╾ᐧᐧᐧᐧ⳹
┊
❒✗ ${prefix}coffee 
❒✗ ${prefix}Bts
❒✗ ${prefix}woof
❒✗ ${prefix}meow
❒✗ ${prefix}lizard
❒✗ ${prefix}wallneon
❒✗ ${prefix}wallpubg
❒✗ ${prefix}wallml
❒✗ ${prefix}wallrandom
❒✗ ${prefix}wallcode
❒✗ ${prefix}animewall
❒✗ ${prefix}animewall2
┊
╰╼━━━━━━━━━━━╾ᐧᐧᐧᐧ༻`
let buttns = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let ntus = {
image: unicorn,
jpegThumbnail: log0,
caption: teks,
footer: `${footer}\n𝗠𝘆 𝗻𝗮𝗺𝗲 : ${botname1}\n𝗠𝘆 𝘀𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} msㅤㅤㅤ`,
buttons: buttns,
headerType: 4,
contextInfo:{externalAdReply:{
title:`𝑯𝒆𝒚,\n𝑰'𝒂𝒎 ${botname2}`,
body: `${Menudoccap}`,
thumbnail: menuimage,
mediaType:1,
mediaUrl: `${link1}`,
sourceUrl: `${linkgit}`
}}
}
AnyaPika.sendMessage(m.chat , ntus , { quoted: m })
}
break
case 'weebmenu': {
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Indo Horoscope Menu')
let teks =  `ㅤㅤ࿙༺⟅∙𝑾𝒆𝒆𝒃 𝑴𝒆𝒏𝒖∙⟆༻࿚

╭╼━━᚜ 𝓐𝓷𝔂𝓪 𝓫𝔂 𝓟𝓲𝓴𝓪 ᚛╾ᐧᐧᐧᐧ⳹
❤️ 𝗨𝘀𝗲𝗿 𝗻𝗮𝗺𝗲 : 
┊➥ ${pushname}
┝┅━┅━┅━┅━┅━♡
🥵 𝗢𝘄𝗻𝗲𝗿 𝗻𝗮𝗺𝗲 :
┊➥ ${global.ownername}
┝┅━┅━┅━┅━┅━♡
🎃 𝗚𝗿𝗼𝘂𝗽 :
┊➥ ${groupMetadata.subject}
╰╼━━━━━━━━━━━━╾ᐧᐧᐧᐧ⳹
╭╼━━᚜ 𝓦𝓮𝓮𝓫 𝓶𝓮𝓷𝓾 ᚛━╾ᐧᐧᐧᐧᐧ⳹
┊
❒✗ ${prefix}naruto
❒✗ ${prefix}yaoi
❒✗ ${prefix}neko2
❒✗ ${prefix}waifu
❒✗ ${prefix}waifu2
❒✗ ${prefix}awoo2
❒✗ ${prefix}shinobu
❒✗ ${prefix}waifu-face
❒✗ ${prefix}foxgirl
❒✗ ${prefix}megumin2
❒✗ ${prefix}loli
❒✗ ${prefix}8ball
❒✗ ${prefix}goose
❒✗ ${prefix}avatar
❒✗ ${prefix}tickle
❒✗ ${prefix}gecg
❒✗ ${prefix}feed
┊
╰╼━━━━━━━━━━━╾ᐧᐧᐧᐧ༻` 
let buttns = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let ntus = {
image: unicorn,
jpegThumbnail: log0,
caption: teks,
footer: `${footer}\n𝗠𝘆 𝗻𝗮𝗺𝗲 : ${botname1}\n𝗠𝘆 𝘀𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} msㅤㅤㅤ`,
buttons: buttns,
headerType: 4,
contextInfo:{externalAdReply:{
title:`𝑯𝒆𝒚,\n𝑰'𝒂𝒎 ${botname2}`,
body: `${Menudoccap}`,
thumbnail: menuimage,
mediaType:1,
mediaUrl: `${link1}`,
sourceUrl: `${linkgit}`
}}
}
AnyaPika.sendMessage(m.chat , ntus , { quoted: m })
}
break
case 'funmenu2': {
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
var unicorn = await getBuffer(picak+'Other Menu')
let teks =  `ㅤㅤ࿙༺⟅∙𝑶𝒘𝒏𝒆𝒓 𝑴𝒆𝒏𝒖∙⟆༻࿚

╭╼━━᚜ 𝓐𝓷𝔂𝓪 𝓱𝔂 𝓟𝓲𝓴𝓪 ᚛╾ᐧᐧᐧᐧ⳹
❤️ 𝗨𝘀𝗲𝗿 𝗻𝗮𝗺𝗲 : 
┊➥ ${pushname}
┝┅━┅━┅━┅━┅━♡
🥵 𝗢𝘄𝗻𝗲𝗿 𝗻𝗮𝗺𝗲 :
┊➥ ${global.ownername}
┝┅━┅━┅━┅━┅━♡
🎃 𝗚𝗿𝗼𝘂𝗽 :
┊➥ ${groupMetadata.subject}
╰╼━━━━━━━━━━━━╾ᐧᐧᐧᐧ⳹
╭╼━━᚜ 𝓞𝔀𝓷𝓮𝓻 𝓶𝓮𝓷𝓾 ᚛━╾ᐧᐧᐧᐧ⳹
┊
❒✗ ${prefix}self
❒✗ ${prefix}public
❒✗ ${prefix}antitag
❒✗ ${prefix}RentBot
❒✗ ${prefix}Rentlist
❒✗ ${prefix}ban
❒✗ ${prefix}banchat
❒✗ ${prefix}deletethis
❒✗ ${prefix}join
❒✗ ${prefix}leavegc
❒✗ ${prefix}setbio
❒✗ ${prefix}bcgroup
❒✗ ${prefix}bcall
❒✗ ${prefix}bcimage
❒✗ ${prefix}bcvideo
❒✗ ${prefix}bcaudio
❒✗ ${prefix}bclocation
❒✗ ${prefix}setppbot
❒✗ ${prefix}setexif
❒✗ ${prefix}block
❒✗ ${prefix}unblock
❒✗ ${prefix}coowner
┊
╰╼━━━━━━━━━━━╾ᐧᐧᐧᐧ༻` 
let buttns = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let ntus = {
image: unicorn,
jpegThumbnail: log0,
caption: teks,
footer: `${footer}\n𝗠𝘆 𝗻𝗮𝗺𝗲 : ${botname1}\n𝗠𝘆 𝘀𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} msㅤㅤㅤ`,
buttons: buttns,
headerType: 4,
contextInfo:{externalAdReply:{
title:`𝑯𝒆𝒚,\n𝑰'𝒂𝒎 ${botname2}`,
body: `${Menudoccap}`,
thumbnail: menuimage,
mediaType:1,
mediaUrl: `${link1}`,
sourceUrl: `${linkgit}`
}}
}
AnyaPika.sendMessage(m.chat , ntus , { quoted: m })
}
break
case 'tqtt': {
if (isBan) return reply(mess.ban)
if (isBanChat) return reply(mess.banChat)
let teks = `╔══𓊈𝓓𝓔𝓥𝓔𝓛𝓞𝓟𝓔𝓡 𝓞𝓕 𝓣𝓔𝓐𝓜-𝓧_FIRE𓊉══╗\n╠𝐌𝐫.𝐍𝐞𝐱𝐮𝐬(𝐚𝐲𝐮𝐬𝐡)🔥: 𝐭𝐡𝐞 𝐦𝐚𝐢𝐧 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐞𝐫 𝐚𝐧𝐝 𝐭𝐡𝐞 𝐥𝐞𝐚𝐝𝐞𝐫 𝐨𝐟 𝐭𝐞𝐚𝐦-𝐗_𝐅𝐈𝐑𝐄\n╠𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 :𓆩😈𓆪  https://wa.me/+918130784851𓆩😎𓆪 \n╠𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌 :⧼ ᥬ🥰᭄ 𝐃𝐎𝐍𝐓 𝐅𝐎𝐑𝐆𝐄𝐓 𝐓𝐎 𝐅𝐎𝐋𝐋𝐎𝐖 ⧽ https://www.instagram.com/at.__010/ \n ╠𝐆𝐈𝐓𝐇𝐔𝐁 : https://github.com/NEXUSAT12 \n ╔═╾ 𝟐𝐧𝐝 𝐃𝐄𝐕𝐄𝐋𝐎𝐏𝐄𝐑 ╼═╗\n╠𝐌𝐫.𝐏𝐈𝐊𝐀(𝐀𝐑𝐈𝐅)✨ : 𝐇𝐄𝐋𝐏𝐄𝐃 𝐈𝐍 𝐅𝐎𝐔𝐍𝐃𝐈𝐍𝐆 𝐓𝐇𝐄 𝐀𝐏𝐈 𝐀𝐍𝐃 𝐃𝐄𝐒𝐒𝐈𝐆𝐍𝐈𝐍𝐆 𝐎𝐅 𝐁𝐎𝐓 \n╠𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 : https://wa.me/+918811074852\n╠𝐆𝐈𝐓𝐇𝐔𝐁: https://github.com/Pika4O4`
let buttns = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let ntus = {
image: unicorn,
jpegThumbnail: log0,
caption: teks,
footer: `${footer}\n𝗠𝘆 𝗻𝗮𝗺𝗲 : ${botname1}\n𝗠𝘆 𝘀𝗽𝗲𝗲𝗱 : ${latensie.toFixed(4)} msㅤㅤㅤ`,
buttons: buttns,
headerType: 4,
contextInfo:{externalAdReply:{
title:`𝑯𝒆𝒚,\n𝑰'𝒂𝒎 ${botname2}`,
body: `${Menudoccap}`,  
thumbnail: menuimage,
mediaType:1,
mediaUrl: `${link1}`,
sourceUrl: `${linkgit}`
}}
}
AnyaPika.sendMessage(m.chat , ntus , { quoted: m })
}
break	
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            reply(bang)
                    }
                    try {
                        reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await reply(evaled)
                    } catch (err) {
                        await reply(String(err))
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return reply(err)
                        if (stdout) return reply(stdout)
                    })
                }
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
AnyaPika.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}
       } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
