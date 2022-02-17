//全部読み込んでから実行
window.addEventListener('load', function(){

//canvas要素の参照
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d")

//ボールの描画設定と位置管理の関数
function drawBall(){
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#5c7894";
    ctx.fill();
    ctx.closePath();
}

//パドルの描画設定関数
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#4c8068";
    ctx.fill();
    ctx.closePath();
}

//ボールとパドルの移動、描画と軌道消去関数。（20msループ）
function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();
    x += dx;
    y += dy;
    // (x += dx) は (x = x + dx) と同じ

    //ボールの弾み記述（上下）
    if(y + dy > canvas.height - ballRadius || y + dy < ballRadius){
        dy = -dy;
    }

    //(左辺||右辺)のどちらかがtrueならtrueになる演算子。
    //canvasは左上端を0として、一番下がheightの値（ここでは320）になっている。
    //canvas.heightとballRadiusの間にある - はマイナスの演算子。(y + dy > 310 || y + dy < -10)ということ。 -10はボールの半径。ボールの大きさを考慮してる。

    //ボールの弾み記述（左右）
    if(x + dx > canvas.width - ballRadius || x + dx < ballRadius){
        dx = -dx;
    }
}

//20ms毎に再描画
setInterval(draw, 20);

//ボールの位置変数
var x = canvas.width/2;
var y = canvas.height-30;

//ボールの位置定数
var dx = 2;
var dy = -2;

//ボールの半径指定
var ballRadius = 10;

//パドルのサイズと初期位置定数
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;

//入力情報の保存変数
var rightPressed = false;
var leftPressed = false;

//入力検知
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
})