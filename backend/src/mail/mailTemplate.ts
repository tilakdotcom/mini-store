export const VERIFICATION_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Email Verification</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        font-family: "Arial", sans-serif;
        background-color: #f2f2f2;
        color: #222;
        padding: 20px;
      }
      .email-container {
        max-width: 600px;
        background-color: #fff;
        margin: 20px auto;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        padding: 30px;
        text-align: center;
      }
      .greeting {
        font-size: 22px;
        font-weight: bold;
        margin-top: 20px;
      }
      .message {
        margin: 15px 0;
        font-size: 16px;
        line-height: 1.6;
        color: #333;
      }
      .verify-btn {
        display: inline-block;
        background-color: #000;
        color: #fff;
        text-decoration: none;
        padding: 12px 25px;
        font-size: 16px;
        border-radius: 5px;
        margin-top: 20px;
        transition: background-color 0.3s;
      }
      .verify-btn:hover {
        background-color: #444;
      }
      .footer {
        margin-top: 30px;
        font-size: 12px;
        color: #666;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <p class="greeting">Hello,{{username}}!</p>

      <p class="message">
        Welcome to our platform! Please verify your email to start exploring all
        the amazing features we have for you.
      </p>

      <a href="{{verification_link}}" class="verify-btn"> Verify Email Now </a>

      <p class="footer">
        If you didn’t request this, please ignore this email.
        <br />
        © {{year}} Your Company, All Rights Reserved.
      </p>
    </div>
  </body>
</html>
`;




export const PASSWORD_RESET_SUCCESS_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset Successful</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #222; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
  <div style="background: #000; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
    <h1 style="color: #fff; margin: 0;">Password Reset Successful</h1>
  </div>
  <div style="background-color: #fff; padding: 20px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
    <p style="font-size: 1.2em;">Hello, {{userName}}</p>
    <p style="font-size: 1em; margin: 10px 0;">Your password has been successfully reset.</p>
    <div style="text-align: center; margin: 30px 0;">
      <div style="background-color: #000; color: white; width: 60px; height: 60px; line-height: 60px; border-radius: 50%; display: inline-block; font-size: 30px;">
        ✓
      </div>
    </div>
    <p style="font-size: 1em; margin: 10px 0;">If this was not you, please contact our support team immediately.</p>
    <p style="font-size: 1em; margin: 10px 0;">For enhanced security, we recommend:</p>
    <ul style="font-size: 1em; margin: 10px 0; padding-left: 20px;">
      <li>Using a strong, unique password</li>
      <li>Avoiding reuse of passwords across multiple sites</li>
    </ul>
    <p style="font-size: 1em; margin: 20px 0;">Thank you for keeping your account secure.</p>
    <p style="font-size: 1em; margin: 20px 0;">Best regards,<br><strong>Your App Team</strong></p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #666; font-size: 0.8em;">
    <p>This is an automated message. Please do not reply.</p>
  </div>
</body>
</html>
`;



export const PASSWORD_RESET_REQUEST_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Reset Your Password</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #222; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
  <div style="background: #000; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
    <h1 style="color: #fff; margin: 0;">Password Reset</h1>
  </div>
  <div style="background-color: #fff; padding: 20px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
    <p style="font-size: 1.2em;">Hello,{{userName}}</p>
    <p style="font-size: 1em; margin: 10px 0;">We received a request to reset your password. If you didn't make this request, you can safely ignore this email.</p>
    <p style="font-size: 1em; margin: 10px 0;">To reset your password, click the button below:</p>
    <div style="text-align: center; margin: 30px 0;">
      <a href="{{resetURL}}" 
         style="background-color: #000; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 1em;">
         Reset Password
      </a>
    </div>
    <p style="font-size: 1em; margin: 10px 0;">This link will expire in 15 minutes for security reasons.</p>
    <p style="font-size: 1em; margin: 20px 0;">Best regards,<br><strong>Your App Team</strong></p>
  </div>
  <div style="text-align: center; margin-top: 20px; color: #666; font-size: 0.8em;">
    <p>This is an automated message, please do not reply.</p>
  </div>
</body>
</html>
`;



export const WELCOME_MESSAGE_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Shop Hub</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      color: #333;
      background-color: #f8f9fa;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #ffffff;
      border-radius: 12px;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
      overflow: hidden;
    }
    .header {
      background: linear-gradient(to right, #0c0f3d, #1c041d);
      color: white;
      text-align: center;
      padding: 25px;
    }
    .header h1 {
      margin: 0;
      font-size: 2em;
      font-weight: bold;
    }
    .content {
      padding: 25px;
      text-align: center;
    }
    .content p {
      font-size: 1.2em;
      margin: 15px 0;
      color: #555;
    }
    .cta-button {
      display: inline-block;
      padding: 12px 25px;
      font-size: 1em;
      color: white;
      background: #090321;
      border-radius: 8px;
      text-decoration: none;
      font-weight: bold;
      transition: background 0.3s;
    }
    .cta-button:hover {
      background: #120705;
    }
    .footer {
      text-align: center;
      padding: 15px;
      font-size: 0.9em;
      color: #777;
      border-top: 1px solid #eee;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Welcome to Shop Hub, {{userName}}!</h1>
    </div>
    <div class="content">
      <p>We're excited to have you onboard. Discover amazing products, exclusive deals, and a seamless shopping experience!</p>
      <p>Start exploring now and enjoy your shopping journey.</p>
      <a href="{{shopLink}}" class="cta-button">Start Shopping</a>
    </div>
    <div class="footer">
      <p>Happy Shopping!<br>The Shop Hub Team</p>
    </div>
  </div>
</body>
</html>`;