/** Static content for the Advocat template. */

export const brand = {
  name: 'Advocat',
  tagline: 'Lawfirm Agency',
} as const

export const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Practice Areas', href: '#practice' },
  { label: 'Cases', href: '#cases' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
] as const

export const heroSlides = [
  {
    heading: 'Experienced Legal Counsel You Can Trust',
    body: 'A dedicated team providing comprehensive legal solutions for individuals and businesses. We fight for your rights with integrity and determination.',
    cta: 'Make An Appointment',
    image: 'https://picsum.photos/seed/advocat-hero1/1920/900',
  },
  {
    heading: 'Help To Reclaim Your Life And Freedom',
    body: 'Our experienced attorneys are ready to stand by your side. With decades of combined experience, we deliver results that matter.',
    cta: 'Make An Appointment',
    image: 'https://picsum.photos/seed/advocat-hero2/1920/900',
  },
  {
    heading: 'We Are Ready For A Fight Against Injustice',
    body: 'Justice is not a privilege — it is a right. Let our team champion your cause with unwavering commitment and legal expertise.',
    cta: 'Make An Appointment',
    image: 'https://picsum.photos/seed/advocat-hero3/1920/900',
  },
] as const

export const stats = [
  { value: 1500, label: 'Qualified Lawyers', icon: 'Scale' as const },
  { value: 2100, label: 'Successful Cases', icon: 'Briefcase' as const },
  { value: 2700, label: 'Happy Clients', icon: 'Smile' as const },
  { value: 1010, label: 'Awards & Honors', icon: 'Award' as const },
] as const

export const practiceAreas = [
  {
    title: 'Bank & Financial',
    description:
      'Expert legal guidance for banking regulations, financial compliance, and corporate finance matters.',
    image: 'https://picsum.photos/seed/advocat-practice1/400/300',
    icon: 'Landmark' as const,
  },
  {
    title: 'Personal Injury',
    description:
      'Dedicated representation for accident victims seeking fair compensation for their injuries.',
    image: 'https://picsum.photos/seed/advocat-practice2/400/300',
    icon: 'HeartPulse' as const,
  },
  {
    title: 'Family Law',
    description:
      'Compassionate counsel for divorce, custody, adoption, and all family legal matters.',
    image: 'https://picsum.photos/seed/advocat-practice3/400/300',
    icon: 'Users' as const,
  },
  {
    title: 'Criminal Law',
    description:
      'Aggressive defense strategies to protect your rights and freedom in criminal proceedings.',
    image: 'https://picsum.photos/seed/advocat-practice4/400/300',
    icon: 'Shield' as const,
  },
] as const

export const services = [
  {
    title: 'Get Legal Advice',
    description: 'Comprehensive legal consultation tailored to your specific situation and needs.',
  },
  {
    title: 'We Protect Justice',
    description: 'Standing firm against injustice with unwavering commitment to the rule of law.',
  },
  {
    title: 'Best Attorneys Team',
    description:
      'A team of top-rated attorneys with proven track records in various practice areas.',
  },
] as const

export const caseStudies = [
  {
    title: 'Business Law',
    description: 'Corporate restructuring and compliance',
    image: 'https://picsum.photos/seed/advocat-case1/400/400',
  },
  {
    title: 'Family Law',
    description: 'Complex custody resolution',
    image: 'https://picsum.photos/seed/advocat-case2/400/400',
  },
  {
    title: 'Criminal Defense',
    description: 'High-profile acquittal case',
    image: 'https://picsum.photos/seed/advocat-case3/400/400',
  },
  {
    title: 'Personal Injury',
    description: 'Major settlement victory',
    image: 'https://picsum.photos/seed/advocat-case4/400/400',
  },
] as const

export const testimonials = [
  {
    text: 'The team at Advocat handled my case with exceptional professionalism and care. I could not have asked for better representation.',
    name: 'Sarah Mitchell',
    role: 'Business Owner',
    image: 'https://picsum.photos/seed/advocat-person1/80/80',
  },
  {
    text: 'They fought tirelessly for my rights and delivered a result that exceeded my expectations. Truly grateful for their dedication.',
    name: 'James Cooper',
    role: 'Marketing Manager',
    image: 'https://picsum.photos/seed/advocat-person2/80/80',
  },
  {
    text: 'Professional, responsive, and thorough. Advocat made a stressful legal process feel manageable and supported.',
    name: 'Emily Rogers',
    role: 'Software Engineer',
    image: 'https://picsum.photos/seed/advocat-person3/80/80',
  },
  {
    text: 'Outstanding legal expertise combined with genuine compassion. They truly care about their clients and it shows.',
    name: 'Michael Chen',
    role: 'Real Estate Agent',
    image: 'https://picsum.photos/seed/advocat-person4/80/80',
  },
  {
    text: 'From the first consultation to the final resolution, Advocat provided top-tier legal service every step of the way.',
    name: 'Linda Park',
    role: 'Restaurant Owner',
    image: 'https://picsum.photos/seed/advocat-person5/80/80',
  },
] as const

export const blogPosts = [
  {
    title: 'Understanding Your Rights in Criminal Defense Cases',
    excerpt:
      'A guide to knowing what to expect when facing criminal charges and how to protect yourself.',
    date: 'Nov 23, 2024',
    image: 'https://picsum.photos/seed/advocat-blog1/400/250',
  },
  {
    title: 'How to Choose the Right Lawyer for Your Case',
    excerpt: 'Key factors to consider when selecting legal representation for your specific needs.',
    date: 'Nov 18, 2024',
    image: 'https://picsum.photos/seed/advocat-blog2/400/250',
  },
  {
    title: 'Recent Changes in Business Law You Should Know',
    excerpt:
      'Important regulatory updates that may affect your business operations and compliance.',
    date: 'Nov 10, 2024',
    image: 'https://picsum.photos/seed/advocat-blog3/400/250',
  },
] as const

export const footer = {
  about:
    'Dedicated to providing exceptional legal services with integrity and compassion. Your trusted partner in navigating complex legal matters.',
  practiceLinks: [
    'Bank & Financial',
    'Personal Injury',
    'Family Law',
    'Criminal Law',
    'Business Law',
  ],
  hours: [
    { label: 'Monday – Friday', value: '9:00 AM – 6:00 PM' },
    { label: 'Saturday', value: '10:00 AM – 2:00 PM' },
    { label: 'Sunday', value: 'Closed' },
  ],
  contact: {
    address: '203 Fake St. Mountain View, San Francisco, CA, USA',
    phone: '+2 392 3929 210',
    email: 'info@advocat.com',
  },
} as const
