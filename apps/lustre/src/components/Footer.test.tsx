import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the heading, contact rows, social links, and comment form', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 2, name: 'Get in touch' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact Info' })).toBeInTheDocument()
    expect(
      screen.getByText('203 Fake St. Mountain View, San Francisco, California, USA'),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '+2 392 3929 210' })).toHaveAttribute(
      'href',
      'tel:+2393929210',
    )
    expect(screen.getByRole('link', { name: 'info@yourdomain.com' })).toHaveAttribute(
      'href',
      'mailto:info@yourdomain.com',
    )
    for (const social of ['Pinterest', 'Facebook', 'Twitter', 'Dribbble', 'Behance', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }
    expect(screen.getByRole('heading', { name: 'Leave a comment' })).toBeInTheDocument()
    for (const label of ['Name', 'E-mail', 'Subject', 'Message']) {
      expect(screen.getByLabelText(label)).toBeInTheDocument()
    }
    expect(screen.getByRole('button', { name: 'send message' })).toBeInTheDocument()
    expect(screen.getByText(new RegExp(`© ${new Date().getFullYear()} Lustre`))).toBeInTheDocument()
  })

  it('shows a confirmation after the comment form is submitted', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Name'), 'Jane Doe')
    await user.type(screen.getByLabelText('E-mail'), 'jane@example.com')
    await user.type(screen.getByLabelText('Subject'), 'Hello')
    await user.type(screen.getByLabelText('Message'), 'Thanks for everything!')
    await user.click(screen.getByRole('button', { name: 'send message' }))

    expect(screen.getByRole('status')).toHaveTextContent('Thank you! Your message has been sent.')
  })
})
