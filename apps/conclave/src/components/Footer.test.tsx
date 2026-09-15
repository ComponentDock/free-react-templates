import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { FOOTER_NAV, INSTA_FEED } from '../data'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders four columns: About, Navigation, Newsletter and InstaFeed', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Conclave home' })).toHaveTextContent('Conclave')
    expect(screen.getByRole('heading', { level: 5, name: 'Navigation' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 5, name: 'Newsletter' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 5, name: 'InstaFeed' })).toBeInTheDocument()
    for (const link of FOOTER_NAV) {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: /Instagram image \d/ })).toHaveLength(
      INSTA_FEED.length,
    )
  })

  it('credits Component Dock and renders Terms/Privacy links in the copyright bar', () => {
    render(<Footer />)
    const dockLink = screen.getByRole('link', { name: 'Component Dock' })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByRole('link', { name: 'Terms of Service' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeInTheDocument()
  })

  it('renders social icon links with accessible names', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Conclave on Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Conclave on Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Conclave on Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Conclave on LinkedIn' })).toBeInTheDocument()
  })

  it('allows subscribing to the newsletter', () => {
    render(<Footer />)
    const input = screen.getByRole('textbox', { name: 'Email address' })
    fireEvent.change(input, { target: { value: 'test@example.com' } })
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText('Thanks for subscribing!')).toBeInTheDocument()
    expect(screen.queryByRole('textbox', { name: 'Email address' })).not.toBeInTheDocument()
  })

  it('does not subscribe when email is empty', () => {
    render(<Footer />)
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('textbox', { name: 'Email address' })).toBeInTheDocument()
  })
})
