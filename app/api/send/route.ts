import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, name, message } = body;
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@lukasz-gorka.com>',
      to: email,
      subject: "Hello world",
      react: EmailTemplate({ firstName: name }),
    });

    if (error) {
      return NextResponse.json({ error });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}