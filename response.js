// org.jsoup.Jsoup.connect(Url).get();
// aa = org.jsoup.Jsoup.connect("https:").ignoreContentType(true).get().select("body")
// bb=JSON.parse(aa.text())
/////////////////////////////////////////////////////////////////////////////////////
//]D.execSQL("Drop Table kos")
//]D.execSQL("alter table test3 add num1 number")
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



/* 테이블 id 값만들고 나서는 update만 사용
]D.create('kos',{id:0,num1:0,num2:0,num3:0,num4:0,num5:0,num6:0,num7:0,num8:0,num9:0,num10:0,num11:0,num12:0,num13:0,num14:0,num15:0,num16:0,num17:0,num18:0,num19:0,num20:0,num21:0,num22:0,num23:0,num24:0,num25:0,num26:0,num27:0,num28:0,num29:0,num30:0,cert1:0,cert2:0})
]for(i=0;i<3000;i++){
D.insert('kos',{id:i})
}
*/

// 2차 배열 1차원으로 전환
function flattenDeep(arr1) {
	return arr1.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val), []);
}

// 일차별 수익률 + 상황 특정 변수
kosu = function(r){

	var Timer = new Date();

	for(i=0; i<k200.length; i++){
		D.update('kos',{num1:((k200[i]-k200[i+ 1])/k200[i+ 1])},"id=?",[i]) //1일
		D.update('kos',{num2:((k200[i]-k200[i+ 2])/k200[i+ 2])},"id=?",[i]) //2일누적...num2,num...
		D.update('kos',{num3:((k200[i]-k200[i+ 3])/k200[i+ 3])},"id=?",[i])
		D.update('kos',{num4:((k200[i]-k200[i+ 4])/k200[i+ 4])},"id=?",[i])
		D.update('kos',{num5:((k200[i]-k200[i+ 5])/k200[i+ 5])},"id=?",[i])
		D.update('kos',{num6:((k200[i]-k200[i+ 6])/k200[i+ 6])},"id=?",[i])
		D.update('kos',{num7:((k200[i]-k200[i+ 7])/k200[i+ 7])},"id=?",[i])
		D.update('kos',{num8:((k200[i]-k200[i+ 8])/k200[i+ 8])},"id=?",[i])
		D.update('kos',{num9:((k200[i]-k200[i+ 9])/k200[i+ 9])},"id=?",[i])
		D.update('kos',{num10:((k200[i]-k200[i+ 10])/k200[i+ 10])},"id=?",[i])
	}

	abb = D.selectForArray('kos');
	for(j=0; j<abb.length; j++){
	D.update('kos',{cert1:D.selectForArray('kos',['num1','num2','num3','num4','num5','num6','num7','num8','num9','num10'])[j].filter(v=>v>0).length },"id=?",[j]);
	D.update('kos',{cert2:(abb[j][3]*3/6+abb[j][2]*2/6+abb[j][1]*1/6).toFixed(3) },"id=?",[j]);
	}
	var time = (new Date() - Timer) / 1000;
	r.replier.reply("업로드완료: "+ time + "s\n");

}
//D.update('kos',{cert2:(abb[j][3]*3/6+abb[j][2]*2/6+abb[j][1]*1/6).toFixed(4) },"id=?",[i]) (3개 계산인데 잘 맞았음)
//	D.update('kos',{cert1:(abb[j][10]*10/55+abb[j][9]*9/55+abb[j][8]*8/55+abb[j][7]*7/55+abb[j][6]*6/55+abb[j][5]*5/55+abb[j][4]*4/55+abb[j][3]*3/55+abb[j][2]*2/55+abb[j][1]*1/55).toFixed(3) },"id=?",[j]);
//]D.selectForString('kos',['cert1','cert2'])
// 계산 식

	band = function(days, date, r){  
	var Timer = new Date();

	// 특정 상황에 맞는 갯수
	id_today = D.selectForArray('kos',['id'],'cert1=?',[D.selectForArray('kos')[date][11]]) 
	id_today2 = D.selectForArray('kos',['id'],'cert2=?',[D.selectForArray('kos')[date][12]])
	id_today3 = [];
		for(i=0; i<id_today.length; i++){
			for(j=0; j<id_today2.length; j++){
	 		  if(Number(id_today[i]) === Number(id_today2[j])){
	 	 		 id_today3.push(id_today2[j])
			   }
		   }
	   }
	// 오늘 특정 변수와 같은 값을 가진 id

	var pro_array = [];
	var pro_array2 = [];
	var pro_array3 = [];

	for(k=1; k<id_today.length; k++){
		for(j=1; j<(days+1); j++){
			for(z=1; z<j+1; z++){
				if(D.selectForArray('kos',[],'id=?',[id_today[k]-j])[0]==undefined){
					pro_array.push('');
				}
				else{
					pro_array.push(D.selectForArray('kos',[],'id=?',[id_today[k]-j])[0][z]);
				}			
			}
		}
	}

	for(k=1; k<id_today2.length; k++){
		for(j=1; j<(days+1); j++){
			for(z=1; z<j+1; z++){
				if(D.selectForArray('kos',[],'id=?',[id_today2[k]-j])[0]==undefined){
					pro_array2.push('');
				}
				else{
					pro_array2.push(D.selectForArray('kos',[],'id=?',[id_today2[k]-j])[0][z]);
				}
			}
		}
	}

	for(k=1; k<id_today3.length; k++){
		for(j=1; j<(days+1); j++){
			for(z=1; z<j+1; z++){
				if(D.selectForArray('kos',[],'id=?',[id_today3[k]-j])[0]==undefined){
					pro_array3.push('');
				}
				else{
					pro_array3.push(D.selectForArray('kos',[],'id=?',[id_today3[k]-j])[0][z]);
				}
			}
		}
	}


	dddd = flattenDeep(pro_array)

	prob_2 = (dddd.filter(v=>v>0.02).length / dddd.length * 100).toFixed(0)+"%"	;
	prob_1 = (dddd.filter(v=>v>0.01).length / dddd.length * 100).toFixed(0)+"%"	;
	prob_0 = (dddd.filter(v=>v>0.00).length / dddd.length * 100).toFixed(0)+"%"	;
	
	prob_00 = (dddd.filter(v=>v<0.00).length / dddd.length * 100).toFixed(0)+"%"	;
	prob_a = (dddd.filter(v=>v<-0.01).length / dddd.length * 100).toFixed(0)+"%"	;
	prob_b = (dddd.filter(v=>v<-0.02).length / dddd.length * 100).toFixed(0)+"%"	;


	var time = (new Date() - Timer) / 1000;
	r.replier.reply("계산완료: "+ time + "s\n" + days + "일 안에 변동확률 \n" + 
					"2% 이상: " + prob_2 + "\n" +
					"1% 이상: " + prob_1 + "\n" +
					"0% 이상: " + prob_0 + "\n\n" +
					"0% 이하: " + prob_00 + "\n" +
					"-1% 이하: " + prob_a + "\n" +
					"-2% 이하: " + prob_b );
	
	r.replier.reply("cert1: " + id_today + "\n" + dddd)
	
	dddd2 = flattenDeep(pro_array2)

	prob_22 = (dddd2.filter(v=>v>0.02).length / dddd2.length * 100).toFixed(0)+"%"	;
	prob_12 = (dddd2.filter(v=>v>0.01).length / dddd2.length * 100).toFixed(0)+"%"	;
	prob_02 = (dddd2.filter(v=>v>0.00).length / dddd2.length * 100).toFixed(0)+"%"	;
	
	prob_002 = (dddd2.filter(v=>v<0.00).length / dddd2.length * 100).toFixed(0)+"%"	;
	prob_a2 = (dddd2.filter(v=>v<-0.01).length / dddd2.length * 100).toFixed(0)+"%"	;
	prob_b2 = (dddd2.filter(v=>v<-0.02).length / dddd2.length * 100).toFixed(0)+"%"	;


	var time = (new Date() - Timer) / 1000;
	r.replier.reply("계산완료: "+ time + "s\n" + days + "일 안에 변동확률 \n" + 
					"2% 이상: " + prob_22 + "\n" +
					"1% 이상: " + prob_12 + "\n" +
					"0% 이상: " + prob_02 + "\n\n" +
					"0% 이하: " + prob_002 + "\n" +
					"-1% 이하: " + prob_a2 + "\n" +
					"-2% 이하: " + prob_b2 );
	
	r.replier.reply("cert2: " + id_today2 + "\n" + dddd2)

	dddd3 = flattenDeep(pro_array3)

	prob_23 = (dddd3.filter(v=>v>0.02).length / dddd3.length * 100).toFixed(0)+"%"	;
	prob_13 = (dddd3.filter(v=>v>0.01).length / dddd3.length * 100).toFixed(0)+"%"	;
	prob_03 = (dddd3.filter(v=>v>0.00).length / dddd3.length * 100).toFixed(0)+"%"	;
	
	prob_003 = (dddd3.filter(v=>v<0.00).length / dddd3.length * 100).toFixed(0)+"%"	;
	prob_a3 = (dddd3.filter(v=>v<-0.01).length / dddd3.length * 100).toFixed(0)+"%"	;
	prob_b3 = (dddd3.filter(v=>v<-0.02).length / dddd3.length * 100).toFixed(0)+"%"	;


	var time = (new Date() - Timer) / 1000;
	r.replier.reply("계산완료: "+ time + "s\n" + days + "일 안에 변동확률 \n" + 
					"2% 이상: " + prob_23 + "\n" +
					"1% 이상: " + prob_13 + "\n" +
					"0% 이상: " + prob_03 + "\n\n" +
					"0% 이하: " + prob_003 + "\n" +
					"-1% 이하: " + prob_a3 + "\n" +
					"-2% 이하: " + prob_b3 );
	
	r.replier.reply("cert3: " + id_today3 + "\n" + dddd3)

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








k200 = [303.01,300.93,301.54,299.28,296.24,298.21,300.65,292.02,290.68,285.05,284.53,288.37,293.98,292.77,302.33,306.08,302.11,305.58,303.3,302.78,299.74,301.53,300.13,297.06,294.41,289.42,291.23,288.43,290.74,290.35,293.77,295.2,294.06,292.9,294.87,295.31,294.31,294.22,294.4,289.76,290.11,285.11,280.28,279.31,278.03,276.56,273.3,274.15,276.19,277.44,276.78,281.23,282.85,281.83,282.19,279.43,278.28,282.21,286.23,287.18,287.29,283.93,281.28,283.65,280.85,283.13,284.37,284.52,284.38,282.54,278.43,275.82,275.51,277.55,277.78,277.07,276.7,276.23,277.41,273.79,272.81,275.57,276.32,274.34,274.23,271.3,268.8,271.36,267.67,267.39,268.55,274.42,273.55,271.33,274.89,274.42,277.97,276.65,276.44,274.92,273.06,271.68,272.02,270.84,268.76,267.4,265.53,264.44,261.69,258.25,259.08,259,254.31,255.53,253.5,252.19,256.11,256.28,258.38,258.05,255.11,253.9,254.86,252.83,255.35,254.85,252.4,252,253.41,257.19,262.99,265.73,266.34,268.95,267.75,272.25,273.04,273.22,275.92,274.55,274.55,270.67,271.48,274.05,272.64,272.68,271.78,268.75,267.72,268.55,274.35,274.54,272.37,275.97,277.27,277.5,277.75,275.53,275.28,275.58,275.48,276.01,275.31,271.36,270.09,270.48,271.13,272.74,273.21,272.1,268.27,267.99,267.66,268.16,263.89,263.93,261.37,264.7,264.4,264.42,266.38,266.65,266.12,264.96,264.35,265.99,269.64,268.57,268.72,272.06,271,280.15,281.31,283.67,286.12,284.92,286.79,281.34,282.83,283.7,286.47,285.87,285.89,285.82,290.33,290.62,289.38,288.37,287.42,287.92,286.71,286.38,286.68,286.15,285.65,281.72,280.32,276.48,275.08,277.28,277.6,277.45,283.13,282.38,279.92,279.82,279.93,279.87,276.64,276,277.73,275.06,274.84,278.87,279.85,280.45,282.51,283.8,288.76,287.89,289,288.74,288.41,288.4,284.91,285.9,283.98,288.68,284.97,283.69,282.1,281.49,285.65,285.79,285.89,286.62,283,281.64,281.67,276.61,273.87,272.71,274,273.88,271.88,271.23,269.93,264.99,267.13,265.55,265.6,259.65,261.57,257.89,255.77,258.23,261.98,260.57,260.98,264.45,265.06,264.81,267.31,265.18,266.33,265.55,269.41,268.47,264.69,265.35,268.28,267.18,271.49,273.29,276.18,271.35,274.16,273.45,272.08,269.79,266.33,267.76,268.27,269.58,272.31,271.65,271.54,268.88,269.7,271.57,271.33,272.11,270.45,271.57,270.07,272.56,262.95,264.01,262.47,260.19,262.69,266.72,271.36,272.54,279.4,278.63,277.48,280.05,276.9,277.19,279.37,275.15,287.85,289.91,291.28,291.78,296.53,300.17,300.51,302.59,300.81,299.04,296.64,296.1,295.23,297.29,292.42,292.35,292.46,293.7,292.86,294.28,294.96,298.8,297.49,300.07,298.05,298.05,297.22,296.83,295.54,294.29,293,291.93,288.61,288.57,288.24,291.08,289.85,293.64,297.41,297.19,297.18,295.24,295.61,293.55,298.69,297.45,297.29,297.78,296.95,294.85,295.49,294.56,296.95,295.9,296.47,296.88,297.37,298.65,294.41,294.43,296.19,295.2,293.11,291.63,292.26,293.35,292.93,299.66,298.26,302.25,302.76,303.37,303.69,301.02,304.02,301.35,305.35,308.73,311.2,316.84,317.22,314.97,317.67,315.76,314.84,313.22,310.92,309.26,316.2,318.99,318.05,317.48,318.31,316.25,315.37,314.29,315.97,314.94,317.72,318.51,317.31,314.42,315.87,316.75,320.55,322.53,323.56,320.8,318.08,313.99,315.86,317.89,317.89,320.12,318.64,314.64,315.17,314.86,313.22,312.94,313.94,313.45,311.61,313.04,308.54,313.38,314,314.61,313.82,311.81,316.34,314.89,312.42,323.32,321.6,321.79,320.35,322.88,322.74,321.99,322.98,320.7,317.67,314.78,311.14,310.46,304.58,308.35,312.86,316.83,317.34,316.81,312.17,314.47,312.83,316.61,314.4,310.87,308.13,304.83,311.62,310.48,318.01,323.29,327.01,333.36,333.38,333.4,338.05,335.38,334.08,330.91,330.93,326.27,329.52,329.13,329.19,330.02,327.39,326.72,325.67,327.61,330.25,331.28,328.97,324.58,327.13,326,324.74,320.25,318.89,321.21,319.72,325.79,326.76,326.6,326.23,324.74,326.18,324.07,325.09,324.68,323.59,324.52,329.61,328.77,324.78,325.25,330.68,330.99,329.53,335.44,334.51,335.49,333.51,332.92,334.18,334.36,332.17,333.62,334.33,335.96,337.14,337.8,336.76,337.4,338.83,337.53,338.76,333.57,330.38,329.23,326.99,329.31,328.96,329.45,328.89,326.47,328.4,328.51,327.82,327.35,328.11,326.12,322.49,316.27,313.85,313.82,314.29,316.4,316.71,318.25,318.48,318.51,318.93,313.69,312.52,310,310.42,309.83,307.43,306.97,303.18,304.06,304.19,307.78,308.28,309.65,308.64,309.53,311.21,310.73,309.71,309.34,308.14,308.39,309.02,307.16,304.93,302.72,308.37,309.52,313.4,313.96,313.46,312.29,317.69,317.04,314.6,314.13,320.51,319.46,320.15,322.01,321.79,320.61,318.91,318.65,318.52,317.35,316.35,313.58,313.59,311.46,310.66,311.88,311.77,310.46,312.39,311.76,312.56,310.84,312.12,311.89,310.26,309.47,307.52,309.31,308.61,306.79,306.69,307.95,308.02,306.24,309.38,306.25,305.68,307.33,307.83,304.03,304.67,304.59,306.52,306.96,305.22,301.71,301.36,300.63,298.08,298.47,299.34,299.67,298.87,298.25,299.75,296.19,299.86,292.47,289.65,287.21,287.34,286.78,285.41,281.96,280.05,277.76,276.49,278.23,278.1,277.31,279.12,276.21,275.49,277.21,279.01,279.47,280.74,280.92,281.6,280.64,281.66,281.86,281.25,280.36,282.31,282.81,282.63,283.84,280.75,281.86,280.11,277.89,277.89,275.41,272.29,271.62,272.29,271.87,270.41,269.77,272.65,270.06,268.97,270.38,272.89,272.85,272.11,269.73,268.84,268.93,268.81,267.9,268.81,268.66,267.69,267.72,268.97,269.49,268.85,268.49,269.56,268.09,270.48,268.15,267.3,267.12,266.52,267.7,267.08,267.37,266.15,267.91,269.95,268.15,263.73,263.74,263.2,261.98,263.12,262.97,260.36,260.01,259.7,262.49,261.9,261.61,261.97,262.1,262.59,261.93,262.56,261.45,262,261.63,260.72,260.91,262,256.34,255.63,252.14,252.88,254.48,254.26,252.91,252.96,252.26,252.03,253.66,252.37,249.51,250.21,250.46,250.32,249.2,250.01,251.99,255.31,249.67,255.26,254.6,252.57,252.9,252.83,255.99,255.93,256.53,256.66,255.52,258.57,259.48,257.26,258.41,258.21,257.98,256.19,255.09,253.93,256.2,256.15,260.31,260.06,261.13,258.99,259.18,257.49,260.35,258.21,259.57,257.48,258.37,258.34,256.52,255.09,253.93,251.77,250.53,257.31,260.86,260.31,260.93,259.64,256.5,256.03,256.87,257.49,256.49,256.23,257.26,257.3,258.42,257.27,258.69,258.11,256.04,256.15,256.17,256.18,255.43,255.85,254.11,252.36,249.24,248.65,251.93,253.81,251.48,251.86,252.73,252.72,250.65,250.04,250.44,250.66,250.97,251.52,251.02,249.8,249.25,247.14,246.99,243.43,244.6,241.86,246.91,247.62,246.52,244.14,242.32,240.08,239.28,239.21,246.31,246.75,245.34,245.17,241.63,241.61,243.3,243.35,244.05,248.96,250.19,250.04,247.85,244.39,244.18,243.58,243.63,241.73,241.85,240.58,240.91,237.65,239.85,238.74,239.04,239.82,241.03,240.82,240.6,242.34,243.07,243.68,242.23,243.31,244.29,243.47,245.2,246.27,248.69,248.92,248.13,248.32,249.39,247.26,247.88,248,248.53,248.89,243.71,242.06,241.77,242.29,241.99,240.58,243.05,242.36,245.86,246.54,245.53,243.95,243.79,244.08,245.23,245.41,244.28,244.63,244.09,242.35,241.83,242.15,241.97,241.43,239.13,238.44,240.21,239.74,240.09,238.63,234.63,235.22,235.37,234.91,235.03,234.95,235.27,234.74,231.94,231.52,228.4,224.98,226.7,233.3,232.91,228.97,231.1,233.67,232.1,231.51,230.96,227.19,230.21,228.79,223.81,224.54,230.08,228.59,228.78,231.38,233.52,230.55,230.83,233.68,231.93,234.6,236.13,234.63,240.38,241.22,241.79,245.33,246.53,245.48,243.76,243,244.17,243.49,238.8,238.17,240.35,240.6,239.4,239.23,240.68,242.15,244.68,246.6,248.7,244.24,249.07,249.43,246.58,247.51,245.92,244.8,244.79,241.44,241.26,238.87,242.71,245.14,245.86,245.86,249.21,250.25,251.79,252.33,252.12,250.6,249.41,248.93,249.79,250.04,250.36,249.41,247.22,249.25,248.53,247.47,247.37,247.89,244.94,246.04,246.49,246.02,243.52,240.18,237.98,237.15,238.62,236.71,233.79,234.26,234.26,238.68,236.72,241.12,239.29,238.78,233.59,233.06,233.74,237.18,234.4,227.76,227.31,227.9,230.4,229.91,229.55,232.8,232.35,228.94,227.71,223.07,221.53,227.14,231.59,234.27,235.2,235.37,237.32,237.24,237.91,239.18,239.79,240.04,243.12,243.55,241.48,244.3,243.61,245.97,245.21,244.98,244.91,247.31,247.88,250.35,248.91,250.23,251.47,249.65,248.64,249.84,246.83,246.77,244.94,248.05,248.3,254.66,255.5,255.07,252.27,251.26,254.48,253.8,254.94,254.52,250.99,249.84,249.67,249.08,248.49,250.74,251.66,252.32,252.11,253.51,254.21,254.94,255.47,254.11,256.29,258.74,260.39,260.06,260.16,265.41,266.03,262.66,265.36,262.92,261.97,261.33,263.69,263.25,261.42,261.49,260.81,262.47,264.03,267.33,266.42,268.03,268.55,270.05,271.05,272.59,268.64,268.17,268.55,268.28,268.45,265.77,265.57,263.48,261.95,258.33,258.51,256.88,256.93,256.75,254.99,254.97,257.28,256.1,255.54,255.99,258.94,259.16,258.95,258.7,258.99,258.22,258.18,252.44,252.18,250.28,252.16,251.75,252.77,255.96,254.16,254.31,254.5,253.65,251.46,252.93,252.96,251.28,250.8,250.37,249.81,249.76,247.71,248.4,247.66,249.26,250.16,249.78,251.6,250.38,250.61,249.88,250.46,252.21,252.2,250.14,250.32,248.47,248.59,247.24,244.78,242.22,245.76,245.99,246.29,245.7,246.05,243.94,240.53,239.93,244.26,244.79,244.05,246.3,250.05,250.07,249.06,249.7,247.96,243.82,243.72,244.43,246.27,246.44,245.54,249.35,253.21,253.71,254.24,254.06,251.65,251.41,251.59,253.7,253.3,252,251.72,252.34,249.9,248.96,250.33,250.65,248.3,248.18,250.11,251.26,250.45,250.64,247.39,247.19,245.86,246.51,248.69,250.45,248.84,248.64,243.3,243.89,242.91,243.38,244.12,241.48,243.9,239.84,242.79,243.87,244.47,244.18,245.06,248.36,249.93,249.19,250.06,252.81,256.77,257.95,258.33,258.46,258.88,258.49,260.15,262.31,261.72,264.01,261.45,260.56,261.39,259.8,262.09,263.19,262.27,262.61,265.27,265.41,266.19,265.88,265.14,264.46,264.26,262.53,266.79,266.62,264.24,265.88,265.91,263.34,263.32,262.02,265.64,266.6,267.63,269.65,268.56,269.68,271.17,268.01,265.53,263.47,262.72,262.56,262.86,261.51,261.66,261.93,260.82,260.4,257.27,256.72,259.17,258.87,259.93,259.95,260.63,261.13,262.04,259.74,260.56,258.78,260.03,258.16,259.75,256.77,255.31,258.83,258.7,260.43,259.43,258.75,262.01,262.62,262.64,259.68,260.56,262.22,261.4,259.94,262.57,263.01,260.36,262.33,263.42,263.33,262.4,263.04,263.42,262.97,262.4,262.43,258.4,255.8,254.31,253.84,252.35,255.07,255.33,255.8,256.8,257.42,261.08,261.2,261.55,260.9,261.52,259.66,259.83,259.74,260.51,260.53,262.41,261.21,260.47,259.89,259.47,259.34,259.7,258.95,258.11,257.44,257.26,255.08,251.56,252.31,250.68,248.68,251.32,251.87,250.15,249.02,251.09,251.11,255.49,254.48,257.35,257.63,257.3,254.78,256.29,258.41,258.28,257.31,256.24,254.01,255.22,250.95,252.92,253.66,253.64,252.74,250.97,252.31,251.87,250.47,250.51,248.56,246.04,245.3,250.01,252.89,249.91,248.95,252.89,253.74,257.08,256.34,254.81,253.46,255.36,254.73,253.97,254.08,252.48,253.63,255.76,255.98,255.41,254.48,257.64,264.24,263.32,263.15,263.58,263.24,261.27,260.2,259.98,258.72,257.9,258.04,259.05,260.55,262.68,263.7,260.71,261.1,261.48,264.84,267.58,269.57,269.7,267.15,266.26,265.21,263.86,262.2,265.62,267.81,265.03,264.2,258.44,258.04,262.81,260.15,260.53,263.34,264.62,264.96,266.59,268.63,266.91,271.44,270.28,269.74,267.51,269.36,268.03,271.11,271.22,271.24,269.59,268.25,269.02,265.81,266.35,262.9,263.14,261.85,261.78,261.87,261.48,260.91,262.94,262.68,261.45,262.83,263.02,262.56,263.86,260.83,262.32,262.38,261.2,258.12,255.25,254.62,252.15,252.05,251.13,251.74,248.86,245.67,245.71,245.71,243.37,240.37,242.49,245.13,248.89,249.23,249.82,248.2,243.78,243.13,243.39,242.75,246.8,248.25,249.33,248.89,247.99,248.78,246.53,247.8,247.71,247.84,246.63,243.18,242.03,242.92,244.82,242.02,243.43,242.72,243.88,236.23,236.94,235.12,237.28,238.56,236.63,240.8,241.05,242.27,238.65,231.52,231.75,233.47,236.57,240.26,245.44,247.13,244.77,245.36,244.49,248.5,250.19,252.2,251.2,256.51,260.54,260.29,261.47,261.21,260.92,258.59,258.19,257.32,256.66,260.19,258.18,258.6,258.99,256.6,256.29,253.29,252.72,257.53,254.02,253.84,255.2,256.02,254.92];