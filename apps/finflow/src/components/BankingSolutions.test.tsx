import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BankingSolutions } from './BankingSolutions'

describe('BankingSolutions', () => {
  it('renders the section heading', () => {
    render(<BankingSolutions />)
    expect(
      screen.getByRole('heading', { name: /Banking Solutions Is Our Priority/i }),
    ).toBeInTheDocument()
  })

  it('shows check-list items', () => {
    render(<BankingSolutions />)
    expect(screen.getByText(/Expert financial advice/i)).toBeInTheDocument()
    expect(screen.getByText(/Secure and reliable/i)).toBeInTheDocument()
    expect(screen.getByText(/Transparent fee structures/i)).toBeInTheDocument()
  })
})
