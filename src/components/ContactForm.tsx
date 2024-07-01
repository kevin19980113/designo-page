"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Loader, OctagonAlert, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { ContactSchemaType, contactSchema } from "@/lib/schema";
import { useContact } from "@/hooks/use-contact";
import { sendEmail } from "@/lib/actions";
import { FaPaperPlane } from "react-icons/fa";
import { toast } from "sonner";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<ContactSchemaType>({
    resolver: zodResolver(contactSchema),
  });
  const { name, description, setName, setDescription } = useContact();

  const previewContactMessage =
    name && description
      ? `Hello, How's it going today? I'm quite interested in this project.\n\n[${name}] : ${description}\n\nso I'd love to hear more about it. please send me a email when you are available. I can't wait to collaborate with your team. \nThank you!`
      : "";

  setValue("contactMessage", previewContactMessage);

  const errorMessageStyle =
    "text-red-600 pl-2 text-sm flex gap-x-1 items-center pointer-events-none";

  const handleUppercaseChange =
    (field: keyof ContactSchemaType) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(field, e.target.value.toUpperCase());
      trigger(field);
    };

  const onSubmit = async (contactData: ContactSchemaType) => {
    const { validatingErrorMessages, sendingErrorMessage } = await sendEmail(
      contactData
    );
    if (validatingErrorMessages) {
      //
      return;
    }
    if (sendingErrorMessage) {
      toast.error("Something went wrong, Failed to send the email.");
      return;
    }

    toast.success("Email has been sent successfully");

    setName("");
    setDescription("");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full z-10 grid grid-cols-1 gap-y-8 px-4 md:px-12"
    >
      <div className="flex flex-col gap-y-2">
        <Input
          {...register("name")}
          placeholder="Name"
          disabled={isSubmitting}
          className={cn(
            {
              "border-red-600": errors.name,
            },
            "xl:text-lg"
          )}
          onChange={handleUppercaseChange("name")}
        />
        {errors.name && (
          <div className={errorMessageStyle}>
            {errors.name.message}
            <OctagonAlert className="size-4" />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-y-2">
        <Input
          {...register("email")}
          placeholder="Email Address"
          disabled={isSubmitting}
          className={cn(
            {
              "border-red-600": errors.email,
            },
            "xl:text-lg"
          )}
        />
        {errors.email && (
          <div className={errorMessageStyle}>
            {errors.email.message}
            <OctagonAlert className="size-4" />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-y-2">
        <Input
          {...register("phoneNumber")}
          placeholder="Phone Number"
          disabled={isSubmitting}
          className={cn(
            {
              "border-red-600": errors.phoneNumber,
            },
            "xl:text-lg"
          )}
        />
        {errors.phoneNumber && (
          <div className={errorMessageStyle}>
            {errors.phoneNumber.message}
            <OctagonAlert className="size-4" />
          </div>
        )}
      </div>

      <div className="flex flex-col gap-y-2">
        <Textarea
          {...register("contactMessage")}
          placeholder="Your Message"
          disabled={isSubmitting}
          className={cn(
            {
              "border-red-600": errors.contactMessage,
            },
            "xl:text-lg"
          )}
        />
        {errors.contactMessage && (
          <div className={errorMessageStyle}>
            {errors.contactMessage.message}
            <OctagonAlert className="size-4" />
          </div>
        )}
      </div>

      <Button
        type="submit"
        className="group py-6 px-10 md:px-20 tracking-wider ml-auto mr-auto md:ml-auto md:mr-0 flex items-center justify-center gap-x-2"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <Loader className="animate-spin text-sm" />
        ) : (
          <>
            SUBMIT
            <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
          </>
        )}
      </Button>
    </form>
  );
}
