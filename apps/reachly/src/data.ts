export const siteName = 'Reachly'

export const header = {
  phoneLabel: 'Call Us:',
  phoneDisplay: '+10 (78) 378 3784',
  ctaLabel: "Let's Talk",
} as const

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Case Study', href: '#case-study' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export const blogDropdown = ['Blog', 'Blog Details', 'Elements'] as const

export const hero = {
  eyebrow: 'Digital Marketing Expert',
  headline: 'We bring you new customers',
  subcopy:
    'We build effective strategies to help you reach customers and prospects across the entire web.',
  ctaLabel: 'Explore Services',
  playLabel: 'Play video',
} as const

export const services = {
  kicker: 'Our Services',
  heading: 'Provide Awesome Service With Our Tools',
  cardTitle: 'Discover, Explore the Product',
  cardCopy: 'Effective strategies to help you reach customers.',
} as const

export const about = {
  kicker: 'About Us',
  heading: 'We Create a Steps to Build a Successful Digital Product',
  paragraph:
    "With over 50 years of combined experience, our mission is to design with your values and vision in mind. We're out to create purposeful spaces that balance art and creativity with science and strategy.",
  ctaLabel: 'Explore More',
} as const

export const pricing = {
  kicker: 'Pricing Plan',
  heading: 'Choose Your Best Pricing Plan',
  tabs: ['Yearly', 'Monthly'] as const,
  ctaLabel: 'Get Started',
} as const

export interface PricingPlan {
  name: string
  price: string
  features: readonly string[]
}

export const pricingPlans: readonly PricingPlan[] = [
  {
    name: 'Basic',
    price: '$ 05.00',
    features: [
      'Increase traffic 50%',
      'Social Media Marketing',
      '10 Free Optimization',
      '24/7 support',
    ],
  },
  {
    name: 'Business',
    price: '$ 05.00',
    features: [
      'Increase traffic 50%',
      'Social Media Marketing',
      '10 Free Optimization',
      '24/7 support',
    ],
  },
  {
    name: 'Pro',
    price: '$ 05.00',
    features: [
      'Increase traffic 50%',
      'Social Media Marketing',
      '10 Free Optimization',
      '24/7 support',
    ],
  },
]

export const whyChooseUs = {
  kicker: 'Why Choose US',
  heading: 'We are an SEO company that specializes in developing',
  exploreLabel: 'Explore More',
  stats: [
    { value: '450', suffix: '+', label: 'Successfully completed projects' },
    { value: '860', suffix: '', label: 'Highly specialised employees' },
  ] as const,
  paragraph:
    'With over 50 years of combined experience, our mission is to design with your values and vision in mind. We’re out to create purposeful spaces that balance art and creativity with science and strategy.',
  quote: '- Shonda Leer, Chief of Staff at Franclin Technologies',
} as const

export const brandNames = ['Northwind', 'Lumina', 'Vertex', 'Helios', 'Cinder', 'Arcadia'] as const

export const caseStudy = {
  kicker: 'Case Study',
  heading: 'Some Of Our Awesome Stuffs',
  tag: 'Marketing',
  title: 'Discover, Explore the Product',
} as const

export const testimonials = {
  slides: [
    {
      quote:
        'Even the all-powerful Pointing has no control about the blind texts it is an almost un real orthographic eaque ipsa quae elit small batch freegan sed. Craft beer elit seitan exercitation.',
      author: 'Amelia — Creative Director',
    },
    {
      quote:
        'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.',
      author: 'Sophie — Product Lead',
    },
    {
      quote:
        'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly.',
      author: 'Hannah — Growth Manager',
    },
  ] as const,
} as const

export const ctaBanner = {
  heading: 'Interested to Digging Dipper?',
  paragraph:
    "We're out to create purposeful spaces that balance art and creativity with science and strategy.",
  buttonLabel: 'Contact Us',
} as const

export const footer = {
  blurb: 'Duis aute irure dolor inasfa reprehenderit in voluptate velit esse cillum',
  navigationTitle: 'Navigation',
  navigationLinks: ['Home', 'About', 'Services', 'Blog', 'Contact'],
  servicesTitle: 'Services',
  supportTitle: 'Support',
  linkColumns: ['Drone Mapping', 'Real State', 'Commercial', 'Construction'],
  contactTitle: 'Contact Us',
  email: 'contact@reachly.example',
  phone: '10 (87) 738-3940',
  rights: 'All rights reserved',
  componentDockHref: 'https://www.componentdock.com/',
  componentDockLabel: 'Component Dock',
  madeWith: 'Made with',
} as const
