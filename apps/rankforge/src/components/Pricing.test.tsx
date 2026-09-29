import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading and three pricing cards with prices', () => {
    render(<Pricing />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Choose Your Very Best Pricing Plan' }),
    ).toBeInTheDocument()

    expect(screen.getByText('$5')).toBeInTheDocument()
    expect(screen.getByText('$20')).toBeInTheDocument()
    expect(screen.getByText('$30')).toBeInTheDocument()
  })

  it('lists features and Get Started buttons for each plan', () => {
    render(<Pricing />)

    for (const feature of [
      'Increase traffic 50%',
      'Social Media Marketing',
      '10 Free Optimization',
      '24/7 support',
    ]) {
      expect(screen.getAllByText(feature)).toHaveLength(3)
    }

    expect(screen.getAllByRole('link', { name: 'Get Started' })).toHaveLength(3)
  })
})
