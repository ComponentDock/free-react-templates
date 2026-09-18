import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Pricing } from './Pricing'

describe('Pricing', () => {
  it('renders the pricing heading', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: /Our Pricing/i })).toBeInTheDocument()
  })

  it('displays all three pricing cards with correct names and prices', () => {
    render(<Pricing />)
    expect(screen.getByRole('heading', { name: 'Car Wash' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Detailing' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Wash & Detailing' })).toBeInTheDocument()
    expect(screen.getByText('$50.00')).toBeInTheDocument()
    expect(screen.getByText('$100.00')).toBeInTheDocument()
    expect(screen.getByText('$200.00')).toBeInTheDocument()
  })

  it('shows feature lists for each plan', () => {
    render(<Pricing />)
    expect(screen.getByText('Exterior hand wash')).toBeInTheDocument()
    expect(screen.getByText('Full exterior polish')).toBeInTheDocument()
    expect(screen.getByText('Complete exterior wash')).toBeInTheDocument()
  })

  it('has Get Started buttons', async () => {
    const user = userEvent.setup()
    render(<Pricing />)
    const buttons = screen.getAllByRole('button', { name: /Get Started/i })
    expect(buttons).toHaveLength(3)
    const first = buttons[0]
    if (first) await user.click(first)
  })
})
