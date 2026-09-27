import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RegistrationForm } from './RegistrationForm'

describe('RegistrationForm', () => {
  it('renders the registration form heading', () => {
    render(<RegistrationForm />)
    expect(screen.getByRole('heading', { name: /registration info/i })).toBeInTheDocument()
  })

  it('renders all form fields', () => {
    render(<RegistrationForm />)
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Birthdate')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Registration Code')).toBeInTheDocument()
    expect(screen.getAllByRole('combobox')).toHaveLength(2)
  })

  it('renders the search button', () => {
    render(<RegistrationForm />)
    expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument()
  })

  it('renders gender and class as select dropdowns', () => {
    render(<RegistrationForm />)
    const selects = screen.getAllByRole('combobox')
    expect(selects).toHaveLength(2)
  })

  it('renders the heading with uppercase styling', () => {
    render(<RegistrationForm />)
    const heading = screen.getByRole('heading', { name: /registration info/i })
    expect(heading).toHaveClass('uppercase')
  })

  it('renders inputs with bottom border styling', () => {
    render(<RegistrationForm />)
    const nameInput = screen.getByPlaceholderText('Name')
    expect(nameInput.parentElement).toHaveClass('border-b')
  })

  it('allows typing in the name field', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
    render(<RegistrationForm />)
    await user.type(screen.getByPlaceholderText('Name'), 'John Doe')
    expect(screen.getByPlaceholderText('Name')).toHaveValue('John Doe')
  })

  it('allows typing in the birthdate field', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
    render(<RegistrationForm />)
    await user.type(screen.getByPlaceholderText('Birthdate'), '01/01/2000')
    expect(screen.getByPlaceholderText('Birthdate')).toHaveValue('01/01/2000')
  })

  it('allows typing in the registration code field', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
    render(<RegistrationForm />)
    await user.type(screen.getByPlaceholderText('Registration Code'), 'ABC123')
    expect(screen.getByPlaceholderText('Registration Code')).toHaveValue('ABC123')
  })

  it('allows selecting gender from dropdown', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
    render(<RegistrationForm />)
    const genderSelect = screen.getAllByRole('combobox')[0]!
    await user.selectOptions(genderSelect, 'Male')
    expect(genderSelect).toHaveValue('Male')
  })

  it('allows selecting class from dropdown', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
    render(<RegistrationForm />)
    const classSelect = screen.getAllByRole('combobox')[1]!
    await user.selectOptions(classSelect, 'Class 1')
    expect(classSelect).toHaveValue('Class 1')
  })

  it('submits without error', async () => {
    const user = (await import('@testing-library/user-event')).default.setup()
    render(<RegistrationForm />)
    await user.click(screen.getByRole('button', { name: /search/i }))
  })

  it('renders the green submit button', () => {
    render(<RegistrationForm />)
    const button = screen.getByRole('button', { name: /search/i })
    expect(button).toHaveClass('bg-brand')
    expect(button).toHaveClass('text-white')
  })
})
