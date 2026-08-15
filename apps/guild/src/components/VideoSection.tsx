import { Play } from 'lucide-react'
import { playVideoLabel, videoImage, videoLogoImage, videoTitle, videoUrl } from '../data'

export function VideoSection() {
  return (
    <section id="video" className="bg-video py-[70px] text-center">
      <div className="mx-auto max-w-[1200px] px-4">
        <img src={videoLogoImage} alt="" className="mx-auto h-10 w-[120px] object-contain" />
        <p className="mt-4 text-lg font-medium text-white">{videoTitle}</p>
        <div className="relative mx-auto mt-9 max-w-5xl">
          <img src={videoImage} alt="" loading="lazy" className="w-full object-cover" />
          <a
            href={videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={playVideoLabel}
            className="absolute top-1/2 left-1/2 flex h-[56px] w-[100px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-video-play text-white transition-opacity hover:opacity-90"
          >
            <Play className="h-[26px] w-[26px]" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
