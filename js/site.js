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
  var tempwidth=document.querySelector(".video").getBoundingClientRect().width;
  //set video element height to match width
  var tempheight=tempwidth;
  document.querySelector(".video").height = tempheight;
}

})(this, this.document);
