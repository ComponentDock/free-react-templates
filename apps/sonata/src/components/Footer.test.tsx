import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

const SOCIALS = ['Instagram', 'Pinterest', 'Facebook', 'Twitter', 'YouTube']

const WIDGET_LINKS = [
  'Our Story',
  'Sol Music Blog',
  'History',
  'Music',
  'Subscription',
  'Custom Music',
  'Footage',
  'Newsletter',
  'Careers',
  'Press',
  'Contact',
]

describe('Footer', () => {
  it('renders the brand, about text, social links and widget columns', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /Sonata/ })).toBeInTheDocument()
    expect(screen.getByText(/Consectetur adipiscing elit/)).toBeInTheDocument()

    for (const label of SOCIALS) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    for (const widget of ['About us', 'Products', 'Playlists']) {
      expect(screen.getByRole('heading', { level: 2, name: widget })).toBeInTheDocument()
    }

    for (const link of WIDGET_LINKS) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('credits Component Dock in the copyright bar', () => {
    render(<Footer />)

    const credit = screen.getByRole('link', { name: 'Component Dock' })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')

    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(String(year)))).toBeInTheDocument()
  })
})
