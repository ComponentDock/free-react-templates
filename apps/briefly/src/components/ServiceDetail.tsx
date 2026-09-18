export function ServiceDetail() {
  return (
    <section className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary-400">
            Get to Know Project Estimate?
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Get to Know Project Estimate?
          </h2>
          <p className="mt-6 leading-relaxed text-smoke dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt
            labore dolore magna aliqua enim minim veniam quis nostrud.
          </p>
          <blockquote className="mt-8 border-l-4 border-primary-400 pl-4 text-sm leading-relaxed text-smoke dark:text-gray-400">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor
              incididunt labore dolore magna aliqua enim minim veniam quis nostrud.
            </p>
            <footer className="mt-3 flex items-center gap-3">
              <img
                src="https://picsum.photos/seed/briefly-svc-author/48/48"
                alt=""
                className="h-10 w-10 rounded-full"
                loading="lazy"
              />
              <div>
                <cite className="not-italic font-semibold text-ink dark:text-white">
                  Marvel Maison
                </cite>
                <p className="text-xs text-smoke dark:text-gray-500">Chief Executive, Amazon</p>
              </div>
            </footer>
          </blockquote>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img
              src="https://picsum.photos/seed/briefly-sd1/300/200"
              alt="Service image"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
            <img
              src="https://picsum.photos/seed/briefly-sd2/300/200"
              alt="Service image"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>
          <div className="space-y-4">
            <img
              src="https://picsum.photos/seed/briefly-sd3/300/200"
              alt="Service image"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
            <img
              src="https://picsum.photos/seed/briefly-sd4/300/200"
              alt="Service image"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
