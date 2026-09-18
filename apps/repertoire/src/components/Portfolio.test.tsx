import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the portfolio section heading', () => {
    render(<Portfolio />)

    expect(screen.getByText('My Work')).toBeInTheDocument()
    expect(screen.getByText('Recent Work')).toBeInTheDocument()
  })

  it('renders all six portfolio items', () => {
    render(<Portfolio />)

    expect(screen.getByText('Brand Identity Project')).toBeInTheDocument()
    expect(screen.getByText('E-Commerce Redesign')).toBeInTheDocument()
    expect(screen.getByText('Mobile App Interface')).toBeInTheDocument()
    expect(screen.getByText('SEO Strategy Dashboard')).toBeInTheDocument()
    expect(screen.getByText('Corporate Website')).toBeInTheDocument()
    expect(screen.getByText('Social Media Campaign')).toBeInTheDocument()
  })

  it('renders project tags', () => {
    render(<Portfolio />)

    expect(screen.getAllByText('Branding').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('UI').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Development').length).toBeGreaterThanOrEqual(1)
  })

  it('renders action buttons with accessible labels', () => {
    render(<Portfolio />)

    expect(screen.getByRole('button', { name: 'Share Brand Identity Project' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'View Brand Identity Project' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Like Brand Identity Project' })).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Portfolio className="custom-class" />)
    expect(container.firstChild).toHaveClass('custom-class')
  })
})
