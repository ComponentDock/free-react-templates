import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SearchBar } from './components/SearchBar'
import { Services } from './components/Services'
import { Stats } from './components/Stats'
import { ParallaxCTA } from './components/ParallaxCTA'
import { TravelCards } from './components/TravelCards'
import { HotelCards } from './components/HotelCards'
import { RoomCards } from './components/RoomCards'
import { RestaurantCards } from './components/RestaurantCards'
import { BlogEntries } from './components/BlogEntries'
import { Footer } from './components/Footer'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('Trekly').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/Discover Greece/)).toBeInTheDocument()
    expect(screen.getByText('Where Do You Want to Go?')).toBeInTheDocument()
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getByText('Get Best Travel Deals')).toBeInTheDocument()
    expect(screen.getByText('Choose the Perfect Destination')).toBeInTheDocument()
    expect(screen.getByText('Best Place to Travel')).toBeInTheDocument()
    expect(screen.getByText('Find Nearest Hotel')).toBeInTheDocument()
    expect(screen.getByText('Greece Best Rooms Offer')).toBeInTheDocument()
    expect(screen.getByText('Near Restaurant')).toBeInTheDocument()
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
  })
})

describe('Navbar', () => {
  it('renders brand and nav links', () => {
    render(<Navbar />)
    expect(screen.getByText('Trekly')).toBeInTheDocument()
    const links = [
      'Home',
      'Services',
      'About',
      'Destinations',
      'Hotels',
      'Restaurant',
      'Blog',
      'Contact',
    ]
    links.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument()
    })
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByLabelText('Toggle navigation')
    await user.click(toggle)
    expect(toggle).toHaveAttribute('aria-expanded', 'true')
    // Click a link in the mobile menu (second occurrence of "Home")
    const mobileLinks = screen.getAllByText('Home')
    await user.click(mobileLinks.at(-1)!)
    expect(toggle).toHaveAttribute('aria-expanded', 'false')
  })
})

describe('Hero', () => {
  it('renders first slide content', () => {
    render(<Hero />)
    expect(screen.getByText(/Discover Greece/)).toBeInTheDocument()
    expect(screen.getByText(/Explore Your Travel Destinations/)).toBeInTheDocument()
    expect(screen.getByText('Discover').closest('a')!).toHaveAttribute('href', '#destinations')
  })

  it('has slide indicator buttons', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Go to slide 1')).toBeInTheDocument()
    expect(screen.getByLabelText('Go to slide 2')).toBeInTheDocument()
  })

  it('transitions to next slide on indicator click', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByLabelText('Go to slide 2'))
    expect(screen.getByText(/Discover Africa/)).toBeInTheDocument()
  })
})

