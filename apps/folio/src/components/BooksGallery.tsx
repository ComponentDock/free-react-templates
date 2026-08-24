const BOOKS = [
  { title: 'Read This If You Want To Take Great Photographs', category: 'Novels', seed: 'book1' },
  { title: 'The Art of Seeing Clearly', category: 'Art', seed: 'book2' },
  { title: 'Melodies in Motion', category: 'Music', seed: 'book3' },
  { title: 'Designing for the Web', category: 'Web Design', seed: 'book4' },
  { title: 'Stories from the Edge', category: 'Novels', seed: 'book5' },
  { title: 'Colors of the Mind', category: 'Art', seed: 'book6' },
  { title: 'Rhythm & Reason', category: 'Music', seed: 'book7' },
  { title: 'Pixels & Purpose', category: 'Web Design', seed: 'book8' },
]

/**
 * 4-column grid of book cards with image overlays and category labels.
 * Matches the original Mellisa "Our Books" gallery section.
 */
export function BooksGallery() {
  return (
    <section id="books" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-brand">
            Our Books
          </p>
          <h2 className="font-heading text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
            Books that I&apos;ve Written
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BOOKS.map((book) => (
            <div key={book.seed} className="group relative overflow-hidden rounded-xl">
              <img
                src={`https://picsum.photos/seed/folio-${book.seed}/400/500`}
                alt={book.title}
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5">
                <h3 className="mb-1 text-lg font-bold text-white">{book.title}</h3>
                <span className="text-sm font-medium text-white/70">{book.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
