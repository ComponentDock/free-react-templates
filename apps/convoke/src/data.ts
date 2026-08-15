export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Blog', href: '#welcome' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Venue', href: '#venue' },
  { label: 'Contact', href: '#contact' },
]

export interface Speaker {
  name: string
  role: string
  image: string
}

export const speakers: Speaker[] = [
  {
    name: 'Jonson Miller',
    role: 'Creative Director',
    image: 'https://picsum.photos/seed/convoke-1/360/420',
  },
  {
    name: 'Albert Jackey',
    role: 'Product Designer',
    image: 'https://picsum.photos/seed/convoke-2/360/420',
  },
  {
    name: 'Marked Macau',
    role: 'UI/UX Designer',
    image: 'https://picsum.photos/seed/convoke-3/360/420',
  },
  {
    name: 'Kelvin Cooper',
    role: 'Art Director',
    image: 'https://picsum.photos/seed/convoke-4/360/420',
  },
]

interface Talk {
  speakerName: string
  time: string
  blurb: string
  image: string
}

export interface ScheduleDay {
  tab: string
  talks: Talk[]
}

export const scheduleDays: ScheduleDay[] = [
  {
    tab: '08 Sep 2019',
    talks: [
      {
        speakerName: 'Jonson Miller',
        time: '10-11 am',
        blurb: 'Opening keynote on design systems and the future of creative tooling.',
        image: 'https://picsum.photos/seed/convoke-1/96/96',
      },
      {
        speakerName: 'Albert Jackey',
        time: '12-1.00 pm',
        blurb: 'Product craft workshop covering research, prototyping, and shipping.',
        image: 'https://picsum.photos/seed/convoke-2/96/96',
      },
      {
        speakerName: 'Marked Macau',
        time: '2.30-4.00 pm',
        blurb: 'Panel on accessibility, inclusive design, and the web platform.',
        image: 'https://picsum.photos/seed/convoke-3/96/96',
      },
    ],
  },
  {
    tab: '09 Sep 2019',
    talks: [
      {
        speakerName: 'Kelvin Cooper',
        time: '10-11 am',
        blurb: 'Visual storytelling and motion in modern brand identities.',
        image: 'https://picsum.photos/seed/convoke-4/96/96',
      },
      {
        speakerName: 'Jonson Miller',
        time: '12-1.00 pm',
        blurb: 'Fireside chat on leading creative teams through change.',
        image: 'https://picsum.photos/seed/convoke-1/96/96',
      },
      {
        speakerName: 'Alvi Nourin',
        time: '2.30-4.00 pm',
        blurb: 'Closing session on the next decade of digital experiences.',
        image: 'https://picsum.photos/seed/convoke-2/96/96',
      },
    ],
  },
]

export interface FaqItem {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: 'Is WordPress hosting worth it?',
    answer:
      'For most teams a managed platform removes the operational overhead of servers, so you can focus on content and speed.',
  },
  {
    question: 'What are the advantages of WordPress hosting over shared?',
    answer:
      'Dedicated resources, better caching, automatic updates, and staging environments give you predictable performance.',
  },
  {
    question: 'Where the Venue?',
    answer:
      'The conference takes place at City Hall, New York City — a five-minute walk from the central subway line.',
  },
  {
    question: 'How can I attend the Event from Asia?',
    answer:
      'A live stream is available for every session, and recorded talks are published within 24 hours for all time zones.',
  },
]

export const brandNames = ['Vertex', 'Nimbus', 'Quantia', 'Lumen', 'Orbitel', 'Zephyr']

export const footerLinkLabels = ['Schedule', 'Speakers', 'Contact', 'Venue']

export const venue = {
  address: '200, D-block, Green lane USA',
  email: 'hello@convoke.design',
  phone: '+10 367 467 8934',
}

export const eventInfo = {
  location: 'City Hall, New York City',
  dates: '12-15 Sep 2019',
}

/** Next upcoming 12 September (the conference start date), computed live. */
export function getEventStart(now: Date = new Date()): Date {
  const thisYear = new Date(now.getFullYear(), 8, 12)
  return thisYear.getTime() > now.getTime() ? thisYear : new Date(now.getFullYear() + 1, 8, 12)
}
