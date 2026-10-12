import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ContactForm } from './ContactForm'

describe('ContactForm', () => {
  it('renders a labelled square field set in two columns', () => {
    const { container } = render(<ContactForm />)

    expect(container.querySelector('section')).toHaveAttribute('id', 'contact')
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('E-mail')).toHaveAttribute('type', 'email')
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message').tagName).toBe('TEXTAREA')

    const name = screen.getByLabelText('Name')
    expect(name).toHaveClass('rounded-none', 'p-[15px]', 'text-[12px]')

    const form = container.querySelector('form')
    expect(form).toHaveClass('mt-[60px]')
    expect(container.querySelectorAll('.lg\\:w-6\\/12')).toHaveLength(2)
  })

  it('squares the 180px textarea and gives the submit an arrow glyph', () => {
    const { container } = render(<ContactForm />)

    expect(screen.getByLabelText('Message')).toHaveClass('h-[180px]')
    const submit = screen.getByRole('button', { name: /Send Message/ })
    expect(submit).toHaveClass('bg-brand', 'rounded-[25px]', 'uppercase')
    expect(container.querySelector('svg[aria-hidden="true"]')).toBeInTheDocument()
  })

  it('reports every empty field and blocks the submit', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.click(screen.getByRole('button', { name: /Send Message/ }))

    expect(screen.getByText('Enter your name.')).toBeInTheDocument()
    expect(screen.getByText('Enter a valid e-mail address.')).toBeInTheDocument()
    expect(screen.getByText('Enter a subject.')).toBeInTheDocument()
    expect(screen.getByText('Tell us a little about the project.')).toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveTextContent(
      'Please fix the highlighted fields and try again.',
    )
    expect(screen.getByLabelText('Name')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByLabelText('Name')).toHaveAttribute('aria-describedby', 'contact-name-error')
  })

  it('rejects a malformed e-mail address', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByLabelText('Name'), 'Ada')
    await user.type(screen.getByLabelText('E-mail'), 'ada@')
    await user.type(screen.getByLabelText('Subject'), 'Migration')
    await user.type(screen.getByLabelText('Message'), 'Move us over please.')
    await user.click(screen.getByRole('button', { name: /Send Message/ }))

    expect(screen.getByText('Enter a valid e-mail address.')).toBeInTheDocument()
    expect(screen.queryByRole('status')).toHaveTextContent('Please fix')
  })

  it('confirms a valid submission in a polite live region', async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    await user.type(screen.getByLabelText('Name'), 'Ada')
    await user.type(screen.getByLabelText('E-mail'), 'ada@example.com')
    await user.type(screen.getByLabelText('Subject'), 'Migration')
    await user.type(screen.getByLabelText('Message'), 'Move us over please.')
    await user.click(screen.getByRole('button', { name: /Send Message/ }))

    expect(screen.getByRole('status')).toHaveTextContent('Thanks Ada — your message is on its way.')
    expect(screen.queryByText('Enter your name.')).not.toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toHaveAttribute('aria-invalid', 'false')
    expect(screen.getByLabelText('Name')).not.toHaveAttribute('aria-describedby')
  })
})
