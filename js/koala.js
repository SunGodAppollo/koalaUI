



(function (window, document) {
	//flexible
  var docEl = document.documentElement
  var dpr = window.devicePixelRatio || 1

  // adjust body font size
  function setBodyFontSize () {
    if (document.body) {
      document.body.style.fontSize = (12 * dpr) + 'px'
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
	var koalaSwiper=function(el,ActionTime){
		console.log(el);
		var index=1;
		var koalaSwiperBoxContent=document.getElementsByClassName(el)[0];
		var koalaSwiperItem=koalaSwiperBoxContent.getElementsByClassName('koala-swiper-item');
		var swiperItemNum=koalaSwiperBoxContent.childElementCount;
		
		koalaSwiperBoxContent.style.width=swiperItemNum*100+'%';
		for(j = 0,len=koalaSwiperItem.length; j < len; j++) {
    		koalaSwiperItem[j].style.width=(100/swiperItemNum)+'%';
		}
		
		
		
		console.log(swiperItemNum);
		setInterval(function(){
			var koalaSwiperBoxContent=document.getElementsByClassName(el)[0];
			if(index>=swiperItemNum){
				index=0;
			}
			koalaSwiperBoxContent.style.left=-(index*100)+'%';			
			index++;
		},ActionTime);
	}
	window.koalaSwiper=koalaSwiper;
	//var koalaSwiperBoxContent=document.getElementsByClassName('koala-swiper-boxContent')[0];
}(window, document))






