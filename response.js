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

///////////////////////////////////////////////////////////////////////////
//전역 함수
// 배열 합계 구하기 함수
function sum(array) {
	var result = 0.0;
  
	for (var i = 0; i < array.length; i++)
	  result += array[i];
  
	return result;
  }
  
  // 배열 평균 구하기 함수
  function average(array) {
	var sum = 0.0;
  
	for (var i = 0; i < array.length; i++)
	  sum += array[i];
  
	return sum / array.length;
  }


/*
div = function(rr,aa,n,r){
	res=""
	var Timer = new Date();
	D.delete('test')
	for(i=0; i<n; i++){
		a=10*rr
		q=Math.floor(a/aa)
		rr=a-q*aa
		res+=q
		D.insert('test',{id:(i+1),num:q})
	}

*/

pip = function(piurl,nn,r){  //nn=숫자 수
	var Timer = new Date();
	ddd= org.jsoup.Jsoup.connect(piurl).get().select('body').text().split('')
	eee = ddd.splice(3,nn);
	D.delete('test3');
	D.delete('test4');
	for(i=0; i<eee.length; i++){
		D.insert('test3',{num:eee[i]})
	}
	for(j=0; j<eee.length; j+=2){
		D.insert('test4',{num:(eee[j]+eee[j+1])})
	}
	var time = (new Date() - Timer) / 1000;
	r.replier.reply(eee.length+'자리수 계산완료'+' ' + time + "s\n");
}

pic = function(r){
	
	leng = D.selectForArray('test3').length

	count_0 = D.selectForArray('test3',null,'num=?',[0]).length;
	count_1 = D.selectForArray('test3',null,'num=?',[1]).length;
	count_2 = D.selectForArray('test3',null,'num=?',[2]).length;
	count_3 = D.selectForArray('test3',null,'num=?',[3]).length;
	count_4 = D.selectForArray('test3',null,'num=?',[4]).length;
	count_5 = D.selectForArray('test3',null,'num=?',[5]).length;
	count_6 = D.selectForArray('test3',null,'num=?',[6]).length;
	count_7 = D.selectForArray('test3',null,'num=?',[7]).length;
	count_8 = D.selectForArray('test3',null,'num=?',[8]).length;
	count_9 = D.selectForArray('test3',null,'num=?',[9]).length;

	r.replier.reply('총'+leng+'개 중에'+'\n'+
					'0 : '+ count_0 + '(' +(count_0/leng*100).toFixed(1)+'%)\n'+
					'1 : '+ count_1 + '(' +(count_1/leng*100).toFixed(1)+'%)\n'+
					'2 : '+ count_2 + '(' +(count_2/leng*100).toFixed(1)+'%)\n'+
					'3 : '+ count_3 + '(' +(count_3/leng*100).toFixed(1)+'%)\n'+
					'4 : '+ count_4 + '(' +(count_4/leng*100).toFixed(1)+'%)\n'+
					'5 : '+ count_5 + '(' +(count_5/leng*100).toFixed(1)+'%)\n'+
					'6 : '+ count_6 + '(' +(count_6/leng*100).toFixed(1)+'%)\n'+
					'7 : '+ count_7 + '(' +(count_7/leng*100).toFixed(1)+'%)\n'+
					'8 : '+ count_8 + '(' +(count_8/leng*100).toFixed(1)+'%)\n'+
					'9 : '+ count_9 + '(' +(count_9/leng*100).toFixed(1)+'%)\n')


	leng_2 = D.selectForArray('test4').length

	count_set = [];
	for (i=0; i<100; i++){
		count_set.push(D.selectForArray('test4',null,'num=?',[i]).length);
	}

	max_n = Math.max.apply(null,count_set)
	max_num = count_set.indexOf(max_n);
	min_n = Math.min.apply(null,count_set)
	min_num = count_set.indexOf(min_n);

	res="";
	for(j=0; j<100; j++){
		count_p = (count_set[j]/leng_2*100).toFixed(1) + '%\n'
		res+= j + ' : ' +count_p;
	}

	r.replier.reply(res + '\n' + 'Max :' + max_num + '(' + max_n + ')' + '\n' + 'Min :' + min_num + '(' + min_n + ')')

}



function response(room, msg, sender, isGroupChat, replier, imageDB) {
	
	r = { replier: replier, msg: msg, sender: sender, room: room, imageDB :imageDB};
	
	try {
	
		if (msg == "ㅎㅎ" || msg == "호호g") {
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


	if(msg.indexOf("ss") != -1) {
		denominator = Number(msg.substr(3).split('/')[1]) // 분모
		numerator = Number(msg.substr(3).split('/')[0]) // 분자
		res=""
		for(i=0;i<1000;i++){
			aaa = 10*numerator
			qqq = Math.floor(aaa/denominator)
			numerator = aaa-qqq*denominator
			res += qqq
		}
		replier.reply(res)
		}


	
    }catch (e) {
    replier.reply( e + "\n" + e.stack);
    }
}