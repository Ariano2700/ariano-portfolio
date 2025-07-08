// src/pages/api/sendEmail.ts
export const prerender = false;
import brevo from "@getbrevo/brevo";

export async function POST({ request }: { request: Request }) {
  try {
    const { name, email, message } = await request.json();
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({
          message: "Name, email, and message are required",
          status: 400,
        }),
        { status: 400 }
      );
    }
    const apiInstance = new brevo.TransactionalEmailsApi();
    apiInstance.setApiKey(
      brevo.TransactionalEmailsApiApiKeys.apiKey,
      import.meta.env.BREVO_API_KEY
    );

    const sendSmtpEmail = new brevo.SendSmtpEmail();
    sendSmtpEmail.subject = `${name} te ha escrito desde tu portfolio web`;
    sendSmtpEmail.to = [
      { email: "arianoalban2004@gmail.com", name: "Ariano Alban" },
    ];
    sendSmtpEmail.htmlContent = `
    <html>
      <body style="font-family: Arial, sans-serif; background: #f9f9f9; padding: 0; margin: 0;">
        <table width="100%" cellpadding="0" cellspacing="0" style="background: #f9f9f9; padding: 40px 0;">
          <tr>
            <td align="center">
              <table width="600" cellpadding="0" cellspacing="0" style="background: #fff; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.07); padding: 32px;">
                <tr>
                  <td align="center" style="padding-bottom: 24px;">
                    <h1 style="color: #4A90E2; font-size: 28px; margin: 0 0 8px 0;">¡Nuevo mensaje desde tu portfolio!</h1>
                    <p style="font-size: 18px; color: #222; margin: 0;">Has recibido un correo de <b>${name}</b></p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom: 16px;">
                    <div style="background: #f4f4f4; border-radius: 6px; padding: 18px 20px;">
                      <p style="font-size: 16px; color: #333; margin: 0 0 8px 0;"><b>Email:</b> ${email}</p>
                      <p style="font-size: 17px; color: #444; margin: 0;"><b>Mensaje:</b></p>
                      <div style="font-size: 18px; color: #222; background: #eaf6ff; border-radius: 5px; padding: 14px 16px; margin-top: 6px;">${message}</div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding-top: 18px;">
                    <p style="font-size: 14px; color: #888;">Este mensaje fue enviado desde el formulario de contacto de tu portfolio web.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
    sendSmtpEmail.sender = { email: "arianoalban2004@gmail.com", name };

    const result = await apiInstance.sendTransacEmail(sendSmtpEmail);
    return new Response(
      JSON.stringify({
        message: "Email successfully sent",
        result,
        status: 200,
      }),
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
