interface BlogCategory {
  title: string
  imageSeed: string
}

const categories: BlogCategory[] = [
  { title: 'Travel Tips', imageSeed: 'lingo-blog-1' },
  { title: 'Language Hacks', imageSeed: 'lingo-blog-2' },
  { title: 'Cultures', imageSeed: 'lingo-blog-3' },
  { title: 'Fashion', imageSeed: 'lingo-blog-4' },
  { title: 'Cooking', imageSeed: 'lingo-blog-5' },
  { title: 'Hobbies', imageSeed: 'lingo-blog-6' },
]

function CategoryCard({ category }: { category: BlogCategory }) {
  return (
    <div className="relative overflow-hidden rounded group cursor-pointer">
      <img
        src={`https://picsum.photos/seed/${category.imageSeed}/350/200`}
        alt={category.title}
        className="w-full h-28 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <span className="text-white font-bold text-sm">{category.title}</span>
      </div>
    </div>
  )
}

export default function Blog() {
  return (
    <section id="blog" className="bg-light-bg py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Categories grid */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-8">From Our Blog</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {categories.map((cat) => (
                <CategoryCard key={cat.title} category={cat} />
              ))}
            </div>
          </div>

          {/* Featured post */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Featured</h2>
            <div className="bg-white rounded shadow-sm overflow-hidden">
              <img
                src="https://picsum.photos/seed/lingo-blog-featured/800/400"
                alt="Featured blog post"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <span className="text-xs text-brand-primary uppercase font-bold">Languages</span>
                <h3 className="font-bold text-lg mt-2 mb-3">
                  Why Learning a Second Language Changes How You Think
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  Research shows bilingual individuals develop enhanced cognitive abilities.
                  Discover how language learning reshapes your brain and opens new perspectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
