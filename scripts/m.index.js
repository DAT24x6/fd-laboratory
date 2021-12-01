//時計
function clock(){
    var dd = new Date();
    var hour = dd.getHours();
    var min = dd.getMinutes();
    var sec = dd.getSeconds();
    var msg = hour + "時" + min + "分" + sec + "秒";
    document.getElementById("Realtime").innerHTML = msg;
}
    setInterval('clock()',1000);

//ボタンとかとかとか
function introduction() {
    ons.notification.alert("新規タブで開きました。")
    window.open("introduction.html")
}

function google(){
    ons.notification.alert("リンク先にジャンプしました。")
    window.open("https://www.google.co.jp/")
}

function minecraft(){
    ons.notification.alert("新規タブで開きました。")
    window.open("minecraft.html")
}

function jump_index(){
    window.open("index.html")
}