import { useState, type FormEvent, type ReactNode } from 'react'
import { Calendar, Folder, Play, Search, Tag } from 'lucide-react'
import { BrandIcon } from './BrandIcon'

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/

export const tags = [
  'Modeling',
  'Fashion',
  'Life',
  'Blog',
  'Workout',
  'Vacation',
  'Travel',
  'Exercise',
  'Health',
  'News',
  'Model',
  'Women',
  'Animals',
  'Nature',
  'Art',
  'Sea',
  'Ocean',
  'Office',
  'Home',
] as const

const recentPosts = [
  {
    seed: 'feature-recent-1',
    title: 'The Most Popular Leg Workout for Women',
    date: 'January 21, 2018',
  },
  {
    seed: 'feature-recent-2',
    title: 'Popular Lifestyle with Fashion & Modeling',
    date: 'January 19, 2018',
  },
  {
    seed: 'feature-recent-3',
    title: 'Video Post Travel with my Friends',
    date: 'January 17, 2018',
  },
  {
    seed: 'feature-recent-4',
    title: '7 Tricks of Skateboarding For A Beginner',
    date: 'January 15, 2018',
  },
] as const

const categories = ['Blog', 'Lifestyle', 'Travel', 'Fashion'] as const

const aboutSocials = [
  { label: 'Facebook', name: 'facebook' },
  { label: 'Twitter', name: 'twitter' },
  { label: 'Instagram', name: 'instagram' },
  { label: 'Google', name: 'google' },
] as const

const gallerySeeds = [
  'feature-gal-1',
  'feature-gal-2',
  'feature-gal-3',
  'feature-gal-4',
  'feature-gal-5',
  'feature-gal-6',
  'feature-gal-7',
  'feature-gal-8',
] as const

function SidebarHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-8 text-center font-serif text-xl italic text-ink-heading after:mx-auto after:mt-[15px] after:block after:h-[2px] after:w-[50px] after:bg-brand-500 dark:text-gray-100">
      {children}
    </h3>
  )
}

function SearchBox() {
  return (
    <div className="mb-20 bg-card-100 p-8 dark:bg-gray-900">
      <form role="search" className="relative">
        <label htmlFor="feature-search" className="sr-only">
          Search
        </label>
        <input
          id="feature-search"
          type="text"
          placeholder="Enter any key to search..."
          className="w-full border-2 border-white bg-white py-3 pr-16 pl-4 text-lg outline-none transition-colors focus:border-brand-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
        />
        <button
          type="submit"
          aria-label="Search"
          className="absolute top-0 right-0 flex h-full w-12 items-center justify-center bg-brand-500 text-white transition-colors hover:bg-brand-600"
        >
          <Search className="h-5 w-5" aria-hidden="true" />
        </button>
      </form>
    </div>
  )
}

