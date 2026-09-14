import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the pricing heading and three pricing cards', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: /Pricing Plan/i })).toBeInTheDocument()
    // 3 identical plan names
    expect(screen.getAllByText('Standard')).toHaveLength(3)
    expect(screen.getAllByText('$50.00')).toHaveLength(3)
  })

  it('renders feature lists and book now buttons', () => {
    render(<Pricing />)
    // Features appear in each of the 3 plans
    expect(screen.getAllByText('2GB Bandwidth')).toHaveLength(3)
    expect(screen.getAllByText('24/7 Support')).toHaveLength(3)
    const bookButtons = screen.getAllByRole('link', { name: /Book Now/i })
    expect(bookButtons).toHaveLength(3)
  })
})
