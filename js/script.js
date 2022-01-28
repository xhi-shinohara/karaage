


window.addEventListener('DOMContentLoaded', function(){

    
    
    let btn_play = document.getElementById("btn_play");
    let btn_pause = document.getElementById("btn_pause");
    let btn_pause_reset = document.getElementById("btn_pause_reset");

    let sound1 = document.getElementById("sound1");

    //const audioElement = document.querySelector("audio");
    
    let btn_play2 = document.getElementById("btn_play2");
    let btn_pause2 = document.getElementById("btn_pause2");
    let sound2 = document.getElementById("sound2");

    //wait処理を実現するための関数
    const sleep = ms => new Promise(res => setTimeout(res, ms));



    //非同期処理で実現する必要あり
    //引数にsound objectを渡す
    async function wait_play(sound) {
        //htmlの秒数を取得
        let wait_time = document.getElementById("wait_time");
        alert(wait_time.value + "秒後に再生します");
        //msecのためかける1000が必要
        wait_time = wait_time.value * 1000;
        
        //sleep関数を呼び出す。
        await sleep(wait_time)

        //実行したい処理を書く
        sound.play();

      }

    btn_play.addEventListener("click", e => {
        /* sound1.play(); */
        wait_play(sound1)
    });

    btn_pause.addEventListener("click", e => {
        sound1.pause();
    });

    btn_pause_reset.addEventListener("click", e => {
        sound1.pause();
        sound1.currentTime = 0;
    })


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

    //sendボタンのクリックイベント
    send_btn.addEventListener("click", e => {
        alert();
    });

    test_btn.addEventListener("click", e => {
        alert();
    });


});