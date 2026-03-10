const chapters = [

{
title:"CHAPTER 1: Stars",
text:`Far away, across the ocean, there's a girl.
She loves stars, funny memes, and her grumpy Russian bear.

We lie in different fields, under different stars,
but we look at the same sky.

And I know soon
we'll lie next to each other.`
},

{
title:"CHAPTER 2: Distance",
text:`It's day for her.
It's night for me.

While she drinks her morning tea,
I'm already getting ready to sleep.

While she falls asleep,
I'm just waking up.

But the phone is always in my hand,
because distance is just numbers.

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

It was recent,
and it was always.`
},

{
title:"CHAPTER 4: The Meeting",
text:`Airport.
Crowds of people running somewhere.

You walk out of the arrival zone
and I forget how to breathe.

I forget how to speak.

I run to you,
dropping the flowers,
lift you in my arms
and hold you tight.

And all those months of waiting,
pain,
tears,
and poems

turn into one second
of happiness.

This will be our summer, babe.`
},

{
title:"CHAPTER 5: Birthday Poem",
text:`Sunshine, Happy Birthday.

My girl, today is the day you came into this world.
And the world became better from that moment.

You're not just a girl.
You're an event.

You're the light that breaks through even the darkest storms.

We've been through fears.
Through anxiety.
Through distance.
Through pain.

And we're still here.
Still together.
Still loving each other.

Soon we'll meet.

Soon I'll hold you so tight you'll forget how to breathe.

Soon we'll lie in each other's arms
and laugh at everything we've been through.

But for now — this site.

These photos.
These words.

It's all for you.

Happy Birthday my Sky.
Happy Birthday my Angel.
Happy Birthday my Girl.
Happy Birthday my Home.

I love you.

Forever yours,
Nick 🤍`
}

]

let chapterIndex=0
let charIndex=0

const startBtn=document.getElementById("startButton")
const intro=document.getElementById("intro")
const story=document.getElementById("story")
const chapter=document.getElementById("chapter")
const text=document.getElementById("text")
const next=document.getElementById("next")

const music=document.getElementById("music")

startBtn.onclick=()=>{

intro.style.display="none"
story.style.display="block"

music.play()

showChapter()

}

function showChapter(){

chapter.innerText=chapters[chapterIndex].title
text.innerHTML=""
charIndex=0

typeWriter()

}

function typeWriter(){

const t=chapters[chapterIndex].text

if(charIndex<t.length){

text.innerHTML+=t.charAt(charIndex)
charIndex++

setTimeout(typeWriter,35)

}else{

next.style.display="inline-block"

}

}

next.onclick=()=>{

next.style.display="none"
chapterIndex++

if(chapterIndex===3){

story.style.display="none"
gallery.style.display="block"
return

}

if(chapterIndex<chapters.length){

showChapter()

}else{

chapter.innerText=""
text.innerHTML="I love you more than words can explain 🤍"

}

}


/* gallery */

const photos=[
"photos/photo1.jpg",
"photos/photo2.jpg",
"photos/photo3.jpg",
"photos/photo4.jpg"
]

let photoIndex=0

const gallery=document.getElementById("gallery")
const galleryImage=document.getElementById("galleryImage")

const prevPhoto=document.getElementById("prevPhoto")
const nextPhoto=document.getElementById("nextPhoto")

prevPhoto.onclick=()=>{

photoIndex--

if(photoIndex<0) photoIndex=photos.length-1

galleryImage.src=photos[photoIndex]

}

nextPhoto.onclick=()=>{

photoIndex++

if(photoIndex>=photos.length) photoIndex=0

galleryImage.src=photos[photoIndex]

}

const continueStory=document.getElementById("continueStory")

continueStory.onclick=()=>{

gallery.style.display="none"
story.style.display="block"

showChapter()

}