export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Packages', href: '#packages' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
] as const

export const quickContact = {
  address: '34 Street Name, City Name Here, United States',
  hours: 'Sunday - Friday 8:00AM - 4:00PM / Saturday CLOSED',
} as const

export const hero = {
  eyebrow: 'Welcome To Our Website',
  headline: 'Bring Fun Life To Your Kids',
  subtext: 'Amazing Playground for your kids',
  cta: 'LEARN MORE',
  image: 'https://picsum.photos/id/823/600/700',
} as const

export const features = [
  {
    color: 'coral',
    icon: 'home',
    title: 'Indoor Games',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nesciunt, mollitia, hic enim id culpa.',
  },
  {
    color: 'sunflower',
    icon: 'user',
    title: 'Outdoor Game And Event',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nesciunt, mollitia, hic enim id culpa.',
  },
  {
    color: 'lagoon',
    icon: 'cog',
    title: 'Camping for Kids',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima nesciunt, mollitia, hic enim id culpa.',
  },
] as const

export const about = {
  eyebrow: 'About Us',
  heading: 'Bring Fun Life To Your Kids',
  paragraphs: [
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et iure eos maxime facere illum, aliquid, eius explicabo dolore, quo ipsam, provident ullam sapiente optio sed voluptatum omnis.',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus provident sed mollitia. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo cumque, voluptas aliquam.',
  ],
  cta: 'MORE ABOUT US',
  image: 'https://picsum.photos/id/64/600/450',
} as const

export const packages = {
  eyebrow: 'Packages You Like',
  heading: 'Our Packages',
  cards: [
    {
      icon: 'puzzle',
      color: 'lagoon',
      title: 'Indoor Games',
      text: 'Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporis distinctio soluta recusandae?',
      ctaColor: 'cherry',
    },
    {
      icon: 'target',
      color: 'leaf',
      title: 'Outdoor Game and Event',
      text: 'Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporis distinctio soluta recusandae?',
      ctaColor: 'amber',
    },
    {
      icon: 'compass',
      color: 'coral',
      title: 'Camping for Kids',
      text: 'Lorem ipsum dolor sit amet. Consequatur aliquam, fuga maiores amet quo corporis distinctio soluta recusandae?',
      ctaColor: 'leaf',
    },
  ],
} as const

export const pricing = {
  eyebrow: 'Pricing Plan',
  heading: 'Our Pricing',
  intro:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quis cupiditate fugit, voluptatibus ullam, non laboriosam alias veniam, ex inventore iure sed?',
  plans: [
    {
      name: 'Silver Pack',
      price: '$30',
      color: 'lagoon',
      items: ['Lorem ipsum dolor sit amet', 'Consectetur adipisicing elit', 'Nemo quis cupiditate'],
    },
    {
      name: 'Golden Pack',
      price: '$70',
      color: 'coral',
      items: ['Lorem ipsum dolor sit amet', 'Consectetur adipisicing elit', 'Nemo quis cupiditate'],
    },
  ],
} as const

export const testimonials = {
  eyebrow: 'Testimonial',
  heading: 'What Our Client Says About Us',
  slides: [
    {
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam earum libero rem maxime magnam. Similique esse ab earum, autem consectetur.',
      name: 'Jeff Woodland',
      role: 'Partner',
      image: 'https://picsum.photos/id/1027/160/160',
    },
    {
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam earum libero rem maxime magnam. Similique esse ab earum, autem consectetur.',
      name: 'Jeff Woodland',
      role: 'Partner',
      image: 'https://picsum.photos/id/996/160/160',
    },
    {
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam earum libero rem maxime magnam. Similique esse ab earum, autem consectetur.',
      name: 'Jeff Woodland',
      role: 'Partner',
      image: 'https://picsum.photos/id/1011/160/160',
    },
  ],
  stats: [
    { value: '3423', label: 'Happy Client', color: 'lagoon' },
    { value: '4398', label: 'Members', color: 'sunflower' },
    { value: '50+', label: 'Staffs', color: 'leaf' },
    { value: '2000+', label: 'Our Followers', color: 'cherry' },
  ],
} as const

export const cta = {
  headline: 'Bring Fun Life To Your Kids',
  button: 'GET STARTED',
} as const

export const footer = {
  about:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  navigation: ['About Us', 'Testimonials', 'Terms of Service', 'Privacy', 'Contact Us'],
} as const

export const socials = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'LinkedIn', name: 'linkedin' },
] as const
