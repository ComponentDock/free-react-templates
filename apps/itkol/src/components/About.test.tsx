import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading, quote button, and the three stats', () => {
    render(<About />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'ITKol - Partner for Your Business' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Request a Quote' })).toBeInTheDocument()

    for (const stat of ['2500+', '350+', '20+']) {
      expect(screen.getByText(stat)).toBeInTheDocument()
    }
  })
})
