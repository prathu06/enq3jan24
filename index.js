const express=require("express");
const cors=require("cors");
const nodemailer=require("nodemailer");

const app=express();
app.use(cors());
app.use(express.json());

app.post("/save",(req,res)=>{
let data=[req.body.name,req.body.phone,req.body.query];
let name=req.body.name;
let txt="name= "+name+" phone= "+req.body.phone+" query= "+req.body.query;
let transporter=nodemailer.createTransport({
service:"gmail",
auth:{
user:"prathameshyadav334@gmail.com",
pass:"ijtbiiaqpmzinbsi"
}
})
let mailOptions={
from :"prathameshyadav334@gmail.com",
to :"prathameshyadav@ternaengg.ac.in",
subject:"Enquiry from "+name,
text:txt
}

transporter.sendMail(mailOptions,(err,info)=>{
if(err){
console.log("mail err "+err);
res.status(500).json(err);
}
else{
console.log("mail sent "+info.response);
res.status(200).json("mail send");
}
})
});
app.listen(9000,()=>{console.log("Ready @9000");});




















