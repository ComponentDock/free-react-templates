import { Button } from '@free-react-templates/ui'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[600px] flex items-center bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(135deg, rgba(0,28,100,0.85) 21%, rgba(26,115,232,0.3) 100%), url(https://picsum.photos/seed/medprime-hero/1920/800)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white py-20">
        <span className="inline-block text-sm font-medium uppercase tracking-wider mb-4 opacity-90">
          The best medical center
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] mb-6 leading-tight">
          Bringing health
          <br />
          to life for the whole family.
        </h1>
        <Button
          className="inline-block border-2 border-white text-white px-8 py-3 rounded font-semibold text-sm hover:bg-white hover:text-brand-primary transition-colors"
          onClick={() => {
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Discover More
        </Button>
      </div>
    </section>
  )
}
