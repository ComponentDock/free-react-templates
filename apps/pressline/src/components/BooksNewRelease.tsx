import { Star } from 'lucide-react'

const books = [
  {
    title: 'You Are Your Only Limit',
    author: 'John Nathan Muller',
    price: 12.0,
    salePrice: 8.0,
    seed: 'pressline-book1',
    rating: 4,
  },
  {
    title: '101 Essays That Will Change Your Mind',
    author: 'John Nathan Muller',
    price: 12.0,
    salePrice: null,
    seed: 'pressline-book2',
    rating: 5,
  },
  {
    title: 'Your Soul Is A River',
    author: 'John Nathan Muller',
    price: 12.0,
    salePrice: null,
    seed: 'pressline-book3',
    rating: 4,
  },
  {
    title: 'All The Letters I Should Have Sent',
    author: 'John Nathan Muller',
    price: 9.0,
    salePrice: null,
    seed: 'pressline-book4',
    rating: 3,
  },
  {
    title: 'Happy',
    author: 'John Nathan Muller',
    price: 15.0,
    salePrice: 10.0,
    seed: 'pressline-book5',
    rating: 5,
  },
] as const

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

function BookCard({ title, author, price, salePrice, seed, rating }: (typeof books)[number]) {
  return (
    <div className="group overflow-hidden rounded bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="overflow-hidden">
        <img
          src={`https://picsum.photos/seed/${seed}/300/400`}
          alt={`Cover of ${title}`}
          className="h-56 w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-4">
        <StarRating rating={rating} />
        <h3 className="mt-2 font-display text-base font-bold text-ink">{title}</h3>
        <p className="mt-1 text-xs text-smoke">By {author}</p>
        <div className="mt-2 flex items-center gap-2">
          {salePrice !== null ? (
            <>
              <span className="text-sm font-semibold text-primary-300">
                ${salePrice.toFixed(2)}
              </span>
              <span className="text-xs text-smoke line-through">${price.toFixed(2)}</span>
            </>
          ) : (
            <span className="text-sm font-semibold text-primary-300">${price.toFixed(2)}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export function BooksNewRelease() {
  return (
    <section id="books" className="bg-surface-alt py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl font-bold text-ink">Books New Release</h2>
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <BookCard key={book.title} {...book} />
          ))}
        </div>
      </div>
    </section>
  )
}
