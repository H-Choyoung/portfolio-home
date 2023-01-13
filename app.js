const express = require('express');
const path = require('path');
const app = express(); //express함수 변수에 저장
const port = process.env.PORT || 3020; //포트 지정

/**
 * *정적 파일 루트 지정
 * path.resolve로 인자로 받은 값들을 하나의 문자열로 만든 뒤 정적 디렉토리에 대한 마운트 경로 지정
 * app.js 실행경로 + "/path"를 localhost:port/path로 마운트
 */
app.use('/src', express.static(path.resolve(__dirname, 'front', 'src')));
app.use('/img', express.static(path.resolve(__dirname, 'front', 'img')));

// main
app.get('/', (req, res) => {
  res.sendFile(path.resolve('front', 'main.html'));
});

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
