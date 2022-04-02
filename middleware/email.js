import nodemailer from 'nodemailer';


export function sendmail(to_email, body, subject){

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'dasithasample@gmail.com',
          pass: 'tstyrujkbrdoghoo'
        }
      });
      
      var mailOptions = {
        from: 'dasithasample@gmail.com',
        to: to_email,
        subject: subject,
        html:`${body}`
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          res.send(error);
        } else {
          res.send('Email sent: ' + info.response);
        }
      });

}