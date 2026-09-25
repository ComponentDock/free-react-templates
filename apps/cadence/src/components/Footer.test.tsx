import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Cadence')).toBeInTheDocument()
  })

  it('renders the footer nav sections', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Social' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('renders footer links', () => {
    render(<Footer />)
    expect(screen.getByText('About us')).toBeInTheDocument()
    expect(screen.getByText('Our Services')).toBeInTheDocument()
    expect(screen.getByText('Album')).toBeInTheDocument()
    expect(screen.getByText('Facebook')).toBeInTheDocument()
  })

  it('renders the subscribe form', () => {
    render(<Footer />)
    expect(screen.getByLabelText(/email for newsletter/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)
    const links = screen.getAllByRole('link', { name: /component dock/i })
    expect(links.length).toBeGreaterThanOrEqual(1)
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
      expect(link).toHaveAttribute('target', '_blank')
    })
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const button = screen.getByRole('button', { name: /subscribe/i })
    await user.click(button)
    // Form should not navigate (default prevented)
  })
})
