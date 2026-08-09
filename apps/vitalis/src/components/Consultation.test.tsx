import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Consultation } from './Consultation'

describe('Consultation', () => {
  it('renders the heading, sub-heading, copy, and play button', () => {
    render(<Consultation />)
    expect(screen.getByRole('heading', { name: /consultation/i })).toBeInTheDocument()
    expect(screen.getByText(/find best doctors with/i)).toBeInTheDocument()
    expect(screen.getByText('VITALIS')).toBeInTheDocument()
    expect(screen.getByText(/30 years of experience in cosmetic surgery/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()
  })

  it('renders an appointment form with labeled fields and a submit button', () => {
    render(<Consultation />)
    const form = screen.getByRole('form', { name: /appointment form/i })
    expect(form).toBeInTheDocument()
    expect(screen.getByLabelText('Name')).toBeInTheDocument()
    expect(screen.getByLabelText('Phone')).toBeInTheDocument()
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
    expect(screen.getByLabelText('Service')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /book appointment/i })).toBeInTheDocument()
  })

  it('swaps the form for a success message on submit', async () => {
    const user = userEvent.setup()
    render(<Consultation />)
    await user.type(screen.getByLabelText('Name'), 'Jane Doe')
    await user.type(screen.getByLabelText('Phone'), '555-0100')
    await user.type(screen.getByLabelText('Email'), 'jane@example.com')
    await user.selectOptions(screen.getByLabelText('Service'), 'Facial Procedures')
    await user.click(screen.getByRole('button', { name: /book appointment/i }))

    expect(screen.getByRole('status')).toHaveTextContent(/thank you/i)
    expect(screen.queryByLabelText('Name')).not.toBeInTheDocument()
    expect(screen.queryByRole('form', { name: /appointment form/i })).not.toBeInTheDocument()
  })
})
