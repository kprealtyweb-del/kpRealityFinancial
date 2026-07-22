import Container from '../components/Container'
import PrimaryButton from '../components/PrimaryButton'
import SecondaryButton from '../components/SecondaryButton'

export default function HeroBanner({
  subtitle,
  title,
  description,
  primaryAction,
  secondaryAction,
  showImage = false,
  imageText = 'Vehicle Image Placeholder'
}) {
  return (
    <section className="border-b border-border bg-card py-12 md:py-16 lg:py-20">
      <Container>
        <div className={`flex flex-col items-center gap-10 lg:gap-12 ${showImage ? 'lg:flex-row' : ''}`}>
          <div className={`${showImage ? 'w-full lg:w-1/2 text-left' : 'mx-auto max-w-3xl text-center'}`}>
            {subtitle && (
              <span className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1.5 font-heading text-xs font-semibold tracking-wider text-primary uppercase">
                {subtitle}
              </span>
            )}
            <h1 className="mb-5 font-heading text-3xl font-bold leading-tight text-heading sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="mb-8 text-base leading-relaxed text-paragraph sm:text-lg">
              {description}
            </p>
            <div className={`flex flex-wrap items-center gap-4 ${showImage ? 'justify-start' : 'justify-center'}`}>
              {primaryAction && (
                <PrimaryButton to={primaryAction.to}>
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
          {showImage && (
            <div className="w-full lg:w-1/2">
              <div className="aspect-[16/9] w-full rounded-2xl bg-slate-200 flex flex-col items-center justify-center font-heading text-sm font-medium text-slate-500 border border-border shadow-sm">
                <svg className="mb-2 h-10 w-10 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v.958m12 0A2.25 2.25 0 0113.5 9.75h-6A2.25 2.25 0 015.25 7.5m11.25 0V6a2.25 2.25 0 00-2.25-2.25h-4.5A2.25 2.25 0 007.5 6v1.5m11.25 0h.75" />
                </svg>
                <span>{imageText}</span>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  )
}
