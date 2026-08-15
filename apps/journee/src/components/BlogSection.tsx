import { Calendar, Heart, MessageCircle } from 'lucide-react'
import { blogCards, blogImages, blogParagraph, blogTitle } from '../data'

export function BlogSection() {
  return (
    <section id="blog-section" className="bg-paper py-36 lg:py-44">
      <div className="mx-auto max-w-[1320px] px-6 lg:px-10">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="font-heading text-4xl font-medium text-ink">{blogTitle}</h2>
          <p className="mt-6 text-[15px] leading-[1.8] text-muted">{blogParagraph}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {blogCards.map((card, index) => (
            <article key={index} className="bg-white">
              <img src={blogImages[index]!} alt="" className="h-56 w-full object-cover" />
              <div className="px-6 py-8">
                <h3 className="font-heading text-2xl font-medium text-black">{card.title}</h3>
                <p className="mt-4 text-[15px] leading-[1.8] text-muted">{card.paragraph}</p>
                <ul className="mt-8 flex gap-6">
                  <li className="flex items-center gap-2 text-sm text-muted">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    {card.date}
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted">
                    <Heart className="h-4 w-4" aria-hidden="true" />
                    {card.likes}
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted">
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    {card.comments}
                  </li>
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
