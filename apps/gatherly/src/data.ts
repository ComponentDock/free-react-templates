interface NavItem {
  label: string
  href: string
}

interface HeroSlide {
  heading: string
  image: string
}

interface Speaker {
  firstName: string
  lastName: string
  role: string
  image: string
}

interface ScheduleEntry {
  time: string
  title: string
  description: string
  speaker: string
  role: string
  image: string
}

interface DaySchedule {
  day: string
  date: string
  entries: ScheduleEntry[]
}

interface PricingTier {
  name: string
  price: string
  features: string[]
}

interface BlogPost {
  title: string
  excerpt: string
  image: string
  date: string
  comments: number
}

interface ContactInfo {
  label: string
  value: string
}

export const brand = {
  name: 'Gatherly',
  tagline: 'Event Conference',
}

export const navLinks: NavItem[] = [
  { label: 'Home', href: '#home-section' },
  { label: 'About', href: '#about-section' },
  { label: 'Speakers', href: '#speakers-section' },
  { label: 'Schedule', href: '#schedule-section' },
  { label: 'Pricing', href: '#pricing-section' },
  { label: 'Blog', href: '#blog-section' },
  { label: 'Contact', href: '#contact-section' },
]

export const hero = {
  edgeText: 'Welcome to Gatherly.',
  dateLine: 'November 26-30, 2019 - 08:00am-12:00pm',
  getTicketLabel: 'Get Ticket',
  watchVideoLabel: 'Watch Video',
  slides: [
    {
      heading: 'Annual Conference 2019',
      image: 'https://picsum.photos/seed/gatherly-hero-1/1200/900',
    },
    {
      heading: 'Business Conference 2019',
      image: 'https://picsum.photos/seed/gatherly-hero-2/1200/900',
    },
  ] satisfies HeroSlide[],
}

export const about = {
  eyebrow: 'Welcome',
  heading: 'About Me',
  text: 'Gatherly brings together the brightest minds in business and technology for four days of keynotes, workshops and networking. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  years: 50,
  yearsLabel: 'Years Experienced',
}

export const galleryImages: string[] = [
  'https://picsum.photos/seed/gatherly-gallery-1/600/500',
  'https://picsum.photos/seed/gatherly-gallery-2/600/500',
  'https://picsum.photos/seed/gatherly-gallery-3/600/500',
  'https://picsum.photos/seed/gatherly-gallery-4/600/500',
]

export const subscribe = {
  heading: 'Join Our Event',
  text: 'Subscribe to our newsletter and be the first to know about speakers, workshops and early-bird tickets.',
  placeholder: 'Enter email address',
  submitLabel: 'Subscribe',
  success: 'Thanks for subscribing — see you at the conference!',
  error: 'Please enter a valid email address.',
}

export const speakers = {
  eyebrow: 'Speakers',
  heading: 'Gatherly Speakers',
  intro:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  list: [
    {
      firstName: 'John',
      lastName: 'Wilson',
      role: 'CEO, Founder',
      image: 'https://picsum.photos/seed/gatherly-speaker-1/400/400',
    },
    {
      firstName: 'Robert',
      lastName: 'Wills',
      role: 'Businessman',
      image: 'https://picsum.photos/seed/gatherly-speaker-2/400/400',
    },
    {
      firstName: 'Mike',
      lastName: 'Smith',
      role: 'Entrepreneur',
      image: 'https://picsum.photos/seed/gatherly-speaker-3/400/400',
    },
    {
      firstName: 'Adrian',
      lastName: 'Henderson',
      role: 'Web Developer',
      image: 'https://picsum.photos/seed/gatherly-speaker-4/400/400',
    },
  ] satisfies Speaker[],
}

