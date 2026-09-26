import { Check } from 'lucide-react'

const skillsLeft = ['Optio eveniet ex laborum', 'Inventore sapiente tenetur', 'Ipsam aliquam esse']

const skillsRight = [
  'Voluptate qui reiciendis',
  'Harum mollitia asperiores',
  'Quibusdam omnis voluptates',
]

export function Biography() {
  return (
    <section id="section-bio" className="bg-dark py-20 px-4 relative">
      <div className="absolute top-0 left-0 w-[100px] h-1 bg-brand" />
      <div className="max-w-3xl mx-auto">
        <h2 className="text-white text-4xl font-bold uppercase tracking-wider mb-12 font-heading">
          Biography
        </h2>

        <div className="mb-8">
          <img
            src="https://picsum.photos/seed/lumier-bio/800/500"
            alt="Photographer portrait"
            className="w-full md:w-1/2 rounded object-cover"
            loading="lazy"
          />
        </div>

        <div>
          <h3 className="text-white text-2xl font-bold mb-4 font-heading">Hi, I'm Jed</h3>
          <p className="text-white/70 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor aperiam a velit. Harum
            eligendi quod reiciendis quos ullam libero est dolor, corporis dolores assumenda,
            delectus, quidem voluptatibus dolorum temporibus enim!
          </p>
          <p className="text-white/70 mb-4">
            Neque facilis soluta, accusantium quaerat, adipisci porro animi, hic fugiat id vero
            placeat dolorem accusamus sapiente odio consequatur debitis beatae eius quos alias. In
            recusandae magnam quis ipsum, asperiores mollitia!
          </p>

          <h3 className="text-white text-xl font-bold mt-8 mb-4 font-heading">
            Photographer for 10 years
          </h3>
          <p className="text-white/70 mb-6">
            Tempore repudiandae rerum numquam iste, quibusdam omnis voluptates quaerat veniam neque
            odit sit vel dolores. Optio eveniet ex laborum similique inventore sapiente tenetur.
            Ipsam aliquam esse voluptate qui reiciendis. Harum.
          </p>

          <div className="flex flex-col md:flex-row gap-8">
            <ul className="space-y-3">
              {skillsLeft.map((skill) => (
                <li key={skill} className="flex items-start gap-2 text-white/70">
                  <Check className="w-5 h-5 text-check mt-0.5 shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              {skillsRight.map((skill) => (
                <li key={skill} className="flex items-start gap-2 text-white/70">
                  <Check className="w-5 h-5 text-check mt-0.5 shrink-0" />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
