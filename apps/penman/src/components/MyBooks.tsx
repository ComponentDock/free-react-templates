const books = ['book-1', 'book-2', 'book-3', 'book-4', 'book-5', 'book-6', 'book-7', 'book-8']

export function MyBooks() {
  return (
    <section id="books" className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-widest text-primary-400">
            Projects
          </span>
          <h2 className="text-3xl font-bold text-ink">My Other Books</h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          {books.map((book) => (
            <div key={book} className="group relative overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${book}/400/500`}
                alt="Book cover"
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-lg font-bold text-white">You Are Your Only Limit</h3>
                <span className="text-sm text-gray-300">Romance</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
