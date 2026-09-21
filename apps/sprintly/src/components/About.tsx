import { CheckCircle } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="bg-dark-900 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="font-heading text-sm font-semibold uppercase tracking-widest text-brand-500">
              About Us
            </span>
            <h2 className="mt-2 font-heading text-4xl font-bold uppercase text-white">
              Welcome to Sprintly
            </h2>
            <p className="mt-4 text-dark-300">
              We are a premier fitness destination dedicated to helping you achieve your health and
              wellness goals. With state-of-the-art equipment and experienced trainers, Sprintly
              offers everything you need to transform your body and mind.
            </p>
            <p className="mt-4 text-dark-300">
              Whether you are a beginner or an experienced athlete, our diverse range of classes and
              programs cater to all fitness levels.
            </p>
            <ul className="mt-6 space-y-2">
              {['Expert Trainers', 'Modern Equipment', 'Flexible Schedules'].map((item) => (
                <li key={item} className="flex items-center gap-2 text-dark-200">
                  <CheckCircle className="h-5 w-5 text-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            className="h-80 rounded-lg bg-cover bg-center md:h-[400px]"
            style={{ backgroundImage: "url('https://picsum.photos/seed/sprintly-about/800/600')" }}
          />
        </div>
      </div>
    </section>
  )
}
