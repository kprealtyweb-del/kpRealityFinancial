import HeroBanner from "../components/HeroBanner";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import Accordion from "../components/Accordion";
import CTABanner from "../components/CTABanner";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { services, serviceFaqs, coveragePlans } from "../data/siteData";

const benefits = [
  "Cashless repair at 5000+ network garages",
  "Instant policy issuance within minutes",
  "No-Claim Bonus up to 50% discount",
  "24/7 roadside assistance across India",
  "Hassle-free claim settlement process",
  "Dedicated relationship manager",
];

export default function Services() {
  return (
    <>
      <HeroBanner
        subtitle="Our Services"
        title="Complete Solutions for Property, Loans & Insurance"
        description="Whether you’re looking to buy, sell, or rent a property, secure a Home or Car Loan, or protect your vehicle with Motor Insurance, we provide trusted and convenient solutions tailored to your needs."
        primaryAction={{ label: "Lets Connect", to: "/contact" }}
        imageType="about"
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

      <section className="border-t border-border bg-card py-12 md:py-16 lg:py-20">
        <Container>
          <SectionTitle
            subtitle="Benefits"
            title="Why Our Plans Stand Out"
            description="Our insurance plans come packed with benefits that ensure you get the best value for your money."
          />
          <div className="mx-auto grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-3 rounded-xl border border-border bg-background p-4 shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <CheckCircleIcon className="h-5 w-5 flex-shrink-0 text-success" />
                <span className="text-sm font-medium text-heading">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16 lg:py-20">
        <Container>
          <SectionTitle
            subtitle="Coverage Options"
            title="Compare Our Coverage Plans"
            description="Find the coverage level that suits your needs and budget."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coveragePlans.map((plan, index) => (
              <div
                key={plan.id}
                className={`flex flex-col rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8 ${
                  index === 2
                    ? "border-primary bg-primary/5 ring-1 ring-primary/20"
                    : "border-border bg-card"
                }`}
              >
                {index === 2 && (
                  <span className="mb-4 self-start rounded-full bg-primary px-3 py-1 font-heading text-xs font-semibold text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="mb-4 font-heading text-xl font-bold text-heading">
                  {plan.title}
                </h3>
                <ul className="mb-6 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm text-paragraph"
                    >
                      <CheckCircleIcon className="h-5 w-5 flex-shrink-0 text-success" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        title="Ready to Protect Your Vehicle?"
        description="Get a personalized quote in minutes. Our experts are here to help you choose the best plan."
        buttonLabel="Get Your Quote"
      />
    </>
  );
}
