/* Shred — fitness club landing template. Single-page recreation:
   navbar → split hero → coral promo band → programs tabs → services →
   training schedule tabs → counter band → testimonials → coaches →
   blog → contact form → map → gallery → black footer.
   Brand palette: coral #fe9191 (primary) / #fe7878 (darker accent),
   black #000, #f8f9fa light bands, #ffdddd schedule band, Nunito Sans. */

export const BRAND = 'Shred'

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
  eyebrow: string
  headline: string
  paragraph: string
  photo: string
  keyword: string
}

const person = (id: number, w: number, h: number) => `https://picsum.photos/id/${id}/${w}/${h}`
const seed = (name: string, w: number, h: number) => `https://picsum.photos/seed/${name}/${w}/${h}`

export const HERO_SLIDES: HeroSlide[] = [
  {
    eyebrow: 'Welcome to the Club',
    headline: 'Get A Perfect Body Figure',
    paragraph:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    photo: person(64, 1200, 1600),
    keyword: 'Strength',
  },
  {
    eyebrow: 'Welcome to Club',
    headline: 'Pain is Temporary But Glory is Forever',
    paragraph:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    photo: person(996, 1200, 1600),
    keyword: 'Workout',
  },
]

export interface BandItem {
  icon: string
  title: string
  text: string
}

export const BAND_ITEMS: BandItem[] = [
  {
    icon: 'dumbbell',
    title: 'Free Lesson',
    text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: 'badge-percent',
    title: '35% Discount',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    icon: 'footprints',
    title: 'Free Testing',
    text: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
  },
]

export interface Program {
  icon: string
  label: string
  title: string
  paragraphs: [string, string]
}

