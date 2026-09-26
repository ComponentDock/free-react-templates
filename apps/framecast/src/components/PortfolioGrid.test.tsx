import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { PortfolioGrid } from './PortfolioGrid'

describe('PortfolioGrid', () => {
  it('renders 9 portfolio items', () => {
    render(<PortfolioGrid />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(9)
  })

  it('displays project titles on hover items', () => {
    render(<PortfolioGrid />)
    expect(screen.getByText('Brand Identity')).toBeInTheDocument()
    expect(screen.getByText('Mobile App Design')).toBeInTheDocument()
    expect(screen.getByText('Corporate Website')).toBeInTheDocument()
  })

  it('displays category labels', () => {
    render(<PortfolioGrid />)
    expect(screen.getByText('Branding')).toBeInTheDocument()
    expect(screen.getByText('UI/UX')).toBeInTheDocument()
  })

  it('renders the More Works link', () => {
    render(<PortfolioGrid />)
    expect(screen.getByRole('link', { name: 'More Works' })).toBeInTheDocument()
  })

  it('More Works link points to a valid href', () => {
    render(<PortfolioGrid />)
    const link = screen.getByRole('link', { name: 'More Works' })
    expect(link).toHaveAttribute('href', '#')
  })
})
