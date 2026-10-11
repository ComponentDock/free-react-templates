import { KitButton } from './KitButton'

/** The plain closing call to action with its large download button. */
export function CtaBand() {
  return (
    <section id="cta" className="px-4 py-24 text-center sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-[28px] font-medium text-heading">Do you like this UI Kit?</h2>
        <p className="mt-8">
          <KitButton color="primary" variant="solid" size="lg">
            Download, it&apos;s free!
          </KitButton>
        </p>
      </div>
    </section>
  )
}
