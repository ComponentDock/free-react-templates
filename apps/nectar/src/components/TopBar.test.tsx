import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  it('renders the email link with correct href', () => {
    render(<TopBar />)
    const emailLink = screen.getByRole('link', { name: /email info@nectar\.com/i })
    expect(emailLink).toHaveAttribute('href', 'mailto:info@nectar.com')
  })

  it('renders the email text', () => {
    render(<TopBar />)
    expect(screen.getByText('info@nectar.com')).toBeInTheDocument()
  })

  it('renders the phone link with correct href', () => {
    render(<TopBar />)
    const phoneLink = screen.getByRole('link', { name: /call \+1/i })
    expect(phoneLink).toHaveAttribute('href', expect.stringContaining('tel:'))
  })

  it('renders the phone number text', () => {
    render(<TopBar />)
    expect(screen.getByText('+1 (234) 567 890')).toBeInTheDocument()
  })

  it('renders the Request A Quote button', () => {
    render(<TopBar />)
    expect(screen.getByRole('button', { name: /request a quote/i })).toBeInTheDocument()
  })

  it('renders Mail icon with aria-hidden', () => {
    render(<TopBar />)
    const emailLink = screen.getByRole('link', { name: /email info@nectar\.com/i })
    const svg = emailLink.querySelector('svg')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders Phone icon with aria-hidden', () => {
    render(<TopBar />)
    const phoneLink = screen.getByRole('link', { name: /call \+1/i })
    const svg = phoneLink.querySelector('svg')
    expect(svg).toHaveAttribute('aria-hidden', 'true')
  })
})
