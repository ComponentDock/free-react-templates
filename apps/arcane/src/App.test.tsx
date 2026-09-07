import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'

describe('App', () => {
  it('renders the split-screen layout', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /book an appointment/i })).toBeInTheDocument()
  })

  it('shows Step 1 initially with Personal Info fields', () => {
    render(<App />)
    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument()
  })

  it('shows Back button is not visible on Step 1', () => {
    render(<App />)
    expect(screen.queryByRole('button', { name: /back/i })).not.toBeInTheDocument()
  })

  it('validates Step 1 - empty fields', async () => {
    render(<App />)
    const user = userEvent.setup()
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByText('Full name is required')).toBeInTheDocument()
    expect(screen.getByText('Email is required')).toBeInTheDocument()
    expect(screen.getByText('Phone number is required')).toBeInTheDocument()
  })

  it('validates Step 1 - invalid email', async () => {
    render(<App />)
    const user = userEvent.setup()
    await user.type(screen.getByLabelText(/full name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email address/i), 'not-an-email')
    await user.type(screen.getByLabelText(/phone number/i), '+1 555 1234')
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument()
  })

  it('advances to Step 2 with valid data', async () => {
    render(<App />)
    const user = userEvent.setup()
    await user.type(screen.getByLabelText(/full name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email address/i), 'john@example.com')
    await user.type(screen.getByLabelText(/phone number/i), '+1 555 1234')
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByRole('heading', { name: /booking details/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument()
  })

  it('shows Back button on Step 2', async () => {
    render(<App />)
    const user = userEvent.setup()
    await user.type(screen.getByLabelText(/full name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email address/i), 'john@example.com')
    await user.type(screen.getByLabelText(/phone number/i), '+1 555 1234')
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByRole('button', { name: /back/i })).toBeInTheDocument()
  })

  it('validates Step 2 - empty fields', async () => {
    render(<App />)
    const user = userEvent.setup()
    await user.type(screen.getByLabelText(/full name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email address/i), 'john@example.com')
    await user.type(screen.getByLabelText(/phone number/i), '+1 555 1234')
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByText('Date is required')).toBeInTheDocument()
    expect(screen.getByText('Time slot is required')).toBeInTheDocument()
    expect(screen.getByText('Service type is required')).toBeInTheDocument()
  })

  it('advances to Step 3 with valid booking data', async () => {
    render(<App />)
    const user = userEvent.setup()
    await user.type(screen.getByLabelText(/full name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email address/i), 'john@example.com')
    await user.type(screen.getByLabelText(/phone number/i), '+1 555 1234')
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.type(screen.getByLabelText(/date/i), '2026-10-01')
    await user.selectOptions(screen.getByLabelText(/time slot/i), '10:00')
    await user.selectOptions(screen.getByLabelText(/service type/i), 'consultation')
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByRole('heading', { name: /confirmation/i })).toBeInTheDocument()
  })

  it('shows summary on Step 3', async () => {
    render(<App />)
    const user = userEvent.setup()
    await user.type(screen.getByLabelText(/full name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email address/i), 'john@example.com')
    await user.type(screen.getByLabelText(/phone number/i), '+1 555 1234')
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.type(screen.getByLabelText(/date/i), '2026-10-01')
    await user.selectOptions(screen.getByLabelText(/time slot/i), '10:00')
    await user.selectOptions(screen.getByLabelText(/service type/i), 'consultation')
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('john@example.com')).toBeInTheDocument()
  })

  it('validates Step 3 - terms not accepted', async () => {
    render(<App />)
    const user = userEvent.setup()
    await user.type(screen.getByLabelText(/full name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email address/i), 'john@example.com')
    await user.type(screen.getByLabelText(/phone number/i), '+1 555 1234')
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.type(screen.getByLabelText(/date/i), '2026-10-01')
    await user.selectOptions(screen.getByLabelText(/time slot/i), '10:00')
    await user.selectOptions(screen.getByLabelText(/service type/i), 'consultation')
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('button', { name: /submit/i }))
    expect(screen.getByText('You must accept the terms')).toBeInTheDocument()
  })

  it('submits successfully after accepting terms', async () => {
    render(<App />)
    const user = userEvent.setup()
    await user.type(screen.getByLabelText(/full name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email address/i), 'john@example.com')
    await user.type(screen.getByLabelText(/phone number/i), '+1 555 1234')
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.type(screen.getByLabelText(/date/i), '2026-10-01')
    await user.selectOptions(screen.getByLabelText(/time slot/i), '10:00')
    await user.selectOptions(screen.getByLabelText(/service type/i), 'consultation')
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('checkbox', { name: /terms/i }))
    await user.click(screen.getByRole('button', { name: /submit/i }))
    expect(screen.getByRole('heading', { name: /booking confirmed/i })).toBeInTheDocument()
  })

  it('resets wizard on Start Over', async () => {
    render(<App />)
    const user = userEvent.setup()
    await user.type(screen.getByLabelText(/full name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email address/i), 'john@example.com')
    await user.type(screen.getByLabelText(/phone number/i), '+1 555 1234')
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.type(screen.getByLabelText(/date/i), '2026-10-01')
    await user.selectOptions(screen.getByLabelText(/time slot/i), '10:00')
    await user.selectOptions(screen.getByLabelText(/service type/i), 'consultation')
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('checkbox', { name: /terms/i }))
    await user.click(screen.getByRole('button', { name: /submit/i }))
    await user.click(screen.getByRole('button', { name: /start over/i }))
    expect(screen.getByLabelText(/full name/i)).toHaveValue('')
    expect(screen.getByLabelText(/email address/i)).toHaveValue('')
  })

  it('goes back to previous step', async () => {
    render(<App />)
    const user = userEvent.setup()
    await user.type(screen.getByLabelText(/full name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email address/i), 'john@example.com')
    await user.type(screen.getByLabelText(/phone number/i), '+1 555 1234')
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.click(screen.getByRole('button', { name: /back/i }))
    expect(screen.getByLabelText(/full name/i)).toHaveValue('John Doe')
  })

  it('preserves data when navigating back and forward', async () => {
    render(<App />)
    const user = userEvent.setup()
    await user.type(screen.getByLabelText(/full name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email address/i), 'john@example.com')
    await user.type(screen.getByLabelText(/phone number/i), '+1 555 1234')
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByRole('heading', { name: /booking details/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /back/i }))
    expect(screen.getByLabelText(/full name/i)).toHaveValue('John Doe')
    expect(screen.getByLabelText(/email address/i)).toHaveValue('john@example.com')
  })

  it('navigates from Step 3 back to Step 2 and forward again', async () => {
    render(<App />)
    const user = userEvent.setup()
    await user.type(screen.getByLabelText(/full name/i), 'John Doe')
    await user.type(screen.getByLabelText(/email address/i), 'john@example.com')
    await user.type(screen.getByLabelText(/phone number/i), '+1 555 1234')
    await user.click(screen.getByRole('button', { name: /next/i }))
    await user.type(screen.getByLabelText(/date/i), '2026-10-01')
    await user.selectOptions(screen.getByLabelText(/time slot/i), '10:00')
    await user.selectOptions(screen.getByLabelText(/service type/i), 'consultation')
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByRole('heading', { name: /confirmation/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /back/i }))
    expect(screen.getByRole('heading', { name: /booking details/i })).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /next/i }))
    expect(screen.getByRole('heading', { name: /confirmation/i })).toBeInTheDocument()
  })

  it('renders the footer with Component Dock link', () => {
    render(<App />)
    const footer = screen.getByRole('contentinfo')
    const link = within(footer).getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the left visual panel on desktop', () => {
    render(<App />)
    const visualPanel = document.querySelector('[aria-hidden="true"]')
    expect(visualPanel).toBeInTheDocument()
  })
})
