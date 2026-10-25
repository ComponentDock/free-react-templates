import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Newsletter } from './Newsletter'
import { newsletter } from '../data'

describe('Newsletter', () => {
  it('holds a borderless white field beside a white subscribe button', () => {
    render(<Newsletter />)

    const field = screen.getByLabelText('Your E-mail')
    expect(field).toHaveAttribute('placeholder', newsletter.placeholder)
    expect(field).toHaveClass('h-[57px]', 'bg-white', 'border-0', 'uppercase')
    expect(screen.getByRole('button', { name: newsletter.button })).toHaveClass(
      'h-[57px]',
      'min-w-[164px]',
      'bg-white',
    )
    expect(screen.getByRole('status')).toHaveTextContent('')
  })

  it('blocks an address it cannot reply to', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.type(screen.getByLabelText('Your E-mail'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: newsletter.button }))

    expect(screen.getByText('Use an e-mail address we can reply to.')).toBeInTheDocument()
    expect(screen.getByLabelText('Your E-mail')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.getByLabelText('Your E-mail')).toHaveAttribute(
      'aria-describedby',
      'newsletter-error',
    )
    expect(screen.getByRole('status')).toHaveTextContent('')
  })

  it('confirms a valid address and clears the field', async () => {
    const user = userEvent.setup()
    render(<Newsletter />)

    await user.type(screen.getByLabelText('Your E-mail'), 'studio@modeline.com')
    await user.click(screen.getByRole('button', { name: newsletter.button }))

    expect(screen.getByRole('status')).toHaveTextContent(
      'You are on the list — the next lookbook lands in your inbox.',
    )
    expect(screen.getByLabelText('Your E-mail')).toHaveValue('')
    expect(screen.queryByText('Use an e-mail address we can reply to.')).not.toBeInTheDocument()
  })
})
