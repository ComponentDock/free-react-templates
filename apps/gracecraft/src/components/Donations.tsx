export function Donations() {
  const percentage = 70
  const raised = 5000
  const goal = 7100
  const remaining = goal - raised

  return (
    <section
      className="relative bg-cover bg-center bg-fixed py-20"
      style={{ backgroundImage: "url('https://picsum.photos/seed/gracecraft-donate/1200/500')" }}
    >
      <div className="absolute inset-0 bg-ink/70" />
      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="text-white">
            <h2 className="font-heading text-3xl font-bold">Help children get an education</h2>
            <div className="mt-6 flex flex-col gap-2 text-sm text-gray-300">
              <p>
                <span className="font-semibold text-white">Donation Caller: </span>John Connor
              </p>
              <p>
                <span className="font-semibold text-white">Categories: </span>Education, Children
              </p>
              <p>
                <span className="font-semibold text-white">On: </span>Friday 16 MAR, 2018
              </p>
            </div>
            <p className="mt-6 leading-relaxed text-gray-300">
              Every child deserves access to quality education. Your generous donation helps build
              schools, provide learning materials, and train teachers in underserved communities
              around the world.
            </p>
          </div>
          <div className="rounded bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between text-sm text-mist">
              <span>
                Remaining:{' '}
                <span className="font-bold text-brand">${remaining.toLocaleString()}</span>
              </span>
            </div>
            <div className="mt-4 h-6 w-full overflow-hidden rounded-full bg-gray-200">
              <div
                className="flex h-full items-center justify-center rounded-full bg-brand text-xs font-bold text-white"
                style={{ width: `${percentage}%` }}
              >
                {percentage}%
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between text-sm text-body">
              <span>
                Raised: <span className="font-bold text-brand">${raised.toLocaleString()}</span>
              </span>
              <span>
                Goal: <span className="font-bold text-brand">${goal.toLocaleString()}</span>
              </span>
            </div>
            <a
              href="#"
              className="mt-6 block w-[160px] rounded-[3px] bg-brand py-3 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-brand-dark"
            >
              Donate now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
