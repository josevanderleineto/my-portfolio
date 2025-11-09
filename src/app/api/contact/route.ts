import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: "Preencha todos os campos." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 💎 HTML estilizado
    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; background-color: #f8f9fa; padding: 30px;">
        <div style="max-width: 600px; background-color: #ffffff; margin: 0 auto; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          
          <div style="background: linear-gradient(135deg, #007BFF, #00C6FF); padding: 20px; text-align: center; color: #fff;">
            <h2 style="margin: 0;">📩 Nova mensagem do site</h2>
          </div>

          <div style="padding: 20px;">
            <p><strong>Nome:</strong> ${name}</p>
            <p><strong>E-mail:</strong> ${email}</p>
            <p><strong>Assunto:</strong> ${subject}</p>
            <div style="margin-top: 20px; padding: 15px; background-color: #f1f3f5; border-left: 4px solid #007BFF;">
              <p style="margin: 0; white-space: pre-line;"><strong>Mensagem:</strong><br>${message}</p>
            </div>
          </div>

          <div style="background-color: #f8f9fa; padding: 15px; text-align: center; color: #777; font-size: 13px;">
            <p>Enviado automaticamente via formulário do Portfólio</p>
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Formulário do Site" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📬 Novo contato: ${subject}`,
      html: htmlTemplate,
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
