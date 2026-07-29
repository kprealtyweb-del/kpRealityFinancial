import { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import ContactCard from "../components/ContactCard";
import PrimaryButton from "../components/PrimaryButton";
import {
  HiMapPin,
  HiPhone,
  HiEnvelope,
  HiClock,
} from "react-icons/hi2";
import { contactInfo } from "../data/siteData";

const contactDetails = [
  {
    icon: HiMapPin,
    title: "Office Address",
    content: contactInfo.address,
  },
  {
    icon: HiPhone,
    title: "Phone Number",
    content: contactInfo.phone,
    href: `tel:${contactInfo.phone}`,
  },
  {
    icon: HiEnvelope,
    title: "Email Address",
    content: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: HiClock,
    title: "Working Hours",
    content: contactInfo.workingHours,
  },
];

const ACCESSKEY = "66a4d1b0-7d68-4c43-8b92-6c61ebfd3e3d";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESSKEY,

          subject: "New Contact Form Submission",

          to: contactInfo.email,

          from_name: formData.name,

          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setResponseMsg(result.message);

        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        console.error(result);
        setResponseMsg("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setResponseMsg("Something went wrong. Please try again later.");
    } finally {
      setTimeout(() => {
        setLoading(false);
        setResponseMsg(null);
      }, 2000);
    }
  };

  return (
    <>
      <HeroBanner
        subtitle="Get in Touch"
        title="We'd Love to Hear From You"
        description="Have questions about our insurance plans or need assistance with a claim? Our team is here to help you every step of the way."
      />

      <section className="py-12 md:py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <SectionTitle
                subtitle="Contact Information"
                title="Reach Out to Us"
                description="Get in touch through any of the following channels. We typically respond within 2 hours during business hours."
                align="left"
              />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {contactDetails.map((detail, index) => (
                  <ContactCard key={index} {...detail} />
                ))}
              </div>

              <div className="mt-8 hidden">
                <div className="aspect-[16/9] w-full rounded-2xl bg-slate-200 flex items-center justify-center font-heading text-sm font-medium text-slate-500 border border-border shadow-sm">
                  Google Maps Placeholder
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
                <h3 className="mb-2 font-heading text-2xl font-bold text-heading">
                  Send Us a Message
                </h3>
                <p className="mb-6 text-sm text-paragraph">
                  Fill out the form below and our team will get back to you
                  within 24 hours.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-1.5 block text-sm font-medium text-heading"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-heading outline-none transition-colors duration-300 placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-sm font-medium text-heading"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="Enter your phone number"
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-heading outline-none transition-colors duration-300 placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-sm font-medium text-heading"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email address"
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-heading outline-none transition-colors duration-300 placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-sm font-medium text-heading"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="How can we help you?"
                      className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-heading outline-none transition-colors duration-300 placeholder:text-slate-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  {responseMsg && (
                    <p
                      className={`text-sm ${
                        responseMsg.includes("Failed")
                          ? "text-red-500"
                          : "text-green-600"
                      }`}
                    >
                      {responseMsg}
                    </p>
                  )}
                  <PrimaryButton
                    type="submit"
                    className="w-full"
                    disabled={loading}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </PrimaryButton>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
