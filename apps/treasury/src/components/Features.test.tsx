import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders three feature cards', () => {
    render(<Features />)
    expect(screen.getByText('Money Savings')).toBeInTheDocument()
    expect(screen.getByText('Online Shopping')).toBeInTheDocument()
    expect(screen.getByText('Credit / Debit Cards')).toBeInTheDocument()
  })

  it('renders feature descriptions', () => {
    render(<Features />)
    expect(screen.getByText(/Smart savings plans/)).toBeInTheDocument()
    expect(screen.getByText(/Seamless digital payment/)).toBeInTheDocument()
    expect(screen.getByText(/Premium cards with exclusive/)).toBeInTheDocument()
  })
})
