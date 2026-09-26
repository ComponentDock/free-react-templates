const features = [
  {
    title: 'Strategy',
    description:
      'We craft strategic plans that align with your business goals and drive measurable results.',
  },
  {
    title: 'Web Development',
    description: 'Full-stack development with modern technologies for scalable web applications.',
  },
  {
    title: 'Art Direction',
    description: 'Visual storytelling and creative direction that captures your brand essence.',
  },
  {
    title: 'Copywriting',
    description: 'Compelling content that engages your audience and drives conversions.',
  },
]

const featureIcons = [
  'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
  'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
  'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
]

export function Features() {
  return (
    <section className="bg-dark py-16 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="w-full lg:w-2/5">
            <img
              src="https://picsum.photos/seed/forgehub-about/600/500"
              alt="About ForgeHub"
              className="w-full rounded-lg"
              loading="lazy"
            />
          </div>
          <div className="w-full grid grid-cols-1 gap-8 sm:grid-cols-2 lg:w-3/5">
            {features.map((f, i) => (
              <div key={f.title}>
                <div className="mb-3 flex items-center gap-3">
                  <svg
                    className="h-6 w-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={featureIcons[i]}
                    />
                  </svg>
                  <h3 className="text-lg font-bold">{f.title}</h3>
                </div>
                <p className="text-sm text-gray-400">{f.description}</p>
                <a href="#" className="mt-2 inline-block text-sm text-primary hover:underline">
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
