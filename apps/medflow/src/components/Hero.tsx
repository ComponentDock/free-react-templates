import { Button } from '@free-react-templates/ui'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          'linear-gradient(135deg, rgba(0,28,100,0.8) 21%, rgba(0,53,187,0.3) 100%), url(https://picsum.photos/seed/medflow-hero/1920/800)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <span className="inline-block text-sm font-medium uppercase tracking-wider mb-4 opacity-90">
          The best medical center
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-[family-name:var(--font-heading)] mb-6 leading-tight">
          Bringing health
          <br />
          to life for the whole family.
        </h1>
        <Button
          className="inline-block bg-white text-brand-primary px-8 py-3 rounded font-semibold text-sm hover:bg-gray-100 transition-colors"
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
