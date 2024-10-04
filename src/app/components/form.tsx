import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import HCaptcha from "@hcaptcha/react-hcaptcha";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  message: Yup.string().required("Message is required"),
});

export default function ContactForm() {
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);

  const handleSubmit = async (values: FormValues, { setSubmitting }: any) => {
    setCaptchaError(false);

    if (!captchaToken) {
      setCaptchaError(true);
      setSubmitting(false);
      return;
    }

    const jsonPayload = {
      access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY as string,
      name: values.name,
      email: values.email,
      message: values.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(jsonPayload),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
      } else {
        console.error("Error sending message:", result);
      }
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {submitted ? (
        <div className="w-full">
          <p className="text-center text-accent">Thank you for your message!</p>
          <p className="text-center text-accent mt-5">
            I&apos;ll get back to you soon.
          </p>
        </div>
      ) : (
        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="w-full">
              <div className="mb-5">
                <Field
                  type="text"
                  name="name"
                  placeholder="Name"
                  className={`border rounded-lg p-2 w-full ${
                    errors.name && touched.name
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-secondary`}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-xs pt-1"
                />
              </div>
              <div className="mb-5">
                <Field
                  type="email"
                  name="email"
                  placeholder="Email"
                  className={`border rounded-lg p-2 w-full ${
                    errors.email && touched.email
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-secondary`}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-xs pt-1"
                />
              </div>
              <div className="mb-5">
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Message"
                  className={`border rounded-lg p-2 resize-none w-full h-32 ${
                    errors.message && touched.message
                      ? "border-red-500"
                      : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-secondary`}
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-xs"
                />
              </div>

              <div className="flex items-center justify-center">
                <HCaptcha
                  sitekey={process.env.NEXT_PUBLIC_HCAPTCHA_SITE_KEY as string}
                  onVerify={(token: string) => {
                    setCaptchaToken(token);
                    setCaptchaError(false);
                  }}
                  size="compact"
                  theme="light"
                />
              </div>
              {captchaError && (
                <div className="text-red-500 text-xs pt-1">
                  Please complete the CAPTCHA.
                </div>
              )}

              <button
                type="submit"
                className="bg-primary text-white p-3 rounded-md w-full mt-5 transition-transform duration-200 ease-in-out hover:brightness-125 hover:scale-105 active:scale-95 flex justify-center items-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span
                    className="inline-block w-5 h-5 border-2 border-t-2 border-white border-t-transparent rounded-full animate-spin mr-2"
                    aria-hidden="true"
                  ></span>
                ) : null}
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
}
