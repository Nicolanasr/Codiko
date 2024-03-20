import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
	host: "smtp.gmail.com",
	port: 465,
	secure: true,
	auth: {
		user: "codikodev@gmail.com",
		pass: "ihzcvovioukoguxq",
	},
});

export type FormRequest = {
	from: string;
	subject?: string;
	text: string;
};

export async function POST(request: Request, response: Response) {
	const data: FormRequest = await request.json();

	try {
		const info = await transporter.sendMail({
			from: `Contact us`,
			to: "info@codikodev.com",
			subject: data.subject || "",
			html: `<b>From: </b>${data.from} <br /><br />
<b>Text: </b> ${data.text}`, // html body
		});

		return NextResponse.json({ message: info.messageId }, { status: 200 });
	} catch (error) {
		return NextResponse.json({ message: error }, { status: 500 });
	}
}
