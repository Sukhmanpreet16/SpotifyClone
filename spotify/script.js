console.log("welcome to spotify");
let songindex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay= document.getElementById("masterPlay");
let myprogressbar= document.getElementById("myprogressbar");
let gif= document.getElementById("gif");
let mastersongname= document.getElementById("mastersongname");
let songitems= Array.from(document.getElementsByClassName("songItem"));

let songs= [
    { SongName: "Hass Hass By Diljit Dosanjh", filePath: "songs/1.mp3", coverPath:"images/diljit.png" },
    { SongName: "Peaches Diljit", filePath: "songs/2.mp3", coverPath:"images/img.jpg" },
    { SongName: "Lemonade dosanjhawala", filePath: "songs/3.mp3", coverPath:"images/lemonade.jpg" },
    { SongName: "Highend gaddiyan", filePath: "songs/4.mp3", coverPath:"images/highend.jpg" },
    { SongName: "Lalkara Diljit Sultaan", filePath: "songs/5.mp3", coverPath:"images/lalkara.jpg" }
]
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0 ){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }

       
})
audioElement.addEventListener('timeupdate',()=>{
    progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    myprogressbar.value= progress;
})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime= (myprogressbar.value*audioElement.duration)/100
})

const makeallplays= () =>{
    Array.from(document.getElementsByClassName("songplay")).forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}

Array.from(document.getElementsByClassName("songplay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        if (e.target.classList.contains("fa-pause-circle")) {
            e.target.classList.remove("fa-pause-circle");
            e.target.classList.add("fa-play-circle");
            audioElement.pause();
            gif.style.opacity = 0;
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
        } 
        else{
            songindex= parseInt(e.target.id);
            makeallplays();
            e.target.classList.remove("fa-play-circle");
            e.target.classList.add("fa-pause-circle");
            mastersongname.innerText= songs[songindex].SongName;
            audioElement.src=  `songs/${songindex+1}.mp3` ;
            audioElement.currentTime= 0;
            audioElement.play();
            gif.style.opacity=1;
            masterPlay.classList.remove("fa-play-circle");
            masterPlay.classList.add("fa-pause-circle");
        }
    })
})

document.getElementById("next").addEventListener("click", ()=>{
    if(songindex>=4){
        songindex=0;
    }
    else{
        songindex += 1;
    }
    makeallplays();
    mastersongname.innerText= songs[songindex].SongName;
    audioElement.src=  `songs/${songindex+1}.mp3` ;
    audioElement.currentTime= 0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove("fa-play-circle"); 
    masterPlay.classList.add("fa-pause-circle");
})

document.getElementById("previous").addEventListener("click", ()=>{
    if(songindex<=0){
        songindex=0;
    }
    else{
        songindex -= 1;
    }
    makeallplays();
    mastersongname.innerText= songs[songindex].SongName;
    audioElement.src=  `songs/${songindex+1}.mp3` ;
    audioElement.currentTime= 0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
})

