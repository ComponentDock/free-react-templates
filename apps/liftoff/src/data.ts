export const navLinks = [
  { label: 'Home', href: '#home-section' },
  { label: 'Features', href: '#features-section' },
  { label: 'About Us', href: '#about-section' },
  { label: 'Testimonials', href: '#testimonials-section' },
  { label: 'Blog', href: '#blog-section' },
  { label: 'Contact', href: '#contact-section' },
] as const

export const hero = {
  headline: 'Grow Your Business Faster',
  subtext:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
  cta: 'Get Started',
  image: 'https://picsum.photos/seed/liftoff-1/560/560',
} as const

export const features = {
  heading: 'Features',
  cards: [
    {
      icon: 'refresh',
      title: 'Business Consulting',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
      icon: 'store',
      title: 'Market Analysis',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
      icon: 'shopping-bag',
      title: 'User Monitoring',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
      icon: 'settings',
      title: 'Insurance Consulting',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
      icon: 'smile',
      title: 'Customer Satisfaction',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
    {
      icon: 'power',
      title: 'Plug & Play',
      text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    },
  ] as const,
  learnMore: 'Learn More',
} as const

export const featureBig = {
  rows: [
    {
      heading: 'Create interactive prototypes',
      paragraph:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
      checklist: ['Adipisci excepturi aliquam', 'Deleniti labore reiciendis'],
      author: {
        name: 'Amalia G.',
        role: 'Co-Founder, XYZ Inc.',
        quote:
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Ducimus vitae ipsa asperiores inventore aperiam iure?',
        avatar: 'https://picsum.photos/seed/liftoff-5/100/100',
      },
      image: 'https://picsum.photos/seed/liftoff-2/640/420',
    },
    {
      heading: 'Create interactive prototypes',
      paragraph:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
      checklist: ['Laborum enim quasi at modi', 'Ad at tempore'],
      author: {
        name: 'Darren K.',
        role: 'Co-Founder, XYZ Inc.',
        quote:
          'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Ducimus vitae ipsa asperiores inventore aperiam iure?',
        avatar: 'https://picsum.photos/seed/liftoff-6/100/100',
      },
      image: 'https://picsum.photos/seed/liftoff-3/640/420',
    },
  ] as const,
} as const

export const about = {
  heading: 'About Us',
  title: 'Create interactive prototypes',
  paragraph:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  cta: 'Learn More',
  image: 'https://picsum.photos/seed/liftoff-4/600/450',
} as const

export const testimonials = {
  heading: 'Testimonials',
  slides: [
    {
      quote:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.',
      name: 'John Smith',
      avatar: 'https://picsum.photos/seed/liftoff-7/100/100',
    },
    {
      quote:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
      name: 'Robert Aguilar',
      avatar: 'https://picsum.photos/seed/liftoff-8/100/100',
    },
    {
      quote:
        'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life. One day however a small line of blind text by the name of Lorem Ipsum decided to leave.',
      name: 'Roger Spears',
      avatar: 'https://picsum.photos/seed/liftoff-9/100/100',
    },
    {
      quote:
        'The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text did not listen.',
      name: 'Kyle McDonald',
      avatar: 'https://picsum.photos/seed/liftoff-10/100/100',
    },
  ] as const,
} as const

export const blog = {
  heading: 'Blog Posts',
  posts: [
    {
      title: 'Planning Your Growth Roadmap for the Next Quarter',
      meta: 'Ham Brook • Jan 18, 2019 • News',
      excerpt:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      image: 'https://picsum.photos/seed/liftoff-11/640/420',
    },
    {
      title: 'Five Signals That Your Startup Is Ready to Scale',
      meta: 'James Phelps • Jan 18, 2019 • News',
      excerpt:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      image: 'https://picsum.photos/seed/liftoff-12/640/420',
    },
    {
      title: 'How Customer Feedback Shapes Product Design',
      meta: 'James Phelps • Jan 18, 2019 • News',
      excerpt:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
      image: 'https://picsum.photos/seed/liftoff-13/640/420',
    },
  ] as const,
  continueReading: 'Continue Reading...',
} as const

export const contact = {
  heading: 'Get In Touch',
  cardHeading: 'Contact Form',
  fields: {
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
  },
  messagePlaceholder: 'Write your notes or questions here...',
  submit: 'Send Message',
  success: 'Thank you for your message! Our team will get back to you shortly.',
} as const

export const footer = {
  socials: [
    { label: 'Facebook', name: 'facebook' },
    { label: 'Twitter', name: 'twitter' },
    { label: 'Instagram', name: 'instagram' },
  ] as const,
} as const
