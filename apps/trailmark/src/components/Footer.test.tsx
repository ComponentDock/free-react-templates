import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the about column, latest news, and the tag cloud', () => {
    render(<Footer />)
    expect(screen.getByText('trailmark')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Latest News' })).toBeInTheDocument()
    expect(screen.getByText('Brazil Summer')).toBeInTheDocument()
    expect(screen.getByText('A perfect vacation')).toBeInTheDocument()
    expect(screen.getAllByText('Jan 09, 2018')).toHaveLength(2)
    expect(screen.getByRole('heading', { level: 3, name: 'Tags' })).toBeInTheDocument()
    for (const tag of [
      'travel',
      'summer',
      'cruise',
      'beach',
      'offer',
      'vacation',
      'trip',
      'city break',
      'adventure',
    ]) {
      expect(screen.getByRole('link', { name: tag })).toBeInTheDocument()
    }
  })

  it('links Component Dock instead of an external attribution', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
