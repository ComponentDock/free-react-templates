import { Button } from '@free-react-templates/ui'

export function Buttons() {
  return (
    <section id="buttons" className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <h2 className="mb-10 text-center font-display text-3xl font-bold text-gray-900 dark:text-white">
          Buttons
        </h2>
        <div className="space-y-8">
          {/* Sizes */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-700 dark:text-gray-200">Sizes</h3>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          {/* Variants */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-700 dark:text-gray-200">
              Variants
            </h3>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
