import { Calendar, MessageCircle } from 'lucide-react'

const smallCards = [
  {
    image: 'https://picsum.photos/seed/scoop-tf1/200/150',
    headline: 'Technical Support 10 With Dealing With',
  },
  {
    image: 'https://picsum.photos/seed/scoop-tf2/200/150',
    headline: 'Technical Support 10 With Dealing With',
  },
  {
    image: 'https://picsum.photos/seed/scoop-tf3/200/150',
    headline: 'Technical Support 10 With Dealing With',
  },
  {
    image: 'https://picsum.photos/seed/scoop-tf4/200/150',
    headline: 'Technical Support 10 With Dealing With',
  },
]

const featuredCard = {
  image: 'https://picsum.photos/seed/scoop-tf5/600/400',
  headline: 'Dealing With Technical Support With 10 Useful Tips',
  description:
    "It won't be a bigger problem to find one video game lover in your neighbor. Since the introduction of Virtual Game, it has been achieving great heights",
}

function SmallMeta() {
  return (
    <div className="flex items-center gap-2 text-xs text-body mt-1">
      <span className="flex items-center gap-1">
        <Calendar className="w-3 h-3" /> March 14, 2018
      </span>
      <span className="flex items-center gap-1">
        <MessageCircle className="w-3 h-3" /> 05
      </span>
    </div>
  )
}

export function TravelFood() {
  return (
    <div className="mt-12">
      <h2 className="text-xl font-heading font-medium text-heading mb-6 border-l-4 border-brand pl-4">
        Travel and food
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="grid grid-cols-2 gap-4">
          {smallCards.map((card, i) => (
            <div key={i} className="bg-white overflow-hidden">
              <img
                src={card.image}
                alt={card.headline}
                className="w-full h-28 object-cover"
                loading="lazy"
              />
              <div className="p-3">
                <h3 className="text-xs font-heading font-medium text-heading leading-snug">
                  <a href="#" className="hover:text-brand transition-colors">
                    {card.headline}
                  </a>
                </h3>
                <SmallMeta />
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white overflow-hidden">
          <img
            src={featuredCard.image}
            alt={featuredCard.headline}
            className="w-full h-64 object-cover"
            loading="lazy"
          />
          <div className="p-5">
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
            <h3 className="text-base font-heading font-medium text-heading mb-2 leading-snug">
              <a href="#" className="hover:text-brand transition-colors">
                {featuredCard.headline}
              </a>
            </h3>
            <p className="text-xs text-body leading-relaxed">{featuredCard.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
