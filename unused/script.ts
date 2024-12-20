
const html = document.documentElement;
const canvas = document.getElementById("scrollvid");
const context = canvas.getContext("2d");

const frameCount = 95;
const currentFrame = index => (
  `styles/framecycles/${index.toString().padStart(4, '0')}.png` //padstart is a little weird. check ts docs.
)

/*
const frameCount = 148;
const currentFrame = index => (
  `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
)
*/

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image()
img.src = currentFrame(1);
canvas.width=1158;
canvas.height=770;
img.onload=function(){
  context.drawImage(img, 0, 0);
}

const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
}

window.addEventListener('scroll', () => {  
  const scrollTop = html.scrollTop;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );


  // if scrollnumber === X:
  //     set_visible(div_X)
  
  requestAnimationFrame(() => updateImage(frameIndex + 1))
});

preloadImages()
