import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('has contentinfo landmark', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders Recent Photos section with 6 thumbnails', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Recent Photos' })).toBeInTheDocument()
    const photos = screen.getAllByAltText(/Recent photo/)
    expect(photos).toHaveLength(6)
  })

  it('renders Archives section with 5 monthly entries', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Archives' })).toBeInTheDocument()
    const entries = ['November 2018', 'October 2018', 'September 2018', 'August 2018', 'July 2018']
    for (const entry of entries) {
      expect(screen.getByText(entry)).toBeInTheDocument()
    }
  })

  it('renders archive counts', () => {
    render(<Footer />)
    expect(screen.getByText('(105)')).toBeInTheDocument()
    expect(screen.getByText('(212)')).toBeInTheDocument()
    expect(screen.getByText('(150)')).toBeInTheDocument()
    expect(screen.getByText('(100)')).toBeInTheDocument()
    expect(screen.getByText('(200)')).toBeInTheDocument()
  })

  it('renders Have a Questions? section with contact info', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Have a Questions?' })).toBeInTheDocument()
    expect(
      screen.getByText('203 Fake St. Mountain View, San Francisco, California, USA'),
    ).toBeInTheDocument()
    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(screen.getByText('info@photosnap.com')).toBeInTheDocument()
  })

  it('renders copyright with Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders current year in copyright', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})
