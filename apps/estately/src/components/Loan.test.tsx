import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Loan } from './Loan'

describe('Loan', () => {
  it('renders the dark mortgage section with two inputs and a Submit button', () => {
    render(<Loan />)
    expect(
      screen.getByRole('heading', { name: 'See If You Qualify for a Mortgage' }),
    ).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your income')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Amount needed')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument()
  })

  it('does not navigate or reload when the form is submitted', async () => {
    const user = userEvent.setup()
    render(<Loan />)
    await user.type(screen.getByPlaceholderText('Your income'), '90000')
    await user.type(screen.getByPlaceholderText('Amount needed'), '400000')
    await user.click(screen.getByRole('button', { name: /submit/i }))
    expect(screen.getByDisplayValue('90000')).toBeInTheDocument()
    expect(screen.getByDisplayValue('400000')).toBeInTheDocument()
  })
})
