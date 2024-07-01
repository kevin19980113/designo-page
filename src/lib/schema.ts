import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(1, {
    message: "Can't be empty",
  }),
  email: z
    .string()
    .min(1, {
      message: "Can't be empty",
    })
    .email({
      message: "Please enter a valid email address",
    }),
  phoneNumber: z
    .string()
    .min(1, {
      message: "Can't be empty",
    })
    .regex(/^(?:\+\d{1,3})?\s?\(?\d{3}\)?[-\s]?\d{3}[-\s]?\d{4}$/, {
      message: "Please enter a valid phone number",
    }),
  contactMessage: z
    .string()
    .min(1, {
      message: "Can't be empty",
    })
    .max(500, {
      message: "The maximum length of your message is 500 characters",
    }),
});

export type ContactSchemaType = z.infer<typeof contactSchema>;
