import HeroBanner from "../components/HeroBanner";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import FeatureCard from "../components/FeatureCard";
import TestimonialCard from "../components/TestimonialCard";
import CTABanner from "../components/CTABanner";
import { services, whyChooseUs, testimonials } from "../data/siteData";

export default function Home() {
  return (
    <>
      <HeroBanner
        subtitle="Trusted Car Insurance"
        title="Drive Home Your Dream Car with Confidence Used Car Loans by"
        companyName="KP Realty & Financial Services"
        description="Get the best financing solutions for your pre-owned car with quick approvals, competitive interest rates, and a hassle-free loan process. Whether you're buying your first used car or upgrading to a better vehicle, we're here to make ownership simple and affordable."
        primaryAction={{ label: "Lets Connect", to: "/contact" }}
        showImage
      />

      {/* Our Services  */}
      <section className="py-12 md:py-16 lg:py-20">
        <Container>
          <SectionTitle
            subtitle="Our Services"
            title=" Loans & Insurance Plans Designed for You"
            description="Choose from our range of comprehensive insurance & loan plans that offer maximum coverage at the most competitive rates."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 5).map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </Container>
      </section>

      <HeroBanner
        subtitle="Turning Property Dreams into Reality"
        imageType="home"
        title="Complete Real Estate & Property Financing Under One Roof"
        description="Whether you're buying, selling, renting, investing, or financing a property, our experts ensure a smooth and reliable experience across Delhi NCR."
        primaryAction={{
          label: "Lets Connect",
          action: () => window.open("https://wa.link/qk571o"),
        }}
        showImage
      />

      <section className="py-12 md:py-16 lg:py-20">
        <Container>
          <SectionTitle
            subtitle="Our Services"
            title="Trusted Property Consultants for Every Step of Your Journey"
            description="Comprehensive property and financing solutions for buying, selling, renting, investing, and property loans across Delhi NCR"
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.slice(5).map((service) => (
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

      <section className="border-t border-border py-12  bg-background md:py-16 lg:py-20">
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
        title="Need Help Choosing the Right Solution?"
        description="Our experts are ready to assist you with Used Car Loans, Insurance, Real Estate, Home Loans, and LAP. Get professional guidance today."
      />
    </>
  );
}
