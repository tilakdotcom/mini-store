import ApiError from "../common/api/apiError";
import { INTERNAL_SERVER_ERROR } from "../constants/httpCode";
import { mailSender, mailTransport } from "./mailConfig";
import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
  WELCOME_MESSAGE_TEMPLATE,
} from "./mailTemplate";

export const sendVerificationEmail = async (email: string, url: string) => {
  const recipients = [email];
  try {
    await mailTransport.sendMail({
      from: mailSender,
      to: recipients,
      subject: "Verify Your Account!",
      html: VERIFICATION_EMAIL_TEMPLATE.replace("{{useName}}", email)
        .replace("{{verification_link}}", url)
        .replace("{{year}}", "2025"),
      category: "Email Verification",
    });
  } catch (error: any) {
    console.error(
      `Error sending verification email to ${email}: ${error.message}`
    );
    throw new ApiError(INTERNAL_SERVER_ERROR, `Error in sending verification`);
  }
};

export const sendWelcomeEmail = async (name: string, email: string) => {
  const recipients = [email];
  try {
    await mailTransport.sendMail({
      from: mailSender,
      to: recipients,
      subject: "Welcome To MERN!",
      html: WELCOME_MESSAGE_TEMPLATE.replace("{{useName}}", name),
      category: "Welcome",
    });
  } catch (error: any) {
    console.error(`Error in Welcome email to ${email}: ${error.message}`);
    throw new ApiError(INTERNAL_SERVER_ERROR, `Error in Welcome email`);
  }
};

export const sendForgotPasswordEmail = async (email: string, url: string) => {
  const recipients = [email];
  try {
    await mailTransport.sendMail({
      from: mailSender,
      to: recipients,
      subject: "Reset Password Link",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", url),
      category: "Forgot Password",
    });
  } catch (error: any) {
    console.error(
      `Error in Reset Password email to ${email}: ${error.message}`
    );
    throw new ApiError(500, `Error in Reset Password email`);
  }
};
