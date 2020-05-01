(function (window, document) {
	//flexible
  var docEl = document.documentElement
  var dpr = window.devicePixelRatio || 1

  // adjust body font size
  function setBodyFontSize () {
    if (document.body) {
     // document.body.style.fontSize = (12 * dpr) + 'px'
    }
    else {
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize();

  // set 1rem = viewWidth / 10
  function setRemUnit () {
    var rem = docEl.clientWidth / 10
    docEl.style.fontSize = rem + 'px'
  }

  setRemUnit()

  // reset rem unit on page resize
  window.addEventListener('resize', setRemUnit)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })

  // detect 0.5px supports
  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }
  //flexible 结束
  
  //koala
  //==============================================================================================
  
  //轮播
	var koalaSwiper=function(json){
    // 获得数据
    var el=json.el;
    var actionTime=json.actionTime;
    //数据验证 
    if(!el){throw "koala.js ERROR:el is not defind"}
    //改变CSS
		var index=1;
    var koalaSwiperBoxContent=document.getElementsByClassName(el)[0];
    if(!koalaSwiperBoxContent){throw "koala.js ERROR:el "+el+" is not find"}
    
		var koalaSwiperItem=koalaSwiperBoxContent.getElementsByClassName('koala-swiper-item');
		var swiperItemNum=koalaSwiperBoxContent.childElementCount;
		
		koalaSwiperBoxContent.style.width=swiperItemNum*100+'%';
		for(j = 0,len=koalaSwiperItem.length; j < len; j++) {
    		koalaSwiperItem[j].style.width=(100/swiperItemNum)+'%';
		}
		
    //定时轮播
		setInterval(function(){
			var koalaSwiperBoxContent=document.getElementsByClassName(el)[0];
			if(index>=swiperItemNum){
				index=0;
			}
			koalaSwiperBoxContent.style.left=-(index*100)+'%';			
			index++;
		},actionTime);
	}
	window.koalaSwiper=koalaSwiper;
  //轮播结束

  //弹窗
  var koalaAlert=function(json){
        // 获得数据
        var msg=json.msg;
        //
        alert(msg);
  }
  window.koalaAlert=koalaAlert;
  //弹窗结束

}(window, document))






