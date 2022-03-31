
// attributes of the main section
document.getElementById("main").style.height ="100vh";
document.getElementById("main").style.width ="100%";
document.getElementById("main").style.backgroundColor ="blue";
document.getElementById("main").style.position ="relative";

// Styling the heading div
document.getElementById("heading").style.position ="absolute";
document.getElementById("heading").style.width ="400px";
document.getElementById("heading").style.backgroundColor ="white";
document.getElementById("heading").style.height ="20px";
document.getElementById("heading").style.top ="5%";
document.getElementById("heading").style.left ="30%";
document.getElementById("heading").innerText = "Album Picker";
document.getElementById("heading").style.textAlign ="center";
document.getElementById("heading").style.padding ="10px"
document.getElementById("heading").style.fontFamily ="san-serif";
document.getElementById("heading").style.fontWeight ="bold";



// Styling the square div
document.getElementById("square").style.height ="350px";
document.getElementById("square").style.width ="300px"
document.getElementById("square").style.position ="absolute";
document.getElementById("square").style.top ="20%"
document.getElementById("square").style.left ="15%"
document.getElementById("square").style.backgroundImage ="\images\Emeli Sandé - Long Live The Angels (Deluxe Edition) (2016).jpg";
document.getElementById("square").style.zIndex ="5";


// Styling the img1
document.getElementById("img1").style.height ="350px";
document.getElementById("img1").style.width ="300px";



// Stylin the circle div
document.getElementById("circle").style.height ="320px";
document.getElementById("circle").style.width ="300px";
document.getElementById("circle").style.borderRadius ="50%";
document.getElementById("circle").style.position ="absolute";
document.getElementById("circle").style.left ="27%"
document.getElementById("circle").style.top ="22%"

// Styling img2
document.getElementById("img2").style.height ="320px";
document.getElementById("img2").style.width ="300px";
document.getElementById("img2").style.borderRadius ="50%";


// Styling the options div
document.getElementById("options").style.backgroundColor ="white";
document.getElementById("options").style.height ="70vh";
document.getElementById("options").style.position ="absolute";
document.getElementById("options").style.width ="300px";
document.getElementById("options").style.right ="35%";
document.getElementById("options").style.top ="15%"


// Styling the buttons
document.getElementById("song1").style.width ="300px";
document.getElementById("song1").style.padding ="10px";
document.getElementById("song1").style.backgroundColor ="white";
document.getElementById("song1").style.fontFamily ="sans-serif";
document.getElementById("song1").style.fontWeight ="bold"

document.getElementById("song2").style.width ="300px";
document.getElementById("song2").style.padding ="10px";
document.getElementById("song2").style.backgroundColor ="white";
document.getElementById("song2").style.fontFamily ="sans-serif";
document.getElementById("song2").style.fontWeight ="bold"

document.getElementById("song3").style.width ="300px";
document.getElementById("song3").style.padding ="10px";
document.getElementById("song3").style.backgroundColor ="white";
document.getElementById("song3").style.fontFamily ="sans-serif";
document.getElementById("song3").style.fontWeight ="bold"

document.getElementById("song4").style.width ="300px";
document.getElementById("song4").style.padding ="10px";
document.getElementById("song4").style.backgroundColor ="white";
document.getElementById("song4").style.fontFamily ="sans-serif";
document.getElementById("song4").style.fontWeight ="bold"

document.getElementById("song5").style.width ="300px";
document.getElementById("song5").style.padding ="10px";
document.getElementById("song5").style.backgroundColor ="white";
document.getElementById("song5").style.fontFamily ="sans-serif";
document.getElementById("song5").style.fontWeight ="bold"

document.getElementById("song6").style.width ="300px";
document.getElementById("song6").style.padding ="10px";
document.getElementById("song6").style.backgroundColor ="white";
document.getElementById("song6").style.fontFamily ="sans-serif";
document.getElementById("song6").style.fontWeight ="bold"

document.getElementById("song7").style.width ="300px";
document.getElementById("song7").style.padding ="10px";
document.getElementById("song7").style.backgroundColor ="white";
document.getElementById("song7").style.fontFamily ="sans-serif";
document.getElementById("song7").style.fontWeight ="bold"

document.getElementById("song8").style.width ="300px";
document.getElementById("song8").style.padding ="10px";
document.getElementById("song8").style.backgroundColor ="white";
document.getElementById("song8").style.fontFamily ="sans-serif";
document.getElementById("song8").style.fontWeight ="bold"

document.getElementById("song9").style.width ="300px";
document.getElementById("song9").style.padding ="10px";
document.getElementById("song9").style.backgroundColor ="white";
document.getElementById("song9").style.fontFamily ="sans-serif";
document.getElementById("song9").style.fontWeight ="bold"

document.getElementById("song10").style.width ="300px";
document.getElementById("song10").style.padding ="10px";
document.getElementById("song10").style.backgroundColor ="white";
document.getElementById("song10").style.fontFamily ="sans-serif";
document.getElementById("song10").style.fontWeight ="bold"

document.getElementById("song11").style.width ="300px";
document.getElementById("song11").style.padding ="10px";
document.getElementById("song11").style.backgroundColor ="white";
document.getElementById("song11").style.fontFamily ="sans-serif";
document.getElementById("song11").style.fontWeight ="bold"

