import { render, screen, fireEvent } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders "05 Get In Touch" subhead', () => {
    render(<Contact />)
    expect(screen.getByText('Get In Touch')).toBeInTheDocument()
  })

  it('renders address info', () => {
    render(<Contact />)
    // Address text is broken by <br> tags, so use partial match
    expect(screen.getByText(/1600 Amphitheatre Parkway/)).toBeInTheDocument()
    expect(screen.getByText(/Mountain View, California/)).toBeInTheDocument()
    expect(screen.getByText(/94043 US/)).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Contact />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<Contact />)
    expect(screen.getByRole('link', { name: /info@astra\.com/ })).toBeInTheDocument()
    expect(screen.getByText('+197 543 2345')).toBeInTheDocument()
    expect(screen.getByText('+197 123 9876')).toBeInTheDocument()
  })

  it('renders subscribe form', () => {
    render(<Contact />)
    expect(screen.getByRole('textbox', { name: /email address/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
  })

  it('form submission shows thanks message', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    const input = screen.getByRole('textbox', { name: /email address/i })
    await user.type(input, 'test@example.com')

    const submitBtn = screen.getByRole('button', { name: 'Subscribe' })
    await user.click(submitBtn)

    expect(screen.getByText('Thanks for subscribing!')).toBeInTheDocument()
    expect(screen.queryByRole('textbox', { name: /email address/i })).not.toBeInTheDocument()
  })

  it('does not subscribe with empty email', () => {
    render(<Contact />)

    const form = document.querySelector('form')!
    fireEvent.submit(form)

    expect(screen.queryByText('Thanks for subscribing!')).not.toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /email address/i })).toBeInTheDocument()
  })
})
