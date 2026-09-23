export function AboutAuthor() {
  return (
    <section id="about" className="flex flex-col lg:flex-row">
      <div className="lg:w-1/2">
        <img
          src="https://picsum.photos/seed/bookcraft-author/800/600"
          alt="Author portrait"
          className="h-80 w-full object-cover lg:h-full"
          loading="lazy"
        />
      </div>
      <div className="flex items-center bg-white px-8 py-12 sm:px-12 lg:w-1/2 lg:py-20">
        <div className="max-w-lg">
          <h2 className="mb-6 font-[Oswald] text-2xl font-bold text-gray-900 sm:text-3xl">
            Hello, I&apos;m the Author
          </h2>
          <p className="mb-4 text-gray-500">
            Writing has always been my passion. After years of exploration and discovery, I&apos;m
            thrilled to share this story with the world. Every chapter was crafted with care,
            drawing from real experiences and vivid imagination.
          </p>
          <p className="mb-4 text-gray-500">
            This book represents not just a story, but a journey of self-discovery and resilience. I
            hope it inspires readers to embrace their own adventures and find beauty in the
            unexpected.
          </p>
          <p className="mb-8 text-gray-500">
            When I&apos;m not writing, you can find me exploring new places, reading voraciously,
            and connecting with fellow book lovers around the globe.
          </p>
          <div className="border-t pt-6">
            <p className="text-base font-bold text-gray-900">Jane Smith</p>
            <p className="text-sm text-gray-400">Book Author &amp; Publisher</p>
          </div>
        </div>
      </div>
    </section>
  )
}
