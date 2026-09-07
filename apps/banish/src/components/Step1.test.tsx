import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Step1 } from './Step1'

describe('Step1', () => {
  it('renders all registration fields', () => {
    render(<Step1 />)
    expect(screen.getByLabelText('First Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Last Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Address')).toBeInTheDocument()
    expect(screen.getByLabelText('Nation')).toBeInTheDocument()
  })

  it('renders the avatar image', () => {
    render(<Step1 />)
    expect(screen.getByAltText('Profile avatar')).toBeInTheDocument()
  })

  it('allows typing in fields', async () => {
    render(<Step1 />)
    const firstName = screen.getByLabelText('First Name')
    await userEvent.type(firstName, 'John')
    expect(firstName).toHaveValue('John')
  })

  it('has correct tabpanel role', () => {
    render(<Step1 />)
    expect(screen.getByRole('tabpanel', { name: /step 1/i })).toBeInTheDocument()
  })
})
