import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MenuPricing } from './MenuPricing'

describe('MenuPricing', () => {
  it('shows the heading and menu items with prices', () => {
    render(<MenuPricing />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Menu Pricing')
    expect(screen.getByText('Italian Pizza')).toBeInTheDocument()
    expect(screen.getAllByText('$2.90').length).toBeGreaterThan(0)
    expect(screen.getByText('Hawaiian Special')).toBeInTheDocument()
    expect(screen.getAllByText('$3.50').length).toBeGreaterThan(0)
  })
})
