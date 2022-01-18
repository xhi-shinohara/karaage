


window.addEventListener('DOMContentLoaded', function(){
    
    let btn_play = document.getElementById("btn_play");
    let btn_pause = document.getElementById("btn_pause");
    let sound1 = document.getElementById("sound1");

    //const audioElement = document.querySelector("audio");
    
    let btn_play2 = document.getElementById("btn_play2");
    let btn_pause2 = document.getElementById("btn_pause2");
    let sound2 = document.getElementById("sound2");

    //


    btn_play.addEventListener("click", e => {
        sound1.play();
    });

    btn_pause.addEventListener("click", e => {
        sound1.pause();
    });

    btn_play2.addEventListener("click", e => {
        let loop_chk2 = document.getElementById("loop_chk2");
        //alert(loop_chk2.checked);
        sound2.play();

        if (loop_chk2.checked == true) {
            sound2.loop = true
        } else {
            sound2.loop = false
        }

    });

    btn_pause2.addEventListener("click", e => {
        sound2.pause();
    });
});

function aa() {

}