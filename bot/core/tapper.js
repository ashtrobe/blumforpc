const a0_0x1cba65=a0_0x1ff2;(function(_0x35dc7e,_0x35dc74){const _0x237c0e=a0_0x1ff2,_0x4617e6=_0x35dc7e();while(!![]){try{const _0xe9986e=parseInt(_0x237c0e(0x121))/0x1+parseInt(_0x237c0e(0x109))/0x2+parseInt(_0x237c0e(0x14b))/0x3+-parseInt(_0x237c0e(0x169))/0x4*(-parseInt(_0x237c0e(0x164))/0x5)+parseInt(_0x237c0e(0x14a))/0x6*(parseInt(_0x237c0e(0x10d))/0x7)+parseInt(_0x237c0e(0x15e))/0x8*(parseInt(_0x237c0e(0x11b))/0x9)+parseInt(_0x237c0e(0x160))/0xa*(-parseInt(_0x237c0e(0x162))/0xb);if(_0xe9986e===_0x35dc74)break;else _0x4617e6['push'](_0x4617e6['shift']());}catch(_0xfc4abe){_0x4617e6['push'](_0x4617e6['shift']());}}}(a0_0x1101,0x1a47f));function a0_0x1ff2(_0x27cbe4,_0xa546a3){const _0x110196=a0_0x1101();return a0_0x1ff2=function(_0x1ff246,_0xe7eb3d){_0x1ff246=_0x1ff246-0xe9;let _0x23d72e=_0x110196[_0x1ff246];return _0x23d72e;},a0_0x1ff2(_0x27cbe4,_0xa546a3);}const {default:axios}=require(a0_0x1cba65(0xfb)),logger=require(a0_0x1cba65(0x10a)),headers=require('./header'),{Api}=require('telegram'),{SocksProxyAgent}=require(a0_0x1cba65(0x16a)),settings=require('../config/config'),app=require('../config/app'),user_agents=require(a0_0x1cba65(0x126)),fs=require('fs'),sleep=require(a0_0x1cba65(0x122)),ApiRequest=require(a0_0x1cba65(0x132));function a0_0x1101(){const _0x287e6f=['\x20|\x20Proxy\x20agent\x20error:\x20','ECONNREFUSED','claim_farming','refresh_token','access','axios','/v1/auth/provider/PROVIDER_TELEGRAM_MINI_APP','ios','farming','toJson','\x20|\x20No\x20proxy\x20will\x20be\x20used.','now','\x20hour(s)','username','\x20|\x20Game\x20started\x20\x20|\x20Duration:\x20<la>\x2035\x20seconds</la>','</gr>\x20Blum\x20points\x20|\x20Available\x20Play\x20Passes:\x20<ye>','length','AUTO_PLAY_GAMES','balance','416862omVylU','../utils/logger','tg_client','</ye>','12033zFzPEB','availableBalance','get_friend_balance','session_name','get_time','socksType','session_user_agents.json','split','CLAIM_DAILY_REWARD','Unknown','ENOTFOUND','freddy_bot','floor','get_user_data','261hjxOcz','\x20|\x20🎉\x20Claimed\x20friends\x20reward\x20<gr>+','gatewayApiUrl','\x20|\x20❗️Unknown\x20error\x20while\x20getting\x20Access\x20Token:\x20','\x20|\x20Generating\x20new\x20user\x20agent...','\x0aProxy:\x20','148836XitNWZ','../utils/sleep','https://httpbin.org/ip','info','</pi>','../config/userAgents','start_game','getInputEntity','replace','android','exports','start','port','CLAIM_FRIENDS_REWARD','random','claimBalance','</lb>','./api','USE_PROXY_FROM_FILE','get','RequestWebView','data','endTime','GetHistory','earningsRate','</lb></b>','bot','\x20could\x20not\x20be\x20found.\x20Please\x20check\x20the\x20proxy\x20address\x20and\x20your\x20network\x20connection.','authorization','Bearer\x20','password','\x20|\x20❗️Unknown\x20error\x20during\x20Authorization:\x20','start_farming','\x20|\x20Farming\x20ends\x20in\x20','messages','readFileSync','code','headers','create','session_user_agents','getaddrinfo','18oJLHOQ','29409wInJkE','\x20|\x20Claiming\x20farming\x20reward...','run','api','lodash','\x20|\x20⏰\x20Daily\x20reward\x20not\x20available.\x20Next\x20check:\x20<b><lb>','\x20|\x20🎉\x20Claimed\x20daily\x20reward','stringify','AUTO_CLAIM_FARMING_REWARD','\x20|\x20Error:\x20Unable\x20to\x20resolve\x20the\x20proxy\x20address.\x20The\x20proxy\x20server\x20at\x20','../utils/parser','gameId','://','url','\x20|\x20Game\x20ended\x20\x20|\x20Earnings:\x20<gr>+','\x20|\x20JWT\x20token\x20has\x20expired.\x20Trying\x20to\x20refresh...','message','claim_friends_balance','post','29424ltaUns','canClaim','10zUVQwD','\x20|\x20❗️Unknown\x20error:\x20','4399978eLPXue','error','35945yCPWUh','defaults','socks','includes','</gr>\x20|\x20Balance:\x20<lb>','16tVKNTL','socks-proxy-agent','</lb>\x20|\x20Available\x20Play\x20Pass\x20<ye>','SLEEP_BETWEEN_TAP','claim_game_reward','AUTO_START_FARMING','playPasses','freddy_bots','\x20|\x20Error:\x20','refresh','invoke','test','writeFileSync','daily_reward','\x20|\x20Farming\x20started\x20\x20|\x20End\x20Time:\x20<la>','toQueryString'];a0_0x1101=function(){return _0x287e6f;};return a0_0x1101();}var _=require(a0_0x1cba65(0x14f));const parser=require(a0_0x1cba65(0x155));class Tapper{constructor(_0x5adc9d){const _0x3ba841=a0_0x1cba65;this[_0x3ba841(0x110)]=_0x5adc9d[_0x3ba841(0x110)],this[_0x3ba841(0x10b)]=_0x5adc9d[_0x3ba841(0x10b)],this[_0x3ba841(0x148)]=this.#load_session_data(),this[_0x3ba841(0x146)]={...headers,'user-agent':this.#get_user_agent()},this[_0x3ba841(0x14e)]=new ApiRequest(this['session_name']);}#load_session_data(){const _0x647139=a0_0x1cba65;try{const _0x2fc8a9=fs[_0x647139(0x144)]('session_user_agents.json','utf8');return JSON['parse'](_0x2fc8a9);}catch(_0x13dec4){if(_0x13dec4[_0x647139(0x145)]==='ENOENT')return{};else throw _0x13dec4;}}#clean_tg_web_data(_0x41c029){const _0x4445b0=a0_0x1cba65;let _0x1f8929=_0x41c029[_0x4445b0(0x129)](/^tgWebAppData=/,'');return _0x1f8929=_0x1f8929[_0x4445b0(0x129)](/&tgWebAppVersion=7\.4&tgWebAppPlatform=ios$/,'')[_0x4445b0(0x129)](/&tgWebAppVersion=7\.4&tgWebAppPlatform=android$/,'')[_0x4445b0(0x129)](/&tgWebAppVersion=7\.4&tgWebAppPlatform=ios&tgWebAppBotInline=1$/,'')[_0x4445b0(0x129)](/&tgWebAppVersion=7\.4&tgWebAppPlatform=android&tgWebAppBotInline=1$/,''),_0x1f8929;}#get_random_user_agent(){const _0x3e0395=a0_0x1cba65,_0xf9d26a=Math[_0x3e0395(0x119)](Math[_0x3e0395(0x12f)]()*user_agents['length']);return user_agents[_0xf9d26a];}#get_user_agent(){const _0x270d1a=a0_0x1cba65;if(this[_0x270d1a(0x148)][this[_0x270d1a(0x110)]])return this[_0x270d1a(0x148)][this[_0x270d1a(0x110)]];logger['info'](this['session_name']+_0x270d1a(0x11f));const _0x2f376d=this.#get_random_user_agent();return this[_0x270d1a(0x148)][this['session_name']]=_0x2f376d,this.#save_session_data(this[_0x270d1a(0x148)]),_0x2f376d;}#save_session_data(_0x1f5c7f){const _0x53a3d5=a0_0x1cba65;fs[_0x53a3d5(0xf2)](_0x53a3d5(0x113),JSON['stringify'](_0x1f5c7f,null,0x2));}#get_platform(_0x2805fc){const _0xf268bb=a0_0x1cba65,_0x2fc0bc=[{'pattern':/iPhone/i,'platform':'ios'},{'pattern':/Android/i,'platform':_0xf268bb(0x12a)},{'pattern':/iPad/i,'platform':_0xf268bb(0xfd)}];for(const {pattern:_0xa405ce,platform:_0x5b4a63}of _0x2fc0bc){if(_0xa405ce[_0xf268bb(0xf1)](_0x2805fc))return _0x5b4a63;}return _0xf268bb(0x116);}#proxy_agent(_0x31455b){const _0x2c8082=a0_0x1cba65;try{if(!_0x31455b)return null;let _0x136eec;return!_0x31455b[_0x2c8082(0x13f)]&&!_0x31455b[_0x2c8082(0x103)]?_0x136eec=_0x2c8082(0x166)+_0x31455b['socksType']+_0x2c8082(0x157)+_0x31455b['ip']+':'+_0x31455b['port']:_0x136eec='socks'+_0x31455b[_0x2c8082(0x112)]+_0x2c8082(0x157)+_0x31455b[_0x2c8082(0x103)]+':'+_0x31455b[_0x2c8082(0x13f)]+'@'+_0x31455b['ip']+':'+_0x31455b[_0x2c8082(0x12d)],new SocksProxyAgent(_0x136eec);}catch(_0x4ebc1f){return logger[_0x2c8082(0x163)](this[_0x2c8082(0x110)]+_0x2c8082(0xf6)+_0x4ebc1f+_0x2c8082(0x120)+JSON[_0x2c8082(0x152)](_0x31455b,null,0x2)),null;}}async #get_tg_web_data(){const _0x31a82e=a0_0x1cba65;try{await this[_0x31a82e(0x10b)][_0x31a82e(0x12c)]();const _0x376985=this.#get_platform(this.#get_user_agent()),_0x2f8f27=await this['tg_client'][_0x31a82e(0xf0)](new Api[(_0x31a82e(0x143))][(_0x31a82e(0x138))]({'peer':_0x31a82e(0x118),'limit':0x1}));_0x2f8f27[_0x31a82e(0x143)][_0x31a82e(0x106)]<0x1&&await this[_0x31a82e(0x10b)][_0x31a82e(0xf0)](new Api['channels']['JoinChannel']({'channel':_0x31a82e(0xed)}));const _0x1440ca=await this[_0x31a82e(0x10b)][_0x31a82e(0xf0)](new Api[(_0x31a82e(0x143))][(_0x31a82e(0x135))]({'peer':await this[_0x31a82e(0x10b)][_0x31a82e(0x128)](app['peer']),'bot':await this['tg_client'][_0x31a82e(0x128)](app[_0x31a82e(0x13b)]),'platform':_0x376985,'from_bot_menu':![],'url':app['webviewUrl']})),_0x1d577e=_0x1440ca[_0x31a82e(0x158)],_0xfebab2=_0x1d577e[_0x31a82e(0x114)]('#',0x2)[0x1],_0x3b2f90=parser[_0x31a82e(0xff)](decodeURIComponent(this.#clean_tg_web_data(_0xfebab2))),_0x4893be={'query':parser[_0x31a82e(0xf5)](_0x3b2f90)};return _0x4893be;}catch(_0x3ddbf8){logger[_0x31a82e(0x163)](this['session_name']+_0x31a82e(0x140)+_0x3ddbf8);throw _0x3ddbf8;}finally{await sleep(0x1),logger[_0x31a82e(0x124)](this[_0x31a82e(0x110)]+'\x20|\x20🚀\x20Starting\x20session...');}}async #get_access_token(_0x201ce5,_0x3a0aae){const _0x528d64=a0_0x1cba65;try{const _0x236300=await _0x3a0aae[_0x528d64(0x15d)](app[_0x528d64(0x11d)]+_0x528d64(0xfc),JSON[_0x528d64(0x152)](_0x201ce5));return _0x236300[_0x528d64(0x136)]?.['token'];}catch(_0x55f373){logger[_0x528d64(0x163)](this[_0x528d64(0x110)]+_0x528d64(0x11e)+_0x55f373),await sleep(0x3);}}async #check_proxy(_0x16ab2e,_0x386bb8){const _0x40e2d5=a0_0x1cba65;try{const _0x351c57=await _0x16ab2e[_0x40e2d5(0x134)](_0x40e2d5(0x123)),_0x503418=_0x351c57['data']['origin'];logger[_0x40e2d5(0x124)](this[_0x40e2d5(0x110)]+'\x20|\x20Proxy\x20IP:\x20'+_0x503418);}catch(_0x448883){return _0x448883[_0x40e2d5(0x15b)]['includes'](_0x40e2d5(0x117))||_0x448883[_0x40e2d5(0x15b)]['includes'](_0x40e2d5(0x149))||_0x448883[_0x40e2d5(0x15b)][_0x40e2d5(0x167)](_0x40e2d5(0xf7))?(logger[_0x40e2d5(0x163)](this[_0x40e2d5(0x110)]+_0x40e2d5(0x154)+_0x386bb8['ip']+':'+_0x386bb8[_0x40e2d5(0x12d)]+_0x40e2d5(0x13c)),logger[_0x40e2d5(0x163)](this[_0x40e2d5(0x110)]+_0x40e2d5(0x100))):logger[_0x40e2d5(0x163)](this[_0x40e2d5(0x110)]+'\x20|\x20Proxy:\x20'+_0x386bb8['ip']+':'+_0x386bb8[_0x40e2d5(0x12d)]+_0x40e2d5(0xee)+_0x448883[_0x40e2d5(0x15b)]),![];}}async[a0_0x1cba65(0x14d)](_0x5196dd){const _0x4feeb2=a0_0x1cba65;let _0x4b2594,_0x4d8bb3=0x0,_0x5d28af,_0x2d6cf4=0x0,_0x492854,_0x491a6c;if(settings[_0x4feeb2(0x133)]&&_0x5196dd){_0x4b2594=axios[_0x4feeb2(0x147)]({'httpsAgent':this.#proxy_agent(_0x5196dd),'headers':this['headers'],'withCredentials':!![]});const _0x18721a=await this.#check_proxy(_0x4b2594,_0x5196dd);!_0x18721a&&(_0x4b2594=axios[_0x4feeb2(0x147)]({'headers':this[_0x4feeb2(0x146)],'withCredentials':!![]}));}else _0x4b2594=axios[_0x4feeb2(0x147)]({'headers':this[_0x4feeb2(0x146)],'withCredentials':!![]});while(!![]){try{const _0x551980=Date[_0x4feeb2(0x101)]()/0x3e8;if(_0x551980-_0x4d8bb3>=0x708){if(_0x492854){const _0xa61ef0={'refresh':_0x492854};_0x491a6c=await this[_0x4feeb2(0x14e)][_0x4feeb2(0xf9)](_0x4b2594,_0xa61ef0),_0x492854=_0x491a6c?.[_0x4feeb2(0xef)],_0x4b2594[_0x4feeb2(0x165)][_0x4feeb2(0x146)][_0x4feeb2(0x13d)]=_0x4feeb2(0x13e)+_0x491a6c?.[_0x4feeb2(0xfa)];}else{const _0x16cb7a=await this.#get_tg_web_data();_0x491a6c=await this.#get_access_token(_0x16cb7a,_0x4b2594),_0x492854=_0x491a6c?.['refresh'],_0x4b2594[_0x4feeb2(0x165)]['headers'][_0x4feeb2(0x13d)]='Bearer\x20'+_0x491a6c?.['access'];}_0x4d8bb3=_0x551980,await sleep(0x2);}_0x5d28af=await this[_0x4feeb2(0x14e)][_0x4feeb2(0x11a)](_0x4b2594);const _0x46a524=await this['api'][_0x4feeb2(0x111)](_0x4b2594),_0x309528=await this[_0x4feeb2(0x14e)]['check_jwt'](_0x4b2594);if(!_0x309528){logger[_0x4feeb2(0x124)](this[_0x4feeb2(0x110)]+_0x4feeb2(0x15a)),_0x5d28af=null,_0x491a6c=null,_0x492854=null,_0x4d8bb3=0x0;continue;}if(!_0x5d28af)continue;if(!_0x5d28af?.[_0x4feeb2(0xfe)]){if(settings[_0x4feeb2(0xeb)]){const _0x3dfc54=await this[_0x4feeb2(0x14e)][_0x4feeb2(0x141)](_0x4b2594);logger[_0x4feeb2(0x124)](this[_0x4feeb2(0x110)]+_0x4feeb2(0xf4)+new Date(_0x3dfc54?.[_0x4feeb2(0x137)])+'</la>\x20|\x20Earnings\x20Rate:\x20<pi>'+_0x3dfc54?.[_0x4feeb2(0x139)]+_0x4feeb2(0x125));}}else{if(_0x46a524?.[_0x4feeb2(0x101)]>=_0x5d28af?.[_0x4feeb2(0xfe)]?.[_0x4feeb2(0x137)]){if(settings[_0x4feeb2(0x153)]){logger[_0x4feeb2(0x124)](this[_0x4feeb2(0x110)]+_0x4feeb2(0x14c));const _0x16eb7b=await this['api'][_0x4feeb2(0xf8)](_0x4b2594);logger[_0x4feeb2(0x124)](this[_0x4feeb2(0x110)]+'\x20|\x20🎉\x20Claimed\x20farming\x20reward\x20|\x20Balance\x20<lb>'+_0x16eb7b?.[_0x4feeb2(0x10e)]+_0x4feeb2(0x16b)+_0x16eb7b?.[_0x4feeb2(0xec)]+_0x4feeb2(0x10c));}}else _0x46a524?.[_0x4feeb2(0x101)]>=_0x5d28af?.[_0x4feeb2(0xfe)]?.['startTime']&&logger[_0x4feeb2(0x124)](this[_0x4feeb2(0x110)]+_0x4feeb2(0x142)+Math['floor']((_0x5d28af?.['farming']?.['endTime']-_0x46a524?.[_0x4feeb2(0x101)])/0x3e8/0x3c/0x3c)+_0x4feeb2(0x102));}await sleep(0x3),_0x5d28af=await this[_0x4feeb2(0x14e)]['get_user_data'](_0x4b2594);if(settings[_0x4feeb2(0x107)]){if(_0x5d28af?.[_0x4feeb2(0xec)]>0x0){const _0x3a472e=await this[_0x4feeb2(0x14e)][_0x4feeb2(0x127)](_0x4b2594);if(_0x3a472e?.[_0x4feeb2(0x156)]){logger[_0x4feeb2(0x124)](this[_0x4feeb2(0x110)]+_0x4feeb2(0x104)),await sleep(0x23);const _0x21e2cd=_['random'](0x64,0xc8),_0x2b2c2d={'gameId':_0x3a472e?.[_0x4feeb2(0x156)],'points':_0x21e2cd},_0x38d94d=await this['api'][_0x4feeb2(0xea)](_0x4b2594,_0x2b2c2d);_0x5d28af=await this[_0x4feeb2(0x14e)][_0x4feeb2(0x11a)](_0x4b2594),_0x38d94d['toLowerCase']()=='ok'&&logger['info'](this['session_name']+_0x4feeb2(0x159)+_0x21e2cd+_0x4feeb2(0x105)+_0x5d28af?.[_0x4feeb2(0xec)]+'</ye>\x20|\x20Balance:\x20<lb>'+_0x5d28af?.[_0x4feeb2(0x10e)]+_0x4feeb2(0x131));}}}await sleep(0x3);if(settings[_0x4feeb2(0x12e)]){const _0x402b9f=await this[_0x4feeb2(0x14e)][_0x4feeb2(0x10f)](_0x4b2594);if(_0x402b9f?.[_0x4feeb2(0x15f)]&&!isNaN(parseInt(_0x402b9f?.[_0x4feeb2(0x108)]))){if(parseInt(_0x402b9f?.[_0x4feeb2(0x108)])>0x0){const _0x2f9588=await this[_0x4feeb2(0x14e)][_0x4feeb2(0x15c)](_0x4b2594);_0x2f9588?.[_0x4feeb2(0x130)]&&(_0x5d28af=await this['api']['get_user_data'](_0x4b2594),logger[_0x4feeb2(0x124)](this[_0x4feeb2(0x110)]+_0x4feeb2(0x11c)+_0x2f9588?.['claimBalance']+_0x4feeb2(0x168)+_0x5d28af?.[_0x4feeb2(0x10e)]+'</lb>'));}}}await sleep(0x3);if(_0x551980>=_0x2d6cf4){if(settings[_0x4feeb2(0x115)]){const _0x31586d=await this[_0x4feeb2(0x14e)][_0x4feeb2(0xf3)](_0x4b2594);_0x31586d?logger[_0x4feeb2(0x124)](this['session_name']+_0x4feeb2(0x151)):(_0x2d6cf4=_0x551980+0x4650,logger[_0x4feeb2(0x124)](this[_0x4feeb2(0x110)]+_0x4feeb2(0x150)+new Date(_0x2d6cf4*0x3e8)+_0x4feeb2(0x13a)));}}}catch(_0x9011ef){logger[_0x4feeb2(0x163)](this[_0x4feeb2(0x110)]+_0x4feeb2(0x161)+_0x9011ef);}finally{logger[_0x4feeb2(0x124)](this[_0x4feeb2(0x110)]+'\x20|\x20😴\x20sleeping\x20for\x20'+settings['SLEEP_BETWEEN_TAP']+'\x20seconds...'),await sleep(settings[_0x4feeb2(0xe9)]);}}}}module[a0_0x1cba65(0x12b)]=Tapper;