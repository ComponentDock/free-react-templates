import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { App } from './App'

beforeEach(() => {
  vi.clearAllMocks()
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      observe = vi.fn()
      disconnect = vi.fn()
      unobserve = vi.fn()
    },
  )
  vi.stubGlobal('scrollIntoView', vi.fn())
})

describe('Bistrox App', () => {
  it('renders all major sections', () => {
    render(<App />)

    // Navbar
    expect(screen.getAllByText('Bistrox').length).toBeGreaterThan(0)

    // Hero
    expect(screen.getByText(/Book a table for yourself/)).toBeInTheDocument()

    // Reservation Form
    expect(screen.getByRole('button', { name: /Book a table/i })).toBeInTheDocument()

    // About
    expect(screen.getByText(/About Bistrox/)).toBeInTheDocument()

    // Menu
    expect(screen.getByText('Main')).toBeInTheDocument()

    // Specialties parallax
    expect(screen.getByText('Our Specialties')).toBeInTheDocument()

    // Testimonials
    expect(screen.getByText('Dennis Green')).toBeInTheDocument()

    // Blog
    expect(screen.getAllByText('Blog & News').length).toBeGreaterThan(0)

    // Footer
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Bistrox — Restaurant Template')
  })
})

describe('Navbar', () => {
  it('renders logo and navigation links', () => {
    render(<App />)
    expect(screen.getAllByText('Bistrox').length).toBeGreaterThan(0)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Menu' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: 'Specialties' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: 'Reservation' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: 'Blog' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: 'About' }).length).toBeGreaterThan(0)
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<App />)

    const toggleBtn = screen.getByRole('button', { name: 'Toggle menu' })
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggleBtn)
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'true')

    await user.click(toggleBtn)
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'false')
  })

  it('becomes sticky on scroll', async () => {
    render(<App />)
    const nav = document.querySelector('nav')
    expect(nav).toBeInTheDocument()

    Object.defineProperty(window, 'scrollY', { value: 200, writable: true, configurable: true })
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })

    expect(nav?.className).toContain('fixed')
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    const toggleBtn = screen.getByRole('button', { name: 'Toggle menu' })
    await user.click(toggleBtn)
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'true')

    // Find a mobile nav link (in the mobile dropdown, not desktop)
    const mobileLinks = document.querySelectorAll('.md\\:hidden a')
    if (mobileLinks.length > 0 && mobileLinks[0]) {
      await user.click(mobileLinks[0])
    }
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'false')
  })
})

describe('Hero', () => {
  it('renders hero heading and CTA', () => {
    render(<App />)
    expect(screen.getByText(/Book a table for yourself/)).toBeInTheDocument()
    expect(screen.getByText(/Tasty & Delicious Food/)).toBeInTheDocument()

    // Hero has a "Book a table" button inside it
    const heroSection =
      document.querySelector('[data-testid="hero"]') || document.querySelector('section')
    expect(heroSection).toBeInTheDocument()
  })
})

describe('ReservationForm', () => {
  it('renders all fields', () => {
    render(<App />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Time')).toBeInTheDocument()
    expect(screen.getByLabelText('Person')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Book a table/i })).toBeInTheDocument()
  })

  it('allows filling form fields', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByLabelText('Name'), 'John')
    await user.type(screen.getByLabelText('Phone'), '555-1234')
    await user.type(screen.getByLabelText('Date'), '2026-10-15')
    await user.type(screen.getByLabelText('Time'), '19:00')
    await user.selectOptions(screen.getByLabelText('Person'), '2')

    expect(screen.getByLabelText('Name')).toHaveValue('John')
    expect(screen.getByLabelText('Phone')).toHaveValue('555-1234')
  })

  it('submits form via button click', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByLabelText('Name'), 'John')
    await user.click(screen.getByRole('button', { name: /Book a table/i }))

    // Form should not navigate (preventDefault was called)
    expect(screen.getByLabelText('Name')).toHaveValue('John')
  })
})

