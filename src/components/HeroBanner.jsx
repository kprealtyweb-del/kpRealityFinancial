import Container from "../components/Container";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";
import car from "../assets/png/car.png";
import home from "../assets/png/home.png";
import about from "../assets/png/about.png";

export default function HeroBanner({
  subtitle,
  title,
  companyName,
  description,
  primaryAction,
  secondaryAction,
  showBannerImage = true,
  imageType = "car",
}) {
  return (
    <section
      className="relative flex min-h-[65vh] items-center overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `${showBannerImage ? `url(${imageType === "car" ? car : imageType === "home" ? home : about})` : ""}`,
      }}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0  ${showBannerImage && "bg-black/75"}`}
      />

      {/* Content */}
      <Container className="relative z-10">
        <div className="max-w-3xl">
          {subtitle && (
            <span className="mb-5 inline-block rounded-full bg-white/10 px-4 py-2 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-accent backdrop-blur-sm">
              {subtitle}
            </span>
          )}

          <div className="font-heading text-4xl font-extrabold leading-tight text-white">
            {title}
          </div>
          <div className="mb-6 font-heading text-4xl font-extrabold leading-tight text-white">
            {companyName}
          </div>

          <p className="mb-10 max-w-2xl text-lg leading-relaxed text-slate-200 lg:text-xl text-justify">
            {description}
          </p>

          <div className="flex flex-wrap gap-4">
            {primaryAction && (
              <PrimaryButton onClick={primaryAction.action}>
                {primaryAction.label}
              </PrimaryButton>
            )}

            {secondaryAction && (
              <SecondaryButton to={secondaryAction.to}>
                {secondaryAction.label}
              </SecondaryButton>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
