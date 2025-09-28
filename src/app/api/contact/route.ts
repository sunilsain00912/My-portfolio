import {NextRequest, NextResponse} from 'next/server';
import nodemailer from 'nodemailer';
import {z} from 'zod';

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {name, email, message} = contactFormSchema.parse(body);

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      secure: process.env.EMAIL_SERVER_PORT === '465',
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New message from ${name} via your portfolio`,
      html: `
      <div style="background-color: #f0f2f5; font-family: 'Syne', Arial, sans-serif; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);">
          <div style="background-color: #111827; color: #ffffff; padding: 24px; text-align: center;">
            <h1 style="margin: 0; font-size: 28px; font-weight: 700; letter-spacing: -1px;">New Portfolio Inquiry</h1>
          </div>
          <div style="padding: 24px 32px;">
            <p style="font-size: 16px; color: #4b5563; margin-bottom: 24px;">You have a new message from your website contact form. Here are the details:</p>
            
            <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 20px; background-color: #fafafa;">
              <div style="margin-bottom: 16px;">
                <p style="font-size: 14px; color: #6b7280; margin: 0 0 4px 0; text-transform: uppercase; letter-spacing: 0.5px;">From:</p>
                <p style="font-size: 18px; font-weight: 600; color: #1f2937; margin: 0;">${name}</p>
              </div>
              <div>
                <p style="font-size: 14px; color: #6b7280; margin: 0 0 4px 0; text-transform: uppercase; letter-spacing: 0.5px;">Email:</p>
                <a href="mailto:${email}" style="font-size: 18px; font-weight: 600; color: #3b82f6; text-decoration: none;">${email}</a>
              </div>
            </div>

            <div style="margin-top: 28px;">
              <h3 style="font-size: 20px; font-weight: 600; color: #1f2937; border-bottom: 2px solid #f3f4f6; padding-bottom: 12px; margin-bottom: 16px;">Message</h3>
              <p style="font-size: 16px; color: #4b5563; line-height: 1.7; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
          <div style="background-color: #f9fafb; padding: 20px 32px; text-align: center; border-top: 1px solid #f3f4f6;">
            <p style="font-size: 12px; color: #9ca3af; margin: 0;">This email was sent automatically from your portfolio website.</p>
          </div>
        </div>
      </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({message: 'Email sent successfully'});
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({error: error.issues}, {status: 400});
    }
    console.error('[CONTACT_FORM_ERROR]', error);
    return NextResponse.json(
      {error: 'Internal Server Error'},
      {status: 500}
    );
  }
}
