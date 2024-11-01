// src/pages/api/sendEmail.ts
import brevo from "@getbrevo/brevo";

export async function POST({ request }: { request: Request }) {
  const { name, email, message } = await request.json();
  const apiInstance = new brevo.TransactionalEmailsApi();
  apiInstance.setApiKey(
    brevo.TransactionalEmailsApiApiKeys.apiKey,
    import.meta.env.BREVO_API_KEY
  );

  const sendSmtpEmail = new brevo.SendSmtpEmail();
  sendSmtpEmail.subject = `Te ha ${name} escrito desde tu portfolio web`;
  sendSmtpEmail.to = [
    { email: "arianoalban2004@gmail.com", name: "Ariano Alban" },
  ];
  sendSmtpEmail.htmlContent = `<html><body><h1 style="color: #4A90E2; font-size: 24px;">Correo enviado por ${name}</h1><p style="font-size: 16px; color: #333;">Email: ${email}</p><p style="font-size: 20px; background-color: #f4f4f4; padding: 10px; border-radius: 5px;">Mensaje: ${message}</p></body></html>`;
  sendSmtpEmail.sender = { email: "arianoalban2004@gmail.com", name };

  try {
    const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
    return new Response(
      JSON.stringify({ message: "Email successfully sent", result, status: 200 }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error sending mail", error);
    return new Response(
      JSON.stringify({ message: "Error sending mail", error, status: 500 }),
      {
        status: 500,
      }
    );
  }
}
