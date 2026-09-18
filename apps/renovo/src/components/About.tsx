import { Wrench, Headphones } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20 bg-[#f9f9ff] relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-semibold text-[#222] mb-4 leading-snug">
              We can fix all types of computer &amp; mobiles
            </h2>
            <p className="text-[#777] mb-8 leading-relaxed">
              Our team of certified technicians brings years of experience to every repair. From
              cracked screens to complex motherboard issues, we handle it all with precision and
              care.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <Wrench className="text-[#988fff] mb-3" size={32} />
                <h4 className="font-semibold text-[#222] mb-2">Expert Services</h4>
                <p className="text-sm text-[#777]">
                  Certified technicians with years of experience in hardware and software repair.
                </p>
              </div>
              <div>
                <Headphones className="text-[#988fff] mb-3" size={32} />
                <h4 className="font-semibold text-[#222] mb-2">Great Support</h4>
                <p className="text-sm text-[#777]">
                  Reach us anytime — our support team is available 7 days a week.
                </p>
              </div>
            </div>
          </div>
          <div
            className="h-80 lg:h-[450px] bg-cover bg-center rounded-lg"
            style={{ backgroundImage: "url('https://picsum.photos/seed/renovo-about/800/600')" }}
            role="img"
            aria-label="Repair technician at work"
          />
        </div>
      </div>
    </section>
  )
}
