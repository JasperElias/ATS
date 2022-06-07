import React from 'react';

const CountryCodePicker = [["AD","376",0],["AE","971",1],["AF","93",2],["AG","1-268",3],["AI","1-264",4],["AL","355",5],["AM","374",6],["AO","244",7],["AR","54",8],["AS","1-684",9],["AT","43",10],["AU","61",11],["AW","297",12],["AX","358-18",13],["AZ","994",14],["BA","387",15],["BB","1-246",16],["BD","880",17],["BE","32",18],["BF","226",19],["BG","359",20],["BH","973",21],["BI","257",22],["BJ","229",23],["BL","590",24],["BM","1-441",25],["BN","673",26],["BO","591",27],["BQ","599",28],["BR","55",29],["BS","1-242",30],["BT","975",31],["BW","267",32],["BY","375",33],["BZ","501",34],["CA","1",35],["CC","61",36],["CD","243",37],["CF","236",38],["CG","242",39],["CH","41",40],["CI","225",41],["CK","682",42],["CL","56",43],["CM","237",44],["CN","86",45],["CO","57",46],["CR","506",47],["CU","53",48],["CV","238",49],["CW","599",50],["CX","61",51],["CY","357",52],["CZ","420",53],["DE","49",54],["DJ","253",55],["DK","45",56],["DM","1-767",57],["DO","1-809 and 1-829",58],["DZ","213",59],["EC","593",60],["EE","372",61],["EG","20",62],["EH","212",63],["ER","291",64],["ES","34",65],["ET","251",66],["FI","358",67],["FJ","679",68],["FK","500",69],["FM","691",70],["FO","298",71],["FR","33",72],["GA","241",73],["GB","44",74],["GD","1-473",75],["GE","995",76],["GF","594",77],["GG","44-1481",78],["GH","233",79],["GI","350",80],["GL","299",81],["GM","220",82],["GN","224",83],["GP","590",84],["GQ","240",85],["GR","30",86],["GT","502",87],["GU","1-671",88],["GW","245",89],["GY","592",90],["HK","852",91],["HM"," ",92],["HN","504",93],["HR","385",94],["HT","509",95],["HU","36",96],["ID","62",97],["IE","353",98],["IL","972",99],["IM","44-1624",100],["IN","91",101],["IO","246",102],["IQ","964",103],["IR","98",104],["IS","354",105],["IT","39",106],["JE","44-1534",107],["JM","1-876",108],["JO","962",109],["JP","81",110],["KE","254",111],["KG","996",112],["KH","855",113],["KI","686",114],["KM","269",115],["KN","1-869",116],["KP","850",117],["KR","82",118],["KW","965",119],["KY","1-345",120],["KZ","7",121],["LA","856",122],["LB","961",123],["LC","1-758",124],["LI","423",125],["LK","94",126],["LR","231",127],["LS","266",128],["LT","370",129],["LU","352",130],["LV","371",131],["LY","218",132],["MA","212",133],["MC","377",134],["MD","373",135],["ME","382",136],["MF","590",137],["MG","261",138],["MH","692",139],["MK","389",140],["ML","223",141],["MM","95",142],["MN","976",143],["MO","853",144],["MP","1-670",145],["MQ","596",146],["MR","222",147],["MS","1-664",148],["MT","356",149],["MU","230",150],["MV","960",151],["MW","265",152],["MX","52",153],["MY","60",154],["MZ","258",155],["NA","264",156],["NC","687",157],["NE","227",158],["NF","672",159],["NG","234",160],["NI","505",161],["NL","31",162],["NO","47",163],["NP","977",164],["NR","674",165],["NU","683",166],["NZ","64",167],["OM","968",168],["PA","507",169],["PE","51",170],["PF","689",171],["PG","675",172],["PH","63",173],["PK","92",174],["PL","48",175],["PM","508",176],["PN","870",177],["PR","1-787 and 1-939",178],["PS","970",179],["PT","351",180],["PW","680",181],["PY","595",182],["QA","974",183],["RE","262",184],["RO","40",185],["RS","381",186],["RU","7",187],["RW","250",188],["SA","966",189],["SB","677",190],["SC","248",191],["SD","249",192],["SE","46",193],["SG","65",194],["SH","290",195],["SI","386",196],["SJ","47",197],["SK","421",198],["SL","232",199],["SM","378",200],["SN","221",201],["SO","252",202],["SR","597",203],["SS","211",204],["ST","239",205],["SV","503",206],["SX","599",207],["SY","963",208],["SZ","268",209],["TC","1-649",210],["TD","235",211],["TG","228",212],["TH","66",213],["TJ","992",214],["TK","690",215],["TL","670",216],["TM","993",217],["TN","216",218],["TO","676",219],["TR","90",220],["TT","1-868",221],["TV","688",222],["TW","886",223],["TZ","255",224],["UA","380",225],["UG","256",226],["UM","1",227],["US","1",228],["UY","598",229],["UZ","998",230],["VA","379",231],["VC","1-784",232],["VE","58",233],["VG","1-284",234],["VI","1-340",235],["VN","84",236],["VU","678",237],["WF","681",238],["WS","685",239],["YE","967",240],["YT","262",241],["ZA","27",242],["ZM","260",243],["ZW","263",244]]

