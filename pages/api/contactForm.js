require("dotenv").config();
import nodemailer from "nodemailer";
const { google } = require("googleapis");

export default function handler(req, res) {
  const CLIENT_ID = "873458271119-u1e6ugs99l5v3l3bqaf6la1jnas9hs56.apps.googleusercontent.com";
  const CLEINT_SECRET = "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"
  const REDIRECT_URI ="https://developers.google.com/oauthplayground"
  const REFRESH_TOKEN = "1//046OVTUBXbhCbCgYIARAAGAQSNgF-L9Ir0P2i4dhrb3agCqawmrpt4s_ZYC_rRHg5QV34UCJSMwv6Mw-i_pZW2BElxfdoyEhPNg"

  let oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLEINT_SECRET,
    REDIRECT_URI
  );
  oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });
  // res.status(200).json({ name: 'John Doe' })
  const { name, email, message } = req.body;
  console.log(name,email,message)

  async function sendMail() {
    try {
      const accessToken = await oAuth2Client.getAccessToken();
      const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: process.env.MAIL,
          clientId: CLIENT_ID,
          clientSecret: CLEINT_SECRET,
          refreshToken: REFRESH_TOKEN,
          accessToken: accessToken,
        },
      });

      const mailOptions = {
        from: process.env.MAIL,
        to: process.env.TOEMAIL,
        subject: `Hello  from  ${name}✔`, // Subject line
        text: `Hello from ${name}`,
        html: `<p>New Message From ${name} <p>
         <p>Contact Email ${email}  </p>
         <p>Message : ${message}</p>`, // html body`, // plain text body
      };

      const result = await transport.sendMail(mailOptions);
      return result;
    } catch (error) {
      return error;
    }
  }

  sendMail()
    .then((result) => console.log("Email sent...", result))
    .then(() => res.status(200).json({ name: "John Doe" }))
    .catch((error) => console.log(error.message));
}
