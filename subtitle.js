function playToggle() {
    if(play) {
        $('#lovelive').get(0).pause();
        $('#btn').removeClass('fa-pause');
        $('#btn').addClass('fa-play');
        play = false;
    } else {
        $('#lovelive').get(0).play();
        $('#btn').removeClass('fa-play');
        $('#btn').addClass('fa-pause');
        play =  true;
    }
  }
  
  function muteToggle() {
    if(mute) {
        $('#lovelive').get(0).muted = false;
        $('#mbtn').removeClass('fa-volume-off');
        $('#mbtn').addClass('fa-volume-up');
        $('#volume').get(0).value = $('#lovelive').get(0).volume;
        mute = false;
    } else {
        $('#lovelive').get(0).muted = true;
        $('#mbtn').removeClass('fa-volume-up');
        $('#mbtn').addClass('fa-volume-off');
        $('#volume').get(0).value = 0;
        mute =  true;
    }
  }
  
  function playf() {
        $('#lovelive').get(0).play();
        $('#btn').removeClass('fa-play');
        $('#btn').addClass('fa-pause');
        play =  true;
  }
  
	function setVolume() {
		var volume = document.getElementById("volume");
		if(volume.value>0) $('#lovelive').get(0).muted = false;
		$('#lovelive').get(0).volume = volume.value;
	}
  
    var actor_all_3 = '';
    for (var i = 1; i <= 9; i++) {
    actor_all_3 = actor_all_3 + "<div class='member0"+i+"_03'></div>";
  }
  
  var actor_all_3_preload = '';
    for (var i = 1; i <= 9; i++) {
    actor_all_3_preload = actor_all_3_preload + "<div class='member0"+i+"_03 preload'></div>";
  }
  
  var actor_all_1 = '';
    for (var i = 1; i <= 9; i++) {
    actor_all_1 = actor_all_1 + "<div class='member0"+i+"_01'></div>";
  }
  
  var actor_all_1_preload = '';
    for (var i = 1; i <= 9; i++) {
    actor_all_1_preload = actor_all_1_preload + "<div class='member0"+i+"_01 preload'></div>";
  }
    
    var act1 = "<div class='script'>";
    act1 = act1 + "<div class='member00 jp'>Start : Dash</div>";
    act1 = act1 + "<div class='member00 ko'>sing : Muz</div>";
    act1 = act1 + "<div class='member00 ko'>LoveLive EP13 삽입곡</div>";
    act1 = act1 + "<div class='member00 ko'><a href='javascript:playf();'>Play!</a></div>"; 
    act1 = act1 + actor_all_3_preload + actor_all_1_preload;
  act1 = act1 + "</div>";
  
  var act2 = "<div class='script'>";
    act2 = act2 + "<div class='members1 jp'>I Say~</div>";
    act2 = act2 + "<div class='members1 ko'>Hey Hey Hey Start : Dash! * 2 </div>";
    act2 = act2 + actor_all_3;
  act2 = act2 + "</div>";
  
  var act2_2 = "<div class='script'>";
    act2_2 = act2_2 + "<div class='members1 ko'>Hey Hey Hey Start : Dash! * 2 </div>";
    act2_2 = act2_2 + actor_all_3;
  act2_2 = act2_2 + "</div>";
  
  var act3 = "<div class='script'>";
    act3 = act3 + "<div class='member03 jp'>うぶ毛の小鳥たちも</div>";
    act3 = act3 + "<div class='member03 ko'>솜털이 난 작은새들도</div>";
    act3 = act3 + "<div class='member03_03'></div>";
  act3 = act3 + "</div>";
  
  var act4 = "<div class='script'>";
    act4 = act4 + "<div class='member05 jp'>いつか空に羽ばたく</div>";
    act4 = act4 + "<div class='member05 ko'>언젠가 하늘로 날개짓하며</div>";
    act4 = act4 + "<div class='member05_03'></div>";
  act4 = act4 + "</div>";
  
  var act5 = "<div class='script'>";
    act5 = act5 + "<div class='member02 jp'>大きな&#24375;い翼で飛ぶ</div>";
    act5 = act5 + "<div class='member02 ko'>커다랗고 강한 날개로 날아가</div>";
    act5 = act5 + "<div class='member02_03'></div>";
  act5 = act5 + "</div>";
  
  var act6 = "<div class='script'>";
    act6 = act6 + "<div class='member06 jp'>諦めちゃダメなんだ</div>";
    act6 = act6 + "<div class='member06 ko'>포기하면 안돼</div>";
    act6 = act6 + "<div class='member06_03'></div>";
  act6 = act6 + "</div>";
  
  var act7 = "<div class='script'>";
    act7 = act7 + "<div class='member07 jp'>その日が絶&#23550;&#26469;る</div>";
    act7 = act7 + "<div class='member07 ko'>그날이 반드시 올거야</div>";
    act7 = act7 + "<div class='member07_03'></div>";
  act7 = act7 + "</div>";
  
  var act8 = "<div class='script'>";
    act8 = act8 + "<div class='member06 jp'>君も感じてるよね   /   始まりの鼓動</div>";
    act8 = act8 + "<div class='member06 ko'>너도 느끼고 있지   /   시작의 고동</div>";
    act8 = act8 + "<div class='member06_03'></div>";
  act8 = act8 + "</div>";
  
  var act9 = "<div class='script'>";
    act9 = act9 + "<div class='member08 jp'>明日よ&#22793;われ!</div>";
    act9 = act9 + "<div class='member08 ko'>내일이여 달라져라!</div>";
    act9 = act9 + "<div class='member08_03'></div>";
  act9 = act9 + "</div>";
  
  var act10 = "<div class='script'>";
    act10 = act10 + "<div class='member09 jp'>希望に&#22793;われ!</div>";
    act10 = act10 + "<div class='member09 ko'>희망으로 바뀌어라!</div>";
    act10 = act10 + "<div class='member09_03'></div>";
  act10 = act10 + "</div>";
  
  var act11 = "<div class='script'>";
    act11 = act11 + "<div class='member01 jp'>眩しい光に照らされて&#22793;われ</div>";
    act11 = act11 + "<div class='member01 ko'>눈부신 빛을 받으며 바뀌어라</div>";
    act11 = act11 + "<div class='member01_03'></div>";
  act11 = act11 + "</div>";
  
  var act12 = "<div class='script'>";
    act12 = act12 + "<div class='members1 jp'>悲しみに閉ざされて / 泣くだけの君じゃない</div>";
    act12 = act12 + "<div class='members1 ko'>슬픔에 갇혀서 / 울고만 있을 네가 아니야</div>";
    
    act12 = act12 + actor_all_3;
  act12 = act12 + "</div>";
  
  var act13 = "<div class='script'>";
    act13 = act13 + "<div class='members1 jp'>熱い胸　きっと未&#26469;を切り開く&#31560;さ </div>";
    act13 = act13 + "<div class='members1 ko'>뜨거운 가슴 분명 미래를 개척할거야</div>";
    
    act13 = act13 + actor_all_3;
  act13 = act13 + "</div>";

  var act14 = "<div class='script'>";
    act14 = act14 + "<div class='members1 jp'>悲しみに閉ざされて /  泣くだけじゃつまらない </div>";
    act14 = act14 + "<div class='members1 ko'>슬픔에 갇혀서 / 울고만 있으면 시시하잖아</div>";
    
    act14 = act14 + actor_all_3;
  act14 = act14 + "</div>";
  
  
  var act15 = "<div class='script'>";
    act15 = act15 + "<div class='members1 jp'>きっと (きっと) 君の (夢の) /  チカラ (いまを) 動かすチカラ </div>";
    act15 = act15 + "<div class='members1 ko'>분명 (분명) 너의 (꿈의) / 힘(지금을) 움직이는 힘 </div>";
    
    act15 = act15 + actor_all_3;
  act15 = act15 + "</div>";
  
  var act16 = "<div class='script'>";
    act16 = act16 + "<div class='members1 jp'>信じてるよ…だから START!! </div>";
    act16 = act16 + "<div class='members1 ko'>믿고 있어...그러니까 START!!</div>";
    
    act16 = act16 + actor_all_3;
  act16 = act16 + "</div>";
  
  var act17 = "<div class='script'>";
    act17 = act17 + "<div class='member05 jp'>雨上がりの&#27671;分で</div>";
    act17 = act17 + "<div class='member05 ko'>비가 그친 기분으로</div>";
    act17 = act17 + "<div class='member05_03'></div>";
  act17 = act17 + "</div>";
  

  var act18 = "<div class='script'>";
    act18 = act18 + "<div class='member07 jp'>高まる期待のなか</div>";
    act18 = act18 + "<div class='member07 ko'>높아지는 기대 속</div>";
    act18 = act18 + "<div class='member07_03'></div>";
  act18 = act18 + "</div>";
  
  var act19 = "<div class='script'>";
    act19 = act19 + "<div class='member03 jp'>&#36499;いたことさえも</div>";
    act19 = act19 + "<div class='member03 ko'>실패했던 일조차도</div>";
    act19 = act19 + "<div class='member03_03'></div>";
  act19 = act19 + "</div>";
  
  
  var act20 = "<div class='script'>";
    act20 = act20 + "<div class='members1 jp'>思い出にしよう</div>";
    act20 = act20 + "<div class='members1 ko'>추억으로 삼자</div>";
    
    act20 = act20 + actor_all_3;
  act20 = act20 + "</div>";
  

  var act21 = "<div class='script'>";
    act21 = act21 + "<div class='member01 jp'>明日が&#21682;くよ!</div>";
    act21 = act21 + "<div class='member01 ko'>내일이 피어나!</div>";
    act21 = act21 + "<div class='member01_03'></div>";
  act21 = act21 + "</div>";
  

  var act22 = "<div class='script'>";
    act22 = act22 + "<div class='member01 jp'>希望が&#21682;くよ!</div>";
    act22 = act22 + "<div class='member01 ko'>희망이 피어나!</div>";
    act22 = act22 + "<div class='member01_03'></div>";
  act22 = act22 + "</div>";
  
  var act23 = "<div class='script'>";
    act23 = act23 + "<div class='member01 jp'>&#27005;しいメロディ&#12540;口ずさみ&#21682;いた</div>";
    act23 = act23 + "<div class='member01 ko'>즐거운 멜로디가 흥얼거리며 피었어</div>";
    act23 = act23 + "<div class='member01_03'></div>";
  act23 = act23 + "</div>";
  
  var act24 = "<div class='script'>";
		act24 = act24 + "<div class='members1 jp'>喜びを受けとめて  /  君と僕つながろう</div>";
		act24 = act24 + "<div class='members1 ko'>기쁨을 받아들이고  /  너와 나 맺어지자</div>";
		
		act24  = act24  + actor_all_3;
	act24 = act24 + "</div>";
	
	
	var act25 = "<div class='script'>";
		act25 = act25 + "<div class='members1 jp'>迷い道　やっと外へ?けだした?さ</div>";
		act25 = act25 + "<div class='members1 ko'>미로에서 드디어 밖으로 나왔을거야</div>";
		
		act25 = act25 + actor_all_3;
	act25 = act25 + "</div>";
	
	
	
	var act26 = "<div class='script'>";
		act26 = act26 + "<div class='members1 jp'>喜びを受けとめて / 君と僕　進むだろう</div>";
		act26 = act26 + "<div class='members1 ko'>기쁨을 받아들이고 / 너와 나 나아가겠지</div>";
		
		act26 = act26 + actor_all_3;
	act26 = act26 + "</div>";
	
	
	
	var act27 = "<div class='script'>";
		act27 = act27 + "<div class='members1 jp'>それは (それは) 遠い (夢の) / カケラ (だけど) 愛しいカケラ</div>";
		act27 = act27 + "<div class='members1 ko'>그것은 (그것은) 먼 (꿈의) / 조각(하지만) 사랑스러운 조각</div>";
		
		act27 = act27 + actor_all_3;
	act27 = act27 + "</div>";
	
	var act28 = "<div class='script'>";
		act28 = act28 + "<div class='members1 jp'>彼方へと…僕は DASH!!</div>";
		act28 = act28 + "<div class='members1 ko'>저편을 향해.....난 DASH!!</div>";
		
		for (var i = 1; i <= 9; i++) {
			act28 = act28 + "<div class='member0"+i+"_03'></div>";
		}
	act28 = act28 + "</div>";
	
	
	var act29 = "<div class='script'>";
		act29 = act29 + "<div class='member01 jp'>またひとつ　夢が生まれ…</div>";
		act29 = act29 + "<div class='member01 ko'>또 하나 꿈이 태어났어...</div>";
		act29 = act29 + "<div class='member01_03'></div>";
	act29 = act29 + "</div>";
	
	

	var act30 = "<div class='script'>";
		act30 = act30 + "<div class='member02 jp'>悲しみに閉ざされて</div>";
		act30 = act30 + "<div class='member02 ko'>슬픔에 갇혀서</div>";
		act30 = act30 + "<div class='member02_01'></div>";
	act30 = act30 + "</div>";
	
	
	
	var act31 = "<div class='script'>";
		act31 = act31 + "<div class='member06 jp'>泣くだけの君じゃない</div>";
		act31 = act31 + "<div class='member06 ko'>울고만 있을 네가 아니야</div>";
		act31 = act31 + "<div class='member06_01'></div>";
	act31 = act31 + "</div>";
	
	

	var act32 = "<div class='script'>";
		act32 = act32 + "<div class='member01 jp'>熱い胸　きっと未?を切り開く?さ</div>";
		act32 = act32 + "<div class='member01 ko'>뜨거운 가슴 분명 미래를 개척할거야</div>";
		act32 = act32 + "<div class='member01_01'></div>";
	act32 = act32 + "</div>";
  
  var end = "<div class='script3'>";
    end = end + "<div class='members3 jp'>ラブライブ! School idol project</div>";
    end = end + "<div class='members3 ko'>러브라이브! School idol project</div>";
  end = end + "</div>";
  
  
  var act=1;
  var ganju=0;
  
  $("#duration").html(act1).children('.script').fadeIn('slow');
    
    audio = $('#lovelive').get(0);
    
    var play=false;
    var mute=false;
    
    playToggle();
    
  // http://stackoverflow.com/a/10381794/3211589
  audio.addEventListener("timeupdate", function(){  
  var duration = document.getElementById('nowtime');
  var time = parseInt(audio.currentTime*10);
  var s = parseInt(audio.currentTime % 60);    var m = parseInt((audio.currentTime / 60) % 60);
  if(s<10) s = '0' + s;
  var f_s = parseInt(audio.duration % 60);    var f_m = parseInt((audio.duration / 60) % 60);
  duration.innerHTML = m + ':' + s + ' / ' + f_m + ':' + f_s; 
  
  var progress = document.getElementById("progress");
  var value = 0;
  if (audio.currentTime > 0) {
     value = Math.floor((100 / audio.duration) * audio.currentTime);
  }
  progress.style.width = value + "%";
  
  if(time>50 && time<60) $("#duration").fadeOut('slow');
  
  if(time>=60 && act==1) {
    act=2;
    $("#duration").html(act2);
    $("#duration").fadeIn('slow');
  }
  
  if(time>220 && time<230) $("#duration").fadeOut('slow');
  
  if(time>=230 && act==2) {
    act=3;
    $("#duration").html(act3);
    $("#duration").fadeIn('slow');
  }
  if(time>250 && time<260) $("#duration").fadeOut('slow');
  
  if(time>=260 && act==3) {
    act=4;
    $("#duration").html(act4);
    $("#duration").fadeIn('slow');
  }
  
  if(time>280 && time<290) $("#duration").fadeOut('slow');
  
  if(time>290 && act==4) {
    act=5;
    $("#duration").html(act5);
    $("#duration").fadeIn('slow');
  }
  
  if(time>340 && time<350) $("#duration").fadeOut('slow');
  
  if(time>=350 && act==5) {
    act=6;
    $("#duration").html(act6);
    $("#duration").fadeIn('slow');
  }
  
  if(time>380 && time<390) $("#duration").fadeOut('slow');
  
  if(time>=390 && act==6) {
    act=7;
    $("#duration").html(act7);
    $("#duration").fadeIn('slow');
  }
  
  if(time>410 && time<420) $("#duration").fadeOut('slow');
  
  if(time>=420 && act==7) {
    act=8;
    $("#duration").html(act8);
    $("#duration").fadeIn('slow');
  }
  
  if(time>470 && time<480) $("#duration").fadeOut('slow');
  
  if(time>=480 && act==8) {
    act=9;
    $("#duration").html(act9);
    $("#duration").fadeIn('slow');
  }
  
  if(time>510 && time<520) $("#duration").fadeOut('slow');
  
  if(time>=520 && act==9) {
    act=10;
    $("#duration").html(act10);
    $("#duration").fadeIn('slow');
  }
  
  if(time>540 && time<550) $("#duration").fadeOut('slow');
  
  if(time>=550 && act==10) {
    act=11;
    $("#duration").html(act11);
    $("#duration").fadeIn('slow');
  }
  
  if(time>620 && time<630) $("#duration").fadeOut('slow');
  
  if(time>=630 && act==11) {
    act=12;
    $("#duration").html(act12);
    $("#duration").fadeIn('slow');
  }
  
  if(time>680 && time<690) $("#duration").fadeOut('slow');
  
  if(time>=690 && act==12) {
    act=13;
    $("#duration").html(act13);
    $("#duration").fadeIn('slow');
  }
  
  if(time>750 && time<760) $("#duration").fadeOut('slow');
  
  if(time>=760 && act==13) {
    act=14;
    $("#duration").html(act14);
    $("#duration").fadeIn('slow');
  }
  
  if(time>810 && time<820) $("#duration").fadeOut('slow');
  
  if(time>=820 && act==14) {
    act=15;
    $("#duration").html(act15);
    $("#duration").fadeIn('slow');
  }
  
  if(time>870 && time<880) $("#duration").fadeOut('slow');
  
  if(time>=880 && act==15) {
    act=16;
    $("#duration").html(act16);
    $("#duration").fadeIn('slow');
  }
  
  if(time>930 && time<940) $("#duration").fadeOut('slow');
  
  if(time>=940 && act==16) {
    act=17;
    $("#duration").html(act2_2);
    $("#duration").fadeIn('slow');
  }
  
  if(time>1050 && time<1060) $("#duration").fadeOut('slow');
  
  if(time>=1060 && act==17) {
    act=18; //act에서 1씩 빼줘야함
    $("#duration").html(act17);
    $("#duration").fadeIn('slow');
  }
  
  if(time>1090 && time<1100) $("#duration").fadeOut('slow');
  
  if(time>=1100 && act==18) {
    act=19; //act에서 1씩 빼줘야함
    $("#duration").html(act18);
    $("#duration").fadeIn('slow');
  }
  
  if(time>1120 && time<1130) $("#duration").fadeOut('slow');
  
  if(time>=1130 && act==19) {
    act=20; //act에서 1씩 빼줘야함
    $("#duration").html(act19);
    $("#duration").fadeIn('slow');
  }
  
  if(time>1150 && time<1160) $("#duration").fadeOut('slow');
  
  if(time>=1160 && act==20) {
    act=21; //act에서 1씩 빼줘야함
    $("#duration").html(act20);
    $("#duration").fadeIn('slow');
  }
  
  if(time>1180 && time<1190) $("#duration").fadeOut('slow');
  
  if(time>=1190 && act==21) {
    act=22; //act에서 1씩 빼줘야함
    $("#duration").html(act21);
    $("#duration").fadeIn('slow');
  }
  
  if(time>1210 && time<1220) $("#duration").fadeOut('slow');
  
  if(time>=1220 && act==22) {
    act=23; //act에서 1씩 빼줘야함
    $("#duration").html(act22);
    $("#duration").fadeIn('slow');
  }
  
  if(time>1240 && time<1250) $("#duration").fadeOut('slow');
  
  if(time>=1250 && act==23) {
    act=24; //act에서 1씩 빼줘야함
    $("#duration").html(act23);
    $("#duration").fadeIn('slow');
  }
  
  if(time>1310 && time<1320) $("#duration").fadeOut('slow');
  
  if(time>=1320 && act==24) {
    act=25; //act에서 1씩 빼줘야함
    $("#duration").html(act24);
    $("#duration").fadeIn('slow'); 
  }
  
  if(time>1390 && time<1400) $("#duration").fadeOut('slow');
  
  if(time>=1400 && act==25) {
    act=26; //act에서 1씩 빼줘야함
    $("#duration").html(act25);
    $("#duration").fadeIn('slow'); 
  }
  
  if(time>1450 && time<1460) $("#duration").fadeOut('slow');
  
  if(time>=1460 && act==26) {
    act=27; //act에서 1씩 빼줘야함
    $("#duration").html(act26);
    $("#duration").fadeIn('slow'); 
  }
  
  if(time>1510 && time<1520) $("#duration").fadeOut('slow');
  
  if(time>=1520 && act==27) {
    act=28; //act에서 1씩 빼줘야함
    $("#duration").html(act27);
    $("#duration").fadeIn('slow'); 
  }
  
  if(time>1580 && time<1590) $("#duration").fadeOut('slow');
  
  if(time>=1590 && act==28) {
    act=29; //act에서 1씩 빼줘야함
    $("#duration").html(act28);
    $("#duration").fadeIn('slow'); 
    
  }
  
  if(time>1640 && time<1650) $("#duration").fadeOut('slow');
  
  if(time>=1650 && act==29) {
    act=30; //act에서 1씩 빼줘야함
    $("#duration").html(act29);
    $("#duration").fadeIn('slow'); 
    
  }
  
  if(time>1750 && time<1760) $("#duration").fadeOut('slow');
  
  if(time>=1760 && ganju==0) {
    ganju=1;
    $("#duration").html(end);
    $("#duration").fadeIn('slow'); 
    
  }
  
  if(time>1890 && time<1900) $("#duration").fadeOut('slow');
  
  if(time>=1900 && act==30) {
    act=31; //act에서 1씩 빼줘야함
    $("#duration").html(act30);
    $("#duration").fadeIn('slow'); 
    
  }
  
  if(time>1930 && time<1940) $("#duration").fadeOut('slow');
  
  if(time>=1940 && act==31) {
    act=32; //act에서 1씩 빼줘야함
    $("#duration").html(act31);
    $("#duration").fadeIn('slow'); 
    
  }
  
  if(time>1960 && time<1970) $("#duration").fadeOut('slow');
  
  if(time>=1970 && act==32) {
    act=33; //act에서 1씩 빼줘야함
    $("#duration").html(act32);
    $("#duration").fadeIn('slow'); 
    
  }
  
  if(time>2040 && time<2050) $("#duration").fadeOut('slow');
  
  if(time>=2050 && act==33) {
    act=34; //act에서 1씩 빼줘야함
    //$("#duration").html(act33);
    //$("#duration").fadeIn('slow'); 
    $("#duration").html(end);
    $("#duration").fadeIn('slow'); 
    
              //끝의 끝(??)
  }
  
  }, false);
  /*
  // 볼륨 페이드 아웃(마지막 이벤트에 넣을것
    // https://gist.github.com/loudnarrative/2396206
    var vol = audio.volume;
    var orgvol = audio.volume;
    var interval = 600;
    var intervalID = setInterval(function() {
            if (vol > 0) {
                if(vol<0.3) $("#duration").fadeOut('slow');
                vol -= 0.05;
                      audio.volume = vol.toFixed(2);
            } else {
            	audio.src="https://267c7ee8c83e5b434fea57c79a19dbb61008972d.googledrive.com/host/0B58CrngHA11wYmRxdHVOelB3YUU/bgm1.mp3";
                audio.load();
                duration.innerHTML = '0:00 / ' + f_m + ':' + f_s; 
                audio.currentTime = 0;
                $('#btn').removeClass('fa-pause');
          $('#btn').addClass('fa-play');
          play = false;
          audio.volume = orgvol.toFixed(2);
          $("#duration").html(act1);
          $("#duration").fadeIn('slow');
          act=1;
                clearInterval(intervalID);
            }
              }, interval);
              */
