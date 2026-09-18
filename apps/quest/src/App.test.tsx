import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Categories } from './components/Categories'
import { About } from './components/About'
import { EditorsPick } from './components/EditorsPick'
import { FeaturedDestinations } from './components/FeaturedDestinations'
import { FeaturedRestaurants } from './components/FeaturedRestaurants'
import { FeaturedEvents } from './components/FeaturedEvents'
import { Clients } from './components/Clients'
import { Footer } from './components/Footer'

describe('Quest — Directory & Listing Template', () => {
  describe('App shell', () => {
    it('renders all sections in order', () => {
      render(<App />)
      expect(screen.getByRole('banner')).toBeInTheDocument()
      expect(screen.getByText('Discover places near you')).toBeInTheDocument()
      expect(screen.getAllByText('Hotels').length).toBeGreaterThan(0)
      expect(screen.getByText('Discover your city with')).toBeInTheDocument()
      expect(screen.getByText('Cities you must see')).toBeInTheDocument()
      expect(screen.getByText('Featured destinations')).toBeInTheDocument()
      expect(screen.getByText('Featured Restaurants')).toBeInTheDocument()
      expect(screen.getByText('Featured events')).toBeInTheDocument()
      expect(screen.getByText('Component Dock')).toBeInTheDocument()
    })

    it('applies Open Sans font class', () => {
      const { container } = render(<App />)
      const root = container.firstElementChild as HTMLElement
      expect(root.className).toContain('font-opensans')
    })
  })

  describe('Navbar', () => {
    it('renders logo and nav links', () => {
      render(<Navbar />)
      expect(screen.getByText('Quest')).toBeInTheDocument()
      expect(screen.getByText('Home')).toBeInTheDocument()
      expect(screen.getByText('Explore')).toBeInTheDocument()
      expect(screen.getByText('Listings')).toBeInTheDocument()
      expect(screen.getByText('Contact')).toBeInTheDocument()
    })

    it('Home link is highlighted', () => {
      render(<Navbar />)
      const homeLink = screen.getByText('Home')
      expect(homeLink.className).toContain('text-brand')
    })

    it('renders sign in and Add Listings buttons', () => {
      render(<Navbar />)
      expect(screen.getByText('Sign in')).toBeInTheDocument()
      expect(screen.getByText('+ Add Listings')).toBeInTheDocument()
    })

    it('toggles mobile menu', async () => {
      const user = userEvent.setup()
      render(<Navbar />)
      const toggle = screen.getByLabelText('Toggle navigation')
      await user.click(toggle)
      expect(screen.getAllByText('Home').length).toBeGreaterThan(1)
      await user.click(toggle)
    })
  })

  describe('Hero', () => {
    it('renders headline and subheading', () => {
      render(<Hero />)
      expect(screen.getByText('Discover places near you')).toBeInTheDocument()
      expect(screen.getByText('This is the best guide of your city')).toBeInTheDocument()
    })

    it('has Places and Events tabs', () => {
      render(<Hero />)
      expect(screen.getByRole('tab', { name: /places/i })).toBeInTheDocument()
      expect(screen.getByRole('tab', { name: /events/i })).toBeInTheDocument()
    })

    it('Places tab is active by default', () => {
      render(<Hero />)
      const placesTab = screen.getByRole('tab', { name: /places/i })
      expect(placesTab).toHaveAttribute('aria-selected', 'true')
    })

    it('switches to Events tab on click', async () => {
      const user = userEvent.setup()
      render(<Hero />)
      const eventsTab = screen.getByRole('tab', { name: /events/i })
      await user.click(eventsTab)
      expect(eventsTab).toHaveAttribute('aria-selected', 'true')
    })

    it('renders search form with selects and button', () => {
      render(<Hero />)
      expect(screen.getByLabelText('Destination')).toBeInTheDocument()
      expect(screen.getByLabelText('Category')).toBeInTheDocument()
      expect(screen.getByLabelText('Price range')).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
    })

    it('form submission does not reload', async () => {
      const user = userEvent.setup()
      render(<Hero />)
      const submitBtn = screen.getByRole('button', { name: /search/i })
      await user.click(submitBtn)
    })
  })

  describe('Categories', () => {
    it('renders all 5 category cards', () => {
      render(<Categories />)
      expect(screen.getByText('Hotels')).toBeInTheDocument()
      expect(screen.getByText('Restaurants')).toBeInTheDocument()
      expect(screen.getByText('Shopping')).toBeInTheDocument()
      expect(screen.getByText('Beauty & Spa')).toBeInTheDocument()
      expect(screen.getByText('Cinema')).toBeInTheDocument()
    })

    it('each category is a link', () => {
      render(<Categories />)
      const links = screen.getAllByRole('link')
      const categoryNames = ['Hotels', 'Restaurants', 'Shopping', 'Beauty & Spa', 'Cinema']
      for (const name of categoryNames) {
        const link = links.find((l) => l.textContent?.includes(name))
        expect(link).toBeDefined()
      }
    })
  })

  describe('About', () => {
    it('renders about heading with brand color', () => {
      render(<About />)
      expect(screen.getByText('Discover your city with')).toBeInTheDocument()
      expect(screen.getByText('Quest')).toBeInTheDocument()
    })

    it('renders description paragraph', () => {
      render(<About />)
      expect(screen.getByText(/Explore the best places/)).toBeInTheDocument()
    })
  })

  describe('EditorsPick', () => {
    it('renders section heading', () => {
      render(<EditorsPick />)
      expect(screen.getByText('Cities you must see')).toBeInTheDocument()
      expect(screen.getByText("Editor's pick")).toBeInTheDocument()
    })

    it('renders city cards', () => {
      render(<EditorsPick />)
      expect(screen.getByText('New York')).toBeInTheDocument()
      expect(screen.getByText('Barcelona')).toBeInTheDocument()
      expect(screen.getByText('Paris')).toBeInTheDocument()
    })

    it('displays destination counts', () => {
      render(<EditorsPick />)
      expect(screen.getByText('1643 Destinations')).toBeInTheDocument()
      expect(screen.getByText('943 Destinations')).toBeInTheDocument()
      expect(screen.getByText('243 Destinations')).toBeInTheDocument()
    })

    it('has Add buttons for each city', () => {
      render(<EditorsPick />)
      const addBtns = screen.getAllByLabelText(/Add/)
      expect(addBtns.length).toBe(3)
    })
  })

  describe('FeaturedDestinations', () => {
    it('renders heading', () => {
      render(<FeaturedDestinations />)
      expect(screen.getByText('Featured destinations')).toBeInTheDocument()
    })

    it('renders 5 destination cards', () => {
      render(<FeaturedDestinations />)
      expect(screen.getByText('Ibiza')).toBeInTheDocument()
      expect(screen.getByText('Paris')).toBeInTheDocument()
      expect(screen.getByText('Lake Como')).toBeInTheDocument()
      expect(screen.getByText('Greece')).toBeInTheDocument()
      expect(screen.getByText('Norway')).toBeInTheDocument()
    })

    it('shows price on each card', () => {
      render(<FeaturedDestinations />)
      const prices = screen.getAllByText('FROM $59/night')
      expect(prices.length).toBe(5)
    })

    it('has save heart buttons', () => {
      render(<FeaturedDestinations />)
      const hearts = screen.getAllByLabelText(/Save/)
      expect(hearts.length).toBe(5)
    })
  })

  describe('FeaturedRestaurants', () => {
    it('renders heading', () => {
      render(<FeaturedRestaurants />)
      expect(screen.getByText('Featured Restaurants')).toBeInTheDocument()
    })

    it('renders 5 restaurant cards', () => {
      render(<FeaturedRestaurants />)
      expect(screen.getByText("Martha's Bar")).toBeInTheDocument()
      expect(screen.getByText('Delux Restaurant')).toBeInTheDocument()
      expect(screen.getByText("Jim's Corner Pub")).toBeInTheDocument()
      expect(screen.getByText('Tower Risto Bar')).toBeInTheDocument()
      expect(screen.getByText('Pizzeria Venezia')).toBeInTheDocument()
    })

    it('shows ratings', () => {
      render(<FeaturedRestaurants />)
      expect(screen.getByText('8.5')).toBeInTheDocument()
      expect(screen.getByText('9.5')).toBeInTheDocument()
      expect(screen.getByText('8.2')).toBeInTheDocument()
      expect(screen.getByText('8.7')).toBeInTheDocument()
      expect(screen.getByText('9.8')).toBeInTheDocument()
    })

    it('shows map links', () => {
      render(<FeaturedRestaurants />)
      const maps = screen.getAllByText('Map')
      expect(maps.length).toBe(5)
    })
  })

  describe('FeaturedEvents', () => {
    it('renders heading', () => {
      render(<FeaturedEvents />)
      expect(screen.getByText('Featured events')).toBeInTheDocument()
    })

    it('renders 6 event cards', () => {
      render(<FeaturedEvents />)
      expect(screen.getByText('Jazz Concert')).toBeInTheDocument()
      expect(screen.getByText('DeeJay in the House')).toBeInTheDocument()
      expect(screen.getByText('Theatre Night Outside')).toBeInTheDocument()
      expect(screen.getByText('Wine Tasting')).toBeInTheDocument()
      expect(screen.getByText('New Moon Party')).toBeInTheDocument()
      expect(screen.getByText('Happy Hour at Pub')).toBeInTheDocument()
    })

    it('shows dates', () => {
      render(<FeaturedEvents />)
      const dates = screen.getAllByText('26 Nov')
      expect(dates.length).toBe(6)
    })

    it('has detail buttons', () => {
      render(<FeaturedEvents />)
      const details = screen.getAllByLabelText(/Details/)
      expect(details.length).toBe(6)
    })
  })

  describe('Clients', () => {
    it('renders client names', () => {
      render(<Clients />)
      expect(screen.getByText('TripAdvisor')).toBeInTheDocument()
      expect(screen.getByText('Yelp')).toBeInTheDocument()
      expect(screen.getByText('OpenTable')).toBeInTheDocument()
      expect(screen.getByText('Zomato')).toBeInTheDocument()
      expect(screen.getByText('Booking.com')).toBeInTheDocument()
    })
  })

  describe('Footer', () => {
    it('renders Component Dock link', () => {
      render(<Footer />)
      const link = screen.getByText('Component Dock')
      expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
      expect(link).toHaveAttribute('target', '_blank')
    })

    it('renders Made with text', () => {
      render(<Footer />)
      expect(screen.getByText(/Made with/)).toBeInTheDocument()
    })

    it('renders social links', () => {
      render(<Footer />)
      expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
      expect(screen.getByLabelText('Behance')).toBeInTheDocument()
      expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
      expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
      expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    })
  })
})
