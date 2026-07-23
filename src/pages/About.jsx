import HeroBanner from "../components/HeroBanner";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import FeatureCard from "../components/FeatureCard";
import StatCard from "../components/StatCard";
import CTABanner from "../components/CTABanner";
import { coreValues, statistics, whyChooseUs } from "../data/siteData";
import officeImg from "../../public/png/office.png";

export default function About() {
  return (
    <>
      <HeroBanner
        subtitle="About  KP Realty & Financial Services"
        title="Protecting What Drives You Forward"
        description="Since our inception,  KP Realty & Financial Services has been on a mission to make car insurance accessible, affordable, and hassle-free for every vehicle owner in India."
        primaryAction={{ label: "Get Quote", to: "/contact" }}
        secondaryAction={{ label: "Our Services", to: "/services" }}
      />

      <section className="py-12 md:py-16 lg:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <SectionTitle
                subtitle="Our Story"
                title="Building Trust, One Policy at a Time"
                align="left"
              />
              <div className="space-y-4 text-sm leading-relaxed text-paragraph sm:text-base">
                <p>
                  KP Realty & Financial Services was founded with a simple
                  belief — every vehicle owner deserves reliable, transparent,
                  and affordable insurance coverage. What started as a small
                  team of insurance professionals has grown into one of India's
                  most trusted car insurance providers.
                </p>
                <p>
                  Over the years, we've served thousands of customers, settled
                  countless claims, and built a reputation for putting our
                  customers first. Our digital-first approach makes it easy to
                  get insured, file claims, and manage your policy from
                  anywhere.
                </p>
                <p>
                  We combine deep industry expertise with cutting-edge
                  technology to deliver an insurance experience that's seamless,
                  fast, and customer-centric.
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
                To democratize car insurance by providing transparent,
                affordable, and technology-driven solutions that protect every
                vehicle owner. We aim to eliminate the complexity of insurance
                and make the process as simple as a few clicks.
              </p>
            </div>
            <div className="rounded-2xl border border-border bg-background p-6 shadow-sm sm:p-8">
              <span className="mb-2 inline-block font-heading text-xs font-semibold tracking-wider text-primary uppercase">
                Our Vision
              </span>
              <h3 className="mb-4 font-heading text-2xl font-bold text-heading">
                India's Most Trusted Insurance Partner
              </h3>
              <p className="text-sm leading-relaxed text-paragraph sm:text-base">
                To become the most customer-centric insurance company in India,
                where every policyholder feels valued, protected, and confident.
                We envision a future where insurance is not a burden but a
                seamless part of vehicle ownership.
              </p>
            </div>
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
