import { describe, expect, it, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

// Mock scrollIntoView for jsdom
beforeEach(() => {
  Element.prototype.scrollIntoView = vi.fn()
})

describe('Cosmos — Portfolio Template', () => {
  it('renders all main sections', () => {
    render(<App />)

    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByText(/Hey! I'm/)).toBeInTheDocument()
    expect(screen.getAllByText(/Cosmos/).length).toBeGreaterThan(0)
    expect(screen.getAllByText('Portfolio').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Services').length).toBeGreaterThan(0)
    expect(screen.getAllByText('About').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0)
  })

  it('renders navbar with all navigation links', () => {
    render(<App />)

    const nav = screen.getByRole('navigation')
    expect(nav).toContainElement(screen.getByRole('link', { name: 'Home' }))
    expect(nav).toContainElement(screen.getByRole('link', { name: 'Portfolio' }))
    expect(nav).toContainElement(screen.getByRole('link', { name: 'Services' }))
    expect(nav).toContainElement(screen.getByRole('link', { name: 'About' }))
    expect(nav).toContainElement(screen.getByRole('link', { name: 'Contact' }))
  })

  it('renders hero section with CTA', () => {
    render(<App />)

    expect(screen.getByText('More free templates here')).toBeInTheDocument()
  })

  it('renders portfolio grid with 9 items', () => {
    render(<App />)

    const images = screen.getAllByRole('img', { name: /Project/ })
    expect(images).toHaveLength(9)
  })

  it('renders 6 service cards', () => {
    render(<App />)

    expect(screen.getByText('Web Design')).toBeInTheDocument()
    expect(screen.getByText('Photography')).toBeInTheDocument()
    expect(screen.getByText('Marketing')).toBeInTheDocument()
    expect(screen.getByText('App Development')).toBeInTheDocument()
    expect(screen.getByText('Branding')).toBeInTheDocument()
    expect(screen.getByText('Search Ranking')).toBeInTheDocument()
  })

  it('renders about section with bio and work experience', () => {
    render(<App />)

    expect(screen.getByText('Bio')).toBeInTheDocument()
    expect(screen.getByText('Work Experience')).toBeInTheDocument()
    expect(screen.getByText('Senior Web Designer')).toBeInTheDocument()
    expect(screen.getByText('12 Years of experience')).toBeInTheDocument()
  })

  it('renders contact form', () => {
    render(<App />)

    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Send Message/ })).toBeInTheDocument()
  })

  it('renders footer with Component Dock link', () => {
    render(<App />)

    const footerLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(footerLink).toBeInTheDocument()
    expect(footerLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<App />)

    const menuButton = screen.getByRole('button', { name: /Open menu/ })
    await user.click(menuButton)

    expect(screen.getByRole('button', { name: /Close menu/ })).toBeInTheDocument()
  })

  it('closes mobile menu when a link is clicked', async () => {
    const user = userEvent.setup()
    render(<App />)

    const openBtn = screen.getByRole('button', { name: /Open menu/ })
    await user.click(openBtn)

    const mobileLinks = screen.getAllByRole('link', { name: 'Home' })
    const mobileLink = mobileLinks[mobileLinks.length - 1]!
    await user.click(mobileLink)

    expect(screen.getByRole('button', { name: /Open menu/ })).toBeInTheDocument()
  })

  it('clicks desktop nav link triggering smooth scroll', async () => {
    const user = userEvent.setup()
    render(<App />)

    const homeLinks = screen.getAllByRole('link', { name: 'Home' })
    await user.click(homeLinks[0]!)

    expect(Element.prototype.scrollIntoView).toHaveBeenCalled()
  })

  it('submits contact form and shows thank you', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.type(screen.getByLabelText('Name'), 'John')
    await user.type(screen.getByLabelText('Email'), 'john@example.com')
    await user.type(screen.getByLabelText('Subject'), 'Hello')
    await user.type(screen.getByLabelText('Message'), 'Hello there!')
    await user.click(screen.getByRole('button', { name: /Send Message/ }))

    expect(screen.getByText('Thank you!')).toBeInTheDocument()
    expect(screen.queryByRole('form', { name: 'Contact form' })).not.toBeInTheDocument()
  })

  it('does not submit contact form when name is missing', () => {
    render(<App />)

    // Fill email and message but NOT name
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } })
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Hello!' } })

    // Submit the form directly via fireEvent to bypass HTML validation
    fireEvent.submit(screen.getByRole('form', { name: 'Contact form' }))

    // Form should still be visible (early return — name is empty)
    expect(screen.getByRole('form', { name: 'Contact form' })).toBeInTheDocument()
  })

  it('does not submit contact form when email is missing', () => {
    render(<App />)

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John' } })
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Hello!' } })

    fireEvent.submit(screen.getByRole('form', { name: 'Contact form' }))

    expect(screen.getByRole('form', { name: 'Contact form' })).toBeInTheDocument()
  })

  it('does not submit contact form when message is missing', () => {
    render(<App />)

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John' } })
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } })

    fireEvent.submit(screen.getByRole('form', { name: 'Contact form' }))

    expect(screen.getByRole('form', { name: 'Contact form' })).toBeInTheDocument()
  })

  it('renders navbar logo linking to home', () => {
    render(<App />)

    const logo = screen.getByRole('link', { name: /Cosmos/ })
    expect(logo).toHaveAttribute('href', '#home-section')
  })

  it('renders portfolio items with images and overlays', () => {
    render(<App />)

    expect(screen.getByText('Project Alpha')).toBeInTheDocument()
    expect(screen.getAllByText('web, branding').length).toBeGreaterThan(0)
  })

  it('renders experience cards with company and year', () => {
    render(<App />)

    expect(screen.getByText('XYZ Agency')).toBeInTheDocument()
    expect(screen.getByText('StudioLab')).toBeInTheDocument()
    expect(screen.getByText('DesignCo')).toBeInTheDocument()
    expect(screen.getByText('WebWorks')).toBeInTheDocument()
  })

  it('renders about section with download CV link', () => {
    render(<App />)

    expect(screen.getByText('Download CV')).toBeInTheDocument()
  })

  it('renders about section with see portfolio link', () => {
    render(<App />)

    expect(screen.getByText('See portfolio')).toBeInTheDocument()
  })

  it('renders contact form subject field', () => {
    render(<App />)

    const subjectInput = screen.getByLabelText('Subject')
    expect(subjectInput).toBeInTheDocument()
    expect(subjectInput).toHaveAttribute('type', 'text')
  })

  it('updates subject field on change', async () => {
    const user = userEvent.setup()
    render(<App />)

    const subjectInput = screen.getByLabelText('Subject')
    await user.type(subjectInput, 'Test Subject')
    expect(subjectInput).toHaveValue('Test Subject')
  })
})
