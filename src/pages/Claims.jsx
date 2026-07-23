import HeroBanner from "../components/HeroBanner";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import Accordion from "../components/Accordion";
import CTABanner from "../components/CTABanner";
import { PhoneIcon, DocumentTextIcon } from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import {
  claimProcess,
  requiredDocuments,
  claimFaqs,
  contactInfo,
} from "../data/siteData";

export default function Claims() {
  return (
    <>
      <HeroBanner
        subtitle="Claims Process"
        title="Hassle-Free Claims, Faster Settlements"
        description="Filing a claim shouldn't add to your stress. Our streamlined process ensures quick assessment, transparent communication, and timely settlement of your claims."
        primaryAction={{ label: "File a Claim", to: "/contact" }}
        secondaryAction={{ label: "Call Us Now", to: "/contact" }}
      />

      <section className="py-12 md:py-16 lg:py-20">
        <Container>
          <SectionTitle
            subtitle="Claim Timeline"
            title="Our Claims Process"
            description="A transparent, step-by-step process designed to settle your claims as quickly as possible."
          />
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-6 top-6 bottom-6 hidden w-0.5 bg-border sm:block" />
            <div className="space-y-6 sm:space-y-8">
              {claimProcess.map((item) => (
                <div key={item.id} className="relative flex gap-6">
                  <div className="relative z-10 hidden sm:block">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary font-heading text-sm font-bold text-white shadow-sm">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg sm:p-8">
                    <div className="mb-1 font-heading text-xs font-semibold text-primary uppercase sm:hidden">
                      Step {item.step}
                    </div>
                    <h3 className="mb-2 font-heading text-lg font-semibold text-heading">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-paragraph">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-card py-12 md:py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-xl">
            <div className="rounded-2xl border-2 border-red-200 bg-red-50 p-6 text-center shadow-sm sm:p-8">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
                <PhoneIcon className="h-7 w-7 text-red-600" />
              </div>
              <h3 className="mb-2 font-heading text-xl font-bold text-heading">
                Emergency Assistance
              </h3>
              <p className="mb-4 text-sm text-paragraph">
                In case of an accident or emergency, call our 24/7 helpline
                immediately for instant assistance.
              </p>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center gap-2 font-heading text-lg font-bold text-primary transition-colors duration-300 hover:text-primary-hover"
              >
                <PhoneIcon className="h-5 w-5" />
                <span>{contactInfo.phone}</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      <CTABanner
        title="Need Help With Your Claim?"
        description="Our dedicated claims team is available 24/7 to assist you through every step of the process."
      />
    </>
  );
}
