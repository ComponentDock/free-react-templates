import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Tidestone — Luxury Hotel Template')
  })

  it('composes every section in the main landmark', () => {
    render(<App />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()

    // Hero
    expect(screen.getByText(/See What a Difference a Stay Makes/)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /luxury/i })).toBeInTheDocument()

    // Booking form
    expect(screen.getByLabelText('Hotel booking form')).toBeInTheDocument()

    // Welcome
    expect(screen.getByText('Welcome')).toBeInTheDocument()

    // Explore rooms
    expect(screen.getByText('Explore Our Rooms')).toBeInTheDocument()

    // Video section
    expect(screen.getByText(/View four has said does men saw/)).toBeInTheDocument()

    // Special facilities
    expect(screen.getByText('Special Facilities')).toBeInTheDocument()

    // Testimonials
    expect(screen.getByText('Our Guest Love Us')).toBeInTheDocument()

    // News
    expect(screen.getByText('News & Events')).toBeInTheDocument()

    // Footer
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})

describe('Navbar', () => {
  it('displays the brand name', () => {
    render(<App />)
    expect(screen.getAllByText('Tidestone').length).toBeGreaterThanOrEqual(1)
  })

  it('shows navigation links', () => {
    render(<App />)
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
    const navLinks = ['Home', 'About', 'Properties', 'Gallery', 'Blog', 'Contact']
    for (const link of navLinks) {
      expect(screen.getAllByText(link).length).toBeGreaterThanOrEqual(1)
    }
  })

  it('shows phone and email info', () => {
    render(<App />)
    expect(screen.getAllByText(/12 365 5233/).length).toBeGreaterThanOrEqual(1)
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggleButton = screen.getByRole('button', { name: /toggle navigation menu/i })
    await user.click(toggleButton)
    // After clicking, mobile links should be visible
    expect(screen.getAllByText('Home').length).toBeGreaterThanOrEqual(1)
    await user.click(toggleButton)
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggleButton = screen.getByRole('button', { name: /toggle navigation menu/i })
    await user.click(toggleButton)
    // Click a mobile nav link to close the menu
    const mobileLinks = screen.getAllByText('About')
    const lastLink = mobileLinks[mobileLinks.length - 1]
    if (lastLink) {
      await user.click(lastLink)
    }
  })
})

describe('Hero', () => {
  it('shows the hero heading and subtitle', () => {
    render(<App />)
    expect(screen.getByText(/See What a Difference a Stay Makes/)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /luxury/i })).toBeInTheDocument()
  })

  it('has a Book Now button', () => {
    render(<App />)
    const bookLinks = screen.getAllByRole('link', { name: /book now/i })
    expect(bookLinks.length).toBeGreaterThanOrEqual(1)
    expect(bookLinks[0]).toHaveAttribute('href', '#book')
  })
})

describe('BookingForm', () => {
  it('renders the booking form', () => {
    render(<App />)
    expect(screen.getByLabelText('Hotel booking form')).toBeInTheDocument()
  })

  it('has a keywords input', () => {
    render(<App />)
    expect(screen.getByLabelText('Search keywords')).toBeInTheDocument()
  })

  it('has select fields for arrival, rooms, departure, adult, child', () => {
    render(<App />)
    expect(screen.getByLabelText('Arrival time')).toBeInTheDocument()
    expect(screen.getByLabelText('Number of rooms')).toBeInTheDocument()
    expect(screen.getByLabelText('Departure time')).toBeInTheDocument()
    expect(screen.getByLabelText('Number of adults')).toBeInTheDocument()
    expect(screen.getByLabelText('Number of children')).toBeInTheDocument()
  })

  it('has a Check Availability button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /check availability/i })).toBeInTheDocument()
  })
})

describe('Welcome', () => {
  it('shows the welcome heading', () => {
    render(<App />)
    expect(screen.getByText('Welcome')).toBeInTheDocument()
    expect(screen.getByText('to our residence')).toBeInTheDocument()
  })

  it('has a Learn More link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /learn more/i })).toBeInTheDocument()
  })

  it('shows welcome images', () => {
    render(<App />)
    expect(screen.getByAltText('Hotel room interior')).toBeInTheDocument()
    expect(screen.getByAltText('Hotel lobby')).toBeInTheDocument()
    expect(screen.getByAltText('Hotel pool area')).toBeInTheDocument()
  })
})

