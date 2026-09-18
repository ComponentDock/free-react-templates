import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the section heading', () => {
    render(<Pricing />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Our Plans & Pricing/i }),
    ).toBeInTheDocument()
  })

  it('renders all three pricing tiers', () => {
    render(<Pricing />)
    expect(screen.getByText('Basic')).toBeInTheDocument()
    expect(screen.getByText('Standard')).toBeInTheDocument()
    expect(screen.getByText('Premium')).toBeInTheDocument()
  })

  it('renders prices', () => {
    render(<Pricing />)
    expect(screen.getByText('$29')).toBeInTheDocument()
    expect(screen.getByText('$59')).toBeInTheDocument()
    expect(screen.getByText('$99')).toBeInTheDocument()
  })

  it('renders feature lists with check/x icons', () => {
    render(<Pricing />)
    expect(screen.getAllByText(/Garden Service/).length).toBe(3)
    expect(screen.getAllByText(/Forest Planning/).length).toBe(3)
    expect(screen.getAllByText(/Garden Party/).length).toBe(3)
    expect(screen.getAllByText(/Preparing Landscape/).length).toBeGreaterThanOrEqual(2)
    expect(screen.getAllByText(/Garden Fence/).length).toBeGreaterThanOrEqual(1)
  })

  it('renders Get Started buttons', () => {
    render(<Pricing />)
    const buttons = screen.getAllByRole('button', { name: /Get Started/i })
    expect(buttons.length).toBe(3)
  })
})
