const _0x52c925=_0x2810;function _0x5c8b(){const _0x25b1ce=['🚫\x20Movie\x20not\x20found.','\x0a🇺🇸\x20*Country:*\x20','Awards','Poster','\x0a🎭\x20*Actors:*\x20','44068fKJwjK','Rated','False','27WYyHZe','2982474jHcIwD','http://www.omdbapi.com/?t=','\x0a🎭\x20*Genre:*\x20','data','\x0a📆\x20*Released:*\x20','Year','log','\x0a🌍\x20*Language:*\x20','\x0a🗳️\x20*IMDB\x20Votes:*\x20','\x0a📅\x20*Year:*\x20','\x0a📝\x20*Plot:*\x20','414345jITuid','../command','message','250064igrLFS','288AfQjFo','📽️\x20ρℓєαѕє\x20ρяσνι∂є\x20тнє\x20ηαмє\x20σƒ\x20тнє\x20мσνιє.','N/A','2632905XfNnVX','imdbVotes','Language','Response','../config','Released','\x0a✍️\x20*Writer:*\x20','Director','103640QhkNCa','ALIVE_IMG','\x0a>\x20*©ᴘᴏᴡᴇʀᴇᴅ\x20ʙʏ\x20𝑄𝑈𝐸𝐸𝑁-𝑋-𝑀𝐷\x20ᴛᴇᴄʜ*','Runtime','261968pkfjum','\x0a🏆\x20*Awards:*\x20','Genre','\x0a🎬\x20*Movie\x20Information*\x20🎬\x0a\x0a🎥\x20*Title:*\x20','Plot','\x0a⏳\x20*Runtime:*\x20','Actors','join','axios'];_0x5c8b=function(){return _0x25b1ce;};return _0x5c8b();}(function(_0x1f01d0,_0x134788){const _0x2a2166=_0x2810,_0x42fd18=_0x1f01d0();while(!![]){try{const _0x1ab8bd=-parseInt(_0x2a2166(0xda))/0x1+parseInt(_0x2a2166(0xdd))/0x2+-parseInt(_0x2a2166(0xce))/0x3*(-parseInt(_0x2a2166(0xcb))/0x4)+parseInt(_0x2a2166(0xe1))/0x5+-parseInt(_0x2a2166(0xcf))/0x6+parseInt(_0x2a2166(0xbd))/0x7+parseInt(_0x2a2166(0xe9))/0x8*(parseInt(_0x2a2166(0xde))/0x9);if(_0x1ab8bd===_0x134788)break;else _0x42fd18['push'](_0x42fd18['shift']());}catch(_0x425de4){_0x42fd18['push'](_0x42fd18['shift']());}}}(_0x5c8b,0x471fe));const axios=require(_0x52c925(0xc5)),{cmd}=require(_0x52c925(0xdb)),config=require(_0x52c925(0xe5));function _0x2810(_0x5ae1cb,_0x35c6e2){const _0x5c8b81=_0x5c8b();return _0x2810=function(_0x28102,_0x455b47){_0x28102=_0x28102-0xba;let _0x11cade=_0x5c8b81[_0x28102];return _0x11cade;},_0x2810(_0x5ae1cb,_0x35c6e2);}cmd({'pattern':'movie','desc':'Fetch\x20detailed\x20information\x20about\x20a\x20movie.','category':'movie','react':'🎬','filename':__filename},async(_0xa85724,_0x5aabcb,_0xcb85af,{from:_0xbef607,quoted:_0xbd2cb6,body:_0xd205e6,isCmd:_0x193ecd,command:_0x32e48e,args:_0x2b4802,q:_0x42d494,isGroup:_0x54b70c,sender:_0x175bfd,senderNumber:_0xaf110,botNumber2:_0x360113,botNumber:_0x104322,pushname:_0x29a59d,isMe:_0x6cc204,isOwner:_0x479e33,groupMetadata:_0x159252,groupName:_0x312cbe,participants:_0x47656a,groupAdmins:_0x5ae927,isBotAdmins:_0x5dc718,isAdmins:_0x20d84f,reply:_0x229329})=>{const _0x13d00f=_0x52c925;try{const _0xcd333=_0x2b4802[_0x13d00f(0xc4)]('\x20');if(!_0xcd333)return _0x229329(_0x13d00f(0xdf));const _0x471928=_0x13d00f(0xd0)+encodeURIComponent(_0xcd333)+'&apikey='+config['OMDB_API_KEY'],_0x41c481=await axios['get'](_0x471928),_0x432983=_0x41c481[_0x13d00f(0xd2)];if(_0x432983[_0x13d00f(0xe4)]===_0x13d00f(0xcd))return _0x229329(_0x13d00f(0xc6));const _0x364f84=_0x13d00f(0xc0)+_0x432983['Title']+_0x13d00f(0xd8)+_0x432983[_0x13d00f(0xd4)]+'\x0a🌟\x20*Rated:*\x20'+_0x432983[_0x13d00f(0xcc)]+_0x13d00f(0xd3)+_0x432983[_0x13d00f(0xe6)]+_0x13d00f(0xc2)+_0x432983[_0x13d00f(0xbc)]+_0x13d00f(0xd1)+_0x432983[_0x13d00f(0xbf)]+'\x0a🎬\x20*Director:*\x20'+_0x432983[_0x13d00f(0xe8)]+_0x13d00f(0xe7)+_0x432983['Writer']+_0x13d00f(0xca)+_0x432983[_0x13d00f(0xc3)]+_0x13d00f(0xd9)+_0x432983[_0x13d00f(0xc1)]+_0x13d00f(0xd6)+_0x432983[_0x13d00f(0xe3)]+_0x13d00f(0xc7)+_0x432983['Country']+_0x13d00f(0xbe)+_0x432983[_0x13d00f(0xc8)]+'\x0a⭐\x20*IMDB\x20Rating:*\x20'+_0x432983['imdbRating']+_0x13d00f(0xd7)+_0x432983[_0x13d00f(0xe2)]+'\x0a',_0x274d6d=_0x432983['Poster']&&_0x432983[_0x13d00f(0xc9)]!==_0x13d00f(0xe0)?_0x432983['Poster']:config[_0x13d00f(0xba)];await _0xa85724['sendMessage'](_0xbef607,{'image':{'url':_0x274d6d},'caption':_0x364f84+_0x13d00f(0xbb)},{'quoted':_0x5aabcb});}catch(_0x25a994){console[_0x13d00f(0xd5)](_0x25a994),_0x229329('❌\x20єяяσя:\x20'+_0x25a994[_0x13d00f(0xdc)]);}});
