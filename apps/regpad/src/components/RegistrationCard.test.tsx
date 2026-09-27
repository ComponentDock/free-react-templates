import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { RegistrationCard } from './RegistrationCard'

describe('RegistrationCard', () => {
  it('renders the Registration Info heading', () => {
    render(<RegistrationCard />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Registration Info')
  })

  it('renders five form fields in correct order', () => {
    render(<RegistrationCard />)
    const nameInput = screen.getByPlaceholderText('Name')
    const birthdateInput = screen.getByPlaceholderText('Birthdate')
    const genderSelect = screen.getByRole('combobox')
    const emailInput = screen.getByPlaceholderText('Email')
    const phoneInput = screen.getByPlaceholderText('Phone')

    expect(nameInput).toBeInTheDocument()
    expect(birthdateInput).toBeInTheDocument()
    expect(genderSelect).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(phoneInput).toBeInTheDocument()

    // Check order: Name appears before Birthdate, etc.
    expect(
      nameInput.compareDocumentPosition(birthdateInput) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
    expect(
      birthdateInput.compareDocumentPosition(genderSelect) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
    expect(
      genderSelect.compareDocumentPosition(emailInput) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
    expect(
      emailInput.compareDocumentPosition(phoneInput) & Node.DOCUMENT_POSITION_FOLLOWING,
    ).toBeTruthy()
  })

  it('renders gender select with disabled placeholder option', () => {
    render(<RegistrationCard />)
    const select = screen.getByRole('combobox')
    const options = select.querySelectorAll('option')
    expect(options).toHaveLength(4)
    expect(options[0]).toHaveTextContent('Gender')
    expect(options[0]).toBeDisabled()
    expect(options[1]).toHaveTextContent('Male')
    expect(options[2]).toHaveTextContent('Female')
    expect(options[3]).toHaveTextContent('Other')
  })

  it('renders a calendar icon next to birthdate', () => {
    render(<RegistrationCard />)
    const birthdateInput = screen.getByPlaceholderText('Birthdate')
    const container = birthdateInput.closest('div')
    expect(container).toBeTruthy()
    // The calendar icon is an SVG inside the same container
    const svg = container!.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })

  it('renders a Submit button', () => {
    render(<RegistrationCard />)
    const submitButton = screen.getByRole('button', { name: /submit/i })
    expect(submitButton).toBeInTheDocument()
    expect(submitButton).toHaveAttribute('type', 'submit')
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    const preventDefault = vi.fn()
    render(<RegistrationCard />)

    const form = document.querySelector('form')!
    form.addEventListener('submit', (e) => {
      e.preventDefault = preventDefault
    })

    await user.click(screen.getByRole('button', { name: /submit/i }))
    expect(preventDefault).toHaveBeenCalled()
  })

  it('has accessible labels on all inputs', () => {
    render(<RegistrationCard />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Birthdate')).toBeInTheDocument()
    expect(screen.getByLabelText('Gender')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
  })

  it('renders a photo placeholder image', () => {
    render(<RegistrationCard />)
    const photo = screen.getByRole('img', { name: /registration event photo/i })
    expect(photo).toBeInTheDocument()
  })

  it('allows typing in form fields', async () => {
    const user = userEvent.setup()
    render(<RegistrationCard />)

    await user.type(screen.getByPlaceholderText('Name'), 'John Doe')
    expect(screen.getByPlaceholderText('Name')).toHaveValue('John Doe')

    await user.type(screen.getByPlaceholderText('Email'), 'john@example.com')
    expect(screen.getByPlaceholderText('Email')).toHaveValue('john@example.com')

    await user.type(screen.getByPlaceholderText('Phone'), '555-1234')
    expect(screen.getByPlaceholderText('Phone')).toHaveValue('555-1234')
  })

  it('allows selecting gender', async () => {
    const user = userEvent.setup()
    render(<RegistrationCard />)

    const select = screen.getByRole('combobox')
    await user.selectOptions(select, 'female')
    expect(select).toHaveValue('female')
  })
})
