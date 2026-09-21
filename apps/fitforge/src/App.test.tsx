import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('FitForge App', () => {
  it('renders all major sections', () => {
    render(<App />)

    // Navbar
    expect(screen.getAllByText('fit').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('forge').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('the next level').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByRole('link', { name: /get in touch/i })).toBeInTheDocument()

    // Hero
    expect(screen.getByText(/don't stop when/i)).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /get started/i }).length).toBeGreaterThanOrEqual(1)

    // Features
    expect(screen.getByText('Award Winning Gym')).toBeInTheDocument()
    expect(screen.getByText('Expert Coaches')).toBeInTheDocument()
    expect(screen.getByText('Nutrition Plans')).toBeInTheDocument()
    expect(screen.getByText('Community Events')).toBeInTheDocument()

    // Subscription
    expect(screen.getByText('Get your subscription')).toBeInTheDocument()

    // Portfolio
    expect(screen.getByText('Our Gallery')).toBeInTheDocument()

    // Testimonials
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByText('James Smith')).toBeInTheDocument()
    expect(screen.getByText('Crossfit Coach')).toBeInTheDocument()

    // Pricing
    expect(screen.getByText('Choose a plan')).toBeInTheDocument()
    expect(screen.getByText('$0')).toBeInTheDocument()
    expect(screen.getByText('$30')).toBeInTheDocument()
    expect(screen.getByText('$55')).toBeInTheDocument()

    // CTA
    expect(screen.getByText(/now!/i)).toBeInTheDocument()

    // Footer
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('has proper landmarks', () => {
    render(<App />)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('closes mobile menu when nav link is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    const menuButton = screen.getByRole('button', { name: /toggle menu/i })
    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')

    // Click a mobile nav link
    const homeLinks = screen.getAllByText('Home')
    const mobileHomeLink = homeLinks[homeLinks.length - 1]
    if (mobileHomeLink) await user.click(mobileHomeLink)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('toggles mobile menu', async () => {
    const user = userEvent.setup()
    render(<App />)

    const menuButton = screen.getByRole('button', { name: /toggle menu/i })
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')

    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'true')

    await user.click(menuButton)
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })

  it('renders navigation links', () => {
    render(<App />)
    const nav = screen.getByRole('navigation')
    expect(nav).toHaveTextContent('Home')
    expect(nav).toHaveTextContent('About')
    expect(nav).toHaveTextContent('Classes')
    expect(nav).toHaveTextContent('News')
    expect(nav).toHaveTextContent('Contact')
  })

  it('renders pricing plan features', () => {
    render(<App />)
    expect(screen.getByText('1 Day Free Trial')).toBeInTheDocument()
    expect(screen.getByText('Basic Sub')).toBeInTheDocument()
    expect(screen.getByText('Unlimited Access')).toBeInTheDocument()
  })

  it('renders portfolio images', () => {
    render(<App />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThan(4) // hero + sub + portfolio + testimonials + pricing bg
  })

  it('renders subscription benefits', () => {
    render(<App />)
    expect(screen.getByText(/personalized training/i)).toBeInTheDocument()
    expect(screen.getByText(/premium equipment/i)).toBeInTheDocument()
    expect(screen.getByText(/nutrition coaching/i)).toBeInTheDocument()
    expect(screen.getByText(/community support/i)).toBeInTheDocument()
  })

  it('renders social media links in footer', () => {
    render(<App />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
    expect(screen.getByLabelText('YouTube')).toBeInTheDocument()
  })

  it('renders Component Dock footer link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders search button in navbar', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('renders "Get it now" buttons in pricing', () => {
    render(<App />)
    const getItNowButtons = screen.getAllByRole('link', { name: /get it now/i })
    expect(getItNowButtons).toHaveLength(3)
  })

  it('renders "View More" overlays in portfolio', () => {
    render(<App />)
    const viewMoreTexts = screen.getAllByText('View More')
    expect(viewMoreTexts).toHaveLength(4)
  })

  it('renders testimonial quote', () => {
    render(<App />)
    expect(screen.getByText(/fitforge completely transformed my approach/i)).toBeInTheDocument()
  })

  it('renders CTA subscription link', () => {
    render(<App />)
    const ctaLink = screen.getByRole('link', { name: /subscription/i })
    expect(ctaLink).toHaveAttribute('href', '#pricing')
  })
})
