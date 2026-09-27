import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders the section heading', () => {
    render(<Features />)
    const headings = screen.getAllByRole('heading', { level: 2 })
    expect(headings.some((h) => h.textContent?.includes('Trusted by Thousands'))).toBe(true)
  })

  it('shows four feature cards', () => {
    render(<Features />)
    const titles = screen.getAllByRole('heading', { level: 3 })
    expect(titles.length).toBeGreaterThanOrEqual(4)
    expect(screen.getAllByText('Trusted by Thousands').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Wide Range of Properties')).toBeInTheDocument()
    expect(screen.getByText('Financing Made Easy')).toBeInTheDocument()
    expect(screen.getByText('Locked in Pricing')).toBeInTheDocument()
  })
})
