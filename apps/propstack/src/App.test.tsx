import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { App } from './App'

describe('Propstack App', () => {
  it('renders the navbar with logo', () => {
    render(<App />)
    expect(screen.getByText('Propstack.')).toBeInTheDocument()
  })

  it('renders all navigation links in the nav landmark', () => {
    render(<App />)
    const nav = screen.getByRole('navigation')
    expect(nav).toHaveTextContent('Home')
    expect(nav).toHaveTextContent('Properties')
    expect(nav).toHaveTextContent('Agents')
    expect(nav).toHaveTextContent('About')
    expect(nav).toHaveTextContent('News')
    expect(nav).toHaveTextContent('Contact')
  })

  it('renders the hero section', () => {
    render(<App />)
    expect(
      screen.getByRole('heading', { level: 1, name: /buy and sell real estate/i }),
    ).toBeInTheDocument()
  })

  it('renders the How It Works section with 3 steps', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: 'How It Works' })).toBeInTheDocument()
    expect(screen.getByText('Find Property.')).toBeInTheDocument()
    expect(screen.getByText('Buy Property.')).toBeInTheDocument()
    expect(screen.getByText('Make Investment.')).toBeInTheDocument()
  })

  it('renders the Properties section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: 'Properties' })).toBeInTheDocument()
    expect(screen.getByText('$3,400,000')).toBeInTheDocument()
    expect(screen.getByText('View All Property Listings')).toBeInTheDocument()
  })

  it('renders the Agents section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: 'Agents' })).toBeInTheDocument()
    expect(screen.getByText('Kaiara Spencer')).toBeInTheDocument()
    expect(screen.getByText('Dave Simpson')).toBeInTheDocument()
  })

  it('renders the About section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByText(/leading real estate agency/i)).toBeInTheDocument()
  })

  it('renders the News section', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: 'News' })).toBeInTheDocument()
    expect(screen.getByText('Top 10 Neighborhoods to Buy in 2026')).toBeInTheDocument()
  })

  it('renders the Contact form', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 2, name: 'Get In Touch' })).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('handles contact form submission', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.type(screen.getByPlaceholderText('Your Name'), 'John Doe')
    await user.type(screen.getByPlaceholderText('Your Email'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Subject'), 'Test')
    await user.type(screen.getByPlaceholderText('Message'), 'Hello')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByText('Thank you!')).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders footer copyright', () => {
    render(<App />)
    expect(screen.getByText(/Propstack\. All rights reserved/)).toBeInTheDocument()
  })

  it('toggles mobile menu on button click', async () => {
    const user = userEvent.setup()
    render(<App />)
    const menuBtn = screen.getByRole('button', { name: 'Open menu' })
    await user.click(menuBtn)
    expect(screen.getByRole('button', { name: 'Close menu' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
    await user.click(screen.getByRole('button', { name: 'Close menu' }))
    expect(screen.getByRole('button', { name: 'Open menu' })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
  })

  it('updates navbar style on scroll', () => {
    render(<App />)
    const header = document.querySelector('header')!
    expect(header.className).toContain('bg-transparent')
    act(() => {
      Object.defineProperty(window, 'scrollY', { value: 100, writable: true })
      window.dispatchEvent(new Event('scroll'))
    })
    expect(header.className).toContain('bg-white')
  })

  it('shows mobile menu nav links when open', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Open menu' }))
    const mobileLinks = screen.getAllByRole('link', { name: 'News' })
    expect(mobileLinks.length).toBeGreaterThanOrEqual(2)
    const lastLink = mobileLinks.at(-1)
    expect(lastLink).toBeDefined()
  })

  it('submits the footer subscribe form', async () => {
    const user = userEvent.setup()
    render(<App />)
    const emailInput = screen.getByPlaceholderText('Your email')
    await user.type(emailInput, 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
  })
})
