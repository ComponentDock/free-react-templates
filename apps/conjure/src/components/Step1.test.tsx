import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Step1 } from './Step1'

describe('Step1', () => {
  it('renders all registration fields', () => {
    render(<Step1 />)
    expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Phone Number')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Age')).toBeInTheDocument()
  })

  it('renders gender radios with Male preselected', () => {
    render(<Step1 />)
    expect(screen.getByLabelText('Male')).toBeChecked()
    expect(screen.getByLabelText('Female')).not.toBeChecked()
  })

  it('renders the consent checkbox pre-checked', () => {
    render(<Step1 />)
    expect(screen.getByRole('checkbox')).toBeChecked()
  })

  it('renders the consent text', () => {
    render(<Step1 />)
    expect(screen.getByText(/nor again is there anyone/i)).toBeInTheDocument()
  })
})
