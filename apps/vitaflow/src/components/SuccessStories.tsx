const stories = [
  {
    name: 'Joy Smith',
    role: 'Client/Manager',
    quote:
      'After months of struggling with my weight, Vitaflow gave me the tools and support I needed. The personalized nutrition plan and workout routine fit perfectly into my busy schedule. I have lost 45 pounds and gained a whole new outlook on life.',
    avatar: 'https://picsum.photos/seed/vitaflow-story1/200/200',
  },
  {
    name: 'Rony Smith',
    role: 'Client/Entrepreneur',
    quote:
      'The health coaching sessions were incredibly insightful. My coach helped me understand the connection between stress, sleep, and nutrition. I feel more focused and productive than ever before.',
    avatar: 'https://picsum.photos/seed/vitaflow-story2/200/200',
  },
  {
    name: 'John Doe',
    role: 'Client',
    quote:
      'I was skeptical at first, but the results speak for themselves. In just 6 months, I went from barely finishing a workout to running my first 5K. The team at Vitaflow truly cares about their clients.',
    avatar: 'https://picsum.photos/seed/vitaflow-story3/200/200',
  },
]

export function SuccessStories() {
  return (
    <section className="bg-mist py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-primary-400">
            Stories
          </p>
          <h2 className="text-2xl font-bold text-ink">Successful Stories</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {stories.map((story) => (
            <div
              key={story.name}
              className="flex flex-col overflow-hidden rounded bg-white shadow-sm md:flex-row"
            >
              <img
                src={story.avatar}
                alt={story.name}
                className="h-48 w-full object-cover md:h-auto md:w-1/3"
              />
              <div className="flex flex-col justify-center p-6">
                <p className="mb-4 text-sm leading-relaxed text-smoke">{story.quote}</p>
                <div>
                  <h4 className="m-0 text-sm font-semibold text-ink">{story.name}</h4>
                  <span className="text-xs text-smoke">{story.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
