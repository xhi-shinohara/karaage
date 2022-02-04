(() => {
 
    const wikiInput = document.getElementById("js-wikipedia-input"); //input部分
    const wikiButton = document.getElementById("js-wikipedia-button"); //button部分
    const wikiBody = document.getElementById("js-wikipedia-body"); //表示させるエリア
  
    const wikiFetch = async (inputValue) => { //asyncで非同期処理だと宣言する
      const fetchValue = fetch(`https://ja.wikipedia.org/w/api.php?format=json&action=query&origin=*&list=search&srlimit=45&srsearch=${inputValue}`, {
        method: "GET"
      })
        .then((value) => {
          return value.json(); //wikipediaからのデータをJSON形式に変換
        })
        .catch(() => {
          alert("wikipediaにうまくアクセスできないようです、、");
        });
  
      const valueJson = await fetchValue; //非同期処理を実行
      const valueTargets = valueJson.query.search; //必要な情報が入っている配列を取得
  
      if (!valueTargets.length) {
        const wikiNull = document.createElement("p");
        wikiNull.classList.add("p-wikipedia__null");
        wikiNull.textContent = "検索したワードはヒットしませんでした。";
        wikiBody.appendChild(wikiNull);
      } else {
        const elemWrap = document.createElement("div");
        elemWrap.classList.add("p-wikipedia__main");
  
        for (const elem of valueTargets) {
          //a要素を作ってリンク先にページIDを設定する
          const elemBlock = document.createElement("a");
          elemBlock.classList.add("p-wikipedia__block");
          elemBlock.setAttribute("target", "_blank");
          elemBlock.setAttribute("rel", "noopener noreferrer");
          const elemId = elem.pageid;
          elemBlock.setAttribute("href", `http://jp.wikipedia.org/?curid=${elemId}`);
          
          //span要素を作ってタイトルを設定する
          const elemSpan = document.createElement("span");
          elemSpan.classList.add("p-wikipedia__block-ttl");
          const elemTitle = elem.title;
          elemSpan.textContent = elemTitle;
          
          //span要素を作って更新日を設定する
          const elemSpan2 = document.createElement("span");
          elemSpan2.classList.add("p-wikipedia__block-date");
          const elemDate = elem.timestamp;
          const elemDateSlice = elemDate.slice(0, 10).replace(/-/g, ".");
          elemSpan2.textContent = "最終更新日：" + elemDateSlice;
  
          //作成した要素を順番に組み合わせていく
          elemWrap.appendChild(elemBlock);
          elemBlock.appendChild(elemSpan);
          elemBlock.appendChild(elemSpan2);
          wikiBody.appendChild(elemWrap);
        }
      }
    };
    
    //クリックイベントに設定している関数
    const wikiData = () => {
      wikiBody.innerHTML = ""; //一旦js-wikipedia-bodyの中を空にする
      const inputValue = wikiInput.value; //Input要素に入力されたテキストを取得
      wikiFetch(inputValue);
    };
  
    wikiButton.addEventListener("click", wikiData, false);
  })();