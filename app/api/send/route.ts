import { NextResponse } from 'next/server';
import { EmailTemplate } from '../../../components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { email, name, message } = body;
    const data = await resend.emails.send({
      from: 'Lukasz <contact@lukasz-gorka.com>',
      to: email,
      subject: 'Hello world',
      
      react: EmailTemplate({ firstName: name }),
    });

    // if(data.status === 'succcess') {
    //     return NextResponse.json({ message: 'Successfull'})
    // }

    return NextResponse.json(data);
  } catch (error) {
    console.log('error', error);
  }
}