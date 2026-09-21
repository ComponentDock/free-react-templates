import { Camera } from 'lucide-react'
import { INSTAGRAM_POSTS } from '../data'

/* InstagramPosts recreated from the source template's instagram-post-section:
   a 4-column image grid with a hover overlay inviting users to follow. */

export function InstagramPosts() {
  return (
    <section id="instagram" className="bg-body-bg py-20" aria-label="Instagram posts">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="section-title font-heading text-lg font-bold uppercase italic tracking-widest text-text-primary">
          <span className="relative pl-5 before:absolute before:left-0 before:top-1 before:h-4 before:w-2.5 before:-skew-x-[15deg] before:bg-brand before:content-['']">
            Instagram Posts
          </span>
        </h2>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {INSTAGRAM_POSTS.map((url, index) => (
            <a
              key={url}
              href="#"
              className="group relative block aspect-square overflow-hidden"
              aria-label={`Instagram post ${index + 1}`}
            >
              <img
                src={url}
                alt=""
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-brand/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex flex-col items-center gap-2 text-text-primary">
                  <Camera className="h-6 w-6" aria-hidden="true" />
                  <span className="text-xs font-bold uppercase tracking-wider">Follow</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
