import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // 1. Spam honeypot validation
    if (data.website) {
      return NextResponse.json({ success: true, spamBlocked: true });
    }

    // 2. Server-side required validation: Student name, Age, Phone, Kathak experience, Preferred batch
    if (
      !data.student_name ||
      !data.age ||
      !data.phone ||
      !data.experience_level ||
      !data.preferred_batch
    ) {
      return NextResponse.json(
        { success: false, error: 'Please provide all required admission fields.' },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.NOTIFICATION_EMAIL || 'nrityavritt@gmail.com';
    const smtpUser = process.env.SMTP_USER || 'nrityavritt@gmail.com';
    const smtpPass = process.env.SMTP_PASS || '';

    // 3. Indian Classical formatted HTML email template
    const htmlBody = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 650px; margin: 20px auto; border: 1px solid #e0c897; border-radius: 12px; overflow: hidden; background-color: #fdfbf7; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
        
        <!-- Header Banner -->
        <div style="background: linear-gradient(135deg, #560e22 0%, #881337 50%, #9f1239 100%); padding: 30px 25px; text-align: center; border-bottom: 3px solid #d4af37;">
          <h1 style="color: #fde047; margin: 0; font-size: 24px; font-family: Georgia, serif; letter-spacing: 1px;">
            ✨ नृत्यवृत्त • NRITYAVRITT
          </h1>
          <p style="color: #fce7eb; margin: 6px 0 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 2px;">
            Academy of Classical Kathak Dance
          </p>
          <div style="display: inline-block; background-color: rgba(253, 224, 71, 0.2); border: 1px solid #d4af37; border-radius: 20px; padding: 4px 14px; margin-top: 12px; color: #fff; font-size: 12px; font-weight: bold;">
            New Student Admission Enquiry
          </div>
        </div>

        <!-- Body Content -->
        <div style="padding: 30px 25px; color: #2d1810;">
          <p style="font-size: 15px; line-height: 1.6; margin-top: 0;">
            Dear <strong>Nrityavritt Admissions Team</strong>,
          </p>
          <p style="font-size: 14px; line-height: 1.6; color: #5a382c;">
            A prospective student has submitted an admission registration via the academy website:
          </p>

          <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 14px; border: 1px solid #ebd9b5; border-radius: 8px; overflow: hidden;">
            <tr style="background-color: #f8f1e4;">
              <td style="padding: 12px 14px; border: 1px solid #ebd9b5; font-weight: bold; width: 38%; color: #560e22;">Student Name</td>
              <td style="padding: 12px 14px; border: 1px solid #ebd9b5; font-weight: 600; color: #1c1917;">${data.student_name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 14px; border: 1px solid #ebd9b5; font-weight: bold; color: #560e22;">Guardian Name</td>
              <td style="padding: 12px 14px; border: 1px solid #ebd9b5; color: #1c1917;">${data.guardian_name || 'N/A (Self / Adult)'}</td>
            </tr>
            <tr style="background-color: #f8f1e4;">
              <td style="padding: 12px 14px; border: 1px solid #ebd9b5; font-weight: bold; color: #560e22;">Age</td>
              <td style="padding: 12px 14px; border: 1px solid #ebd9b5; color: #1c1917;">${data.age} years</td>
            </tr>
            <tr>
              <td style="padding: 12px 14px; border: 1px solid #ebd9b5; font-weight: bold; color: #560e22;">Phone Number</td>
              <td style="padding: 12px 14px; border: 1px solid #ebd9b5; font-weight: bold;">
                <a href="tel:${data.phone}" style="color: #881337; text-decoration: none;">📞 ${data.phone}</a>
              </td>
            </tr>
            <tr style="background-color: #f8f1e4;">
              <td style="padding: 12px 14px; border: 1px solid #ebd9b5; font-weight: bold; color: #560e22;">Kathak Experience</td>
              <td style="padding: 12px 14px; border: 1px solid #ebd9b5; color: #1c1917;">${data.experience_level}</td>
            </tr>
            <tr>
              <td style="padding: 12px 14px; border: 1px solid #ebd9b5; font-weight: bold; color: #560e22;">Preferred Batch</td>
              <td style="padding: 12px 14px; border: 1px solid #ebd9b5; font-weight: 600; color: #881337;">${data.preferred_batch}</td>
            </tr>
          </table>

          <div style="margin-top: 25px; padding: 15px; background-color: #fff9ed; border-left: 4px solid #d4af37; border-radius: 4px; font-size: 13px; color: #78350f;">
            <strong>Quick Action:</strong> Please contact the student at <a href="tel:${data.phone}" style="color: #881337; font-weight: bold;">${data.phone}</a> to schedule their orientation or trial session.
          </div>
        </div>

        <!-- Footer -->
        <div style="background-color: #2a0b12; padding: 18px 25px; text-align: center; color: #e5d5be; font-size: 12px;">
          <p style="margin: 0;">Nrityavritt Kathak Academy • South Ganesh Nagar, Delhi - 110092</p>
        </div>
      </div>
    `;

    // If SMTP credentials are configured, send real email via nodemailer; otherwise dispatch to FormSubmit
    if (smtpPass) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"Nrityavritt Website" <${smtpUser}>`,
        to: recipientEmail,
        replyTo: recipientEmail,
        subject: `🩰 New Admission Registration: ${data.student_name} (${data.preferred_batch})`,
        html: htmlBody,
      });
    } else {
      // Dispatched to FormSubmit ensuring nrityavritt@gmail.com receives the email even without custom SMTP config
      try {
        await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
          },
          body: JSON.stringify({
            _subject: `🩰 New Admission Registration: ${data.student_name} (${data.preferred_batch})`,
            _template: 'table',
            'Student Name': data.student_name,
            'Guardian Name': data.guardian_name || 'N/A',
            'Age': data.age,
            'Phone Number': data.phone,
            'Kathak Experience': data.experience_level,
            'Preferred Batch': data.preferred_batch,
          }),
        });
      } catch (fsErr) {
        console.error('FormSubmit dispatch fallback error:', fsErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Admission registration successfully received.',
    });
  } catch (error: any) {
    console.error('Admission submission error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal system error processing enquiry.' },
      { status: 500 }
    );
  }
}
