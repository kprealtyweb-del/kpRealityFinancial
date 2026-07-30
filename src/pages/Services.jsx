import HeroBanner from "../components/HeroBanner";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import CTABanner from "../components/CTABanner";
import { services } from "../data/siteData";

export default function Services() {
  return (
    <>
      <HeroBanner
        subtitle="Our Services"
        title="Complete Solutions for Property, Loans & Insurance"
        description="Whether you’re looking to buy, sell, or rent a property, secure a Home or Car Loan, or protect your vehicle with Motor Insurance, we provide trusted and convenient solutions tailored to your needs."
        primaryAction={{ label: "Lets Connect", to: "/contact" }}
        imageType="service"
      />

      <section className="py-12 md:py-16 lg:py-20">
        <Container>
          <SectionTitle
            subtitle="Our Services"
            title="Choose the Right Solution for Your Needs"
            description="Explore trusted solutions for property buying, selling & renting, Home & Property Loans, Car Loans, and Motor Insurance, tailored to your needs and budget."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>
        </Container>
      </section>
      <CTABanner
        title="Ready to Find the Right Solution?"
        description="Get expert assistance for Used Car Loans, Insurance, Real Estate, Home Loans, and LAP with quick, reliable, and personalized support."
        buttonLabel="Get Your Quote"
      />
    </>
  );
}
