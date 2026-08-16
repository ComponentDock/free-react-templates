export const brand = {
  name: 'Learnly',
  tagline: 'Online Education & Learning',
}

export const topBar = {
  hoursLabel: 'Monday - Friday',
  hoursValue: '8:00AM-8:00PM',
  callLabel: 'Call Us',
  phoneDisplay: '1-234-567-8900',
  socials: ['facebook', 'twitter', 'instagram', 'dribbble'] as const,
}

export interface NavLink {
  label: string
  href: string
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'All Courses', href: '#courses' },
  { label: 'About', href: '#about' },
  { label: 'Team', href: '#team' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  eyebrow: 'Welcome to Learnly',
  headline: 'Best Online Education Expertise',
  copy: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  primaryCta: 'Get Started Now!',
  secondaryCta: 'View Course',
  image: 'https://picsum.photos/id/180/1920/1080',
}

export interface Benefit {
  icon: 'laptop' | 'award' | 'users'
  title: string
  copy: string
}

export const benefits: Benefit[] = [
  {
    icon: 'laptop',
    title: 'Online Courses',
    copy: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: 'award',
    title: 'Earn A Certificates',
    copy: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    icon: 'users',
    title: 'Learn with Expert',
    copy: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
]

export interface Counter {
  icon: 'graduation' | 'users' | 'calendar' | 'book'
  value: string
  caption: string
}

export const counters: Counter[] = [
  { icon: 'graduation', value: '3000', caption: 'Success Stories' },
  { icon: 'users', value: '320', caption: 'Trusted Tutors' },
  { icon: 'calendar', value: '1000', caption: 'Schedules' },
  { icon: 'book', value: '587', caption: 'Courses' },
]

export interface Course {
  icon: string
  title: string
  instructor: string
  lectures: string
  price: string
}

export const courses: Course[] = [
  {
    icon: 'cog',
    title: 'Basic Fundamentals for Software Engineering',
    instructor: 'by John Smith',
    lectures: '50 lectures (190 hrs)',
    price: '$100 All Course / $15 per month',
  },
  {
    icon: 'pen',
    title: 'Enhancing Adobe Photoshop CC 2020 Skills',
    instructor: 'by John Smith',
    lectures: '50 lectures (190 hrs)',
    price: '$100 All Course / $15 per month',
  },
  {
    icon: 'network',
    title: 'HTML, CSS, and Javascript for Web Developers',
    instructor: 'by John Smith',
    lectures: '50 lectures (190 hrs)',
    price: '$100 All Course / $15 per month',
  },
  {
    icon: 'file-code',
    title: 'Introducing to Programming with WordPress',
    instructor: 'by John Smith',
    lectures: '50 lectures (190 hrs)',
    price: '$100 All Course / $15 per month',
  },
  {
    icon: 'palette',
    title: 'Advanced Machine Learning Techniques',
    instructor: 'by John Smith',
    lectures: '50 lectures (190 hrs)',
    price: '$100 All Course / $15 per month',
  },
  {
    icon: 'megaphone',
    title: 'Data Science and Analytics Bootcamp',
    instructor: 'by John Smith',
    lectures: '50 lectures (190 hrs)',
    price: '$100 All Course / $15 per month',
  },
  {
    icon: 'music',
    title: 'UI/UX Design Principles and Best Practices',
    instructor: 'by Sarah Lee',
    lectures: '35 lectures (120 hrs)',
    price: '$100 All Course / $15 per month',
  },
  {
    icon: 'monitor',
    title: 'Digital Marketing Strategy Masterclass',
    instructor: 'by Mike Johnson',
    lectures: '45 lectures (160 hrs)',
    price: '$100 All Course / $15 per month',
  },
  {
    icon: 'activity',
    title: 'Music Production and Audio Engineering',
    instructor: 'by David Chen',
    lectures: '60 lectures (200 hrs)',
    price: '$100 All Course / $15 per month',
  },
]

export interface Category {
  icon: string
  title: string
  count: string
}

export const categories: Category[] = [
  { icon: 'pen', title: 'UI/UX Design Courses', count: '25 Courses' },
  { icon: 'palette', title: 'Art & Design', count: '10 Courses' },
  { icon: 'monitor', title: 'Computer Science', count: '15 Courses' },
  { icon: 'book', title: 'History & Archeologic', count: '25 Courses' },
  { icon: 'file-code', title: 'Software Engineering', count: '25 Courses' },
  { icon: 'network', title: 'Information Software', count: '15 Courses' },
  { icon: 'activity', title: 'Health & Fitness', count: '25 Courses' },
  { icon: 'megaphone', title: 'Marketing', count: '10 Courses' },
  { icon: 'palette', title: 'Graphic Design', count: '15 Courses' },
  { icon: 'music', title: 'Music', count: '25 Courses' },
  { icon: 'briefcase', title: 'Business Administration', count: '10 Courses' },
  { icon: 'globe', title: 'Web Management', count: '15 Courses' },
]

export interface Testimonial {
  name: string
  position: string
  quote: string
  avatar: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Roger Scott',
    position: 'Marketing Manager',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    avatar: 'https://picsum.photos/seed/learnly-person-1027/160/160',
  },
  {
    name: 'Sarah Johnson',
    position: 'Software Engineer',
    quote: 'The courses are practical and the mentors are genuinely invested in your progress.',
    avatar: 'https://picsum.photos/seed/learnly-person-64/160/160',
  },
  {
    name: 'Michael Chen',
    position: 'Data Analyst',
    quote: 'I completed the analytics bootcamp and landed a new role within two months.',
    avatar: 'https://picsum.photos/seed/learnly-person-823/160/160',
  },
  {
    name: 'Emily Davis',
    position: 'UX Designer',
    quote: 'The design principles course completely changed how I approach product work.',
    avatar: 'https://picsum.photos/seed/learnly-person-996/160/160',
  },
  {
    name: 'James Wilson',
    position: 'Product Manager',
    quote: 'Flexible scheduling made it possible to study around a full-time job.',
    avatar: 'https://picsum.photos/seed/learnly-person-1027/160/160',
  },
  {
    name: 'Lisa Martinez',
    position: 'Business Analyst',
    quote: 'Real-world projects in every module. The certificates carry real weight.',
    avatar: 'https://picsum.photos/seed/learnly-person-64/160/160',
  },
  {
    name: 'Robert Taylor',
    position: 'Full Stack Developer',
    quote: 'From HTML basics to a full stack portfolio — the learning path is superb.',
    avatar: 'https://picsum.photos/seed/learnly-person-823/160/160',
  },
  {
    name: 'Amanda Foster',
    position: 'Project Manager',
    quote: 'The community and expert feedback keep you motivated from week one.',
    avatar: 'https://picsum.photos/seed/learnly-person-996/160/160',
  },
  {
    name: 'Kevin Park',
    position: 'Startup Founder',
    quote: 'I recommend Learnly to every founder building their first technical skills.',
    avatar: 'https://picsum.photos/seed/learnly-person-1027/160/160',
  },
]