const CountryCodeKey = {"0":["AD","376"],"1":["AE","971"],"2":["AF","93"],"3":["AG","1-268"],"4":["AI","1-264"],"5":["AL","355"],"6":["AM","374"],"7":["AO","244"],"8":["AR","54"],"9":["AS","1-684"],"10":["AT","43"],"11":["AU","61"],"12":["AW","297"],"13":["AX","358-18"],"14":["AZ","994"],"15":["BA","387"],"16":["BB","1-246"],"17":["BD","880"],"18":["BE","32"],"19":["BF","226"],"20":["BG","359"],"21":["BH","973"],"22":["BI","257"],"23":["BJ","229"],"24":["BL","590"],"25":["BM","1-441"],"26":["BN","673"],"27":["BO","591"],"28":["BQ","599"],"29":["BR","55"],"30":["BS","1-242"],"31":["BT","975"],"32":["BW","267"],"33":["BY","375"],"34":["BZ","501"],"35":["CA","1"],"36":["CC","61"],"37":["CD","243"],"38":["CF","236"],"39":["CG","242"],"40":["CH","41"],"41":["CI","225"],"42":["CK","682"],"43":["CL","56"],"44":["CM","237"],"45":["CN","86"],"46":["CO","57"],"47":["CR","506"],"48":["CU","53"],"49":["CV","238"],"50":["CW","599"],"51":["CX","61"],"52":["CY","357"],"53":["CZ","420"],"54":["DE","49"],"55":["DJ","253"],"56":["DK","45"],"57":["DM","1-767"],"58":["DO","1-809 and 1-829"],"59":["DZ","213"],"60":["EC","593"],"61":["EE","372"],"62":["EG","20"],"63":["EH","212"],"64":["ER","291"],"65":["ES","34"],"66":["ET","251"],"67":["FI","358"],"68":["FJ","679"],"69":["FK","500"],"70":["FM","691"],"71":["FO","298"],"72":["FR","33"],"73":["GA","241"],"74":["GB","44"],"75":["GD","1-473"],"76":["GE","995"],"77":["GF","594"],"78":["GG","44-1481"],"79":["GH","233"],"80":["GI","350"],"81":["GL","299"],"82":["GM","220"],"83":["GN","224"],"84":["GP","590"],"85":["GQ","240"],"86":["GR","30"],"87":["GT","502"],"88":["GU","1-671"],"89":["GW","245"],"90":["GY","592"],"91":["HK","852"],"92":["HM"," "],"93":["HN","504"],"94":["HR","385"],"95":["HT","509"],"96":["HU","36"],"97":["ID","62"],"98":["IE","353"],"99":["IL","972"],"100":["IM","44-1624"],"101":["IN","91"],"102":["IO","246"],"103":["IQ","964"],"104":["IR","98"],"105":["IS","354"],"106":["IT","39"],"107":["JE","44-1534"],"108":["JM","1-876"],"109":["JO","962"],"110":["JP","81"],"111":["KE","254"],"112":["KG","996"],"113":["KH","855"],"114":["KI","686"],"115":["KM","269"],"116":["KN","1-869"],"117":["KP","850"],"118":["KR","82"],"119":["KW","965"],"120":["KY","1-345"],"121":["KZ","7"],"122":["LA","856"],"123":["LB","961"],"124":["LC","1-758"],"125":["LI","423"],"126":["LK","94"],"127":["LR","231"],"128":["LS","266"],"129":["LT","370"],"130":["LU","352"],"131":["LV","371"],"132":["LY","218"],"133":["MA","212"],"134":["MC","377"],"135":["MD","373"],"136":["ME","382"],"137":["MF","590"],"138":["MG","261"],"139":["MH","692"],"140":["MK","389"],"141":["ML","223"],"142":["MM","95"],"143":["MN","976"],"144":["MO","853"],"145":["MP","1-670"],"146":["MQ","596"],"147":["MR","222"],"148":["MS","1-664"],"149":["MT","356"],"150":["MU","230"],"151":["MV","960"],"152":["MW","265"],"153":["MX","52"],"154":["MY","60"],"155":["MZ","258"],"156":["NA","264"],"157":["NC","687"],"158":["NE","227"],"159":["NF","672"],"160":["NG","234"],"161":["NI","505"],"162":["NL","31"],"163":["NO","47"],"164":["NP","977"],"165":["NR","674"],"166":["NU","683"],"167":["NZ","64"],"168":["OM","968"],"169":["PA","507"],"170":["PE","51"],"171":["PF","689"],"172":["PG","675"],"173":["PH","63"],"174":["PK","92"],"175":["PL","48"],"176":["PM","508"],"177":["PN","870"],"178":["PR","1-787 and 1-939"],"179":["PS","970"],"180":["PT","351"],"181":["PW","680"],"182":["PY","595"],"183":["QA","974"],"184":["RE","262"],"185":["RO","40"],"186":["RS","381"],"187":["RU","7"],"188":["RW","250"],"189":["SA","966"],"190":["SB","677"],"191":["SC","248"],"192":["SD","249"],"193":["SE","46"],"194":["SG","65"],"195":["SH","290"],"196":["SI","386"],"197":["SJ","47"],"198":["SK","421"],"199":["SL","232"],"200":["SM","378"],"201":["SN","221"],"202":["SO","252"],"203":["SR","597"],"204":["SS","211"],"205":["ST","239"],"206":["SV","503"],"207":["SX","599"],"208":["SY","963"],"209":["SZ","268"],"210":["TC","1-649"],"211":["TD","235"],"212":["TG","228"],"213":["TH","66"],"214":["TJ","992"],"215":["TK","690"],"216":["TL","670"],"217":["TM","993"],"218":["TN","216"],"219":["TO","676"],"220":["TR","90"],"221":["TT","1-868"],"222":["TV","688"],"223":["TW","886"],"224":["TZ","255"],"225":["UA","380"],"226":["UG","256"],"227":["UM","1"],"228":["US","1"],"229":["UY","598"],"230":["UZ","998"],"231":["VA","379"],"232":["VC","1-784"],"233":["VE","58"],"234":["VG","1-284"],"235":["VI","1-340"],"236":["VN","84"],"237":["VU","678"],"238":["WF","681"],"239":["WS","685"],"240":["YE","967"],"241":["YT","262"],"242":["ZA","27"],"243":["ZM","260"],"244":["ZW","263"]}

export {CountryCodePicker, CountryCodeKey}