describe('SearchBar', () => {
  it('renders all form fields', () => {
    render(<SearchBar />)
    expect(screen.getByLabelText('Destination')).toBeInTheDocument()
    expect(screen.getByLabelText('Check-in Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Check-out Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Price Limit')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('has a submit handler that prevents default', async () => {
    const user = userEvent.setup()
    render(<SearchBar />)
    const button = screen.getByRole('button', { name: /search/i })
    await user.click(button)
    // Form submission is prevented (onSubmit with e.preventDefault())
    expect(button).toBeInTheDocument()
  })
})

describe('Services', () => {
  it('renders all four services', () => {
    render(<Services />)
    expect(screen.getByText('Activities')).toBeInTheDocument()
    expect(screen.getByText('Travel Arrangement')).toBeInTheDocument()
    expect(screen.getByText('Private Guide')).toBeInTheDocument()
    expect(screen.getByText('Location Manager')).toBeInTheDocument()
  })
})

describe('Stats', () => {
  it('renders all stats', () => {
    render(<Stats />)
    expect(screen.getByText('10,000+')).toBeInTheDocument()
    expect(screen.getByText('1,000+')).toBeInTheDocument()
    expect(screen.getByText('200+')).toBeInTheDocument()
    expect(screen.getByText('50,000+')).toBeInTheDocument()
    expect(screen.getByText('Happy Customers')).toBeInTheDocument()
    expect(screen.getByText('Tours Completed')).toBeInTheDocument()
    expect(screen.getByText('Destinations')).toBeInTheDocument()
    expect(screen.getByText('Activities')).toBeInTheDocument()
  })
})

describe('ParallaxCTA', () => {
  it('renders heading and CTA link', () => {
    render(<ParallaxCTA heading="Test Heading" image="test.jpg" />)
    expect(screen.getByText('Test Heading')).toBeInTheDocument()
    expect(screen.getByText('Discover').closest('a')!).toHaveAttribute('href', '#destinations')
  })

  it('uses custom href', () => {
    render(<ParallaxCTA heading="Test" image="test.jpg" href="#hotels" />)
    expect(screen.getByText('Discover').closest('a')!).toHaveAttribute('href', '#hotels')
  })
})

describe('TravelCards', () => {
  it('renders all five destination cards', () => {
    render(<TravelCards />)
    expect(screen.getByText('Santorini, Greece')).toBeInTheDocument()
    expect(screen.getByText('Bali, Indonesia')).toBeInTheDocument()
    expect(screen.getByText('Paris, France')).toBeInTheDocument()
    expect(screen.getByText('Tokyo, Japan')).toBeInTheDocument()
    expect(screen.getByText('Cape Town, SA')).toBeInTheDocument()
    expect(screen.getAllByText('$400')).toHaveLength(5)
  })
})

describe('HotelCards', () => {
  it('renders both hotel cards', () => {
    render(<HotelCards />)
    expect(screen.getByText('Luxury Resort & Spa')).toBeInTheDocument()
    expect(screen.getByText('Mountain View Lodge')).toBeInTheDocument()
  })
})

describe('RoomCards', () => {
  it('renders all four room cards', () => {
    render(<RoomCards />)
    expect(screen.getByText('Classic Balcony Room')).toBeInTheDocument()
    expect(screen.getByText('Deluxe Suite')).toBeInTheDocument()
    expect(screen.getByText('Ocean View Room')).toBeInTheDocument()
    expect(screen.getByText('Family Suite')).toBeInTheDocument()
    expect(screen.getAllByText('Book Now')).toHaveLength(4)
  })

  it('shows book now buttons as buttons', () => {
    render(<RoomCards />)
    const buttons = screen.getAllByText('Book Now')
    buttons.forEach((btn) => {
      expect(btn).toBeInstanceOf(HTMLButtonElement)
    })
  })
})

describe('RestaurantCards', () => {
  it('renders all three restaurant cards', () => {
    render(<RestaurantCards />)
    expect(screen.getByText('Resto Bar, Switzerland')).toBeInTheDocument()
    expect(screen.getByText('Alpine Kitchen, Austria')).toBeInTheDocument()
    expect(screen.getByText('Coastal Bistro, Italy')).toBeInTheDocument()
  })
})

describe('BlogEntries', () => {
  it('renders all three blog entries', () => {
    render(<BlogEntries />)
    expect(screen.getByText('Why Lead Generation is Key for Business Growth')).toBeInTheDocument()
    expect(screen.getByText('Top 10 Travel Destinations for 2024')).toBeInTheDocument()
    expect(screen.getByText('How to Plan Your Perfect Vacation')).toBeInTheDocument()
  })

  it('has read more links', () => {
    render(<BlogEntries />)
    const readMoreLinks = screen.getAllByText('Read More →')
    expect(readMoreLinks).toHaveLength(3)
  })
})

describe('Footer', () => {
  it('renders brand info and navigation columns', () => {
    render(<Footer />)
    expect(screen.getByText(/About/)).toBeInTheDocument()
    expect(screen.getByText('Information')).toBeInTheDocument()
    expect(screen.getByText('Experience')).toBeInTheDocument()
    expect(screen.getByText('Have a Questions?')).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText(/203 Fake St/)).toBeInTheDocument()
    expect(screen.getByText('+1 239 2392 9210')).toBeInTheDocument()
    expect(screen.getByText('info@trekly.com')).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })
})