export interface BlogPost {
  title: string
  excerpt: string
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    title: 'Build your Dream Software & Engineering Career',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: 'https://picsum.photos/seed/learnly-blog-1/800/450',
  },
  {
    title: 'Designing Courses That Keep Students Engaged',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: 'https://picsum.photos/seed/learnly-blog-2/800/450',
  },
  {
    title: 'The Future of Remote Learning Platforms',
    excerpt:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    image: 'https://picsum.photos/seed/learnly-blog-3/800/450',
  },
]

export interface PricingPlan {
  name: string
  price: string
  copy: string
}

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Basic Plan',
    price: '$49K',
    copy: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
  },
  {
    name: 'Beginner Plan',
    price: '$79K',
    copy: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
  },
  {
    name: 'Premium Plan',
    price: '$109K',
    copy: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
  },
  {
    name: 'Ultimate Plan',
    price: '$149K',
    copy: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
  },
]

export const newsletter = {
  heading: 'Newsletter - Stay tune and get the latest update',
  copy: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
  placeholder: 'Enter email address',
  submitLabel: 'Subscribe to newsletter',
  successMessage: 'Thanks for subscribing!',
  errorMessage: 'Please enter a valid email address.',
}

export const footer = {
  blurb:
    'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  socials: ['twitter', 'facebook', 'instagram'] as const,
  exploreTitle: 'Explore',
  exploreLinks: ['About Us', 'Services', 'Courses', 'Blog', 'Contact us'],
  quickTitle: 'Quick Links',
  quickLinks: ['Contact Us', 'Pricing', 'Terms & Conditions', 'Privacy', 'Feedbacks'],
  postsTitle: 'Recent Posts',
  postMeta: 'Oct. 15, 2030',
  postTitle: 'Creativity and Inspiration',
  questionsTitle: 'Have a Questions?',
  address: '203 Fake St. Mountain View, San Francisco, California, USA',
  phoneDisplay: '1-234-567-8900',
  email: 'info@yourdomain.com',
  componentDockHref: 'https://www.componentdock.com/',
  componentDockLabel: 'More templates at Component Dock',
}

export const sectionHeadings = {
  learnAnythingSub: 'Learn Anything',
  learnAnythingTitle: 'Benefits About Online Learning Expertise',
  coursesSub: 'Our Courses',
  coursesTitle: 'Explore Our Popular Online Courses',
  categoriesSub: 'Courses',
  categoriesTitle: 'Browse Our Online Courses',
  testimonialSub: 'Testimonial',
  testimonialTitle: 'Our Successful Students',
  blogSub: 'Our Blog',
  blogTitle: 'Recent From Blog',
  pricingSub: 'Our Pricing',
  pricingTitle: 'Pricing & Packages',
}

export const scrollLeftLabel = 'Previous testimonials'
export const scrollRightLabel = 'Next testimonials'
