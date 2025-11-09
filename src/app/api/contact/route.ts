import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; background-color: #f6f9fc; padding: 40px;">
        <div style="max-width: 600px; background: #ffffff; margin: 0 auto; border-radius: 10px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <div style="background: #2563eb; color: white; padding: 20px; text-align: center;">
            <h2 style="margin: 0;">📩 Novo Contato do Site</h2>
          </div>
          <div style="padding: 30px;">
            <p style="font-size: 16px; color: #333;">Você recebeu uma nova mensagem do formulário de contato:</p>

            <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #555; width: 120px;">👤 Nome:</td>
                <td style="padding: 10px; color: #111;">${name}</td>
              </tr>
              <tr style="background-color: #f6f9fc;">
                <td style="padding: 10px; font-weight: bold; color: #555;">📧 E-mail:</td>
                <td style="padding: 10px; color: #111;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; color: #555;">📝 Assunto:</td>
                <td style="padding: 10px; color: #111;">${subject}</td>
              </tr>
              <tr style="background-color: #f6f9fc;">
                <td style="padding: 10px; font-weight: bold; color: #555;">💬 Mensagem:</td>
                <td style="padding: 10px; color: #111; white-space: pre-wrap;">${message}</td>
              </tr>
            </table>

            <p style="margin-top: 30px; font-size: 13px; color: #777;">
              Este e-mail foi enviado automaticamente pelo formulário do seu site.
            </p>
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`,
      to: "jose.vanderlei.nn@gmail.com",
      subject: `📬 Contato do Portifolio: ${subject}`,
      html: htmlContent,
      replyTo: email,
    });

    return NextResponse.json(
      { success: true, message: "E-mail enviado com sucesso!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return NextResponse.json(
      { success: false, message: "Erro ao enviar e-mail." },
      { status: 500 }
    );
  }
}
