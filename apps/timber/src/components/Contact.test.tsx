import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the section heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: /Get in Touch!/i })).toBeInTheDocument()
  })

  it('renders the contact form', () => {
    render(<Contact />)
    expect(screen.getByRole('form', { name: /contact form/i })).toBeInTheDocument()
  })

  it('renders name, email, and message fields', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument()
  })

  it('renders a submit button', () => {
    render(<Contact />)
    expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument()
  })

  it('updates name on input', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    const input = screen.getByPlaceholderText('Your Name')
    await user.type(input, 'John')
    expect(input).toHaveValue('John')
  })

  it('updates email on input', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    const input = screen.getByPlaceholderText('Your Email')
    await user.type(input, 'john@example.com')
    expect(input).toHaveValue('john@example.com')
  })

  it('updates message on input', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    const textarea = screen.getByPlaceholderText('Your Message')
    await user.type(textarea, 'Hello')
    expect(textarea).toHaveValue('Hello')
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    const form = screen.getByRole('form', { name: /contact form/i })
    let submitted = false
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      submitted = true
    })
    await user.click(screen.getByRole('button', { name: /send message/i }))
    expect(submitted).toBe(true)
  })
})
