import { ArrowRight } from 'lucide-react'

const services = [
  { title: 'Brand Strategy', desc: 'Comprehensive brand development and positioning.' },
  { title: 'Web Design', desc: 'Custom website design with modern aesthetics.' },
  { title: 'Mobile Apps', desc: 'Cross-platform mobile application development.' },
  { title: 'SEO Marketing', desc: 'Search engine optimization and digital marketing.' },
  { title: 'Analytics', desc: 'Data-driven insights and performance tracking.' },
  { title: 'Content Creation', desc: 'Engaging content for all digital channels.' },
  { title: 'Social Media', desc: 'Social media management and campaign execution.' },
  { title: 'Consulting', desc: 'Strategic business and technology consulting.' },
]

export function Services() {
  return (
    <section
      id="generic"
      className="py-20 text-white"
      style={{ background: 'linear-gradient(0deg, #e66587 0%, #f09458 100%)' }}
    >
      <div className="mx-auto max-w-[69%] px-4">
        <div className="text-center mb-12">
          <p className="uppercase text-xs tracking-[0.2em] mb-2 font-light opacity-90">
            Re-imagining the way
          </p>
          <h2 className="text-3xl font-semibold">Our Offered Services</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group relative overflow-hidden">
              <div className="aspect-[4/3] bg-white/20 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1 px-4 py-2 bg-transparent border border-white text-white text-sm hover:bg-white hover:text-[--color-brand] transition-colors"
                    >
                      Get Started <ArrowRight size={14} />
                    </a>
                  </span>
                </div>
              </div>
              <div className="pt-4 pb-2">
                <h6 className="text-white font-medium text-sm">{s.title}</h6>
                <p className="text-white/80 text-xs mt-1 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
