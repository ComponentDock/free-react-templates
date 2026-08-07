import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the heading and the four feature points', () => {
    render(<About />)

    expect(
      screen.getByRole('heading', {
        level: 2,
        name: 'The Most Popular And Number 1 Mail App.',
      }),
    ).toBeInTheDocument()

    for (const point of ['Smart.', 'User-Friendly.', 'Powerful.', 'Secure.']) {
      expect(screen.getByText(point)).toBeInTheDocument()
    }
  })
})
