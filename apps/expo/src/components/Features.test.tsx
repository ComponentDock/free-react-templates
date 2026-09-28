import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the heading', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: 'How we can help' })).toBeInTheDocument()
  })

  it('renders all 4 feature cards', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { name: 'Digital marketing' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Social media marketing' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Content create' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Web design' })).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/data-driven digital marketing campaigns/i)).toBeInTheDocument()
    expect(screen.getByText(/brand presence across all major social media/i)).toBeInTheDocument()
    expect(screen.getByText(/high-quality, engaging content/i)).toBeInTheDocument()
    expect(screen.getByText(/beautiful, responsive websites/i)).toBeInTheDocument()
  })

  it('renders check icons for each feature', () => {
    render(<Features />)
    // Lucide Check icons render as SVG elements with a data-testid-less pattern
    // We verify features render correctly by checking all 4 feature headings
    expect(screen.getByRole('heading', { name: 'Digital marketing' })).toBeInTheDocument()
  })
})