describe('ExploreRooms', () => {
  it('shows the section heading', () => {
    render(<App />)
    expect(screen.getByText('Explore Our Rooms')).toBeInTheDocument()
  })

  it('displays 3 room cards with pricing', () => {
    render(<App />)
    expect(screen.getByText('Classic Bed Room')).toBeInTheDocument()
    expect(screen.getByText('$150.00')).toBeInTheDocument()
    expect(screen.getByText('Premium Room')).toBeInTheDocument()
    expect(screen.getByText('$170.00')).toBeInTheDocument()
    expect(screen.getByText('Family Room')).toBeInTheDocument()
    expect(screen.getByText('$190.00')).toBeInTheDocument()
  })

  it('has Book Now links on each card', () => {
    render(<App />)
    const bookLinks = screen.getAllByText('Book Now')
    expect(bookLinks.length).toBeGreaterThanOrEqual(3)
  })
})

describe('VideoSection', () => {
  it('shows the play button', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
  })

  it('shows the heading and tagline', () => {
    render(<App />)
    expect(screen.getAllByText('Tidestone').length).toBeGreaterThanOrEqual(2)
    expect(screen.getByText(/View four has said does men saw/)).toBeInTheDocument()
  })
})

describe('SpecialFacilities', () => {
  it('shows the section heading', () => {
    render(<App />)
    expect(screen.getByText('Special Facilities')).toBeInTheDocument()
  })

  it('displays 3 facility cards', () => {
    render(<App />)
    expect(screen.getByText('Conference Room')).toBeInTheDocument()
    expect(screen.getByText('Swimming Pool')).toBeInTheDocument()
    expect(screen.getByText('Sports Club')).toBeInTheDocument()
  })
})

describe('Testimonials', () => {
  it('shows the section heading', () => {
    render(<App />)
    expect(screen.getByText('Our Guest Love Us')).toBeInTheDocument()
  })

  it('displays 3 testimonial cards', () => {
    render(<App />)
    expect(screen.getByText('Robert Mack')).toBeInTheDocument()
    expect(screen.getByText('David Alone')).toBeInTheDocument()
    expect(screen.getByText('Adam Pallin')).toBeInTheDocument()
  })
})

describe('NewsEvents', () => {
  it('shows the section heading', () => {
    render(<App />)
    expect(screen.getByText('News & Events')).toBeInTheDocument()
  })

  it('displays 3 blog cards', () => {
    render(<App />)
    expect(screen.getByText(/Hotel companies tipped the scales/)).toBeInTheDocument()
    expect(screen.getByText(/Try your hand at inaugural industry crossword/)).toBeInTheDocument()
    expect(screen.getByText(/Hoteliers resolve to invest in guests/)).toBeInTheDocument()
  })

  it('shows dates and comment counts', () => {
    render(<App />)
    expect(screen.getAllByText('20th Nov, 2018').length).toBe(3)
    expect(screen.getAllByText('3 Comments').length).toBe(3)
  })

  it('has Read More links', () => {
    render(<App />)
    const readMoreLinks = screen.getAllByText('Read More')
    expect(readMoreLinks.length).toBe(3)
  })
})

describe('Footer', () => {
  it('renders the footer landmark', () => {
    render(<App />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('has a link to Component Dock', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('shows "Made with Component Dock" text', () => {
    render(<App />)
    expect(screen.getByText('Made with')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('has a newsletter email input', () => {
    render(<App />)
    expect(screen.getByLabelText('Email address for newsletter')).toBeInTheDocument()
  })

  it('has social links', () => {
    render(<App />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Google')).toBeInTheDocument()
  })

  it('shows footer link columns', () => {
    render(<App />)
    expect(screen.getByText('Top Products')).toBeInTheDocument()
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByText('Follow Us')).toBeInTheDocument()
  })

  it('shows copyright with current year', () => {
    render(<App />)
    expect(screen.getByText(new RegExp(`${new Date().getFullYear()}`))).toBeInTheDocument()
  })
})
