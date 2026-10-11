import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section title and exactly six hosting cards', () => {
    render(<Services />)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe(
      'Choose the right hosting solution',
    )
    expect(screen.getAllByRole('article')).toHaveLength(6)
  })

  it('covers the six offerings with a price line and a blurb each', () => {
    render(<Services />)
    const expected: Array<[string, string]> = [
      ['Shared Hosting', 'Starts at $2.80'],
      ['WordPress Hosting', 'Starts at $4.20'],
      ['Dedicated Hosting', 'Starts at $79.00'],
      ['SSL Certificate', 'Free on every plan'],
      ['Web Hosting', 'Starts at $3.90'],
      ['Cloud Server', 'Starts at $12.00'],
    ]
    for (const [title, price] of expected) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
      expect(screen.getByText(price)).toBeInTheDocument()
    }
    expect(screen.getByText(/with caching tuned for speed/)).toBeInTheDocument()
  })
})
