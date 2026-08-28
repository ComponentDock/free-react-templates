import { Play } from 'lucide-react'

export function Video() {
  return (
    <section
      className="flex min-h-[400px] items-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/tillman-video/1920/600)',
      }}
    >
      <div className="mx-auto w-full max-w-7xl px-4 lg:px-8">
        <div className="flex justify-center">
          <button
            type="button"
            className="flex h-20 w-20 items-center justify-center rounded-full bg-leaf-400 text-white shadow-lg transition-transform hover:scale-110"
            aria-label="Play video"
          >
            <Play className="h-8 w-8 ml-1" fill="white" />
          </button>
        </div>
      </div>
    </section>
  )
}
