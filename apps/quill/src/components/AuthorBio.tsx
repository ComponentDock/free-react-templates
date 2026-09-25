import { Mail, Phone, MapPin } from 'lucide-react'

export function AuthorBio() {
  return (
    <section id="author" aria-label="Author biography" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/seed/quill-author/600/700"
              alt="Author portrait"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <span className="font-display text-sm font-semibold uppercase tracking-widest text-accent-400">
              About The Author
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-navy sm:text-4xl">
              Eleanor Quinn
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Eleanor Quinn is an award-winning author known for her atmospheric storytelling and
              vivid characters. With over a decade of experience crafting narratives that bridge the
              gap between literary fiction and page-turning suspense, she has captivated readers
              around the globe.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              When she isn&apos;t writing, Eleanor can be found exploring hiking trails, browsing
              used bookshops, or sipping coffee while people-watching from her favorite corner café.
            </p>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <MapPin className="h-4 w-4 text-accent-400" />
                Portland, Oregon
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <Phone className="h-4 w-4 text-accent-400" />
                +1 (555) 234-5678
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-500">
                <Mail className="h-4 w-4 text-accent-400" />
                eleanor@quillbooks.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
