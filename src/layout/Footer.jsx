import { useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import { footerLinks, contactInfo } from '../data/siteData'

export default function Footer() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setEmail('')
  }

  return (
    <footer className="border-t border-border bg-heading text-slate-300">
      <Container className="py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Column 1: Company */}
          <div>
            <Link to="/" className="font-heading text-xl font-bold text-white sm:text-2xl">
               KP Realty & Financial Services
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Your trusted partner for comprehensive car insurance solutions. Protecting what matters most to you with fast claims and 24/7 support.
            </p>
            <div className="mt-6 flex gap-3">
              {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-800 text-xs font-semibold text-slate-400 transition-all duration-300 hover:bg-primary hover:text-white"
                >
                  {social.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Insurance */}
          <div>
            <h4 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-white">
              Insurance
            </h4>
            <ul className="space-y-3">
              {footerLinks.insurance.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-slate-400 transition-colors duration-300 hover:text-white"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter */}
          <div>
            <h4 className="mb-4 font-heading text-xs font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="text-sm leading-relaxed text-slate-400">{contactInfo.address}</li>
              <li>
                <a href={`tel:${contactInfo.phone}`} className="text-sm text-slate-400 transition-colors duration-300 hover:text-white">
                  {contactInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contactInfo.email}`} className="text-sm text-slate-400 transition-colors duration-300 hover:text-white">
                  {contactInfo.email}
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white">Newsletter</p>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="w-full rounded-xl border border-slate-700 bg-slate-800 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-colors duration-300 focus:border-primary"
                />
                <button
                  type="submit"
                  className="flex-shrink-0 rounded-xl bg-primary px-4 py-2.5 font-heading text-sm font-semibold text-white transition-all duration-300 hover:bg-primary-hover"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center sm:mt-16">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()}  KP Realty & Financial Services. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
