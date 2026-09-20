import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Register from './Register'

describe('Register', () => {
  it('renders the section heading', () => {
    render(<Register />)
    expect(screen.getByRole('heading', { level: 2, name: /courses for free/i })).toBeInTheDocument()
  })

  it('renders the countdown heading', () => {
    render(<Register />)
    expect(screen.getByText(/next cohort starts in/i)).toBeInTheDocument()
  })

  it('renders 4 form fields', () => {
    render(<Register />)
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
  })

  it('renders the register button', () => {
    render(<Register />)
    expect(screen.getByRole('button', { name: /register now/i })).toBeInTheDocument()
  })

  it('allows typing in form fields', async () => {
    const user = userEvent.setup()
    render(<Register />)
    await user.type(screen.getByLabelText('Name'), 'John')
    expect(screen.getByLabelText('Name')).toHaveValue('John')
  })

  it('renders countdown values', () => {
    render(<Register />)
    expect(screen.getByText('04')).toBeInTheDocument()
    expect(screen.getByText('12')).toBeInTheDocument()
    expect(screen.getByText('30')).toBeInTheDocument()
    expect(screen.getByText('15')).toBeInTheDocument()
  })

  it('handles form submission', async () => {
    const user = userEvent.setup()
    render(<Register />)
    await user.type(screen.getByLabelText('Name'), 'John')
    await user.type(screen.getByLabelText('Email'), 'john@example.com')
    await user.click(screen.getByRole('button', { name: /register now/i }))
    expect(screen.getByLabelText('Name')).toHaveValue('John')
  })
})
