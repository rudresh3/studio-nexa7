import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    console.log('Received request body:', body);

    const { fullName, email, phone, description } = body;

    // Validate required fields
    if (!fullName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Store form submission in Supabase
    const { data, error: supabaseError } = await supabase
      .from('contact_submissions')
      .insert([
        {
          full_name: fullName,
          email,
          phone: phone || null,
          description: description || null,
          submitted_at: new Date().toISOString(),
        }
      ]);

    if (supabaseError) {
      console.error('Supabase error:', supabaseError);
      throw new Error('Failed to store submission');
    }

    console.log('Sending team email...');
    const teamData = await resend.emails.send({
      from: 'Studio Nexa <' + process.env.RESEND_FROM_EMAIL + '>',
      to: process.env.TEAM_EMAIL,
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Description:</strong> ${description}</p>
      `
    });
    console.log('Team email sent:', teamData);

    console.log('Sending user confirmation...');
    const userData = await resend.emails.send({
      from: 'Studio Nexa <' + process.env.RESEND_FROM_EMAIL + '>',
      to: email,
      subject: 'Thank you for reaching out!',
      html: `
        <h2>Thank you for contacting us, ${fullName}!</h2>
        <p>We have received your message and will get back to you soon.</p>
        <p>Best regards,<br/>Studio Nexa</p>
      `
    });
    console.log('User email sent:', userData);

    return NextResponse.json(
      { message: 'Submission stored and emails sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: error.message || 'Error processing submission' },
      { status: 500 }
    );
  }
} 