/* Flexly — fitness & gym landing template. Single-page recreation:
   navbar → hero slider → salmon services band → programs tabs →
   services cards → schedule tabs → about counter → testimonials →
   coaches → blog → contact form → gallery → black footer.
   Brand palette: salmon #fe9191 (primary) / #fe7878 (darker accent),
   black #000, light #f8f9fa bands, Nunito Sans type. */

export const BRAND = 'Flexly'

export interface NavLink {
  label: string
  href: string
  active?: boolean
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home-section', active: true },
  { label: 'Programs', href: '#programs-section' },
  { label: 'Services', href: '#services-section' },
  { label: 'Schedule', href: '#schedule-section' },
  { label: 'About', href: '#about-section' },
  { label: 'Coaches', href: '#coaches-section' },
  { label: 'Blog', href: '#blog-section' },
  { label: 'Contact', href: '#contact-section' },
] as const

export interface HeroSlide {
  tagline: string
  headline: string
  emphasis: string[]
  text: string
  photo: string
  vertical: string
}

const person = (id: number, w: number, h: number) => `https://picsum.photos/id/${id}/${w}/${h}`
const seed = (name: string, w: number, h: number) => `https://picsum.photos/seed/${name}/${w}/${h}`

export const HERO_SLIDES: HeroSlide[] = [
  {
    tagline: 'Welcome to the Club',
    headline: 'Get A Perfect Body Figure',
    emphasis: ['Perfect', 'Figure'],
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    photo: person(64, 1200, 1600),
    vertical: 'Strength',
  },
  {
    tagline: 'Welcome to Club',
    headline: 'Pain is Temporary But Glory is Forever',
    emphasis: ['Temporary', 'Forever'],
    text: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    photo: person(996, 1200, 1600),
    vertical: 'Workout',
  },
]

export const BAND_ITEMS = [
  {
    title: 'Free Lesson',
    text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    title: '35% Discount',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia.',
  },
  {
    title: 'Free Testing',
    text: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  },
]

export interface Program {
  label: string
  title: string
  text: string
}

export const PROGRAMS: Program[] = [
  {
    label: 'Fitness Program',
    title: 'Fitness Program',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
  },
  {
    label: 'Fit & Healthy',
    title: 'Fit & Healthy',
    text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.',
  },
  {
    label: 'Muscle Building',
    title: 'Muscle Building',
    text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
  },
  {
    label: 'Bikini & Body',
    title: 'Bikini & Body',
    text: 'One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
  },
  {
    label: 'Cardio Exercise',
    title: 'Cardio Exercise',
    text: 'The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks.',
  },
  {
    label: 'Power Yoga',
    title: 'Power Yoga',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    label: 'Aerobics Program',
    title: 'Aerobics Program',
    text: 'She packed her seven versalia, put her initial into the belt and made herself on the way.',
  },
  {
    label: 'Crossfit Program',
    title: 'Crossfit Program',
    text: 'Pityful a rethoric question ran over her cheek, then she continued her way.',
  },
]

export const SERVICE_CARDS = [
  {
    title: 'Make Your Body Harmonic',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia.',
  },
  {
    title: 'Weight Loss Program',
    text: 'Separated they live in Bookmarksgrove right at the coast of the Semantics.',
  },
  {
    title: 'Group Personal Trainings',
    text: 'A small river named Duden flows by their place and supplies it.',
  },
  {
    title: 'Optimal Diet Selection',
    text: 'Even the all-powerful Pointing has no control about the blind texts.',
  },
  {
    title: 'Individual Training Programs',
    text: 'One day however a small line of blind text by the name of Lorem Ipsum.',
  },
]

interface ScheduleRow {
  time: string
  title: string
  text: string
  coach: string
  position: string
  photo: string
}

export interface ScheduleDay {
  day: string
  program: string
  rows: ScheduleRow[]
}

