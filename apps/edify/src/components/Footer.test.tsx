import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the wordmark, blurb, and social icons', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /Edify/ })).toBeInTheDocument()
    expect(screen.getByText(/automated process starts as soon as/i)).toBeInTheDocument()
    for (const label of ['Facebook', 'Twitter', 'LinkedIn', 'Instagram']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the three link columns', () => {
    render(<Footer />)

    for (const column of ['Our solutions', 'Support', 'Company']) {
      expect(screen.getByRole('heading', { name: column })).toBeInTheDocument()
    }
    for (const link of [
      'Design & creatives',
      'Telecommunication',
      'Restaurant',
      'Programing',
      'Architecture',
    ]) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('shows the copyright bar with the Component Dock link', () => {
    render(<Footer />)

    expect(screen.getByText(/© \d{4} Edify/)).toBeInTheDocument()
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
