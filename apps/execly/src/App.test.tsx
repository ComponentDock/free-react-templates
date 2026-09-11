import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('Execly App', () => {
  it('sets document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Execly — Corporate Business Template')
  })

  it('renders skip-to-content link', () => {
    render(<App />)
    expect(screen.getByText('Skip to main content')).toHaveAttribute('href', '#main')
  })

  it('renders the header with logo and nav links', () => {
    render(<App />)
    expect(screen.getByText('Execly')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
    expect(screen.getByText('Recent Work')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders the hero section', () => {
    render(<App />)
    expect(screen.getByText('Discover the Colorful World')).toBeInTheDocument()
    expect(screen.getByText('Build Your Dream')).toBeInTheDocument()
    expect(screen.getByText('Discover Now')).toBeInTheDocument()
  })

  it('renders the about section', () => {
    render(<App />)
    expect(screen.getByText(/We Believe that Interior beautifies total/)).toBeInTheDocument()
    expect(screen.getByText('Expert Services')).toBeInTheDocument()
    expect(screen.getByText('Great Support')).toBeInTheDocument()
  })

  it('renders the services section', () => {
    render(<App />)
    expect(screen.getByText('What we can offer for you')).toBeInTheDocument()
    expect(screen.getByText('User friendly Admin')).toBeInTheDocument()
    expect(screen.getByText('Full Responsive')).toBeInTheDocument()
    expect(screen.getByText('Full Documentation')).toBeInTheDocument()
    expect(screen.getByText('Reasonable Pricing')).toBeInTheDocument()
    const viewDetails = screen.getAllByText('View Details')
    expect(viewDetails).toHaveLength(4)
  })

  it('renders the features section', () => {
    render(<App />)
    expect(screen.getAllByText('Basic Revolutions')).toHaveLength(2)
    expect(screen.getAllByText('Basic & Common Repairs')).toHaveLength(2)
  })

  it('renders the portfolio section', () => {
    render(<App />)
    const portfolioImages = screen.getAllByAltText('Portfolio item')
    expect(portfolioImages).toHaveLength(6)
  })

  it('renders the stats section', () => {
    render(<App />)
    expect(screen.getByText('2,536')).toBeInTheDocument()
    expect(screen.getByText('6,784')).toBeInTheDocument()
    expect(screen.getByText('1,059')).toBeInTheDocument()
    expect(screen.getByText('2,239')).toBeInTheDocument()
    expect(screen.getByText('435')).toBeInTheDocument()
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
    expect(screen.getByText('Really Happy Clients')).toBeInTheDocument()
  })

  it('renders the recent works section', () => {
    render(<App />)
    expect(screen.getByText('Our Recent Works may impress you')).toBeInTheDocument()
    expect(screen.getAllByText('Nettie Mullins')).toHaveLength(3)
  })

  it('renders the brands section', () => {
    render(<App />)
    expect(screen.getByText('Brand One')).toBeInTheDocument()
    expect(screen.getByText('Brand Five')).toBeInTheDocument()
  })

  it('renders the contact section', () => {
    render(<App />)
    expect(screen.getByText('You can drop us a line')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Enter email address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
    expect(screen.getByText('Send Message')).toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(<App />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByText('012-6532-568-9746')).toBeInTheDocument()
    expect(screen.getByText('012-6532-569-9748')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('toggles mobile menu open and closed', async () => {
    const user = userEvent.setup()
    render(<App />)
    const toggle = screen.getByRole('button', { name: /open menu/i })
    await user.click(toggle)
    expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /close menu/i }))
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('closes mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: /open menu/i }))
    const mobileNav = screen.getByRole('navigation', { name: /mobile navigation/i })
    const aboutLink = mobileNav.querySelector('a[href="#about"]')!
    await user.click(aboutLink)
    expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument()
  })

  it('contact form prevents default on submit', async () => {
    const user = userEvent.setup()
    render(<App />)
    // Fill in required fields so form validation passes
    await user.type(screen.getByPlaceholderText('Enter your name'), 'John')
    await user.type(screen.getByPlaceholderText('Enter email address'), 'john@test.com')
    await user.type(screen.getByPlaceholderText('Subject'), 'Test')
    await user.type(screen.getByPlaceholderText('Message'), 'Hello')
    await user.click(screen.getByText('Send Message'))
    // Form should still be present (no page reload)
    expect(screen.getByRole('form', { name: 'Contact form' })).toBeInTheDocument()
  })

  it('renders the newsletter form', async () => {
    const user = userEvent.setup()
    render(<App />)
    const subscribeBtn = screen.getByLabelText('Subscribe')
    expect(subscribeBtn).toBeEnabled()
    await user.click(subscribeBtn)
    expect(screen.getByRole('form', { name: 'Newsletter signup' })).toBeInTheDocument()
  })

  it('renders map placeholder', () => {
    render(<App />)
    expect(screen.getByText('Map Location')).toBeInTheDocument()
  })

  it('renders social links in footer', () => {
    render(<App />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
    expect(screen.getByLabelText('Behance')).toBeInTheDocument()
  })
})
