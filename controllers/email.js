import {sendmail} from '../middleware/email.js';



export const email = async (req, res) => {

  const { to_email, body, subject } = req.body;
  console.log(to_email, body, subject);
    try{
      sendmail(to_email, body, subject);
      res.status(500).json({ message: "Email sent" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Something went wrong" });
  }
}
