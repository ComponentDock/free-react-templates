import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the Portfolio section with 4 work entries', () => {
    render(<Portfolio />)

    const section = screen.getByRole('region', { name: /portfolio/i })
    expect(section).toBeInTheDocument()

    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
  })

  it('renders work titles visible on hover overlay', () => {
    render(<Portfolio />)
    expect(screen.getByText('Creative Branding')).toBeInTheDocument()
    expect(screen.getByText('E-Commerce Platform')).toBeInTheDocument()
    expect(screen.getByText('Mobile App UI')).toBeInTheDocument()
    expect(screen.getByText('Photography Showcase')).toBeInTheDocument()
  })

  it('renders category labels', () => {
    render(<Portfolio />)
    expect(screen.getByText('Design')).toBeInTheDocument()
    expect(screen.getByText('Development')).toBeInTheDocument()
    expect(screen.getByText('UI/UX')).toBeInTheDocument()
    expect(screen.getByText('Creative')).toBeInTheDocument()
  })
})
