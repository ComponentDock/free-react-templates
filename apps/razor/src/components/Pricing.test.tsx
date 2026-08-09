import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('shows the "Price & Plans" heading and three plan cards with CTAs', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: 'Price & Plans' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Basic' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Standard' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Premium' })).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Get Started' })).toHaveLength(3)
  })
})
