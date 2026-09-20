import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('LearnPeak — Online Education Courses')
  })

  it('renders banner, main, and contentinfo landmarks', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})

describe('TopBar', () => {
  it('shows register and login links', () => {
    render(<App />)
    expect(screen.getAllByRole('link', { name: 'Register' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: 'Login' }).length).toBeGreaterThanOrEqual(1)
  })

  it('shows contact info in top bar', () => {
    render(<App />)
    const banner = screen.getByRole('banner')
    expect(within(banner).getByText('+53 345 7953 32453')).toBeInTheDocument()
    expect(within(banner).getByText('info@learnpeak.com')).toBeInTheDocument()
  })
})

describe('Navbar', () => {
  it('renders navigation links', () => {
    render(<App />)
    const nav = screen.getByRole('navigation')
    expect(within(nav).getByText('Home')).toBeInTheDocument()
    expect(within(nav).getByText('About Us')).toBeInTheDocument()
    expect(within(nav).getByText('Courses')).toBeInTheDocument()
    expect(within(nav).getByText('News')).toBeInTheDocument()
    expect(within(nav).getByText('Contact')).toBeInTheDocument()
  })

  it('has a search button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('toggles mobile menu', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggle = screen.getByRole('button', { name: 'Toggle menu' })
    await user.click(toggle)
    expect(screen.getAllByText('Home').length).toBeGreaterThan(1)
  })
})

describe('HeroSlider', () => {
  it('renders a heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /Complete Online Courses/i })).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<App />)
    expect(screen.getAllByText('Learn More').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('See All Courses').length).toBeGreaterThanOrEqual(1)
  })

  it('advances to the next slide on next button click', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { name: /Expert Instructors/i })).toBeInTheDocument()
  })

  it('goes to the previous slide on prev button click', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('heading', { name: /Learn Anytime, Anywhere/i })).toBeInTheDocument()
  })

  it('navigates to a specific slide via pagination', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(screen.getByRole('heading', { name: /Learn Anytime, Anywhere/i })).toBeInTheDocument()
  })
})

describe('FeaturedCourse', () => {
  it('renders featured course details', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Online Literature Course' })).toBeInTheDocument()
    expect(screen.getAllByText('$35').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/James S\. Morrison/)).toBeInTheDocument()
  })
})

describe('CourseCards', () => {
  it('renders course section heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Choose Your Course' })).toBeInTheDocument()
  })

  it('renders three course cards', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Web Design Fundamentals' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Digital Marketing Basics' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Photography Masterclass' })).toBeInTheDocument()
  })

  it('has a search course button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /Search Course/i })).toBeInTheDocument()
  })
})

describe('Milestones', () => {
  it('renders four milestone stats', () => {
    render(<App />)
    expect(screen.getByText('4,789')).toBeInTheDocument()
    expect(screen.getByText('1,599')).toBeInTheDocument()
    expect(screen.getByText('326')).toBeInTheDocument()
    expect(screen.getByText('1,200')).toBeInTheDocument()
  })

  it('renders stat labels', () => {
    render(<App />)
    expect(screen.getByText('Happy Students')).toBeInTheDocument()
    expect(screen.getByText('Online Courses')).toBeInTheDocument()
    expect(screen.getByText('Expert Teachers')).toBeInTheDocument()
    expect(screen.getByText('Awards Won')).toBeInTheDocument()
  })
})

describe('WhyChooseUs', () => {
  it('renders accordions and events headings', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Why Choose Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Upcoming Events' })).toBeInTheDocument()
  })

  it('toggles accordion panels', async () => {
    const user = userEvent.setup()
    render(<App />)
    const buttons = screen.getAllByRole('button', { name: /Why choose our platform/i })
    const firstBtn = buttons[0]!
    expect(firstBtn).toHaveAttribute('aria-expanded', 'true')
    await user.click(firstBtn)
    expect(firstBtn).toHaveAttribute('aria-expanded', 'false')
    await user.click(firstBtn)
    expect(firstBtn).toHaveAttribute('aria-expanded', 'true')
  })

  it('shows event dates', () => {
    render(<App />)
    expect(screen.getByText('20')).toBeInTheDocument()
    expect(screen.getAllByText('April').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('New Marketing Course Release')).toBeInTheDocument()
  })
})

describe('News', () => {
  it('renders news section heading', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Latest News' })).toBeInTheDocument()
  })

  it('renders three blog posts', () => {
    render(<App />)
    expect(screen.getByText('Why Choose Online Education?')).toBeInTheDocument()
    expect(screen.getByText('Books, Kindle or Tablet?')).toBeInTheDocument()
    expect(screen.getByText('Tips for Online Learning Success')).toBeInTheDocument()
  })
})

describe('JoinCta', () => {
  it('renders the CTA heading and button', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Join Our Platform Today' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Register Now/i })).toBeInTheDocument()
  })
})

describe('Footer', () => {
  it('has a link to Component Dock', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders footer column headings', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: 'Quick Menu' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Useful Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument()
  })

  it('shows contact info in footer', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    expect(
      within(footer).getByText('1481 Creekside Lane Avila Beach, CA 93424'),
    ).toBeInTheDocument()
    expect(within(footer).getByText('yourmail@gmail.com')).toBeInTheDocument()
  })
})
