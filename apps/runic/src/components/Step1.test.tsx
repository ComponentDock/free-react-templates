import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Step1 } from './Step1'

const defaultProps = {
  activeField: null,
  onFocusField: vi.fn(),
  firstName: '',
  lastName: '',
  teamName: '',
  email: '',
  password: '',
  onFirstNameChange: vi.fn(),
  onLastNameChange: vi.fn(),
  onTeamNameChange: vi.fn(),
  onEmailChange: vi.fn(),
  onPasswordChange: vi.fn(),
}

describe('Step1', () => {
  it('renders all form fields', () => {
    render(<Step1 {...defaultProps} />)
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Team Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Create a Password')).toBeInTheDocument()
  })

  it('renders Choose Picture button', () => {
    render(<Step1 {...defaultProps} />)
    expect(screen.getByText(/choose picture/i)).toBeInTheDocument()
  })

  it('renders circular avatar placeholder', () => {
    const { container } = render(<Step1 {...defaultProps} />)
    const avatar = container.querySelector('.rounded-full.border-2')
    expect(avatar).toBeInTheDocument()
  })

  it('calls onFocusField when a field is focused', async () => {
    const user = userEvent.setup()
    const onFocusField = vi.fn()
    render(<Step1 {...defaultProps} onFocusField={onFocusField} />)
    await user.click(screen.getByPlaceholderText('Email'))
    expect(onFocusField).toHaveBeenCalledWith('email')
  })

  it('opens file picker when Choose Picture is clicked', async () => {
    const user = userEvent.setup()
    render(<Step1 {...defaultProps} />)
    const fileInput = screen.getByLabelText(/upload profile picture/i)
    const clickSpy = vi.spyOn(fileInput, 'click')
    await user.click(screen.getByText(/choose picture/i))
    expect(clickSpy).toHaveBeenCalled()
  })

  it('displays active field dot correctly', () => {
    render(<Step1 {...defaultProps} activeField="email" />)
    // Check that the email field's dot is active
    const emailInput = screen.getByPlaceholderText('Email')
    const emailDot = emailInput.closest('.relative')?.querySelector('span[aria-hidden="true"]')
    expect(emailDot).toHaveClass('bg-dot-active')
  })

  it('passes values to inputs', () => {
    render(<Step1 {...defaultProps} firstName="John" email="test@example.com" />)
    expect(screen.getByDisplayValue('John')).toBeInTheDocument()
    expect(screen.getByDisplayValue('test@example.com')).toBeInTheDocument()
  })

  it('calls onFocusField for team name', async () => {
    const user = userEvent.setup()
    const onFocusField = vi.fn()
    render(<Step1 {...defaultProps} onFocusField={onFocusField} />)
    await user.click(screen.getByPlaceholderText('Team Name'))
    expect(onFocusField).toHaveBeenCalledWith('teamName')
  })

  it('calls onTeamNameChange when typing', async () => {
    const user = userEvent.setup()
    const onTeamNameChange = vi.fn()
    render(<Step1 {...defaultProps} onTeamNameChange={onTeamNameChange} />)
    await user.type(screen.getByPlaceholderText('Team Name'), 'A')
    expect(onTeamNameChange).toHaveBeenCalled()
  })

  it('calls onFocusField for password', async () => {
    const user = userEvent.setup()
    const onFocusField = vi.fn()
    render(<Step1 {...defaultProps} onFocusField={onFocusField} />)
    await user.click(screen.getByPlaceholderText('Create a Password'))
    expect(onFocusField).toHaveBeenCalledWith('password')
  })

  it('calls onPasswordChange when typing', async () => {
    const user = userEvent.setup()
    const onPasswordChange = vi.fn()
    render(<Step1 {...defaultProps} onPasswordChange={onPasswordChange} />)
    await user.type(screen.getByPlaceholderText('Create a Password'), 's')
    expect(onPasswordChange).toHaveBeenCalled()
  })
})
