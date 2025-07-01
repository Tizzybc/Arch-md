/*
 * Base By Ednut
 * Created On 11/10/2024
 * Contact Me on wa.me/2348102487241
*/

const chalk = require("chalk")
const fs = require("fs")
require('dotenv').config(); 

//================= { SETTINGS } =================\\
global.prefix = (process.env.PREFIX || ".").trim().split(/\s+/); // your desired prefix symbol only
global.owner = process.env.OWNER_NUMBER || "23341755459"; // owner number , for multiple number
global.sudo = process.env.SUDO  || "";
global.ownername = process.env.OWNER_NAME || "Ednut"; //set bot owner name here 
global.botname = process.env.BOT_NAME || "null"
global.author = process.env.AUTHOR  || "Ednut";
global.packname = process.env.PACK_NAME  || "Arch Md ²⁵";
global.session = process.env.SESSION_ID || "Arch_d9b8c60c1a8a7eba898dd97094919a0a"
global.timezone = process.env.TIME_ZONE || "Africa/Lagos";
global.simbol = process.env.SYMBOL || '♘';
global.thumb = process.env.THUMB || "https://files.catbox.moe/bfzvlr.jpg,https://files.catbox.moe/n7wo5h.jpg,https://files.catbox.moe/sidp03.jpg,https://files.catbox.moe/yvb0et.jpg,https://files.catbox.moe/vu2qgl.jpg,https://files.catbox.moe/5rfbw9.jpg,https://files.catbox.moe/5hpljo.jpg,https://files.catbox.moe/o5hve8.jpg,https://files.catbox.moe/7383y9.jpg"
global.footer = process.env.FOOTER || '';
global.warn = process.env.WARN || '4'
global.menutype = process.env.MENU_TYPE || ''
global.scan = 'https://arch.ednut.xyz/'


//======= Don't touch =======\\
global.msg = {
    succes: 'Success',
    owner: 'This feature could be used by owner only',
	admin: 'This feature could be used by group admin only',
	BotAdmin: 'This feature could be used when the bot is an admin only',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature could be used by bot only',
    wait: 'processing...',
    ban: 'Sorry you have been banned 🚶from using command contact owner to unban ❌',
    baileys: 'Sorry for the inconvenience due to the new Baileys update you can only use this command in private chat',
    gcban: 'sorry this group has been banned from using bot commands'
    }
//==========================
