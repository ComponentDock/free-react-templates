import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the three plans with prices and Get Started buttons', () => {
    render(<Pricing />)

    for (const name of ['Basic', 'Pro Plan', 'Ultimate Plan']) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }

    expect(screen.getByText('Free')).toBeInTheDocument()
    expect(screen.getByText('$10')).toBeInTheDocument()
    expect(screen.getByText('$20')).toBeInTheDocument()

    expect(screen.getAllByRole('link', { name: /Get Started/ })).toHaveLength(3)
  })
})
