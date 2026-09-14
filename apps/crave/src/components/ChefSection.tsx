const chefs = [
  {
    name: 'Daniel Larose',
    title: 'Executive Chef',
    img: 'https://picsum.photos/seed/crave-chef1/400/500',
  },
  {
    name: 'Sofia Marchetti',
    title: 'Pastry Chef',
    img: 'https://picsum.photos/seed/crave-chef2/400/500',
  },
  {
    name: 'Marcus Chen',
    title: 'Sous Chef',
    img: 'https://picsum.photos/seed/crave-chef3/400/500',
  },
]

const socialIcons = [
  { name: 'Facebook', path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z' },
  {
    name: 'Twitter',
    path: 'M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z',
  },
  { name: 'Instagram', path: 'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01' },
]

export function ChefSection() {
  return (
    <section id="chef" className="py-16 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h4 className="mb-3 font-heading text-2xl font-semibold text-brand">Our Chef</h4>
        <h2 className="mb-12 font-heading text-3xl font-bold text-heading sm:text-4xl lg:text-5xl">
          Talent &amp; experience member
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {chefs.map((chef) => (
            <div key={chef.name} className="group relative overflow-hidden rounded-lg">
              <img
                src={chef.img}
                alt={chef.name}
                className="h-80 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              {/* Info footer */}
              <div className="absolute inset-x-0 bottom-0 bg-white px-4 py-3 text-center">
                <h4 className="font-heading text-base font-bold text-heading">{chef.name}</h4>
                <p className="text-sm text-gray-500">{chef.title}</p>
              </div>
              {/* Hover overlay with social */}
              <div className="absolute inset-0 flex items-center justify-end bg-[rgba(2,1,15,0.5)] px-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <ul className="flex flex-col gap-2">
                  {socialIcons.map((icon) => (
                    <li key={icon.name}>
                      <a
                        href="#"
                        aria-label={icon.name}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-heading transition-colors hover:bg-brand hover:text-white"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d={icon.path} />
                        </svg>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