export const schedule = {
  eyebrow: 'Schedule',
  heading: 'Program Schedule',
  intro:
    'Four days of keynotes, workshops and hands-on labs from industry leaders. Pick a day to explore the lineup.',
  days: [
    {
      day: 'Day 01',
      date: '21 November 2019',
      entries: [
        {
          time: '08:00AM - 10:00AM',
          title: 'Introduction to Wordpress 5.0',
          description:
            'A hands-on tour of the newest editor, theme system and performance improvements in Wordpress 5.0.',
          speaker: 'John Wilson',
          role: 'Founder of Wordpress',
          image: 'https://picsum.photos/seed/gatherly-person-1/120/120',
        },
        {
          time: '10:00AM - 12:00PM',
          title: 'Best Practices For Programming WordPress',
          description:
            'Designing maintainable plugins and themes: hooks, dependency management and testing strategies.',
          speaker: 'Robert Wills',
          role: 'Senior Wordpress Engineer',
          image: 'https://picsum.photos/seed/gatherly-person-2/120/120',
        },
        {
          time: '02:00PM - 04:00PM',
          title: 'Developing an Advanced Web Application',
          description:
            'From prototype to production: architecture decisions that keep large web applications fast and safe.',
          speaker: 'Mike Smith',
          role: 'Lead Web Developer',
          image: 'https://picsum.photos/seed/gatherly-person-3/120/120',
        },
      ],
    },
    {
      day: 'Day 02',
      date: '22 November 2019',
      entries: [
        {
          time: '08:00AM - 10:00AM',
          title: 'Scaling Your Startup with Cloud Infrastructure',
          description:
            'How to design cloud-native systems that grow with your user base without burning the budget.',
          speaker: 'Adrian Henderson',
          role: 'Cloud Architect',
          image: 'https://picsum.photos/seed/gatherly-person-4/120/120',
        },
        {
          time: '10:00AM - 12:00PM',
          title: 'Designing Products Users Love',
          description:
            'Research, prototyping and usability patterns behind products that people keep coming back to.',
          speaker: 'John Wilson',
          role: 'Founder of Wordpress',
          image: 'https://picsum.photos/seed/gatherly-person-1/120/120',
        },
        {
          time: '02:00PM - 04:00PM',
          title: 'The Future of Mobile Development',
          description:
            'Cross-platform frameworks, offline-first apps and the tools shaping mobile engineering in 2020.',
          speaker: 'Robert Wills',
          role: 'Senior Wordpress Engineer',
          image: 'https://picsum.photos/seed/gatherly-person-2/120/120',
        },
      ],
    },
    {
      day: 'Day 03',
      date: '23 November 2019',
      entries: [
        {
          time: '08:00AM - 10:00AM',
          title: 'Digital Marketing Strategies That Convert',
          description:
            'Funnels, content and analytics: a practical playbook for turning attention into revenue.',
          speaker: 'Mike Smith',
          role: 'Lead Web Developer',
          image: 'https://picsum.photos/seed/gatherly-person-3/120/120',
        },
        {
          time: '10:00AM - 12:00PM',
          title: 'Building High-Performance Teams',
          description:
            'Hiring, coaching and culture practices from engineering leaders who scaled teams to hundreds.',
          speaker: 'Adrian Henderson',
          role: 'Cloud Architect',
          image: 'https://picsum.photos/seed/gatherly-person-4/120/120',
        },
        {
          time: '02:00PM - 04:00PM',
          title: 'Security Essentials for Web Applications',
          description:
            'Threat modeling, secure defaults and the top vulnerabilities every developer should know.',
          speaker: 'John Wilson',
          role: 'Founder of Wordpress',
          image: 'https://picsum.photos/seed/gatherly-person-1/120/120',
        },
      ],
    },
    {
      day: 'Day 04',
      date: '24 November 2019',
      entries: [
        {
          time: '08:00AM - 10:00AM',
          title: 'From Idea to Launch in 30 Days',
          description:
            'A lean, step-by-step process for shipping a minimum viable product fast and learning from real users.',
          speaker: 'Robert Wills',
          role: 'Senior Wordpress Engineer',
          image: 'https://picsum.photos/seed/gatherly-person-2/120/120',
        },
        {
          time: '10:00AM - 12:00PM',
          title: 'Data-Driven Decision Making',
          description:
            'Metrics that matter: building dashboards and experiments that inform better product choices.',
          speaker: 'Mike Smith',
          role: 'Lead Web Developer',
          image: 'https://picsum.photos/seed/gatherly-person-3/120/120',
        },
        {
          time: '02:00PM - 04:00PM',
          title: 'Closing Keynote: The Year Ahead',
          description:
            'Trends, predictions and practical takeaways to carry into the next year of building on the web.',
          speaker: 'Adrian Henderson',
          role: 'Cloud Architect',
          image: 'https://picsum.photos/seed/gatherly-person-4/120/120',
        },
      ],
    },
  ] satisfies DaySchedule[],
}

