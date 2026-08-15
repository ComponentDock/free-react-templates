import { Button } from '@free-react-templates/ui'
import { aboutImage, stats } from '../data'

export function About() {
  return (
    <section id="about" className="bg-soft py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
        <div className="relative">
          <img
            src={aboutImage}
            alt="Bright and modern dental clinic interior"
            className="h-[400px] w-full rounded-2xl object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            A Clinic Built Around Your Comfort
          </h2>
          <p className="mt-4 text-lg text-charcoal/70">
            From your first check-up to a full smile makeover, our dentists take the time to listen,
            explain, and treat you with genuine care.
          </p>
          <p className="mt-4 text-lg text-charcoal/70">
            Every treatment room is equipped with modern technology, and every appointment ends with
            a clear plan — so you always know what comes next and why.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-mint">{stat.value}</p>
                <p className="mt-1 text-sm font-medium uppercase tracking-wide text-charcoal/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
          <Button className="mt-8 rounded-full bg-mint px-8 font-semibold hover:bg-mint-dark">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
