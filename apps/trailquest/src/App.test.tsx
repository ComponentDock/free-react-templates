import { render, screen, fireEvent, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, afterEach } from 'vitest'
import { App } from './App'
import { Counter } from './components/Counter'

afterEach(() => {
  vi.restoreAllMocks()
})

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)

    expect(screen.getAllByText('Trailquest').length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('Discover A new Place')).toBeInTheDocument()
    expect(screen.getByText('Flight')).toBeInTheDocument()
    expect(screen.getByText('Hotel')).toBeInTheDocument()
    expect(screen.getByText('Car Rent')).toBeInTheDocument()
    expect(screen.getByText('Travel')).toBeInTheDocument()
    expect(screen.getAllByText('Experience').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Relax')).toBeInTheDocument()
    expect(screen.getByText('See our latest vacation ideas')).toBeInTheDocument()
    expect(screen.getByText('Bali')).toBeInTheDocument()
    expect(screen.getByText('Maldives')).toBeInTheDocument()
    expect(screen.getByText('Santorini')).toBeInTheDocument()
    expect(screen.getByText('Special Activities')).toBeInTheDocument()
    expect(screen.getByText('Travel Arrangements')).toBeInTheDocument()
    expect(screen.getByText('Private Guide')).toBeInTheDocument()
    expect(screen.getByText('Location Manager')).toBeInTheDocument()
    expect(screen.getByText('Most Popular Destination')).toBeInTheDocument()
    expect(screen.getByText('Paris')).toBeInTheDocument()
    expect(screen.getByText('Tokyo')).toBeInTheDocument()
    expect(screen.getByText('New York')).toBeInTheDocument()
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
    expect(screen.getByText('Our satisfied customer says')).toBeInTheDocument()
    expect(screen.getByText('Tips & Articles')).toBeInTheDocument()
    expect(screen.getByText('Subscribe to our Newsletter')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Trailquest — Travel Agency Template')
  })
})

