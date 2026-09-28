import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the heading', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: 'Affordable pricing plan' })).toBeInTheDocument()
  })

  it('renders all 3 plan names', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: 'Basic' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Standard' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Premium' })).toBeInTheDocument()
  })

  it('renders all plan prices', () => {
    render(<Pricing />)
    const prices = screen.getAllByText('$700')
    expect(prices).toHaveLength(3)
  })

  it('renders Get Started Now buttons for each plan', () => {
    render(<Pricing />)
    const buttons = screen.getAllByRole('link', { name: 'Get Started Now' })
    expect(buttons).toHaveLength(3)
  })

  it('renders feature lists', () => {
    render(<Pricing />)
    expect(screen.getByText('5 Social Media Accounts')).toBeInTheDocument()
    expect(screen.getByText('10 Blog Posts/Month')).toBeInTheDocument()
    expect(screen.getByText('Basic SEO Audit')).toBeInTheDocument()
  })
})
