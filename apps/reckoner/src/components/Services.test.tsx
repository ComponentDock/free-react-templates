import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'

describe('Services', () => {
  it('renders the section heading', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { name: 'What We Offer' })).toBeInTheDocument()
    expect(screen.getByText('Our Services')).toBeInTheDocument()
  })

  it('renders all service cards', () => {
    render(<Services />)

    expect(screen.getByRole('heading', { name: 'Tax Planning' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Financial Analysis' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Payroll Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Bookkeeping' })).toBeInTheDocument()
  })

  it('renders service descriptions', () => {
    render(<Services />)

    expect(
      screen.getByText(/Strategic tax planning to minimize your tax liability/),
    ).toBeInTheDocument()
    expect(screen.getByText(/Comprehensive financial analysis to understand/)).toBeInTheDocument()
    expect(screen.getByText(/Complete payroll management/)).toBeInTheDocument()
    expect(screen.getByText(/Professional bookkeeping services/)).toBeInTheDocument()
  })

  it('has proper ARIA attributes', () => {
    render(<Services />)

    const section = screen.getByRole('heading', { name: 'What We Offer' }).closest('section')
    expect(section).toHaveAttribute('id', 'services')
  })
})