export const pricing = {
  eyebrow: 'Pricing',
  heading: 'Buy Tickets',
  intro:
    'Choose the pass that fits your goals — every ticket includes access to all keynotes, the expo hall and networking evenings.',
  tiers: [
    {
      name: 'Basic',
      price: '$29.00/month',
      features: ['Visit 4 Events', 'Regular Seat', 'Free Coffee', 'Free Entrance'],
    },
    {
      name: 'Standard',
      price: '$59.00/month',
      features: ['Visit 6 Events', 'Regular Seat', 'Free Coffee', 'Free Entrance'],
    },
    {
      name: 'Premium',
      price: '$79.00/month',
      features: ['Visit 8 Events', 'VIP Seat', 'Free Coffee', 'Free Lunch'],
    },
    {
      name: 'Gold',
      price: '$89.50/month',
      features: ['Visit 10 Events', 'VIP Seat', 'Free Coffee', 'Free Lunch'],
    },
  ] satisfies PricingTier[],
  buyLabel: 'Buy Ticket',
}

export const blog = {
  eyebrow: 'Blog',
  heading: 'Our Blog',
  intro: 'News, interviews and behind-the-scenes stories from the Gatherly team and our speakers.',
  posts: [
    {
      title: 'Why Lead Generation is Key for Business Growth',
      excerpt:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      image: 'https://picsum.photos/seed/gatherly-blog-1/600/450',
      date: 'March 23, 2019',
      comments: 3,
    },
    {
      title: 'The Ultimate Guide to Event Marketing',
      excerpt:
        'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
      image: 'https://picsum.photos/seed/gatherly-blog-2/600/450',
      date: 'March 15, 2019',
      comments: 5,
    },
    {
      title: 'How to Plan a Successful Conference',
      excerpt:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
      image: 'https://picsum.photos/seed/gatherly-blog-3/600/450',
      date: 'March 09, 2019',
      comments: 2,
    },
  ] satisfies BlogPost[],
}

export const contact = {
  eyebrow: 'Contact',
  heading: 'Contact Me',
  intro:
    'Questions about tickets, speaking opportunities or sponsorship? Get in touch with the Gatherly team.',
  info: [
    { label: 'Address', value: '198 West 21th Street, Suite 721 New York NY 10016' },
    { label: 'Contact Number', value: '+ 1235 2355 98' },
    { label: 'Email Address', value: 'info@yoursite.com' },
    { label: 'Website', value: 'yoursite.com' },
  ] satisfies ContactInfo[],
  nameLabel: 'Your Name',
  emailLabel: 'Your Email',
  subjectLabel: 'Subject',
  messageLabel: 'Message',
  sendLabel: 'Send Message',
  success: 'Message sent — thank you!',
  error: 'Please fill in every field with a valid email address.',
}

export const mapLabel = 'Conference Center — New York'

export const footer = {
  blurb:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  linksTitle: 'Links',
  links: [
    { label: 'Home', href: '#home-section' },
    { label: 'About', href: '#about-section' },
    { label: 'Schedule', href: '#schedule-section' },
    { label: 'Speakers', href: '#speakers-section' },
    { label: 'Contact', href: '#contact-section' },
  ],
  questionTitle: 'Have a Questions?',
  address: '203 Fake St. Mountain View, San Francisco, California, USA',
  phone: '+2 392 3929 210',
  email: 'info@yourdomain.com',
}
