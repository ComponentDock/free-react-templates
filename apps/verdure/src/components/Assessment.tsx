import { Heart, Users, CheckCircle } from 'lucide-react'

const features = [
  {
    icon: Heart,
    title: 'We Deal With Love',
    text: 'Passion drives every project we undertake, ensuring your garden receives the care it deserves.',
  },
  {
    icon: Users,
    title: 'We Are Professionals',
    text: 'Our experienced team brings expertise and precision to every landscaping task.',
  },
  {
    icon: CheckCircle,
    title: 'We Deliver Our Best Services',
    text: 'Quality results that exceed expectations, delivered on time and within budget.',
  },
]

export function Assessment() {
  return (
    <section className="flex flex-col lg:flex-row">
      <div className="relative w-full lg:w-1/2 h-80 lg:h-auto min-h-[500px]">
        <img
          src="https://picsum.photos/seed/verdure-assess/800/600"
          alt="Assessment"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="w-full lg:w-1/2 bg-white px-8 py-16 lg:px-16 lg:py-20">
        <span className="text-verdure-400 text-sm uppercase tracking-widest font-medium">
          Verdure
        </span>
        <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-10">Assessment</h2>

        <div className="space-y-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-5">
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-verdure-50 flex items-center justify-center">
                <feature.icon className="w-7 h-7 text-verdure-400" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 mt-1">{feature.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