export const SCHEDULE: ScheduleDay[] = [
  {
    day: 'Monday',
    program: 'Fitness Program',
    rows: [
      {
        time: '08:00AM - 10:00AM',
        title: 'Basic Exercise',
        text: 'Far far away, behind the word mountains, far from the countries Vokalia.',
        coach: 'Anthony Miller',
        position: 'Cardio Expert',
        photo: person(1027, 120, 120),
      },
      {
        time: '06:00PM - 08:00PM',
        title: 'Fitness Class',
        text: 'Separated they live in Bookmarksgrove right at the coast of the Semantics.',
        coach: 'Rachel Parker',
        position: 'Yoga Trainer',
        photo: person(64, 120, 120),
      },
    ],
  },
  {
    day: 'Tuesday',
    program: 'Crossfit Program',
    rows: [
      {
        time: '08:00AM - 10:00AM',
        title: 'Crossfit Basics',
        text: 'A small river named Duden flows by their place and supplies it.',
        coach: 'Lloyd Wilson',
        position: 'Crossfit Coach',
        photo: person(823, 120, 120),
      },
      {
        time: '06:00PM - 08:00PM',
        title: 'Body Building',
        text: 'It is a paradisematic country, in which roasted parts of sentences.',
        coach: 'Ian Smith',
        position: 'Body Builder',
        photo: person(996, 120, 120),
      },
    ],
  },
  {
    day: 'Wednesday',
    program: 'Aerobic Program',
    rows: [
      {
        time: '08:00AM - 10:00AM',
        title: 'Aerobic Dance',
        text: 'Even the all-powerful Pointing has no control about the blind texts.',
        coach: 'Alicia Henderson',
        position: 'Aerobic Instructor',
        photo: person(453, 120, 120),
      },
      {
        time: '06:00PM - 08:00PM',
        title: 'Step Aerobics',
        text: 'One day however a small line of blind text by the name of Lorem Ipsum.',
        coach: 'Rachel Parker',
        position: 'Yoga Trainer',
        photo: person(64, 120, 120),
      },
    ],
  },
  {
    day: 'Thursday',
    program: 'Yoga Classes',
    rows: [
      {
        time: '08:00AM - 10:00AM',
        title: 'Yoga Program',
        text: 'Far far away, behind the word mountains, far from the countries Vokalia.',
        coach: 'Rachel Parker',
        position: 'Yoga Trainer',
        photo: person(64, 120, 120),
      },
      {
        time: '06:00PM - 08:00PM',
        title: 'Meditation Class',
        text: 'Separated they live in Bookmarksgrove right at the coast of the Semantics.',
        coach: 'Alicia Henderson',
        position: 'Aerobic Instructor',
        photo: person(453, 120, 120),
      },
    ],
  },
  {
    day: 'Friday',
    program: 'Fitness Program',
    rows: [
      {
        time: '08:00AM - 10:00AM',
        title: 'Cardio Burn',
        text: 'A small river named Duden flows by their place and supplies it.',
        coach: 'Anthony Miller',
        position: 'Cardio Expert',
        photo: person(1027, 120, 120),
      },
      {
        time: '06:00PM - 08:00PM',
        title: 'Core Strength',
        text: 'It is a paradisematic country, in which roasted parts of sentences.',
        coach: 'Lloyd Wilson',
        position: 'Crossfit Coach',
        photo: person(823, 120, 120),
      },
    ],
  },
  {
    day: 'Saturday',
    program: 'Yoga Classes',
    rows: [
      {
        time: '09:00AM - 11:00AM',
        title: 'Morning Yoga',
        text: 'Even the all-powerful Pointing has no control about the blind texts.',
        coach: 'Rachel Parker',
        position: 'Yoga Trainer',
        photo: person(64, 120, 120),
      },
      {
        time: '04:00PM - 06:00PM',
        title: 'Power Yoga',
        text: 'One day however a small line of blind text by the name of Lorem Ipsum.',
        coach: 'Alicia Henderson',
        position: 'Aerobic Instructor',
        photo: person(453, 120, 120),
      },
    ],
  },
  {
    day: 'Sunday',
    program: 'Crossfit Program',
    rows: [
      {
        time: '09:00AM - 11:00AM',
        title: 'Crossfit Challenge',
        text: 'Far far away, behind the word mountains, far from the countries Vokalia.',
        coach: 'Lloyd Wilson',
        position: 'Crossfit Coach',
        photo: person(823, 120, 120),
      },
      {
        time: '04:00PM - 06:00PM',
        title: 'Open Gym',
        text: 'Separated they live in Bookmarksgrove right at the coast of the Semantics.',
        coach: 'Ian Smith',
        position: 'Body Builder',
        photo: person(996, 120, 120),
      },
    ],
  },
]

