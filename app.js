import express from "express";
import path from "path"
const app = express(); //express함수 변수에 저장
const port = process.env.PORT || 3020; // 포트 지정
const __dirname = path.resolve();

app.use(express.static("public")); //정적파일 루트 지정
app.use(express.static("src")); //정적파일 루트 지정

/* 메인페이지 */
app.get('/', function(req, res){
  // res.send('test');
  res.sendFile(__dirname + "/public/main.html")
});
/* 마우스오버 모듈 */
app.get('/hover', function(req, res){
  res.sendFile(__dirname + "/src/hover.js")
});
app.get('/about', function(req, res){
  res.sendFile(__dirname + "/src/page/about.js")
});
app.get('/router', function (req, res) {
  res.sendFile(__dirname + '/src/router.js');
});

/* 에러페이지 */
app.use((req, res) => {
  res.type('text/plain')
  res.status(404)
  res.send('404 Not Found')
})
app.use((err, req, res) => {
  console.log(err)
  res.type('text/plain')
  res.status(500)
  res.send('500 server error')
})
app.listen(port, function(){
  console.log(`server running on port ${port}`);
})