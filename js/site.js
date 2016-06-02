(function (window, document) {
  setVideoHeight();

document.getElementById('gallery').onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
        link = target.src ? target.parentNode : target,
        options = {index: link, event: event},
        links = this.getElementsByTagName('a');
    blueimp.Gallery(links, options);
};

window.addEventListener('resize', function(event){
  setVideoHeight();
});

function setVideoHeight(){

  //adjust size for ALL the videos on the page
  var videoElmList = document.querySelectorAll(".video");

  var lengthList = videoElmList.length;
  for (var i = 0; i < lengthList; ++i) {
    if (videoElmList[i] !== null){
      var tempwidth = videoElmList[i].getBoundingClientRect().width;
      //set video element height to match width
      var tempheight=tempwidth;
      videoElmList[i].height = tempheight;
    }
  }

}

})(this, this.document);