export const TESTIMONIALS = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'David Smith',
    position: 'Artist',
    photo: person(1027, 130, 130),
  },
  {
    quote:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    name: 'Jane Doe',
    position: 'Designer',
    photo: person(64, 130, 130),
  },
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    name: 'John Wilson',
    position: 'Photographer',
    photo: person(823, 130, 130),
  },
  {
    quote:
      'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    name: 'Emily Clark',
    position: 'Writer',
    photo: person(996, 130, 130),
  },
  {
    quote:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    name: 'Michael Brown',
    position: 'Musician',
    photo: person(453, 130, 130),
  },
]

export const COACHES = [
  { name: 'Lloyd Wilson', position: 'Crossfit Coach', photo: person(823, 120, 120) },
  { name: 'Rachel Parker', position: 'Yoga Trainer', photo: person(64, 120, 120) },
  { name: 'Ian Smith', position: 'Body Builder', photo: person(996, 120, 120) },
  { name: 'Alicia Henderson', position: 'Aerobic Instructor', photo: person(453, 120, 120) },
]

export const BLOG_POSTS = [
  {
    title: 'Why Lead Generation is Key for Business Growth',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    day: '04',
    month: 'April',
    year: '2019',
    image: seed('flexly-blog1', 800, 600),
    comments: 3,
  },
  {
    title: 'The Art of Recovery After a Hard Workout',
    text: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    day: '12',
    month: 'May',
    year: '2019',
    image: seed('flexly-blog2', 800, 600),
    comments: 5,
  },
  {
    title: 'Nutrition Tips for Building Lean Muscle',
    text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    day: '21',
    month: 'June',
    year: '2019',
    image: seed('flexly-blog3', 800, 600),
    comments: 7,
  },
]

export const GALLERY = [
  seed('flexly-gallery1', 600, 600),
  seed('flexly-gallery2', 600, 600),
  seed('flexly-gallery3', 600, 600),
  seed('flexly-gallery4', 600, 600),
]

export const FOOTER_LINKS = [
  { label: 'Home', href: '#home-section' },
  { label: 'About', href: '#about-section' },
  { label: 'Services', href: '#services-section' },
  { label: 'Blog', href: '#blog-section' },
  { label: 'Contact', href: '#contact-section' },
]

export const FOOTER_SERVICES = [
  'Fitness Program',
  'Weight Loss Program',
  'Muscle Building',
  'Cardio Exercise',
  'Crossfit Program',
]

/* Contact info — phone is kept as a spaced display string and the tel:
   href is computed at runtime (never a literal tel: URI in source). */
export const CONTACT = {
  address: '198 West 21th Street, Suite 721 New York NY 10016',
  phone: '+1 235 1235 98',
  email: 'info@flexly.example',
}

export const SOCIALS: { key: SocialKey; label: string; href: string }[] = [
  { key: 'facebook', label: 'Facebook', href: '#' },
  { key: 'twitter', label: 'Twitter', href: '#' },
  { key: 'instagram', label: 'Instagram', href: '#' },
]

export type SocialKey = 'facebook' | 'twitter' | 'instagram'

export const emailHref = (email: string) => `mailto:${email}`
export const phoneHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '')}`
