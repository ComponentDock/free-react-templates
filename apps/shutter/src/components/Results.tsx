import { Badge } from '@free-react-templates/ui'
import { BeforeAfter } from './BeforeAfter'

export function Results() {
  return (
    <section id="results" className="bg-white py-20 lg:py-28 dark:bg-gray-950">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Badge className="bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">
            Editing
          </Badge>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            The Edit Makes the Shot
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Drag the handle to see how careful color grading and retouching transform every frame.
          </p>
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-2">
          <BeforeAfter seed="shutter-retouch-1" caption="Portrait Retouching" />
          <BeforeAfter seed="shutter-retouch-2" caption="Landscape Color Grading" />
        </div>
      </div>
    </section>
  )
}
