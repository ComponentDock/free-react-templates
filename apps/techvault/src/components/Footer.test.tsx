import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText('Got Questions? Call Us 24/7')).toBeInTheDocument()
    const phones = screen.getAllByText('+38 068 005 3570')
    expect(phones.length).toBeGreaterThanOrEqual(1)
  })

  it('renders Find it Fast links', () => {
    render(<Footer />)
    expect(screen.getByText('Find it Fast')).toBeInTheDocument()
    expect(screen.getByText('Computers & Laptops')).toBeInTheDocument()
    expect(screen.getByText('Smartphones & Tablets')).toBeInTheDocument()
  })

  it('renders Customer Care links', () => {
    render(<Footer />)
    expect(screen.getByText('Customer Care')).toBeInTheDocument()
    expect(screen.getByText('Your Account')).toBeInTheDocument()
    expect(screen.getByText('Return & Refunds')).toBeInTheDocument()
  })

  it('renders Newsletter section', () => {
    render(<Footer />)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your email address')).toBeInTheDocument()
  })

  it('prevents newsletter form submission', () => {
    render(<Footer />)
    const form = screen.getByPlaceholderText('Your email address').closest('form')!
    const submitEvent = new Event('submit', { bubbles: true, cancelable: true })
    const preventDefault = vi.fn()
    Object.defineProperty(submitEvent, 'preventDefault', { value: preventDefault })
    form.dispatchEvent(submitEvent)
    expect(preventDefault).toHaveBeenCalled()
  })
})
