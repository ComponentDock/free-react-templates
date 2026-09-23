import { FacebookIcon, TwitterIcon, LinkedinIcon } from './social-icons'

const members = [
  { name: 'Ethel Davis', role: 'Managing Director (Sales)', seed: 'shave-t1' },
  { name: 'Rodney Cooper', role: 'Creative Art Director (Project)', seed: 'shave-t2' },
  { name: 'Dora Walker', role: 'Senior Core Developer', seed: 'shave-t3' },
  { name: 'Lena Keller', role: 'Creative Content Developer', seed: 'shave-t4' },
]

export function Team() {
  return (
    <section id="team" className="bg-section-light py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Experienced Mentor Team</h2>
          <p className="mt-2 text-gray-500">Meet the professionals behind Shave.</p>
        </div>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => (
            <div key={member.name} className="text-center">
              <div className="group relative overflow-hidden rounded-lg">
                <img
                  src={`https://picsum.photos/seed/${member.seed}/300/350`}
                  alt={member.name}
                  className="h-72 w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center gap-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <a
                    href="#"
                    aria-label={`${member.name} on Facebook`}
                    className="text-white hover:text-pink-300"
                  >
                    <FacebookIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    aria-label={`${member.name} on Twitter`}
                    className="text-white hover:text-pink-300"
                  >
                    <TwitterIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    aria-label={`${member.name} on LinkedIn`}
                    className="text-white hover:text-pink-300"
                  >
                    <LinkedinIcon className="h-5 w-5" />
                  </a>
                </div>
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{member.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
