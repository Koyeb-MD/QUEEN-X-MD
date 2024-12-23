const fs = require("fs");
require("dotenv").config();

module.exports = {
  //==========================================- MAIN - CONFIGS -==================================================================
  SESSION_ID: process.env.SESSION_ID || "2JlwmATD#zLegNqDof9o5a9R08pD-_eaz35j3zTtGQaV_BNEuhOY",
  // ADD Your Session Id 
  MONGODB: process.env.MONGODB || "mongodb://mongo:JtVzjswyrKOoJqkDCqukovKOIIWzMHwh@junction.proxy.rlwy.net:11700",
    // ADD Your MongoDB Database URL
  PREFIX: process.env.PREFIX || ".",
  // Add Your Custom Prefix 
  mode: process.env.mode || "public",
  // Add Your Bot Mode 
  // private = Only Working For Owner Number
  // public = AnyOne Working
  // inbox = Only Working  Inbox
  // groups = only working in group
  OWNER_NUMBER: process.env.OWNER_NUMBER || "94771098429",
  //========================================- OTHER - CONFIGS -=====================================================================
  AUTO_VOICE: process.env.AUTO_VOICE || "true",
  ANTI_BAD_WORDS_ENABLED: process.env.ANTI_BAD_WORDS_ENABLED || "true",
  AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
  AUTO_READ_CMD: process.env.AUTO_READ_CMD || "true",
  ANTI_BAD_WORDS: (process.env.ANTI_BAD_WORDS || "pakayo,huththo").split(','),
  ANTI_LINK: process.env.ANTILINK || "true",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
  ALWAYS_TYPING: process.env.ALWAYS_TYPING || "true",
  ALWAYS_RECORDING: process.env.ALWAYS_RECORDING || "true",
  ANTI_BOT: process.env.ANTI_BOT || "true",
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  packname: process.env.packname || "SAHAS TECH",
  author: process.env.author || "SAHAS TECH",
  //==========================================- API-CONFIGS -==========================================================
  OPENWEATHER_API_KEY: process.env.OPENWEATHER_API_KEY || "2d61a72574c11c4f36173b627f8cb177", //openweathermap.org
  ELEVENLABS_API_KEY: process.env.ELEVENLABS_API_KEY || "sk_6438bcc100d96458f8de0602aec662f4ba14b905fd090ad3", //elevenlabs.io
  SHODAN_API: process.env.SHODAN_API || "cbCkidr6qd7AFVaYs56MuCouGfM8gFki", //developer.shodan.io
  PEXELS_API_KEY: process.env.PEXELS_API_KEY || "39WCzaHAX939xiH22NCddGGvzp7cgbu1VVjeYUaZXyHUaWlL1LFcVFxH", // pexels.com
  OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
  PIXABAY_API_KEY: process.env.PIXABAY_API_KEY || "23378594-7bd620160396da6e8d2ed4d53", // pixabay.com
  ZIPCODEBASE_API_KEY: process.env.ZIPCODEBASE_API_KEY || "0f94a5f0-6ea4-11ef-81da-579be4fb031c", // zipcodebase.com
  GOOGLE_API_KEY: process.env.GOOGLE_API_KEY || "AIzaSyD93IeJsouK51zjKgyHAwBIAlqr-a8mnME", 
  GOOGLE_CX: process.env.GOOGLE_CX || "AIzaSyD93IeJsouK51zjKgyHAwBIAlqr-a8mnME", 
  PASTEBIN_API_KEY: process.env.PASTEBIN_API_KEY || "uh8QvO6vQJGtIug9WvjdTAPx_ZAFJAxn",


//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------

  
  START_MSG: process.env.START_MSG || `🚀 *_QUEEN-X-MD Connected Successfully!_* ✅ 

--- *👨‍💻🎉 _Welcome to QUEEN-X-MD!_* 🎉💗 

*🔹 OWNER:* 94771098429

_Thank you for using_ *👨‍💻QUEEN-X-MD💗.*
_We're here to make your experience enjoyable and seamless._
_If you need any help or have questions, don't hesitate to ask._ 🌝💗

*🖇️Join My WhatsApp Channel✓💗 - :* https://chat.whatsapp.com/IzbIrQ9bl858zCGxIZzFq4

*🖇️Subscribe My Youtube Channel✓💗 - :* https://www.youtube.com/@srilanka-no1-Awm-ff

*🖇️Fork & Star My Repo✓💗 - :* https://github.com/Koyeb-MD/QUEEN-X-MD

*🖇️Follow My Github Account✓💗 - :* https://github.com/Koyeb-MD

_*👨‍💻 Enjoy your time with us! 😊*_

> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ QUEEN-X-MD*` ,

  ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/DLDD8Zy/73a9c4e2ea3c4cf1.jpg",
  MENU_IMG: process.env.MENU_IMG || "https://i.ibb.co/DLDD8Zy/73a9c4e2ea3c4cf1.jpg",
  MENU_MSG: process.env.MENU_MSG || `Menumsg`,
    MENU_MS: process.env.MENU_MS || `menu 2`,

};
