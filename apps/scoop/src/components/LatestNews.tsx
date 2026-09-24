import { Calendar, MessageCircle } from 'lucide-react'

const latestNews = [
  {
    image: 'https://picsum.photos/seed/scoop-ln1/200/150',
    headline: 'DFacts Why Inkjet Printing Is Very Appealing Compared To Ordinary Printing',
    description:
      "Having a baby can be a nerve wracking experience for new parents not the nine months of pregnancy, I'm talking about",
  },
  {
    image: 'https://picsum.photos/seed/scoop-ln2/200/150',
    headline: 'How To Choose The Best Laptop For Your Needs',
    description:
      'Finding the right laptop can be overwhelming with so many options available in the market today',
  },
  {
    image: 'https://picsum.photos/seed/scoop-ln3/200/150',
    headline: 'Smart Living: IoT Devices That Simplify Your Home',
    description: 'The Internet of Things is transforming our homes into smart living spaces',
  },
  {
    image: 'https://picsum.photos/seed/scoop-ln4/200/150',
    headline: 'Digital Marketing Trends Every Business Should Know',
    description: 'Stay ahead of the competition with these essential digital marketing strategies',
  },
]

function ArticleMeta() {
  return (
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
  )
}

export function LatestNews() {
  return (
    <div>
      <h2 className="text-xl font-heading font-medium text-heading mb-6 border-l-4 border-brand pl-4">
        Latest News
      </h2>
      <div className="space-y-6">
        {latestNews.map((item, i) => (
          <div key={i} className="flex gap-4">
            <img
              src={item.image}
              alt={item.headline}
              className="w-28 h-20 md:w-36 md:h-24 object-cover flex-shrink-0"
              loading="lazy"
            />
            <div>
              <ArticleMeta />
              <h3 className="text-sm font-heading font-medium text-heading mb-1 leading-snug">
                <a href="#" className="hover:text-brand transition-colors">
                  {item.headline}
                </a>
              </h3>
              <p className="text-xs text-body leading-relaxed">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
