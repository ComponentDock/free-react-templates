import { render, screen, fireEvent, within, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { App } from './App'
import { TopMenu } from './components/TopMenu'
import { Navbar } from './components/Navbar'
import { HeroBanner } from './components/HeroBanner'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { Team } from './components/Team'
import { Counter, CounterItem } from './components/Counter'
import { Features } from './components/Features'
import { Testimonials } from './components/Testimonials'
import { ClientLogos } from './components/ClientLogos'
import { Footer } from './components/Footer'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
    expect(screen.getByText(/Build Your/)).toBeInTheDocument()
    expect(screen.getByText(/Our Offered Services/)).toBeInTheDocument()
    expect(screen.getByText(/Our Latest Projects/)).toBeInTheDocument()
    expect(screen.getByText(/Meet Our Expert Members/)).toBeInTheDocument()
    expect(screen.getByText(/Some Features that Made us Unique/)).toBeInTheDocument()
    expect(screen.getByText(/About Us/i)).toBeInTheDocument()
  })
})

describe('TopMenu', () => {
  it('renders social icons and language selector', () => {
    render(<TopMenu />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
    expect(screen.getByRole('combobox', { name: /language selector/i })).toBeInTheDocument()
    expect(screen.getByText('Free Quote!')).toBeInTheDocument()
  })
})

describe('Navbar', () => {
  it('renders logo and nav links', () => {
    render(<Navbar />)
    expect(screen.getByText(/Embankment/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Embankment logo/i })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getAllByText('Blog').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('toggles mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggleBtn = screen.getByRole('button', { name: /toggle navigation menu/i })
    await user.click(toggleBtn)
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'true')
    await user.click(toggleBtn)
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'false')
  })

  it('shows dropdown on hover for Pages', () => {
    render(<Navbar />)
    const pagesLinks = screen.getAllByText('Pages')
    const pagesLink = pagesLinks.find((el) => el.tagName === 'A')!
    fireEvent.mouseEnter(pagesLink.closest('li')!)
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Elements')).toBeInTheDocument()
  })

  it('shows blog dropdown on hover', () => {
    render(<Navbar />)
    const navLinks = screen.getAllByText('Blog')
    const blogLink = navLinks[0]!.closest('li')!
    fireEvent.mouseEnter(blogLink)
    expect(screen.getByText('Blog Details')).toBeInTheDocument()
  })

  it('adds shadow on scroll', () => {
    render(<Navbar />)
    const nav = screen.getByRole('navigation', { name: /main navigation/i })
    expect(nav).not.toHaveClass('shadow-md')
    fireEvent.scroll(window, { target: { scrollY: 100 } })
    expect(nav).toHaveClass('shadow-md')
  })
})

describe('HeroBanner', () => {
  it('renders heading with golden accent', () => {
    render(<HeroBanner />)
    expect(screen.getByText('Build Your')).toBeInTheDocument()
    expect(screen.getByText('Dream')).toBeInTheDocument()
    expect(screen.getByText('Discover Now')).toBeInTheDocument()
  })
})

describe('Services', () => {
  it('renders 3 service cards', () => {
    render(<Services />)
    expect(screen.getByText('Building Drawings')).toBeInTheDocument()
    expect(screen.getByText('Painting Constructions')).toBeInTheDocument()
    expect(screen.getByText('Repairing Constructions')).toBeInTheDocument()
  })
})

describe('Projects', () => {
  it('renders 6 project cards', () => {
    render(<Projects />)
    const images = screen.getAllByRole('img')
    const projectImages = images.filter((img) => img.getAttribute('src')?.includes('embankment-p'))
    expect(projectImages).toHaveLength(6)
  })
})

describe('Team', () => {
  it('renders 4 team members', () => {
    render(<Team />)
    expect(screen.getByText('Ethel Davis')).toBeInTheDocument()
    expect(screen.getByText('Morgan Freeman')).toBeInTheDocument()
    expect(screen.getByText('Angela Simpson')).toBeInTheDocument()
    expect(screen.getByText('David Cooper')).toBeInTheDocument()
  })

  it('shows social links on hover', () => {
    render(<Team />)
    const card = screen.getByText('Ethel Davis').closest('.group') as HTMLElement
    const facebookLink = within(card).getByLabelText('Ethel Davis on Facebook')
    expect(facebookLink).toBeInTheDocument()
  })
})

describe('Counter', () => {
  it('renders 5 stats', () => {
    render(<Counter />)
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Total Tasks')).toBeInTheDocument()
    expect(screen.getByText('Cups of Coffee')).toBeInTheDocument()
    expect(screen.getByText('In House Professionals')).toBeInTheDocument()
  })

  it('animates count to target value', () => {
    vi.useFakeTimers()
    render(<CounterItem value={100} label="Test" />)
    act(() => {
      vi.advanceTimersByTime(2500)
    })
    expect(screen.getByText('100')).toBeInTheDocument()
    vi.useRealTimers()
  })
})

describe('Features', () => {
  it('renders 6 feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Expert Technicians')).toBeInTheDocument()
    expect(screen.getByText('Professional Service')).toBeInTheDocument()
    expect(screen.getByText('Great Support')).toBeInTheDocument()
    expect(screen.getByText('Technical Skills')).toBeInTheDocument()
    expect(screen.getByText('Highly Recommended')).toBeInTheDocument()
    expect(screen.getByText('Positive Reviews')).toBeInTheDocument()
  })
})

describe('Testimonials', () => {
  it('renders first testimonial', () => {
    render(<Testimonials />)
    expect(screen.getByText('Mark Alviro Wiens')).toBeInTheDocument()
    expect(screen.getByText('CEO at Google')).toBeInTheDocument()
  })

  it('navigates to next testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('CTO at Microsoft')).toBeInTheDocument()
  })

  it('navigates to previous testimonial', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
  })
})

describe('ClientLogos', () => {
  it('renders 5 client logos', () => {
    render(<ClientLogos />)
    const logos = screen.getAllByAltText('Client logo')
    expect(logos).toHaveLength(5)
  })
})

describe('Footer', () => {
  it('renders footer sections and Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
    const cdLink = screen.getByText('Component Dock')
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('submits newsletter form', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByRole('textbox', { name: /email address for newsletter/i })
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe to newsletter/i }))
    expect(input).toHaveValue('')
  })
})
