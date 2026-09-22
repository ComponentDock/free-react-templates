import { FacebookIcon, TwitterIcon, InstagramIcon } from './social-icons'

const trainers = [
  { name: 'Elizabeth Nelson', role: 'Owner / Head Coach', seed: 'zenbloom-trainer1' },
  { name: 'Scarlett Torres', role: 'Owner / Head Coach', seed: 'zenbloom-trainer2' },
  { name: 'Victoria Wright', role: 'Owner / Head Coach', seed: 'zenbloom-trainer3' },
  { name: 'Stella Perry', role: 'Owner / Head Coach', seed: 'zenbloom-trainer4' },
]

const socials = [
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Instagram', Icon: InstagramIcon },
]

export function Trainers() {
  return (
    <section id="trainers" className="bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="font-display text-xl text-sage-400">Yoga Trainer</p>
          <h2 className="mt-2 text-3xl font-bold">The Best Trainer For You</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map(({ name, role, seed }) => (
            <div key={name} className="overflow-hidden rounded-lg bg-white shadow-md">
              <div
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url('https://picsum.photos/seed/${seed}/400/500')` }}
              />
              <div className="p-5 text-center">
                <p className="text-xs uppercase tracking-wider text-gray-400">{role}</p>
                <h3 className="mt-1 text-lg font-semibold">
                  <a href="#" className="hover:text-sage-400">
                    {name}
                  </a>
                </h3>
                <div className="mt-3 flex justify-center gap-3">
                  {socials.map(({ label, Icon }) => (
                    <a
                      key={label}
                      href="#"
                      aria-label={`${name} ${label}`}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-sage-400 hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
