import fetch from 'node-fetch'
import moment from 'moment-timezone'
import axios from 'axios'
import fs from 'fs'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto }  = (await import(global.baileys))

var handler = m => m
handler.all = async function (m) {

//------------------------------------------------

global.Fakechannel = { contextInfo: { mentionedJid: [m.sender], isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363192435027853@newsletter', newsletterName: "『✯ Team Comunity Natsuki 』", serverMessageId: -1 }, forwardingScore: 999, externalAdReply: { title: gt, body: wm, thumbnailUrl: fs.readFileSync('./media/menus/Menu3.jpg'), sourceUrl: md, mediaType: 1, renderLargerThumbnail: false
}}}, { quoted: m }

//--------------------------------------------------
var canal = [
{ link: canalofc, id: "120363192435027853@newsletter", name: "『✯ Team Comunity Natsuki 』" }]
var channelsLPD = canal

global.channelWa = { contextInfo: { mentionedJid: null, forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelsLPD.id, serverMessageId: '', newsletterName: channelsLPD.name }, externalAdReply: { title: wm, body: gt, mediaType: 1, renderLargerThumbnail: false, previewType: `PHOTO`, thumbnailUrl: fantasyImg.getRandom(), thumbnail: imagen1, sourceUrl: canalofc }}}, { quoted: m }

}
export default handler
