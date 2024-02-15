var screen=document.getElementById("screen");screenLeft=screen.getBoundingClientRect().left,screenRight=screen.getBoundingClientRect().right,screenWidth=screen.getBoundingClientRect().width,screenCenter=screenRight-screenWidth/2;var itemsWearing=document.querySelectorAll(".outfit"),doll=itemsWearing[0],dollWidth=doll.width,dollX=0,vel=25,home=document.getElementById("home"),level1=document.getElementById("level1"),level1Intro=document.getElementById("level1Intro"),ending=document.getElementById("ending"),page=1,loop=[],LEFT=!1,RIGHT=!1,finalMsg=document.getElementById("finalMsg"),nextButton=document.getElementById("next"),levelDescription=document.getElementById("levelDescription"),levelNum=document.getElementById("levelNum"),preview=document.querySelectorAll(".imgL1"),bye=document.getElementById("bye"),look=document.getElementById("look"),itemsTotal=[];for(let e=0;e<5;e++)itemsTotal.push("acc"+e),itemsTotal.push("shoes"+e),itemsTotal.push("bottom"+e),itemsTotal.push("top"+e);var outfit=["acc0","shoes0","bottom0","top0"],outfitNum=1,idealOutfit=[];function generateOutfit(){(idealOutfit=[]).push("acc"+outfitNum),idealOutfit.push("shoes"+outfitNum),idealOutfit.push("bottom"+outfitNum),idealOutfit.push("top"+outfitNum)}var slots=document.querySelectorAll(".slot"),objArray=[],objInitialY=20,levelArray=[];function generateLevelArray(){levelArray=itemsTotal;for(let e=0;e<3;e++)for(let e=0;e<idealOutfit.length;e++)levelArray.push(idealOutfit[e])}function generateObject(){let e=5*(Math.floor(5*Math.random())+2),t=Math.floor(Math.random()*levelArray.length),n=levelArray[t],o=[n,e,objInitialY];for(let e=0;e<objArray.length;e++)objArray[e][0]==n&&(o=generateObject());return o}function generateObjArray(){objArray=[];for(let e=0;e<slots.length;e++)objArray.push(generateObject())}function moveObjects(){for(let e=0;e<objArray.length;e++)objArray[e][2]>500&&(objArray[e]=generateObject()),objArray[e][2]+=objArray[e][1]}function wear(e){switch(!0){case e.includes("acc"):outfit[0]=e;break;case e.includes("shoes"):outfit[1]=e;break;case e.includes("bottom"):outfit[2]=e;break;case e.includes("top"):outfit[3]=e}}var loading=document.getElementById("loading"),loadingText=document.getElementById("loadingText");function preloadImages(){let e=itemsTotal.length,t=e/4;loadingText.innerText="Loading [0/28]";let n=0;for(let t=e;t>0;t--)wear(itemsTotal[t-1]),n++,loadingText.innerText="Loading ["+n+"/28]";for(let e=0;e<t-1;e++)look.src="img/look"+e+".png",n++,loadingText.innerText="Loading ["+n+"/28]";for(let e=2;e<5;e++)ending.style.backgroundImage="url('img/image"+e+".png')",n++,loadingText.innerText="Loading ["+n+"/28]"}function match(){for(let e=0;e<itemsWearing.length;e++)if(outfit[e]!=idealOutfit[e])return!1;return!0}function moveDoll(){for(let e=0;e<itemsWearing.length;e++)itemsWearing[e].style.left=dollX+"px"}function gameLoop(){match()&&(page=4,refresh()),moveObjects(),LEFT&&doll.getBoundingClientRect().left>level1.getBoundingClientRect().left+5&&(dollX-=vel,moveDoll()),RIGHT&&doll.getBoundingClientRect().right<level1.getBoundingClientRect().right-10&&(dollX+=vel,moveDoll());for(let e=0;e<outfit.length;e++)itemsWearing[e+1].src="img/"+outfit[e]+".png";for(let e=0;e<slots.length;e++){let t=slots[e];t.src="img/z"+objArray[e][0]+".png",t.style.top=objArray[e][2]+"px";let n=t.offsetTop+t.height,o=t.offsetLeft+t.width/2,l=doll.offsetLeft+dollWidth/2;n>370&&n<450&&o<l+30&&o>l-30&&(wear(objArray[e][0]),objArray[e]=generateObject())}}function refresh(){switch(!0){case 1==page:home.style.display="flex",level1Intro.style.display="none",level1.style.display="none",ending.style.display="none";break;case 2==page:preview[0].src="img/zacc"+outfitNum+".png",preview[1].src="img/zbottom"+outfitNum+".png",preview[2].src="img/ztop"+outfitNum+".png",preview[3].src="img/zshoes"+outfitNum+".png",home.style.display="none",level1Intro.style.display="flex",level1.style.display="none",ending.style.display="none",levelNum.textContent=outfitNum,2==outfitNum&&(levelDescription.innerHTML="Next stop: medieval fair! <br/>Do your magic and help Bloom get there<br/> in time to win the costume contest!"),3==outfitNum&&(levelDescription.innerHTML="Finally, the last stop: a punk festival!<br/> Ensure Bloom stops the show, but make it quick<br/> cause their favourite band are the opening act!");break;case 3==page:home.style.display="none",level1Intro.style.display="none",level1.style.display="flex",ending.style.display="none",dollX=0,generateOutfit(),generateLevelArray(),generateObjArray();for(let e=0;e<slots.length;e++)slots[e].src="img/z"+objArray[e][0]+".png",slots[e].style.top=objArray[e][2]+"px";loop=setInterval(gameLoop,60);break;case 4==page:clearInterval(loop),home.style.display="none",level1Intro.style.display="none",level1.style.display="none",ending.style.display="flex",look.src="img/look"+outfitNum+".png",1==outfitNum&&(ending.style.backgroundImage="url('img/image2.png')",finalMsg.innerHTML="Wow! Thanks to you, Bloom<br/>earned an A+ for style!"),2==outfitNum&&(ending.style.backgroundImage="url('img/image3.png')",finalMsg.innerHTML="Mirror, mirror on the wall<br/>guess who's the fairest elf of them all?"),3==outfitNum&&(ending.style.backgroundImage="url('img/image4.png')",finalMsg.innerHTML="Hell, yeah! This outfit rocked<br/> harder than the show itself!",nextButton.style.display="none",bye.style.display="flex",ending.style.paddingTop="20px")}}preloadImages(),loading.style.display="none";var startButton=document.getElementById("start");startButton.addEventListener("click",function(){page+=1,refresh()});var goButton=document.getElementById("go");goButton.addEventListener("click",function(){page+=1,refresh()});var devButton=document.getElementById("dev");devButton.addEventListener("click",function(){page+=1,refresh(),playButton.style.display="none",pauseButton.style.display="inline-block"});var playButton=document.getElementById("play");playButton.addEventListener("click",function(){playButton.style.display="none",pauseButton.style.display="inline-block",loop=setInterval(gameLoop,60)});var pauseButton=document.getElementById("pause");pauseButton.addEventListener("click",function(){pauseButton.style.display="none",playButton.style.display="inline-block",clearInterval(loop)}),nextButton.addEventListener("click",function(){3!=outfit&&(page=2,outfitNum+=1,refresh())}),document.onkeydown=function(e){"ArrowLeft"==e.code&&(LEFT=!0),"ArrowRight"==e.code&&(RIGHT=!0)},document.onkeyup=function(e){"ArrowLeft"==e.code&&(LEFT=!1),"ArrowRight"==e.code&&(RIGHT=!1)},refresh();