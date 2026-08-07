import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('shows the section heading and four plans with prices and Select Plan buttons', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { level: 2, name: 'Pricing' })).toBeInTheDocument()

    for (const name of ['Starter', 'Basic', 'Pro', 'Unlimited']) {
      expect(screen.getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }
    for (const price of ['$9', '$27', '$74', '$140']) {
      expect(screen.getByText(price)).toBeInTheDocument()
    }
    expect(screen.getAllByText('per month')).toHaveLength(4)
    expect(screen.getAllByRole('link', { name: 'Select Plan' })).toHaveLength(4)
  })
})
