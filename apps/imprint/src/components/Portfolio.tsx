import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Midway',
    category: 'Web Design',
    date: '12/06/2019',
    image: 'https://picsum.photos/seed/imprint-work1/800/600',
    imageLeft: true,
  },
  {
    title: 'Workplace Office',
    category: 'Writing',
    date: '12/06/2019',
    image: 'https://picsum.photos/seed/imprint-work2/800/600',
    imageLeft: false,
  },
  {
    title: 'Jacket Leather',
    category: 'Illustration',
    date: '12/06/2019',
    image: 'https://picsum.photos/seed/imprint-work3/800/600',
    imageLeft: true,
  },
  {
    title: 'Topless',
    category: 'Application',
    date: '12/06/2019',
    image: 'https://picsum.photos/seed/imprint-work4/800/600',
    imageLeft: false,
  },
  {
    title: 'Fashion Style',
    category: 'Writing',
    date: '12/06/2019',
    image: 'https://picsum.photos/seed/imprint-work5/800/600',
    imageLeft: true,
  },
  {
    title: 'Prickly',
    category: 'Illustration',
    date: '12/06/2019',
    image: 'https://picsum.photos/seed/imprint-work6/800/600',
    imageLeft: false,
  },
]

function PortfolioEntry({
  title,
  category,
  date,
  image,
  imageLeft,
}: {
  title: string
  category: string
  date: string
  image: string
  imageLeft: boolean
}) {
  return (
    <div className={`flex flex-col ${imageLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Image */}
      <div className="h-72 w-full md:h-[450px] md:w-5/12">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>

      {/* Text */}
      <div className="flex items-center bg-white px-6 py-10 md:w-7/12 md:px-12 lg:px-16">
        <div>
          <span className="mb-2 block font-serif text-sm italic text-gray-400">
            {category} {'{'}
            {date}
            {'}'}
          </span>
          <h3 className="mb-4 text-2xl font-bold text-dark-900">
            <a href="#" className="transition-colors hover:text-gold-400">
              {title}
            </a>
          </h3>
          <p className="mb-6 text-gray-500 leading-relaxed">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 border border-gold-400 px-6 py-2 text-sm font-semibold text-gold-400 transition-colors hover:bg-gold-400 hover:text-dark-900"
          >
            View Portfolio
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </div>
  )
}

export function Portfolio() {
  return (
    <section id="work" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-dark-900 sm:text-4xl">
          Latest &amp; <span className="text-gold-400">Greatest</span>
        </h2>

        <div className="space-y-0">
          {projects.map((project) => (
            <PortfolioEntry key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}
