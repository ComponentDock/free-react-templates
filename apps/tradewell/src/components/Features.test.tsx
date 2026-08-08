import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('shows the section heading', () => {
    render(<Features />)

    expect(
      screen.getByRole('heading', { name: 'Everything You Need to Invest Confidently' }),
    ).toBeInTheDocument()
  })

  it('shows all eight feature cards', () => {
    render(<Features />)

    for (const name of [
      'Commission-Free Trading',
      'Fractional Shares',
      'Instant Deposits',
      'Professional Research',
      'Award-Winning App',
      'Bank-Level Security',
      'Developer API',
      'Tax Optimization',
    ]) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }
  })
})
