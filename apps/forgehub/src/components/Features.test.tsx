import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Features } from './Features'

describe('Features', () => {
  it('renders 4 feature items', () => {
    render(<Features />)
    expect(screen.getByText('Strategy')).toBeInTheDocument()
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('Art Direction')).toBeInTheDocument()
    expect(screen.getByText('Copywriting')).toBeInTheDocument()
  })

  it('renders Read More links', () => {
    render(<Features />)
    const links = screen.getAllByText('Read More')
    expect(links.length).toBe(4)
  })

  it('has dark background', () => {
    const { container } = render(<Features />)
    const section = container.querySelector('section')
    expect(section?.className).toContain('bg-dark')
  })
})
