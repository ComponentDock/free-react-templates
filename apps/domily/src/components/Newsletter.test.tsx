import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Newsletter } from './Newsletter'
import { NEWSLETTER } from '../data'

describe('Newsletter', () => {
  it('renders the dark band with photo, heading, input and gold subscribe button', () => {
    render(<Newsletter />)

    const section = screen.getByRole('region', { name: NEWSLETTER.heading })
    expect(section).toHaveClass('bg-navy-ink')

    expect(screen.getByRole('heading', { level: 2, name: NEWSLETTER.heading })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: NEWSLETTER.imageAlt })).toHaveAttribute(
      'src',
      NEWSLETTER.image,
    )

    const input = screen.getByRole('textbox', { name: 'Email address' })
    expect(input).toHaveAttribute('placeholder', NEWSLETTER.placeholder)
    expect(screen.getByRole('button', { name: NEWSLETTER.button })).toBeInTheDocument()
  })

  it('shows an error for an invalid email and keeps the form', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.type(screen.getByRole('textbox', { name: 'Email address' }), 'not-an-email')
    await user.click(screen.getByRole('button', { name: NEWSLETTER.button }))

    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address')
    expect(screen.getByRole('textbox', { name: 'Email address' })).toHaveAttribute(
      'aria-invalid',
      'true',
    )
  })

  it('shows a success state and unmounts the form for a valid email', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.type(screen.getByRole('textbox', { name: 'Email address' }), 'buyer@example.com')
    await user.click(screen.getByRole('button', { name: NEWSLETTER.button }))

    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing')
    expect(screen.queryByRole('textbox', { name: 'Email address' })).not.toBeInTheDocument()
  })

  it('clears the error once the user types again', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.type(screen.getByRole('textbox', { name: 'Email address' }), 'bad')
    await user.click(screen.getByRole('button', { name: NEWSLETTER.button }))
    expect(screen.getByRole('alert')).toBeInTheDocument()

    await user.type(screen.getByRole('textbox', { name: 'Email address' }), '@good.com')
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
