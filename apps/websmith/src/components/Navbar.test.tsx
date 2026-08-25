import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from './Navbar'

describe('Navbar', () => {
  it('shows the brand wordmark and navigation links', () => {
    render(<Navbar />)
    expect(screen.getByRole('link', { name: /Websmith/i })).toHaveAttribute('href', '#home-section')
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'What We Do' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Portfolio' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('opens and closes the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    const toggle = screen.getByRole('button', { name: 'Open menu' })
    await user.click(toggle)
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobileNav).toBeInTheDocument()
    expect(within(mobileNav).getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
    await user.click(within(mobileNav).getByRole('link', { name: 'About Us' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('renders the header landmark', () => {
    render(<Navbar />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('renders a close button inside the mobile nav', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(within(mobileNav).getByRole('button', { name: 'Close menu' })).toBeInTheDocument()
  })

  it('has a link to the home section', () => {
    render(<Navbar />)
    const homeLink = screen.getByRole('link', { name: /Websmith/i })
    expect(homeLink).toHaveAttribute('href', '#home-section')
  })

  it('lists all five nav links in the mobile menu', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(within(mobileNav).getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: 'About Us' })).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: 'What We Do' })).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: 'Portfolio' })).toBeInTheDocument()
    expect(within(mobileNav).getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('closes mobile menu on close button click', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    expect(mobileNav).toBeInTheDocument()
    await user.click(within(mobileNav).getByRole('button', { name: 'Close menu' }))
    expect(screen.queryByRole('navigation', { name: 'Mobile' })).not.toBeInTheDocument()
  })

  it('observes sections and updates active link via IntersectionObserver', () => {
    // Render Navbar inside a container with section IDs so observe() is called
    const { container } = render(
      <div>
        <Navbar />
        <section id="home-section" />
        <section id="about-section" />
        <section id="what-we-do-section" />
        <section id="portfolio-section" />
        <section id="contact-section" />
      </div>,
    )
    expect(container.querySelector('#home-section')).toBeInTheDocument()
    // The IntersectionObserver mock fires callback on observe(), setting activeSection
    // The active link should get text-brand class
    const homeLink = screen.getByRole('link', { name: 'Home' })
    expect(homeLink.className).toContain('text-brand')
  })

  it('sets body overflow hidden when menu opens and restores on close', async () => {
    const user = userEvent.setup()
    render(<Navbar />)
    expect(document.body.style.overflow).toBe('')
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    expect(document.body.style.overflow).toBe('hidden')
    const mobileNav = screen.getByRole('navigation', { name: 'Mobile' })
    await user.click(within(mobileNav).getByRole('button', { name: 'Close menu' }))
    expect(document.body.style.overflow).toBe('')
  })

  it('switches active section based on IntersectionObserver entries', () => {
    render(
      <div>
        <Navbar />
        <section id="home-section" />
        <section id="about-section" />
        <section id="what-we-do-section" />
        <section id="portfolio-section" />
        <section id="contact-section" />
      </div>,
    )
    // The mock calls observe which triggers the callback with isIntersecting: true
    // for each section. The last one observed (contact-section) will be active.
    const contactLink = screen.getByRole('link', { name: 'Contact' })
    expect(contactLink.className).toContain('text-brand')
  })
})
