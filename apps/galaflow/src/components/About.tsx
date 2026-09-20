import { MapPin, Clock } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-16 text-center text-4xl font-bold font-[family-name:var(--font-heading)] uppercase text-[#302072] md:text-5xl">
          About the Conference
        </h2>

        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/seed/galaflow-about/600/400"
              alt="Conference venue"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <span className="mb-4 inline-block text-sm font-medium font-[family-name:var(--font-heading)] uppercase tracking-wider text-[#140C40]">
              Fully Innovative Conference
            </span>
            <p className="mb-6 font-[family-name:var(--font-sans)] text-[#79709D] leading-relaxed">
              Join us for an extraordinary gathering of industry leaders, innovators, and
              visionaries. Our conference brings together the brightest minds to share insights,
              explore emerging trends, and shape the future of technology and business.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FDE449]">
                  <MapPin size={18} className="text-[#302072]" />
                </div>
                <span className="font-[family-name:var(--font-sans)] text-sm text-[#79709D]">
                  San Francisco Convention Center, CA
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FDE449]">
                  <Clock size={18} className="text-[#302072]" />
                </div>
                <span className="font-[family-name:var(--font-sans)] text-sm text-[#79709D]">
                  12 Jan – 20 Jan, 9:00 AM – 6:00 PM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
