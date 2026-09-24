import { Button } from '@free-react-templates/ui'

export default function Hero() {
  return (
    <section
      className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/clinipoint-hero/1920/800')" }}
    >
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, rgba(0,28,100,0.85), rgba(0,53,187,0.3))' }}
      />
      <div className="relative z-10 text-center text-white px-4">
        <p className="text-lg mb-4 opacity-90">We are professionals</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] mb-4 leading-tight">
          We provide top medical services
        </h1>
        <p className="text-lg mb-8 opacity-90">More than 30 professionals</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="bg-white text-brand-primary px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
            onClick={() => {
              document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Make an Appointment
          </Button>
          <Button className="border-2 border-brand-primary text-white px-8 py-3 rounded font-semibold hover:bg-brand-primary/20 transition-colors">
            Read More
          </Button>
        </div>
      </div>
    </section>
  )
}
