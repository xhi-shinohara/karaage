


window.addEventListener('DOMContentLoaded', function(){

    /************************************************************************************/
    /***************************** 変数の宣言 *********************************************/
    /************************************************************************************/

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
    let btn_play10 = document.getElementById("btn_play10");
    let btn_pause10 = document.getElementById("btn_pause10");
    let btn_pause_reset10 = document.getElementById("btn_pause_reset10");
    
    const RESET_FLAG_TRUE = 1;
    const RESET_FLAG_FALSE = 0;

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
    function stop_sound (pause_sound,reset_flag) {
        pause_sound.pause();   

        if (reset_flag == RESET_FLAG_TRUE){
            pause_sound.currentTime = 0;    
        }
    };

    //ループ処理関数
    function loop_check (play_sound,loop_chk) {
        //1oop_chk.checked == true と同義
        if (loop_chk.checked) {
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
        let loop_chk1 = document.getElementById("loop_chk1");
        let wait_time1 = document.getElementById("wait_time1");
        //ループ処理関数を呼び出し
        loop_check (sound1, loop_chk1);

        //ウエイト処理を実行
        wait_play(sound1, wait_time1);
    });

    //一時停止ボタンが押された際の処理
    btn_pause1.addEventListener("click", e => {
        stop_sound (sound1, RESET_FLAG_FALSE);
    });

    //停止ボタンが押された際の処理
    btn_pause_reset1.addEventListener("click", e => {
        //停止処理の関数を呼び出し
        stop_sound (sound1, RESET_FLAG_TRUE);
    });

    /************************************************************************************/
    /***************************** 子供の泣き声(男の子)向け処理 ******************************/
    /************************************************************************************/

    //再生ボタンが押された際の処理
    btn_play2.addEventListener("click", e => {
        let loop_chk2 = document.getElementById("loop_chk2");
        let wait_time2 = document.getElementById("wait_time2");
        //ループ処理関数を呼び出し
        loop_check (sound2, loop_chk2);

        //ウエイト処理を実行
        wait_play(sound2, wait_time2);
    });

    //一時停止ボタンが押された際の処理
    btn_pause2.addEventListener("click", e => {
        stop_sound (sound2, RESET_FLAG_FALSE);
    });

    //停止ボタンが押された際の処理
    btn_pause_reset2.addEventListener("click", e => {
        //停止処理の関数を呼び出し
        stop_sound (sound2, RESET_FLAG_TRUE);
    });

    /************************************************************************************/
    /***************************** 子供の泣き声(女の子)向け処理 ******************************/
    /************************************************************************************/

     //再生ボタンが押された際の処理
     btn_play3.addEventListener("click", e => {
        let loop_chk3 = document.getElementById("loop_chk3");
        let wait_time3 = document.getElementById("wait_time3");
        //ループ処理関数を呼び出し
        loop_check (sound3, loop_chk3);

        //ウエイト処理を実行
        wait_play(sound3, wait_time3);
    });

    //一時停止ボタンが押された際の処理
    btn_pause3.addEventListener("click", e => {
        stop_sound (sound3, RESET_FLAG_FALSE);
    });

    //停止ボタンが押された際の処理
    btn_pause_reset3.addEventListener("click", e => {
        //停止処理の関数を呼び出し
        stop_sound (sound3, RESET_FLAG_TRUE);
    });

    /************************************************************************************/
    /***************************** 固定電話の呼び出し音1向け処理 ******************************/
    /************************************************************************************/

    //再生ボタンが押された際の処理
    btn_play4.addEventListener("click", e => {
        let loop_chk4 = document.getElementById("loop_chk4");
        let wait_time4 = document.getElementById("wait_time4");
        //ループ処理関数を呼び出し
        loop_check (sound4, loop_chk4);

        //ウエイト処理を実行
        wait_play(sound4, wait_time4);
    });

    //一時停止ボタンが押された際の処理
    btn_pause4.addEventListener("click", e => {
        stop_sound (sound4, RESET_FLAG_FALSE);
    });

    //停止ボタンが押された際の処理
    btn_pause_reset4.addEventListener("click", e => {
        //停止処理の関数を呼び出し
        stop_sound (sound4, RESET_FLAG_TRUE);
    });

    /************************************************************************************/
    /***************************** 固定電話の呼び出し音2向け処理 ***********************************/
    /************************************************************************************/

        //再生ボタンが押された際の処理
        btn_play10.addEventListener("click", e => {
            let loop_chk10 = document.getElementById("loop_chk10");
            let wait_time10 = document.getElementById("wait_time10");
            //ループ処理関数を呼び出し
            loop_check (sound10, loop_chk10);
    
            //ウエイト処理を実行
            wait_play(sound10, wait_time10);
        });
    
        //一時停止ボタンが押された際の処理
        btn_pause4.addEventListener("click", e => {
            stop_sound (sound10, RESET_FLAG_FALSE);
        });
    
        //停止ボタンが押された際の処理
        btn_pause_reset10.addEventListener("click", e => {
            //停止処理の関数を呼び出し
            stop_sound (sound10, RESET_FLAG_TRUE);
        });

    /************************************************************************************/
    /***************************** インターホン１向け処理 ***********************************/
    /************************************************************************************/

    //再生ボタンが押された際の処理
    btn_play5.addEventListener("click", e => {
        let loop_chk5 = document.getElementById("loop_chk5");
        let wait_time5 = document.getElementById("wait_time5");
        //ループ処理関数を呼び出し
        loop_check (sound5, loop_chk5);

        //ウエイト処理を実行
        wait_play(sound5, wait_time5);
    });

    //一時停止ボタンが押された際の処理
    btn_pause5.addEventListener("click", e => {
        stop_sound (sound5, RESET_FLAG_FALSE);
    });

    //停止ボタンが押された際の処理
    btn_pause_reset5.addEventListener("click", e => {
        //停止処理の関数を呼び出し
        stop_sound (sound5, RESET_FLAG_TRUE);
    });
    
    /************************************************************************************/
    /***************************** インターホン２向け処理 ***********************************/
    /************************************************************************************/

    //再生ボタンが押された際の処理
    btn_play6.addEventListener("click", e => {
        let loop_chk6 = document.getElementById("loop_chk6");
        let wait_time6 = document.getElementById("wait_time6");
        //ループ処理関数を呼び出し
        loop_check (sound6, loop_chk6);

        //ウエイト処理を実行
        wait_play(sound6, wait_time6);
    });

    //一時停止ボタンが押された際の処理
    btn_pause6.addEventListener("click", e => {
        stop_sound (sound6, RESET_FLAG_FALSE);
    });

    //停止ボタンが押された際の処理
    btn_pause_reset6.addEventListener("click", e => {
        //停止処理の関数を呼び出し
        stop_sound (sound6, RESET_FLAG_TRUE);
    });
    
    /************************************************************************************/
    /***************************** 洗濯機がこわれた音向け処理 *******************************/
    /************************************************************************************/

    //再生ボタンが押された際の処理
    btn_play7.addEventListener("click", e => {
        let loop_chk7 = document.getElementById("loop_chk7");
        let wait_time7 = document.getElementById("wait_time7");
        //ループ処理関数を呼び出し
        loop_check (sound7, loop_chk7);

        //ウエイト処理を実行
        wait_play(sound7, wait_time7);
    });

    //一時停止ボタンが押された際の処理
    btn_pause7.addEventListener("click", e => {
        stop_sound (sound7, RESET_FLAG_FALSE);
    });

    //停止ボタンが押された際の処理
    btn_pause_reset7.addEventListener("click", e => {
        //停止処理の関数を呼び出し
        stop_sound (sound7, RESET_FLAG_TRUE);
    });

    /************************************************************************************/
    /***************************** 救急車向け処理 *****************************************/
    /************************************************************************************/

    //再生ボタンが押された際の処理
    btn_play8.addEventListener("click", e => {
        let loop_chk8 = document.getElementById("loop_chk8");
        let wait_time8 = document.getElementById("wait_time8");
        //ループ処理関数を呼び出し
        loop_check (sound8, loop_chk8);

        //ウエイト処理を実行
        wait_play(sound8, wait_time8);
    });

    //一時停止ボタンが押された際の処理
    btn_pause8.addEventListener("click", e => {
        stop_sound (sound8, RESET_FLAG_FALSE);
    });

    //停止ボタンが押された際の処理
    btn_pause_reset8.addEventListener("click", e => {
        //停止処理の関数を呼び出し
        stop_sound (sound8, RESET_FLAG_TRUE);
    });

    /************************************************************************************/
    /***************************** 借金取り向け処理 ****************************************/
    /************************************************************************************/

    //再生ボタンが押された際の処理
    btn_play9.addEventListener("click", e => {
        let loop_chk9 = document.getElementById("loop_chk9");
        let wait_time9 = document.getElementById("wait_time9");
        //ループ処理関数を呼び出し
        loop_check (sound9, loop_chk9);

        //ウエイト処理を実行
        wait_play(sound9, wait_time9);
    });

    //一時停止ボタンが押された際の処理
    btn_pause9.addEventListener("click", e => {
        stop_sound (sound9, RESET_FLAG_FALSE);
    });

    //停止ボタンが押された際の処理
    btn_pause_reset9.addEventListener("click", e => {
        //停止処理の関数を呼び出し
        stop_sound (sound9, RESET_FLAG_TRUE);
    });

    /************************************************************************************/
});
