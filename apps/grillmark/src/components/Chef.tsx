export function Chef() {
  return (
    <section id="chef" className="bg-white py-24 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Chef image */}
          <div className="relative">
            <img
              src="https://picsum.photos/seed/grillmark-chef-main/600/700"
              alt="Our master chef at the grill"
              className="rounded shadow-lg"
            />
            {/* Overlapping thumbnails */}
            <div className="absolute -bottom-6 left-4 flex gap-3 sm:-bottom-8 sm:left-8">
              {[
                { seed: 'grillmark-thumb-1', alt: 'Grilled ribeye steak' },
                { seed: 'grillmark-thumb-2', alt: 'Tender filet mignon' },
                { seed: 'grillmark-thumb-3', alt: 'Classic T-bone cut' },
                { seed: 'grillmark-thumb-4', alt: 'Wagyu beef special' },
              ].map((thumb) => (
                <img
                  key={thumb.seed}
                  src={`https://picsum.photos/seed/${thumb.seed}/120/120`}
                  alt={thumb.alt}
                  className="h-16 w-16 rounded-full border-4 border-white object-cover shadow-md sm:h-20 sm:w-20"
                />
              ))}
            </div>
          </div>

          {/* Chef text */}
          <div>
            <span className="font-display text-sm tracking-wider text-brand">Our Chef</span>
            <h2 className="mt-3 font-display text-3xl text-heading sm:text-4xl dark:text-white">
              Meet the Master Behind the Grill
            </h2>
            <p className="mt-6 leading-relaxed text-body dark:text-gray-400">
              With over 20 years of culinary experience, our head chef brings passion and precision
              to every dish. Trained in the finest kitchens of Paris and New York, he combines
              classical technique with bold, modern flavors.
            </p>
            <p className="mt-4 leading-relaxed text-body dark:text-gray-400">
              His philosophy is simple: use the best ingredients, treat them with respect, and let
              the flavors speak for themselves.
            </p>
            <div className="mt-8">
              <p className="font-display text-2xl text-heading dark:text-white">Walter White</p>
              <p className="text-sm text-brand">Head Chef & Founder</p>
            </div>
            {/* Signature line */}
            <div className="mt-6">
              <svg
                width="150"
                height="40"
                viewBox="0 0 150 40"
                className="text-heading dark:text-white"
                aria-hidden="true"
              >
                <path
                  d="M5 30 Q 25 5, 50 25 T 100 20 T 145 15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
