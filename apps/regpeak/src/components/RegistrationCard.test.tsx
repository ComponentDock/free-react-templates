import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { RegistrationCard } from './RegistrationCard'

describe('RegistrationCard', () => {
  it('renders the heading and all four form fields', () => {
    render(<RegistrationCard />)

    expect(screen.getByText('Register Form')).toBeInTheDocument()

    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email Address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Confirm Password')).toBeInTheDocument()
  })

  it('renders the Register button', () => {
    render(<RegistrationCard />)

    const button = screen.getByRole('button', { name: /register/i })
    expect(button).toHaveAttribute('type', 'submit')
  })

  it('allows typing in all input fields', async () => {
    const user = userEvent.setup()
    render(<RegistrationCard />)

    await user.type(screen.getByPlaceholderText('Your Name'), 'Jane Doe')
    await user.type(screen.getByPlaceholderText('Email Address'), 'jane@example.com')
    await user.type(screen.getByPlaceholderText('Password'), 'secret123')
    await user.type(screen.getByPlaceholderText('Confirm Password'), 'secret123')

    expect(screen.getByPlaceholderText('Your Name')).toHaveValue('Jane Doe')
    expect(screen.getByPlaceholderText('Email Address')).toHaveValue('jane@example.com')
    expect(screen.getByPlaceholderText('Password')).toHaveValue('secret123')
    expect(screen.getByPlaceholderText('Confirm Password')).toHaveValue('secret123')
  })

  it('submits the form without error', async () => {
    const user = userEvent.setup()
    render(<RegistrationCard />)

    await user.type(screen.getByPlaceholderText('Your Name'), 'Jane')
    await user.type(screen.getByPlaceholderText('Email Address'), 'jane@test.com')
    await user.type(screen.getByPlaceholderText('Password'), 'pass')
    await user.type(screen.getByPlaceholderText('Confirm Password'), 'pass')

    await user.click(screen.getByRole('button', { name: /register/i }))
  })

  it('renders the registration illustration images', () => {
    render(<RegistrationCard />)

    const images = screen.getAllByAltText('Registration illustration')
    expect(images.length).toBeGreaterThanOrEqual(1)
  })
})
