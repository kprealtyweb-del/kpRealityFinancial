import HeroBanner from "../components/HeroBanner";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import FeatureCard from "../components/FeatureCard";
import CTABanner from "../components/CTABanner";
import { coreValues, insuranceProcess, whyChooseUs } from "../data/siteData";
import officeImg from "../assets/png/office.png";
import ProcessCard from "../components/ProcessCard";
import ashwaniMattas from "../assets/png/owner.png";

export default function About() {
  return (
    <>
      <HeroBanner
        subtitle="About  KP Realty & Financial Services"
        title="Protecting What You Own. Powering What’s Next."
        description="KP Realty & Financial Services offers trusted solutions for property buying, selling, renting, home & property loans, car loans, and motor insurance, making every property and financial decision simple and hassle-free."
        primaryAction={{ label: "Lets Connect", to: "/contact" }}
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

      {/* About the Founder Section */}
      <section className="border-t border-border bg-card py-12 md:py-16 lg:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-slate-100 shadow-md">
                <img
                  src={ashwaniMattas}
                  alt="Mr. Ashwani Mattas - Founder"
                  className="h-full w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-border bg-primary p-4 text-white shadow-xl sm:block">
                <p className="font-heading text-2xl font-bold">20+</p>
                <p className="text-xs font-medium text-slate-100">
                  Years of Experience
                </p>
              </div>
            </div>

            <div>
              <SectionTitle title="About the Founder" align="left" />
              <h3 className="mb-4 font-heading text-xl font-bold text-primary sm:text-2xl">
                Mr. Ashwani Mattas
              </h3>
              <div className="space-y-4 text-sm leading-relaxed text-paragraph sm:text-base text-justify">
                <p>
                  Mr. Ashwani Mattas is the Founder of KP Realty & Financial
                  Services, with over 20 years of experience in the financial
                  and real estate industry. He specializes in Used Car Loans,
                  Real Estate, and financial consultancy, helping individuals
                  and businesses find the right financial and property
                  solutions. His commitment to transparency, integrity, and
                  customer satisfaction has earned the trust of clients, making
                  KP Realty & Financial Services a reliable name in the
                  industry.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-background py-12 md:py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            <div className="rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-8">
              <span className="mb-2 inline-block font-heading text-xs font-semibold tracking-wider text-primary uppercase">
                Our Mission
              </span>
              <h3 className="mb-4 font-heading text-2xl font-bold text-heading">
                Making Loans, Insurance & Real Estate Simple
              </h3>
              <p className="text-sm leading-relaxed text-paragraph sm:text-base">
                At KP Realty & Financial Services, our mission is to provide
                trusted and transparent solutions for loans, motor insurance,
                and real estate across Delhi NCR. We help customers make
                confident decisions through expert guidance, competitive
                options, and personalized support.
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

      <section className="py-12 bg-white md:py-16 lg:py-20">
        <Container>
          <SectionTitle
            subtitle="How It Works"
            title="Simple & Hassle-Free Service Process"
            description="Get easy solutions for Used Car Loans, Insurance, Real Estate, Home Loans, and LAP with expert guidance, quick support, and a smooth, transparent process."
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

      <section className="py-12 bg-white md:py-16 lg:py-20">
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
        description="Join thousands of satisfied customers who trust us."
        buttonLabel="Get Started"
      />
    </>
  );
}
