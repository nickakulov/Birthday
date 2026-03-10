// Главы
const chapters=[
  {
    title:"CHAPTER 1: Stars",
    text:`Far away, across the ocean, there's a girl.
She loves stars, funny memes, and her grumpy Russian bear.

We lie in different fields, under different stars,
but we look at the same sky.

And I know soon we'll lie next to each other.`
  },
  {
    title:"CHAPTER 2: Distance",
    text:`It's day for her. It's night for me.

While she drinks her morning tea,
I'm already getting ready to sleep.

While she falls asleep,
I'm just waking up.

But the phone is always in my hand.

Because distance is just numbers.

Love is when you're always connected,
even through half the world.`
  },
  {
    title:"CHAPTER 3: Memories",
    text:`Remember how it all began?

Your voice messages in the morning.
My poems at night.

Your jokes.
My endless "I love you".

How you asked me to rate your new avatar.

It was recent.
And it was always.`
  },
  {
    title:"CHAPTER 4: The Meeting",
    text:`Airport.

Crowds of people running somewhere.

You walk out of the arrival zone,
and I forget how to breathe.

I forget how to speak.

I run to you, dropping the flowers,
lift you in my arms and hold you tight.

And all those months of waiting,
pain,
tears,
and poems

turn into one second of happiness.

This will be our summer, babe.`
  },
  {
    title:"CHAPTER 5: Birthday",
    text:`Sunshine, Happy Birthday.

My girl, today is the day you came into this world.

And the world became better from that moment.

You're not just a girl.
You're an event.

You're the light that breaks through
even the darkest storms.

We've been through fears,
through anxiety,
through distance,
through pain.

And we're still here.

Still together.
Still loving each other.

Soon we'll meet.

Soon I'll hold you so tight
you'll forget how to breathe.

Happy Birthday my Sky.
Happy Birthday my Angel.
Happy Birthday my Girl.
Happy Birthday my Home.

I love you.

Forever yours,
Nick 🤍`
  }
]

// Элементы
let chapterIndex=0, charIndex=0
const chapter=document.getElementById("chapter")
const text=document.getElementById("text")
const nextBtn=document.getElementById("nextBtn")
const startBtn=document.getElementById("startBtn")
const story=document.getElementById("story")
const startScreen=document.getElementById("start-screen")
const gallery=document.getElementById("gallery")
const music=document.getElementById("music")

// Галерея
const photos=["photo1.jpg","photo2.jpg","photo3.jpg","photo4.jpg"]
let photoIndex=0
const galleryImage=document.getElementById("galleryImage")

// Запуск истории
startBtn.onclick=()=>{
  startScreen.style.display="none"
  story.classList.remove("hidden")
  music.play()
  showChapter()
}

function showChapter(){
  text.innerHTML=""
  charIndex=0
  chapter.innerText=chapters[chapterIndex].title
  typeWriter()
}

function typeWriter(){
  let current=chapters[chapterIndex].text
  if(charIndex<current.length){
    text.innerHTML+=current.charAt(charIndex)
    charIndex++
    setTimeout(typeWriter,30)
  } else {
    nextBtn.style.display="inline-block"
  }
}

// Продолжение
nextBtn.onclick=()=>{
  nextBtn.style.display="none"
  chapterIndex++
  if(chapterIndex===3){
    story.classList.add("hidden")
    gallery.classList.remove("hidden")
    return
  }
  if(chapterIndex<chapters.length){
    showChapter()
  } else {
    chapter.innerText=""
    text.innerText="I love you more than words can explain 🤍"
  }
}

// Галерея
document.getElementById("prevPhoto").onclick=()=>{
  photoIndex--
  if(photoIndex<0) photoIndex=photos.length-1
  galleryImage.src=photos[photoIndex]
}
document.getElementById("nextPhoto").onclick=()=>{
  photoIndex++
  if(photoIndex>=photos.length) photoIndex=0
  galleryImage.src=photos[photoIndex]
}
document.getElementById("continueStory").onclick=()=>{
  gallery.classList.add("hidden")
  story.classList.remove("hidden")
  showChapter()
}

// Сердечки
const heartsContainer=document.querySelector(".hearts")
setInterval(()=>{
  const heart=document.createElement("div")
  heart.className="heart"
  heart.innerText="🤍"
  heart.style.left=Math.random()*100+"%"
  heart.style.fontSize=(15+Math.random()*20)+"px"
  heart.style.animationDuration=(4+Math.random()*4)+"s"
  heartsContainer.appendChild(heart)
  setTimeout(()=>{heart.remove()},6000)
},600)

// Звездное небо
const canvas=document.getElementById("stars")
const ctx=canvas.getContext("2d")
canvas.width=window.innerWidth
canvas.height=window.innerHeight
const starsArray=[]
for(let i=0;i<150;i++){
  starsArray.push({
    x:Math.random()*canvas.width,
    y:Math.random()*canvas.height,
    r:Math.random()*1.2
  })
}
function drawStars(){
  ctx.clearRect(0,0,canvas.width,canvas.height)
  ctx.fillStyle="white"
  starsArray.forEach(s=>{
    ctx.beginPath()
    ctx.arc(s.x,s.y,s.r,0,Math.PI*2)
    ctx.fill()
  })
  requestAnimationFrame(drawStars)
}
drawStars()
window.addEventListener("resize",()=>{
  canvas.width=window.innerWidth
  canvas.height=window.innerHeight
})
