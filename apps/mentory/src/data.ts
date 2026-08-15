export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#' },
  { label: 'Tutorials', href: '#tutorials' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Blog', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
]

export interface Course {
  name: string
  icon: string
  color: string
}

/** Brand colors from the original tile glyphs. */
export const courses: Course[] = [
  { name: 'Illustrator', icon: 'illustrator', color: '#ff7c00' },
  { name: 'Photoshop', icon: 'photoshop', color: '#00c8ff' },
  { name: 'Angular', icon: 'angular', color: '#dd0031' },
  { name: 'JavaScript', icon: 'javascript', color: '#f7df1e' },
  { name: 'React', icon: 'react', color: '#61dafb' },
  { name: 'Vue', icon: 'vue', color: '#4fc08d' },
]

export interface Tutorial {
  title: string
  icons: string[]
  meta: string
  image: string
}

export const tutorials: Tutorial[] = [
  {
    title: 'Learning React Native',
    icons: ['react', 'javascript'],
    meta: '1hr 24m · Advanced · Jun 18, 2020',
    image: 'https://picsum.photos/seed/mentory-1/500/300',
  },
  {
    title: 'Learning Angular 101',
    icons: ['angular', 'javascript'],
    meta: '2hr 10m · Beginner · Jun 12, 2020',
    image: 'https://picsum.photos/seed/mentory-2/500/300',
  },
  {
    title: 'Learning Photoshop',
    icons: ['photoshop'],
    meta: '1hr 45m · Intermediate · Jun 05, 2020',
    image: 'https://picsum.photos/seed/mentory-3/500/300',
  },
  {
    title: 'Advance Illustrator',
    icons: ['illustrator'],
    meta: '3hr 05m · Advanced · May 29, 2020',
    image: 'https://picsum.photos/seed/mentory-4/500/300',
  },
]

export interface SidebarItem {
  title: string
  image: string
}

export const sidebarItems: SidebarItem[] = [
  { title: 'Learning React Native', image: 'https://picsum.photos/seed/mentory-5/600/300' },
  { title: 'Learning React Native', image: 'https://picsum.photos/seed/mentory-6/600/300' },
  { title: 'Learning React Native', image: 'https://picsum.photos/seed/mentory-7/600/300' },
]

export interface Review {
  title: string
  quote: string
  name: string
  role: string
  avatar: string
}

export const reviews: Review[] = [
  {
    title: 'Excellent Teacher!',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Mike Fisher',
    role: 'Owner, Ford',
    avatar: 'https://picsum.photos/seed/mentory-8/100/100',
  },
  {
    title: 'Best Video Tutorial!',
    quote:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows.',
    name: 'Jean Stanley',
    role: 'Traveler',
    avatar: 'https://picsum.photos/seed/mentory-9/100/100',
  },
  {
    title: 'Easy to Understand!',
    quote:
      'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin.',
    name: 'Katie Rose',
    role: 'Customer',
    avatar: 'https://picsum.photos/seed/mentory-10/100/100',
  },
]

export interface FooterColumn {
  heading: string
  links: string[]
}

export const footerColumns: FooterColumn[] = [
  {
    heading: 'Quick Links',
    links: ['About Us', 'Testimonials', 'Terms of Service', 'Privacy', 'Contact Us'],
  },
  {
    heading: 'Resources',
    links: ['About Us', 'Testimonials', 'Terms of Service', 'Privacy', 'Contact Us'],
  },
  {
    heading: 'Support',
    links: ['About Us', 'Testimonials', 'Terms of Service', 'Privacy', 'Contact Us'],
  },
  {
    heading: 'Company',
    links: ['About Us', 'Testimonials', 'Terms of Service', 'Privacy', 'Contact Us'],
  },
]

export const heroImage = 'https://picsum.photos/id/2/1920/1280'
export const featuredImage = 'https://picsum.photos/seed/mentory-11/520/400'
