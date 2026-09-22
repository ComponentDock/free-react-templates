import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Register } from './Register'

describe('Register', () => {
  it('renders form fields and heading', () => {
    render(<Register />)
    expect(screen.getByRole('heading', { name: /register now/i })).toBeInTheDocument()
    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Mobile No*')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Get Started' })).toBeInTheDocument()
  })

  it('allows filling form fields', async () => {
    const user = userEvent.setup()
    render(<Register />)
    await user.type(screen.getByLabelText('First Name'), 'John')
    await user.type(screen.getByLabelText('Email Address'), 'john@example.com')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.type(screen.getByLabelText('Mobile No*'), '1234567890')
    expect(screen.getByLabelText('First Name')).toHaveValue('John')
    expect(screen.getByLabelText('Email Address')).toHaveValue('john@example.com')
  })

  it('submits form without error', async () => {
    const user = userEvent.setup()
    render(<Register />)
    await user.click(screen.getByRole('button', { name: 'Get Started' }))
  })
})
