


const config = require('../config')
const os = require('os')
const {cmd , commands} = require('../command')
cmd({
    pattern: "menu2",
    react: "👾",
    desc: "get cmd list",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
group: '',
fun: '',
ai: '',
anime: '',
owner: '',
hentai: '',
tools: '',
logo: '',
utility: '',
other: '',
misc: '',
fun_extra: '',
privacy: '',
settings: '',
img_edit: '',
convert: '',
search: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `*⁠☞ * ${commands[i].pattern}\n`;
 }
}

let madeMenu = `*╭─────────────────❒⁠⁠⁠⁠*

 ╭───────────────❒
*│  👑 Owner : *${config.OWNER_NAME}*
 │  🤖 Baileys : *Multi Device*
┃│  💻 Type : *NodeJs*
┃│  🚀 Platform : *${os.platform()}*
┃│  ⚙️ Mode : *[${config.MODE}]*
┃│  🔣 Prefix : *[${config.PREFIX}]*
 │  😐 Version : *1.0.1 Bᴇᴛᴀ*
*┕───────────────❒*
⇆ ʜɪ ᴛʜᴇʀᴇ, *${pushname}* ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ x-ʙᴏᴛ-ᴍᴅ ғᴜʟʟ ᴄᴍᴅ ʟɪsᴛ, ᴍᴏʀᴇ ᴄᴍᴅs ᴄᴏᴍɪɴɢ sᴏᴏɴ😊 ⇆

 
*┕─────────────────❒*

┏━━━━━━━━━━━━━━━━━━━━
  *x-ʙᴏᴛ-ᴍᴅ ғᴜʟʟ ᴄᴏᴍᴍᴀɴᴅ ʟɪsᴛ*
┗━━━━━━━━━━━━━━━━━━━━

*ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴅᴀᴠɪᴅx*


*╭───────────────❒⁠⁠⁠⁠*
 │ *Mek-d1/X-BOT-MD*
*┕───────────────❒*

*╭───────────────❒⁠⁠⁠⁠*
*│* *☞ ᴀɪ ᴄᴏᴍᴍᴀɴᴅs ☜⁠ *
*┕───────────────❒*
*╭──────────●●►*
${menu.ai}
*╰──────────●●►*

*╭───────────────❒⁠⁠⁠⁠*
*│* *☞ ғᴜɴ ᴄᴏᴍᴍᴀɴᴅs ☜⁠ *
*┕───────────────❒*
*╭──────────●●►*
${menu.fun}
*╰──────────●●►*

*╭───────────────❒⁠⁠⁠⁠*
*│* *☞ ᴀɴɪᴍᴇ ᴄᴏᴍᴍᴀɴᴅs ☜⁠ *
*┕───────────────❒*
*╭──────────●●►*
${menu.anime}
*╰──────────●●►*

*╭───────────────❒⁠⁠⁠⁠*
*│* *☞ ᴏᴛʜᴇʀ ᴄᴏᴍᴍᴀɴᴅs ☜⁠ *
*┕───────────────❒*
*╭──────────●●►*
${menu.other}
*╰──────────●●►*

*╭───────────────❒⁠⁠⁠⁠*
*│* *☞ ᴜᴛɪʟɪᴛʏ ᴄᴏᴍᴍᴀɴᴅs ☜⁠ *
*┕───────────────❒*
*╭──────────●●►*
${menu.utility}
*╰──────────●●►*

*╭───────────────❒⁠⁠⁠⁠*
*│* *☞ ᴅᴏᴡɴʟᴏᴀᴅ ᴄᴏᴍᴍᴀɴᴅs ☜⁠ *
*┕───────────────❒*
*╭──────────●●►*
${menu.download}
*╰──────────●●►*

*╭───────────────❒⁠⁠⁠⁠*
*│* *☞ sᴇᴛᴛɪɴɢs ᴄᴏᴍᴍᴀɴᴅs ☜⁠ *
*┕───────────────❒*
*╭──────────●●►*
${menu.settings}
*╰──────────●●►*

*╭───────────────❒⁠⁠⁠⁠*
*│* *☞ ᴘʀɪᴠᴀᴄʏ ᴄᴏᴍᴍᴀɴᴅs ☜⁠ *
*┕───────────────❒*
*╭──────────●●►*
${menu.privacy}
*╰──────────●●►*

*╭───────────────❒⁠⁠⁠⁠*
*│* *☞ ғᴜɴ-ᴇxᴛʀᴀ ᴄᴏᴍᴍᴀɴᴅs ☜⁠ *
*┕───────────────❒*
*╭──────────●●►*
${menu.fun_extra}
*╰──────────●●►*

*╭───────────────❒⁠⁠⁠⁠*
*│* *☞ ᴍᴀɪɴ ᴄᴏᴍᴍᴀɴᴅs ☜⁠ *
*┕───────────────❒*
*╭──────────●●►*
${menu.main}
*╰──────────●●►*

*╭───────────────❒⁠⁠⁠⁠*
*│* *☞ ɢʀᴏᴜᴘ ᴄᴏᴍᴍᴀɴᴅs ☜⁠ *
*┕───────────────❒*
*╭──────────●●►*
${menu.group}
*╰──────────●●►*

*╭───────────────❒⁠⁠⁠⁠*
*│* *☞ ʜᴇɴᴛᴀɪ ᴄᴏᴍᴍᴀɴᴅs ☜⁠ *
*┕───────────────❒*
*╭──────────●●►*
${menu.hentai}
*╰──────────●●►*

*╭───────────────❒⁠⁠⁠⁠*
*│* *☞ ᴍɪsᴄ ᴄᴏᴍᴍᴀɴᴅs ☜⁠ *
*┕───────────────❒*
*╭──────────●●►*
${menu.misc}
*╰──────────●●►*

*╭───────────────❒⁠⁠⁠⁠*
*│* *☞ 📸🥷🏾 ᴄᴏᴍᴍᴀɴᴅs ☜⁠ *
*┕───────────────❒*
*╭──────────●●►*
${menu.img_edit}
*╰──────────●●►*

*╭───────────────❒⁠⁠⁠⁠*
*│* *☞ ᴛᴏᴏʟs ᴄᴏᴍᴍᴀɴᴅs ☜⁠ *
*┕───────────────❒*
*╭──────────●●►*
${menu.tools}
*╰──────────●●►*

*╭───────────────❒⁠⁠⁠⁠*
*│* *☞ (⁠｡⁠◕⁠‿⁠◕⁠｡⁠)⁠➜ ᴄᴏᴍᴍᴀɴᴅs ☜⁠ *
*┕───────────────❒*
*╭──────────●●►*
${menu.logo}
*╰──────────●●►*

*╭───────────────❒⁠⁠⁠⁠*
*│* *☞ ᴏᴡɴᴇʀ ᴄᴏᴍᴍᴀɴᴅsb☜⁠ *
*┕───────────────❒*
*╭──────────●●►*
${menu.owner}
*╰──────────●●►*

*╭───────────────❒⁠⁠⁠⁠*
*│* *☞ ᴄᴏɴᴠᴇʀᴛ ᴄᴏᴍᴍᴀɴᴅs ☜⁠ *
*┕───────────────❒*
*╭──────────●●►*
${menu.convert}
*╰──────────●●►*

*╭─────────────────❒⁠⁠⁠⁠*
*│* *☞ sᴇᴀʀᴄʜ ᴄᴏᴍᴍᴀɴᴅs ☜⁠ *
*┕─────────────────❒*
*╭──────────●●►*
${menu.search}
*╰──────────●●►*

*❒⁠⁠⁠⁠▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭❒*⁠⁠⁠⁠

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀᴠɪᴅx*
`

await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/06cgye.jpg` },
                caption: madeMenu},
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/1ch2kj.mp4' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

