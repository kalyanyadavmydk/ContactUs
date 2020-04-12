const express=require('express')
const cors=require('cors')
const bodyparser=require('body-parser')
const app=express()
const nodemailer=require('nodemailer')

app.use(cors())
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())

app.listen(3000,()=>{
    console.log("server stared successfully")
})


app.post('/contactus',(req,res,next)=>{
    console.log(req.body)
    var problem=req.body.firstname+req.body.lastname+"\n"+"user mailId: \n"+req.body.email+"\n"+"query:"+"\n"+req.body.comment
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            //enter your mail
          user: 'kingkalyanyadav@gmail.com',//add admin email
          //enter your pass
          pass: ''//add password
        }
      });
      
      var mailOptions = {
        from: "kingkalyanyadav@gmail.com",//add admin email
        to: req.body.email,//add user email
        subject: 'No Reply',
        text: 'Your Complaint has been noted,and we are very sorry for the inconvience and we are going to solve your problem as soon as possible'
      };
      var admin={
        from: "kingkalyanyadav@gmail.com",//add admin email
        to: "kalyanyadav4321@gmail.com",//add complaint solver email
        subject: 'complaint from user',
        text: problem
     
      }
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
        //res.send({status:"ok"})
      });
      transporter.sendMail(admin, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
        //res.send({status:"ok"})
      });
 console.log(problem)
res.send({status:"successfully Registered"})
})