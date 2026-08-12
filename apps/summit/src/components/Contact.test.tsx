import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { CONTACT_INFO } from '../data'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the heading and all four contact info rows', () => {
    render(<Contact />)
    expect(screen.getByText('Have Question?')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Contact Us' })).toBeInTheDocument()
    for (const info of CONTACT_INFO) {
      expect(screen.getByText(info.label)).toBeInTheDocument()
      expect(screen.getByRole('heading', { level: 6, name: info.value })).toBeInTheDocument()
    }
  })

  it('shows per-field errors when submitting an empty form', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: /Send Message/i }))
    expect(screen.getAllByRole('alert')).toHaveLength(5)
    expect(screen.getByText('Your name is required')).toBeInTheDocument()
    expect(screen.getByText('Please write a message')).toBeInTheDocument()
  })

  it('rejects an invalid email address', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText('E-mail'), 'not-an-email')
    await user.click(screen.getByRole('button', { name: /Send Message/i }))
    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument()
  })

  it('submits valid data and swaps to the success state', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.type(screen.getByLabelText('Your Name'), 'Jane')
    await user.type(screen.getByLabelText('Last Name'), 'Doe')
    await user.type(screen.getByLabelText('E-mail'), 'jane@example.com')
    await user.type(screen.getByLabelText('Your Number'), '(226) 446 9371')
    await user.type(screen.getByLabelText('Your Message'), 'Looking forward to the summit!')
    await user.click(screen.getByRole('button', { name: /Send Message/i }))
    expect(screen.getByRole('heading', { level: 4, name: 'Message Sent!' })).toBeInTheDocument()
    expect(screen.queryByLabelText('Your Message')).not.toBeInTheDocument()
    expect(screen.queryByRole('alert')).not.toBeInTheDocument()
  })
})
