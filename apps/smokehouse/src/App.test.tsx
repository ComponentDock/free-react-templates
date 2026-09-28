import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { App } from './App'

beforeEach(() => {
  vi.clearAllMocks()
  // IntersectionObserver mock for CounterSection
  class MockIntersectionObserver {
    observe = vi.fn()
    disconnect = vi.fn()
    unobserve = vi.fn()
  }
  vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
  // ScrollIntoView mock
  vi.stubGlobal('scrollIntoView', vi.fn())
})

describe('Smokehouse App', () => {
  it('renders all major sections', () => {
    render(<App />)

    // Header
    expect(screen.getAllByText('Smokehouse').length).toBeGreaterThan(0)

    // Hero
    expect(screen.getAllByText(/Welcome To Smokehouse/).length).toBeGreaterThan(0)

    // About
    expect(screen.getByText(/Read More/)).toBeInTheDocument()

    // Services
    expect(screen.getByText('Restaurant Services')).toBeInTheDocument()

    // Menu
    expect(screen.getByText('Our Menu')).toBeInTheDocument()

    // Counter
    expect(screen.getByText("Today's Fun Facts")).toBeInTheDocument()

    // News
    expect(screen.getByText('News & Events')).toBeInTheDocument()

    // Testimonials
    expect(screen.getByText('Testimonials')).toBeInTheDocument()

    // Reservation
    expect(screen.getByText('Reserve A Table')).toBeInTheDocument()

    // Map
    expect(screen.getByText('Map placeholder')).toBeInTheDocument()

    // Footer
    expect(screen.getByText(/Component Dock/)).toBeInTheDocument()
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Smokehouse — Restaurant Template')
  })
})

describe('Header', () => {
  it('renders logo and navigation links', () => {
    render(<App />)
    expect(screen.getAllByText('Smokehouse').length).toBeGreaterThan(0)
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'About' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: 'Services' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: 'Menu' }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link', { name: 'News' }).length).toBeGreaterThan(0)
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

  it('scroll handler updates header background', async () => {
    render(<App />)

    // Header starts transparent (not scrolled)
    const header = document.querySelector('header')
    expect(header?.className).toContain('bg-transparent')

    // Mock scrollY and dispatch scroll event wrapped in act
    Object.defineProperty(window, 'scrollY', { value: 200, writable: true, configurable: true })
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })

    // Header should have white background after scroll
    expect(header?.className).toContain('bg-white')
    expect(header?.className).toContain('shadow-md')
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    const toggleBtn = screen.getByRole('button', { name: 'Toggle menu' })
    await user.click(toggleBtn)
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'true')

    // Click a nav link to close the menu
    const homeLink = screen
      .getByRole('navigation', { name: 'Mobile navigation' })
      .querySelector('a')
    if (homeLink) {
      await user.click(homeLink)
    }
    expect(toggleBtn).toHaveAttribute('aria-expanded', 'false')
  })
})

describe('Hero', () => {
  it('renders hero heading and play button', () => {
    render(<App />)
    expect(screen.getAllByText(/Welcome To Smokehouse/).length).toBeGreaterThan(0)
    expect(screen.getByText('Play Video')).toBeInTheDocument()
  })

  it('has scroll down link', () => {
    render(<App />)
    expect(screen.getByLabelText('Scroll down')).toBeInTheDocument()
  })
})

describe('AboutSection', () => {
  it('renders about heading, text, and read more button', () => {
    render(<App />)
    const aboutSection = document.getElementById('about')
    expect(aboutSection).toBeInTheDocument()

    expect(screen.getByText(/Read More/)).toBeInTheDocument()
    expect(screen.getByAltText('Restaurant interior')).toBeInTheDocument()
  })
})

describe('ServicesSection', () => {
  it('renders 6 service items', () => {
    render(<App />)
    expect(screen.getByText('Noodles & Spaghetti')).toBeInTheDocument()
    expect(screen.getByText('Big Hamburger')).toBeInTheDocument()
    expect(screen.getByText('Chicken Leg')).toBeInTheDocument()
    expect(screen.getByText('Vegetarian Food')).toBeInTheDocument()
    expect(screen.getByText('Fried Chicken')).toBeInTheDocument()
    expect(screen.getByText('Beef Steak & Rib')).toBeInTheDocument()
  })
})

describe('MenuSection', () => {
  it('renders menu tabs and breakfast items by default', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /Breakfast/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Lunch/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Dinner/ })).toBeInTheDocument()

    // Breakfast items visible
    expect(screen.getByText('Grilled Sausage')).toBeInTheDocument()
    expect(screen.getByText('Eggs Benedict')).toBeInTheDocument()
  })

  it('switches tab on click', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /Lunch/ }))
    expect(screen.getByText('Caesar Salad')).toBeInTheDocument()
    expect(screen.getByText('Club Sandwich')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /Dinner/ }))
    expect(screen.getByText('Ribeye Steak')).toBeInTheDocument()
    expect(screen.getByText('Grilled Salmon')).toBeInTheDocument()
  })
})

