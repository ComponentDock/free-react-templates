const trainings = [
  {
    title: 'Personal Development',
    image: 'https://picsum.photos/seed/northstar-training-1/600/400',
    description:
      'Discover your strengths, overcome limiting beliefs, and create a clear roadmap for your personal growth journey. Our personalized coaching sessions help you unlock your true potential.',
  },
  {
    title: 'Career Advancement',
    image: 'https://picsum.photos/seed/northstar-training-2/600/400',
    description:
      'Navigate career transitions, develop leadership skills, and build the professional life you desire. Learn strategies for success that have been proven by thousands of professionals worldwide.',
  },
  {
    title: 'Wellness & Balance',
    image: 'https://picsum.photos/seed/northstar-training-3/600/400',
    description:
      'Achieve harmony between work and life through mindfulness practices, stress management techniques, and holistic wellness strategies designed for the modern professional.',
  },
]

export function Training() {
  return (
    <section id="training" className="bg-[#eff1f3] py-16" aria-label="Training">
      <div className="container mx-auto px-4">
        <h2 className="mb-4 text-center text-3xl font-bold text-[#212529] md:text-4xl font-heading">
          Our Training
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-[#737373]">
          We offer comprehensive training programs designed to help you achieve your personal and
          professional goals.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {trainings.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded bg-white shadow-md transition-shadow hover:shadow-lg"
            >
              <img src={item.image} alt={item.title} className="h-52 w-full object-cover" />
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-[#212529]">{item.title}</h3>
                <p className="text-[#737373] leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
