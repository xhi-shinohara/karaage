


window.addEventListener('DOMContentLoaded', function(){
    
    //keijiban.htmlのsendボタンのid属性取得
    let send_btn = document.getElementById("send_btn");

    let test_btn = document.getElementById("test_btn");

    //keijiban.htmlのtextareaのid属性取得
    let msg_box = document.getElementById("msg_box");

    
    let all_msg = document.getElementById("all_msg");

    let hantei = document.getElementsByName('hantei');

    let good_list = ["素晴らしい！","最高！","使いやすい！","バルス！！！"];

    //sendボタンのクリックイベント
    send_btn.addEventListener("click", e => {

        if (msg_box.value == "") {
            alert("理由をお書き下さい");
        } else {
            let now_time = new Date().toLocaleString({ timeZone: 'Asia/Tokyo' });

            //良くない意見の場合の処理
            if (hantei.item(1).checked) {
                //良くない意見の場合は、コメントを変更する。
                all_msg.innerHTML = all_msg.innerHTML + "<br><br>" + now_time + " : " + "<br>" + good_list[Math.floor(Math.random() * good_list.length)];            
            } else {
                //良い意見の場合は、そのままのコメント
                all_msg.innerHTML = all_msg.innerHTML + "<br><br>" + now_time + " : " + "<br>" + msg_box.value;
            }
        }
    });

});
