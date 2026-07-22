import Container from '../components/Container'
import PrimaryButton from '../components/PrimaryButton'

export default function CTABanner({ title, description, buttonLabel = 'Contact Us', buttonTo = '/contact' }) {
  return (
    <section className="bg-primary py-16 sm:py-20">
      <Container>
        <div className="text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-white sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mx-auto mb-8 max-w-2xl text-base text-white/80 sm:text-lg">
              {description}
            </p>
          )}
          <PrimaryButton to={buttonTo} className="!bg-accent !text-heading hover:!bg-amber-400">
            {buttonLabel}
          </PrimaryButton>
        </div>
      </Container>
    </section>
  )
}
