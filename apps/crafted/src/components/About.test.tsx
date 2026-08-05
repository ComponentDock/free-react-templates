import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading, blurb, and the four stat counters', () => {
    render(<About />)

    expect(
      screen.getByRole('heading', { level: 2, name: /Some Info About Us/ }),
    ).toBeInTheDocument()
    for (const [value, label] of [
      ['500+', 'Qualified Lawyer'],
      ['20,650+', 'Solved Cases'],
      ['2.5k+', 'Trusted Clients'],
      ['50+', 'Achievements'],
    ] as const) {
      expect(screen.getByText(value)).toBeInTheDocument()
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })
})
