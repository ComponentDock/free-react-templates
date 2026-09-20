import { GraduationCap, Building2 } from 'lucide-react'

const programs = [
  {
    title: 'We Are Excellent In Education',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.',
    stats: ['22,931 Yearly Graduates', '150 Universities Worldwide'],
    image: 'https://picsum.photos/seed/classroom-p1/600/400',
    reverse: false,
  },
  {
    title: 'Strive for Excellent',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.',
    stats: ['22,931 Yearly Graduates', '150 Universities Worldwide'],
    image: 'https://picsum.photos/seed/classroom-p2/600/400',
    reverse: true,
  },
  {
    title: 'Education is life',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem maxime nam porro possimus fugiat quo molestiae illo.',
    stats: ['22,931 Yearly Graduates', '150 Universities Worldwide'],
    image: 'https://picsum.photos/seed/classroom-p3/600/400',
    reverse: false,
  },
]

export function Programs() {
  return (
    <section id="programs" className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-gray-900 mb-4">Our Programs</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam repellat aut neque!
            Doloribus sunt non aut reiciendis.
          </p>
        </div>

        {programs.map((prog, i) => (
          <div
            key={i}
            className={`flex flex-col ${prog.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center mb-16 last:mb-0`}
          >
            <div className="flex-1">
              <img src={prog.image} alt={prog.title} className="w-full rounded-lg" loading="lazy" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-black text-gray-900 mb-4">{prog.title}</h3>
              <p className="text-gray-500 mb-6">{prog.desc}</p>
              <div className="space-y-4">
                {prog.stats.map((stat, j) => (
                  <div key={j} className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-500">
                      {j % 2 === 0 ? <GraduationCap size={24} /> : <Building2 size={24} />}
                    </div>
                    <h4 className="font-bold text-gray-900">{stat}</h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