document.getElementById("song12").style.width ="300px";
document.getElementById("song12").style.padding ="10px";
document.getElementById("song12").style.backgroundColor ="white";
document.getElementById("song12").style.fontFamily ="sans-serif";
document.getElementById("song12").style.fontWeight ="bold"

document.getElementById("song13").style.width ="300px";
document.getElementById("song13").style.padding ="10px";
document.getElementById("song13").style.backgroundColor ="white";
document.getElementById("song13").style.fontFamily ="sans-serif";
document.getElementById("song13").style.fontWeight ="bold"

document.getElementById("song14").style.width ="300px";
document.getElementById("song14").style.padding ="10px";
document.getElementById("song14").style.backgroundColor ="white";
document.getElementById("song14").style.fontFamily ="sans-serif";
document.getElementById("song14").style.fontWeight ="bold"


play = ()=>{
    var audio = document.getElementById("aud");
    audio.play
  }


 var audio1 ="Selah.mp3";
 var audio2 ="Breathing Underwater.mp3";
// Onclick functions
document.getElementById("song1").onclick = function(){

    document.getElementById("square").style.display ="block" ;
    document.getElementById("circle").style.display ="block";
    document.getElementById("img1").src ="/images/Emeli Sandé - Long Live The Angels (Deluxe Edition) (2016).jpg";
    document.getElementById("img2").src  ="/images/Emeli Sandé - Long Live The Angels (Deluxe Edition) (2016).jpg";
    document.getElementById("main").style.backgroundColor ="yellow";
    document.getElementById("options").style.right ="15%";
    document.getElementById("audio1").style.display ="block";
    // document.getElementById("aud").src =play;

}

document.getElementById("song2").onclick = function(){
    document.getElementById("square").style.display ="block" ;
    document.getElementById("circle").style.display ="block";
    document.getElementById("main").style.backgroundColor ="green";
    document.getElementById("options").style.right ="15%";
    document.getElementById("img1").src ="/images/album2.jpg.jpg";
    document.getElementById("img2").src  ="/images/album2.jpg.jpg";
    document.getElementById("audio2").style.display ="block";
    document.getElementById("audio2").style.position ="absolute";
    document.getElementById("audio2").style.bottom ="20%";
    document.getElementById("audio2").style.left ="15%";

    if(audio1 == ""){
        audio2.play();
    }
}
document.getElementById("song3").onclick = function(){
    document.getElementById("square").style.display ="block" ;
    document.getElementById("circle").style.display ="block";
    document.getElementById("main").style.backgroundColor ="crimson";
    document.getElementById("options").style.right ="15%";
    document.getElementById("img1").src ="/images/album1.jpg.jpg";
    document.getElementById("img2").src  ="/images/album1.jpg.jpg";
    document.getElementById("audio3").style.display ="block";
    document.getElementById("audio3").style.position ="absolute";
    document.getElementById("audio3").style.bottom ="20%";
    document.getElementById("audio3").style.left ="15%";

}
document.getElementById("song4").onclick = function(){
    document.getElementById("square").style.display ="block" ;
    document.getElementById("circle").style.display ="block";
    document.getElementById("main").style.backgroundColor ="orange";
    document.getElementById("options").style.right ="15%";
    document.getElementById("img1").src ="/images/album2.jpg.jpg";
    document.getElementById("img2").src  ="/images/album2.jpg.jpg";
    document.getElementById("audio4").style.display ="block";
    document.getElementById("audio4").style.position ="absolute";
    document.getElementById("audio4").style.bottom ="20%";
    document.getElementById("audio4").style.left ="15%";

}
document.getElementById("song5").onclick = function(){
    document.getElementById("square").style.display ="block" ;
    document.getElementById("circle").style.display ="block";
    document.getElementById("main").style.backgroundColor ="pink";
    document.getElementById("options").style.right ="15%";
    document.getElementById("img1").src ="/images/album1.jpg.jpg";
    document.getElementById("img2").src  ="/images/album1.jpg.jpg";
    document.getElementById("audio5").style.display ="block";
    document.getElementById("audio5").style.position ="absolute";
    document.getElementById("audio5").style.bottom ="20%";
    document.getElementById("audio5").style.left ="15%";

}
document.getElementById("song6").onclick = function(){
    document.getElementById("square").style.display ="block" ;
    document.getElementById("circle").style.display ="block";
    document.getElementById("main").style.backgroundColor ="violet";
    document.getElementById("options").style.right ="15%";
    document.getElementById("img1").src ="/images/album2.jpg.jpg";
    document.getElementById("img2").src  ="/images/album2.jpg.jpg";
    document.getElementById("audio6").style.display ="block";
    document.getElementById("audio6").style.position ="absolute";
    document.getElementById("audio6").style.bottom ="20%";
    document.getElementById("audio6").style.left ="15%";

}
document.getElementById("song7").onclick = function(){
    document.getElementById("square").style.display ="block" ;
    document.getElementById("circle").style.display ="block";
    document.getElementById("main").style.backgroundColor ="tomato";
    document.getElementById("options").style.right ="15%";
    document.getElementById("img1").src ="/images/album1.jpg.jpg";
    document.getElementById("img2").src  ="/images/album1.jpg.jpg";
    document.getElementById("audio7").style.display ="block";
    document.getElementById("audio7").style.position ="absolute";
    document.getElementById("audio7").style.bottom ="20%";
    document.getElementById("audio7").style.left ="15%";

}