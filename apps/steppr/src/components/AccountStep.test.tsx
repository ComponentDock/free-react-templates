import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AccountStep } from './AccountStep'

describe('AccountStep', () => {
  const defaultProps = {
    data: { username: '', email: '', password: '', confirmPassword: '' },
    onChange: vi.fn(),
  }

  it('renders all account form fields', () => {
    render(<AccountStep {...defaultProps} />)

    expect(screen.getByLabelText('Username*')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address*')).toBeInTheDocument()
    expect(screen.getByLabelText('Password*')).toBeInTheDocument()
    expect(screen.getByLabelText('Confirm Password*')).toBeInTheDocument()
  })

  it('calls onChange when username is updated', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()

    render(<AccountStep {...defaultProps} onChange={onChange} />)

    await user.type(screen.getByLabelText('Username*'), 'j')

    expect(onChange).toHaveBeenCalledWith({
      username: 'j',
      email: '',
      password: '',
      confirmPassword: '',
    })
  })

  it('calls onChange when email is updated', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()

    render(<AccountStep {...defaultProps} onChange={onChange} />)

    await user.type(screen.getByLabelText('Email Address*'), 'j')

    expect(onChange).toHaveBeenCalledWith({
      username: '',
      email: 'j',
      password: '',
      confirmPassword: '',
    })
  })

  it('calls onChange when password is updated', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()

    render(<AccountStep {...defaultProps} onChange={onChange} />)

    await user.type(screen.getByLabelText('Password*'), 's')

    expect(onChange).toHaveBeenCalledWith({
      username: '',
      email: '',
      password: 's',
      confirmPassword: '',
    })
  })

  it('calls onChange when confirm password is updated', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()

    render(<AccountStep {...defaultProps} onChange={onChange} />)

    await user.type(screen.getByLabelText('Confirm Password*'), 's')

    expect(onChange).toHaveBeenCalledWith({
      username: '',
      email: '',
      password: '',
      confirmPassword: 's',
    })
  })

  it('pre-fills fields with provided data', () => {
    render(
      <AccountStep
        data={{
          username: 'jane',
          email: 'jane@test.com',
          password: 'pw',
          confirmPassword: 'pw',
        }}
        onChange={vi.fn()}
      />,
    )

    expect(screen.getByLabelText('Username*')).toHaveValue('jane')
    expect(screen.getByLabelText('Email Address*')).toHaveValue('jane@test.com')
    expect(screen.getByLabelText('Password*')).toHaveValue('pw')
    expect(screen.getByLabelText('Confirm Password*')).toHaveValue('pw')
  })

  it('has required attributes on required fields', () => {
    render(<AccountStep {...defaultProps} />)

    expect(screen.getByLabelText('Username*')).toBeRequired()
    expect(screen.getByLabelText('Email Address*')).toBeRequired()
    expect(screen.getByLabelText('Password*')).toBeRequired()
    expect(screen.getByLabelText('Confirm Password*')).toBeRequired()
  })
})
