import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)
    expect(
      screen.getByRole('heading', { name: /Top Services That We Offers/i }),
    ).toBeInTheDocument()
  })

  it('renders at least three service cards with titles and blurbs', () => {
    render(<Services />)
    expect(screen.getByText(/Smart Kitchen Setup/i)).toBeInTheDocument()
    expect(screen.getByText(/Space Planning/i)).toBeInTheDocument()
    expect(screen.getByText(/Lighting Design/i)).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: /View Details/i }).length).toBeGreaterThanOrEqual(3)
  })
})