describe('Navbar', () => {
  it('shows all nav links', () => {
    render(<App />)
    ;['Home', 'About', 'Places', 'Hotels', 'Blog', 'Contact'].forEach((link) => {
      expect(screen.getAllByText(link).length).toBeGreaterThanOrEqual(1)
    })
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<App />)

    const toggle = screen.getByLabelText('Toggle menu')
    expect(toggle).toHaveAttribute('aria-expanded', 'false')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')

    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('applies scrolled style on scroll', () => {
    render(<App />)
    const nav = screen.getByRole('navigation')

    Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })
    fireEvent.scroll(window)

    expect(nav.className).toContain('bg-navy/95')
  })

  it('clicking a desktop nav link sets it as active', () => {
    render(<App />)

    // Scroll down first so accent-amber is visible
    Object.defineProperty(window, 'scrollY', { value: 100, writable: true, configurable: true })
    fireEvent.scroll(window)

    // Find the desktop About button (it's hidden but still in DOM)
    const aboutButtons = screen.getAllByText('About')
    const desktopAbout = aboutButtons[0]
    if (desktopAbout) {
      fireEvent.click(desktopAbout)
    }

    // Now About should have accent-amber
    if (desktopAbout) {
      expect(desktopAbout.className).toContain('text-accent-amber')
    }
  })

  it('clicking a nav link in mobile menu closes the menu', async () => {
    const user = userEvent.setup()
    render(<App />)

    const toggle = screen.getByLabelText('Toggle menu')
    await user.click(toggle)

    const aboutButtons = screen.getAllByText('About')
    if (aboutButtons.length > 1 && aboutButtons[1]) {
      await user.click(aboutButtons[1])
    }

    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})

describe('SearchTabs', () => {
  it('defaults to Flight tab with From/To/Date fields', () => {
    render(<App />)
    expect(screen.getByPlaceholderText('New York')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('London')).toBeInTheDocument()
  })

  it('switches to Hotel tab', async () => {
    const user = userEvent.setup()
    render(<App />)

    const hotelButtons = screen.getAllByText('Hotel')
    const searchHotel = hotelButtons.find(
      (el) => el.tagName === 'BUTTON' && el.closest('[class*="flex gap-2"]'),
    )
    if (searchHotel) {
      await user.click(searchHotel)
    }
    expect(screen.getByPlaceholderText('Paris')).toBeInTheDocument()
  })

  it('switches to Car Rent tab', async () => {
    const user = userEvent.setup()
    render(<App />)

    const carButtons = screen.getAllByText('Car Rent')
    const searchCar = carButtons.find(
      (el) => el.tagName === 'BUTTON' && el.closest('[class*="flex gap-2"]'),
    )
    if (searchCar) {
      await user.click(searchCar)
    }
    expect(screen.getByPlaceholderText('Los Angeles')).toBeInTheDocument()
  })

  it('renders search button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })
})

describe('Counter', () => {
  it('renders counter stats labels', () => {
    render(<App />)
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
    expect(screen.getByText('Destination Places')).toBeInTheDocument()
    expect(screen.getAllByText('Hotels').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Restaurant')).toBeInTheDocument()
  })

  it('animates counters to completion', () => {
    vi.useFakeTimers()
    render(<App />)

    act(() => {
      vi.advanceTimersByTime(1)
    })
    act(() => {
      vi.advanceTimersByTime(2500)
    })

    expect(screen.getByText(/100,000/)).toBeInTheDocument()
    expect(screen.getByText(/40,000/)).toBeInTheDocument()
    expect(screen.getByText(/87,000/)).toBeInTheDocument()
    expect(screen.getByText(/56,400/)).toBeInTheDocument()

    vi.useRealTimers()
  })

  it('does not animate when not intersecting', () => {
    let observerCallback: IntersectionObserverCallback | undefined
    const originalObserver = window.IntersectionObserver

    class MockObserver {
      constructor(cb: IntersectionObserverCallback) {
        observerCallback = cb
      }
      observe() {
        // Fire with isIntersecting: false
        if (observerCallback) {
          observerCallback(
            [{ isIntersecting: false } as IntersectionObserverEntry],
            this as unknown as IntersectionObserver,
          )
        }
      }
      unobserve() {}
      disconnect() {}
    }

    // @ts-expect-error - mock
    window.IntersectionObserver = MockObserver

    const { unmount } = render(<Counter />)

    // Counter should still show 0
    expect(screen.getAllByText(/0\+/).length).toBe(4)

    unmount()
    window.IntersectionObserver = originalObserver
  })

  it('cleans up observer on unmount', () => {
    const disconnect = vi.fn()
    const originalObserver = window.IntersectionObserver

    class MockObserver {
      observe() {}
      unobserve() {}
      disconnect() {
        disconnect()
      }
    }

    // @ts-expect-error - mock
    window.IntersectionObserver = MockObserver

    const { unmount } = render(<Counter />)
    unmount()

    expect(disconnect).toHaveBeenCalled()
    window.IntersectionObserver = originalObserver
  })
})

describe('Newsletter', () => {
  it('allows typing in email field', () => {
    render(<App />)

    const emailInput = screen.getByPlaceholderText('Your email address')
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    expect(emailInput).toHaveValue('test@example.com')
  })

  it('has a subscribe button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('submits email form and clears input', () => {
    render(<App />)

    const emailInput = screen.getByPlaceholderText('Your email address')
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })
    expect(emailInput).toHaveValue('test@example.com')

    fireEvent.submit(emailInput.closest('form')!)
    expect(emailInput).toHaveValue('')
  })
})

describe('DestinationCard', () => {
  it('renders card prices and discover links', () => {
    render(<App />)
    expect(screen.getByText('$299')).toBeInTheDocument()
    expect(screen.getByText('$499')).toBeInTheDocument()
    expect(screen.getByText('$399')).toBeInTheDocument()
    expect(screen.getAllByText('Discover').length).toBeGreaterThanOrEqual(3)
  })

  it('renders star ratings', () => {
    render(<App />)
    expect(screen.getAllByText('(5/5)').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('(4/5)')).toBeInTheDocument()
  })
})

describe('Footer', () => {
  it('renders all footer columns', () => {
    render(<App />)

    expect(screen.getAllByText('Trailquest').length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Privacy and Policy')).toBeInTheDocument()
    expect(screen.getByText('Beach')).toBeInTheDocument()
    expect(screen.getByText('Wildlife')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('info@trailquest.com')).toBeInTheDocument()
    const cdLink = screen.getByText('Component Dock')
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders social media links', () => {
    render(<App />)
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })
})

describe('Testimonials', () => {
  it('renders all testimonial names', () => {
    render(<App />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getAllByText('Michael Chen').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('James Rodriguez')).toBeInTheDocument()
    expect(screen.getByText('Lisa Park')).toBeInTheDocument()
  })
})

describe('Blog', () => {
  it('renders blog post titles', () => {
    render(<App />)
    expect(screen.getByText('10 Hidden Gems You Must Visit This Year')).toBeInTheDocument()
    expect(screen.getByText('Guide to Sustainable Travel in 2024')).toBeInTheDocument()
    expect(screen.getByText('Best Beach Resorts for Family Vacation')).toBeInTheDocument()
  })
})
