import { describe, expect, it, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

// Mock scrollIntoView for jsdom
beforeEach(() => {
  Element.prototype.scrollIntoView = vi.fn()
})

describe('Lenscape — Personal Portfolio Template', () => {
  it('renders all main sections', () => {
    render(<App />)

    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByText(/I'm Alex Mercer/)).toBeInTheDocument()
    expect(screen.getAllByText('About').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Services').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Skills').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Works').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Contact').length).toBeGreaterThan(0)
  })

  it('renders navbar with all navigation links', () => {
    render(<App />)

    const nav = screen.getByRole('navigation')
    expect(nav).toContainElement(screen.getByRole('link', { name: 'Home' }))
    expect(nav).toContainElement(screen.getByRole('link', { name: 'About' }))
    expect(nav).toContainElement(screen.getByRole('link', { name: 'Services' }))
    expect(nav).toContainElement(screen.getByRole('link', { name: 'Skills' }))
    expect(nav).toContainElement(screen.getByRole('link', { name: 'Works' }))
    expect(nav).toContainElement(screen.getByRole('link', { name: 'Contact' }))
  })

  it('renders navbar logo linking to home', () => {
    render(<App />)

    const logo = screen.getByRole('link', { name: /Lenscape/ })
    expect(logo).toHaveAttribute('href', '#home-section')
  })

  it('renders hero section with CTAs', () => {
    render(<App />)

    expect(screen.getByText('More About Me')).toBeInTheDocument()
    expect(screen.getByText('Hire Me')).toBeInTheDocument()
    expect(screen.getByText('UI/UX Designer & Developer')).toBeInTheDocument()
  })

  it('renders about section with counter stats', () => {
    render(<App />)

    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText('Years Experience')).toBeInTheDocument()
    expect(screen.getByText('350')).toBeInTheDocument()
    expect(screen.getByText('Projects Completed')).toBeInTheDocument()
    expect(screen.getByText('200')).toBeInTheDocument()
    expect(screen.getByText('Clients')).toBeInTheDocument()
    expect(screen.getByText('15')).toBeInTheDocument()
    expect(screen.getByText('Awards Won')).toBeInTheDocument()
  })

  it('renders skills section with progress bars', () => {
    render(<App />)

    expect(screen.getAllByText('UI/UX').length).toBeGreaterThan(0)
    expect(screen.getByText('95%')).toBeInTheDocument()
    expect(screen.getAllByText('Web Development').length).toBeGreaterThan(0)
    expect(screen.getByText('90%')).toBeInTheDocument()
    expect(screen.getAllByText('Branding').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Photography').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Marketing').length).toBeGreaterThan(0)
    expect(screen.getAllByText('SEO').length).toBeGreaterThan(0)
  })

  it('renders 6 service cards', () => {
    render(<App />)

    expect(screen.getByText('UI/UX Design')).toBeInTheDocument()
    expect(screen.getAllByText('Web Development').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Photography').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Marketing').length).toBeGreaterThan(0)
    expect(screen.getAllByText('SEO').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Branding').length).toBeGreaterThan(0)
  })

  it('renders portfolio items with images', () => {
    render(<App />)

    expect(screen.getByText('Brand Identity')).toBeInTheDocument()
    expect(screen.getByText('Mobile App UI')).toBeInTheDocument()
    expect(screen.getByText('E-commerce Site')).toBeInTheDocument()
    expect(screen.getByText('Photo Campaign')).toBeInTheDocument()
    expect(screen.getByText('Dashboard Design')).toBeInTheDocument()
    expect(screen.getByText('Landing Page')).toBeInTheDocument()

    const images = screen.getAllByRole('img', {
      name: /Brand Identity|Mobile App UI|E-commerce Site|Photo Campaign|Dashboard Design|Landing Page/,
    })
    expect(images).toHaveLength(6)
  })

  it('renders testimonials section', () => {
    render(<App />)

    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Emily Davis')).toBeInTheDocument()
  })

  it('renders contact form', () => {
    render(<App />)

    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Send Message/ })).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<App />)

    expect(
      screen.getByText('198 West 21th Street, Suite 721, San Francisco, CA 94110'),
    ).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('alex@lenscape.dev')).toBeInTheDocument()
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

    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } })
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Hello!' } })

    fireEvent.submit(screen.getByRole('form', { name: 'Contact form' }))

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

  it('renders subject field as text input', () => {
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

  it('renders copyright in footer', () => {
    render(<App />)

    expect(screen.getByText(/Lenscape\. All rights reserved/)).toBeInTheDocument()
  })
})
