import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReservationWizard } from './ReservationWizard'

describe('ReservationWizard', () => {
  it('starts on step 1 with the Book a Table heading', () => {
    render(<ReservationWizard />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Book a Table')
  })

  it('shows 1 / 3 indicator on step 1', () => {
    render(<ReservationWizard />)
    expect(screen.getByText('1 / 3')).toBeInTheDocument()
  })

  it('renders People, Date, and Time fields on step 1', () => {
    render(<ReservationWizard />)
    expect(screen.getByLabelText(/people/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/time/i)).toBeInTheDocument()
  })

  it('allows changing the people count', async () => {
    const user = userEvent.setup()
    render(<ReservationWizard />)
    const peopleSelect = screen.getByLabelText(/people/i)
    await user.selectOptions(peopleSelect, '4')
    expect(peopleSelect).toHaveValue('4')
  })

  it('allows changing the time hour', async () => {
    const user = userEvent.setup()
    render(<ReservationWizard />)
    const timeSelect = screen.getByLabelText(/time/i)
    await user.selectOptions(timeSelect, '3')
    expect(timeSelect).toHaveValue('3')
  })

  it('allows changing the time period via select', async () => {
    const user = userEvent.setup()
    render(<ReservationWizard />)
    // The period select is the second select in the time row
    const selects = screen.getAllByRole('combobox')
    const periodSelect = selects.find((el) => !el.id && el.querySelector('option[value="AM"]'))
    expect(periodSelect).toBeDefined()
    if (periodSelect) {
      await user.selectOptions(periodSelect, 'AM')
      expect(periodSelect).toHaveValue('AM')
    }
  })

  it('navigates to step 2 when NEXT is clicked with valid data', async () => {
    const user = userEvent.setup()
    render(<ReservationWizard />)

    const dateInput = screen.getByLabelText(/date/i)
    await user.clear(dateInput)
    await user.type(dateInput, '2025-12-25')

    await user.click(screen.getByRole('button', { name: /next/i }))

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Your Details')
    expect(screen.getByText('2 / 3')).toBeInTheDocument()
  })

  it('navigates back to step 1 from step 2', async () => {
    const user = userEvent.setup()
    render(<ReservationWizard />)

    const dateInput = screen.getByLabelText(/date/i)
    await user.clear(dateInput)
    await user.type(dateInput, '2025-12-25')
    await user.click(screen.getByRole('button', { name: /next/i }))

    expect(screen.getByText('2 / 3')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /back/i }))
    expect(screen.getByText('1 / 3')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Book a Table')
  })

  it('renders name, email, phone fields on step 2', async () => {
    const user = userEvent.setup()
    render(<ReservationWizard />)

    const dateInput = screen.getByLabelText(/date/i)
    await user.clear(dateInput)
    await user.type(dateInput, '2025-12-25')
    await user.click(screen.getByRole('button', { name: /next/i }))

    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument()
  })

  it('allows entering a phone number on step 2', async () => {
    const user = userEvent.setup()
    render(<ReservationWizard />)

    const dateInput = screen.getByLabelText(/date/i)
    await user.clear(dateInput)
    await user.type(dateInput, '2025-12-25')
    await user.click(screen.getByRole('button', { name: /next/i }))

    const phoneInput = screen.getByLabelText(/phone/i)
    await user.type(phoneInput, '555-1234')
    expect(phoneInput).toHaveValue('555-1234')
  })

  it('navigates to step 3 when NEXT is clicked from step 2', async () => {
    const user = userEvent.setup()
    render(<ReservationWizard />)

    // Step 1 -> Step 2
    const dateInput = screen.getByLabelText(/date/i)
    await user.clear(dateInput)
    await user.type(dateInput, '2025-12-25')
    await user.click(screen.getByRole('button', { name: /next/i }))

    // Step 2 -> Step 3
    await user.type(screen.getByLabelText(/full name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.click(screen.getByRole('button', { name: /next/i }))

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Confirm Booking')
    expect(screen.getByText('3 / 3')).toBeInTheDocument()
  })

  it('shows booking summary on step 3', async () => {
    const user = userEvent.setup()
    render(<ReservationWizard />)

    // Step 1 -> Step 2
    const dateInput = screen.getByLabelText(/date/i)
    await user.clear(dateInput)
    await user.type(dateInput, '2025-12-25')
    await user.click(screen.getByRole('button', { name: /next/i }))

    // Step 2 -> Step 3
    await user.type(screen.getByLabelText(/full name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.click(screen.getByRole('button', { name: /next/i }))

    // Verify summary shows
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('john@example.com')).toBeInTheDocument()
  })

  it('shows phone in summary on step 3 when provided', async () => {
    const user = userEvent.setup()
    render(<ReservationWizard />)

    // Step 1 -> Step 2
    const dateInput = screen.getByLabelText(/date/i)
    await user.clear(dateInput)
    await user.type(dateInput, '2025-12-25')
    await user.click(screen.getByRole('button', { name: /next/i }))

    // Step 2 -> Step 3
    await user.type(screen.getByLabelText(/full name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.type(screen.getByLabelText(/phone/i), '555-1234')
    await user.click(screen.getByRole('button', { name: /next/i }))

    expect(screen.getByText('555-1234')).toBeInTheDocument()
  })

  it('navigates back to step 2 from step 3', async () => {
    const user = userEvent.setup()
    render(<ReservationWizard />)

    // Step 1 -> Step 2
    const dateInput = screen.getByLabelText(/date/i)
    await user.clear(dateInput)
    await user.type(dateInput, '2025-12-25')
    await user.click(screen.getByRole('button', { name: /next/i }))

    // Step 2 -> Step 3
    await user.type(screen.getByLabelText(/full name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.click(screen.getByRole('button', { name: /next/i }))

    expect(screen.getByText('3 / 3')).toBeInTheDocument()

    // Back to step 2
    await user.click(screen.getByRole('button', { name: /back/i }))
    expect(screen.getByText('2 / 3')).toBeInTheDocument()
    expect(screen.getByLabelText(/full name/i)).toHaveValue('John Doe')
  })

  it('shows success message after confirming', async () => {
    const user = userEvent.setup()
    render(<ReservationWizard />)

    // Step 1 -> Step 2
    const dateInput = screen.getByLabelText(/date/i)
    await user.clear(dateInput)
    await user.type(dateInput, '2025-12-25')
    await user.click(screen.getByRole('button', { name: /next/i }))

    // Step 2 -> Step 3
    await user.type(screen.getByLabelText(/full name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email/i), 'john@example.com')
    await user.click(screen.getByRole('button', { name: /next/i }))

    // Confirm
    await user.click(screen.getByRole('button', { name: /confirm$/i }))

    expect(screen.getByText(/reservation confirmed/i)).toBeInTheDocument()
  })

  it('does not navigate forward if date is empty', async () => {
    const user = userEvent.setup()
    render(<ReservationWizard />)

    // Date is empty by default, try clicking NEXT
    const dateInput = screen.getByLabelText(/date/i)
    await user.clear(dateInput)

    await user.click(screen.getByRole('button', { name: /next/i }))
    // Should still be on step 1
    expect(screen.getByText('1 / 3')).toBeInTheDocument()
  })
})
