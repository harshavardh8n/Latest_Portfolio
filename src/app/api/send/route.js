
import emailjs from "emailjs-com";

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    const templateParams = {
      from_name: email,
      subject: subject,
      message: message,
    };

    // Using the Node.js SDK for server-side
    const response = await emailjs.send(
      process.env.EMAIL_JS_SERVICE_ID,
      process.env.EMAIL_JS_TEMPLATE_ID,
      templateParams,
      process.env.EMAIL_JS_PUBLIC_KEY
    );

    return new Response(JSON.stringify({ status: "success", response }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("FAILED...", err);
    return new Response(
      JSON.stringify({ status: "error", message: err.message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
