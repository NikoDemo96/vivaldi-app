import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

export async function sendEmailForm(formOrEvent) {
  return emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formOrEvent, {
    publicKey: PUBLIC_KEY,
  });
}

export default emailjs;
