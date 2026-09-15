import { render, screen } from '@testing-library/react'
import { Features } from './Features'
import { describe, expect, it } from 'vitest'

describe('Features', () => {
  it('renders three feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Deal On Time')).toBeInTheDocument()
    expect(screen.getByText('Good Reviews')).toBeInTheDocument()
    expect(screen.getByText('24/7 Support')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/We respect your timeline/)).toBeInTheDocument()
    expect(screen.getByText(/Hundreds of satisfied clients/)).toBeInTheDocument()
    expect(screen.getByText(/Real estate doesn't follow office hours/)).toBeInTheDocument()
  })

  it('renders feature icons (svg elements)', () => {
    const { container } = render(<Features />)
    const svgs = container.querySelectorAll('svg')
    expect(svgs.length).toBe(3)
  })
})
