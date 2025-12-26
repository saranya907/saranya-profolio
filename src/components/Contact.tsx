import { useRef, type FormEvent } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_5mo151b",   // ✅ Your Service ID
        "template_38hzsvd",  // ✅ Your Template ID
        formRef.current,
        "R9iwRw2Y7wb8dfcyG"  // ✅ Your Public Key
      )
      .then(
        () => {
          alert("✅ Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("❌ Failed to send message");
        }
      );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f4f4f4",
      }}
    >
      <div
        style={{
          width: "420px",
          padding: "30px",
          background: "#ffffff",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Contact Me
        </h2>

        <form ref={formRef} onSubmit={sendEmail}>
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "12px",
            }}
          />

          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "12px",
            }}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows={4}
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "12px",
            }}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "#0f766e",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontSize: "16px",
              borderRadius: "4px",
            }}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
