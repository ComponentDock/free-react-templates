import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('shows the heading and the three pricing plans with prices and features', () => {
    render(<Pricing />)

    expect(screen.getByRole('heading', { name: 'Affordable Packages' })).toBeInTheDocument()
    for (const name of ['Basic', 'Personal', 'Business']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
    for (const price of ['$49', '$79', '$109']) {
      expect(screen.getByText(price)).toBeInTheDocument()
    }
    expect(screen.getAllByText('5 Dog Walk')).toHaveLength(3)
    expect(screen.getAllByText('Free Supports')).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: 'Get Started' })).toHaveLength(3)
  })
})