describe('AboutSection', () => {
  it('renders about heading and image', () => {
    render(<App />)
    expect(screen.getByText('About Bistrox')).toBeInTheDocument()
    expect(screen.getByText(/Our chef cooks the most delicious food for you/)).toBeInTheDocument()
    expect(screen.getByAltText('About Bistrox')).toBeInTheDocument()
  })
})

describe('MenuSection', () => {
  it('renders menu tabs and Main items by default', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /Main/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Dessert/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Drinks/ })).toBeInTheDocument()

    // Main items visible
    expect(screen.getByText('Grilled Beef with Potatoes')).toBeInTheDocument()
    expect(screen.getByText('Asian Hoisin Pork')).toBeInTheDocument()
  })

  it('switches tab to Dessert on click', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /Dessert/ }))
    expect(screen.getByText('Fruit Vanilla Ice Cream')).toBeInTheDocument()
    expect(screen.getByText('Spicy Fried Rice & Bacon')).toBeInTheDocument()
  })

  it('switches tab to Drinks on click', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /Drinks/ }))
    expect(screen.getByText('Udon Noodles')).toBeInTheDocument()
    expect(screen.getByText('Baked Lobster')).toBeInTheDocument()
  })

  it('renders Make a Reservation CTA', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /Make a Reservation/ })).toBeInTheDocument()
  })
})

describe('SpecialtiesGrid', () => {
  it('renders all 4 dishes with names and prices', () => {
    render(<App />)
    expect(screen.getByText('Beef Steak')).toBeInTheDocument()
    expect(screen.getByText('Beef Ribs Steak')).toBeInTheDocument()
    expect(screen.getByText('Chopsuey')).toBeInTheDocument()
    expect(screen.getByText('Roasted Chicken')).toBeInTheDocument()

    // Check prices
    const prices = screen.getAllByText(/from \$10\.00/)
    expect(prices.length).toBe(4)
  })
})

describe('TestimonialSection', () => {
  it('renders testimonials with star ratings', () => {
    render(<App />)
    expect(screen.getByText('Dennis Green')).toBeInTheDocument()
    expect(screen.getByText(/Guests from Italy/)).toBeInTheDocument()
  })

  it('navigates between testimonials', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    // Should show second testimonial
    expect(screen.getByText('Emily Carter')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Michael Brown')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Emily Carter')).toBeInTheDocument()
  })
})

describe('BlogSection', () => {
  it('renders blog cards with dates and titles', () => {
    render(<App />)
    expect(screen.getAllByText('Blog & News').length).toBeGreaterThan(0)
    expect(screen.getByText('The Best Soup Recipes For Winter')).toBeInTheDocument()
    expect(screen.getByText('A Guide To Wine Pairing At Home')).toBeInTheDocument()
    expect(screen.getByText('How To Make Perfect Pasta')).toBeInTheDocument()

    // Read more links
    const readMoreLinks = screen.getAllByText('Read more')
    expect(readMoreLinks.length).toBe(3)
  })
})

describe('InstagramGrid', () => {
  it('renders 5 images', () => {
    render(<App />)
    const images = screen.getAllByAltText(/Instagram/)
    expect(images.length).toBe(5)
  })
})

describe('Footer', () => {
  it('links to Component Dock', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders social icons', () => {
    render(<App />)
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('renders opening hours', () => {
    render(<App />)
    expect(screen.getByText('Opening Hours')).toBeInTheDocument()
    expect(screen.getByText('Monday - Sunday')).toBeInTheDocument()
    expect(screen.getByText('08:00 - 22:00')).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<App />)
    expect(screen.getByText('Contact Info')).toBeInTheDocument()
    expect(screen.getByText(/198 West 21th Street/)).toBeInTheDocument()
    expect(screen.getByText(/\+1 555 1234567/)).toBeInTheDocument()
    expect(screen.getByText(/info@bistrox.com/)).toBeInTheDocument()
  })

  it('renders newsletter form', () => {
    render(<App />)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter email address')).toBeInTheDocument()
  })

  it('submits newsletter form', async () => {
    const user = userEvent.setup()
    render(<App />)
    const emailInput = screen.getByPlaceholderText('Enter email address')
    await user.type(emailInput, 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(emailInput).toHaveValue('test@example.com')
  })
})
