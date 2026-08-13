export const contact = {
  phone: '+10 267 367 678 2678',
  supportPhone: '+10 783 467 3789',
  email: 'support@sitewise.example',
} as const

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Package', href: '#pricing' },
  { label: 'Blog', href: '#news' },
  { label: 'Support', href: '#support' },
  { label: 'About', href: '#data-centres' },
  { label: 'Contact', href: '#contact' },
] as const

export interface Plan {
  name: string
  icon: 'share' | 'vps' | 'wordpress' | 'dedicated'
  color: 'blue' | 'purple' | 'pink' | 'yellow'
  blurb: string
  price: string
}

export const plans: Plan[] = [
  {
    name: 'Share Hosting',
    icon: 'share',
    color: 'blue',
    blurb: 'Easy drag and drop fully customizable mobile friendly',
    price: 'Start from $2.5/m',
  },
  {
    name: 'VPS Hosting',
    icon: 'vps',
    color: 'purple',
    blurb: 'Full root access and dedicated resources for growing sites',
    price: 'Start from $12/m',
  },
  {
    name: 'Wordpress Hosting',
    icon: 'wordpress',
    color: 'pink',
    blurb: 'Optimized servers, one-click installs, and auto updates',
    price: 'Start from $5.5/m',
  },
  {
    name: 'Dedicated Hosting',
    icon: 'dedicated',
    color: 'yellow',
    blurb: 'A private bare-metal server tuned for heavy workloads',
    price: 'Start from $45/m',
  },
]

export interface Feature {
  title: string
  blurb: string
  color: 'default' | 'blue' | 'pink' | 'yellow'
}

export const featureTabs = [
  {
    label: 'Features',
    features: [
      {
        title: 'Free Domain for 1st Year',
        blurb: 'Every new plan includes a free domain name for your first year of hosting.',
        color: 'default' as const,
      },
      {
        title: 'Free SSL Certificate',
        blurb: 'Secure HTTPS encryption is included on every account at no extra cost.',
        color: 'blue' as const,
      },
      {
        title: '30-Day Money-Back Guarantee',
        blurb: 'Not satisfied? Get a full refund within the first thirty days, no questions asked.',
        color: 'pink' as const,
      },
      {
        title: 'Spam Protection',
        blurb: 'Built-in filtering keeps junk mail and malicious messages away from your inbox.',
        color: 'yellow' as const,
      },
      {
        title: '24h Dedicated Support',
        blurb: 'Our engineers answer tickets, chats, and calls around the clock, every day.',
        color: 'default' as const,
      },
    ],
  },
  {
    label: 'Advanced Features',
    features: [
      {
        title: 'SSD-NVMe Storage',
        blurb: 'Lightning-fast NVMe drives make every page load snappier for your visitors.',
        color: 'blue' as const,
      },
      {
        title: 'Global CDN & Caching',
        blurb: 'Edge caching delivers your content from the data centre closest to each visitor.',
        color: 'pink' as const,
      },
      {
        title: 'Daily Automated Backups',
        blurb: 'Restore any file or database from the last thirty days with a single click.',
        color: 'yellow' as const,
      },
      {
        title: 'DDoS Mitigation',
        blurb: 'Enterprise-grade filtering absorbs attacks before they ever reach your site.',
        color: 'default' as const,
      },
      {
        title: 'Developer-Friendly Tools',
        blurb: 'SSH access, staging environments, Git deploys, and a full REST API included.',
        color: 'blue' as const,
      },
    ],
  },
]

export const dataCentres = [
  {
    city: 'Sydney',
    country: 'Australia',
    blurb: 'Low-latency hosting for the Asia-Pacific region with redundant power and cooling.',
  },
  {
    city: 'London',
    country: 'United Kingdom',
    blurb: 'A Tier III facility in Europe with direct peering to major exchange points.',
  },
  {
    city: 'Frankfurt',
    country: 'Germany',
    blurb: 'Central European hub with strict privacy compliance and high-density racks.',
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    blurb: 'Southeast Asia gateway delivering fast routes to a billion connected users.',
  },
] as const

export interface FaqItem {
  question: string
  answer: string
}

export const faqItems: FaqItem[] = [
  {
    question: 'Is WordPress hosting worth it?',
    answer:
      'Yes — managed WordPress plans handle updates, caching, and security for you, so your site stays fast and safe without daily maintenance work.',
  },
  {
    question: 'What are the advantages of WordPress hosting over shared?',
    answer:
      'WordPress plans are tuned for the platform: pre-configured caching, staging sites, automatic core updates, and support engineers who specialise in WordPress.',
  },
  {
    question: 'Will you transfer my site?',
    answer:
      'Absolutely. Our team migrates your site, databases, and email accounts from your old host for free, with zero downtime scheduled at your convenience.',
  },
  {
    question: 'Why should I host with Sitewise?',
    answer:
      'You get NVMe performance, a 99.9% uptime guarantee, 24/7 expert support, and a 30-day money-back promise — all at prices that stay affordable as you grow.',
  },
  {
    question: 'How do I get started with Shared Hosting?',
    answer:
      'Pick a plan, register or transfer your domain, and our one-click installer will have your first website live within minutes. No technical experience needed.',
  },
]

export const newsPosts = [
  {
    date: '12 Jun, 2019',
    category: 'Hosting tips',
    title: 'Commitment to dedicated Support',
    blurb:
      'Why round-the-clock human support still matters in an age of automated tickets and chatbots.',
    seed: 'sitewise-news-1',
  },
  {
    date: '28 May, 2019',
    category: 'Hosting tips',
    title: 'Five Signs You Need More Bandwidth',
    blurb:
      'Slow uploads, throttled video, and surprise overage fees — and how to fix them before they hurt.',
    seed: 'sitewise-news-2',
  },
  {
    date: '09 May, 2019',
    category: 'Hosting tips',
    title: 'Choosing the Right Hosting Plan',
    blurb:
      'A practical walkthrough of shared, VPS, WordPress, and dedicated options for every budget.',
    seed: 'sitewise-news-3',
  },
] as const

export const serviceLinks = ['Hosting', 'Domain', 'Wordpress', 'Shared Hosting'] as const

export const navigationLinks = ['Home', 'Rooms', 'About', 'News'] as const