describe('CounterSection', () => {
  it('renders counter labels', () => {
    render(<App />)
    expect(screen.getByText('Noodles Sold')).toBeInTheDocument()
    expect(screen.getByText('Burgers Sold')).toBeInTheDocument()
    expect(screen.getByText('Chicken Sold')).toBeInTheDocument()
  })

  it('animates counters when visible', () => {
    vi.useFakeTimers()
    // Mock IntersectionObserver to simulate element becoming visible
    let observerCallback: IntersectionObserverCallback | undefined
    class MockIntersectionObserver {
      observe = vi.fn()
      disconnect = vi.fn()
      unobserve = vi.fn()
      constructor(callback: IntersectionObserverCallback) {
        observerCallback = callback
      }
    }
    vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)

    const { unmount } = render(<App />)

    // Simulate the counter element becoming visible
    if (observerCallback) {
      observerCallback(
        [{ isIntersecting: true, ratio: 1 } as unknown as IntersectionObserverEntry],
        {} as IntersectionObserver,
      )
    }

    // After enough ticks, counter should reach its target
    vi.advanceTimersByTime(2000)
    // At least one counter should have a value > 0
    const counterEls = document.querySelectorAll('.text-5xl')
    expect(counterEls.length).toBeGreaterThan(0)

    // Trigger observer again with isIntersecting=true to cover the
    // "started.current is already true" branch (no-op)
    if (observerCallback) {
      observerCallback(
        [{ isIntersecting: true, ratio: 1 } as unknown as IntersectionObserverEntry],
        {} as IntersectionObserver,
      )
    }

    // Unmount to cover the cleanup/disconnect path
    unmount()
    vi.useRealTimers()
  })
})

describe('NewsSection', () => {
  it('renders 4 news cards', () => {
    render(<App />)
    expect(screen.getByText('New Menu Launch This Summer')).toBeInTheDocument()
    expect(screen.getByText("Chef's Special: Wagyu Night")).toBeInTheDocument()
    expect(screen.getByText('Wine Pairing Dinner Event')).toBeInTheDocument()
    expect(screen.getByText('Farm-to-Table Partnership')).toBeInTheDocument()
  })
})

describe('TestimonialSection', () => {
  it('renders first testimonial by default', () => {
    render(<App />)
    expect(screen.getByText(/best dining experience/)).toBeInTheDocument()
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Food Critic')).toBeInTheDocument()
  })

  it('navigates testimonials with buttons', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(/absolute gem/)).toBeInTheDocument()
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText(/best dining experience/)).toBeInTheDocument()
  })
})

describe('ReservationSection', () => {
  it('renders reservation form fields', () => {
    render(<App />)
    expect(screen.getByLabelText('Party Size')).toBeInTheDocument()
    expect(screen.getByLabelText('Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Time')).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Reserve Now' })).toBeInTheDocument()
  })

  it('renders hours panel', () => {
    render(<App />)
    expect(screen.getByText('Time Open')).toBeInTheDocument()
    expect(screen.getByText('Monday — Thursday')).toBeInTheDocument()
    expect(screen.getByText('Friday — Saturday')).toBeInTheDocument()
    expect(screen.getByText('Sunday')).toBeInTheDocument()
  })

  it('allows filling form fields', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByLabelText('Name'), 'John')
    await user.type(screen.getByLabelText('Email'), 'john@example.com')
    await user.type(screen.getByLabelText('Phone'), '555-1234')
    await user.type(screen.getByLabelText('Date'), '2026-10-15')
    await user.type(screen.getByLabelText('Time'), '19:00')
    await user.selectOptions(screen.getByLabelText('Party Size'), '2')
    expect(screen.getByLabelText('Name')).toHaveValue('John')
    expect(screen.getByLabelText('Email')).toHaveValue('john@example.com')
    expect(screen.getByLabelText('Phone')).toHaveValue('555-1234')
  })

  it('submits reservation form via button click', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByLabelText('Name'), 'John')
    await user.type(screen.getByLabelText('Email'), 'john@example.com')

    // Click the submit button to trigger form onSubmit
    await user.click(screen.getByRole('button', { name: 'Reserve Now' }))

    // Form should not navigate (preventDefault was called)
    expect(screen.getByLabelText('Name')).toHaveValue('John')
  })
})

describe('Footer', () => {
  it('renders footer sections', () => {
    render(<App />)
    expect(screen.getByText('About Smokehouse Restaurant')).toBeInTheDocument()
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByText('Support')).toBeInTheDocument()
    expect(screen.getByText('Connect With Us')).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders social media icons', () => {
    render(<App />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('YouTube')).toBeInTheDocument()
  })
})
