export default function SubmitForm(req, res) {
  require("dotenv").config();
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "jugrafiya9@gmail.com",
      pass: process.env.NEXT_PUBLIC_MAILPASS,
    },
    secure: true,
  });
  // const mailData = {
  //   from: "jugrafiya9@gmail.com ",
  //   to: "muhammadarifnust99@gmail.com",
  //   // to: "muhammad.tayyab@jugrafiya.com",
  //   subject: `Message From ${req.body.name}`,
  //   text: req.body.message + " | Sent from: " + req.body.email,
  //   html: `<div>${
  //     (req.body.message, req.body.phone, req.body.company)
  //   }</div><p>Sent from:
  //     ${req.body.email}</p>`,
  // };
  const mailData = {
    from: "jugrafiya9@gmail.com",
    // to: "muhammadarifnust99@gmail.com",
    to: "muhammad.tayyab@jugrafiya.com",
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}<p>Phone: ${req.body.phone}</p><p>Company: ${req.body.company}</p></div><p>Sent from: ${req.body.email}</p>`,
  };
  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log(err);
      res.status(500).send("Error sending email");
    } else {
      console.log(info);
      res.status(200).send("Email sent successfully");
    }
  });
}
