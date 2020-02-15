// org.jsoup.Jsoup.connect(Url).get();
// aa = org.jsoup.Jsoup.connect("https:").ignoreContentType(true).get().select("body")
// bb=JSON.parse(aa.text())
// own(bb.matches)
// own(bb.matches[0])
// bb.matches.map(v=>Object.keys(v).map(w=>w+" : "+v[w]).join("\n")).join("\n\n")
// cc=bb.matches.map(v=>Object.keys(v).map(w=>w+" : "+v[w]).join("\n"))
// bb.entries.map(v=>Object.keys(v).map(w=>w+" : "+v[w]).join("\n")).join("\n\n")
/////////////////////////////////////////////////////////////////////////////////////

//전역변수 Global variables
var D = require("DBManager.js")("D"); // DB 모듈에 이름 D 데이터베이스 만들기
var T = require("ThreadManager.js"); // 쓰레드메니저 모듈
////////////////////////////////////////////////////////////////////////////////////

var reloadcheck = 0;
var admin = ["admin_아부다비"]

function reload(r) {
		reloadcheck = 1;
		reloadtime = new Date().getTime();
		var Timer = new Date();
	    file = "storage/emulated/0/kbot/response.js";
	    checksum = org.jsoup.Jsoup.connect("https://github.com/fjfjslslsl5/gotothe/commits/master").get().select("div.repository-content>a").attr("href").split('commit/')[1];
	    conn = new java.net.URL("https://raw.githubusercontent.com/fjfjslslsl5/gotothe/"+checksum+"/response.js").openConnection();
	    br = new java.io.BufferedReader(new java.io.InputStreamReader(conn.getInputStream()));
	    str = "";
	    tmp = null;
	    while ((tmp = br.readLine()) != null) {
	        str += tmp + "\n";
	    }
	    var filedir = new java.io.File(file);
	    var bw = new java.io.BufferedWriter(new java.io.FileWriter(filedir));
	    bw.write(str.toString());
        bw.close();
        
	    var time = (new Date() - Timer) / 1000;
	    Api.replyRoom(r.room ,"파일저장 완료 / " + time + "s\n");

	    Api.reload();
	    reloadcheck = 0;
	    var time = (new Date() - Timer) / 1000;
	    Api.replyRoom(r.room , "리로드 완료 / " + time + "s\n");
		
		return
}
File = java.io.File;

////////////////////////////////////////////////////////////////////////////////////////////////////

var k200 = [303.3,302.78,299.74,301.53,300.13,297.06,294.41,289.42,291.23,288.43,290.74,290.35,293.77,295.2,294.06,292.9,294.87,295.31,294.31,294.22,294.4,289.76,290.11,285.11,280.28,279.31,278.03,276.56,273.3,274.15,276.19,277.44,276.78,281.23,282.85,281.83,282.19,279.43,278.28,282.21,286.23,287.18,287.29,283.93,281.28,283.65,280.85,283.13,284.37,284.52,284.38,282.54,278.43,275.82,275.51,277.55,277.78,277.07,276.7,276.23,277.41,273.79,272.81,275.57,276.32,274.34,274.23,271.3,268.8,271.36,267.67,267.39,268.55,274.42,273.55,271.33,274.89,274.42,277.97,276.65,276.44,274.92,273.06,271.68,272.02,270.84,268.76,267.4,265.53,264.44,261.69,258.25,259.08,259,254.31,255.53,253.5,252.19,256.11,256.28,258.38,258.05,255.11,253.9,254.86,252.83,255.35,254.85,252.4,252,253.41,257.19,262.99,265.73,266.34,268.95,267.75,272.25,273.04,273.22,275.92,274.55,274.55,270.67,271.48,274.05,272.64,272.68,271.78,268.75,267.72,268.55,274.35,274.54,272.37,275.97,277.27,277.5,277.75,275.53,275.28,275.58,275.48,276.01,275.31,271.36,270.09,270.48,271.13,272.74,273.21,272.1,268.27,267.99,267.66,268.16,263.89,263.93,261.37,264.7,264.4,264.42,266.38,266.65,266.12,264.96]


band = function(aaa, bbb, ccc, ddd, eee, r){  
	var Timer = new Date();
//aaa=


	var time = (new Date() - Timer) / 1000;
	r.replier.reply("자리수 계산완료: "+ time + "s\n");
}






/////////////////////////////////////////////////////////////////////////////////////////////////////


function response(room, msg, sender, isGroupChat, replier, imageDB) {
	
	r = { replier: replier, msg: msg, sender: sender, room: room, imageDB :imageDB};
	
	try {
	
		if (msg == "ㅎㅎ" || msg == "gg") {
			replier.reply("Turning Point");
			return;
		}

		if (msg.indexOf("/로딩") != -1){
			reload(r);
			return;
		}

        if (msg.indexOf("]") == 0 && sender == admin) {
            replier.reply(String(eval(msg.substring(1))));
            return;	
        }


    }catch (e) {
    replier.reply( e + "\n" + e.stack);
    }
}



////////////////////////////////////////////////////////////////////////////////////////////


