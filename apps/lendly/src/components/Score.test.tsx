import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Score } from './Score'

describe('Score', () => {
  it('renders the heading, subline, and show-my-score pill', () => {
    render(<Score />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Calculate my Score' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText(
        "Check your credit reports as often as you want, it won't affect your scores.",
      ),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'show my score' })).toHaveAttribute('href', '#contact')
  })
})
