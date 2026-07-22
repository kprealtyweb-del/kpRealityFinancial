import { useState } from 'react'
import HeroBanner from '../components/HeroBanner'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import ContactCard from '../components/ContactCard'
import PrimaryButton from '../components/PrimaryButton'
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
} from '@heroicons/react/24/outline'
import { contactInfo } from '../data/siteData'

const contactDetails = [
  {
    icon: MapPinIcon,
    title: 'Office Address',
    content: contactInfo.address,
  },
  {
    icon: PhoneIcon,
    title: 'Phone Number',
    content: contactInfo.phone,
    href: `tel:${contactInfo.phone}`,
  },
  {
    icon: EnvelopeIcon,
    title: 'Email Address',
    content: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    icon: ClockIcon,
    title: 'Working Hours',
    content: contactInfo.workingHours,
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData({ name: '', phone: '', email: '', message: '' })
  }

  return (
    <>
      <HeroBanner
        subtitle="Get in Touch"
        title="We'd Love to Hear From You"
        description="Have questions about our insurance plans or need assistance with a claim? Our team is here to help you every step of the way."
        primaryAction={{ label: 'Call Us Now', to: '/contact' }}
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

              <div className="mt-8">
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
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-heading">
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
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-heading">
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
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-heading">
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
                    <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-heading">
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
                  <PrimaryButton type="submit" className="w-full">
                    Send Message
                  </PrimaryButton>
                </form>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
