import { Button } from '@free-react-templates/ui'
import { Play } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="home"
      className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden"
    >
      <img
        src="https://picsum.photos/seed/makely-hero/1920/1080"
        alt="Makely hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          We Love To Build <span className="text-primary">Web Apps</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200">
          We are a creative agency that focuses on building exceptional digital experiences that
          transform brands and grow businesses.
        </p>
        <Button className="rounded-full px-8 py-3 bg-primary text-white hover:bg-primary-dark inline-flex items-center gap-2 text-lg">
          <Play size={18} />
          Watch Video
        </Button>
      </div>
    </section>
  )
}
