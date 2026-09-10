import { Smartphone, Download } from 'lucide-react'

export function MobileAppCta() {
  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/jobboard-mobile/1920/500')" }}
    >
      <div className="absolute inset-0 bg-lime-400/90" />
      <div className="relative z-10 text-center max-w-3xl mx-auto px-4">
        <Smartphone size={48} className="text-white mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get The Mobile Apps</h2>
        <p className="text-white/70 text-lg mb-8">
          Search and apply for jobs on the go with our mobile application
        </p>
        <div className="flex items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            <Download size={18} />
            App Store
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
          >
            <Download size={18} />
            Google Play
          </a>
        </div>
      </div>
    </section>
  )
}
