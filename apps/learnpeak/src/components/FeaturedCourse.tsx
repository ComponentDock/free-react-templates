import { Badge } from '@free-react-templates/ui'

export function FeaturedCourse() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Badge
              variant="default"
              className="bg-brand text-white text-xs font-semibold uppercase px-3 py-1"
            >
              Featured
            </Badge>
            <span className="text-muted-light text-sm">
              Price: <span className="text-brand font-bold">$35</span>
            </span>
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4">
            Online Literature Course
          </h3>
          <p className="text-muted leading-relaxed mb-6">
            Maecenas rutrum viverra sapien sed fermentum. Morbi tempor odio eget lacus tempus
            pulvinar. Donec vehicula efficitur nibh, in pretium nulla interdum non. Suspendisse
            tincidunt magna eget massa hendrerit efficitur.
          </p>
          <div className="flex items-center gap-3">
            <img
              src="https://picsum.photos/seed/learnpeak-author/48/48"
              alt=""
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <span className="text-sm text-muted">By</span>{' '}
              <span className="font-semibold text-dark">James S. Morrison</span>
            </div>
            <span className="ml-auto text-sm text-muted-light">
              <span className="font-bold text-dark">352</span> Sales
            </span>
          </div>
        </div>
        <div className="relative h-[400px] lg:h-[450px] overflow-hidden">
          <img
            src="https://picsum.photos/seed/learnpeak-featured/800/500"
            alt="Featured course"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
        </div>
      </div>
    </section>
  )
}
