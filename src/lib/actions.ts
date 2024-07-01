"use server";

import { Resend } from "resend";
import { ContactSchemaType, contactSchema } from "./schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (contactData: ContactSchemaType) => {
  const parsedContactData = contactSchema.safeParse(contactData);

  if (!parsedContactData.success) {
    return {
      validatingErrorMessages: parsedContactData.error.flatten().fieldErrors,
    };
  }

  const { name, email, phoneNumber, contactMessage } = parsedContactData.data;

  const { data, error } = await resend.emails.send({
    from: "Designo <onboarding@resend.dev>",
    to: email,
    subject: `Message from ${email}`,
    reply_to: email,
    text: `${contactMessage}\n\nName: ${name}\nPhoneNumber: ${phoneNumber}`,
  });

  //in order to check email, put sender email to "To"

  if (error) {
    return {
      sendingErrorMessage: error.message,
    };
  }

  return {
    data,
  };
};
