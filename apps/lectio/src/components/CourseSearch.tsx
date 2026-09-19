import { Button } from '@free-react-templates/ui'

const FIELDS = [
  { label: 'Course', placeholder: 'Course' },
  { label: 'Level', placeholder: 'Level' },
  { label: 'Date', placeholder: 'Date' },
  { label: 'Teacher', placeholder: 'Teacher' },
  { label: 'Price', placeholder: 'Price' },
]

export function CourseSearch() {
  return (
    <section className="relative z-20 -mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl bg-navy p-6 shadow-2xl sm:p-8">
          <h2 className="mb-4 text-xl font-bold text-white">Search your Course</h2>
          <form
            className="flex flex-col gap-3 sm:flex-row sm:items-end sm:gap-4"
            role="search"
            aria-label="Search courses"
            onSubmit={(e) => e.preventDefault()}
          >
            {FIELDS.map((field) => (
              <div key={field.label} className="flex-1">
                <label htmlFor={field.label} className="sr-only">
                  {field.label}
                </label>
                <input
                  id={field.label}
                  type="text"
                  placeholder={field.placeholder}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:border-brand focus:ring-2 focus:ring-brand/30 focus:outline-none"
                />
              </div>
            ))}
            <Button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand to-primary-400 px-8 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:from-brand-dark hover:to-primary-500 sm:whitespace-nowrap"
            >
              Search
              <span aria-hidden="true">&rsaquo;</span>
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
