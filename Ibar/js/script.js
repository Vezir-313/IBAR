/* ==================================================================================================
 =============          start   general   function  start        =====================
 ======================================================================================================*/

	  
function parentiniTap(param,param1){//"param1" in "param"in atasi oldugunu yoxlur
	var p = param;
	while (p != param1.parentNode) {
		if(p == param1){
			return true;
		}
		p = p.parentNode;
	}
	return false;s
}//"param1" in "param"in atasi oldugunu yoxlur

function ModalCreateBodySize(){
	var bodyContent = document.querySelector("#bodyContent");
	bodyContent.style.transform = 'scale(.9)';
}

function ModalCreateBodyResize(){
	var bodyContent = document.querySelector("#bodyContent");
	bodyContent.style.transform = 'scale(1)';
}


/* ==================================================================================================
 =============   stop   general   function  stop      ===================================================
 ==================================================================================================*/




/* ===========================================================================================================================
 =========================  start  header   start   ========================================================================
 ==================================================================================================*/
var header = document.querySelector("#header");
var headerWrap = document.querySelector("#header .wrap");
var headerNav = document.querySelector("#header .wrap .nav");
var headerMoneyType = document.getElementsByName("moneyType")[0];
var headerMoneyOne =  document.getElementsByName("moneyOne")[0];
var headerMoneyTwo =  document.getElementsByName("moneyTwo")[0];
var headerBizimleElaqe = document.getElementsByName("bizimleElaqe")[0];


var headerMoneyTypeArr = [
	"USD",
	"EUR",
	"GBP"
]

var headerMoneyOneArr = [
	"1.7202",
	"1.8529",
	"2.1255"
]

var headerMoneyTwoArr = [
	"1.7400",
	"1.8900",
	"2.1680"
]


var headerMoneyOrder=0;

setInterval(function(){
	if (headerMoneyOrder == headerMoneyTypeArr.length) {headerMoneyOrder = 0;}
		headerMoneyType.innerText = headerMoneyTypeArr[headerMoneyOrder];
		headerMoneyOne.innerText = headerMoneyOneArr[headerMoneyOrder];
		headerMoneyTwo.innerText = headerMoneyTwoArr[headerMoneyOrder];
		headerMoneyOrder++;

},3000);






/* ===========================================================================================================================
 =========================  stop  header   stop   ========================================================================
 ==================================================================================================*/








/* ===========================================================================================================================
 =========================  start  content   start   ========================================================================
 ==================================================================================================*/

	/*   =>>>>>>   start       content search      start<<<<<<= */
	var  conSearch = document.querySelector("#content .search");
	var  conSearchSpan = document.querySelector("#content .search span");
	var  conSearchInput = document.querySelector("#content .search input");
	var  conSearchIcon = document.querySelector("#content .search .searchIcon");
	var  conMenuIcon = document.querySelector("#content .search .menubarIcon");
	var  conExample = document.querySelector("#content .example");

function conSearchActive(){
	if(event.target.getAttribute("class") != "menubarIcon" && (event.target.parentNode.getAttribute("class")=="search" || event.target.getAttribute("class")=="search")){
		conSearchInput.style.display = "block";
		conSearchSpan.style.fontSize = "14px";
		conSearchSpan.style.top = "-20px";
		if(window.innerWidth > 0 && window.innerWidth < 1000){
			conSearchIcon.style.marginTop = "-30px";
		}else{
			conSearchIcon.style.marginTop = "-10px";
		}
		conExample.style.display = "block";
		conMenuIcon.style.marginTop = "-10px";
		conSearchInput.focus();	
	}	
}

document.body.addEventListener("click",function(){
	if((event.target.parentNode.getAttribute("class") !="search"  && event.target.getAttribute("class") !="search") || event.target.getAttribute("class") == "menubarIcon"){
		conSearchInput.style.display = "none";
		if(window.innerWidth > 0 && window.innerWidth <1000){
			conSearchSpan.style.fontSize = "1.3em";
			conSearchIcon.style.marginTop = "-10px";
			conSearchSpan.style.top = "-10px";
		}else{
			conSearchSpan.style.fontSize = "2.3em";
			conSearchIcon.style.marginTop = "0";
			conSearchSpan.style.top = "0";
		}
		conExample.style.display = "none";
		conMenuIcon.style.marginTop = "0";
		// window.onresize();
	}	
});




	/*   =>>>>>>   Stop       content search      Stop<<<<<<= */


		/*   =>>>>>>   start     content   slide      start<<<<<<= */
var conSlideImgArr = [
	"img/slide1.jpg",
	"img/slide2.jpg",
	"img/slide3.jpg"
]
var conSlideImgIndex=0;
var conbtns = document.querySelectorAll("#content .mainSlider .btns div");
var conSliderImg = document.querySelector("#content .mainSlider .slider img");

