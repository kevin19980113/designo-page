import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { OctagonAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import { ContactSchemaType, contactSchema } from "@/lib/schema";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactSchemaType>({
    resolver: zodResolver(contactSchema),
  });

  const errorMessageStyle =
    "text-red-600 pl-2 text-sm flex gap-x-1 items-center pointer-events-none";

  return (
    <form
      onSubmit={handleSubmit(() => console.log("submit!"))}
      className="w-full z-10 grid grid-cols-1 gap-y-8 px-4 md:px-12"
    >
      <div className="flex flex-col gap-y-2">
        <Input
          {...register("name")}
          placeholder="Name"
          disabled={isSubmitting}
          className={cn({
            "border-red-600": errors.name,
          })}
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
          className={cn({
            "border-red-600": errors.email,
          })}
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
          className={cn({
            "border-red-600": errors.phoneNumber,
          })}
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
          className={cn({
            "border-red-600": errors.contactMessage,
          })}
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
        className="w-40 py-6 px-20 tracking-wider ml-auto mr-auto md:ml-auto md:mr-0"
      >
        SUBMIT
      </Button>
    </form>
  );
}
