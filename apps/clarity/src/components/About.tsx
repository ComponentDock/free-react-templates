import { TrendingUp, Users } from 'lucide-react'

const features = [
  {
    icon: TrendingUp,
    title: 'Means of Living',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: Users,
    title: 'Transform Lives',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
]

export function About() {
  return (
    <section id="about-section" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">Welcome To My Website</h2>
            <p className="mb-4 text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem, temporibus accusamus
              placeat recusandae laudantium id quia obcaecati explicabo ea commodi.
            </p>
            <p className="mb-4 text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro neque, delectus labore
              incidunt voluptate possimus? Necessitatibus amet nobis sapiente recusandae illo omnis
              quam quis corrupti. Eveniet veniam velit sunt pariatur.
            </p>
            <p className="text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae est molestias illum
              illo ducimus nisi molestiae amet quae, dolor fugiat perferendis facere quibusdam
              repudiandae, ut modi obcaecati.
            </p>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title}>
                  <feature.icon className="mb-4 h-12 w-12 text-primary" aria-hidden="true" />
                  <h4 className="mb-3 text-lg font-bold text-gray-900">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
