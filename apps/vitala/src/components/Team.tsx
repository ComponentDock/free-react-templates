import { FacebookIcon, TwitterIcon, LinkedinIcon } from './social-icons'

const members = [
  {
    name: 'Dr. Ethel Davis',
    role: 'Chief of Cardiology',
    bio: 'Board-certified cardiologist with over 15 years of experience in interventional cardiology.',
    image: 'https://picsum.photos/seed/vitala-team1/300/300',
  },
  {
    name: 'Dr. Rodney Cooper',
    role: 'Head of Neurology',
    bio: 'Specializing in complex neurological conditions with a focus on patient-centered care.',
    image: 'https://picsum.photos/seed/vitala-team2/300/300',
  },
  {
    name: 'Dr. Dane Walker',
    role: 'Orthopedic Surgeon',
    bio: 'Expert in minimally invasive orthopedic procedures and sports medicine rehabilitation.',
    image: 'https://picsum.photos/seed/vitala-team3/300/300',
  },
  {
    name: 'Dr. Lena Keller',
    role: 'Pediatric Specialist',
    bio: 'Dedicated to providing compassionate healthcare for children of all ages.',
    image: 'https://picsum.photos/seed/vitala-team4/300/300',
  },
]

const socialIcons = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'LinkedIn', Icon: LinkedinIcon },
]

export function Team() {
  return (
    <section id="team" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-gray-900">Meet Our Doctors</h2>
          <p className="mx-auto max-w-lg text-gray-500">
            Our team of experienced physicians and specialists are committed to providing the
            highest quality healthcare.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {members.map((member) => (
            <div key={member.name} className="text-center">
              <div className="mx-auto mb-4 h-48 w-48 overflow-hidden rounded-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="mb-3 flex justify-center gap-2">
                {socialIcons.map(({ label, Icon }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-sky-100 text-sky-400 transition-colors hover:bg-sky-400 hover:text-white"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
              <h4 className="font-heading text-lg font-bold text-gray-900">{member.name}</h4>
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-sky-400">
                {member.role}
              </p>
              <p className="text-sm leading-relaxed text-gray-500">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
