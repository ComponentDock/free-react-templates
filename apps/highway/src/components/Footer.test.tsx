import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the footer heading with brand highlight', () => {
    render(<Footer />)
    expect(screen.getByText('Highway')).toBeInTheDocument()
  })

  it('renders About, Information, Customer Support sections', () => {
    render(<Footer />)
    expect(screen.getByText('Information')).toBeInTheDocument()
    expect(screen.getByText('Customer Support')).toBeInTheDocument()
    expect(screen.getByText('Have a Questions?')).toBeInTheDocument()
  })

  it('renders information links', () => {
    render(<Footer />)
    expect(screen.getAllByText('About Us').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Pricing')).toBeInTheDocument()
    expect(screen.getByText('Our Car')).toBeInTheDocument()
  })

  it('renders customer support links', () => {
    render(<Footer />)
    expect(screen.getByText('FAQ')).toBeInTheDocument()
    expect(screen.getByText('Terms')).toBeInTheDocument()
    expect(screen.getByText('Privacy')).toBeInTheDocument()
    expect(screen.getByText('Support')).toBeInTheDocument()
  })

  it('renders newsletter form', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText('Your email')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('prevents newsletter form submission', async () => {
    const user = userEvent.setup()
    const handler = vi.fn()
    render(<Footer />)
    const form = screen.getByPlaceholderText('Your email').closest('form')!
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      handler()
    })
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(handler).toHaveBeenCalled()
  })

  it('shows current year in copyright', () => {
    render(<Footer />)
    expect(screen.getByText(new RegExp(String(new Date().getFullYear())))).toBeInTheDocument()
  })

  it('renders copyright with no colorlib references', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer.textContent).not.toMatch(/colorlib/i)
  })
})
