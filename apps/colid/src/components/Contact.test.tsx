import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

describe('Contact', () => {
  it('renders the contact details, form, social links, and copyright', () => {
    render(<Contact />)

    expect(screen.getByRole('heading', { level: 2, name: 'Contact with us' })).toBeInTheDocument()

    expect(screen.getByText('Address:')).toBeInTheDocument()
    expect(screen.getByText('Box 564, Disneyland USA')).toBeInTheDocument()
    expect(screen.getByText('Telephone:')).toBeInTheDocument()
    expect(screen.getByText(/\+880\*\*\*\*6495/)).toBeInTheDocument()
    expect(screen.getByText('E-mail:')).toBeInTheDocument()
    expect(screen.getByText(/youremail@example.com/)).toBeInTheDocument()

    expect(screen.getByLabelText('Your name')).toBeInTheDocument()
    expect(screen.getByLabelText('Your email')).toBeInTheDocument()
    expect(screen.getByLabelText('Subject')).toBeInTheDocument()
    expect(screen.getByLabelText('Your message')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()

    for (const social of ['Facebook', 'X', 'Instagram', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }

    expect(
      screen.getByText(`Copyright © ${new Date().getFullYear()} Colid. All rights reserved.`),
    ).toBeInTheDocument()
  })

  it('prevents the contact form from submitting a page reload', async () => {
    const user = userEvent.setup()
    render(<Contact />)

    await user.click(screen.getByRole('button', { name: 'Submit' }))

    expect(screen.getByRole('form', { name: 'Contact form' })).toBeInTheDocument()
  })
})
