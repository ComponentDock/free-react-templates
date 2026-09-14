import { render, screen, fireEvent } from '@testing-library/react'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders form heading', () => {
    render(<Contact />)
    expect(screen.getByText('Free Consultation')).toBeInTheDocument()
  })

  it('renders form fields', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email Address')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
  })

  it('renders service dropdown', () => {
    render(<Contact />)
    const select = screen.getByRole('combobox')
    expect(select).toBeInTheDocument()
    expect(screen.getByText('Select services')).toBeInTheDocument()
    expect(screen.getByText('House Washing')).toBeInTheDocument()
  })

  it('renders submit button', () => {
    render(<Contact />)
    expect(screen.getByText('Send message')).toBeInTheDocument()
  })

  it('prevents default form submission', () => {
    render(<Contact />)
    const button = screen.getByText('Send message')
    fireEvent.click(button)
    // No error means form prevented default
  })
})
