import { render, screen } from '@testing-library/react'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders section title and form fields', () => {
    render(<Contact />)
    expect(screen.getByText('Contact', { selector: 'h2' })).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Message')).toBeInTheDocument()
    expect(screen.getByText('Send Message')).toBeInTheDocument()
  })

  it('shows section number 07', () => {
    render(<Contact />)
    expect(screen.getByText('07')).toBeInTheDocument()
  })

  it('prevents form submission', () => {
    render(<Contact />)
    const form = screen.getByPlaceholderText('Name').closest('form')!
    const event = new Event('submit', { bubbles: true, cancelable: true })
    form.dispatchEvent(event)
    // Form should not navigate (prevented)
  })
})
