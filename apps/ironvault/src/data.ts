/* Ironvault content + image constants. Copy is paraphrased from the source
   demo but keeps the same content kinds (hero eyebrow/headline/CTA, client
   logo strip, about split, feature cards, skill progress bars, experience
   stat card, gallery captions, testimonial slides, slim footer). Photos are
   seeded picsum placeholders — no source assets copied. */

export const BRAND = 'Ironvault'

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
] as const

export const HERO = {
  eyebrow: 'Hey',
  headline: 'I AM IRONVAULT',
  blurb:
    'Certified personal trainer for strength, mobility, and conditioning. I design training programs that fit your body, your schedule, and your goals.',
  cta: 'Hire me',
  image: 'https://picsum.photos/seed/ironvault-hero/640/800',
} as const

export const CLIENTS = ['FLEXFIT', 'POWERHOUSE', 'IRONWORKS', 'STRONGHOLD', 'GRIT LAB'] as const

export const ABOUT = {
  heading: 'about me',
  paragraphs: [
    'I have spent over eight years coaching athletes and beginners alike — building strength programs, fixing movement patterns, and helping people show up stronger every week.',
    'Training is not about the heaviest lift you can chase; it is about the discipline you can keep. My sessions are structured, progressive, and built around your recovery.',
  ],
  signature: 'Phill Vault',
  cta: 'more about me',
  image: 'https://picsum.photos/seed/ironvault-about/560/640',
} as const

export const FEATURES = [
  {
    title: 'Latest instoment',
    text: 'Every program starts with a full movement assessment so we train what actually needs work — not a generic plan.',
  },
  {
    title: 'Latest instoment',
    text: 'Strength, conditioning, and mobility blocks are periodized weekly so your body keeps adapting and stays injury-free.',
  },
  {
    title: 'Latest instoment',
    text: 'Small-group and one-on-one coaching with form checks on every lift, every session, from warm-up to cool-down.',
  },
] as const

export const SKILLS = [
  { label: 'Free Hand Workout', value: 90 },
  { label: 'Gym Trainer', value: 85 },
  { label: 'Hard Workout', value: 70 },
  { label: 'Soft Workout', value: 80 },
  { label: 'Foot Ball', value: 90 },
] as const

export const STAT = {
  number: '08',
  label: 'Years Expesience',
  text: 'Hire me to get the best',
} as const

export const CTA = {
  heading: 'Want to start your next workout with me?',
  cta: 'hire me',
} as const

export const GALLERY = [
  'https://picsum.photos/seed/ironvault-gallery-1/500/650',
  'https://picsum.photos/seed/ironvault-gallery-2/500/400',
  'https://picsum.photos/seed/ironvault-gallery-3/500/650',
  'https://picsum.photos/seed/ironvault-gallery-4/500/400',
  'https://picsum.photos/seed/ironvault-gallery-5/500/650',
  'https://picsum.photos/seed/ironvault-gallery-6/500/400',
  'https://picsum.photos/seed/ironvault-gallery-7/500/650',
] as const

export const GALLERY_CAPTION = 'Lead Trainer'
export const GALLERY_PLACE = 'Multi Plus Gym, USA'

export const TESTIMONIALS = [
  {
    name: 'Daniel E Gilcritst',
    tag: 'Richard Kellerman',
    quote:
      'Eight months of coaching rebuilt my squat, my posture, and my confidence. Every session is purposeful — no wasted reps, no guesswork.',
  },
  {
    name: 'Marcus Bennett',
    tag: 'Marathon runner',
    quote:
      'The programming is smart and honest. I went from constant overuse injuries to my fastest race times in years.',
  },
  {
    name: 'Sarah Whitfield',
    tag: 'New parent, first-time lifter',
    quote:
      'I had never touched a barbell before. Now I train three times a week and feel stronger than I did in my twenties.',
  },
] as const
