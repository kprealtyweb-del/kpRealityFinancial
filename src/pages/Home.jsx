import HeroBanner from "../components/HeroBanner";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import FeatureCard from "../components/FeatureCard";
import StatCard from "../components/StatCard";
import ProcessCard from "../components/ProcessCard";
import TestimonialCard from "../components/TestimonialCard";
import CTABanner from "../components/CTABanner";
import {
  services,
  whyChooseUs,
  statistics,
  insuranceProcess,
  testimonials,
} from "../data/siteData";

export default function Home() {
  return (
    <>
      <HeroBanner
        subtitle="Trusted Car Insurance"
        title="Drive with Confidence, Insure with  KP Realty & Financial Services"
        description="Comprehensive car insurance solutions tailored to your needs. Get affordable premiums, fast claims settlement, and 24/7 dedicated support from India's most trusted insurance partner."
        primaryAction={{ label: "Get Quote", to: "/contact" }}
        secondaryAction={{ label: "Learn More", to: "/about" }}
        showImage
      />

      {/* Our Services  */}
      <section className="py-12 md:py-16 lg:py-20">
        <Container>
          <SectionTitle
            subtitle="Our Services"
            title="Insurance Plans Designed for You"
            description="Choose from our range of comprehensive insurance plans that offer maximum coverage at the most competitive rates."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </Container>
      </section>

      <HeroBanner
        subtitle="Trusted Property Insurance"
        imageType="home"
        title="Complete Property & Financing Solutions Under One Roof"
        description="Trusted solutions for buying, selling, renting, investing, and property financing across Delhi NCR"
        primaryAction={{
          label: "Get Quote",
          action: () => window.open("https://wa.link/qk571o"),
        }}
        secondaryAction={{ label: "Learn More", to: "/about" }}
        showImage
      />

      <section className="py-12 md:py-16 lg:py-20">
        <Container>
          <SectionTitle
            subtitle="Our Services"
            title="Your One-Stop Solution for Property & Finance Needs"
            description="Comprehensive property and financing solutions for buying, selling, renting, investing, and property loans across Delhi NCR"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(3).map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-card py-12 md:py-16 lg:py-20">
        <Container>
          <SectionTitle
            subtitle="WHY KP REALTY & FINANCIAL SERVICES?"
            title="One Trusted Destination for Loans, Property & Insurance Solutions"
            description="At KP Realty & Financial Services, we understand that every customer has different financial, property, and insurance requirements. That’s why we focus on providing personalized solutions backed by professional guidance and a transparent approach.Whether you are looking for a Used Car Loan, New Car Loan, Home Loan, Loan Against Property (LAP), Residential Property, Commercial Property, Property Buying, Selling or Renting, or Motor Insurance in Delhi NCR, our experienced team is committed to making the entire process simple, convenient, and dependable.From helping you finance your dream home or car to finding the right residential or commercial property, we provide comprehensive assistance under one roof."
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
  );
}
