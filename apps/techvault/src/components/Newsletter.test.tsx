import { render, screen } from '@testing-library/react'
import { Newsletter } from './Newsletter'

describe('Newsletter', () => {
  it('renders the section title', () => {
    render(<Newsletter />)
    expect(screen.getByText('Sign up for Newsletter')).toBeInTheDocument()
  })

  it('renders the email input', () => {
    render(<Newsletter />)
    expect(screen.getByPlaceholderText('Enter your email address')).toBeInTheDocument()
  })

  it('renders the subscribe button', () => {
    render(<Newsletter />)
    expect(screen.getByText('Subscribe')).toBeInTheDocument()
  })

  it('prevents default form submission', () => {
    render(<Newsletter />)
    const form = screen.getByPlaceholderText('Enter your email address').closest('form')!
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true })
    const preventDefault = vi.fn()
    Object.defineProperty(submitEvent, 'preventDefault', { value: preventDefault })
    form.dispatchEvent(submitEvent)
    expect(preventDefault).toHaveBeenCalled()
  })
})
