import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const formData = await req.formData()

    const firstName = formData.get("firstName") as string
    const surname = formData.get("surname") as string
    const email = formData.get("email") as string
    const mobile = formData.get("mobile") as string
    const comment = formData.get("comment") as string
    const jobTitle = formData.get("jobTitle") as string

    const file = formData.get("resume") as File

    if (!file) {
      return NextResponse.json(
        { success: false, message: "Resume is required" },
        { status: 400 }
      )
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // mail comes to you

      subject: `New Career Application - ${jobTitle}`,

      html: `
        <h2>New Job Application</h2>

        <p><strong>Applied For:</strong> ${jobTitle}</p>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Surname:</strong> ${surname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Comment:</strong> ${comment}</p>
      `,

      attachments: [
        {
          filename: file.name,
          content: buffer,
        },
      ],
    })

    return NextResponse.json({
      success: true,
      message: "Application submitted",
    })
  } catch (error) {
    console.log(error)

    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    )
  }
}