import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Contact } from './Contact'

async function fillValidForm(user: ReturnType<typeof userEvent.setup>) {
  await user.type(screen.getByLabelText('Name'), 'Jordan Lee')
  await user.type(screen.getByLabelText('Email'), 'jordan@example.com')
  await user.type(screen.getByLabelText('Subject'), 'Guest pitch')
  await user.type(screen.getByLabelText('Message'), 'I would love to share my founder story.')
}

describe('Contact', () => {
  it('renders the heading, subtitle, and all four fields', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { level: 2, name: /Let.s Connect/ })).toBeInTheDocument()
    expect(screen.getByText(/Guest suggestion, sponsorship inquiry/)).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Message')).toBeInTheDocument()
  })

  it('shows per-field errors when submitting an empty form', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: /Send Message/ }))
    const alerts = screen.getAllByRole('alert')
    expect(alerts).toHaveLength(4)
    expect(alerts[0]).toHaveTextContent('Please enter your name')
    expect(alerts[1]).toHaveTextContent('Please enter your email address')
    expect(alerts[2]).toHaveTextContent('Please enter a subject')
    expect(alerts[3]).toHaveTextContent('Please enter your message')
    expect(screen.queryByRole('status')).toBeNull()
  })

  it('flags an invalid email format', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText('Name'), 'Jordan Lee')
    await user.type(screen.getByLabelText('Email'), 'not-an-email')
    await user.type(screen.getByLabelText('Subject'), 'Hello')
    await user.type(screen.getByLabelText('Message'), 'Hi there')
    await user.click(screen.getByRole('button', { name: /Send Message/ }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address')
    expect(screen.queryByRole('status')).toBeNull()
  })

  it('shows the success status on a valid submit', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await fillValidForm(user)
    await user.click(screen.getByRole('button', { name: /Send Message/ }))
    expect(screen.getByRole('status')).toHaveTextContent(/Your message is on its way/)
    expect(screen.queryByRole('button', { name: /Send Message/ })).toBeNull()
  })

  it('shows the direct email link below the form', () => {
    render(<Contact />)
    expect(screen.getByRole('link', { name: 'hello@soundbite.fm' })).toHaveAttribute(
      'href',
      'mailto:hello@soundbite.fm',
    )
  })
})
