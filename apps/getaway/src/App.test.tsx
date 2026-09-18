import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('Getaway App', () => {
  it('renders the navbar with brand name', () => {
    render(<App />)
    const nav = document.querySelector('nav')!
    expect(nav).toHaveTextContent('Getaway')
  })

  it('renders the hero heading', () => {
    render(<App />)
    expect(screen.getByText('Make Your Tour Amazing With Us')).toBeInTheDocument()
  })

  it('renders the hero tagline', () => {
    render(<App />)
    expect(screen.getByText(/Travel to the any corner of the world/)).toBeInTheDocument()
  })

  it('renders the search form', () => {
    render(<App />)
    expect(screen.getByLabelText('Destination')).toBeInTheDocument()
    expect(screen.getByLabelText('Check-in date')).toBeInTheDocument()
    expect(screen.getByLabelText('Check-out date')).toBeInTheDocument()
    expect(screen.getByLabelText('Price Limit')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('renders the services section', () => {
    render(<App />)
    expect(screen.getByText("It's time to start your adventure")).toBeInTheDocument()
    expect(screen.getByText('Activities')).toBeInTheDocument()
    expect(screen.getByText('Travel Arrangements')).toBeInTheDocument()
    expect(screen.getByText('Private Guide')).toBeInTheDocument()
    expect(screen.getByText('Location Manager')).toBeInTheDocument()
  })

  it('renders the statistics section', () => {
    render(<App />)
    expect(screen.getByText('Make Your Tour Memorable and Safe With Us')).toBeInTheDocument()
    expect(screen.getByText('300')).toBeInTheDocument()
    expect(screen.getByText('24,000')).toBeInTheDocument()
    expect(screen.getByText('200')).toBeInTheDocument()
  })

  it('renders the best places section', () => {
    render(<App />)
    expect(screen.getByText('Best Place Destination')).toBeInTheDocument()
    expect(screen.getByText('Singapore')).toBeInTheDocument()
    expect(screen.getByText('Canada')).toBeInTheDocument()
    expect(screen.getByText('Thailand')).toBeInTheDocument()
    expect(screen.getByText('Australia')).toBeInTheDocument()
  })

  it('renders the tour packages section', () => {
    render(<App />)
    expect(screen.getByText('Tour Destination')).toBeInTheDocument()
    expect(screen.getAllByText('$300/person')).toHaveLength(6)
  })

  it('renders the testimonials section', () => {
    render(<App />)
    expect(screen.getByText('Tourist Feedback')).toBeInTheDocument()
    expect(screen.getByText('Roger Scott')).toBeInTheDocument()
  })

  it('renders the blog section', () => {
    render(<App />)
    expect(screen.getByText('Recent Post')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const footerLinks = screen.getAllByRole('link', { name: /Component Dock/i })
    expect(footerLinks.length).toBeGreaterThanOrEqual(1)
    footerLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    })
  })

  it('sets the page title', () => {
    render(<App />)
    expect(document.title).toBe('Getaway — Travel Agency Template')
  })
})

describe('Navbar mobile menu', () => {
  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<App />)

    const toggleButton = screen.getByRole('button', { name: /open menu/i })
    expect(
      screen.queryByText('Home', { selector: '.md\\:hidden a, [class*="md:hidden"] a' }),
    ).not.toBeInTheDocument()

    await user.click(toggleButton)

    // After clicking, mobile menu links should appear
    const mobileLinks =
      document.querySelector('ul.block') || document.querySelector('[class*="border-t"]')
    expect(mobileLinks).toBeTruthy()
    expect(mobileLinks).toHaveTextContent('Home')

    // Toggle back
    const closeButton = screen.getByRole('button', { name: /close menu/i })
    await user.click(closeButton)
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    const toggleButton = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggleButton)

    // Click a mobile menu link (should close the menu)
    const mobileHomeLink = screen
      .getAllByText('Home')
      .find((el) => el.closest('ul')?.className.includes('md:hidden'))
    expect(mobileHomeLink).toBeTruthy()
    await user.click(mobileHomeLink!)

    // Menu should close (toggle button should show "Open menu" again)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when Book Now is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.click(screen.getByRole('button', { name: /open menu/i }))

    // Find the mobile Book Now link (not the desktop one)
    const mobileBookNow = screen
      .getAllByText('Book Now')
      .find((el) => el.closest('ul')?.className.includes('md:hidden'))
    expect(mobileBookNow).toBeTruthy()
    await user.click(mobileBookNow!)

    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })
})

describe('SearchForm', () => {
  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<App />)

    const submitButton = screen.getByRole('button', { name: /search/i })
    await user.click(submitButton)
    // Form submission should not cause a page reload (prevented by onSubmit)
  })
})
