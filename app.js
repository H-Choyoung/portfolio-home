const express = require('express');
const path = require('path');
const app = express(); //express함수 변수에 저장
const port = process.env.PORT || 3020; //포트 지정

/**
 * *정적 파일 루트 지정
 * path.resolve로 인자로 받은 값들을 하나의 문자열로 만든 뒤 정적 디렉토리에 대한 마운트 경로 지정
 * app.js 실행경로 + "/path"를 localhost:port/path로 마운트
 * app.use('{설정하고자 하는 web상의 경로}', express.static('{설정하고자 하는 실제 static 경로}'));
 */
app.use('/front', express.static(path.resolve(__dirname, 'front')));
app.use('/src', express.static(path.resolve(__dirname, 'front', 'src')));
app.use('/img', express.static(path.resolve(__dirname, 'front', 'img')));

// main
app.get('/*', (req, res) => {
  res.sendFile(path.resolve('', 'index.html'));
});

/* 에러페이지 */
app.use((req, res) => {
  res.type('text/html')
  res.status(404)
  res.send('404 Not Found')
  // res.sendFile(path.resolve('front', 'main.html'));
})
app.use((err, req, res) => {
  console.log(err)
  res.type('text/plain')
  res.status(500)
  res.send('500 server error')
})

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
