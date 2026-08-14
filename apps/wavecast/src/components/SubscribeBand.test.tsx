import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SubscribeBand } from './SubscribeBand'

describe('SubscribeBand', () => {
  it('renders the white heading, paragraph, and transparent email input', () => {
    const { container } = render(<SubscribeBand />)

    expect(screen.getByRole('heading', { name: 'Subscribe' })).toBeInTheDocument()

    const section = container.querySelector('section') as HTMLElement
    expect(section.style.backgroundImage).toContain('picsum.photos/seed/wavecast-subscribe')
    const overlay = section.querySelector('[aria-hidden="true"]') as HTMLElement
    expect(overlay.className).toContain('bg-black/40')

    const input = screen.getByRole('textbox', { name: 'Email address' })
    expect(input).toHaveAttribute('placeholder', 'Enter Email')
    expect(input).toHaveAttribute('type', 'email')
    expect(screen.getByRole('button', { name: 'Send' })).toBeInTheDocument()
  })

  it('shows a validation message for an invalid email', async () => {
    const user = userEvent.setup()
    render(<SubscribeBand />)

    await user.type(screen.getByRole('textbox', { name: 'Email address' }), 'not-an-email')
    await user.click(screen.getByRole('button', { name: 'Send' }))

    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address.')
    expect(screen.getByRole('textbox', { name: 'Email address' })).toHaveAttribute(
      'aria-invalid',
      'true',
    )
  })

  it('shows the success state for a valid email and replaces the form', async () => {
    const user = userEvent.setup()
    render(<SubscribeBand />)

    await user.type(screen.getByRole('textbox', { name: 'Email address' }), 'sam@example.com')
    await user.click(screen.getByRole('button', { name: 'Send' }))

    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
    expect(screen.queryByRole('textbox', { name: 'Email address' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Send' })).not.toBeInTheDocument()
  })

  it('clears a previous error once the email becomes valid', async () => {
    const user = userEvent.setup()
    render(<SubscribeBand />)

    await user.click(screen.getByRole('button', { name: 'Send' }))
    expect(screen.getByRole('alert')).toBeInTheDocument()

    await user.type(screen.getByRole('textbox', { name: 'Email address' }), 'ok@example.com')
    await user.click(screen.getByRole('button', { name: 'Send' }))

    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
    expect(screen.getByRole('status')).toBeInTheDocument()
  })
})
