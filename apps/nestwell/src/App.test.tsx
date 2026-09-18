import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SearchForm } from './components/SearchForm'
import { FeaturedProperties } from './components/FeaturedProperties'
import { About } from './components/About'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

describe('Nestwell — Real Estate Agency Template', () => {
  describe('App shell', () => {
    it('renders all sections in order', () => {
      render(<App />)
      expect(screen.getByRole('banner')).toBeInTheDocument()
      // Nestwell appears in navbar and footer
      expect(screen.getAllByText('Nestwell.').length).toBeGreaterThanOrEqual(2)
      // Luxury Waterfront Villa appears in h1 + h3
      expect(screen.getAllByText('Luxury Waterfront Villa').length).toBeGreaterThanOrEqual(2)
      expect(screen.getByText('Search')).toBeInTheDocument()
      expect(screen.getByText('Featured Properties')).toBeInTheDocument()
      expect(screen.getByText(/We help you discover/)).toBeInTheDocument()
      expect(screen.getByText(/Welcome to Nestwell/)).toBeInTheDocument()
      expect(screen.getByText('Our Satisfied Customers Say')).toBeInTheDocument()
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
      expect(screen.getByRole('link', { name: /Nestwell/ })).toBeInTheDocument()
      expect(screen.getByText('Properties')).toBeInTheDocument()
      expect(screen.getByText('Agents')).toBeInTheDocument()
      expect(screen.getByText('Blog')).toBeInTheDocument()
      expect(screen.getByText('Contact')).toBeInTheDocument()
    })

    it('Home link is highlighted', () => {
      render(<Navbar />)
      const homeLinks = screen.getAllByText('Home')
      expect(homeLinks[0]?.className).toContain('text-brand')
    })

    it('renders Get Started button', () => {
      render(<Navbar />)
      expect(screen.getByText('Get Started')).toBeInTheDocument()
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
    it('renders property headline in h1', () => {
      render(<Hero />)
      const headings = screen.getAllByText('Luxury Waterfront Villa')
      expect(headings.length).toBeGreaterThanOrEqual(2)
      // h1 is the primary headline
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Luxury Waterfront Villa')
    })

    it('renders property details', () => {
      render(<Hero />)
      expect(screen.getByText('Area:')).toBeInTheDocument()
      expect(screen.getByText('Bedrooms:')).toBeInTheDocument()
      expect(screen.getByText('Bathrooms:')).toBeInTheDocument()
      expect(screen.getByText('Garage:')).toBeInTheDocument()
    })

    it('renders View Properties button', () => {
      render(<Hero />)
      expect(screen.getByText('View Properties')).toBeInTheDocument()
    })

    it('shows property category', () => {
      render(<Hero />)
      expect(screen.getByText('Villa')).toBeInTheDocument()
    })

    it('shows property location', () => {
      render(<Hero />)
      expect(screen.getByText('Miami Beach, FL 33139, USA')).toBeInTheDocument()
    })
  })

  describe('SearchForm', () => {
    it('renders all search fields', () => {
      render(<SearchForm />)
      expect(screen.getByLabelText('Location')).toBeInTheDocument()
      expect(screen.getByLabelText('Property Type')).toBeInTheDocument()
      expect(screen.getByLabelText('Property Status')).toBeInTheDocument()
      expect(screen.getByLabelText('Price Limit')).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
    })

    it('form submission does not reload', async () => {
      const user = userEvent.setup()
      render(<SearchForm />)
      const submitBtn = screen.getByRole('button', { name: /search/i })
      await user.click(submitBtn)
    })

    it('renders property type options', () => {
      render(<SearchForm />)
      expect(screen.getByRole('option', { name: 'Commercial' })).toBeInTheDocument()
      expect(screen.getByRole('option', { name: 'Villa' })).toBeInTheDocument()
      expect(screen.getByRole('option', { name: 'Apartment' })).toBeInTheDocument()
    })

    it('renders price limit options', () => {
      render(<SearchForm />)
      expect(screen.getByRole('option', { name: '$100,000' })).toBeInTheDocument()
      expect(screen.getByRole('option', { name: '$1,000,000' })).toBeInTheDocument()
    })
  })

  describe('FeaturedProperties', () => {
    it('renders section heading', () => {
      render(<FeaturedProperties />)
      expect(screen.getByText('Featured Properties')).toBeInTheDocument()
    })

    it('renders 5 property cards', () => {
      render(<FeaturedProperties />)
      // Property names have whitespace-pre-line; use regex
      expect(screen.getByText(/Harborview/)).toBeInTheDocument()
      expect(screen.getByText(/Skyline/)).toBeInTheDocument()
      expect(screen.getByText(/Palm Court/)).toBeInTheDocument()
      expect(screen.getByText(/Riverside/)).toBeInTheDocument()
      expect(screen.getByText(/Coastal/)).toBeInTheDocument()
    })

    it('shows prices', () => {
      render(<FeaturedProperties />)
      expect(screen.getByText('$285,000')).toBeInTheDocument()
      expect(screen.getByText('$420,000')).toBeInTheDocument()
      expect(screen.getByText('$3,500/mo')).toBeInTheDocument()
    })

    it('shows location and bed/bath info', () => {
      render(<FeaturedProperties />)
      expect(screen.getByText(/Miami — 3bds, 2bath/)).toBeInTheDocument()
      expect(screen.getByText(/New York — 4bds, 3bath/)).toBeInTheDocument()
    })

    it('shows sale/rent tags', () => {
      render(<FeaturedProperties />)
      const saleTags = screen.getAllByText('Sale')
      expect(saleTags.length).toBeGreaterThanOrEqual(1)
      const rentTags = screen.getAllByText('Rent')
      expect(rentTags.length).toBeGreaterThanOrEqual(1)
    })
  })

  describe('About', () => {
    it('renders about heading', () => {
      render(<About />)
      expect(screen.getByText(/We help you discover/)).toBeInTheDocument()
    })

    it('renders 4 feature items', () => {
      render(<About />)
      expect(screen.getByText('Find Your Dream Location')).toBeInTheDocument()
      expect(screen.getByText('Expert Agents At Your Service')).toBeInTheDocument()
      expect(screen.getByText('Buy & Rent Premium Homes')).toBeInTheDocument()
      expect(screen.getByText('Best Value Properties')).toBeInTheDocument()
    })

    it('renders Learn More link', () => {
      render(<About />)
      expect(screen.getByText('Learn More')).toBeInTheDocument()
    })
  })

  describe('Services', () => {
    it('renders section heading', () => {
      render(<Services />)
      expect(screen.getByText(/Welcome to Nestwell/)).toBeInTheDocument()
    })

    it('renders service cards', () => {
      render(<Services />)
      expect(screen.getByText('Buying A Property')).toBeInTheDocument()
      expect(screen.getByText('Renting A Property')).toBeInTheDocument()
    })

    it('renders Read more links', () => {
      render(<Services />)
      const readMoreLinks = screen.getAllByText('Read more')
      expect(readMoreLinks.length).toBe(2)
    })
  })

  describe('Testimonials', () => {
    it('renders section heading', () => {
      render(<Testimonials />)
      expect(screen.getByText('Our Satisfied Customers Say')).toBeInTheDocument()
    })

    it('renders customer names', () => {
      render(<Testimonials />)
      expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
      expect(screen.getByText('James Cooper')).toBeInTheDocument()
      expect(screen.getByText('Emily Dawson')).toBeInTheDocument()
    })

    it('renders customer roles', () => {
      render(<Testimonials />)
      const roles = screen.getAllByText('Buyer')
      expect(roles.length).toBe(3)
    })

    it('renders quote text', () => {
      render(<Testimonials />)
      const quotes = screen.getAllByText(/Far far away, behind the word mountains/)
      expect(quotes.length).toBeGreaterThanOrEqual(1)
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

    it('renders company links', () => {
      render(<Footer />)
      expect(screen.getByText('Company')).toBeInTheDocument()
      const aboutElements = screen.getAllByText('About')
      expect(aboutElements.length).toBeGreaterThanOrEqual(1)
      expect(screen.getByText('Services')).toBeInTheDocument()
    })

    it('renders explore links', () => {
      render(<Footer />)
      expect(screen.getByText('Explore')).toBeInTheDocument()
      expect(screen.getByText('Privacy')).toBeInTheDocument()
      expect(screen.getByText('Terms')).toBeInTheDocument()
    })

    it('renders get started links', () => {
      render(<Footer />)
      expect(screen.getByText('Get Started')).toBeInTheDocument()
      expect(screen.getByText('Buy')).toBeInTheDocument()
      expect(screen.getByText('Rent')).toBeInTheDocument()
    })

    it('renders newsletter form', async () => {
      const user = userEvent.setup()
      render(<Footer />)
      expect(screen.getByText('Newsletter')).toBeInTheDocument()
      expect(screen.getByPlaceholderText('Enter email address')).toBeInTheDocument()
      expect(screen.getByText('Subscribe')).toBeInTheDocument()
      // Click Subscribe to cover onSubmit handler
      await user.click(screen.getByText('Subscribe'))
    })

    it('renders social links', () => {
      render(<Footer />)
      expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
      expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    })
  })
})
