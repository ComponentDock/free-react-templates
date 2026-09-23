import { Button } from '@free-react-templates/ui'

const details = [
  { label: 'Name', value: 'Franklin Henderson' },
  { label: 'Date of Birth', value: 'November 28, 1985' },
  { label: 'Address', value: '2820 Maple Avenue, Portland, OR' },
  { label: 'Zip Code', value: '97201' },
  { label: 'Email', value: 'franklin@example.com' },
  { label: 'Phone', value: '+1 (503) 555-0142' },
] as const

export function AuthorBio() {
  return (
    <section id="author" className="bg-paper py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand">Author</p>
          <h2 className="text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            About The Author
          </h2>
        </div>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/seed/pageturn-author/600/700"
              alt="Franklin Henderson"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h3 className="mb-4 text-2xl font-bold text-ink dark:text-white">Franklin Henderson</h3>
            <p className="mb-8 leading-relaxed text-muted dark:text-gray-400">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
            <dl className="mb-8 space-y-3">
              {details.map((d) => (
                <div key={d.label} className="flex">
                  <dt className="w-32 shrink-0 text-sm font-semibold text-ink dark:text-white">
                    {d.label}:
                  </dt>
                  <dd className="text-sm text-muted dark:text-gray-400">{d.value}</dd>
                </div>
              ))}
            </dl>
            <Button
              variant="primary"
              size="lg"
              className="rounded-full bg-primary-500 px-8 py-3 text-white hover:bg-primary-600"
            >
              View All Books
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
