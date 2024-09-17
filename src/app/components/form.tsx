import { useState } from "react";
import { FormikHelpers, Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { createClient } from "@/app/utils/supabase/client";

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
  const supabase = createClient();
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);

  const handleSubmit = async (
    values: FormValues,
    { setSubmitting }: FormikHelpers<FormValues>
  ) => {
    setCaptchaError(false);

    if (!captchaToken) {
      setCaptchaError(true);
      setSubmitting(false);
      return;
    }

    const { error } = await supabase.from("contact_form").insert([values]);

    if (error) {
      console.error("Error inserting data:", error);
    } else {
      setSubmitted(true);
    }

    setSubmitting(false);
  };

  return (
    <>
      {submitted ? (
        <>
          <p className="text-center text-accent">
            Thank you for your message!{" "}
          </p>
          <p className="text-center text-accent mt-5">
            I&apos;ll get back to you soon.
          </p>
        </>
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
                className="bg-primary text-white p-3 rounded-md w-full mt-5 transition-transform duration-200 ease-in-out hover:brightness-125 hover:scale-105 active:scale-95"
                disabled={isSubmitting}
              >
                Send
              </button>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
}
