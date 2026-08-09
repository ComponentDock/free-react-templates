import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Intro } from './Intro'

describe('Intro', () => {
  it('renders the heading and lead paragraph', () => {
    render(<Intro />)
    expect(screen.getByRole('heading', { name: 'Why Choose Us?' })).toBeInTheDocument()
    expect(screen.getByText(/beauty & wellness/i)).toBeInTheDocument()
  })

  it('renders the four stat counters with labels', () => {
    render(<Intro />)
    const stats: ReadonlyArray<readonly [string, string]> = [
      ['+3500', 'Happy Clients'],
      ['12', 'New Locations'],
      ['+175', 'Great Employees'],
      ['56K', 'Instagram Followers'],
    ]
    for (const [value, label] of stats) {
      expect(screen.getByText(value)).toBeInTheDocument()
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })
})
