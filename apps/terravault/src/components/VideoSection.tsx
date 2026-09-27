import { Play } from 'lucide-react'

export function VideoSection() {
  return (
    <section className="relative h-[400px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/terravault-video/1920/800)' }}
      />
      <div className="absolute inset-0 bg-[#19191a]/70" />
      <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center lg:px-8">
        <p className="text-sm font-medium text-[#2cbdb8]">Find The Perfect</p>
        <h2 className="mt-2 font-heading text-3xl font-bold text-white md:text-4xl">
          Real Estate Agent Near You
        </h2>
        <button
          className="mt-8 flex h-16 w-16 items-center justify-center rounded-full bg-[#2cbdb8] text-white transition-colors hover:bg-[#24a6a1]"
          aria-label="Play video"
        >
          <Play size={24} fill="white" />
        </button>
      </div>
    </section>
  )
}
