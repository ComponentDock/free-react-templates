import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the portfolio heading', () => {
    render(<Portfolio />)
    expect(screen.getByText('Portfolio')).toBeInTheDocument()
    expect(screen.getByText('Checkout a few of my works')).toBeInTheDocument()
  })

  it('renders 6 project items', () => {
    render(<Portfolio />)
    const viewProjectLinks = screen.getAllByText('View Project')
    expect(viewProjectLinks).toHaveLength(6)
  })

  it('renders project categories', () => {
    render(<Portfolio />)
    expect(screen.getByText('Illustration')).toBeInTheDocument()
    expect(screen.getAllByText('Application').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Web Design')).toBeInTheDocument()
    expect(screen.getByText('Animation')).toBeInTheDocument()
    expect(screen.getByText('Branding')).toBeInTheDocument()
  })

  it('renders project titles', () => {
    render(<Portfolio />)
    const titles = screen.getAllByText('Even the all-powerful Pointing has no control')
    expect(titles.length).toBeGreaterThan(0)
  })
})
