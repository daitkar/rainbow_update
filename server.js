/**
 * Created by M053 on 28-11-2016.
 */
var express=require('express');
var app=express();
var jwt =require('express-jwt');
var cors=require('cors');
app.use(cors());
var authCheck=jwt({
    secret:new Buffer('m_q00JHzOBVED7bxJbXuahmYmyCoQO8exFP-5jcGCF2W8yhpBTLfSpa36egCJwhd','base64'),
    audience:'DpVaPQsnC6DoVnZBV9BaFgeMOFrvpFhe'

});
app.get('/api/public',function(req,res){
    res.json({message:"this is public repository"})
});

app.get('/api/private',authCheck,function(req,res){
    res.json({message:"this is private repository"})
});
app.listen(3005);
console.log("listen on port http://localhost:3005");