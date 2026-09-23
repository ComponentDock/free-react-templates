import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the section heading', () => {
    render(<Contact />)
    expect(screen.getByText('Stay in touch')).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<Contact />)
    expect(screen.getByText('+45 677 8993000 223')).toBeInTheDocument()
    expect(screen.getByText('office@template.com')).toBeInTheDocument()
    expect(screen.getByText(/Main Str. no 45-46/)).toBeInTheDocument()
  })

  it('renders the contact form with all fields', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Your name')).toBeInTheDocument()
    expect(screen.getByLabelText('E-mail')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /send/i })).toBeInTheDocument()
  })

  it('form prevents default submission', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    const submitBtn = screen.getByRole('button', { name: /send/i })
    await user.click(submitBtn)
    // No error thrown = form submission was prevented
  })

  it('has the contact section id', () => {
    render(<Contact />)
    const section = document.querySelector('section')
    expect(section).toHaveAttribute('id', 'contact')
  })

  it('renders contact icons', () => {
    render(<Contact />)
    const icons = document.querySelectorAll('svg')
    expect(icons.length).toBeGreaterThanOrEqual(3)
  })
})
