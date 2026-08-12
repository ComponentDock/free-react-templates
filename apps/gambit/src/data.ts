/* Gambit — gaming & esports landing page content.
   Brand palette: cyan #3fcaff → mint #a4ffb0 gradient on deep purple
   #231a60–#3c338d base (design tokens from the source template's
   stylesheet; original copy was hair-salon placeholder text, so all copy
   is paraphrased to gaming-appropriate content of the same kinds). */

export const BRAND = 'Gambit Games'

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Pages', href: '#pricing' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Games', href: '#games' },
  { label: 'Elements', href: '#faq' },
  { label: 'Blog', href: '#blog' },
  { label: 'Blog Details', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export const HERO_HEADLINE = 'For Every Gamer, Victory Is a Must Try'
export const HERO_PARAGRAPH =
  'Join a thriving community of players, streamers, and teams. Gambit brings you tournaments, live matches, and the latest gaming news — all in one arena built for champions.'
export const WATCH_VIDEO_LABEL = 'Watch the video'

export const ABOUT_HEADING = 'We Believe That Great Games Last Forever'
export const ABOUT_PARAGRAPH =
  'From indie gems to triple-A blockbusters, we curate the best of gaming. Our platform tracks every tournament, every update, and every meta shift so you never miss a moment of the action.'

export const UPCOMING_GAMES = [
  { title: 'Best PS4 Games', image: 'https://picsum.photos/seed/gambit-game1/400/300' },
  { title: 'World Dart 2019', image: 'https://picsum.photos/seed/gambit-game2/400/300' },
  { title: 'New Xbox Games', image: 'https://picsum.photos/seed/gambit-game3/400/300' },
  { title: 'American Football', image: 'https://picsum.photos/seed/gambit-game4/400/300' },
] as const

export const RECENT_TABS = [
  {
    label: 'Live Streaming',
    heading: 'Live Every Match, Every Moment',
    paragraph:
      'Catch exclusive live streams of the biggest tournaments with pro commentary, real-time stats, and interactive chat with fans around the world.',
  },
  {
    label: 'Upcoming Challenges',
    heading: 'Step Into the Arena',
    paragraph:
      'Register for weekly challenges and climb the ranked ladder. New brackets open every Friday with prizes for the top finishers in every tier.',
  },
  {
    label: 'Recent Famous Games',
    heading: 'The Games Everyone Is Talking About',
    paragraph:
      'From battle royales to strategy epics, explore the titles dominating leaderboards this season — with guides, tips, and community reviews.',
  },
] as const

export const GALLERY_IMAGES = [
  'https://picsum.photos/seed/gambit-gallery1/600/450',
  'https://picsum.photos/seed/gambit-gallery2/600/450',
  'https://picsum.photos/seed/gambit-gallery3/600/450',
  'https://picsum.photos/seed/gambit-gallery4/600/450',
] as const

export const TESTIMONIALS = [
  {
    name: 'Marcus Reed',
    quote:
      'Gambit completely changed how our team trains. The tournament calendar and live stats give us an edge we never had before.',
  },
  {
    name: 'Ava Chen',
    quote:
      'The community here is incredible. I found my squad, my coach, and my favorite streamers all in one place. Best gaming platform I have used.',
  },
  {
    name: 'Diego Ramos',
    quote:
      'From casual nights to ranked grind, Gambit makes every session feel like an event. The updates and challenge alerts are always on point.',
  },
] as const

export const PLANS = [
  {
    name: 'Silver Package',
    price: '$49.00',
    features: [
      '1 tournament entry per month',
      'Standard matchmaking queue',
      'Community Discord access',
    ],
    active: false,
  },
  {
    name: 'Golden Package',
    price: '$69.00',
    features: [
      '5 tournament entries per month',
      'Priority matchmaking queue',
      'Exclusive in-game cosmetics',
    ],
    active: true,
  },
  {
    name: 'Platinum Package',
    price: '$99.00',
    features: [
      'Unlimited tournament entries',
      'Dedicated matchmaking server',
      'Coaching sessions with pros',
    ],
    active: false,
  },
] as const

export const FAQS = [
  {
    question: 'How do I join a tournament?',
    answer:
      'Head to the Games section, pick an open bracket, and hit register. You will get a confirmation with the schedule and lobby link 24 hours before the match.',
  },
  {
    question: 'Can I upgrade or downgrade my plan anytime?',
    answer:
      'Yes. Plan changes take effect at the start of the next billing cycle, and the price difference is prorated automatically.',
  },
  {
    question: 'Do you offer refunds?',
    answer:
      'If you have not used any tournament entries, you can request a full refund within 14 days of purchase from your account settings.',
  },
  {
    question: 'What platforms are supported?',
    answer:
      'Gambit works on PC, console, and mobile browsers. Cross-play lobbies are supported for titles that enable them.',
  },
  {
    question: 'How do live streams work?',
    answer:
      'Streams are embedded directly in the platform with zero-lag chat. You can follow your favorite casters and get notified when they go live.',
  },
  {
    question: 'Is there a free tier?',
    answer:
      'Absolutely. The Silver experience is free forever — join the community, watch streams, and play in open community events.',
  },
] as const

export const BLOG_POSTS = [
  {
    title: 'The Rise of Competitive Gaming in 2026',
    excerpt:
      'Esports is bigger than ever. We break down the numbers behind the fastest-growing leagues and what it means for players.',
    date: '13th Dec',
    hearts: '15',
    comments: '05',
    image: 'https://picsum.photos/seed/gambit-blog1/600/400',
  },
  {
    title: 'Top 10 Indie Games to Watch This Season',
    excerpt:
      'From cozy sims to brutal roguelikes, these indie titles are already stealing the spotlight from the big studios.',
    date: '08th Jan',
    hearts: '23',
    comments: '11',
    image: 'https://picsum.photos/seed/gambit-blog2/600/400',
  },
  {
    title: 'How to Build a Tournament-Ready Setup',
    excerpt:
      'Refresh rate, latency, peripherals — our guide to squeezing every millisecond out of your gaming rig without breaking the bank.',
    date: '21st Feb',
    hearts: '31',
    comments: '18',
    image: 'https://picsum.photos/seed/gambit-blog3/600/400',
  },
] as const

export const NEWSLETTER_HEADING = 'Subscribe Our Newsletter'
export const NEWSLETTER_BLURB = "We won't send any kind of spam"

export const FOOTER_COLUMNS = [
  {
    title: 'About Gambit',
    links: ['For Business', 'Premium Plans', 'Reviews', 'How it Works', 'Gambit Blog'],
  },
  {
    title: 'Company',
    links: ['Product Tour', 'Pricing', 'Founding Members', 'Case Studies', 'Product Updates'],
  },
  {
    title: 'Support',
    links: ['Documentation', 'Data Security', 'Site Performance', 'Action Plan', 'Resources'],
  },
  {
    title: 'Legal',
    links: ['Terms and Conditions', 'Privacy Policy', 'Cookie Information', 'Opt-Out'],
  },
] as const
