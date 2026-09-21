import { CheckCircle } from 'lucide-react'

const benefits = [
  'Loans with quick approval.',
  'Customize a loan based on the amount.',
  'Good credit profile and you have built your loan.',
  'We provide online instant cash loans.',
]

export function About() {
  return (
    <section id="about" className="bg-white py-20 lg:py-28">
      <div className="container mx-auto flex flex-col items-center gap-10 px-4 lg:flex-row lg:px-8">
        <div className="flex-1">
          <img
            src="https://picsum.photos/seed/loanworks-about/600/400"
            alt="About Loanworks"
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex-1">
          <div className="mb-3 h-[3px] w-15 rounded bg-brand" />
          <h2 className="mb-4 text-3xl font-normal text-navy lg:text-[44px]">Why Choose Us?</h2>
          <p className="mb-6 text-body-text">
            Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture
            placing drawing. Apartments frequently or motionless on reasonable.
          </p>
          <ul className="mb-6 space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3 text-body-text">
                <CheckCircle size={18} className="shrink-0 text-brand" />
                {b}
              </li>
            ))}
          </ul>
          <a
            href="#hero"
            className="inline-block rounded bg-brand px-6 py-3 text-sm font-medium text-white transition hover:bg-brand-dark"
          >
            About Us
          </a>
        </div>
      </div>
    </section>
  )
}
