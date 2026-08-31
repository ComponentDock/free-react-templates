import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PortfolioGrid } from './PortfolioGrid'

describe('PortfolioGrid', () => {
  it('renders the section heading', () => {
    render(<PortfolioGrid />)
    expect(
      screen.getByRole('heading', { level: 2, name: /portfolio gallery/i }),
    ).toBeInTheDocument()
  })

  it('renders 6 portfolio cards', () => {
    render(<PortfolioGrid />)
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(6)
  })

  it('renders the subtitle', () => {
    render(<PortfolioGrid />)
    expect(screen.getByText(/explore our creative work collection/i)).toBeInTheDocument()
  })

  it('has the correct section id', () => {
    const { container } = render(<PortfolioGrid />)
    const section = container.querySelector('#portfolio')
    expect(section).toBeInTheDocument()
  })
})