function AboutMe() {
  return (
    <div className="mb-20">
      <SidebarHeading>About Me</SidebarHeading>
      <img
        src="https://picsum.photos/seed/feature-about/350/350"
        alt="Steph"
        loading="lazy"
        className="h-[350px] w-full object-cover"
      />
      <p className="mt-6 text-center text-ink-body">
        Hi! My Name is <strong>Steph</strong> — a lifestyle writer sharing stories about fashion,
        travel and everyday inspiration.
      </p>
      <ul className="mt-6 flex items-center justify-center gap-4">
        {aboutSocials.map((social) => (
          <li key={social.name}>
            <a
              href="#"
              aria-label={social.label}
              className="text-brand-500 transition-colors hover:text-brand-600"
            >
              <BrandIcon name={social.name} className="h-5 w-5" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function RecentPost() {
  return (
    <div className="mb-20">
      <SidebarHeading>Recent Post</SidebarHeading>
      <ul className="space-y-12">
        {recentPosts.map((post) => (
          <li key={post.seed} className="relative min-h-[100px] bg-card-100 p-4 dark:bg-gray-900">
            <a href="#" className="absolute top-4 left-4 block h-[100px] w-[120px]">
              <img
                src={`https://picsum.photos/seed/${post.seed}/120/100`}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </a>
            <div className="pl-[140px]">
              <h4 className="font-serif text-[19px] italic leading-[1.4] text-ink-heading dark:text-gray-100">
                <a href="#" className="transition-colors hover:text-brand-500">
                  {post.title}
                </a>
              </h4>
              <span className="mt-2 inline-flex items-center gap-2 text-[13px] text-gray-500">
                <Calendar className="h-4 w-4" aria-hidden="true" />
                {post.date}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Categories() {
  return (
    <div className="mb-20">
      <SidebarHeading>Categories</SidebarHeading>
      <ul>
        {categories.map((category) => (
          <li key={category} className="border-b border-dashed border-line-dash">
            <a
              href="#"
              className="flex items-center gap-3 py-2.5 text-ink-heading transition-colors hover:text-brand-500 dark:text-gray-100"
            >
              <Folder className="h-4 w-4 text-brand-500" aria-hidden="true" />
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function VideoPost() {
  return (
    <div className="mb-20">
      <SidebarHeading>Video Post</SidebarHeading>
      <div className="relative h-[250px]">
        <img
          src="https://picsum.photos/seed/feature-video/400/250"
          alt=""
          loading="lazy"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
        <button
          type="button"
          aria-label="Play video"
          className="absolute top-1/2 left-1/2 flex h-[70px] w-[70px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-500 text-white transition-transform hover:scale-110"
        >
          <Play className="h-7 w-7" aria-hidden="true" fill="currentColor" />
        </button>
      </div>
    </div>
  )
}

function Tags() {
  return (
    <div className="mb-20">
      <SidebarHeading>Tags</SidebarHeading>
      <ul className="flex flex-wrap gap-x-5 gap-y-3">
        {tags.map((tag) => (
          <li key={tag}>
            <a
              href="#"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-ink-heading transition-colors hover:text-brand-500 dark:text-gray-100"
            >
              <Tag className="h-3.5 w-3.5 text-brand-500" aria-hidden="true" />
              {tag}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Gallery() {
  return (
    <div className="mb-20">
      <SidebarHeading>Gallery</SidebarHeading>
      <div className="grid grid-cols-2 gap-2">
        {gallerySeeds.map((seed, index) => (
          <a
            key={seed}
            href="#"
            aria-label={`Gallery image ${index + 1}`}
            className="group relative h-[170px] overflow-hidden"
          >
            <img
              src={`https://picsum.photos/seed/${seed}/340/170`}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 text-white opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
              <Search className="h-5 w-5" aria-hidden="true" />
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

function Blockquote() {
  return (
    <div className="mb-20">
      <SidebarHeading>Blockquote</SidebarHeading>
      <blockquote className="font-serif italic text-ink-body">
        &ldquo;Little Blind Text didn&apos;t listen. She packed her seven versalia, put her initial
        into the belt and made herself on the way.&rdquo;
      </blockquote>
    </div>
  )
}

function Paragraph() {
  return (
    <div className="mb-20">
      <SidebarHeading>Paragraph</SidebarHeading>
      <p className="text-ink-body">
        A small river named Duden flows by their place and supplies it with the necessary
        regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your
        mouth.
      </p>
    </div>
  )
}

function Subscribe() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'error' | 'success'>('idle')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!EMAIL_PATTERN.test(email)) {
      setStatus('error')
      return
    }
    setStatus('success')
  }

  return (
    <div className="bg-card-100 p-8 dark:bg-gray-900">
      <SidebarHeading>Subscribe to our newsletter</SidebarHeading>
      <form onSubmit={handleSubmit} noValidate className="flex flex-col items-center gap-4">
        <label htmlFor="feature-email" className="sr-only">
          Email address
        </label>
        <input
          id="feature-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter your email"
          aria-invalid={status === 'error'}
          className="w-full border-2 border-white bg-white px-4 py-3 text-center outline-none transition-colors focus:border-brand-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
        />
        <button
          type="submit"
          className="w-full rounded-full bg-brand-500 px-8 py-3 font-semibold text-white transition-colors hover:bg-brand-600 sm:w-auto"
        >
          Subscribe
        </button>
        {status === 'error' && (
          <p role="alert" className="text-sm text-red-600">
            Please enter a valid email address.
          </p>
        )}
        {status === 'success' && (
          <p role="status" className="text-sm text-brand-600">
            Thanks for subscribing!
          </p>
        )}
      </form>
    </div>
  )
}

export function Sidebar() {
  return (
    <aside className="min-w-0">
      <SearchBox />
      <AboutMe />
      <RecentPost />
      <Categories />
      <VideoPost />
      <Tags />
      <Gallery />
      <Blockquote />
      <Paragraph />
      <Subscribe />
    </aside>
  )
}
