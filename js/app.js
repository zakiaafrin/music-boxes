//select element and create variables
var keys = document.querySelectorAll(".key")  // Grab all elements and put them in a NodeList
var notes = {                                 //In the notes object we used the id's of the HTML elements to identify what audio element to play
   cKey: document.querySelector("#cAudio"),   //cKey is a property
   dKey: document.querySelector("#dAudio"),
   eKey: document.querySelector("#eAudio"),
   fKey: document.querySelector("#fAudio"),
   gKey: document.querySelector("#gAudio"),
   aKey: document.querySelector("#aAudio"),
   bKey: document.querySelector("#bAudio")
}




//define functions
function playNote(key){     //'key' holds the elements ID
  // console.log(key)
  notes[key].currentTime =0
  notes[key].play()
  //notes['cKey'].play()
}



//call functions add event listeners
keys.forEach(function(key){                               //keys.forEach(function(key){
})
   console.dir(key)
   key.addEventListener("click" , function(){
       playNote(key.id)
   })
})

document.addEventListener('keydown', function(element){
if(event.key == "a"){
   playNote("cKey")
}
if(event.key == "s"){
   playNote("dKey")
}
if(event.key == "d"){
   playNote("eKey")
}
if(event.key == "f"){
   playNote("fKey")
}
if(event.key == "g"){
   playNote("gKey")
}
if(event.key == "h"){
   playNote("aKey")
}
if(event.key == "j"){
   playNote("bKey")
}
})