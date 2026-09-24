import { Calendar, MessageCircle } from 'lucide-react'

const articles = [
  {
    image: 'https://picsum.photos/seed/scoop-choice1/400/300',
    headline: 'Myspace Layouts The Missing Element Already',
    description: 'Planning to visit Las Vegas or any other vacational resort where casinos',
  },
  {
    image: 'https://picsum.photos/seed/scoop-choice2/400/300',
    headline: 'Understanding Modern Web Design Principles',
    description: 'The evolution of web design has brought us to new heights of creativity',
  },
  {
    image: 'https://picsum.photos/seed/scoop-choice3/400/300',
    headline: 'Top 10 Gadgets You Need This Year',
    description: 'Technology moves fast and these gadgets are leading the charge',
  },
  {
    image: 'https://picsum.photos/seed/scoop-choice4/400/300',
    headline: 'The Future of Mobile Applications',
    description: 'Mobile apps continue to reshape how we interact with technology daily',
  },
]

export function EditorsChoice() {
  return (
    <section className="py-16 md:py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-heading font-medium text-heading mb-8 border-l-4 border-brand pl-4">
          Editor&apos;s Choice
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, i) => (
            <div key={i} className="bg-white overflow-hidden">
              <img
                src={article.image}
                alt={article.headline}
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
                    {article.headline}
                  </a>
                </h3>
                <p className="text-xs text-body leading-relaxed">{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
