import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()

     console.log("EMAIL USER:", process.env.EMAIL_USER)
    console.log("EMAIL PASS:", process.env.EMAIL_PASS)

   const { name, email, phone, subject, message } = body

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
       
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      

      subject: "Techswole Form Submission",

      html: `
        <h2>New Inquiry Received</h2>

         <p>Name: ${name}</p>
  <p>Email: ${email}</p>
  <p>Phone: ${phone}</p>
  <p>Subject: ${subject}</p>
  <p>Message: ${message}</p>
      `,
    })

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    })
  } catch (error) {
    console.log(error)

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 }
    )
  }
}