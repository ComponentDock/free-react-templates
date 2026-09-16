import { MapPin, Calendar } from 'lucide-react'

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function TwitterIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

function LinkedinIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const events = [
  { name: 'Growth Summit 2024', location: 'New York, USA', date: 'March 15, 2024' },
  { name: 'Life Coaching Workshop', location: 'London, UK', date: 'April 22, 2024' },
  { name: 'Mindfulness Conference', location: 'Sydney, Australia', date: 'May 10, 2024' },
  { name: 'Leadership Retreat', location: 'Barcelona, Spain', date: 'June 5, 2024' },
]

const team = [
  {
    name: 'John Smith',
    role: 'Founder & Lead Coach',
    avatar: 'https://picsum.photos/seed/northstar-team-1/200/200',
  },
  {
    name: 'Sarah Johnson',
    role: 'Senior Coach',
    avatar: 'https://picsum.photos/seed/northstar-team-2/200/200',
  },
  {
    name: 'Michael Brown',
    role: 'Wellness Expert',
    avatar: 'https://picsum.photos/seed/northstar-team-3/200/200',
  },
  {
    name: 'Emily Davis',
    role: 'Mindfulness Trainer',
    avatar: 'https://picsum.photos/seed/northstar-team-4/200/200',
  },
]

export function About() {
  return (
    <section id="about" className="container mx-auto px-4 py-16" aria-label="About">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Left Column */}
        <div>
          <h2 className="mb-6 text-3xl font-bold text-[#212529] md:text-4xl font-heading">
            Hey there, I'm John The Founder
          </h2>
          <p className="mb-4 text-[#333333] leading-relaxed">
            Welcome to Northstar, where we believe every person has the potential to achieve
            extraordinary things. With over 15 years of experience in personal development and life
            coaching, I've helped thousands of people transform their lives and reach their fullest
            potential.
          </p>
          <p className="mb-4 text-[#333333] leading-relaxed">
            Our coaching methodology combines ancient wisdom with modern science, creating a unique
            approach that addresses the whole person — mind, body, and spirit. We don't just talk
            about change; we create actionable plans that lead to real, lasting transformation.
          </p>
          <p className="mb-8 text-[#333333] leading-relaxed">
            Whether you're looking to advance your career, improve your relationships, or find
            greater purpose and fulfillment in life, we're here to guide you every step of the way.
            Your journey to a better you starts here.
          </p>
          <button className="rounded bg-primary px-6 py-3 text-sm font-bold uppercase text-white transition-colors hover:bg-[#0265c5]">
            Learn More
          </button>
        </div>

        {/* Right Column */}
        <div>
          <h3 className="mb-6 text-2xl font-bold text-[#212529]">Upcoming Speaking Gigs</h3>
          <ul className="space-y-4">
            {events.map((event) => (
              <li
                key={event.name}
                className="flex items-start gap-3 rounded border border-gray-200 p-4"
              >
                <Calendar size={20} className="mt-0.5 shrink-0 text-primary" />
                <div>
                  <h4 className="font-bold text-[#212529]">{event.name}</h4>
                  <div className="flex items-center gap-2 text-sm text-[#737373]">
                    <MapPin size={14} />
                    <span>{event.location}</span>
                    <span>•</span>
                    <span>{event.date}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Team Section */}
      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member) => (
          <div key={member.name} className="text-center">
            <img
              src={member.avatar}
              alt={member.name}
              className="mx-auto mb-4 h-32 w-32 rounded-full object-cover"
            />
            <h4 className="mb-1 text-lg font-bold text-[#212529]">{member.name}</h4>
            <p className="mb-3 text-sm text-[#737373]">{member.role}</p>
            <div className="flex justify-center gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="text-[#737373] transition-colors hover:text-primary"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-[#737373] transition-colors hover:text-primary"
              >
                <TwitterIcon />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-[#737373] transition-colors hover:text-primary"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-[#737373] transition-colors hover:text-primary"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
