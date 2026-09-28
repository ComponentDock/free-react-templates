import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BookTable } from './BookTable'

describe('BookTable', () => {
  it('renders the section heading', () => {
    render(<BookTable />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Book a Table')
  })

  it('renders the Reservation label', () => {
    render(<BookTable />)
    expect(screen.getByText('Reservation')).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<BookTable />)
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone Number')).toBeInTheDocument()
    expect(screen.getByText('Select Event')).toBeInTheDocument()
  })

  it('renders the Make Reservation button', () => {
    render(<BookTable />)
    expect(screen.getByText('Make Reservation')).toBeInTheDocument()
  })

  it('allows filling form fields', async () => {
    const user = userEvent.setup()
    render(<BookTable />)

    await user.type(screen.getByPlaceholderText('Your Name'), 'John Doe')
    expect(screen.getByPlaceholderText('Your Name')).toHaveValue('John Doe')

    await user.type(screen.getByPlaceholderText('Your Email'), 'john@example.com')
    expect(screen.getByPlaceholderText('Your Email')).toHaveValue('john@example.com')
  })

  it('submits the form and shows confirmation', async () => {
    const user = userEvent.setup()
    render(<BookTable />)

    await user.type(screen.getByPlaceholderText('Your Name'), 'John Doe')
    await user.type(screen.getByPlaceholderText('Your Email'), 'john@example.com')
    await user.type(screen.getByPlaceholderText('Phone Number'), '555-1234')
    const dateInput = screen.getByPlaceholderText('Date & Time')
    // Set date via nativeInputValueSetter to bypass browser validation
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,
      'value',
    )?.set
    nativeInputValueSetter?.call(dateInput, '2026-10-01T19:00')
    dateInput.dispatchEvent(new Event('input', { bubbles: true }))
    dateInput.dispatchEvent(new Event('change', { bubbles: true }))
    await user.selectOptions(screen.getByRole('combobox'), 'birthday')
    await user.click(screen.getByText('Make Reservation'))

    expect(screen.getByText(/Thank you for your reservation/)).toBeInTheDocument()
  })

  it('renders the image', () => {
    render(<BookTable />)
    expect(screen.getByRole('img', { name: /book a table/i })).toBeInTheDocument()
  })
})
