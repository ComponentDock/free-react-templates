import { Video, Camera, FolderHeart, Lightbulb } from 'lucide-react'

const services = [
  {
    icon: Video,
    title: 'Video Footages',
    description:
      'Suspendisse dictum enim sit amet libero feugiat. Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst.',
  },
  {
    icon: Camera,
    title: 'Photo Shootings',
    description:
      'Congue magna at finibus. In hac habitasse platea dictumst. Curabitur rhoncus auctor eleifend. Fusce venenatis diam urna, eu pharetra arcu.',
  },
  {
    icon: FolderHeart,
    title: 'Photo Albums',
    description:
      'Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada feugiat. Praesent malesuada congue magna at finibus.',
  },
  {
    icon: Lightbulb,
    title: 'Original Ideas',
    description:
      'Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst. Curabitur rhoncus auctor eleifend. Fusce venenatis diam urna.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-beacon-light-bg py-[130px]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-start gap-12 lg:flex-row">
          {/* Left: title + text */}
          <div className="lg:w-4/12">
            <span className="mb-1 block text-xs uppercase tracking-wide text-beacon-body">
              Amazing studio
            </span>
            <h2 className="mb-8 text-2xl font-bold uppercase tracking-[6px] text-beacon-heading">
              see What we offer
            </h2>
            <p className="mb-8 leading-relaxed">
              Integer nec bibendum lacus. Suspendisse dictum enim sit amet libero malesuada feugiat.
              Praesent malesuada congue magna at finibus. In hac habitasse platea dictumst.
            </p>
            <a
              href="#"
              className="inline-block min-w-[135px] border-y-2 border-beacon-heading bg-transparent px-4 py-4 text-center text-xs font-semibold uppercase tracking-wide text-beacon-heading transition-colors hover:bg-beacon-heading hover:text-white"
            >
              Read More
            </a>
          </div>

          {/* Right: 2x2 grid */}
          <div className="lg:w-8/12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {services.map((svc) => {
                const Icon = svc.icon
                return (
                  <div key={svc.title} className="flex gap-4">
                    <Icon
                      size={32}
                      className="mt-1 shrink-0 text-beacon-accent"
                      aria-hidden="true"
                    />
                    <div>
                      <h4 className="mb-2 text-base font-semibold uppercase text-beacon-heading">
                        {svc.title}
                      </h4>
                      <p className="text-sm leading-relaxed">{svc.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