for (var i = 0; i < conbtns.length; i++) {
	conbtns[i].addEventListener("click",function () {
		conSlideImgIndex = parseInt(this.getAttribute("name"));
		conSliderImg.setAttribute("src", conSlideImgArr[conSlideImgIndex]);
		conbtnsReset();
		if (conSlideImgIndex == conSlideImgArr.length-1) {
		document.querySelector("#content .slider .sliderText").style.display = "block";
	}else{
		document.querySelector("#content .slider .sliderText").style.display = "none";
	}
	});
}

function conbtnsReset(){
	for (var i = 0; i < conbtns.length; i++) {
		conbtns[i].style.width = "5px";
		conbtns[i].style.height = "5px";
		conbtns[i].style.background = "#fff";
	}
		conbtns[conSlideImgIndex].style.width = "10px";
		conbtns[conSlideImgIndex].style.height = "10px";
		conbtns[conSlideImgIndex].style.background = "none";	
}

(function conSlideImgChange(){
	if (conSlideImgIndex == conSlideImgArr.length) {
		conSlideImgIndex = 0;
	}
	if (conSlideImgIndex == conSlideImgArr.length-1) {
		document.querySelector("#content .slider .sliderText").style.display = "block";
	}else{
		document.querySelector("#content .slider .sliderText").style.display = "none";
	}
	conSliderImg.setAttribute("src", conSlideImgArr[conSlideImgIndex]);
	conbtnsReset();
	conSlideImgIndex ++;
	setTimeout(conSlideImgChange,3000);

})()
	/*   =>>>>>>   Stop       slide      Stop<<<<<<= */

/* ===========================================================================================================================
 =========================  stop  content   stop   ========================================================================
 ==================================================================================================*/



/* ===========================================================================================================================
 =========================  start  axtar   start   ========================================================================
 ==================================================================================================*/
var axtar = document.querySelector("#axtar");
var axtarSearchIcon=document.querySelector("#axtar .searchIcon");
var axtarSearchInput = document.querySelector("#axtar input");
var axtarCloseIcon = document.querySelector("#axtar .axtarHead .closeIcon");
var axtarFerdi = document.querySelector("#axtar .ferdi");
var axtarKorperativ = document.querySelector("#axtar .korperativ");
var axtarAxtarList = document.querySelector("#axtar .axtarList");
var axtarFerdiAxtarList = document.querySelector("#axtar .axtarList .ferdiAxtarList");
var axtarKorperativAxtarList = document.querySelector("#axtar .axtarList .korperativAxtarList");


var axtarUl = document.querySelectorAll("#axtar ul");

	for (var i = 0; i < axtarUl.length; i++) {
		if(axtarUl[i].children[0].children[0].innerHTML == ""){
			axtarUl[i].style.marginTop="25px";
		}
	}


axtarFerdi.classList.add("axtarActiveBorder");

axtarFerdi.addEventListener("click",function(){
	axtarFerdi.classList.add("axtarActiveBorder");
	axtarKorperativ.classList.remove("axtarActiveBorder");
	axtarAxtarList.style.left = "0px";


});
axtarKorperativ.addEventListener("click",function(){
	var t=axtarAxtarList.clientWidth/2;
	axtarKorperativ.classList.add("axtarActiveBorder");
	axtarFerdi.classList.remove("axtarActiveBorder");
	axtarAxtarList.style.left = -t + "px";
});



axtarSearchIcon.addEventListener("click",function(){
	axtarSearchInput.focus();
});

axtar.style.right = -axtar.clientWidth-500+"px";

conMenuIcon.addEventListener("click",function(){
	ModalCreateBodySize();
	axtar.style.visibility = 'visible';			
	axtar.style.right = 0+"px";

});

document.body.addEventListener("click",function(){
	var e=event.target;
	if(axtar.style.right == "0px"){
		if((!parentiniTap(e,axtar) && e!=conMenuIcon) || e == axtarCloseIcon){
			axtar.style.right =-axtar.clientWidth-500+"px";
			axtar.style.visibility = 'hidden';		
			ModalCreateBodyResize();
		}
	}	
});


/* ===========================================================================================================================
 =========================  stop  axtar   stop   ========================================================================
 ==================================================================================================*/  





 /* ===========================================================================================================================
 =========================  start  bizimle elaqe   start   ========================================================================
 ==================================================================================================*/
