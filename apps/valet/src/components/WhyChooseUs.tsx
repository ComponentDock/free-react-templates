import { CheckCircle, Clock, Scale, Target } from 'lucide-react'

const features = [
  { icon: Target, title: 'Get decided business results' },
  { icon: Clock, title: 'Save time with qualified assistants' },
  { icon: Scale, title: 'Work & Life Balance' },
  { icon: CheckCircle, title: 'Quick formulate your all plans' },
]

export function WhyChooseUs() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-12 md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src="https://picsum.photos/seed/valet-why/600/400"
              alt="Virtual assistant working"
              className="w-full rounded object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="mb-8 text-3xl font-bold">
              Top Reason Why We Need to Get Virtual Assistant
            </h2>
            <div className="space-y-6">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <f.icon className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600" />
                  <h3 className="text-lg font-semibold">{f.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
