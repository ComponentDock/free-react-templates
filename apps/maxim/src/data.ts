/* Maxim — law firm one-page landing template.
   Sections: navbar, hero, counter stats, about, testimonials,
   practice areas (vertical tabs), attorneys, blog, contact, footer.
   Brand palette: blue #1a73e8 primary, hover #1557b0, dark #212529,
   ink #212529, muted #6c757d, surface #f8f9fa, border #e9ecef.
   Nunito Sans body + headings. */

export const BRAND = 'Maxim'

export interface NavLink {
  label: string
  href: string
  active?: boolean
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#home-section', active: true },
  { label: 'About', href: '#about-section' },
  { label: 'Practice Areas', href: '#practice-section' },
  { label: 'Attorneys', href: '#attorneys-section' },
  { label: 'Blog', href: '#blog-section' },
  { label: 'Contact', href: '#contact-section' },
]

export const HERO = {
  headline: 'Reputation, Respect, Result',
  subtitle:
    'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  cta: 'Request a Quote',
  photo: 'https://picsum.photos/seed/maxim-hero/1920/1080',
}

export const COUNTERS = [
  { number: 50, label: 'Years of Experience', icon: 'building' as const },
  { number: 10000, label: 'Trusted Clients', icon: 'users' as const },
  { number: 564, label: 'Qualified Lawyers', icon: 'scale' as const },
  { number: 300, label: 'Honors & Awards', icon: 'award' as const },
]

export const ABOUT = {
  kicker: 'Welcome',
  heading: 'Welcome to Maxim A Law Firm',
  paragraphs: [
    'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.',
    'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.',
  ],
}

export const TESTIMONIALS = [
  {
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    name: 'Luis Fox',
    role: 'Businessman',
    photo: 'https://picsum.photos/seed/maxim-person1/100/100',
  },
  {
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    name: 'Rachel Green',
    role: 'Entrepreneur',
    photo: 'https://picsum.photos/seed/maxim-person2/100/100',
  },
  {
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    name: 'Ian Smith',
    role: 'Consultant',
    photo: 'https://picsum.photos/seed/maxim-person3/100/100',
  },
]

export const PRACTICE_AREAS = [
  {
    id: 'family',
    label: 'Family Law',
    icon: 'heart',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur. Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.',
  },
  {
    id: 'business',
    label: 'Business Law',
    icon: 'briefcase',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur. Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.',
  },
  {
    id: 'insurance',
    label: 'Insurance Law',
    icon: 'shield',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur. Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.',
  },
  {
    id: 'criminal',
    label: 'Criminal Law',
    icon: 'gavel',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur. Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.',
  },
  {
    id: 'employment',
    label: 'Employment Law',
    icon: 'briefcase',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur. Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.',
  },
  {
    id: 'fire',
    label: 'Fire Accident',
    icon: 'flame',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur. Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.',
  },
  {
    id: 'financial',
    label: 'Financial Law',
    icon: 'dollar-sign',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur. Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.',
  },
  {
    id: 'drug',
    label: 'Drug Offenses',
    icon: 'pill',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur. Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.',
  },
  {
    id: 'sexual',
    label: 'Sexual Offenses',
    icon: 'shield-alert',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur. Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.',
  },
  {
    id: 'property',
    label: 'Property Law',
    icon: 'home',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt voluptate, quibusdam sunt iste dolores consequatur. Inventore fugit error iure nisi reiciendis fugiat illo pariatur quam sequi quod iusto facilis officiis nobis sit quis molestias asperiores rem, blanditiis! Commodi exercitationem vitae deserunt qui nihil ea, tempore et quam natus quaerat doloremque.',
  },
]

export const ATTORNEYS = [
  {
    name: 'Lloyd Wilson',
    role: 'CEO, Founder',
    photo: 'https://picsum.photos/seed/maxim-staff1/400/500',
  },
  {
    name: 'Rachel Parker',
    role: 'Business Lawyer',
    photo: 'https://picsum.photos/seed/maxim-staff2/400/500',
  },
  {
    name: 'Ian Smith',
    role: 'Insurance Lawyer',
    photo: 'https://picsum.photos/seed/maxim-staff3/400/500',
  },
  {
    name: 'Alicia Henderson',
    role: 'Criminal Law',
    photo: 'https://picsum.photos/seed/maxim-staff4/400/500',
  },
]

export const BLOG_POSTS = [
  {
    date: 'May 3, 2020',
    title: 'There live the Blind Texts',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    photo: 'https://picsum.photos/seed/maxim-blog1/800/500',
  },
  {
    date: 'May 3, 2020',
    title: 'A Small River Named Duden',
    excerpt:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    photo: 'https://picsum.photos/seed/maxim-blog2/800/500',
  },
  {
    date: 'May 3, 2020',
    title: 'The Far World of Grammar',
    excerpt:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    photo: 'https://picsum.photos/seed/maxim-blog3/800/500',
  },
]

export const CONTACT = {
  heading: 'Contact Us',
  subheading: 'We respond within 24 hours',
}

export const FOOTER_ABOUT =
  'A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.'

export const FOOTER_NAV_LEFT = [
  { label: 'Home', href: '#home-section' },
  { label: 'About', href: '#about-section' },
  { label: 'Practice Areas', href: '#practice-section' },
  { label: 'Attorneys', href: '#attorneys-section' },
  { label: 'Blog', href: '#blog-section' },
]

export const FOOTER_NAV_RIGHT = [
  { label: 'Contact', href: '#contact-section' },
  { label: 'Request a Quote', href: '#contact-section' },
  { label: 'Family Law', href: '#practice-section' },
  { label: 'Business Law', href: '#practice-section' },
  { label: 'Criminal Law', href: '#practice-section' },
]
