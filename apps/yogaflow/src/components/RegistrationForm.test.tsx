import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RegistrationForm } from './RegistrationForm'

describe('RegistrationForm', () => {
  it('renders the heading', () => {
    render(<RegistrationForm />)

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Make An Appointment')
  })

  it('renders name and email inputs', () => {
    render(<RegistrationForm />)

    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Mail')).toBeInTheDocument()
  })

  it('renders phone input and class select', () => {
    render(<RegistrationForm />)

    expect(screen.getByPlaceholderText('Phone')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Choose Your Class')).toBeInTheDocument()
  })

  it('renders three class options in the select', () => {
    render(<RegistrationForm />)

    const select = screen.getByDisplayValue('Choose Your Class')
    expect(select.querySelectorAll('option')).toHaveLength(4) // 1 disabled + 3 options
  })

  it('renders the message textarea', () => {
    render(<RegistrationForm />)

    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
  })

  it('renders the submit button with arrow icon', () => {
    render(<RegistrationForm />)

    const button = screen.getByRole('button', { name: /book now/i })
    expect(button).toHaveAttribute('type', 'submit')
  })

  it('allows typing in the name input', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    const nameInput = screen.getByPlaceholderText('Name')
    await user.type(nameInput, 'Jane Doe')
    expect(nameInput).toHaveValue('Jane Doe')
  })

  it('allows selecting a class option', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    const select = screen.getByDisplayValue('Choose Your Class')
    await user.selectOptions(select, 'Class 01')
    expect(select).toHaveValue('Class 01')
  })

  it('submits the form without crashing', async () => {
    const user = userEvent.setup()
    render(<RegistrationForm />)

    await user.click(screen.getByRole('button', { name: /book now/i }))
  })
})
