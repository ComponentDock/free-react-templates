import { FacebookIcon, TwitterIcon, InstagramIcon } from './BrandIcons'

interface Instructor {
  name: string
  bio: string
  imageSeed: string
}

const instructors: Instructor[] = [
  {
    name: 'Maria Garcia',
    bio: 'Native Spanish speaker with 10 years of teaching experience across Latin America and Europe.',
    imageSeed: 'lingo-instructor-1',
  },
  {
    name: 'Takeshi Yamada',
    bio: 'Former business consultant turned language coach, specializing in professional Japanese.',
    imageSeed: 'lingo-instructor-2',
  },
  {
    name: 'Sophie Laurent',
    bio: 'Passionate about making French accessible to everyone through immersive storytelling.',
    imageSeed: 'lingo-instructor-3',
  },
]

function InstructorCard({ instructor }: { instructor: Instructor }) {
  return (
    <div className="text-center">
      <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden group">
        <img
          src={`https://picsum.photos/seed/${instructor.imageSeed}/200/200`}
          alt={instructor.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <a
            href="#"
            aria-label={`Facebook of ${instructor.name}`}
            className="text-white hover:text-brand-accent"
          >
            <FacebookIcon className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label={`Twitter of ${instructor.name}`}
            className="text-white hover:text-brand-accent"
          >
            <TwitterIcon className="w-5 h-5" />
          </a>
          <a
            href="#"
            aria-label={`Instagram of ${instructor.name}`}
            className="text-white hover:text-brand-accent"
          >
            <InstagramIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
      <h3 className="font-bold text-lg">{instructor.name}</h3>
      <p className="text-brand-primary text-sm mb-2">Teacher</p>
      <p className="text-text-muted text-sm max-w-xs mx-auto">{instructor.bio}</p>
    </div>
  )
}

export default function Instructors() {
  return (
    <section id="instructors" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor.name} instructor={instructor} />
          ))}
        </div>
      </div>
    </section>
  )
}
