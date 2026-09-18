import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Newsletter } from './Newsletter'
import { newsletter } from '../data'

describe('Newsletter', () => {
  it('renders the heading and email form', () => {
    render(<Newsletter />)
    expect(screen.getByText(newsletter.heading)).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: newsletter.placeholder })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: newsletter.ctaLabel })).toBeInTheDocument()
  })

  it('allows typing in the email input', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)
    const input = screen.getByRole('textbox', { name: newsletter.placeholder })
    await user.type(input, 'test@example.com')
    expect(input).toHaveValue('test@example.com')
  })

  it('has a form element wrapping the input and button', () => {
    render(<Newsletter />)
    const form = screen.getByRole('textbox', { name: newsletter.placeholder }).closest('form')
    expect(form).toBeInTheDocument()
    expect(form).toContainElement(screen.getByRole('button', { name: newsletter.ctaLabel }))
  })

  it('calls preventDefault on form submit', () => {
    render(<Newsletter />)
    const form = screen.getByRole('textbox', { name: newsletter.placeholder }).closest('form')!
    let prevented = false
    const listener = (e: Event) => {
      e.preventDefault()
      prevented = true
    }
    form.addEventListener('submit', listener)
    fireEvent.submit(form)
    expect(prevented).toBe(true)
    form.removeEventListener('submit', listener)
  })
})
