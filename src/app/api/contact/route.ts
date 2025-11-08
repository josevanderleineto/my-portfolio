import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validação dos campos obrigatórios
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, message: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    // Validação do formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Formato de e-mail inválido' },
        { status: 400 }
      );
    }

    // AJUSTADO: transport para porta 587 e secure false
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USERNAME,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USERNAME,
      to: 'jose.vanderlei.nn@gmail.com',
      subject: `Contato do Site: ${subject}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 20px; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; text-align: center;">Nova Mensagem do Site</h1>
          </div>
          <div style="background: #f8f9fa; padding: 30px; border-radius: 0 0 10px 10px;">
            <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h2 style="color: #2563eb; margin-top: 0; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Informações do Contato</h2>
              <p><strong>Nome:</strong> ${name}</p>
              <p><strong>E-mail:</strong> ${email}</p>
              <p><strong>Assunto:</strong> ${subject}</p>
            </div>
            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <h3 style="color: #2563eb; margin-top: 0;">Mensagem:</h3>
              <div style="background: #f1f5f9; padding: 15px; border-left: 4px solid #2563eb; border-radius: 4px;">
                <p style="margin: 0; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center; color: #6b7280; font-size: 14px;">
              <p>Esta mensagem foi enviada através do formulário de contato do site <strong>vanderleineto.tech</strong></p>
              <p>Data: ${new Date().toLocaleString('pt-BR')}</p>
            </div>
          </div>
        </div>
      `,
      text: `
        Nova mensagem do site vanderleineto.tech

        Nome: ${name}
        E-mail: ${email}
        Assunto: ${subject}

        Mensagem:
        ${message}

        ---
        Esta mensagem foi enviada através do formulário de contato do site.
        Data: ${new Date().toLocaleString('pt-BR')}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'E-mail enviado com sucesso!' },
      { status: 200 }
    );
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Erro ao enviar e-mail:", error.message);
      console.error("Stack trace:", error.stack);
    } else {
      console.error("Erro desconhecido:", error);
    }
    console.error("Variáveis de ambiente usadas:", {
      GMAIL_USERNAME: process.env.GMAIL_USERNAME ? "***" : "UNDEFINED",
      GMAIL_PASSWORD: process.env.GMAIL_PASSWORD ? "***" : "UNDEFINED",
    });

    return NextResponse.json(
      { success: false, message: "Erro interno do servidor. Tente novamente mais tarde." },
      { status: 500 }
    );
  }
}
