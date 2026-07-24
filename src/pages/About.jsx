import HeroBanner from "../components/HeroBanner";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import FeatureCard from "../components/FeatureCard";
import StatCard from "../components/StatCard";
import CTABanner from "../components/CTABanner";
import {
  coreValues,
  insuranceProcess,
  statistics,
  whyChooseUs,
} from "../data/siteData";
import officeImg from "../../public/png/office.png";
import ProcessCard from "../components/ProcessCard";

export default function About() {
  return (
    <>
      <HeroBanner
        subtitle="About  KP Realty & Financial Services"
        title="Protecting What You Own. Powering What’s Next."
        description="KP Realty & Financial Services offers trusted solutions for property buying, selling, renting, home & property loans, car loans, and motor insurance, making every property and financial decision simple and hassle-free."
        primaryAction={{ label: "Get Quote", to: "/contact" }}
        secondaryAction={{ label: "Our Services", to: "/services" }}
        imageType="about"
      />

      <section className="py-12 md:py-16 lg:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <SectionTitle
                subtitle="Our Story"
                title="Building Trust"
                align="left"
              />
              <div className="space-y-4 text-sm leading-relaxed text-paragraph sm:text-base text-justify">
                <p>
                  KP Realty & Financial Services is a trusted provider of real
                  estate, loans, financial, and motor insurance services in New
                  Delhi. Based in Janakpuri District Centre, we assist
                  individuals, families, investors, professionals, and
                  businesses with reliable solutions tailored to their needs.
                </p>
                <p>
                  With extensive industry experience and a customer-first
                  approach, we offer professional assistance for Residential &
                  Commercial Properties, Property Buying, Selling & Renting,
                  Home Loans, Loans Against Property (LAP), New & Used Car
                  Loans, Real Estate Investments, and Motor Insurance.
                </p>
                <p>
                  Whether you are looking to buy, sell, or rent a property,
                  invest in real estate, secure financing, or protect your
                  vehicle, our team provides clear guidance and efficient
                  support throughout the process.
                </p>
                <p>
                  At KP Realty & Financial Services, we focus on trust,
                  transparency, and personalized service, helping every customer
                  make informed decisions aligned with their property and
                  financial goals.
                </p>
              </div>
            </div>
            <div className="aspect-[16/9] w-full rounded-2xl bg-slate-200 flex items-center justify-center font-heading text-sm font-medium text-slate-500 border border-border shadow-sm">
              <img
                src={officeImg}
                alt="Office"
                className="overflow-hidden rounded-xl"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-card py-12 md:py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            <div className="rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-8">
              <span className="mb-2 inline-block font-heading text-xs font-semibold tracking-wider text-primary uppercase">
                Our Mission
              </span>
              <h3 className="mb-4 font-heading text-2xl font-bold text-heading">
                Making Insurance Simple & Accessible
              </h3>
              <p className="text-sm leading-relaxed text-paragraph sm:text-base">
                Our mission is to become a trusted destination for financial and
                real estate solutions in Delhi NCR by providing reliable loan
                assistance, professional residential and commercial property
                services, and motor insurance solutions through transparent
                processes, competitive options, personalized guidance, and
                exceptional customer support.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-8">
              <span className="mb-2 inline-block font-heading text-xs font-semibold tracking-wider text-primary uppercase">
                Our Vision
              </span>
              <h3 className="mb-4 font-heading text-2xl font-bold text-heading">
                Your Trusted Partner for Property, Loans & Insurance
              </h3>
              <p className="text-sm leading-relaxed text-paragraph sm:text-base">
                Our vision is to make property buying, selling, renting, loans,
                and insurance simple, transparent, and hassle-free. We aim to
                help every customer make confident decisions with trusted
                guidance, personalized solutions, and professional support.
              </p>
            </div>
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

      <section className="py-12 md:py-16 lg:py-20">
        <Container>
          <SectionTitle
            subtitle="Core Values"
            title="What We Stand For"
            description="Our values guide every decision we make and every interaction we have with our customers."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => (
              <FeatureCard key={value.id} {...value} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-primary/5 py-12 md:py-16 lg:py-20">
        <Container>
          <SectionTitle
            subtitle="Our Impact"
            title="Numbers That Speak"
            description="A snapshot of our journey and the trust our customers place in us."
          />
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
            subtitle="Why Choose Us"
            title="The  KP Realty & Financial Services Difference"
            description="Here's why thousands of customers choose  KP Realty & Financial Services for their insurance needs."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.slice(0, 6).map((item) => (
              <FeatureCard key={item.id} {...item} />
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        title="Ready to Experience the  KP Realty & Financial Services Difference?"
        description="Join thousands of satisfied customers who trust us with their vehicle insurance."
        buttonLabel="Get Started"
      />
    </>
  );
}
