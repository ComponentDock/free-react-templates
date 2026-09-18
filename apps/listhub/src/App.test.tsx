import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)

    // Navbar
    expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument()
    expect(screen.getByLabelText('Search')).toBeInTheDocument()

    // Hero
    expect(screen.getByRole('heading', { level: 1, name: /find your/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/search query/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/select category/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/select city/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /search destination/i })).toBeInTheDocument()

    // Categories
    expect(screen.getByText(/we help you to find/i)).toBeInTheDocument()
    expect(screen.getAllByText('Hotel').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Restaurant').length).toBeGreaterThanOrEqual(1)

    // Feature block
    expect(screen.getByRole('heading', { level: 2, name: /best caf/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /explore now/i })).toBeInTheDocument()

    // Featured listings
    expect(screen.getByText('Featured Listing')).toBeInTheDocument()
    expect(screen.getByText('Urban Lounge')).toBeInTheDocument()
    expect(screen.getByText('Golden Spa')).toBeInTheDocument()

    // How it works
    expect(screen.getByText(/how listhub works/i)).toBeInTheDocument()
    expect(screen.getByText('Find Businesses')).toBeInTheDocument()
    expect(screen.getByText('Review Listings')).toBeInTheDocument()
    expect(screen.getByText('Make a Reservation')).toBeInTheDocument()

    // Testimonials
    expect(screen.getByText(/what people say/i)).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()

    // Newsletter
    expect(screen.getByText(/let's stay in touch/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()

    // Blog
    expect(screen.getByText(/latest news/i)).toBeInTheDocument()
    expect(screen.getByText(/best spa salons/i)).toBeInTheDocument()

    // Footer
    expect(screen.getByText(/component dock/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /component dock/i })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('sets the document title', () => {
    render(<App />)
    expect(document.title).toBe('Listhub — Directory Listing Template')
  })
})

describe('Navbar', () => {
  it('toggles mobile menu', async () => {
    const user = userEvent.setup()
    render(<App />)

    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('toggles pages dropdown', async () => {
    const user = userEvent.setup()
    render(<App />)

    const pagesBtn = screen.getByRole('button', { name: /pages/i })
    await user.click(pagesBtn)
    expect(screen.getByText('Blog Details')).toBeInTheDocument()
    expect(screen.getByText('Elements')).toBeInTheDocument()

    await user.click(pagesBtn)
    expect(screen.queryByText('Blog Details')).not.toBeInTheDocument()
  })
})

describe('Hero', () => {
  it('has search input with placeholder', () => {
    render(<App />)
    const input = screen.getByLabelText(/search query/i)
    expect(input).toHaveAttribute('placeholder', 'What are you finding?')
  })

  it('has category and city dropdowns', () => {
    render(<App />)
    const category = screen.getByLabelText(/select category/i)
    const city = screen.getByLabelText(/select city/i)
    expect(category).toBeInTheDocument()
    expect(city).toBeInTheDocument()
    expect(category.querySelectorAll('option').length).toBeGreaterThan(1)
    expect(city.querySelectorAll('option').length).toBeGreaterThan(1)
  })
})

describe('FeaturedListings', () => {
  it('renders 6 listing cards', () => {
    render(<App />)
    const headings = screen.getAllByRole('heading', { level: 3 })
    const listingHeadings = headings.filter((h) =>
      [
        'Urban Lounge',
        'Skyline Cafe',
        'Golden Spa',
        'City Mart',
        'Fitness Hub',
        'The Grand Hotel',
      ].includes(h.textContent ?? ''),
    )
    expect(listingHeadings).toHaveLength(6)
  })

  it('has heart save buttons', () => {
    render(<App />)
    const heartButtons = screen.getAllByRole('button', { name: /save/i })
    expect(heartButtons).toHaveLength(6)
  })

  it('shows open/closed status', () => {
    render(<App />)
    expect(screen.getAllByText('Open Now')).toHaveLength(2)
    expect(screen.getAllByText('Closed')).toHaveLength(4)
  })

  it('has explore more link', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: /explore more/i })).toBeInTheDocument()
  })
})

describe('Testimonials', () => {
  it('renders 3 testimonials', () => {
    render(<App />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
  })
})

describe('BlogPosts', () => {
  it('renders 2 blog posts', () => {
    render(<App />)
    expect(screen.getByText(/best spa salons/i)).toBeInTheDocument()
    expect(screen.getByText(/top 10 restaurants/i)).toBeInTheDocument()
  })
})

describe('Newsletter', () => {
  it('accepts email input', async () => {
    const user = userEvent.setup()
    render(<App />)

    const emailInput = screen.getByLabelText(/email address/i)
    await user.type(emailInput, 'test@example.com')
    expect(emailInput).toHaveValue('test@example.com')
  })

  it('submits the newsletter form', async () => {
    const user = userEvent.setup()
    render(<App />)

    const form = screen.getByRole('form', { name: /newsletter subscription/i })
    const emailInput = screen.getByLabelText(/email address/i)
    await user.type(emailInput, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(form).toBeInTheDocument()
  })
})

describe('Footer', () => {
  it('links to componentdock.com', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('has quick links and company links', () => {
    render(<App />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByText('Company')).toBeInTheDocument()
    expect(screen.getByText('Listing')).toBeInTheDocument()
    expect(screen.getByText('Our Team')).toBeInTheDocument()
  })

  it('shows social media links', () => {
    render(<App />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('LinkedIn')).toBeInTheDocument()
  })
})
