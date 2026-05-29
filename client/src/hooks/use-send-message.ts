import { useState } from "react";

interface ContactData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export function useSendMessage() {
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendMessage = async (data: ContactData) => {
    setIsPending(true);
    setIsError(false);
    try {
      const body = new URLSearchParams({ "form-name": "contact", ...data });
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });
      if (!res.ok) throw new Error("Submission failed");
      setIsSuccess(true);
    } catch (err) {
      setIsError(true);
      throw err;
    } finally {
      setIsPending(false);
    }
  };

  return { sendMessage, isPending, isSuccess, isError, error: isError ? new Error("Failed to send") : null };
}
