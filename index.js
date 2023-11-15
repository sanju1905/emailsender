const nodemailer = require("nodemailer");

let mailtransport = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: "ethan57@ethereal.email",
    pass: "B4eXmXcwf3RxSAJqX7", // Replace with your actual Gmail password
  },
});

let details = {
  from: "ethan57@ethereal.email",
  to: "ethan57@ethereal.email",
  subject: "Testing the Application",
  text: "Hello, I am testing the Application",
};

mailtransport.sendMail(details, (err) => {
  if (err) {
    console.log("Error occurred", err);
  } else {
    console.log("Email sent successfully");
  }
});