export const PROGRAMS: Program[] = [
  {
    icon: 'dumbbell',
    label: 'Fitness Program',
    title: 'Fitness Program',
    paragraphs: [
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
      'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    ],
  },
  {
    icon: 'heart-pulse',
    label: 'Fit & Healthy',
    title: 'Fit & Healthy',
    paragraphs: [
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave.',
      'She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains.',
    ],
  },
  {
    icon: 'activity',
    label: 'Muscle Building',
    title: 'Muscle Building',
    paragraphs: [
      'The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text did not listen.',
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    ],
  },
  {
    icon: 'flame',
    label: 'Bikini & Body',
    title: 'Bikini & Body',
    paragraphs: [
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place.',
      'It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts.',
    ],
  },
  {
    icon: 'zap',
    label: 'Cardio Exercise',
    title: 'Cardio Exercise',
    paragraphs: [
      'One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so.',
      'Because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text did not listen.',
    ],
  },
  {
    icon: 'bike',
    label: 'Power Yoga',
    title: 'Power Yoga',
    paragraphs: [
      'When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove.',
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    ],
  },
  {
    icon: 'users',
    label: 'Aerobics Program',
    title: 'Aerobics Program',
    paragraphs: [
      'She packed her seven versalia, put her initial into the belt and made herself on the way. A small river named Duden flows by their place.',
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    ],
  },
  {
    icon: 'target',
    label: 'Crossfit Program',
    title: 'Crossfit Program',
    paragraphs: [
      'Pityful a rethoric question ran over her cheek, then she continued her way. On her way she met a copy. The copy warned the Little Blind Text.',
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    ],
  },
]

export interface Service {
  icon: string
  title: string
  text: string
}

export const SERVICES: Service[] = [
  {
    icon: 'activity',
    title: 'Make Your Body Harmonic',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  },
  {
    icon: 'scale',
    title: 'Weight Loss Program',
    text: 'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
  },
  {
    icon: 'users',
    title: 'Group Personal Trainings',
    text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: 'salad',
    title: 'Optimal Diet Selection',
    text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
  },
  {
    icon: 'user-check',
    title: 'Individual Training Programs',
    text: 'One day however a small line of blind text by the name of Lorem Ipsum decided to leave.',
  },
]

interface ScheduleRow {
  time: string
  title: string
  text: string
  coach: string
  role: string
  photo: string
}

export interface ScheduleDay {
  day: string
  program: string
  rows: ScheduleRow[]
}

const thumb = (id: number) => person(id, 240, 240)

export const SCHEDULE: ScheduleDay[] = [
  {
    day: 'Monday',
    program: 'Fitness Program',
    rows: [
      {
        time: '08:00AM - 10:00AM',
        title: 'Basic Exercise',
        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
        coach: 'Anthony Miller',
        role: 'Cardio Expert',
        photo: thumb(1027),
      },
      {
        time: '10:00AM - 12:00PM',
        title: 'Fitness Class',
        text: 'Separated they live in Bookmarksgrove right at the coast of the Semantics.',
        coach: 'Rachel Parker',
        role: 'Yoga Trainer',
        photo: thumb(64),
      },
      {
        time: '02:00PM - 04:00PM',
        title: 'Cardio Burn',
        text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
        coach: 'Troy Watson',
        role: 'Boxing Trainer',
        photo: thumb(453),
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
        text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
        coach: 'Lloyd Wilson',
        role: 'Crossfit Coach',
        photo: thumb(823),
      },
      {
        time: '10:00AM - 12:00PM',
        title: 'Body Building',
        text: 'One day however a small line of blind text by the name of Lorem Ipsum decided to leave.',
        coach: 'Jason Davis',
        role: 'Body Building',
        photo: thumb(996),
      },
      {
        time: '02:00PM - 04:00PM',
        title: 'Open Gym',
        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
        coach: 'Ian Smith',
        role: 'Health Expert',
        photo: thumb(1027),
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
        text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
        coach: 'Greg Mueller',
        role: 'Dance Expert',
        photo: thumb(453),
      },
      {
        time: '10:00AM - 12:00PM',
        title: 'Step Aerobics',
        text: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
        coach: 'Alicia Henderson',
        role: 'Aerobic Instructor',
        photo: thumb(823),
      },
      {
        time: '02:00PM - 04:00PM',
        title: 'Zumba Class',
        text: 'Even the all-powerful Pointing has no control about the blind texts.',
        coach: 'Nikki Valdez',
        role: 'Yoga Expert',
        photo: thumb(64),
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
        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
        coach: 'Nikki Valdez',
        role: 'Yoga Expert',
        photo: thumb(64),
      },
      {
        time: '10:00AM - 12:00PM',
        title: 'Meditation Class',
        text: 'Separated they live in Bookmarksgrove right at the coast of the Semantics.',
        coach: 'Rachel Parker',
        role: 'Yoga Trainer',
        photo: thumb(996),
      },
      {
        time: '02:00PM - 04:00PM',
        title: 'Stretching Class',
        text: 'A small river named Duden flows by their place and supplies it.',
        coach: 'Alicia Henderson',
        role: 'Aerobic Instructor',
        photo: thumb(823),
      },
    ],
  },
  {
    day: 'Friday',
    program: 'Fitness Program',
    rows: [
      {
        time: '08:00AM - 10:00AM',
        title: 'Basic Exercises for Beginners',
        text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
        coach: 'Anthony Miller',
        role: 'Cardio Expert',
        photo: thumb(1027),
      },
      {
        time: '10:00AM - 12:00PM',
        title: 'Core Strength',
        text: 'One day however a small line of blind text by the name of Lorem Ipsum decided to leave.',
        coach: 'Mark Harlem',
        role: 'Health Expert',
        photo: thumb(823),
      },
      {
        time: '02:00PM - 04:00PM',
        title: 'HIIT Session',
        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
        coach: 'Jesh Stone',
        role: 'Muscle Expert',
        photo: thumb(996),
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
        text: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
        coach: 'Nikki Valdez',
        role: 'Yoga Expert',
        photo: thumb(64),
      },
      {
        time: '11:00AM - 01:00PM',
        title: 'Power Yoga',
        text: 'Separated they live in Bookmarksgrove right at the coast of the Semantics.',
        coach: 'Rachel Parker',
        role: 'Yoga Trainer',
        photo: thumb(1027),
      },
      {
        time: '03:00PM - 05:00PM',
        title: 'Family Fitness',
        text: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
        coach: 'Troy Watson',
        role: 'Boxing Trainer',
        photo: thumb(453),
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
        text: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
        coach: 'Lloyd Wilson',
        role: 'Crossfit Coach',
        photo: thumb(823),
      },
      {
        time: '11:00AM - 01:00PM',
        title: 'Body Building',
        text: 'One day however a small line of blind text by the name of Lorem Ipsum decided to leave.',
        coach: 'Ian Smith',
        role: 'Body Builder',
        photo: thumb(996),
      },
      {
        time: '03:00PM - 05:00PM',
        title: 'Recovery Session',
        text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
        coach: 'Mark Harlem',
        role: 'Health Expert',
        photo: thumb(1027),
      },
    ],
  },
]

export interface Testimonial {
  quote: string
  name: string
  position: string
  photo: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Jeff Freshman',
    position: 'Artist',
    photo: person(1027, 260, 260),
  },
  {
    quote:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    name: 'Dana Keller',
    position: 'Fitness Instructor',
    photo: person(64, 260, 260),
  },
  {
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    name: 'Marcus Reed',
    position: 'Marathon Runner',
    photo: person(823, 260, 260),
  },
]

