const http=require("http");
const app = http.createServer((req,res)=>{
    res.writeHead(200, {"Content-type":"text/html; charset=utf-8"});
    if (req.url === "/login"){
        res.end("여기는 로그인 화면입니다.")
    }
});




app.listen(3001, ()=>{
    console.log("http로 가동된 서버입니다.");
});