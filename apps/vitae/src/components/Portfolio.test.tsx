import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Portfolio } from './Portfolio'
import { portfolio } from '../data'

describe('Portfolio', () => {
  it('renders the section title', () => {
    render(<Portfolio />)
    expect(screen.getByRole('heading', { level: 2, name: portfolio.heading })).toBeInTheDocument()
  })

  it('renders all nine portfolio images without filter tabs', () => {
    render(<Portfolio />)
    for (const item of portfolio.items) {
      expect(screen.getByRole('img', { name: item.title })).toHaveAttribute('src', item.image)
    }
    expect(screen.getAllByTestId(/^portfolio-/)).toHaveLength(9)
    expect(screen.queryByRole('button', { name: /filter/i })).not.toBeInTheDocument()
  })
})
