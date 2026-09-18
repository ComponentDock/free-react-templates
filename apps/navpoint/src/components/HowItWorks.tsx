import { ListChecks, Search, MapPin } from 'lucide-react'

const STEPS = [
  {
    num: '01.',
    title: 'Choose a category',
    text: 'Browse through our extensive list of categories to find exactly what you are looking for in your city.',
    icon: ListChecks,
  },
  {
    num: '02.',
    title: 'Find your pick',
    text: 'Explore the top-rated listings and read reviews from real customers to make the best choice.',
    icon: Search,
  },
  {
    num: '03.',
    title: 'Go & have fun',
    text: 'Head out to your chosen destination and enjoy a great experience curated just for you.',
    icon: MapPin,
  },
] as const

export function HowItWorks() {
  return (
    <section className="bg-bg-light py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-text-primary text-center mb-16">
          How Nav<span className="text-brand">point</span> works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="bg-white border-2 border-white hover:border-brand hover:shadow-[0_35px_43px_rgba(0,0,0,0.35)] transition-all text-center px-10 py-16"
            >
              <div className="text-brand font-bold text-lg mb-6">{step.num}</div>
              <div className="w-36 h-36 mx-auto rounded-full border-2 border-brand bg-bg-gold-light flex items-center justify-center mb-8">
                <step.icon className="w-16 h-16 text-brand" />
              </div>
              <h3 className="text-2xl font-semibold text-text-primary mb-4">{step.title}</h3>
              <p className="text-text-muted leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
