import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Portfolio } from './Portfolio'
import { portfolio } from '../data'

describe('Portfolio', () => {
  it('renders the kicker and heading', () => {
    render(<Portfolio />)
    expect(screen.getByText(portfolio.kicker)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: portfolio.heading })).toBeInTheDocument()
  })

  it('renders six gallery tiles with category and title', () => {
    render(<Portfolio />)
    expect(screen.getAllByRole('link')).toHaveLength(6)
    expect(screen.getAllByText(portfolio.category)).toHaveLength(6)
    expect(screen.getAllByRole('heading', { level: 3, name: portfolio.title })).toHaveLength(6)
  })
})
