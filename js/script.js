


window.addEventListener('DOMContentLoaded', function(){

    /************************************************************************************/
    /***************************** 変数の宣言 *********************************************/
    /************************************************************************************/

    let play_sound;
    let pause_sound;
    let loop_chk;
    let wait_time;    
    let btn_play1 = document.getElementById("btn_play1");
    let btn_pause1 = document.getElementById("btn_pause1");
    let btn_pause_reset1 = document.getElementById("btn_pause_reset1");
    let btn_play2 = document.getElementById("btn_play2");
    let btn_pause2 = document.getElementById("btn_pause2");
    let btn_pause_reset2 = document.getElementById("btn_pause_reset2");
    let btn_play3 = document.getElementById("btn_play3");
    let btn_pause3 = document.getElementById("btn_pause3");
    let btn_pause_reset3 = document.getElementById("btn_pause_reset3");
    let btn_play4 = document.getElementById("btn_play4");
    let btn_pause4 = document.getElementById("btn_pause4");
    let btn_pause_reset4 = document.getElementById("btn_pause_reset4");
    let btn_play5 = document.getElementById("btn_play5");
    let btn_pause5 = document.getElementById("btn_pause5");
    let btn_pause_reset5 = document.getElementById("btn_pause_reset5");
    let btn_play6 = document.getElementById("btn_play6");
    let btn_pause6 = document.getElementById("btn_pause6");
    let btn_pause_reset6 = document.getElementById("btn_pause_reset6");
    let btn_play7 = document.getElementById("btn_play7");
    let btn_pause7 = document.getElementById("btn_pause7");
    let btn_pause_reset7 = document.getElementById("btn_pause_reset7");
    let btn_play8 = document.getElementById("btn_play8");
    let btn_pause8 = document.getElementById("btn_pause8");
    let btn_pause_reset8 = document.getElementById("btn_pause_reset8");
    let btn_play9 = document.getElementById("btn_play9");
    let btn_pause9 = document.getElementById("btn_pause9");
    let btn_pause_reset9 = document.getElementById("btn_pause_reset9");

    /************************************************************************************/
    /***************************** 共通の関数 *********************************************/
    /************************************************************************************/

    //wait処理を実現するための関数
    const sleep = ms => new Promise(res => setTimeout(res, ms));

    //非同期で再生処理を行う関数
    async function wait_play(play_sound,wait_time) {
        //htmlの秒数を取得
        alert(wait_time.value + "秒後に再生します");
        //msecのためかける1000が必要
        wait_time = wait_time.value * 1000;        
        //sleep関数を呼び出す。
        await sleep(wait_time);
        //実行したい処理を書く
        play_sound.play();
    }

    //サウンド停止用の関数
    function stop_sound (pause_sound) {
        pause_sound.pause();
        pause_sound.currentTime = 0;            
    };

    //ループ処理関数
    function loop_check (play_sound,loop_chk) {
        if (loop_chk.checked == true) {
            play_sound.loop = true
        } 
        else {
            play_sound.loop = false
        }
    };

    /************************************************************************************/
    /***************************** 赤ちゃんの泣き声(新生児)向け処理 **************************/
    /************************************************************************************/

    //再生ボタンが押された際の処理
    btn_play1.addEventListener("click", e => {
        play_sound = document.getElementById("sound1");
        loop_chk = document.getElementById("loop_chk1");
        //ループ処理関数を呼び出し
        loop_check (play_sound, loop_chk);

        wait_time = document.getElementById("wait_time1");

        wait_play(play_sound,wait_time);
    });

    //一時停止ボタンが押された際の処理
    btn_pause1.addEventListener("click", e => {
        sound1.pause();
    });

    //停止ボタンが押された際の処理
    btn_pause_reset1.addEventListener("click", e => {
         pause_sound = document.getElementById("sound1");
        //停止処理の関数を呼び出し
        stop_sound (pause_sound);
    });

    /************************************************************************************/
    /***************************** 子供の泣き声(男の子)向け処理 ******************************/
    /************************************************************************************/

    //再生ボタンが押された際の処理
    btn_play2.addEventListener("click", e => {
        play_sound = document.getElementById("sound2");
        loop_chk = document.getElementById("loop_chk2");
        //ループ処理関数を呼び出し
        loop_check (play_sound, loop_chk);

        wait_time = document.getElementById("wait_time2");

        wait_play(play_sound,wait_time);
    });

    //一時停止ボタンが押された際の処理
    btn_pause2.addEventListener("click", e => {
        sound2.pause();
    });

    //停止ボタンが押された際の処理
    btn_pause_reset2.addEventListener("click", e => {
        pause_sound = document.getElementById("sound2");
        //停止処理の関数を呼び出し
        stop_sound (pause_sound);
    });

    /************************************************************************************/
    /***************************** 子供の泣き声(女の子)向け処理 ******************************/
    /************************************************************************************/

    //再生ボタンが押された際の処理
    btn_play3.addEventListener("click", e => {
        play_sound = document.getElementById("sound3");
        loop_chk = document.getElementById("loop_chk3");
        //ループ処理関数を呼び出し
        loop_check (play_sound, loop_chk);

        wait_time = document.getElementById("wait_time3");

        wait_play(play_sound,wait_time);
    });

    //一時停止ボタンが押された際の処理
    btn_pause3.addEventListener("click", e => {
        sound3.pause();
    });

    //停止ボタンが押された際の処理
    btn_pause_reset3.addEventListener("click", e => {
        pause_sound = document.getElementById("sound3");
        //停止処理の関数を呼び出し
        stop_sound (pause_sound);
    });

    /************************************************************************************/
    /***************************** 固定電話の呼び出し音向け処理 ******************************/
    /************************************************************************************/

    //再生ボタンが押された際の処理
    btn_play4.addEventListener("click", e => {
        play_sound = document.getElementById("sound4");
        loop_chk = document.getElementById("loop_chk4");
        //ループ処理関数を呼び出し
        loop_check (play_sound, loop_chk);

        wait_time = document.getElementById("wait_time4");

        wait_play(play_sound,wait_time);
    });

    //一時停止ボタンが押された際の処理
    btn_pause4.addEventListener("click", e => {
        sound4.pause();
    });

    //停止ボタンが押された際の処理
    btn_pause_reset4.addEventListener("click", e => {
        pause_sound = document.getElementById("sound4");
        //停止処理の関数を呼び出し
        stop_sound (pause_sound);
    });

    /************************************************************************************/
    /***************************** インターホン１向け処理 ***********************************/
    /************************************************************************************/

    //再生ボタンが押された際の処理
    btn_play5.addEventListener("click", e => {
        play_sound = document.getElementById("sound5");
        loop_chk = document.getElementById("loop_chk5");
        //ループ処理関数を呼び出し
        loop_check (play_sound, loop_chk);

        wait_time = document.getElementById("wait_time5");

        wait_play(play_sound,wait_time);
    });

    //一時停止ボタンが押された際の処理
    btn_pause5.addEventListener("click", e => {
        sound5.pause();
    });

    //停止ボタンが押された際の処理
    btn_pause_reset5.addEventListener("click", e => {
        pause_sound = document.getElementById("sound5");
        //停止処理の関数を呼び出し
        stop_sound (pause_sound);
    });
    
    /************************************************************************************/
    /***************************** インターホン２向け処理 ***********************************/
    /************************************************************************************/

    //再生ボタンが押された際の処理
    btn_play6.addEventListener("click", e => {
        play_sound = document.getElementById("sound6");
        loop_chk = document.getElementById("loop_chk6");
        //ループ処理関数を呼び出し
        loop_check (play_sound, loop_chk);

        wait_time = document.getElementById("wait_time6");

        wait_play(play_sound,wait_time);
    });

    //一時停止ボタンが押された際の処理
    btn_pause6.addEventListener("click", e => {
        sound6.pause();
    });

    //停止ボタンが押された際の処理
    btn_pause_reset6.addEventListener("click", e => {
        pause_sound = document.getElementById("sound6");
        //停止処理の関数を呼び出し
        stop_sound (pause_sound);
    });
    
    /************************************************************************************/
    /***************************** 洗濯機がこわれた音向け処理 *******************************/
    /************************************************************************************/

    //再生ボタンが押された際の処理
    btn_play7.addEventListener("click", e => {
        play_sound = document.getElementById("sound7");
        loop_chk = document.getElementById("loop_chk7");
        //ループ処理関数を呼び出し
        loop_check (play_sound, loop_chk);

        wait_time = document.getElementById("wait_time7");

        wait_play(play_sound,wait_time);
    });

    //一時停止ボタンが押された際の処理
    btn_pause7.addEventListener("click", e => {
        sound7.pause();
    });

    //停止ボタンが押された際の処理
    btn_pause_reset7.addEventListener("click", e => {
        pause_sound = document.getElementById("sound7");
        //停止処理の関数を呼び出し
        stop_sound (pause_sound);
    });

    /************************************************************************************/
    /***************************** 救急車向け処理 *****************************************/
    /************************************************************************************/

    //再生ボタンが押された際の処理
    btn_play8.addEventListener("click", e => {
        play_sound = document.getElementById("sound8");
        loop_chk = document.getElementById("loop_chk8");
        //ループ処理関数を呼び出し
        loop_check (play_sound, loop_chk);

        wait_time = document.getElementById("wait_time8");

        wait_play(play_sound,wait_time);
    });

    //一時停止ボタンが押された際の処理
    btn_pause8.addEventListener("click", e => {
        sound8.pause();
    });

    //停止ボタンが押された際の処理
    btn_pause_reset8.addEventListener("click", e => {
        pause_sound = document.getElementById("sound8");
        //停止処理の関数を呼び出し
        stop_sound (pause_sound);
    });

    /************************************************************************************/
    /***************************** 借金取り向け処理 ****************************************/
    /************************************************************************************/

    //再生ボタンが押された際の処理
    btn_play9.addEventListener("click", e => {
        play_sound = document.getElementById("sound9");
        loop_chk = document.getElementById("loop_chk9");
        //ループ処理関数を呼び出し
        loop_check (play_sound, loop_chk);

        wait_time = document.getElementById("wait_time9");

        wait_play(play_sound,wait_time);
    });

    //一時停止ボタンが押された際の処理
    btn_pause9.addEventListener("click", e => {
        sound9.pause();
    });

    //停止ボタンが押された際の処理
    btn_pause_reset9.addEventListener("click", e => {
        pause_sound = document.getElementById("sound9");
        //停止処理の関数を呼び出し
        stop_sound (pause_sound);
    });
    /************************************************************************************/
});
