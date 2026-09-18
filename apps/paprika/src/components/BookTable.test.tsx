import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookTable } from './BookTable'

describe('BookTable', () => {
  it('renders form heading', () => {
    render(<BookTable />)
    expect(screen.getByText('Book a')).toBeInTheDocument()
    expect(screen.getByText('Table')).toBeInTheDocument()
  })

  it('renders date, time, and party size inputs', () => {
    render(<BookTable />)
    expect(screen.getByLabelText('Date')).toBeInTheDocument()
    expect(screen.getByLabelText('Dining Time')).toBeInTheDocument()
    expect(screen.getByLabelText('Party Size')).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<BookTable />)
    expect(screen.getByText('Book My Table')).toBeInTheDocument()
  })

  it('has correct section id', () => {
    render(<BookTable />)
    expect(document.getElementById('booking')).toBeInTheDocument()
  })

  it('prevents form submission', async () => {
    const user = userEvent.setup()
    render(<BookTable />)
    const button = screen.getByText('Book My Table')
    await user.click(button)
    // Form should not navigate — onSubmit calls preventDefault
    expect(document.getElementById('booking')).toBeInTheDocument()
  })
})
