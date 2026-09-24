import { Calendar, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const featuredArticle = {
  image: 'https://picsum.photos/seed/scoop-pop1/400/300',
  headline: 'Dealing With Technical Support With 10 Useful Tips',
  description:
    "It won't be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual Game, it has been achieving great heights",
}

const carouselItems = [
  {
    image: 'https://picsum.photos/seed/scoop-pop2/200/150',
    headline: 'Dealing With Technical Support 10 With Useful Tips Around',
  },
  {
    image: 'https://picsum.photos/seed/scoop-pop3/200/150',
    headline: 'An Ugly Myspace Profile Will Sure Ruin Your Reputation',
  },
  {
    image: 'https://picsum.photos/seed/scoop-pop4/200/150',
    headline: 'Dealing With Technical Support 10 With Useful Tips Around',
  },
  {
    image: 'https://picsum.photos/seed/scoop-pop5/200/150',
    headline: 'An Ugly Myspace Profile Will Sure Ruin Your Reputation',
  },
  {
    image: 'https://picsum.photos/seed/scoop-pop6/200/150',
    headline: 'Dealing With Technical Support 10 With Useful Tips Around',
  },
  {
    image: 'https://picsum.photos/seed/scoop-pop7/200/150',
    headline: 'An Ugly Myspace Profile Will Sure Ruin Your Reputation',
  },
]

export function MostPopularNews() {
  const [page, setPage] = useState(0)
  const perPage = 2
  const totalPages = Math.ceil(carouselItems.length / perPage)
  const visible = carouselItems.slice(page * perPage, page * perPage + perPage)

  return (
    <div className="mb-8">
      <h2 className="text-xl font-heading font-medium text-heading mb-6 border-l-4 border-brand pl-4">
        Most Popular News
      </h2>
      <div className="bg-white overflow-hidden mb-4">
        <img
          src={featuredArticle.image}
          alt={featuredArticle.headline}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <div className="p-4">
          <div className="flex items-center gap-3 text-xs text-body mb-2">
            <span className="bg-brand text-white px-3 py-0.5 rounded-full font-heading font-medium">
              Gadgets
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" /> March 14, 2018
            </span>
            <span className="flex items-center gap-1">
              <MessageCircle className="w-3 h-3" /> 05
            </span>
          </div>
          <h3 className="text-sm font-heading font-medium text-heading mb-1 leading-snug">
            <a href="#" className="hover:text-brand transition-colors">
              {featuredArticle.headline}
            </a>
          </h3>
          <p className="text-xs text-body leading-relaxed">{featuredArticle.description}</p>
        </div>
      </div>
      <div className="relative">
        <div className="grid grid-cols-2 gap-3">
          {visible.map((item, i) => (
            <div key={i} className="bg-white overflow-hidden">
              <img
                src={item.image}
                alt={item.headline}
                className="w-full h-20 object-cover"
                loading="lazy"
              />
              <div className="p-2">
                <h4 className="text-xs font-heading font-medium text-heading leading-snug">
                  <a href="#" className="hover:text-brand transition-colors">
                    {item.headline}
                  </a>
                </h4>
                <div className="flex items-center gap-2 text-[10px] text-body mt-1">
                  <span className="flex items-center gap-0.5">
                    <Calendar className="w-2.5 h-2.5" /> Mar 14
                  </span>
                  <span className="flex items-center gap-0.5">
                    <MessageCircle className="w-2.5 h-2.5" /> 05
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-3">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="p-1 text-gray-400 hover:text-brand disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page >= totalPages - 1}
            className="p-1 text-gray-400 hover:text-brand disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
