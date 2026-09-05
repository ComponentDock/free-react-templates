import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { DropdownShowcase } from './DropdownShowcase'

describe('DropdownShowcase', () => {
  it('renders the heading', () => {
    render(<DropdownShowcase />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Dropdown #10')
  })

  it('renders the Request A Quote button', () => {
    render(<DropdownShowcase />)
    expect(screen.getByRole('button', { name: /request a quote/i })).toBeInTheDocument()
  })

  it('dropdown is closed initially', () => {
    render(<DropdownShowcase />)
    expect(screen.queryByText(/consultation/i)).not.toBeInTheDocument()
  })

  it('opens the dropdown when button is clicked', async () => {
    const user = userEvent.setup()
    render(<DropdownShowcase />)
    await user.click(screen.getByRole('button', { name: /request a quote/i }))
    expect(screen.getByText(/consultation/i)).toBeInTheDocument()
  })

  it('shows all form fields when dropdown is open', async () => {
    const user = userEvent.setup()
    render(<DropdownShowcase />)
    await user.click(screen.getByRole('button', { name: /request a quote/i }))

    expect(screen.getByPlaceholderText(/full name/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/email address/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/subject/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/message/i)).toBeInTheDocument()
  })

  it('shows the Send A Message button', async () => {
    const user = userEvent.setup()
    render(<DropdownShowcase />)
    await user.click(screen.getByRole('button', { name: /request a quote/i }))
    expect(screen.getByRole('button', { name: /send a message/i })).toBeInTheDocument()
  })

  it('closes the dropdown when clicking outside', async () => {
    const user = userEvent.setup()
    render(
      <div>
        <DropdownShowcase />
        <button type="button">Outside</button>
      </div>,
    )
    await user.click(screen.getByRole('button', { name: /request a quote/i }))
    expect(screen.getByText(/consultation/i)).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: /outside/i }))
    expect(screen.queryByText(/consultation/i)).not.toBeInTheDocument()
  })

  it('toggles dropdown on repeated clicks', async () => {
    const user = userEvent.setup()
    render(<DropdownShowcase />)
    const btn = screen.getByRole('button', { name: /request a quote/i })

    await user.click(btn)
    expect(screen.getByText(/consultation/i)).toBeInTheDocument()

    await user.click(btn)
    expect(screen.queryByText(/consultation/i)).not.toBeInTheDocument()
  })

  it('sets correct aria-expanded on button', async () => {
    const user = userEvent.setup()
    render(<DropdownShowcase />)
    const btn = screen.getByRole('button', { name: /request a quote/i })
    expect(btn).toHaveAttribute('aria-expanded', 'false')

    await user.click(btn)
    expect(btn).toHaveAttribute('aria-expanded', 'true')
  })

  it('allows typing in Full Name field', async () => {
    const user = userEvent.setup()
    render(<DropdownShowcase />)
    await user.click(screen.getByRole('button', { name: /request a quote/i }))

    const nameInput = screen.getByPlaceholderText(/full name/i)
    await user.type(nameInput, 'John Doe')
    expect(nameInput).toHaveValue('John Doe')
  })

  it('allows typing in Email Address field', async () => {
    const user = userEvent.setup()
    render(<DropdownShowcase />)
    await user.click(screen.getByRole('button', { name: /request a quote/i }))

    const emailInput = screen.getByPlaceholderText(/email address/i)
    await user.type(emailInput, 'john@example.com')
    expect(emailInput).toHaveValue('john@example.com')
  })

  it('allows typing in Subject field', async () => {
    const user = userEvent.setup()
    render(<DropdownShowcase />)
    await user.click(screen.getByRole('button', { name: /request a quote/i }))

    const subjectInput = screen.getByPlaceholderText(/subject/i)
    await user.type(subjectInput, 'Consultation')
    expect(subjectInput).toHaveValue('Consultation')
  })

  it('allows typing in Message field', async () => {
    const user = userEvent.setup()
    render(<DropdownShowcase />)
    await user.click(screen.getByRole('button', { name: /request a quote/i }))

    const messageInput = screen.getByPlaceholderText(/message/i)
    await user.type(messageInput, 'Hello there')
    expect(messageInput).toHaveValue('Hello there')
  })

  it('has aria-haspopup on the trigger button', () => {
    render(<DropdownShowcase />)
    const btn = screen.getByRole('button', { name: /request a quote/i })
    expect(btn).toHaveAttribute('aria-haspopup', 'true')
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<DropdownShowcase />)
    await user.click(screen.getByRole('button', { name: /request a quote/i }))

    const submitBtn = screen.getByRole('button', { name: /send a message/i })
    await user.click(submitBtn)
    // Form should not navigate or reload — submit is prevented
    expect(screen.getByText(/consultation/i)).toBeInTheDocument()
  })
})
