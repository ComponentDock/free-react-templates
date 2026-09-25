const features = [
  {
    title: 'Award Achievements',
    text: 'Recognized by leading literary critics and awarded multiple times for its compelling narrative and unique storytelling approach.',
  },
  {
    title: 'Read On Any Devices',
    text: 'Available in digital format across all your devices — phone, tablet, or desktop. Your story travels with you.',
  },
  {
    title: 'Very High Resolution',
    text: 'Beautifully typeset with attention to every detail, ensuring a premium reading experience from first page to last.',
  },
]

export function AboutBook() {
  return (
    <section id="about" aria-label="About the book" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/seed/prose-about/600/500"
              alt="Author reading in a cozy setting"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-navy sm:text-4xl">
              About The Book
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              A captivating tale that weaves mystery with heart. Follow the journey of an unexpected
              detective as they unravel clues hidden in plain sight, leading to discoveries that
              change everything.
            </p>
            <div className="mt-8 space-y-6">
              {features.map((f) => (
                <div key={f.title}>
                  <h3 className="font-display text-lg font-semibold text-navy">{f.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-gray-500">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
