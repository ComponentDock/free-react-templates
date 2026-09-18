import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Categories } from './components/Categories'
import { Locations } from './components/Locations'
import { FoodGrid } from './components/FoodGrid'
import { HowItWorks } from './components/HowItWorks'
import { CTA } from './components/CTA'
import { CTAApp } from './components/CTAApp'
import { Clients } from './components/Clients'
import { Footer } from './components/Footer'

describe('Navpoint — Directory & City Guide Template', () => {
  describe('App shell', () => {
    it('renders all sections in order', () => {
      render(<App />)
      expect(screen.getByRole('banner')).toBeInTheDocument()
      expect(screen.getByText('The Best City')).toBeInTheDocument()
      expect(screen.getByText('Restaurants')).toBeInTheDocument()
      expect(screen.getByText('Explore Hot Locations')).toBeInTheDocument()
      expect(screen.getByText('Find the best food near you')).toBeInTheDocument()
      expect(screen.getByText(/How Nav/)).toBeInTheDocument()
      expect(screen.getByText('Find the best places in town!')).toBeInTheDocument()
      expect(screen.getByText(/Get the Nav/)).toBeInTheDocument()
      expect(screen.getByText('Component Dock')).toBeInTheDocument()
    })

    it('applies Poppins font class', () => {
      const { container } = render(<App />)
      const root = container.firstElementChild as HTMLElement
      expect(root.className).toContain('font-poppins')
    })
  })

  describe('Navbar', () => {
    it('renders logo and nav links', () => {
      render(<Navbar />)
      expect(screen.getByText('Nav')).toBeInTheDocument()
      expect(screen.getByText('point')).toBeInTheDocument()
      expect(screen.getByText('Home')).toBeInTheDocument()
      expect(screen.getByText('About us')).toBeInTheDocument()
      expect(screen.getByText('Listings')).toBeInTheDocument()
      expect(screen.getByText('News')).toBeInTheDocument()
      expect(screen.getByText('Contact')).toBeInTheDocument()
    })

    it('Home link is highlighted', () => {
      render(<Navbar />)
      const homeLinks = screen.getAllByText('Home')
      const desktopHome = homeLinks[0] as HTMLElement
      expect(desktopHome.className).toContain('text-brand')
    })

    it('renders Login, Register, and Add Listing buttons', () => {
      render(<Navbar />)
      expect(screen.getByText('Login')).toBeInTheDocument()
      expect(screen.getByText('Register')).toBeInTheDocument()
      expect(screen.getByText('+Add Listing')).toBeInTheDocument()
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
    it('renders headline', () => {
      render(<Hero />)
      expect(screen.getByText('The Best City')).toBeInTheDocument()
      expect(screen.getByText('Guide')).toBeInTheDocument()
    })

    it('renders search form with input and button', () => {
      render(<Hero />)
      expect(screen.getByPlaceholderText('What are you looking for?')).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
    })

    it('form submission does not reload', async () => {
      const user = userEvent.setup()
      render(<Hero />)
      const submitBtn = screen.getByRole('button', { name: /search/i })
      await user.click(submitBtn)
    })

    it('updates search query on input change', async () => {
      const user = userEvent.setup()
      render(<Hero />)
      const input = screen.getByPlaceholderText('What are you looking for?')
      await user.type(input, 'restaurants')
      expect(input).toHaveValue('restaurants')
    })

    it('renders slider dots', () => {
      render(<Hero />)
      expect(screen.getByText('01.')).toBeInTheDocument()
      expect(screen.getByText('02.')).toBeInTheDocument()
      expect(screen.getByText('03.')).toBeInTheDocument()
    })
  })

  describe('Categories', () => {
    it('renders all 5 category cards', () => {
      render(<Categories />)
      expect(screen.getByText('Restaurants')).toBeInTheDocument()
      expect(screen.getByText('Hotels')).toBeInTheDocument()
      expect(screen.getByText('Nightlife')).toBeInTheDocument()
      expect(screen.getByText('Coffeeshops')).toBeInTheDocument()
      expect(screen.getByText('Culture')).toBeInTheDocument()
    })

    it('each category is a link', () => {
      render(<Categories />)
      const categoryNames = ['Restaurants', 'Hotels', 'Nightlife', 'Coffeeshops', 'Culture']
      for (const name of categoryNames) {
        const link = screen.getAllByRole('link').find((l) => l.textContent?.includes(name))
        expect(link).toBeDefined()
      }
    })
  })

  describe('Locations', () => {
    it('renders section heading', () => {
      render(<Locations />)
      expect(screen.getByText('Explore Hot Locations')).toBeInTheDocument()
    })

    it('renders 5 location cards', () => {
      render(<Locations />)
      expect(screen.getByText('Amsterdam')).toBeInTheDocument()
      expect(screen.getByText('Paris')).toBeInTheDocument()
      expect(screen.getByText('Singapore')).toBeInTheDocument()
      expect(screen.getByText('Chicago')).toBeInTheDocument()
      expect(screen.getByText('New York')).toBeInTheDocument()
    })

    it('each location is a link', () => {
      render(<Locations />)
      const locationNames = ['Amsterdam', 'Paris', 'Singapore', 'Chicago', 'New York']
      for (const name of locationNames) {
        const link = screen.getAllByRole('link').find((l) => l.textContent?.includes(name))
        expect(link).toBeDefined()
      }
    })
  })

  describe('FoodGrid', () => {
    it('renders section heading', () => {
      render(<FoodGrid />)
      expect(screen.getByText('Find the best food near you')).toBeInTheDocument()
    })

    it('renders 7 food items', () => {
      render(<FoodGrid />)
      expect(screen.getByText('Fusion')).toBeInTheDocument()
      expect(screen.getByText('Asian')).toBeInTheDocument()
      expect(screen.getByText('Breakfast')).toBeInTheDocument()
      expect(screen.getByText('Pizza')).toBeInTheDocument()
      expect(screen.getByText('Vine & Dine')).toBeInTheDocument()
      expect(screen.getByText('Coffee')).toBeInTheDocument()
      expect(screen.getByText('Fine Dine')).toBeInTheDocument()
    })
  })

  describe('HowItWorks', () => {
    it('renders section heading', () => {
      render(<HowItWorks />)
      expect(screen.getByText(/How Nav/)).toBeInTheDocument()
      expect(screen.getByText(/point/)).toBeInTheDocument()
    })

    it('renders 3 step cards', () => {
      render(<HowItWorks />)
      expect(screen.getByText('Choose a category')).toBeInTheDocument()
      expect(screen.getByText('Find your pick')).toBeInTheDocument()
      expect(screen.getByText('Go & have fun')).toBeInTheDocument()
    })

    it('renders step numbers', () => {
      render(<HowItWorks />)
      expect(screen.getByText('01.')).toBeInTheDocument()
      expect(screen.getByText('02.')).toBeInTheDocument()
      expect(screen.getByText('03.')).toBeInTheDocument()
    })
  })

  describe('CTA', () => {
    it('renders CTA heading and button', () => {
      render(<CTA />)
      expect(screen.getByText('Find the best places in town!')).toBeInTheDocument()
      expect(screen.getByText('See the list')).toBeInTheDocument()
    })

    it('renders description text', () => {
      render(<CTA />)
      expect(screen.getByText(/Discover restaurants/)).toBeInTheDocument()
    })
  })

  describe('CTAApp', () => {
    it('renders app download section', () => {
      render(<CTAApp />)
      expect(screen.getByText(/Get the Nav/)).toBeInTheDocument()
      expect(screen.getByText('App Store')).toBeInTheDocument()
      expect(screen.getByText('Google Play')).toBeInTheDocument()
    })

    it('renders app preview image', () => {
      render(<CTAApp />)
      expect(screen.getByAltText('Navpoint app preview')).toBeInTheDocument()
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

    it('renders copyright text', () => {
      render(<Footer />)
      expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
    })

    it('renders footer nav links', () => {
      render(<Footer />)
      expect(screen.getByText('Home')).toBeInTheDocument()
      expect(screen.getByText('About us')).toBeInTheDocument()
      expect(screen.getByText('Listings')).toBeInTheDocument()
      expect(screen.getByText('News')).toBeInTheDocument()
      expect(screen.getByText('Contact')).toBeInTheDocument()
    })
  })
})
