import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      /Features That Make Us Hero/i,
    )
  })

  it('renders all 6 feature cards', () => {
    render(<Features />)
    const titles = [
      'Architecture',
      'Interior Design',
      'Concept Design',
      'Lifetime Access',
      'Source File Included',
      'Live Support',
    ]
    for (const title of titles) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/Well-structured courses/i)).toBeInTheDocument()
    expect(screen.getByText(/Lifetime access/i)).toBeInTheDocument()
  })

  it('renders feature card icons (6 icons total)', () => {
    const { container } = render(<Features />)
    // Each feature card has an SVG icon (lucide renders as SVG)
    const svgs = container.querySelectorAll('svg')
    expect(svgs.length).toBeGreaterThanOrEqual(6)
  })
})