var bizimleElaqe = document.querySelector("#bizimleElaqe");
var bizimleElaqeContent = document.querySelector("#bizimleElaqe .bizimleElaqeContent");
var bizimleElaqe1 = document.querySelector("#bizimleElaqe .bizimleElaqeContent .bizimleElaqe1");
var bizimleElaqe2 = document.querySelector("#bizimleElaqe .bizimleElaqeContent .bizimleElaqe2");
var bizimleElaqeCloseIcon = document.querySelectorAll("#bizimleElaqe .bizimleElaqeCloseIcon");

bizimleElaqe.style.right = -bizimleElaqe.clientWidth - 500 + "px";

headerBizimleElaqe.addEventListener("click",function(){
	ModalCreateBodySize();
	bizimleElaqe.style.visibility = 'visible';
	bizimleElaqe.style.right = "0px";
});



document.body.addEventListener("click",function(){
	var e=event.target;
	if(bizimleElaqe.style.right == "0px"){
		if((!parentiniTap(e,bizimleElaqe) && e!=headerBizimleElaqe)){
			ModalCreateBodyResize();
			bizimleElaqe.style.right = -bizimleElaqe.clientWidth - 500 + "px";
			bizimleElaqe.style.visibility = 'hidden';		
			bizimleElaqeContent.style.left = "0px";
		}
	}	
});

function closeBizimleElaqe(){
	bizimleElaqe.style.right = -bizimleElaqe.clientWidth - 500 + "px";
	bizimleElaqe.style.visibility = 'hidden';	
	bizimleElaqeContent.style.left = "0px";
	ModalCreateBodyResize();
}
function bizimleElaqe2Open(){
	bizimleElaqeContent.style.left = -bizimleElaqe1.clientWidth + "px";
}
function bizimleElaqe1Return(){
	bizimleElaqeContent.style.left = "0px";
}




 /* ===========================================================================================================================
 =========================  stop  bizimle elaqe   stop   ========================================================================
 ==================================================================================================*/




  /* ===========================================================================================================================
 =========================  start  AccesHead    start   ========================================================================
 ==================================================================================================*/

var accesHead = document.querySelector("#accesHead");
var accesHeadSroll = document.querySelector("#accesHead .accesHeadScroll");
var accesHeadFerdiWrapper = document.querySelector("#content .accesHeadFerdiWrapper");
var accesHeadKorperativWrapper = document.querySelector("#content .accesHeadKorperativWrapper");
var accesHeadFerdiImg = document.querySelector("#accesHead .accesHeadFerdiIMG");
var accesHeadKorperativIMG = document.querySelector("#accesHead .accesHeadKorperativIMG");
var headerFerdi = document.querySelector("#header .ferdi");
var headerKorperativ = document.querySelector("#header .korperativ");
var conMain = document.querySelector("#content  .mainContent");

headerFerdi.addEventListener("click",function(){
	accesHead.style.visibility = 'visible';
	accesHead.classList.add("accesHeadOn");
	accesHeadSroll.style.top =	"0px";
	conMain.style.display = "none";
	accesHeadKorperativWrapper.style.display = 'none';
	conMain.style.position = 'absolute';
	accesHeadFerdiWrapper.style.display = 'block';
});

headerKorperativ.addEventListener("click",function(){
	accesHead.style.visibility = 'visible';
	accesHead.classList.add("accesHeadOn");
	accesHeadSroll.style.top =	-accesHeadFerdiImg.clientHeight + "px";
	accesHeadFerdiWrapper.style.display = 'none';
	conMain.style.display = "none";
	accesHeadKorperativWrapper.style.display = 'block';
});






  /* ===========================================================================================================================
 =========================  stop   AccesHead   stop   ========================================================================
 ==================================================================================================*/

var bodyContent = document.querySelector('#bodyContent');
var footer = document.querySelector('#footer');
var content =document.querySelector('#content');
if(parseInt(window.innerHeight) > 750){
	content.style.marginTop = "180px";
	bodyContent.style.paddingBottom = '100px';
	footer.style.marginTop = '180px';
}




window.addEventListener("resize",function(){
	var header = document.querySelector("#header");
	var footer = document.querySelector("#footer");
	var content = document.querySelector("#content");
	var top = window.innerHeight - 450;


		console.log(top);
	if(top > 0){
		footer.style.marginTop = top*0.6 + "px";
		content.style.marginTop = top*0.4 + 'px';
		document.body.style.overflowY = 'hidden';
	}else{
		footer.style.marginTop = "100px";
		content.style.marginTop = 130 + 'px';
		// document.body.style.height = '90%';
		document.body.style.overflowY = 'scroll';

	}	
	if(window.innerWidth > 0 && window.innerWidth <= 1000){
		conSearchSpan.style.fontSize = "1.3em";
	}else{
		conSearchSpan.style.fontSize = "2.3em";
	}
});
