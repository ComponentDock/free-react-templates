import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/Choose a plan/)
  })

  it('renders 3 pricing plans', () => {
    render(<Pricing />)
    expect(screen.getByText('Silver')).toBeInTheDocument()
    expect(screen.getByText('Gold')).toBeInTheDocument()
    expect(screen.getByText('Platinum')).toBeInTheDocument()
  })

  it('displays correct prices', () => {
    render(<Pricing />)
    const prices50 = screen.getAllByText('$50.00')
    expect(prices50).toHaveLength(2)
    const prices100 = screen.getAllByText('$100.00')
    expect(prices100).toHaveLength(1)
  })

  it('shows Most Popular badge on Gold plan', () => {
    render(<Pricing />)
    expect(screen.getByText('Most Popular')).toBeInTheDocument()
  })

  it('renders feature lists for each plan', () => {
    render(<Pricing />)
    const features = screen.getAllByText('2 TB of space')
    expect(features).toHaveLength(3)
  })

  it('renders Get Started buttons for each plan', () => {
    render(<Pricing />)
    const buttons = screen.getAllByRole('link', { name: /get started/i })
    expect(buttons).toHaveLength(3)
  })
})