export interface Coach {
  name: string
  position: string
  photo: string
}

export const COACHES: Coach[] = [
  { name: 'Lloyd Wilson', position: 'Body Builder', photo: person(1027, 400, 400) },
  { name: 'Rachel Parker', position: 'Fitness Coach', photo: person(64, 400, 400) },
  { name: 'Ian Smith', position: 'Cardio Expert', photo: person(823, 400, 400) },
  { name: 'Alicia Henderson', position: 'Yoga Instructor', photo: person(996, 400, 400) },
]

export interface BlogPost {
  title: string
  day: string
  month: string
  year: string
  image: string
  comments: number
}

export const BLOG_POSTS: BlogPost[] = [
  {
    title: '5 Core Exercises for a Stronger Midsection',
    day: '04',
    month: 'April',
    year: '2019',
    image: seed('shred-blog1', 800, 600),
    comments: 3,
  },
  {
    title: 'The Benefits of Early Morning Workouts',
    day: '12',
    month: 'May',
    year: '2019',
    image: seed('shred-blog2', 800, 600),
    comments: 5,
  },
  {
    title: 'Nutrition Guide for Building Lean Muscle',
    day: '21',
    month: 'June',
    year: '2019',
    image: seed('shred-blog3', 800, 600),
    comments: 7,
  },
]

export const CONTACT = {
  address: '198 West 21th Street, Suite 721 New York NY 10016',
  phone: '+1 235 2355 98',
  email: 'info@yoursite.com',
  website: 'yoursite.com',
}

export const GALLERY: string[] = [
  seed('shred-gallery1', 600, 600),
  seed('shred-gallery2', 600, 600),
  seed('shred-gallery3', 600, 600),
  seed('shred-gallery4', 600, 600),
]

export const FOOTER_LINKS = [
  { label: 'Home', href: '#home-section' },
  { label: 'About', href: '#about-section' },
  { label: 'Services', href: '#services-section' },
  { label: 'Coaches', href: '#coaches-section' },
  { label: 'Schedule', href: '#schedule-section' },
  { label: 'Contact', href: '#contact-section' },
] as const

export const FOOTER_SERVICES = ['Gym Fitness', 'Crossfit', 'Yoga', 'Aerobics'] as const

export const FOOTER_CONTACT = {
  address: '203 Fake St. Mountain View, San Francisco, California, USA',
  phone: '+2 392 3929 210',
  email: 'info@yourdomain.com',
}

export const SOCIALS: { key: SocialKey; label: string; href: string }[] = [
  { key: 'facebook', label: 'Facebook', href: '#' },
  { key: 'twitter', label: 'Twitter', href: '#' },
  { key: 'instagram', label: 'Instagram', href: '#' },
] as const

export type SocialKey = 'facebook' | 'twitter' | 'instagram'

export const emailHref = (email: string) => `mailto:${email}`
export const phoneHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '')}`
