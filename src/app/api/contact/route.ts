import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    console.log('GMAIL_USER:', process.env.GMAIL_USER);
    console.log('GMAIL_PASS:', process.env.GMAIL_PASS);

    const {
      name,
      email,
      phone,
      address,
      message,
      landscapeNeeds,
      concerns,
      propertySize,
    } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const emailContent = `
      <h3>Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Address:</strong> ${address}</p>
      <p><strong>Message:</strong> ${message}</p>
      <p><strong>Landscape Needs:</strong> ${landscapeNeeds.join(', ')}</p>
      <p><strong>Concerns:</strong> ${concerns.join(', ')}</p>
      <p><strong>Property Size:</strong> ${propertySize}</p>
    `;

    await transporter.sendMail({
      from: email,
      to: 'westwavewebworks@gmail.com',
      subject: 'New Contact Form Submission',
      html: emailContent,
    });

    return new Response(
      JSON.stringify({ message: 'Success! Your message has been sent.' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error occurred while sending the email:', error);
    return new Response(
      JSON.stringify({ message: 'Failed to send the message.' }),
      { status: 500 }
    );
  }
}
