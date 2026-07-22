import HeroBanner from '../components/HeroBanner'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import ServiceCard from '../components/ServiceCard'
import FeatureCard from '../components/FeatureCard'
import StatCard from '../components/StatCard'
import ProcessCard from '../components/ProcessCard'
import TestimonialCard from '../components/TestimonialCard'
import CTABanner from '../components/CTABanner'
import {
  services,
  whyChooseUs,
  statistics,
  insuranceProcess,
  testimonials,
} from '../data/siteData'

export default function Home() {
  return (
    <>
      <HeroBanner
        subtitle="Trusted Car Insurance"
        title="Drive with Confidence, Insure with  KP Realty & Financial Services"
        description="Comprehensive car insurance solutions tailored to your needs. Get affordable premiums, fast claims settlement, and 24/7 dedicated support from India's most trusted insurance partner."
        primaryAction={{ label: 'Get Quote', to: '/contact' }}
        secondaryAction={{ label: 'Learn More', to: '/about' }}
        showImage
      />

      <section className="py-12 md:py-16 lg:py-20">
        <Container>
          <SectionTitle
            subtitle="Our Services"
            title="Insurance Plans Designed for You"
            description="Choose from our range of comprehensive insurance plans that offer maximum coverage at the most competitive rates."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-card py-12 md:py-16 lg:py-20">
        <Container>
          <SectionTitle
            subtitle="Why Choose Us"
            title="The  KP Realty & Financial Services Advantage"
            description="We combine industry expertise with technology to deliver an insurance experience that's fast, transparent, and customer-friendly."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <FeatureCard key={item.id} {...item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-primary/5 py-12 md:py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {statistics.map((stat) => (
              <StatCard key={stat.id} {...stat} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <Container>
          <SectionTitle
            subtitle="How It Works"
            title="Simple 4-Step Insurance Process"
            description="Getting insured has never been easier. Follow our simple process to secure your vehicle in minutes."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {insuranceProcess.map((item) => (
              <ProcessCard key={item.id} {...item} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-card py-12 md:py-16 lg:py-20">
        <Container>
          <SectionTitle
            subtitle="Testimonials"
            title="What Our Customers Say"
            description="Don't just take our word for it. Hear from thousands of satisfied customers who trust  KP Realty & Financial Services."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <TestimonialCard key={item.id} {...item} />
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        title="Need help choosing the right policy?"
        description="Our expert advisors are ready to help you find the perfect coverage. Get a free consultation today."
      />
    </>
  )
}
