import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { AdmissionForm } from './AdmissionForm'

describe('AdmissionForm', () => {
  it('renders the form title', () => {
    render(<AdmissionForm />)
    expect(screen.getByText('Apply for Admission')).toBeInTheDocument()
  })

  it('renders all input fields', () => {
    render(<AdmissionForm />)
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone Number')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email Address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Write an Application')).toBeInTheDocument()
  })

  it('renders the submit button', () => {
    render(<AdmissionForm />)
    expect(screen.getByRole('button', { name: 'Apply Now' })).toBeInTheDocument()
  })

  it('allows typing in input fields', async () => {
    const user = userEvent.setup()
    render(<AdmissionForm />)
    const firstNameInput = screen.getByPlaceholderText('First Name')
    await user.type(firstNameInput, 'John')
    expect(firstNameInput).toHaveValue('John')
  })

  it('allows typing in textarea', async () => {
    const user = userEvent.setup()
    render(<AdmissionForm />)
    const textarea = screen.getByPlaceholderText('Write an Application')
    await user.type(textarea, 'My application')
    expect(textarea).toHaveValue('My application')
  })

  it('submits the form without crashing', async () => {
    const user = userEvent.setup()
    render(<AdmissionForm />)
    await user.type(screen.getByPlaceholderText('First Name'), 'Jane')
    await user.click(screen.getByRole('button', { name: 'Apply Now' }))
  })
})
