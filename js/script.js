


window.addEventListener('DOMContentLoaded', function(){

    
    
 /*    let btn_play = document.getElementById("btn_play");*/ 
    let btn_play1 = document.getElementById("btn_play1");
    let btn_pause1 = document.getElementById("btn_pause1");
    let btn_pause_reset1 = document.getElementById("btn_pause_reset1");
    let sound1 = document.getElementById("sound1");

    //const audioElement = document.querySelector("audio");
    
    //非同期処理で実現する必要あり
    //引数にsound objectを渡す
    async function wait_play(sound1) {
        //htmlの秒数を取得
        let wait_time = document.getElementById("wait_time1");
        alert(wait_time.value + "秒後に再生します");
        //msecのためかける1000が必要
        wait_time = wait_time.value * 1000;        
        //sleep関数を呼び出す。
        await sleep(wait_time)
        //実行したい処理を書く
        sound1.play();
      }

    btn_play1.addEventListener("click", e => {
        /* sound1.play(); */
        wait_play(sound1)
    });

    btn_pause1.addEventListener("click", e => {
        sound1.pause();
    });

    btn_pause_reset1.addEventListener("click", e => {
        sound1.pause();
        sound1.currentTime = 0;
    })

    btn_play1.addEventListener("click", e => {
        let loop_chk1 = document.getElementById("loop_chk1");
        //alert(loop_chk1.checked);
        sound1.play();

        if (loop_chk1.checked == true) {
            sound1.loop = true
        } else {
            sound1.loop = false
        }
    });

    //子供の泣き声(男の子1)向け処理
    let btn_play2 = document.getElementById("btn_play2");
    let btn_pause2 = document.getElementById("btn_pause2");
    let btn_pause_reset2 = document.getElementById("btn_pause_reset2");
    let sound2 = document.getElementById("sound2");

    //非同期処理で実現する必要あり
    //引数にsound objectを渡す
    async function wait_play(sound2) {
        //htmlの秒数を取得
        let wait_time = document.getElementById("wait_time2");
        alert(wait_time.value + "秒後に再生します");
        //msecのためかける1000が必要
        wait_time = wait_time.value * 1000;        
        //sleep関数を呼び出す。
        await sleep(wait_time)
        //実行したい処理を書く
        sound2.play();
      }

    btn_play2.addEventListener("click", e => {
        /* sound2.play(); */
        wait_play(sound2)
    });

    btn_pause2.addEventListener("click", e => {
        sound2.pause();
    });

    btn_pause_reset2.addEventListener("click", e => {
        sound2.pause();
        sound2.currentTime = 0;
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

    //子供の泣き声(女の子)向け処理
    let btn_play3 = document.getElementById("btn_play3");
    let btn_pause3 = document.getElementById("btn_pause3");
    let btn_pause_reset3 = document.getElementById("btn_pause_reset3");
    let sound3 = document.getElementById("sound3");

    //非同期処理で実現する必要あり
    //引数にsound objectを渡す
    async function wait_play(sound3) {
        //htmlの秒数を取得
        let wait_time = document.getElementById("wait_time3");
        alert(wait_time.value + "秒後に再生します");
        //msecのためかける1000が必要
        wait_time = wait_time.value * 1000;        
        //sleep関数を呼び出す。
        await sleep(wait_time)
        //実行したい処理を書く
        sound3.play();
      }

    btn_play3.addEventListener("click", e => {
        /* sound3.play(); */
        wait_play(sound3)
    });

    btn_pause3.addEventListener("click", e => {
        sound3.pause();
    });

    btn_pause_reset3.addEventListener("click", e => {
        sound3.pause();
        sound3.currentTime = 0;
    })

    btn_play3.addEventListener("click", e => {
        let loop_chk3 = document.getElementById("loop_chk3");
        //alert(loop_chk3.checked);
        sound3.play();

        if (loop_chk3.checked == true) {
            sound3.loop = true
        } else {
            sound3.loop = false
        }
    });

    //固定電話の呼び出し音向け処理
    let btn_play4 = document.getElementById("btn_play4");
    let btn_pause4 = document.getElementById("btn_pause4");
    let btn_pause_reset4 = document.getElementById("btn_pause_reset4");
    let sound4 = document.getElementById("sound4");

    //非同期処理で実現する必要あり
    //引数にsound objectを渡す
    async function wait_play(sound4) {
        //htmlの秒数を取得
        let wait_time = document.getElementById("wait_time4");
        alert(wait_time.value + "秒後に再生します");
        //msecのためかける1000が必要
        wait_time = wait_time.value * 1000;        
        //sleep関数を呼び出す。
        await sleep(wait_time)
        //実行したい処理を書く
        sound4.play();
      }

    btn_play4.addEventListener("click", e => {
        /* sound4.play(); */
        wait_play(sound4)
    });

    btn_pause4.addEventListener("click", e => {
        sound4.pause();
    });

    btn_pause_reset4.addEventListener("click", e => {
        sound4.pause();
        sound4.currentTime = 0;
    })

    btn_play4.addEventListener("click", e => {
        let loop_chk4 = document.getElementById("loop_chk1");
        //alert(loop_chk1.checked);
        sound4.play();

        if (loop_chk4.checked == true) {
            sound4.loop = true
        } else {
            sound4.loop = false
        }
    });
    //
    let btn_play5 = document.getElementById("btn_play5");
    let btn_pause5 = document.getElementById("btn_pause5");
    let btn_pause_reset5 = document.getElementById("btn_pause_reset5");
    let sound5 = document.getElementById("sound5");

    //非同期処理で実現する必要あり
    //引数にsound objectを渡す
    async function wait_play(sound5) {
        //htmlの秒数を取得
        let wait_time = document.getElementById("wait_time5");
        alert(wait_time.value + "秒後に再生します");
        //msecのためかける1000が必要
        wait_time = wait_time.value * 1000;        
        //sleep関数を呼び出す。
        await sleep(wait_time)
        //実行したい処理を書く
        sound5.play();
      }

    btn_play5.addEventListener("click", e => {
        /* sound5.play(); */
        wait_play(sound5)
    });

    btn_pause5.addEventListener("click", e => {
        sound5.pause();
    });

    btn_pause_reset5.addEventListener("click", e => {
        sound5.pause();
        sound5.currentTime = 0;
    })

    btn_play5.addEventListener("click", e => {
        let loop_chk5 = document.getElementById("loop_chk5");
        //alert(loop_chk5.checked);
        sound5.play();

        if (loop_chk5.checked == true) {
            sound5.loop = true
        } else {
            sound5.loop = false
        }
    });

    let btn_play6 = document.getElementById("btn_play6");
    let btn_pause6 = document.getElementById("btn_pause6");
    let btn_pause_reset6 = document.getElementById("btn_pause_reset6");
    let sound6 = document.getElementById("sound6");

    //非同期処理で実現する必要あり
    //引数にsound objectを渡す
    async function wait_play(sound6) {
        //htmlの秒数を取得
        let wait_time = document.getElementById("wait_time6");
        alert(wait_time.value + "秒後に再生します");
        //msecのためかける1000が必要
        wait_time = wait_time.value * 1000;        
        //sleep関数を呼び出す。
        await sleep(wait_time)
        //実行したい処理を書く
        sound6.play();
      }

    btn_play6.addEventListener("click", e => {
        /* sound6.play(); */
        wait_play(sound6)
    });

    btn_pause6.addEventListener("click", e => {
        sound6.pause();
    });

    btn_pause_reset6.addEventListener("click", e => {
        sound6.pause();
        sound6.currentTime = 0;
    })

    btn_play6.addEventListener("click", e => {
        let loop_chk6 = document.getElementById("loop_chk6");
        //alert(loop_chk6.checked);
        sound6.play();

        if (loop_chk6.checked == true) {
            sound6.loop = true
        } else {
            sound6.loop = false
        }
    });

    let btn_play7 = document.getElementById("btn_play7");
    let btn_pause7 = document.getElementById("btn_pause7");
    let btn_pause_reset7 = document.getElementById("btn_pause_reset7");
    let sound7 = document.getElementById("sound7");

    //非同期処理で実現する必要あり
    //引数にsound objectを渡す
    async function wait_play(sound) {
        //htmlの秒数を取得
        let wait_time = document.getElementById("wait_time7");
        alert(wait_time.value + "秒後に再生します");
        //msecのためかける1000が必要
        wait_time = wait_time.value * 1000;        
        //sleep関数を呼び出す。
        await sleep(wait_time)
        //実行したい処理を書く
        sound7.play();
      }

    btn_play7.addEventListener("click", e => {
        /* sound7.play(); */
        wait_play(sound7)
    });

    btn_pause7.addEventListener("click", e => {
        sound7.pause();
    });

    btn_pause_reset7.addEventListener("click", e => {
        sound7.pause();
        sound7.currentTime = 0;
    })

    btn_play7.addEventListener("click", e => {
        let loop_chk7 = document.getElementById("loop_chk7");
        //alert(loop_chk7.checked);
        sound7.play();

        if (loop_chk7.checked == true) {
            sound7.loop = true
        } else {
            sound7.loop = false
        }
    });

    let btn_play8 = document.getElementById("btn_play8");
    let btn_pause8 = document.getElementById("btn_pause8");
    let btn_pause_reset8 = document.getElementById("btn_pause_reset8");
    let sound8 = document.getElementById("sound8");

    //非同期処理で実現する必要あり
    //引数にsound objectを渡す
    async function wait_play(sound8) {
        //htmlの秒数を取得
        let wait_time = document.getElementById("wait_time8");
        alert(wait_time.value + "秒後に再生します");
        //msecのためかける1000が必要
        wait_time = wait_time.value * 1000;        
        //sleep関数を呼び出す。
        await sleep(wait_time)
        //実行したい処理を書く
        sound8.play();
      }

    btn_play8.addEventListener("click", e => {
        /* sound8.play(); */
        wait_play(sound8)
    });

    btn_pause8.addEventListener("click", e => {
        sound8.pause();
    });

    btn_pause_reset8.addEventListener("click", e => {
        sound8.pause();
        sound8.currentTime = 0;
    })

    btn_play8.addEventListener("click", e => {
        let loop_chk8 = document.getElementById("loop_chk8");
        //alert(loop_chk1.checked);
        sound8.play();

        if (loop_chk1.checked == true) {
            sound8.loop = true
        } else {
            sound8.loop = false
        }
    });

    let btn_play9 = document.getElementById("btn_play9");
    let btn_pause9 = document.getElementById("btn_pause9");
    let btn_pause_reset9 = document.getElementById("btn_pause_reset9");
    let sound9 = document.getElementById("sound9");

    //非同期処理で実現する必要あり
    //引数にsound objectを渡す
    async function wait_play(sound) {
        //htmlの秒数を取得
        let wait_time = document.getElementById("wait_time9");
        alert(wait_time.value + "秒後に再生します");
        //msecのためかける1000が必要
        wait_time = wait_time.value * 1000;        
        //sleep関数を呼び出す。
        await sleep(wait_time)
        //実行したい処理を書く
        sound.play();
      }

    btn_play9.addEventListener("click", e => {
        /* sound9.play(); */
        wait_play(sound9)
    });

    btn_pause9.addEventListener("click", e => {
        sound9.pause();
    });

    btn_pause_reset9.addEventListener("click", e => {
        sound9.pause();
        sound9.currentTime = 0;
    })

    btn_play9.addEventListener("click", e => {
        let loop_chk1 = document.getElementById("loop_chk9");
        //alert(loop_chk9.checked);
        sound9.play();

        if (loop_chk9.checked == true) {
            sound9.loop = true
        } else {
            sound9.loop = false
        }
    });

//wait処理を実現するための関数
const sleep = ms => new Promise(res => setTimeout(res, ms));


/*     btn_pause2.addEventListener("click", e => {
        sound2.pause();
    });

    //sendボタンのクリックイベント
    send_btn.addEventListener("click", e => {
        alert();
    });

    test_btn.addEventListener("click", e => {
        alert();
    }); */


});
