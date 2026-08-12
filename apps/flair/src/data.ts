import { Clock, Gem, Megaphone, Monitor, PenTool, ThumbsUp, type LucideIcon } from 'lucide-react'

/* Flair content data — the single-page creative-agency content (brand, nav,
   hero, features, skills, services, testimonials, blog, footer widgets).
   Text is paraphrased but keeps the same kinds of content. */

export const BRAND = 'Flair'

export const NAV_LINKS = ['Home', 'Pages', 'Work', 'Blog', 'Shop', 'Contact'] as const

export const HERO = {
  videoLabel: 'Watch The Overview',
  videoUrl: 'https://www.youtube.com/watch?v=f5BBJ4ySgpo',
  headline: 'Website Design, Brand Strategy, Digital Marketing with Stunning Results',
  aboutLabel: 'About Us',
  quoteLabel: 'Get a quote',
} as const

export const FEATURES: ReadonlyArray<{ icon: LucideIcon; title: string; text: string }> = [
  {
    icon: ThumbsUp,
    title: 'Reliability',
    text: 'We build dependable websites that perform around the clock, so your business never misses a moment online.',
  },
  {
    icon: Clock,
    title: 'Expertise',
    text: 'Our specialists bring deep experience across design, engineering and strategy to every project we take on.',
  },
  {
    icon: Gem,
    title: 'Quality',
    text: 'Every pixel and line of code is crafted with care — we obsess over the details that make brands shine.',
  },
]

export const ABOUT = {
  heading: 'We Are A Creative Digital Agency Focused on Growing Brands Online',
  paragraphs: [
    'Flair is a full-service creative agency helping ambitious companies stand out online. From brand strategy to polished websites, we combine research, design and engineering to grow your business.',
    'We work as an extension of your team — fast, transparent and focused on results. Tell us where you want to go, and we will build the road to get there.',
  ],
  readMoreLabel: 'Read More',
} as const

export const SKILLS = {
  heading: 'We Serve All Industries',
  subtext:
    'We stay on top of our industry by being experts in yours. We measure our success by the results we drive for our clients.',
  ctaLabel: 'Work with us',
  bars: [
    { label: 'Website Design', percentage: 90 },
    { label: 'Brand Strategy', percentage: 95 },
    { label: 'Digital Marketing', percentage: 85 },
    { label: 'Website Development', percentage: 90 },
  ] as const,
}

export const SERVICES = {
  heading: 'Our Services',
  subtext: 'We Are A Creative Digital Agency. Focused on Growing Brands Online',
  items: [
    {
      icon: PenTool,
      title: 'Website Design',
      text: 'We design clean, modern interfaces that turn visitors into loyal customers.',
    },
    {
      icon: Monitor,
      title: 'Website Development',
      text: 'We build fast, accessible and scalable websites with modern technology.',
    },
    {
      icon: Megaphone,
      title: 'Digital Marketing',
      text: 'We grow brands with smart campaigns, content and data-driven strategy.',
    },
  ] as const,
}

export const TESTIMONIALS = [
  {
    name: 'Aigars Silkalns',
    role: 'CEO DeerCreative',
    quote:
      'Flair completely transformed our online presence. The new site is beautiful, fast and easy to manage — and our enquiries have never been higher.',
  },
  {
    name: 'Aigars Silkalns',
    role: 'CEO DeerCreative',
    quote:
      'Working with the Flair team was a pleasure from start to finish. They listened to our goals, delivered on time and exceeded every expectation.',
  },
  {
    name: 'Aigars Silkalns',
    role: 'CEO DeerCreative',
    quote:
      'The strategy workshop alone paid for the whole project. Our brand finally feels as confident online as it does in person.',
  },
] as const

export const CTA = {
  heading: 'Ready To Discuss Your Project?',
  text: 'There are many ways to contact us. You may drop us a line, give us a call, or send an email — choose what suits you the most.',
  ctaLabel: 'Work with us',
} as const

export const BLOG = {
  heading: 'Latest News',
  subtext: 'Fresh thinking, design tips and stories from the Flair studio.',
  posts: [
    {
      title: 'We Create Experiences',
      text: 'Great design is about more than looks — it is the feeling people take away from every interaction.',
      image: 'https://picsum.photos/id/425/740/480',
    },
    {
      title: 'Simple, Fast And Fun',
      text: 'We strip away the unnecessary and ship products that are quick to load and a joy to use.',
      image: 'https://picsum.photos/id/431/740/480',
    },
    {
      title: 'Device Friendly',
      text: 'Your website should look and feel perfect on every screen, from phones to desktop displays.',
      image: 'https://picsum.photos/id/1080/740/480',
    },
  ] as const,
}

export const FOOTER = {
  newsletterText: 'Subscribe to our mailing list to get the updates to your email inbox.',
  tweet:
    'With the popularity of podcast shows growing with each year, you might consider starting it yourself as well.',
  tweetTime: 'About 20 hours ago',
  linkCategories: [
    'Agency',
    'Home',
    'Studio',
    'About',
    'Studio',
    'Services',
    'Blogs',
    'Work',
    'Shop',
    'Privacy',
  ] as const,
  contact: [
    '1 (800) 686-6688',
    'info.deercreative@gmail.com',
    '40 Baria Sreet 133/2 / NewYork City, US',
    'Open hours: 8.00-18.00 Mon-Fri',
  ] as const,
  nav: ['Disclaimer', 'Privacy', 'Advertisement', 'Contact us'] as const,
} as const

export const SOCIALS = ['Facebook', 'Twitter', 'Google Plus', 'Instagram', 'Pinterest'] as const

/* Placeholder photography (picsum, deterministic per template — subject-
   screened ids for the hero/about/skills/avatar roles; the reference
   photos are never copied). */
export const IMAGES = {
  hero: 'https://picsum.photos/id/453/1920/900',
  about: 'https://picsum.photos/id/64/800/620',
  skills: 'https://picsum.photos/id/823/720/640',
  services: 'https://picsum.photos/id/996/1920/900',
  cta: 'https://picsum.photos/id/1055/1920/720',
  avatar: 'https://picsum.photos/id/1027/340/340',
} as const
