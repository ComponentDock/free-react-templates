import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders a newsletter signup form', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText(/enter your email/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('renders useful links', () => {
    render(<Footer />)
    expect(screen.getByText('Useful Links')).toBeInTheDocument()
  })

  it('renders copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/copyright/i)).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders social media icon links', () => {
    render(<Footer />)
    const socialLinks = screen.getAllByRole('link', {
      name: /facebook|twitter|instagram|pinterest/i,
    })
    expect(socialLinks.length).toBeGreaterThanOrEqual(4)
  })
})
