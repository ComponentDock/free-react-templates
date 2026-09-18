import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Contact } from './Contact'
import {
  contactPhone,
  contactEmail,
  contactAddress,
  contactFormNameLabel,
  contactFormEmailLabel,
  contactFormSubjectLabel,
  contactFormMessageLabel,
  contactFormSubmitLabel,
} from '../data'

describe('Contact', () => {
  it('renders contact info and form fields', () => {
    render(<Contact />)
    expect(screen.getByText(contactPhone)).toBeInTheDocument()
    expect(screen.getByText(contactEmail)).toBeInTheDocument()
    expect(screen.getByText(contactAddress)).toBeInTheDocument()

    expect(screen.getByPlaceholderText(contactFormNameLabel)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(contactFormEmailLabel)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(contactFormSubjectLabel)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(contactFormMessageLabel)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: contactFormSubmitLabel })).toBeInTheDocument()
  })

  it('has a background image with glowlens-contact seed', () => {
    render(<Contact />)
    const section = screen.getByPlaceholderText(contactFormNameLabel).closest('section')!
    expect(section.style.backgroundImage).toContain('glowlens-contact')
  })

  it('shows confirmation message after form submission', async () => {
    const user = userEvent.setup()
    render(<Contact />)
    await user.click(screen.getByRole('button', { name: contactFormSubmitLabel }))
    expect(screen.getByText(/Thank you/)).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: contactFormSubmitLabel })).not.toBeInTheDocument()
  })
})
