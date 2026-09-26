import { Button } from '@free-react-templates/ui'

const slides = [
  {
    subtitle: 'Hello! This is Clydson',
    heading: 'Creative UI/UX Designer & Developer',
    imgSeed: 'clydson-hero-1',
  },
  {
    subtitle: 'We Design & Build Brands',
    heading: 'Hi, I am Clydson. This is my favorite work.',
    imgSeed: 'clydson-hero-2',
  },
]

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos/seed/clydson-hero-bg/1920/1080"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl">
          {slides.map((slide, i) => (
            <div key={i} className={i === 0 ? 'block' : 'hidden'}>
              <span className="text-brand text-sm uppercase tracking-widest font-medium">
                {slide.subtitle}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mt-4 mb-6 leading-tight">
                {slide.heading.split(' ').map((word, wi) =>
                  word === 'UI/UX' || word === 'Clydson' ? (
                    <span key={wi} className="text-brand">
                      {word}{' '}
                    </span>
                  ) : (
                    <span key={wi}>{word} </span>
                  ),
                )}
              </h1>
              <div className="flex gap-4">
                <Button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded">
                  Hire me
                </Button>
                <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded"
                >
                  Download CV
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
