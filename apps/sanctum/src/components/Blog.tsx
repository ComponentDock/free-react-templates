import { MessageCircle } from 'lucide-react'
import { blog } from '../data'

export function Blog() {
  return (
    <section id="blog" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-ink">Recent Blog</h2>
          <p className="mx-auto mt-4 max-w-2xl text-body">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {blog.map((b) => (
            <div key={b.title} className="overflow-hidden rounded-lg bg-white shadow-sm">
              <img src={b.image} alt={b.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <div className="mb-3 flex items-center gap-4 text-xs text-body">
                  <span>{b.date}</span>
                  <span>{b.author}</span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="h-3 w-3" />
                    {b.comments}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-ink">{b.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
