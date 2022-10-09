gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

document.querySelector("#main").addEventListener("mousemove",function(dets){
    document.querySelector("#circle").style.top=`${dets.y}px`
    document.querySelector("#circle").style.left=`${dets.x}px`

})

document.querySelector("#p1").addEventListener("mouseover",function(){
  document.querySelector("#img1").style.top = `0%`;
})

document.querySelector("#p1").addEventListener("mouseleave",function(){
  document.querySelector("#img1").style.top = `-180%`;
})

document.querySelector("#p2").addEventListener("mouseover",function(){
  document.querySelector("#img2").style.top = `0%`;
})

document.querySelector("#p2").addEventListener("mouseleave",function(){
  document.querySelector("#img2").style.top = `-180%`;
})

document.querySelector("#p3").addEventListener("mouseover",function(){
  document.querySelector("#img3").style.top = `0%`;
})

document.querySelector("#p3").addEventListener("mouseleave",function(){
  document.querySelector("#img3").style.top = `-180%`;
})