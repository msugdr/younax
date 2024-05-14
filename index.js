import express from 'express';
const app = express();
app.get('/', (req, res) => { 
  const name = req.query.name || 'no input';
  var sz=`<html>
<style>
body {background-color:pink;}
</style>
  <body><h1>I am Youna. </h1>
 <img src="https://chodoin.deci.jp/pic/girl1.png"><br>
  Hello World!<br>
  ${name}</body>
  </html>`;

  res.send(sz);
});
const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});