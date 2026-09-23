const books = [
  { title: 'The Great Adventure', genre: 'Fiction', seed: 'book1' },
  { title: 'Digital Future', genre: 'Technology', seed: 'book2' },
  { title: 'Ocean Dreams', genre: 'Romance', seed: 'book3' },
  { title: 'Mountain Path', genre: 'Travel', seed: 'book4' },
  { title: 'City Lights', genre: 'Mystery', seed: 'book5' },
  { title: 'Wild Spirit', genre: 'Nature', seed: 'book6' },
  { title: 'Star Crossing', genre: 'Sci-Fi', seed: 'book7' },
  { title: 'Golden Hour', genre: 'Poetry', seed: 'book8' },
] as const

export function MyBooks() {
  return (
    <section id="books" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-bold uppercase tracking-widest text-brand">My Books</p>
          <h2 className="text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            My Other Books
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {books.map((book) => (
            <div key={book.seed} className="group relative overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${book.seed}/300/400`}
                alt={book.title}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-72"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="mb-2 text-lg font-bold text-white">{book.title}</h3>
                <span className="rounded-full bg-brand px-3 py-1 text-xs font-medium text-white">
                  {book.genre}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
