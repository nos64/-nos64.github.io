document.addEventListener("keydown", function (event) {

    if (event.code == "KeyA") {
        let audioA = new Audio();
        audioA.src = "media/A.mp3";
        audioA.autoplay = true;
        console.log("The 'A' key is pressed");
        document.querySelector(".kbdA").style.animation="";// ПЕРЕЗАПУСК АНИМАЦИИ
        document.querySelector(".kbdA").offsetWidth; // ПЕРЕЗАПУСК АНИМАЦИИ
        document.querySelector(".kbdA").style.animation = "greyBtn 0.2s linear";

    } else if (event.code == "KeyS") {
        let audioS = new Audio();
        audioS.src = "media/S.mp3";
        audioS.autoplay = true;
        console.log("The 'S' key is pressed")
        document.querySelector(".kbdS").style.animation="";
        document.querySelector(".kbdS").offsetWidth;
        document.querySelector(".kbdS").style.animation = "greyBtn 0.2s linear";

    }else if (event.code == "KeyD") {
        let audioD = new Audio();
        audioD.src = "media/D.mp3";
        audioD.autoplay = true;
        console.log("The 'D' key is pressed")
        document.querySelector(".kbdD").style.animation="";
        document.querySelector(".kbdD").offsetWidth; 
        document.querySelector(".kbdD").style.animation = "greyBtn 0.5s linear";

    } else if (event.code == "KeyF") {
        let audioF = new Audio();
        audioF.src = "media/F.mp3";
        audioF.autoplay = true;
        console.log("The 'F' key is pressed")
        document.querySelector(".kbdF").style.animation="";
        document.querySelector(".kbdF").offsetWidth;
        document.querySelector(".kbdF").style.animation = "greyBtn 0.2s linear";

    } else if (event.code == "KeyG") {
        let audioG = new Audio();
        audioG.src = "media/G.mp3";
        audioG.autoplay = true;
        console.log("The 'G' key is pressed")
        document.querySelector(".kbdG").style.animation="";
        document.querySelector(".kbdG").offsetWidth;
        document.querySelector(".kbdG").style.animation = "greyBtn 0.2s linear";

    } else if (event.code == "KeyH") {
        let audioH = new Audio();
        audioH.src = "media/H.mp3";
        audioH.autoplay = true;
        console.log("The 'H' key is pressed")
        document.querySelector(".kbdH").style.animation="";
        document.querySelector(".kbdH").offsetWidth;
        document.querySelector(".kbdH").style.animation = "greyBtn 0.2s linear";

    } else if (event.code == "KeyJ") {
        let audioJ = new Audio();
        audioJ.src = "media/J.mp3";
        audioJ.autoplay = true;
        console.log("The 'J' key is pressed")
        document.querySelector(".kbdJ").style.animation="";
        document.querySelector(".kbdJ").offsetWidth;
        document.querySelector(".kbdJ").style.animation = "greyBtn 0.2s linear";

    } else if (event.code == "KeyW") {
        let audioW = new Audio();
        audioW.src = "media/W.mp3";
        audioW.autoplay = true;
        console.log("The 'W' key is pressed")
        document.querySelector(".kbdW").style.animation="";
        document.querySelector(".kbdW").offsetWidth;
        document.querySelector(".kbdW").style.animation = "greyBtn 0.2s linear";
        
    } else if (event.code == "KeyE") {
        let audioE = new Audio();
        audioE.src = "media/E.mp3";
        audioE.autoplay = true;
        console.log("The 'E' key is pressed") 
        document.querySelector(".kbdE").style.animation="";
        document.querySelector(".kbdE").offsetWidth;
        document.querySelector(".kbdE").style.animation = "greyBtn 0.2s linear";

    } else if (event.code == "KeyT") {
        let audioT = new Audio();
        audioT.src = "media/T.mp3";
        audioT.autoplay = true;
        console.log("The 'T' key is pressed")
        document.querySelector(".kbdT").style.animation="";
        document.querySelector(".kbdT").offsetWidth;
        document.querySelector(".kbdT").style.animation = "greyBtn 0.2s linear";

    } else if (event.code == "KeyY") {
        let audioY = new Audio();
        audioY.src = "media/Y.mp3";
        audioY.autoplay = true;
        console.log("The 'Y' key is pressed")
        document.querySelector(".kbdY").style.animation="";
        document.querySelector(".kbdY").offsetWidth;
        document.querySelector(".kbdY").style.animation = "greyBtn 0.2s linear";

    } else if (event.code == "KeyU") { 
        let audioU = new Audio();
        audioU.src = "media/U.mp3";
        audioU.autoplay = true;
        console.log("The 'U' key is pressed")  
        document.querySelector(".kbdU").style.animation="";
        document.querySelector(".kbdU").offsetWidth;
        document.querySelector(".kbdU").style.animation = "greyBtn 0.2s linear";

    }else {
        console.log ("Wrong!")
    }
});




// document.addEventListener("keydown", function (event) {
//     if (event.code == "KeyS") {
//         console.log("The 'S' key is pressed")
//     }
// });
// document.addEventListener("keydown", function (event) {
//     if (event.code == "KeyD") {
//         console.log("The 'D' key is pressed")
//     }
// });
// document.addEventListener("keydown", function (event) {
//     if (event.code == "KeyF") {
//         console.log("The 'F' key is pressed")
//     }
// });
// document.addEventListener("keydown", function (event) {
//     if (event.code == "KeyG") {
//         console.log("The 'G' key is pressed")
//     }
// });
// document.addEventListener("keydown", function (event) {
//     if (event.code == "KeyH") {
//         console.log("The 'H' key is pressed")
//     }
// });
// document.addEventListener("keydown", function (event) {
//     if (event.code == "KeyJ") {
//         console.log("The 'J' key is pressed")
//     }
// });