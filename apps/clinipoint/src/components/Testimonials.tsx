import { Stethoscope } from 'lucide-react'

export default function Testimonials() {
  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/clinipoint-test/1920/600')" }}
    >
      <div className="absolute inset-0 bg-black/80" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Stethoscope className="text-brand-accent mx-auto mb-4" size={40} />
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-heading)] text-white mb-4">
            Clients Testimonials
          </h2>
        </div>
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 md:p-12">
            <p className="text-white text-lg leading-relaxed mb-8 italic">
              &ldquo;The care and professionalism at Clinipoint Health Center is outstanding. From
              the moment I walked in, I felt welcomed and well taken care of. The doctors are
              knowledgeable and truly care about their patients. I highly recommend their services
              to anyone looking for quality healthcare.&rdquo;
            </p>
            <div className="flex items-center justify-center gap-4">
              <img
                src="https://picsum.photos/seed/clinipoint-test/80/80"
                alt="Julia Smith"
                className="w-14 h-14 rounded-full object-cover border-2 border-white/30"
              />
              <div className="text-left">
                <h5 className="text-white font-semibold font-[family-name:var(--font-heading)]">
                  Julia Smith
                </h5>
                <p className="text-white/70 text-sm">Patient</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
