import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CONTACT_BOXES } from '../data'
import { ContactSection } from './ContactSection'

describe('ContactSection', () => {
  it('renders the heading and the four dark info boxes', () => {
    render(<ContactSection />)
    expect(screen.getByRole('heading', { level: 2, name: 'Contact Me' })).toBeInTheDocument()
    for (const box of CONTACT_BOXES) {
      expect(screen.getByText(box.label)).toBeInTheDocument()
      expect(screen.getByText(box.value)).toBeInTheDocument()
    }
  })

  it('renders the validated contact form fields', () => {
    render(<ContactSection />)
    expect(screen.getByLabelText('Your Name')).toHaveAttribute('type', 'text')
    expect(screen.getByLabelText('Your Name')).toHaveAttribute('required')
    expect(screen.getByLabelText('Your Email')).toHaveAttribute('type', 'email')
    expect(screen.getByLabelText('Your Email')).toHaveAttribute('required')
    expect(screen.getByLabelText('Subject')).toHaveAttribute('required')
    expect(screen.getByLabelText('Message')).toHaveAttribute('required')
    expect(screen.getByRole('button', { name: 'Send Message' })).toBeInTheDocument()
  })

  it('swaps the form for a success message on submit', async () => {
    const user = userEvent.setup()
    render(<ContactSection />)
    await user.type(screen.getByLabelText('Your Name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Your Email'), 'jane@example.com')
    await user.type(screen.getByLabelText('Subject'), 'Photoshoot')
    await user.type(screen.getByLabelText('Message'), 'Hello there')
    await user.click(screen.getByRole('button', { name: 'Send Message' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thanks! Your message has been sent.')
    expect(screen.queryByLabelText('Your Name')).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Send Message' })).not.toBeInTheDocument()
  })
})
