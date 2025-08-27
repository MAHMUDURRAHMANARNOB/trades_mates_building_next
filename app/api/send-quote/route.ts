import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, projectType, location, budget, timeline, message } = body

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Website Quote" <${process.env.EMAIL_USER}>`,
      to: "mahmudur.rahman2023@gmail.com", // change to your target
      subject: `New Quote Request from ${name}`,
      html: `
        <h2>New Quote Request</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Project Type:</b> ${projectType}</p>
        <p><b>Location:</b> ${location}</p>
        <p><b>Budget:</b> ${budget}</p>
        <p><b>Timeline:</b> ${timeline}</p>
        <p><b>Message:</b><br/> ${message}</p>
      `,
    })

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (err) {
    console.error("Error sending email:", err)
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 })
  }
}
