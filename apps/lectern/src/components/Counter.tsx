export function Counter() {
  return (
    <section aria-label="Course countdown" className="bg-navy py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 sm:flex-row sm:justify-between sm:px-6">
        <h2 className="text-xl font-bold sm:text-2xl">
          NEXT COURSE: Sales &amp; Marketing Alignment
        </h2>
        <div className="flex items-center gap-6">
          {[
            { value: '20', label: 'Days' },
            { value: '08', label: 'Hrs' },
            { value: '40', label: 'Mins' },
            { value: '56', label: 'Secs' },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-3xl font-bold text-brand">{item.value}</p>
              <p className="mt-1 text-xs uppercase tracking-wider text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
